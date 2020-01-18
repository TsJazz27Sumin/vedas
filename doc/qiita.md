# Qiita用の記事

# タイトル
【React x Django】日本の電力を見える化するWebアプリケーションを作って公開してみた。

# はじめに

こんにちは。現在、株式会社パネイルでソフトウェアエンジニアをやっている@TsJazz27Suminです。SIerから転職して３ヶ月目に突入しました。

今回は、転職してからほぼ趣味で作ったWebアプリケーションが会社公認コンテンツとして公開されることになったので、その技術的なまとめ記事になります。

アプリケーション自体のリンクは、こちらです。
https://vedas.cloud/

# きっかけ

転職したばかりということもあって、パネイルのコア技術であるPython・Djangoあたりを勉強していたのですが、やはり勉強ばかりしていてもおもしろくなく、何か作れないかなーと思っていました。

そんな折、一般送配電事業者が需給実績データをオープンデータとして公開していることを知り、「おっ、PythonのPandasとか使って大量データさばくのおもしろそう」「Reactとか使ってグリグリ動くデータ分析ツールにするとおもしろそう」ってことで作りました。

ReactもPythonも多くのライブラリが世界中の人たちによって作られており、いろいろと組み合わせながら実装するのは、非常に楽しかったです。この記事が少しでも皆様のお役に立てば幸いです。

# 技術構成
## フロントエンド
 - Framework : React 16.11.0
 - Language : javascript(es6)

## サーバーサイド
 - Framework : Django 3.0
 - Language : Python 3.8.0

## デプロイ環境
 - AWS
   - WAF
   - CloudFront
   - S3
   - Network Load Balancer
   - EC2
     - NGINX
     - Gunicorn

