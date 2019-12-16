# Nickname=Vedas
- リポジトリ名をそのまま読むと長いので、単語の頭文字を後ろから読んでる風にしています。
- Supply-And-Demand-Energy-Viewer
- S <= A <= D <= E <= V
- Nickname=Vedas
- Vdasは、そのまま使ってるシステムが世の中あるようなので「Energy」を入れて回避しました。
- Vedaは、インドの宗教経典なんかで「知識」の意味らしいです。

# Description
## What is it?
  - 10電力が公開している需給実績データをビジュアライズするアプリケーションです。
## Why are you make it?
  - 需給実績がオープンデータとして公開されているけど、現在進行系で見やすくしているサイトがなかったようでしたので作ってみました。
  - 日本でもNPO法人である[ISEP](https://isep-energychart.com/graphics/)が四半期毎に公表はしています。
  - ドイツだと以下のサイトがあります。
    - [Fraunhofer ISE](https://www.energy-charts.de/power.htm?source=solar-wind&year=2019&week=49)

## 需給実績データ
### 出典

 - [hepco = 北海道電力 : 2016/4/1〜](https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/supply_demand_results.html)
 - [tohoku_epco = 東北電力 :  2016/4/1〜](http://setsuden.tohoku-epco.co.jp/download.html)
 - [rikuden = 北陸電力 : 2016/4/1〜](http://www.rikuden.co.jp/rule/area_jisseki.html)
 - [tepco = 東京電力 : 2016/4/1〜](http://www.tepco.co.jp/forecast/html/area_data-j.html)
 - [chuden = 中部電力 : 2016/4/1〜](https://denki-yoho.chuden.jp/)
 - [kepco = 関西電力 : 2016/4/1〜](https://www.kepco.co.jp/energy_supply/supply/denkiyoho/area_jisseki.html)
 - [energia = 中国電力 : 2016/11/1〜](http://www.energia.co.jp/retailer/eria_jyukyu.html)
 - [yonden = 四国電力 : 2016/4/1〜](https://www.yonden.co.jp/nw/renewable_energy/data/supply_demand.html)
 - [kyuden = 九州電力 : 2016/4/1〜](http://www.kyuden.co.jp/wheeling_disclosure.html)
 - [okiden = 沖縄電力 : 2016/4/1〜](https://www.okiden.co.jp/business-support/service/supply-and-demand/index.html)

### 取り扱い項目

  1. 月日
  2. 時刻
  3. エリア需要
  4. 原子力
  5. 火力
  6. 水力
  7. 地熱
  8. バイオマス
  9. 太陽光実績
  10. 太陽光抑制量
  11. 風力実績
  12. 風力抑制量
  13. 揚水
  14. 連系線
  15. 供給力合計
   
### 取り扱い単位
 - 30分を1コマとして最小単位としてデータが公表されている。
 - 1日は、48コマになる。

## 技術要素
### front
 - Framework : React 16.11.0
 - Language : javascript(es6)

### server

 - Framework : Django ※あとでバージョン書く。
 - Language : Python 3.8.0

## 構成図
 - [デプロイ環境](https://docs.google.com/presentation/d/1NsvbSVAN5zPlpozWm5sniTXHF1_vsP_F5z76l43ERnU/edit#slide=id.p)

# Visuals

<img src="https://github.com/panair-jp/supply-and-demand-viewer/blob/master/readme_img/screenshot_20191215.png" alt="ScreenShot">

# Installation ※TODO
- serverは、requirementsがあるのでこちらをpip。
 - redisのインストールは、[こちらを参考に。](https://qiita.com/sawa-@github/items/1f303626bdc219ea8fa1)
 - frontは、
   - [nodejs](https://reffect.co.jp/html/npm-install-in-mac) ※nodebrewよりもインストーラー使った方がスムーズ。
   - [react](https://qiita.com/spice/items/b75afb607f1d2e1172a2#react%E3%81%AE%E4%BE%BF%E5%88%A9%E3%81%AA%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B)
   - npm install axios --save も必要。
 - の環境構築が必要です。
 - cmdが権限なくて弾かれる場合は、sudoで。
 - [cors対策](https://qiita.com/karintou/items/52ee1f7c5fa641980188)
 - https://murabo.hatenablog.com/entry/2018/02/01/121925
 - npm install recharts
 - https://github.com/Shopify/polaris-react#using-the-react-components

# Usage
 1. 集計の単位を選択してください。月を選んだ場合、月ごとに合算された数値でチャートが表示されます。期間は、下のスライドバーで指定できます。
 2. 表示させたい電力エリアを選択してください。すべてを選択した場合、10電力すべてが表示対象になります。
 3. 表示させたい電源リソースを選択してください。需要は、指定エリア内の総電力需要になります。１つずつ選択することが可能なので太陽光と風力の比較なども可能です。

# Support
- @Youhei.Hが作ったので何かあれば聞いてください。

# Roadmap
- Current
  - 10電力が公開している需給実績データをビジュアライズする。
- Next
  - 太陽光と天気の関連が見たいので気象データと組み合わせて、ビジュアライズしたい。

# Authors and acknowledgment
- @Youhei.H

# Project status
- 開発中です！（><） from 2019/11/25
 