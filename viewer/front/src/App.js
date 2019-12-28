import React from 'react'
import JapanEnergyChart from './apps/ver2/JapanEnergyChart'
import JapanEnergyChartVer1 from './apps/ver1/JapanEnergyChart'
import News from './apps/ver1/News'
import About from './apps/ver1/About'
import Usage from './apps/ver1/Usage'
import Contact from './apps/ver1/Contact'
import LanguageSetting from './apps/ver1/LanguageSetting'

const App = (props) => {

  const menu = props.qs.menu === undefined ? 'home' : props.qs.menu;
  const lang = props.qs.lang === undefined ? 'jp' : props.qs.lang;
  const version = props.qs.version === undefined ? '2' : props.qs.version;

  let content = null;

  if (version === "1"){
    switch(menu){
      case "home":
          content = (<JapanEnergyChartVer1 lang={lang} location={props.location} query_param={props.qs} />);
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
    content = (<JapanEnergyChart lang={lang} location={props.location} query_param={props.qs} />);
  }
 
  return (
    <div>
      {content}
    </div >
  )
}

export default App 
