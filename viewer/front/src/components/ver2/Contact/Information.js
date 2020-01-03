import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const Information = (props) => {

  const dict = props.dict;

  let Information = styled.div`
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

    font-family: Roboto;
    position: absolute;
    width: 90%;
    height: 10%;
    left: 5%;
    top: 5%;
    font-size: 18px;
    line-height: 42px;
  `;

  let InformationP = styled.p`
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

    color: #4e4e4e;
  `;

  if (isMobile) {
    Information = styled(Information)`
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
    
      line-height: 32px;
      font-size: 16px;
    `;
  }


  return (
    <Information>
      <p>{dict.contact_text1}</p>
      <p>{dict.contact_text2}</p>
      <InformationP>{dict.contact_note}</InformationP>
    </Information>
  )
}

export default Information