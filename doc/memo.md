# 環境構築メモ
 1. EC2インスタンスの作成
 2. セキュリティグループの設定
 3. ElasticIPの紐付け
 4. [自動停止の設定](https://qiita.com/kosuge/items/dfaf7e6586da17818039)
 5. SSHでの接続
    1. [AWS EC2作成からSSH接続](https://qiita.com/gurensouen/items/7382c2d14763436466d2)
    2. [ssh-add で Could not open a connection to your authentication agent が出るときの対処法](https://qiita.com/ytheta/items/cbbd0b833c19784dfa1e)
 6. EC2上での必要なモジュール等のインストール
    1. sudo yum update -y
    2. sudo yum -y install git
 7. Gitへの接続設定
    1. [AES EC2上でsshを使ってgit clone を成功させるまでの手順](https://qiita.com/konuma1022/items/986eb58d4b94bef0c0a5)
 8. Pythonのインストール
    1. [EC2サーバにPython3環境構築](https://qiita.com/tisk_jdb/items/01bd6ef9209acc3a275f)
    2. 必要なモジュールを追加してpythonの再インストールもしている。
       1. [Python3.7入れる時に `No module named '_ctypes'` エラー](http://saruhei1989.hatenablog.com/entry/2019/04/06/090000)
          1. これやってからPython install!!!
       2. パスが通ってないだけだった。
          1. echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
          2. echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
          3. echo 'eval "$(pyenv init -)"' >> ~/.bashrc
          4. source ~/.bashrc
 9.  Djangoアプリケーションのデプロイ
     1.  [AWSにDjangoアプリケーションをデプロイ(Nginx, gunicorn, postgresql)](https://qiita.com/pokotsun/items/1272479e36c5146c6609)
     2.  python3 -m "venv" venv
     3.  . venv/bin/activate
     4.  [Djangoの既存プロジェクトをec2にデプロイ](https://qiita.com/kur/items/fb75354ee53671c79614)
         1.  nginx
             1.  sudo amazon-linux-extras install nginx1.12
             2.  [CentOS 7 の systemctl について](https://labs.precs.co.jp/2014/12/16/75/)
                 1.  systemctl enable nginx
             3.  [nginx起動、再起動](https://qiita.com/Kaisyou/items/dadf6fe9ee93fb69e76c)
             4.  [他のプロセスがポートを占有してnginxを再起動できない](https://qiita.com/Yu-s/items/64c54def20e5fa64edd1)
         2.  gunicon
             1.  pip3 install git+https://github.com/benoitc/gunicorn.git
             2.  https://stackoverflow.com/questions/29679963/why-gunicorn-command-not-found-with-gunicorn-installed
             3.  gunicorn viewer.wsgi --bind=0.0.0.0:8000 -D
     5.  [【python】Django起動・停止](https://tokyo-engineer.com/python_django_start_stop/)
 10. Reactのdeploy
     1.  [Amazon CloudFrontとは](https://hacknote.jp/archives/41668/)
     2.  [DDoS攻撃とCDNの関係について考える](https://www.orangeitems.com/entry/2018/10/31/062000)
     3.  [Reactで作ったWebアプリをGitHubで管理してS3に自動デプロイする](https://s8a.jp/react-github-aws-s3-auto-deploy)
     4.  [CloudFrontのキャッシュをすぐにクリアする方法](https://www.aruse.net/entry/2018/10/08/090631)
     5.  [React.jsとcreate-react-appを使ってタダでAWS S3にイケてる動的サイトをサクッと作る方法（環境構築編）](https://goleiro.hatenablog.com/entry/2017/03/20/030018)
     6.  [How to deploy your React App with AWS S3](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081)
     7.  [CodeBuildでStandard2.0のイメージを使用したらエラー出たときの対処](https://qiita.com/maruware/items/c3a6f6741220ef3e61f7)
     8.  [節約のために CodePipeline をやめて CodeBuild に全部任せてみた](https://michimani.net/post/aws-use-only-codebuild/)
     9.  [【AWS】CloudFront→S3の構成においてサブディレクトリへのアクセスでもindex.htmlの補完を有効化する方法](https://gadgeterkun.hatenablog.com/entry/20191120/1574211600)
     10. [できた！S3 オリジンへの直接アクセス制限と、インデックスドキュメント機能を共存させる方法](https://dev.classmethod.jp/cloud/aws/directory-indexes-in-s3-origin-backed-cloudfront/)
 11. WAFの設定
     1.  [AWS WAFを使って接続できるIPアドレスを制限してみた](https://dev.classmethod.jp/cloud/aws/aws-waf-ip-block/)
     2.  IP setを設定して社内限定リリース版は、アクセス制限をかけている。
 12. SSL & NLB
     1.  [CloudFrontでS3のウェブサイトをSSL化する](https://qiita.com/jasbulilit/items/73d70a01a5d3b520450f)
     2.  [CloudFront で S3 静的ウェブサイトホスティングを SSL/TLS に対応させる](https://dev.classmethod.jp/cloud/aws/tls-for-s3-web-hosting-with-cloudfront/)
     3.  Route53でドメインを取得して、cloudfrontに設定する時にどのみち合わせてSSLにせざるをない。
     4.  [AWS CloudFrontにRoute 53で取得したドメインを設定する方法](https://tomokazu-kozuma.com/how-to-set-the-domain-acquired-by-route53-to-aws-cloudfront/)
     5.  [NLB (Network Load Balancer)の作成メモ](https://qiita.com/rubytomato@github/items/e15e0a508b9fbec526e0)
     6.  [ELB(https) + nginx でヘルスチェックがこける問題](https://qiita.com/ameyamashiro/items/63793a02d66b6c48ec09)
     7.  cloudfrontに合わせて、API側もドメイン取得＋
     8.  VPCをデフォルトではなく専用で作って、パブリックサブネットで設定して、その中にEC2を配置している。
     9.  ロードバランサーは、Network Load Balancerを使っている。
     10. 最後にRoute53にロードバランサーを登録、HTTPS⇒HTTPに変換でAPIアクセス。
     11. HTTPSの終端は、ロードバランサー。
 13. ボトルネック調査
     1.  [curlでボトルネック調査をする](http://akuwano.hatenablog.jp/entry/20120503/1335994486)
 14. Logging
     1.  [Nginxログローテートの設定の実例](https://qiita.com/koudaiii/items/23322bf7037c6a7b1cea)
     2.  [Gunicornでのログローテーション](http://ja.voidcc.com/question/p-cibwnwth-dk.html)
 15. mac実機確認
     1.  [MacのlocalhostにiPhoneで接続する方法](https://qiita.com/sabineko/items/c4725c649c57a0432104)
     2.  [djangoの開発サーバを外部からアクセスするために](https://blog.masasuzu.net/entry/20100731/1280588504)
         1.  結局、ReactからDjangoのAPIを叩きに行くのでIPを127.0.0.1以外で固定して、アクセスさせる。

# よく使うコマンド
 - cd /home/app-user/supply-and-demand-viewer
 - source ~/.bashrc
 - ssh -i ~/.ssh/vedas_production.pem ec2-user@18.176.42.188
 - ssh -i ~/.ssh/vedas_production.pem app-user@18.176.42.188
 - sudo su app-user
   - sh init.sh
 - redis-server
 - Redis キーの削除
   - https://www.yuulinux.tokyo/2959/
 - python3 manage.py runserver 0:8000
 - gunicorn viewer.wsgi --bind=0.0.0.0:8000 -D
   - -Dがデーモン化
 - git reset --hard origin/master
- chmod 600 ~/.ssh/config
- pip3 install --upgrade pip
- pip install -r requirements/general.txt
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
### ワンライナーで簡単にDjangoを停止させる方法
ps -ef|awk 'BEGIN{}{if(match($8, /python/))system("kill -9 " $2)}END{}'

gunicorn viewer.wsgi --bind=0.0.0.0:8000 -D

### ネットワーク調査
curl  -o /dev/null http://vedas-api.com:8000/viewer/analyzer/health_check -w @/Users/hasumiyouhei/Desktop/curl_env.txt -s
curl  -o /dev/null https://vedas-api.com/viewer/analyzer/health_check -w @/Users/hasumiyouhei/Desktop/curl_env.txt -s
curl  -o /dev/null http://vedas-api.com:8000/viewer/analyzer/check_download_page -w @/Users/hasumiyouhei/Desktop/curl_env.txt -s

http://www.nendo.jp/
https://www.moma.org/
https://sansan-dsoc.com/

### データ更新時の手順メモ
１．ローカルでデータを更新できることを確認する。
https://github.com/panair-jp/vedas/blob/master/viewer/apps/analyzer/api.py#L66
　　※ 送配電事業者によっては、実績ファイルが増えていたり、フォーマットが変わっていることがあります。
　　※ 以下のナンバリングが変わるので要変更：2016年度：４月〜６月のファイルパスを見る。
https://github.com/panair-jp/vedas/blob/master/viewer/apps/analyzer/service/kyuden.py#L13

２．更新できたら以下のVedasデータ更新表をアップデートしてください。
   https://docs.google.com/spreadsheets/d/1jZpzMSxHI1JtJtmb95KyElUthwJDOM_wR6sdDvJjF9k/edit#gid=0
３．News.js以下のComponentを修正して、アップデート内容を追加してください。縦はだいたい300pxの増加が目安です。
４．masterに修正内容を反映します。
５．リモートにsshでつないでmasterを反映します。
  - ssh -i ~/.ssh/vedas_production.pem app-user@18.176.42.188
　- git fetch origin master
　- git reset --hard origin/master
６．一度、killしてから再起動します。
　・ps -ef|awk 'BEGIN{}{if(match($8, /python/))system("kill -9 " $2)}END{}'
　・gunicorn viewer.wsgi --bind=0.0.0.0:8000 -D
７．以下でデータを更新します。

　・rm -rf viewer/apps/analyzer/html/*/prev/*.html　
　　※ローカルの場合：ダウンロードリンクのあるサイトのHTMLを差分比較しているので、データ更新をする際は消す。

　・curl http://127.0.0.1:8000/viewer/analyzer/correct_data -m 200000
８．[CloudFrontでキャッシュ更新をしたい場合は、「/*」を使う。](https://www.aruse.net/entry/2018/10/08/090631)
９．twitterで更新をつぶやきます。