# Nickname=Vedas
- リポジトリ名をそのまま読むと長いので、単語の頭文字を後ろから読んでる風にしています。
- Supply-And-Demand-Energy-Viewer
- S <= A <= D <= E <= V
- Nickname=Vedas
- Vdasは、そのまま使ってるシステムが世の中あるようなので「Energy」を入れて回避しました。
- Vedaは、インドの宗教経典なんかで「知識」の意味らしいです。

# Description
## What is it?
  - １０電力が公開している需給実績データをビジュアライズするアプリケーションです。
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

# Visuals ※TODO
- Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

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

# Usage ※TODO
- Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

# Support ※TODO
- Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

# Roadmap ※TODO
- If you have ideas for releases in the future, it is a good idea to list them in the README.

# Authors and acknowledgment ※TODO
- Show your appreciation to those who have contributed to the project.

# Project status ※TODO
- If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
 