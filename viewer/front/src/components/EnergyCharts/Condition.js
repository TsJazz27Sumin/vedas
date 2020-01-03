import React from 'react'
import styled from 'styled-components';
import ConditionDetailFirst from './ConditionDetailFirst'
import ConditionDetailSecond from './ConditionDetailSecond'
import ConditionDetailThird from './ConditionDetailThird'
import { isMobile } from "react-device-detect";
import WindowSizeService from '../../services/window_size'

const Condition = (props) => {

  const dict = props.dict;
  const electoric_power_data = props.electoric_power_data;
  const electoric_power_company = props.electoric_power_company;
  const electoric_power_resource = props.electoric_power_resource;

  let ConditionArea = styled.div`
  height: 500px;
  width: 95%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
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
  font-family: Roboto;
  font-size: ${conditionDetailMobileCautionFontSize}px;
  
  height: 0%;
  width: auto;
  
  padding: 0% 0% 12% 0%;
  margin:  5% 0% 0% 9%;

  line-height: 26px;
  ` ;

  let ConditionDetailTitle = styled.div`
  font-family: Roboto;
  font-size: 22px;
  color: #000;

  height: 0%;
  width: auto;
  
  padding: 0% 0% 3% 0%;
  margin:  3% 0% 0% 5%;

  line-height: 26px;
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
    font-size: 16px;
    
    margin-top: 5%;
    margin-left: 9%;
    padding-bottom: 12%;
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