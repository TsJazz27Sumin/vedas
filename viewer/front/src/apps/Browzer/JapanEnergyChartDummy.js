import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import '@shopify/polaris/styles.css';
//import queryParamPerserService from '../../services/query_param_perser'

//memo:
//cd ../supply-and-demand-viewer/viewer/front/
//npm start
//reference:https://polaris.shopify.com/components/
const JapanEnergyChartDummy = (props) => {
  
  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  //クエリパラメータ
  //const qs = queryParamPerserService.execute(props.query_param, lang);
  
  const public_url = process.env.PUBLIC_URL;
  const main_title_image = public_url + '/main-title.png';
  const vedas_logo_top_bar_image = public_url + '/vedas_v1.png';
  const vedas_logo_image = public_url + '/vedas.png';

  return (
    <div className="out-line">
      <div>
        <div className="vedas-logo-top-bar">
          <img width="100%" src={vedas_logo_top_bar_image} alt="top bar logo"/>
        </div>
        <div className="menu-area">
          <p className="menu-item">Usage</p>
          <p className="menu-item">About</p>
          <p className="menu-item">News</p>
          <p className="menu-item">Contact</p>
        </div>
      </div>
      <svg className="start" width="100%" height="10%" viewBox="0 0 1440 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
        <path className="st2" d="M-110 331.41C-92.712 331.41 26.9003 331.41 367.046 331.41C707.191 331.41 899.011 209.816 1005.33 173.824C1111.65 137.832 1219.98 137.832 1219.98 137.832H1449" stroke="#9B00E3" strokeWidth="10"/>
        <path className="st2" d="M-94.7808 30H296.508C365.173 30 433.706 63.4966 467.348 140.151C509.401 235.97 635.888 260.123 705.209 260.123C760.667 260.123 1340.7 254.758 1445.5 254.758" stroke="#FF33AD" strokeWidth="10"/>
        <path className="st2" d="M-96 259.955H414.712C504.333 259.955 593.783 233.48 637.693 172.893C692.58 97.1603 857.672 78.0697 948.151 78.0697C1020.53 78.0697 1312.21 78.0697 1449 78.0697" stroke="#FFED48" strokeWidth="10"/>
        <path className="st2" d="M-103 216.695H404.824C493.938 216.695 695.298 233.43 781.952 161.453C935.246 34.1219 1019.51 45.8756 1109.47 45.8756C1181.45 45.8756 1316.98 45.8756 1453 45.8756" stroke="#6DDCFF" strokeWidth="10"/>
        <path className="st1" d="M1453 23.5041C1435.83 23.5041 1317.07 23.5041 979.32 23.5041C641.575 23.5041 451.109 120.616 345.538 149.361C239.966 178.107 132.407 178.107 132.407 178.107H-95" stroke="#9B00E3" strokeWidth="10"/>
        <path className="st2" d="M-120 298.93H405.587C497.819 298.93 589.873 270.942 635.062 206.894C691.549 126.833 861.449 106.652 954.563 106.652C1029.05 106.652 1329.23 106.652 1470 106.652" stroke="#FF33AD" strokeWidth="10"/>
        <path className="st2" d="M-287 5H293.79C395.709 5 497.432 26.3692 547.368 75.2711C609.787 136.399 797.532 151.807 900.426 151.807C982.741 151.807 1314.44 151.807 1470 151.807" stroke="#FFED48" strokeWidth="10"/>
        <path className="st2" d="M-146 269.658H381.406C473.956 269.658 683.08 263.618 773.076 289.595C932.281 335.549 1019.79 331.307 1113.23 331.307C1187.98 331.307 1328.74 331.307 1470 331.307" stroke="#6DDCFF" strokeWidth="10"/>
        </g>
      </svg>
      <div className="main-title">
        <img width="100%" src={main_title_image} alt="main title"/>
      </div>
      <div className="vedas-logo">
        <img width="100%" src={vedas_logo_image} alt="vedas logo"/>
      </div>
      {/* <div className="analyze-area">
          <div>
            <p className="step1-text">1. 期間を選択してください。</p>
            <p>年</p>
            <p>月</p>
            <p>日</p>
            <p>1時間</p>
          </div>
          <div>
            <p>2. 電力事業者を選択してください。</p>
          </div>
          <div>
            <p>3. 調べたい発電の種類を選択してください。</p>
          </div>
        </div> */}
    </div >
  )
}

export default JapanEnergyChartDummy 
