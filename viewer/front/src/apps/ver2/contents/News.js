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
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

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
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル
    
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
      <Content dict={dict} pathname={pathname}/>
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default News