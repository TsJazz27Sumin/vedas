import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import WindowSizeService from '../../../services/window_size'

const WatchoutArea = (props) => {

  const dict = props.dict;
  const checkedCount = props.checkedCount;

  let WatchoutArea = styled.div`
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

  margin-top: ${450 + (350 * checkedCount)}px;
  margin-left: 6%;
`;

  let WatchoutTitle = styled.div`
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
  font-family: Roboto;
  font-size: 28px;
  line-height: 21px;
  color: #000;
`;

  let WatchoutTexts = styled.div`
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
  font-family: Roboto;
  font-size: 16px;
  line-height: 36px;
  color: #000;
`;

  if (isMobile) {
    const window_height = WindowSizeService.getWindowHeightSize();
    
    let intervalHeight = 0;

    if (window_height > 800){
      intervalHeight = 280;
    } else if (window_height > 700){
      intervalHeight = 315;
    } else if (window_height > 600){
      intervalHeight = 280;
    }

    WatchoutArea = styled(WatchoutArea)`margin-top: ${325 + (intervalHeight * checkedCount)}px; width: 89%;`;
  }

  return (
    <WatchoutArea>
      <WatchoutTitle>
        <p>{dict.watchout}</p>
      </WatchoutTitle>
      <WatchoutTexts>
        <p>{dict.watchout_info2}</p>
        <p>{dict.watchout_info3}</p>
        <p>{dict.watchout_info4}</p>
        <p>{dict.watchout_info5}</p>
      </WatchoutTexts>
    </WatchoutArea>
  )
}

export default WatchoutArea