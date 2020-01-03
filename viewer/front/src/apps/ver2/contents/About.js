import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from '../../../components/ver2/About/ContentTitle'
import Content from '../../../components/ver2/About/Content'
import FooterLogoArea from '../../../components/ver2/About/FooterLogoArea'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import '../../../css/About.css';

const About = (props) => {

  const lang = props.lang;
  const dict = props.dict;
  const pathname = props.pathname;

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
  border-radius: 54px;
  background: #efefef;

  height: 1300px;
  width: 91%;
  
  padding: 10% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 100%;
  left: 4.1%;
  right: 0%
  bottom: 0%;

  `;

  if(isMobile){

    if (lang === "en"){
      ContentArea = styled(ContentArea)`
      background: none;

      height: 700%;
      width: 100%;

      padding-left: 0.1%;
      margin-left: 0.1%;

      left: 0%;
      right: 0%;
    `;
    } else {
      ContentArea = styled(ContentArea)`
      background: none;

      height: 600%;
      width: 100%;

      padding-left: 0.1%;
      margin-left: 0.1%;

      left: 0%;
      right: 0%;
    `;
    }
  } 

  return (
    <ContentArea>
      <ContentTitle/>
      <Content dict={dict}/>
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default About