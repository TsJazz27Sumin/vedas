import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogo from '../../../components/ver2/FooterLogo'
import Title from '../../../components/ver2/Usage/Title'
import Content1 from '../../../components/ver2/Usage/Content1'
import Content2 from '../../../components/ver2/Usage/Content2'
import styled from 'styled-components';
import wordDictionaryService from '../../../services/word_dictionary'
import { isMobile } from "react-device-detect";

const Usage = (props) => {

  const lang = props.lang;
  const dict = wordDictionaryService.getV2(lang);

  useEffect(() => {
    const pathname = '/' + lang + '/usage';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
    height: 4300px;
    width: 91%;
    padding-left: 4%;
    padding-top: 2%;
    margin-left: 4%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  if (lang === "en"){
    ContentArea = styled(ContentArea)`
    height: 4400px;
  `;
  }

  let Text1 = styled.div`
    padding-top: 3%;
    padding-left: 3%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 40px;
    border-radius: 54px;
    
    color: #000;
    
    border: 8px solid #fff;
  `;

  let Text2 = styled.div`
    padding-left: 3.8%;
    padding-top: 1%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #8C8C8C;
  `;

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    margin-top: 70px;
    margin-left: -7%;
  `;

  if (isMobile) {
    if (lang === "en"){
      ContentArea = styled(ContentArea)`
      height: 2800px;
    `;
    } else {
      ContentArea = styled(ContentArea)`
      height: 2500px;
    `;
    }

    Text1 = styled(Text1)`
      font-size: 19px;
    `;

    Text2 = styled(Text2)`
      display: none;
    `;
  }

  return (
    <ContentArea>
      <Title/>
      <Content1 dict={dict} Text1={Text1} Text2={Text2}/>
      <Content2 dict={dict} Text1={Text1}/>
      <FooterLogo LogoArea={LogoArea} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default Usage