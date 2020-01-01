import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from '../../../components/ver2/About/ContentTitle'
import Content from '../../../components/ver2/About/Content'
import FooterLogoArea from '../../../components/ver2/About/FooterLogoArea'
import styled from 'styled-components';
import wordDictionaryService from '../../../services/word_dictionary'
import { isMobile } from "react-device-detect";
import '../../../css/About.css';

const About = (props) => {

  const lang = props.lang;
  const dict = wordDictionaryService.getV2(lang);

  useEffect(() => {
    const pathname = '/' + lang + '/about';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
    height: 1300px;
    width: 91%;
    position: absolute;
    padding-top: 10%;
    left: 4.1%;
    top: 100%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  if(isMobile){

    if (lang === "en"){
      ContentArea = styled(ContentArea)`
      height: 700%;
      width: 100%;
      padding-left: 0.1%;
      margin-left: 0.1%;
      background: none;
      left: 0%;
      right: 0%;
    `;
    } else {
      ContentArea = styled(ContentArea)`
      height: 600%;
      width: 100%;
      padding-left: 0.1%;
      margin-left: 0.1%;
      background: none;
      left: 0%;
      right: 0%;
    `;
    }
  } 

  return (
    <ContentArea>
      <ContentTitle/>
      <Content dict={dict}/>
      <FooterLogoArea handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default About