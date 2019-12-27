import React from 'react'
import JapanEnergyChartDummy from './apps/Browzer/JapanEnergyChartDummy'
import JapanEnergyChart from './apps/Mobile/JapanEnergyChart'
import News from './apps/Mobile/News'
import About from './apps/Mobile/About'
import Usage from './apps/Mobile/Usage'
import Contact from './apps/Mobile/Contact'
import LanguageSetting from './apps/Mobile/LanguageSetting'
import { isMobile, isTablet } from "react-device-detect";

const App = (props) => {

  const menu = props.qs.menu === undefined ? 'home' : props.qs.menu;
  const lang = props.qs.lang === undefined ? 'jp' : props.qs.lang;

  let content = null;

  if (isMobile || isTablet){
    switch(menu){
      case "home":
          content = (<JapanEnergyChart lang={lang} location={props.location} query_param={props.qs} />);
          break;
  
      case "news":
          content = (<News lang={lang} location={props.location} query_param={props.qs} />);
          break;
      
      case "about":
          content = (<About lang={lang} location={props.location} query_param={props.qs} />);
          break;
      
      case "usage":
          content = (<Usage lang={lang} location={props.location} query_param={props.qs} />);
          break;
      
      case "contact":
          content = (<Contact lang={lang} location={props.location} query_param={props.qs} />);
          break;
  
      case "language_setting":
          content = (<LanguageSetting lang={lang} location={props.location} query_param={props.qs} />);
          break;
      
      default:
          content = (<JapanEnergyChart lang={lang} location={props.location} query_param={props.qs} />);
          break;
    }
  } else {
    content = (<JapanEnergyChartDummy lang={lang} location={props.location} query_param={props.qs} />);
  }
 
  return (
    <div>
      {content}
    </div >
  )
}

export default App 
