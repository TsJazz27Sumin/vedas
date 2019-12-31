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
  height: 5%;
  margin-left: 5%;
  background: #efefef;
` ;

  let ConditionDetailParamArea = styled.div`
  height: 100%;
` ;

  let ConditionDetailParamAreaY = styled.div`
  display: inline-block;
  padding-bottom: 1%;
  height: 100%;
  width: 23%;
  background: #fff;
  border-radius: 10px;
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
  display: inline-block;

  margin-top: 4%;
  margin-left: 5%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: #000;
` ;

  let ConditionDetailParamButtonDiv = styled.div`
  display: inline-block;
  margin-left:60%;
` ;

  let ConditionDetailParamButton = styled.button`
  width: 140%;
  padding-top: 100%;
  border-radius: 2px;
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
      display: block;
      padding-bottom: 5%;
      width: 100%;
    `;
    ConditionDetailParamAreaYM = styled(ConditionDetailParamAreaYM)`
      display: block;
      padding-bottom: 5%;
      width: 100%;
      margin-top: 2%;
      margin-left: 0%;
    `;

    ConditionDetailParamAreaYMD = styled(ConditionDetailParamAreaYMD)`
      display: block;
      padding-bottom: 5%;
      width: 100%;
      margin-top: 2%;
      margin-left: 0%;
    `;

    ConditionDetailParamArea1H = styled(ConditionDetailParamArea1H)`
      display: block;
      padding-bottom: 5%;
      width: 100%;
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