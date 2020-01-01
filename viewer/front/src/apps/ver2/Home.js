import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import HeroHeader from '../../components/ver2/HeroHeader'
import HeroWithoutTitle from '../../components/ver2/HeroWithoutTitle'
import TopBar from '../../components/ver2/TopBar'
import EnergyCharts from './contents/EnergyCharts'
import About from './contents/About'
import Contact from './contents/Contact'
import News from './contents/News'
import Usage from './contents/Usage'
import { isMobile } from "react-device-detect";

const Home = (props) => {

  let initial_lang = props.lang;
  const qs = props.qs;

  const [menu, setMenu] = useState('home');
  const handleMenuChange = useCallback((newValue) => {
    setMenu(newValue);
    window.scrollTo(0, 0);
  }, []);

  const [lang, setLang] = useState(initial_lang);
  const handleLangChange = useCallback((newValue) => {
    setLang(newValue);
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
        content = (<About lang={lang} qs={qs} handleMenuChange={handleMenuChange}/>);
        break;
    case "news":
        content = (<News lang={lang} qs={qs} handleMenuChange={handleMenuChange}/>);
        break;
    case "contact":
        content = (<Contact lang={lang} qs={qs} handleMenuChange={handleMenuChange}/>);
        break;
    case "usage":
        content = (<Usage lang={lang} qs={qs} handleMenuChange={handleMenuChange}/>);
        break;
    default:
        content = (<EnergyCharts lang={lang} qs={qs} handleMenuChange={handleMenuChange}/>);
        break;
  }

  let OutLine = styled.div`
    position: relative;
    width: 1440px;
    height: 100%;
    background: #fff;
  `;

  if (isMobile){
    OutLine = styled(OutLine)`
      width: 100%;
      height: 100%;
    `;
  }

  return (
    <OutLine>
      <TopBar lang={lang} menu={menu} handleMenuChange={handleMenuChange} handleLangChange={handleLangChange}/>
      {hero}
      {content}
    </OutLine>
  )
}

export default Home 
