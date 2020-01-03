import React from 'react'
import styled from 'styled-components';
import ConditionDetailFirst from './ConditionDetailFirst'
import ConditionDetailSecond from './ConditionDetailSecond'
import ConditionDetailThird from './ConditionDetailThird'
import { isMobile } from "react-device-detect";
import WindowSizeService from '../../../services/window_size'

const Condition = (props) => {

  const dict = props.dict;
  const electoric_power_data = props.electoric_power_data;
  const electoric_power_company = props.electoric_power_company;
  const electoric_power_resource = props.electoric_power_resource;

  let ConditionArea = styled.div`
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
  
    height: 500px;
    width: 95%;
` ;

  const window_width = WindowSizeService.getWindowWidthSize();

  let conditionDetailMobileCautionFontSize = 0;

  if (window_width > 400){
    conditionDetailMobileCautionFontSize = 13;
  } else if (window_width > 350){
    conditionDetailMobileCautionFontSize = 12;
  } else if (window_width > 300){
    conditionDetailMobileCautionFontSize = 10;
  }

  let ConditionDetailMobileCaution = styled.div`
    height: 0%;
    margin-top: 5%;
    margin-left: 9%;
    padding-bottom: 12%;
    font-family: Roboto;
    font-size: ${conditionDetailMobileCautionFontSize}px;
    line-height: 26px;
  ` ;

  let ConditionDetailTitle = styled.div`
    height: 0%;
    margin-top: 3%;
    padding-bottom: 3%;
    margin-left: 5%;
    font-family: Roboto;
    font-size: 22px;
    line-height: 26px;
    color: #000;
  ` ;

  if (isMobile) {
    const window_height = WindowSizeService.getWindowHeightSize();
    
    let conditionAreaHeight = 0;

    if (window_height > 800){
      conditionAreaHeight = 1400;
    } else if (window_height > 700){
      conditionAreaHeight = 1500;
    } else if (window_height > 600){
      conditionAreaHeight = 1400;
    }
    ConditionArea = styled(ConditionArea)`
      height: ${conditionAreaHeight}px;
    `;

    ConditionDetailTitle = styled(ConditionDetailTitle)`
      margin-top: 5%;
      margin-left: 9%;
      padding-bottom: 12%;
      font-size: 16px;
    `;
  }
  
  return (
    <ConditionArea>
      {isMobile ? <ConditionDetailMobileCaution><p>{dict.analyze_condtion_mobile_caution}</p></ConditionDetailMobileCaution> : null}
      <ConditionDetailTitle><p>{dict.analyze_condtion_text1}</p></ConditionDetailTitle>
      <ConditionDetailFirst dict={dict} electoric_power_data={electoric_power_data}/>
      <ConditionDetailTitle><p>{dict.analyze_condtion_text2}</p></ConditionDetailTitle>
      <ConditionDetailSecond dict={dict} electoric_power_company={electoric_power_company}/>
      <ConditionDetailTitle><p>{dict.analyze_condtion_text3}</p></ConditionDetailTitle>
      <ConditionDetailThird dict={dict} electoric_power_resource={electoric_power_resource}/>
    </ConditionArea>
  )
}

export default Condition