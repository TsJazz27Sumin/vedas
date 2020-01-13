import React, { useEffect, useState, useCallback } from 'react';
import '@shopify/polaris/styles.css';
import styled from 'styled-components';
import { debounce } from "lodash";
import { isMobile, isTablet, osName, browserName, deviceType } from "react-device-detect";
import HeroHeader from 'components/common/atoms/HeroHeader'
import HeroWithoutTitle from 'components/common/atoms/HeroWithoutTitle'
import TopBar from 'components/common/molecules/TopBar'
import TabletMessage from 'components/common/molecules/TabletMessage'
import EnergyCharts from 'components/energycharts/EnergyCharts'
import About from 'components/about/About'
import Contact from 'components/contact/Contact'
import News from 'components/news/News'
import Usage from 'components/usage/Usage'
import wordDictionaryService from 'services/word_dictionary'
import Color from 'services/color';
import WindowSizeService from 'services/window_size';
import 'css/Common.css';

const initial_width = WindowSizeService.getWindowWidthSize();

const Home = (props) => {

  const initial_lang = props.lang;
  const qs = props.qs;

  useEffect(() => {
    document.getElementById("scroll-up").classList.add("display-none");
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

  const [broserWidth, setBroserWidth] = useState(initial_width);
  const debouncedHandleChange = debounce(
      () => {
        setBroserWidth(WindowSizeService.getWindowWidthSize());
      },
      500
  );
  const handleBroserWidthChange = useCallback(() => {
    debouncedHandleChange();
    // eslint-disable-next-line
  }, []);
  window.addEventListener('resize', handleBroserWidthChange);

  let dict = wordDictionaryService.getV2(lang);

  const hero = getHero(menu, lang, true);
  const content = getContent(lang, qs, dict, menu, handleMenuChange);
  const StyledComponents = getStyledComponents(broserWidth);
  const OutLine = StyledComponents.OutLine;
  const ScrollDown = StyledComponents.ScrollDown;
  const ScrollDownP = StyledComponents.ScrollDownP;
  const ScrollUp = StyledComponents.ScrollUp;
  const ScrollUpP = StyledComponents.ScrollUpP;

  const handleScrollChange = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const height = WindowSizeService.getWindowHeightSize()
    let scrollDown = document.getElementById("scroll-down");
    let scrollUp = document.getElementById("scroll-up");

    if(scrollTop === 0){
      scrollUp.classList.add("display-none");
      scrollDown.classList.remove("display-none");
    } else if (scrollTop > height){
      scrollDown.classList.add("display-none");
    } else if (scrollTop < height){
      scrollDown.classList.remove("display-none");
    }

    if(scrollTop > 0){
      if (scrollUp.classList.contains("display-none")){
        scrollUp.classList.remove("display-none");
      }
    }
    // eslint-disable-next-line
  }, []);
  window.addEventListener('scroll', handleScrollChange);

  return (
      isTablet ? (<TabletMessage/>):(
      <OutLine>
        <TopBar lang={lang} menu={menu} handleMenuChange={handleMenuChange} handleLangChange={handleLangChange}/>
        {hero}
        <ScrollDown id="scroll-down">
          <ScrollDownP>SCROLL→</ScrollDownP>
        </ScrollDown>
        <ScrollUp id="scroll-up" onClick={() => window.scrollTo(0, 0)}>
          <ScrollUpP>←BACK TO TOP</ScrollUpP>
        </ScrollUp>
        {content}
      </OutLine>
    )
  )
}

const getStyledComponents = (broserWidth) => {

  const default_width = 1440;

  let OutLine = styled.div`
  background: ${Color.white};

  width: ${default_width}px;
  margin-left: ${(broserWidth - default_width) / 2}px;

  position: relative;
  `;

  let ScrollDown = styled.div`
  position: fixed;
  top: calc(100% - 118px);
  height: 98px;
  width: 12px;
  left: 20px;
  z-index: 3;
  `;

  let ScrollDownP = styled.p`
  width: 60px;
  font-family: aktiv-grotesk,sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  -webkit-transform-origin: top left;
  transform-origin: top left;
  -webkit-transform: translate3d(12px,0,0) rotate(90deg);
  transform: translate3d(12px,0,0) rotate(90deg);
  `;

  let ScrollUp = styled.div`
  position: fixed;
  top: calc(100% - 158px);
  height: 98px;
  width: 12px;
  right: 20px;
  z-index: 3;
  cursor: pointer;
  `;

  let ScrollUpP = styled.p`
  width: 122px;
  font-family: aktiv-grotesk,sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  -webkit-transform-origin: top left;
  transform-origin: top left;
  -webkit-transform: translate3d(12px,0,0) rotate(90deg);
  transform: translate3d(12px,0,0) rotate(90deg);
  `;

  if (isMobile){
    OutLine = styled(OutLine)`
    height: 100%;
    width: 100%;
    margin-left: 0;
    `;

    ScrollDown = styled(ScrollDown)`
      display: none;
    `;

    ScrollDownP = styled(ScrollDownP)`
      display: none;
    `;
  }

  return {
    OutLine : OutLine,
    ScrollDown : ScrollDown,
    ScrollDownP : ScrollDownP,
    ScrollUp : ScrollUp,
    ScrollUpP : ScrollUpP
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
