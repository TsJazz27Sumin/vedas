import React, { useEffect, useState, useCallback } from 'react';
import ReactGA from 'react-ga';
import '@shopify/polaris/styles.css';
import HeroHeader from '../../components/ver2/HeroHeader'
import HeroWithoutTitle from '../../components/ver2/HeroWithoutTitle'
import TopBar from '../../components/ver2/TopBar'
import EnergyCharts from './contents/EnergyCharts'
import About from './contents/About'
import Contact from './contents/Contact'
import News from './contents/News'
import Usage from './contents/Usage'
//import queryParamPerserService from '../../services/query_param_perser'

const Home = (props) => {

  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const [menu, setMenu] = useState('home');
  const handleMenuChange = useCallback((newValue) => {
    setMenu(newValue);
  }, []);

  let hero = null;

  if (menu === "home"){
    hero = (<HeroHeader/>);
  } else {
    hero = (<HeroWithoutTitle/>);
  }

  let content = null;

  switch(menu){
    case "about":
        content = (<About handleMenuChange={handleMenuChange}/>);
        break;
    case "news":
        content = (<News handleMenuChange={handleMenuChange}/>);
        break;
    case "contact":
        content = (<Contact handleMenuChange={handleMenuChange}/>);
        break;
    case "usage":
        content = (<Usage handleMenuChange={handleMenuChange}/>);
        break;
    default:
        content = (<EnergyCharts handleMenuChange={handleMenuChange}/>);
        break;
  }

  //クエリパラメータ
  //const qs = queryParamPerserService.execute(props.query_param, lang);

  return (
    <div className="out-line">
      <TopBar handleMenuChange={handleMenuChange}/>
      {hero}
      {content}
    </div >
  )
}

export default Home 
