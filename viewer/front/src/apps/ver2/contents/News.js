import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from '../../../components/ver2/News/ContentTitle'
import Content from '../../../components/ver2/News/Content'
import FooterLogoArea from '../../../components/ver2/News/FooterLogoArea'
import styled from 'styled-components';
import wordDictionaryService from '../../../services/word_dictionary'
import { isMobile } from "react-device-detect";
import '../../../css/News.css';

const News = (props) => {

  const lang = props.lang;
  const dict = wordDictionaryService.getV2(lang);

  useEffect(() => {
    const pathname = '/' + lang + '/news';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
    height: 900px;
    width: 91%;
    padding-left: 4%;
    padding-top: 2%;
    margin-left: 4%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  if (isMobile) {
    ContentArea = styled(ContentArea)`
    height: 609px;
    width: 100%;
    padding-left: 0.1%;
    margin-left: 0.1%;
    background: none;
    `;
  }

  return (
    <ContentArea>
      <ContentTitle/>
      <Content dict={dict}/>
      <FooterLogoArea handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default News