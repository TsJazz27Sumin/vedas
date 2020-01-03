import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import ContentTitle from '../../../components/ver2/Contact/ContentTitle'
import FormArea from '../../../components/ver2/Contact/FormArea'
import FooterLogoArea from '../../../components/ver2/Contact/FooterLogoArea'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import '../../../css/Contact.css';

const Contact = (props) => {

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

    background: #efefef;
    height: 1400px;
    width: 91%;
    position: absolute;
    left: 4.1%;
    top: 100%;
    border-radius: 54px;
  `;

  let Content = styled.div`
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

    background: #fff;
    position: absolute;
    width: 92%;
    height: 1000px;
    left: 4%;
    top: 8%;
    border: 1px solid #fff;
    border-radius: 16px;
  `;

  if (isMobile){

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

      height: 1000%;
      width: 95%;
      position: absolute;
      padding-top: 0%;
      left: 0.1%;
      right: 0.1%;
      top: 100%;
      bottom: 10.65%;
      background: none;
      border-radius: 54px;
    `;

    Content = styled(Content)`
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
      width: 100%;
      height: 89%;
      left: 2.4%;
      top: 8%;
      background: #fff;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 16px;
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

export default Contact