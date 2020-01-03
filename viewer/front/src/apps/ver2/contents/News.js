import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from '../../../components/ver2/News/ContentTitle'
import Content from '../../../components/ver2/News/Content'
import FooterLogoArea from '../../../components/ver2/News/FooterLogoArea'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import '../../../css/News.css';

const News = (props) => {

  const dict = props.dict;
  const pathname = props.pathname;

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  let ContentArea = styled.div`
  border-radius: 54px;

  background: #efefef;

  height: 900px;
  width: 91%;

  padding: 2% 0% 0% 4%;
  margin:  0% 0% 0% 4%;
  `;

  if (isMobile) {
    ContentArea = styled(ContentArea)`
    background: none;

    height: 609px;
    width: 100%;

    padding-left: 0.1%;
    margin-left: 0.1%;
    `;
  }

  return (
    <ContentArea>
      <ContentTitle/>
      <Content dict={dict} pathname={pathname}/>
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default News