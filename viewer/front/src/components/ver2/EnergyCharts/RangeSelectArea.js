import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import { AppProvider } from '@shopify/polaris';
import RangeSelect from '../../../components/ver2/EnergyCharts/RangeSelect'

const RangeSelectArea = (props) => {

  let RangeSelectArea = styled.div`
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

    height: 100px;
    width: 94%;
    margin-top: 0%;
    margin-left: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    background: #F0F0F0;
    border: 1px solid #fff;
    border-radius: 12px;
  `;

  if (isMobile) {
    RangeSelectArea = styled(RangeSelectArea)`
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
    
      width: 100%;
      margin-left: 0%;
      padding-top: 6%;
    `;
  }

  return (
    <div>
      <RangeSelectArea>
        <AppProvider>
          <RangeSelect
            range_slider={props.range_slider}
            unit={props.unit}
            year_and_month={props.year_and_month}
          />
        </AppProvider>
      </RangeSelectArea>
    </div>
  )
}

export default RangeSelectArea