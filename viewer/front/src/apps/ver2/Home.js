import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { isMobile, isTablet, osName, browserName, deviceType } from "react-device-detect";
import HeroHeader from '../../components/ver2/Common/HeroHeader'
import HeroWithoutTitle from '../../components/ver2/Common/HeroWithoutTitle'
import TopBar from '../../components/ver2/Common/TopBar'
import TabletMessage from '../../components/ver2/Common/TabletMessage'
import EnergyCharts from './contents/EnergyCharts'
import About from './contents/About'
import Contact from './contents/Contact'
import News from './contents/News'
import Usage from './contents/Usage'
import wordDictionaryService from '../../services/word_dictionary'
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
