import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import ShareButtons from '../Common/ShareButtons'

const ShareButtonArea = (props) => {

  let ShareButtonArea = styled.div`
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

    margin-top: 5%;
    margin-left: 37%;
  `;

  if (isMobile) {
    ShareButtonArea = styled(ShareButtonArea)`
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
    
      margin-top: 10%;
      margin-left: 9%;
    `;
  }

  return (
    <ShareButtonArea>
      <ShareButtons type="big" pathname={props.pathname}/>
    </ShareButtonArea>
  )
}

export default ShareButtonArea