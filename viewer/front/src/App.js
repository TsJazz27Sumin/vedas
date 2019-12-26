import React from 'react'
import JapanEnergyChart from './apps/JapanEnergyChart'
import News from './apps/News'
import About from './apps/About'
import Usage from './apps/Usage'
import Contact from './apps/Contact'
import LanguageSetting from './apps/LanguageSetting'

const App = (props) => {

  const menu = props.qs.menu === undefined ? 'home' : props.qs.menu;
  const lang = props.qs.lang === undefined ? 'jp' : props.qs.lang;

  let content = null;

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
 
  return (
    <div>
      {content}
    </div >
  )
}

export default App 
