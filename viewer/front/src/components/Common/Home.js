import React, { useEffect, useState, useCallback } from 'react';
import '@shopify/polaris/styles.css';
import styled from 'styled-components';
import { isMobile, isTablet, osName, browserName, deviceType } from "react-device-detect";
import HeroHeader from './atoms/HeroHeader'
import HeroWithoutTitle from './atoms/HeroWithoutTitle'
import TopBar from './molecules/TopBar'
import TabletMessage from './molecules/TabletMessage'
import EnergyCharts from '../energycharts/EnergyCharts'
import About from '../about/About'
import Contact from '../contact/Contact'
import News from '../news/News'
import Usage from '../usage/Usage'
import wordDictionaryService from '../../services/word_dictionary'
import Color from '../../services/color';
import '../../css/Common.css';

const Home = (props) => {

  const initial_lang = props.lang;
  const qs = props.qs;

  useEffect(() => {
    if (qs.case !== undefined){
      window.scrollTo(0, 1300);
    }
  },// eslint-disable-next-line 
  [])

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

  const hero = getHero(menu, lang, true);
  const content = getContent(lang, qs, dict, menu, handleMenuChange);
  const StyledComponents = getStyledComponents();
  const OutLine = StyledComponents.OutLine;

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

const getStyledComponents = () => {

  let OutLine = styled.div`
  background: ${Color.white};

  // height: 100%;
  width: 1440px;

  position: relative;
  `;

  if (isMobile){
    OutLine = styled(OutLine)`
    height: 100%;
    width: 100%;
    `;
  }

  return {
    OutLine : OutLine
  };
}

const getHero = (menu, lang, with_animation) => {
  if (menu === "home"){
    return <HeroHeader lang={lang} with_animation={with_animation}/>;
  }

  return <HeroWithoutTitle/>;
}

const getContent = (lang, qs, dict, menu, handleMenuChange) => {
  let pathname = deviceType + '/' + osName + '/' + browserName + '/' + lang + '/' + menu;
  pathname = pathname.replace(' ', '');

  let content = null;
  
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

  return content;
}

export default Home 
