import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const ConditionDetailFirst = (props) => {

  const dict = props.dict;
  const unit = props.electoric_power_data.unit;
  const year_and_month = props.electoric_power_data.year_and_month;
  const lowerTextFieldValue = props.electoric_power_data.range_slider.lowerTextFieldValue;
  const upperTextFieldValue = props.electoric_power_data.range_slider.upperTextFieldValue;
  const handleTermChange = props.electoric_power_data.handleTermChange;

  let ConditionDetailArea1 = styled.div`
  background: #efefef;

  height: 5%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 5%;
` ;

  let ConditionDetailParamArea = styled.div`
  height: 100%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  let ConditionDetailParamAreaY = styled.div`
  background: #fff;

  border-radius: 10px;

  height: 100%;
  width: 23%;

  padding: 0% 0% 1% 0%;
  margin:  0% 0% 0% 0%;

  display: inline-block;

  cursor: pointer;
` ;

  let ConditionDetailParamAreaYM = styled(ConditionDetailParamAreaY)`
  margin-left: 2%;
` ;

  let ConditionDetailParamAreaYMD = styled(ConditionDetailParamAreaY)`
  margin-left: 2%;
` ;

  let ConditionDetailParamArea1H = styled(ConditionDetailParamAreaY)`
  margin-left: 2%;
` ;

  let ConditionDetailParamLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #000;
  
  padding: 0% 0% 0% 0%;
  margin:  4% 0% 0% 5%;
  
  line-height: 22px;

  display: inline-block;
` ;

  let ConditionDetailParamButtonDiv = styled.div`
  padding: 0% 0% 0% 60%;

  display: inline-block;
` ;

  let ConditionDetailParamButton = styled.button`
  border-radius: 2px;

  height: 100%;
  width: 140%;

  // ここは、このままじゃないときれいに出ない。
  padding-top: 100%;
  
  cursor: pointer;
` ;

  const setBackGround = (isMobile, is_target) => { 
    if(isMobile){
      return styled(ConditionDetailParamButton)` display:none;`;
    }
    return is_target ? styled(ConditionDetailParamButton)` background: #6DDCFF;` : styled(ConditionDetailParamButton)` background: #D8D8D8;`
  };

  const ConditionDetailParamButtonY = setBackGround(isMobile, unit === "y");
  const ConditionDetailParamButtonYM = setBackGround(isMobile, unit === "ym");
  const ConditionDetailParamButtonYMD = setBackGround(isMobile, unit === "ymd");
  const ConditionDetailParamButton1H = setBackGround(isMobile, unit === "1H");

  if (isMobile) {
    ConditionDetailArea1 = styled(ConditionDetailArea1)`
    background:none;
    `;

    ConditionDetailParamAreaY = styled(ConditionDetailParamAreaY)`
    width: 100%;

    padding-bottom: 5%;

    display: block;
    `;

    ConditionDetailParamAreaYM = styled(ConditionDetailParamAreaYM)`
    width: 100%;

    padding-bottom: 5%;
    margin-top: 2%;
    margin-left: 0%;

    display: block;
    `;

    ConditionDetailParamAreaYMD = styled(ConditionDetailParamAreaYMD)`
    width: 100%;

    padding-bottom: 5%;
    margin-top: 2%;
    margin-left: 0%;

    display: block;
    `;

    ConditionDetailParamArea1H = styled(ConditionDetailParamArea1H)`
    width: 100%;

    padding-bottom: 5%;
    margin-top: 2%;
    margin-left: 0%;

    display: none;
    `;

    ConditionDetailParamButtonDiv = styled(ConditionDetailParamButtonDiv)`
    display: none;
    `;

    const setBackGround = (is_target, Component) => { 
      return is_target ? styled(Component)` background: #6DDCFF;` : styled(Component)` background: #efefef;`
    };
  
    ConditionDetailParamAreaY = setBackGround(unit === "y", ConditionDetailParamAreaY);
    ConditionDetailParamAreaYM = setBackGround(unit === "ym", ConditionDetailParamAreaYM);
    ConditionDetailParamAreaYMD = setBackGround(unit === "ymd", ConditionDetailParamAreaYMD);
    ConditionDetailParamArea1H = setBackGround(unit === "1H", ConditionDetailParamArea1H);
  }

  return (
    <div>
      <ConditionDetailArea1>
        <ConditionDetailParamArea>
          <ConditionDetailParamAreaY 
            onClick={() => handleTermChange("y", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_y}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButtonY />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamAreaY>
          <ConditionDetailParamAreaYM 
            onClick={() => handleTermChange("ym", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_ym}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButtonYM />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamAreaYM>
          <ConditionDetailParamAreaYMD 
            onClick={() => handleTermChange("ymd", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_ymd}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButtonYMD />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamAreaYMD>
          <ConditionDetailParamArea1H 
            onClick={() => handleTermChange("1H", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_1h}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButton1H />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea1H>
        </ConditionDetailParamArea>
      </ConditionDetailArea1>
    </div>
  )
}

export default ConditionDetailFirst