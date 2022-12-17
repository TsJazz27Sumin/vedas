# Description
## What is this?
  - This is an application to visualize the data of supply-demand balance published by 10 Electric Power Company.
## Description ## What is it?
  - I made it because there seemed to be no site that makes it easy to see the ongoing supply-demand data that has been made public as open data.
  - In Japan, [ISEP](https://isep-energychart.com/graphics/), a non-profit organization, publishes the data every quarter.
  - In Germany, the following sites are available.
    - Fraunhofer ISE](https://www.energy-charts.de/power.htm?source=solar-wind&year=2019&week=49)

# Nickname=Vedas
- The repository name is too long to read as is, so the first letter of the word is read backwards.
- Supply-And-Demand-Energy-Viewer
- S <= A <= D <= E <= V
- Nickname=Vedas
- Vdas was avoided by adding "Energy" because there seem to be systems in the world that use it as it is.
- Veda means "knowledge" in Indian religious scriptures.

## Supply and demand data
### Source.

 - [hepco = Hokkaido Electric Power Company : 2016/4/1-](https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/supply_demand_results.html)
 - [tohoku_epco = Tohoku Electric Power Company : from 4/1/2016](http://setsuden.tohoku-epco.co.jp/download.html)
 - [rikuden = Hokuriku Electric Power Company : from 4/1/2016](http://www.rikuden.co.jp/rule/area_jisseki.html)
 - [tepco = Tokyo Electric Power Company : from 4/1/2016](http://www.tepco.co.jp/forecast/html/area_data-j.html)
 - [chuden = Chubu Electric Power Company : 4/1/2016-](https://denki-yoho.chuden.jp/)
 - [kepco = Kansai Electric Power Company : 4/1/2016-](https://www.kepco.co.jp/energy_supply/supply/denkiyoho/area_jisseki.html)
 - [energia = Chugoku Electric Power Company : 2016/11/1-](http://www.energia.co.jp/retailer/eria_jyukyu.html)
 - [yonden = Shikoku Electric Power Company : from 4/1/2016](https://www.yonden.co.jp/nw/renewable_energy/data/supply_demand.html)
 - [kyuden = Kyushu Electric Power Company : from 4/1/2016](http://www.kyuden.co.jp/wheeling_disclosure.html)
 - [okiden = Okinawa Electric Power Company : from 4/1/2016](https://www.okiden.co.jp/business-support/service/supply-and-demand/index.html)

### Items handled

  1. day of month
  2. Time
  3. Area demand
  4. nuclear
  5. thermal
  6. hydroelectric
  7. geothermal
  8. biomass
  9. solar power results
  10. solar curtailment
  11. wind power
  12. wind power curtailment
  13. pumped water
  14. interconnection line
  15. total supply
   
### Handling unit
 - The data is published as a minimum unit with 30 minutes as one frame.
 - One day is 48 frames.

## Technical elements
### front
 - Framework : React 16.11.0
 - Language : javascript(es6)

### server

 - Framework : Django 3.0
 - Language : Python 3.8.0

## Configuration diagram
<img src="https://github.com/panair-jp/supply-and-demand-viewer/blob/master/readme_img/screenshot_20200925.png" alt="ScreenShot">

## Visuals

<img src="https://github.com/panair-jp/supply-and-demand-viewer/blob/master/readme_img/screenshot_20191215.png" alt="ScreenShot">

# Installation *TODO
- For server, pip here as there are requirements.
 - To install redis, refer to [here]. (https://qiita.com/sawa-@github/items/1f303626bdc219ea8fa1)
 - FRONT.
   - [nodejs](https://reffect.co.jp/html/npm-install-in-mac) *It is smoother to use the installer than nodebrew.
   -front is [nodejs]() [react](https://qiita.com/spice/items/b75afb607f1d2e1172a2#react%E3%81%AE%E4%BE%BF%E5%88%A9%E3%81%AA%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%82%92%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B)
   - npm install axios --save is also required.
 - You need to build the environment of
 - If cmd is not authorized and is rejected, use sudo.
 - [cors measures](https://qiita.com/karintou/items/52ee1f7c5fa641980188)
 - https://murabo.hatenablog.com/entry/2018/02/01/121925
 - npm install recharts
 - https://github.com/Shopify/polaris-react#using-the-react-components

# Usage
 1. select the unit of aggregation. If you choose month, the chart will be displayed with the numbers added up for each month. You can specify the period using the slide bar below. 2.
 2. select the power areas you wish to display. If you select all, all 10 power resources will be displayed. 3.
 Select the power resources you wish to display. Demand is the total power demand for the specified area, and can be selected one at a time, allowing you to compare solar and wind power, etc.

# Support
- Youhei.H created this page, so if you have any questions, please ask him.

# Roadmap
- Current
  - 10 Visualize the actual supply and demand data published by electric power companies.
- Next
  - I want to see the relationship between sunlight and weather, so I want to combine it with weather data and visualize it.

# Authors and acknowledgment
- @Youhei.

# Project status
- Under development! (><) from 11/25/2019
 
