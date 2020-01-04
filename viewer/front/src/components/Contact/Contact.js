import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from './atoms/ContentTitle'
import FormArea from './molecules/FormArea'
import FooterLogoArea from './molecules/FooterLogoArea'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../services/color';
import '../../css/Contact.css';

const Contact = (props) => {

  const dict = props.dict;
  const pathname = props.pathname;

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
  border-radius: 54px;
  background: ${Color.gray};

  height: 1400px;
  width: 91%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 100%;
  left: 4.1%;
  right: 0%
  bottom: 0%;
  
  `;

  let Content = styled.div`
  border: 1px solid ${Color.white};
  border-radius: 16px;
  background: ${Color.white};

  height: 1000px;
  width: 92%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 8%;
  left: 4%;
  right: 0%
  bottom: 0%;
  `;

  if (isMobile){

    ContentArea = styled(ContentArea)`
    border-radius: 54px;

    background: none;

    height: 1000%;
    width: 95%;

    padding-top: 0%;

    top: 100%;
    left: 0.1%;
    right: 0.1%;
    bottom: 10.65%;

    position: absolute;
    `;

    Content = styled(Content)`
    border: 1px solid ${Color.white};
    border-radius: 16px;

    background: ${Color.white};

    height: 89%;
    width: 100%;

    box-sizing: border-box;

    position: absolute;
    top: 8%;
    left: 2.4%;
    `;
  }

  return (
    <ContentArea>
      <ContentTitle/>
      <Content>
        <FormArea dict={dict} />
      </Content>
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

const getStyledComponents = (lang) => {


  return {
    xxx :xxx
  };
}

export default Contact