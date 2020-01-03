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
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default About