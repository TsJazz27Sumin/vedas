import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogo from '../../../components/ver2/Common/FooterLogo'
import Title from '../../../components/ver2/Usage/Title'
import Content1 from '../../../components/ver2/Usage/Content1'
import Content2 from '../../../components/ver2/Usage/Content2'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import '../../../css/Usage.css';

const Usage = (props) => {

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

    height: 4400px;
  `;
  }

  let Text1 = styled.div`
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

    padding-top: 3%;
    padding-left: 3%;
    font-family: Roboto;
    font-size: 26px;
    line-height: 40px;
    border-radius: 54px;
    color: #000;
    border: 8px solid #fff;
  `;

  let Text2 = styled.div`
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

    padding-left: 3.8%;
    padding-top: 1%;
    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    color: #8C8C8C;
  `;

  let LogoArea = styled.div`
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

    position: absolute;
    width: 60%;
    margin-top: 70px;
    margin-left: -7%;
  `;

  if (isMobile) {
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

      height: 2100px;
      width: 100%;
      background: none;
      padding-left: 1%;
      margin-left: 1%;
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

      height: 1800px;
      width: 100%;
      background: none;
      padding-left: 1%;
      margin-left: 1%;
    `;
    }

    Text1 = styled(Text1)`
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

      font-size: 19px;
    `;

    Text2 = styled(Text2)`
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

      display: none;
    `;

    LogoArea = styled(LogoArea)`
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
    
    margin-top: 0px;
    margin-left: -3%;
  `;
  }

  return (
    <ContentArea>
      <Title/>
      <Content1 dict={dict} Text1={Text1} Text2={Text2}/>
      <Content2 dict={dict} lang={lang} Text1={Text1}/>
      <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

export default Usage