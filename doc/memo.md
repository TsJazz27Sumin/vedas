# 環境構築メモ

- [EC2インスタンスを立てる時に参考にした。](https://qiita.com/gurensouen/items/7382c2d14763436466d2)
- ElasticIPを割り当て済み。
- [自動停止の設定](https://qiita.com/kosuge/items/dfaf7e6586da17818039)
- ssh -i ~/.ssh/Vedas.pem ec2-user@52.196.187.98
- i-080491151777f064f
- [AWSにDjangoアプリケーションをデプロイ(Nginx, gunicorn, postgresql)](https://qiita.com/pokotsun/items/1272479e36c5146c6609)
  - 3.8.0に読み替える。
- [AES EC2上でsshを使ってgit clone を成功させるまでの手順](https://qiita.com/konuma1022/items/986eb58d4b94bef0c0a5)
- [ssh-add で Could not open a connection to your authentication agent が出るときの対処法](https://qiita.com/ytheta/items/cbbd0b833c19784dfa1e)
- chmod 600 ~/.ssh/config
- pip3 install --upgrade pip
- [EC2サーバにPython3環境構築](https://qiita.com/tisk_jdb/items/01bd6ef9209acc3a275f)
- [Djangoの既存プロジェクトをec2にデプロイ](https://qiita.com/kur/items/fb75354ee53671c79614)
- [Python3.7入れる時に `No module named '_ctypes'` エラー](http://saruhei1989.hatenablog.com/entry/2019/04/06/090000)
- [【python】Django起動・停止](https://tokyo-engineer.com/python_django_start_stop/)
- pip install -r requirements/general.txt
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(pyenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
- [redisの設定](https://blog.kotamiyake.me/tech/output-dump-rdb-to-current-directory/)
- Djangoのサーバーを立てるところまで。
- 2019/12/10作業ログ
  - EC2インスタンスの作成
  - セキュリティグループの設定
  - ElasticIPの紐付け
  - 自動停止ルールの設定
  - SSHでの接続
  - EC2上での必要なモジュール等のインストール
  - Gitへの接続設定
  - Djangoの起動チャレンジ
- 2019/12/10作業ログ
  - Djangoの起動チャレンジ
  - 成功した。
  - やったこと
    - フォルダ構成の見直し
    - 必要なモジュールを追加してpythonの再インストール
    - IPの許可を追加