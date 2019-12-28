import React, { useEffect, useState, useCallback } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
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

  const initial_lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const [menu, setMenu] = useState('home');
  const handleMenuChange = useCallback((newValue) => {
    setMenu(newValue);
  }, []);

  const [lang, setLang] = useState(initial_lang);
  const handleLangChange = useCallback((newValue) => {
    setLang(newValue);
    console.log(newValue);
  }, []);

  let hero = null;

  if (menu === "home"){
    hero = (<HeroHeader lang={lang}/>);
  } else {
    hero = (<HeroWithoutTitle/>);
  }

  let content = null;

  switch(menu){
    case "about":
        content = (<About lang={lang} handleMenuChange={handleMenuChange}/>);
        break;
    case "news":
        content = (<News lang={lang} handleMenuChange={handleMenuChange}/>);
        break;
    case "contact":
        content = (<Contact lang={lang} handleMenuChange={handleMenuChange}/>);
        break;
    case "usage":
        content = (<Usage lang={lang} handleMenuChange={handleMenuChange}/>);
        break;
    default:
        content = (<EnergyCharts lang={lang} handleMenuChange={handleMenuChange}/>);
        break;
  }

  //クエリパラメータ
  //const qs = queryParamPerserService.execute(props.query_param, lang);

  const OutLine = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
  `;

  return (
    <OutLine>
      <TopBar lang={lang} handleMenuChange={handleMenuChange} handleLangChange={handleLangChange}/>
      {hero}
      {content}
    </OutLine>
  )
}

export default Home 
