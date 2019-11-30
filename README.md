# supply-and-demand-viewer
１０電力が公開している需給実績データをビジュアライズするアプリケーション。

TODO:ある程度出来たらちゃんと書く。

## server

 - Framework : Django
 - Language : Python

## front
 - Framework : React
 - Language : javascript
 
## setup
 - serverは、requirementsがあるのでこちらをpip。
 - redisのインストールは、[こちらを参考に。](https://qiita.com/sawa-@github/items/1f303626bdc219ea8fa1)
 - frontは、
   - [nodejs](https://reffect.co.jp/html/npm-install-in-mac) ※nodebrewよりもインストーラー使った方がスムーズ。
   - [react](https://qiita.com/spice/items/b75afb607f1d2e1172a2#react%E3%81%AE%E4%BE%BF%E5%88%A9%E3%81%AA%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B)
 - の環境構築が必要です。
 - cmdが権限なくて弾かれる場合は、sudoで。