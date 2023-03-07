import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from 'components/news/atoms/ContentTitle'
import Content from 'components/news/molecules/Content'
import FooterLogoArea from 'components/news/molecules/FooterLogoArea'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';
import 'css/News.css';

const News = (props) => {

  const dict = props.dict;
  const pathname = props.pathname;

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const StyledComponents = getStyledComponents();
  const ContentArea = StyledComponents.ContentArea;

  return (
    <ContentArea>
      <ContentTitle/>
      <Content dict={dict} pathname={pathname}/>
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

const getStyledComponents = () => {

  let ContentArea = styled.div`
  border-radius: 54px;

  background: ${Color.gray};

  // Newsを増やす時は、height:  + 300pxぐらい。
  height: 3120px;
  width: 91%;

  padding: 2% 0% 0% 4%;
  margin:  0% 0% 0% 4%;
  `;

  if (isMobile) {
    ContentArea = styled(ContentArea)`
    background: none;

    // Newsを増やす時は、height:  + 150pxぐらい。
    height: 2209px;
    width: 100%;

    padding-left: 0.1%;
    margin-left: 0.1%;
    `;
  }

  return {
    ContentArea : ContentArea
  };
}

export default News