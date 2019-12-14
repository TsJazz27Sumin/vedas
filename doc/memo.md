# 環境構築メモ
 1. EC2インスタンスの作成
 2. セキュリティグループの設定
 3. ElasticIPの紐付け
 4. [自動停止の設定](https://qiita.com/kosuge/items/dfaf7e6586da17818039)
 5. SSHでの接続
    1. [AWS EC2作成からSSH接続](https://qiita.com/gurensouen/items/7382c2d14763436466d2)
    2. [ssh-add で Could not open a connection to your authentication agent が出るときの対処法](https://qiita.com/ytheta/items/cbbd0b833c19784dfa1e)
 6. EC2上での必要なモジュール等のインストール
 7. Gitへの接続設定
    1. [AES EC2上でsshを使ってgit clone を成功させるまでの手順](https://qiita.com/konuma1022/items/986eb58d4b94bef0c0a5)
 8. Pythonのインストール
    1. [EC2サーバにPython3環境構築](https://qiita.com/tisk_jdb/items/01bd6ef9209acc3a275f)
    2. 必要なモジュールを追加してpythonの再インストールもしている。
       1. [Python3.7入れる時に `No module named '_ctypes'` エラー](http://saruhei1989.hatenablog.com/entry/2019/04/06/090000)
       2. パスが通ってないだけだった。
          1. echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
          2. echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
          3. echo 'eval "$(pyenv init -)"' >> ~/.bashrc
          4. source ~/.bashrc
 9.  Djangoアプリケーションのデプロイ
     1.  [Djangoの既存プロジェクトをec2にデプロイ](https://qiita.com/kur/items/fb75354ee53671c79614)
     2.  [【python】Django起動・停止](https://tokyo-engineer.com/python_django_start_stop/)
 10. [redisの設定](https://medium.com/@ss.shawnshi/how-to-install-redis-on-ec2-server-for-fast-in-memory-database-f30c3ef8c35e)
 11. Reactのdeploy
     1.  [Reactで作ったWebアプリをGitHubで管理してS3に自動デプロイする](https://s8a.jp/react-github-aws-s3-auto-deploy)
     2.  [React.jsとcreate-react-appを使ってタダでAWS S3にイケてる動的サイトをサクッと作る方法（環境構築編）](https://goleiro.hatenablog.com/entry/2017/03/20/030018)
     3.  [How to deploy your React App with AWS S3](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081)
     4.  [CodeBuildでStandard2.0のイメージを使用したらエラー出たときの対処](https://qiita.com/maruware/items/c3a6f6741220ef3e61f7)
     5.  [節約のために CodePipeline をやめて CodeBuild に全部任せてみた](https://michimani.net/post/aws-use-only-codebuild/)
 12. WAFの設定
     1.  [AWS WAFを使って接続できるIPアドレスを制限してみた](https://dev.classmethod.jp/cloud/aws/aws-waf-ip-block/)

# よく使うコマンド
 - cd /home/app-user/supply-and-demand-viewer
 - source ~/.bashrc
 - ssh -i ~/.ssh/Vedas.pem ec2-user@52.196.187.98
 - ssh -i ~/.ssh/Vedas.pem app-user@52.196.187.98
 - sudo su app-user
 - sh init.sh
 - redis-server
 - python3 manage.py runserver 0:8000
 - git reset --hard origin/master
- [AWSにDjangoアプリケーションをデプロイ(Nginx, gunicorn, postgresql)](https://qiita.com/pokotsun/items/1272479e36c5146c6609)
- chmod 600 ~/.ssh/config
- pip3 install --upgrade pip
- pip install -r requirements/general.txt
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc

