# Nickname=VEDAS
- リポジトリ名をそのまま読むと長いので、単語の頭文字を後ろから読んでる風にしています。
- Supply-And-Demand-Energy-Viewer
- S <= A <= D <= E <= V
- Nickname=VEDAS
- VDASは、そのまま使ってるシステムがあるようなので「Energy」を入れて回避しました。
- Vedaは、インドの宗教経典なんかで「知識」の意味らしいです。

# Description ※TODO
- What is it?
  - A README is a text file that introduces and explains a project. It contains information that is commonly required to understand what the project is about.
  - １０電力が公開している需給実績データをビジュアライズするアプリケーションです。
- Why should I make it?
  - It's an easy way to answer questions that your audience will likely have regarding how to install and use your project and also how to collaborate with you.
- Who should make it?
  - Anyone who is working on a programming project, especially if you want others to use it or contribute.
- When should I make it?
  - Definitely before you show a project to other people or make it public. You might want to get into the habit of making it the first file you create in a new project.
- Where should I put it?
  - In the top level directory of the project. This is where someone who is new to your project will start out. Code hosting services such as GitHub, Bitbucket, and GitLab will also look for your README and display it along with the list of files and directories in your project.
- How should I make it?
  - While READMEs can be written in any text file format, the most common one that is used nowadays is Markdown. It allows you to add some lightweight formatting. You can learn more about it here, which also has a helpful reference guide and an interactive tutorial. Some other formats that you might see are plain text, reStructuredText (common in Python projects), and Textile.
  - You can use any text editor. There are plugins for many editors (e.g. Atom, Emacs, Sublime Text, Vim, and Visual Studio Code) that allow you to preview Markdown while you are editing it.
  - You can also use a dedicated Markdown editor like Typora or an online one like StackEdit or Dillinger. You can even use the editable template below.

# Badges ※TODO
- On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

# Visuals ※TODO
- Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

# Installation ※TODO
- Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

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

 
## セットアップ　※TODO:ある程度出来たらちゃんと書く。
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
 