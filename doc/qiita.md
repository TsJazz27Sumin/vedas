# Qiita用の記事

# タイトル
【React x Django】日本の電力を見える化するアプリケーションを作って公開してみた。

# はじめに

こんにちは。現在、株式会社パネイルでソフトウェアエンジニアをやっている@TsJazz27Suminです。SIerから転職して３ヶ月目に突入しました。

今回は、転職してからほぼ趣味で作ったアプリケーションが会社公認コンテンツとして公開されることになったので、その技術的なまとめ記事になります。

アプリケーション自体のリンクは、こちらです。
！TODO：リンク！

# きっかけ

転職したばかりということもあって、パネイルのコア技術であるPython・Djangoあたりを勉強していたのですが、やはり勉強ばかりしていてもおもしろくなく、何か作れないかなーと思っていました。

そんな折、一般送配電事業者が需給実績データをオープンデータとして公開していることを知り、「おっ、PythonのPandasとか使って大量データさばくのおもしろそう」「Reactとか使ってグリグリ動くデータ分析ツールにするとおもしろそう」ってことで作りました。

# 技術構成
## フロントエンド
 - Framework : React 16.11.0
 - Language : javascript(es6)

## サーバーサイド
 - Framework : Django 3.0
 - Language : Python 3.8.0

## デプロイ環境
 - AWS
   - CloudFront
   - S3
   - EC2
     - NGINX
     - Gunicorn

# React
## はじめに
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

今回、自分はチャートの出力条件を整理するためにcustom hooksを作りました。具体的にいうと、

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

### axios: 0.19.0,
### lodash: 4.17.15,
### query-string: 6.9.0,
### react: 16.8.6,
### react-device-detect: 1.11.14,
### react-dom: 16.8.6,
### react-ga: 2.7.0,
### react-router-dom: 5.1.2,
### react-scripts: 3.3.0,
### react-share: 3.0.1,
### recharts: 1.8.5,
### styled-components: 4.4.1

# Django
## はじめに
# AWS
## はじめに
# 最後に
