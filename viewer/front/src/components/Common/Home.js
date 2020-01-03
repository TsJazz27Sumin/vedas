import React, { useState, useCallback } from 'react';
import '@shopify/polaris/styles.css';
import styled from 'styled-components';
import { isMobile, isTablet, osName, browserName, deviceType } from "react-device-detect";
import HeroHeader from './HeroHeader'
import HeroWithoutTitle from './HeroWithoutTitle'
import TopBar from './TopBar'
import TabletMessage from './TabletMessage'
import EnergyCharts from '../EnergyCharts/EnergyCharts'
import About from '../About/About'
import Contact from '../Contact/Contact'
import News from '../News/News'
import Usage from '../Usage/Usage'
import wordDictionaryService from '../../services/word_dictionary'
import Color from '../../services/color';
import '../../css/Common.css';

const Home = (props) => {

  const initial_lang = props.lang;
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

  let dict = wordDictionaryService.getV2(lang);

  let hero = null;

  if (menu === "home"){
    hero = (<HeroHeader lang={lang}/>);
  } else {
    hero = (<HeroWithoutTitle/>);
  }

  let content = null;

  let pathname = deviceType + '/' + osName + '/' + browserName + '/' + lang + '/' + menu;
  pathname = pathname.replace(' ', '');

  switch(menu){
    case "about":
        content = (<About lang={lang} qs={qs} dict={dict} pathname={pathname} menu={menu} handleMenuChange={handleMenuChange}/>);
        break;
    case "news":
        content = (<News lang={lang} qs={qs} dict={dict} pathname={pathname} menu={menu} handleMenuChange={handleMenuChange}/>);
        break;
    case "contact":
        content = (<Contact lang={lang} qs={qs} dict={dict} pathname={pathname} menu={menu} handleMenuChange={handleMenuChange}/>);
        break;
    case "usage":
        content = (<Usage lang={lang} qs={qs} dict={dict} pathname={pathname} menu={menu} handleMenuChange={handleMenuChange}/>);
        break;
    default:
        content = (<EnergyCharts lang={lang} qs={qs} dict={dict} pathname={pathname} menu={menu} handleMenuChange={handleMenuChange}/>);
        break;
  }

  let OutLine = styled.div`
  background: ${Color.white};

  height: 100%;
  width: 1440px;

  position: relative;
  `;

  if (isMobile){
    OutLine = styled(OutLine)`
    height: 100%;
    width: 100%;
    `;
  }

  return (
      isTablet ? (<TabletMessage/>):(
      <OutLine>
        <TopBar lang={lang} menu={menu} handleMenuChange={handleMenuChange} handleLangChange={handleLangChange}/>
        {hero}
        {content}
      </OutLine>
    )
  )
}

export default Home 