# React
## Full Stack Open 2019
すでに日本でも紹介されている記事を見かけますが、The University of Helsinkiの[Full Stack Open 2019](https://fullstackopen.com/en/)、これはほんと分かりやすいです。特にhooksの使い方は、簡単な課題をいくつか解いていく中で身についた感じです。

ちと実用レベルなことをやりだすと、ここにある内容だけでは十分ではなかった感じですが、基礎的なところを学ぶにはオススメです。

Reduxの記事とか読んで「Reactっておもしろそうだけど、状態管理とか大変そう。。」と敬遠していたのですが、hooksから入ったらそんなこともなかったです。

## hooks
今回、主に実装した中で使っているのは、useState, useCallback, useEffectの3つです。

今回のアプリケーションの中でいうと、チャートの出力条件を指定するところで結構、使っています。

```js
    const [tepcoChecked, setTepcoChecked] = useState(false));
    const handleTepcoChange = useCallback((newChecked) => {
        setTepcoChecked(newChecked);
    }, []);
```

例えば、上のコードは、チャートの出力対象として東京電力管内が選択されているかという状態を宣言しているものです。useStateで選択している（true）、選択していない（false）を表す変数tepcoCheckedとセッターのsetTepcoCheckedを宣言しています。

そして、tepcoCheckedのvalueがonChangeした時に実行される関数handleTepcoChangeをuseCallbackで宣言しています。この例では、実際に実行されるのは、セッターのsetTepcoCheckedです。

useEffect自体は、対象のcomponentが読み込まれた時に実行したい処理を定義しています。そういったケースがそんなになかったので、useState, useCallbackほど使っていません。

今回のアプリケーションの中でいうと、例えば、Usageのサンプルケースがクリックされた際に、ヒーローヘッダーをスルーして一気にチャート表示部分にスクロールさせています。

```js
  useEffect(() => {
    if (qs.case !== undefined){
      window.scrollTo(0, 1300);
    }
  },// eslint-disable-next-line 
  [])
```

その他は、特定のcomponentが読み込まれた際にログを出したりといった具合です。基本的にhooksを使っているといっても、useState, useCallbackを多用する形で、状態管理周りの学習コストはそんなに高くないかな、と今回作ってみて感じました。

管理する状態の数が少ないうちは、素のuseState, useCallbackでよいのですが、今回、チャートの出力条件がカテゴリー別に10近くなるものもあり、そのまま書くとメインのcomponentのjsにこんな感じで書くことになります。

```js
    const [hepcoChecked, setHepcoChecked] = useState(false);
    const handleHepcoChange = useCallback((newChecked) => {
        setHepcoChecked(newChecked);
    }, []);
    const [tohokuepcoChecked, setTohokuepcoChecked] = useState(false);
    const handleTohokuepcoChange = useCallback((newChecked) => {
        setTohokuepcoChecked(newChecked);
    }, []);
    const [rikudenChecked, setRikudenChecked] = useState(false);
    const handleRikudenChange = useCallback((newChecked) => {
        setRikudenChecked(newChecked);
    }, []);
    const [tepcoChecked, setTepcoChecked] = useState(false);
    const handleTepcoChange = useCallback((newChecked) => {
        setTepcoChecked(newChecked);
    }, []);
    //...以降続く...
```

うう、こんなのが１つのjsファイルにズラズラ並ぶなんて見るに堪えない。。ということでcustom hooksを作って、ある程度カテゴリーごとにまとめることにしました。

## custom hooks
>フック (hook) は React 16.8 で追加された新機能です。state などの React の機能を、クラスを書かずに使えるようになります。
>https://ja.reactjs.org/docs/hooks-custom.html

今回、自分はチャートの出力条件を整理するためにcustom hooksを作りました。
具体的にいうと、

 1. 期間
 2. 電力エリア
 3. 電力リソース

の3つそれぞれの条件カテゴリーにcustom hooksを作っています。

こうすることでuseState, useCallbackの列挙が緩和されてコードの見通しが良くなりました。あとは概念的な話ですが、状態をすべてフラットに扱うのではなく、いくつかのカテゴリーごとに分類することで理解しやすい構造になったと思います。

分割する前は、

 1. 期間 2
 2. 電力エリア 10
 3. 電力リソース 10

の合計22ぐらいのuseState, useCallbackのセットが並んでいたので。。。最初は、custom hooksを知らなかったので、存在を知ったときは救世主感がありました。

## 使用しているライブラリ
### @shopify/polaris: 4.8.0
[ShopifyのPolaris](https://polaris.shopify.com/)からReact Componentを一部使用しています。Shopifyは、カナダ発のEC関連企業で、Polarisというのは、彼らのデザインシステムのプロダクト名です。

今回、公開版を作る前のversion1としてPolarisのComponentを組み合わせて作ってみましたが、Componentの充実ぶりに感動しました。Polarisのサイトでは、Component利用のexampleも分かりやすく記述されており、とても参考になります。

また、[design guideline](https://polaris.shopify.com/design/colors)も充実しており、UI設計の考え方も非常に参考にさせていただきました。今回、公開版については、弊社のデザイナーに考えてもらったので、Polaris色は薄くなってしまったのですが、サクッといい感じに作りたいときはオススメです。

ただ、一歩踏み込んで独自色を出そうとすると、PolarisのComponentのCSSを上書きしたり、ちょっと無理してる感が出てしまうので課題感はあります。

一例としてSelect Boxは、公開版もPolarisのComponentを利用していますが、こんな感じで上書きしています。

```css
.Polaris-Select {
  position: relative !important;

  height: 51px !important;
  width: 140px !important;
  
  padding-top: 6% !important;
  padding-left: 8% !important;
}
```

`!important`で上書きはあまりやりたくないのですが、構造的にはPolarisのComponentを使いたく、しかしデザインは合わない、ということで苦肉の策で実装しています。

### [axios: 0.19.0](https://www.npmjs.com/package/axios)
Djangoで作ったサーバーサイドのAPIをコールするために使っています。
ここらへんは、Ajax使ってWebアプリを作ってきた人は、馴染みやすいところかと思います。

一例として今回は、チャート表示用の元データを取得する処理で使用しています。
GetメソッドでURLと集計単位（unit）と期間（from, to）を指定して、サーバーサイドの処理を呼び出しています。

```js
const get = (unit, from, to) => {
    const request = axios.get(baseUrl + 'get?unit=' + unit + '&from=' + from + '&to=' + to)
    return request.then(response => response.data).catch((err) => {
            console.error(err);
            return "err";
    });
}
```

### [lodash: 4.17.15](https://www.npmjs.com/package/lodash)
イベントを間引くために使用しています。今回のアプリケーションの具体例でいうと、スライダーで期間を指定する部分で使っています。

```js
const debouncedHandleChange = debounce(
    (unit, from, to, value) => {
        if (unit === "y" || unit === "ym" || unit === "ymd") {
            japanEnergyService
                .get(unit, from, to)
                .then(initialData => {
                    setData(initialData);
                    setIsLoading(false);
                });
        }
    },
    500
);
```

スライダーでグリグリ動かして、何にもケアしていないとイベントが連続的に発生します。今回、期間を変えたらデータを取りに行くようにしていたので、イベントの発生と共にサーバーへのアクセスも発生して、処理が重くなっていたので間引きました。

上の例では、lodashのdebounceで対象の処理を囲んで一定の間隔（500）で待つようにしています。この間隔の範囲で次のリクエストが来たら処理は実行されず間引かれます。

### [query-string: 6.9.0](https://www.npmjs.com/package/query-string)
クエリーパラメーターを受け取るのに使用しています。今回のアプリケーションの具体例でいうと、`xxx/?lang=jp`とかUsageのサンプルから遷移する際の`case=1`とかです。

```js
import queryString from 'query-string';
import App from './App'

ReactDOM.render(
  <Router>
    <Route render={ (props) => 
      <App 
          qs={queryString.parse(props.location.search)}
      />
    }/>
  </Router>, 
  document.getElementById("root")
);
```

index.jsでこんな感じでparseを呼び出しているだけです。
あとは、受け取ったcomponent側で`qs.lang`や`qs.case`といった形でパラメーターを参照する形です。

### [react-device-detect: 1.11.14](https://www.npmjs.com/package/react-device-detect)
ライブラリのネーミング通りdeviceのタイプを判定するのに使っています。今回のアプリケーションの具体例でいうと、モバイル用にCSSの付け替えをしているので、componentの読み込み時にモバイルかどうか見ています。

```js
import { isMobile } from "react-device-detect";

if (isMobile) {
    
}
```

importでisMobileを宣言してそのまま使うだけで分かりやすいです。
isMoblie以外にもosName, browserName, deviceTypeなどUserAgentから拾えるものは、一通り揃っています。

UserAgentのパース処理なども自前で書く必要もないので便利なライブラリです。

### [react-ga: 2.7.0](https://github.com/react-ga/react-ga)
GoogleのAnaliticsをReactで使うために導入しています。
今回のアプリケーションでは、pageviewとevent trackingで使用しています。

```js
  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });
```

useEffectと組み合わせて特定のcomponent読み込み時に実行しています。

### [react-share: 3.0.1](https://www.npmjs.com/package/react-share)

SNS用のシェアボタンを配置するのに使用しています。
今回のアプリケーションでは、facebook, twitter, line, weiboを対象としました。

```js
    <FacebookShareButton url={current_url}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton url={current_url}
        hashtags={["パネイル", "Panair", "Vedas", "電力見える化"]}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>

      <LineShareButton url={current_url}>
        <LineIcon size={size} round />
      </LineShareButton>

      <WeiboShareButton url={current_url}>
        <img width='100%' src={weibo_icon} alt="weibo_icon"/>
      </WeiboShareButton>
```

こういった形で基本的にシェアされたいURLと、twitterとかであればハッシュタグなどオプションを指定するだけです。今回、使用できたバージョンだとweiboのアイコンがなかったので画像指定をしています。

これだけの記述でSNSのシェアアイコンがサクッと並びます。

### [recharts: 1.8.5](http://recharts.org/en-US)

需給実績のチャートを出すために使っています。今回は、シンプルな[LineChart](http://recharts.org/en-US/examples/SimpleLineChart)だけですが、他にも[AreaChart](http://recharts.org/en-US/examples/SimpleAreaChart)・[BarChart](http://recharts.org/en-US/examples/SimpleBarChart)・[PieChart](http://recharts.org/en-US/examples/TwoLevelPieChart)など多彩なチャートコンポーネントが用意されています。

```js
<ResponsiveContainer width={isMobile ? '100%' : '95%'} aspect={aspect}>
      <LineChart data={props.energy_data}
        margin={{ top: 30, right: 30, left: 30, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line unit={unit_word} type="monotone" name={dict.solar} key="solar" dataKey="solar" stroke="#F49342" />
      </LineChart>
    </ResponsiveContainer>
```

`data={props.energy_data}`でコンポーネントが要求しているJSON形式のデータを渡しています。レスポンシブにするために`ResponsiveContainer`で囲っていますが、ほぼrechartsのサイトにあるサンプルコードに近いです。

### [styled-components: 4.4.1](https://www.styled-components.com/)

今回、CSSをそのまま書くことはせず、9割はstyled-componentsを使って各コンポーネントに閉じる形でStyleを定義しました。残りの1割は、SVGアニメーションの記述だったり、styled-componentsを使うとフォーム部品の挙動が微妙になるので局所的にCSSを定義して使っています。

```js
const getStyledComponents = () => {

  let ContentTitle = styled.div`
  padding: 2% 0% 2% 1.5%;
  margin:  0% 0% 0% 0%;
  `;

  if (isMobile) {
    ContentTitle = styled(ContentTitle)`
    padding-left: 38%;
    margin-top: 3%;
    `;
  }

  return {
    ContentTitle : ContentTitle
  };
}
```

一例です。きれいにPCとモバイルのStyleを分けてしまうかは、今回悩んだのですが、PCを基本にモバイルの差分だけ記述して上書きにしています。paddingとmarginがスタイリングされたDivタグをコンポーネントとして返すメソッドになります。

styled-componentsの良いところは、なんと言ってもCSSの定義がコンポーネントの中に閉じられるところだと感じました。普通にCSSを書いていくと、グローバルに一意なNameをつけてBEMなり意識して書いていかざるをえず、なかなか管理がつらい部分がありました。

Sass、LESS、StylusなどのCSSプリプロセッサを使用するのも一案だと思うのですが、Reactのコンポーネント単位で画面の部品を管理していく世界とは、どうも合わない気がして、今回、styled-componentsを導入してみました。

AtomicDesignとか意識して、どの粒度のコンポーネントでどういった種類のStyleを定義すべきか、を整理して実装するまでに今回至っていません。そのためstyled-componentsがReactのStylingのベストなのか、正直判断がつかない段階です。

ただ、１つ言えるのは普通にズラズラCSSを書いていくよりは、コンポーネント単位でまとまっているので、コードの見通しは良くなった実感がありました。

# Django
## [pandas==0.25.3](https://pypi.org/project/pandas/)

[こちらのブログ](https://note.nkmk.me/pandas/)を大変参考にさせていただきました。今回のアプリケーションでは、Pandasを使って需給実績のデータを読み込み・加工・出力しています。

各送配電事業者が公表しているデータは、CSV or EXCELですが、pandasを使うと簡単に読み込み・加工・出力ができるので今回初めて使ってみて驚きました。特にdataframeの形式でデータを扱えるので、集計処理をさせるのにもいちいち細かいロジックを書かずに済む点も魅力です。

```python
    def sum_group_by_year_and_month(cls, data_frame):
        df_ym = data_frame.set_index([data_frame.index.year, data_frame.index.month])
        df_ym.index.names = ['year', 'month']
        df_ym.sort_index(inplace=True)

        try:
            result = df_ym.sum(
                level=['year', 'month']
            )[
                [
                    'demand',
                    'nuclear',
                    'thermal',
                    'hydro',
                    'geothermal',
                    'biomass',
                    'solar',
                    'solar_output_control',
                    'wind',
                    'wind_output_control',
                    'pumping',
                    'interconnection',
                    'total_supply_capacity'
                ]
            ]
        except Exception as e:
            raise e
        return DataFrameFunction.to_float_and_round(result).to_json()
```

上記は一例ですが、年月単位で合計値を集計させている部分です。手続き的にforで足し合わせていくのではなく、宣言的に集計軸と使う項目を指定すればいいので、見た感じも分かりやすく直感的に使える良いライブラリだなと、今回実装して感じました。C#だとlinqがsql likeにデータを扱えるので割と近いかもしれません。

今回、処理フロー的には、大きく２つ分かれます。

【事前のデータ準備】

1. 各送配電事業のデータ（csv, excel）をダウンロード。
2. ダウンロードしたデータをdata frame形式に変換。（Pandas）
3. 集計処理がしやすいようにデータを加工。（Pandas）
4. 加工後のデータをPickle形式で保存。（Pandas）


【Web UIからのデータ利用】
1. Reactのフロントエンドアプリケーションからデータをリクエスト。
2. Pickle形式で保存されたデータをdata frame形式に変換。（Pandas）
3. 集計処理を実行。（Pandas）
4. data frame形式からjson形式に変換。（Pandas）
5. json形式でフロントエンドにreturnして、画面描画。

このようにほぼサーバーサイドの処理はpandasを使って構築している感じです。
Pythonでロジックらしいロジックを書いている部分は、各送配電事業からのデータダウンロードぐらいです。

そのせいかPythonのコードよりもReactのフロントエンド部分のコード量が圧倒的に多く、VedasはGithubのリポジトリ上、HTMLで構成されたアプリケーションと認識されているようです。

現在、HTML：76.1%, JavaScript：15.9%, Python：7.3%、Other：0.7%となっています。こんなにPythonの構成比が低いのは、フロントエンドを凝った作りにしているということもあると思いますが、メインのデータ分析処理をpandasで作ったからだと考えています。

## DB周り

今回、データベースは使用していません。理由はいくつかありますが、

1. 認証不要なオープンなアプリケーションのためユーザ管理などデータがいらない。
2. 分析・加工対象のデータは、pandasで扱いやすいようにPickle形式で保存している。
3. その他、多少のパラメータ群はわざわざRDBで管理せずともjson形式のファイルで管理すれば十分。

ということでNo RDBの構成にしています。

結果的にAWS上でRDSとか使わずに住んでいるのでランニングコストもその分お得です。

## [django-cors-headers==3.2.0](https://pypi.org/project/django-cors-headers/)

今回、Djangoで作ったAPIをReactのフロントエンドアプリケーションからリクエストさせるため、開発中にcorsが発生しました。その対策としてdjango-cors-headersを導入しています。

```py
CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
    'https://vedas.cloud'
)
```

こんな感じでsettings.pyとかに記載してあげると、CORSになっても許可してくれます。

## [requests==2.22.0](https://pypi.org/project/requests/2.2.0/)

需給実績のファイルを取得する部分で使っています。

```py
    def get_decoded_data(cls, url):
        response = urllib.request.urlopen(url)
        if response.getcode() == 200:
            response.close()
            content = requests.get(url).content
            return content.decode('sjis')
        else:
            response.close()
            raise Exception(f'{url} is not found.')
```

URLをgetで指定して取得できたcontent＝ファイルという感じです。

# AWS
## 構成
 - AWS
   - WAF
   - CloudFront
   - S3
   - Network Load Balancer
   - EC2
     - NGINX
     - Gunicorn

Reactのフロントエンドアプリケーションは、S3にデプロイしてCloudFrontでキャッシュさせています。Djangoのサーバーサイドアプリケーションは、EC2上にデプロイしてAPIとして利用させる形です。

## 通信
Vedasにアクセスしていただくと分かりますが、HTTPSで公開しています。最近、割とGoogleがHTTPS以外のサイトを認めないという風潮なので乗っかりました。

HTTPSのフロントエンドアプリケーションからサーバーサイドのAPIを叩きにいくと、こちらもHTTPSをじゃないとMixed Contentということで怒られます。具体的には、axiosでhttpでコールした際にエラーが出ます。

対応策としては、API側もHTTPS化するのですが、今回選択肢が３つありました
1. NGINXでHTTPSの設定を行う。
2. DjangoでHTTPSの設定を行う。
3. Load BalancerでHTTPSの設定を行う。

この中で３を選んだのは、

1. 証明書の管理をAWSにまとめたかった。
2. AWSでLBをかませておいた方がスケールアウトしやすい。

というところです。

## AWS環境構築にあたってお世話になったサイト

 - [AWS EC2作成からSSH接続](https://qiita.com/gurensouen/items/7382c2d14763436466d2)
 - [ssh-add で Could not open a connection to your authentication agent が出るときの対処法](https://qiita.com/ytheta/items/cbbd0b833c19784dfa1e)
 - [AES EC2上でsshを使ってgit clone を成功させるまでの手順](https://qiita.com/konuma1022/items/986eb58d4b94bef0c0a5)
 - [EC2サーバにPython3環境構築](https://qiita.com/tisk_jdb/items/01bd6ef9209acc3a275f)
 - [Python3.7入れる時に `No module named '_ctypes'` エラー](http://saruhei1989.hatenablog.com/entry/2019/04/06/090000)
 - [AWSにDjangoアプリケーションをデプロイ(Nginx, gunicorn, postgresql)](https://qiita.com/pokotsun/items/1272479e36c5146c6609)
 - [Djangoの既存プロジェクトをec2にデプロイ](https://qiita.com/kur/items/fb75354ee53671c79614)
 - [CentOS 7 の systemctl について](https://labs.precs.co.jp/2014/12/16/75/)
 - [nginx起動、再起動](https://qiita.com/Kaisyou/items/dadf6fe9ee93fb69e76c)
 - [他のプロセスがポートを占有してnginxを再起動できない](https://qiita.com/Yu-s/items/64c54def20e5fa64edd1)
 - [Reactで作ったWebアプリをGitHubで管理してS3に自動デプロイする](https://s8a.jp/react-github-aws-s3-auto-deploy)
 - [CloudFrontのキャッシュをすぐにクリアする方法](https://www.aruse.net/entry/2018/10/08/090631)
 - [CloudFrontでS3のウェブサイトをSSL化する](https://qiita.com/jasbulilit/items/73d70a01a5d3b520450f)
 - [NLB (Network Load Balancer)の作成メモ](https://qiita.com/rubytomato@github/items/e15e0a508b9fbec526e0)
 - [ELB(https) + nginx でヘルスチェックがこける問題](https://qiita.com/ameyamashiro/items/63793a02d66b6c48ec09)

# 最後に

実際にアプリケーションを作ることで、アウトプットしながらインプットして、さらにインプットをそのままアウトプットするというサイクルを今回、かなり高速に回すことになりました。

やっぱり勉強のためにコードを書くのではなく、誰かの役に立ちそうなアプリケーションを作るでは、圧倒的な違いがあると今回感じました。React x Djangoで今回アプリケーションを構築しましたが、今までの自分がJavaやC#で作ってきたWebアプリケーションと違う世界で非常に刺激があり、毎日コードを書くのが楽しみでした。

世界中の優秀なエンジニアが作り上げてきた技術を使って、何かを作るということは、こんなにおもしろいものかと改めて感じた年末年始でした。