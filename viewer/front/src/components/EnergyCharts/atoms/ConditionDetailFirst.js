import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect"
import Color from '../../../services/color'

const ConditionDetailFirst = (props) => {

  const dict = props.dict;
  const unit = props.electoric_power_data.unit;
  const year_and_month = props.electoric_power_data.year_and_month;
  const lowerTextFieldValue = props.electoric_power_data.range_slider.lowerTextFieldValue;
  const upperTextFieldValue = props.electoric_power_data.range_slider.upperTextFieldValue;
  const handleTermChange = props.electoric_power_data.handleTermChange;

  const StyledComponents = getStyledComponents(unit);
  const Area = StyledComponents.Area;
  const ParamArea = StyledComponents.ParamArea;
  const ParamAreaY = StyledComponents.ParamAreaY;
  const ParamAreaYM = StyledComponents.xxParamAreaYMx;
  const ParamAreaYMD = StyledComponents.ParamAreaYMD;
  const ParamArea1H = StyledComponents.ParamArea1H;
  const ParamLabel = StyledComponents.ParamLabel;
  const ParamButtonDiv = StyledComponents.ParamButtonDiv;
  const ParamButtonY = StyledComponents.ParamButtonY;
  const ParamButtonYM = StyledComponents.ParamButtonYM;
  const ParamButtonYMD = StyledComponents.ParamButtonYMD;
  const ParamButton1H = StyledComponents.ParamButton1H;

  return (
    <div>
      <Area>
        <ParamArea>
          <ParamAreaY 
            onClick={() => handleTermChange("y", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ParamLabel>
              <p>{dict.unit_y}</p>
            </ParamLabel>
            <ParamButtonDiv>
              <ParamButtonY />
            </ParamButtonDiv>
          </ParamAreaY>
          <ParamAreaYM 
            onClick={() => handleTermChange("ym", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ParamLabel>
              <p>{dict.unit_ym}</p>
            </ParamLabel>
            <ParamButtonDiv>
              <ParamButtonYM />
            </ParamButtonDiv>
          </ParamAreaYM>
          <ParamAreaYMD 
            onClick={() => handleTermChange("ymd", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ParamLabel>
              <p>{dict.unit_ymd}</p>
            </ParamLabel>
            <ParamButtonDiv>
              <ParamButtonYMD />
            </ParamButtonDiv>
          </ParamAreaYMD>
          <ParamArea1H 
            onClick={() => handleTermChange("1H", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ParamLabel>
              <p>{dict.unit_1h}</p>
            </ParamLabel>
            <ParamButtonDiv>
              <ParamButton1H />
            </ParamButtonDiv>
          </ParamArea1H>
        </ParamArea>
      </Area>
    </div>
  )
}

const getStyledComponents = (unit) => {

  let Area = styled.div`
  background: ${Color.gray};

  height: 5%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 5%;
` ;

  let ParamArea = styled.div`
  height: 100%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  let ParamAreaY = styled.div`
  background: ${Color.white};

  border-radius: 10px;

  height: 100%;
  width: 23%;

  padding: 0% 0% 1% 0%;
  margin:  0% 0% 0% 0%;

  display: inline-block;

  cursor: pointer;
` ;

  let ParamAreaYM = styled(ParamAreaY)`
  margin-left: 2%;
` ;

  let ParamAreaYMD = styled(ParamAreaY)`
  margin-left: 2%;
` ;

  let ParamArea1H = styled(ParamAreaY)`
  margin-left: 2%;
` ;

  let ParamLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: ${Color.black};
  
  padding: 0% 0% 0% 0%;
  margin:  4% 0% 0% 5%;
  
  line-height: 22px;

  display: inline-block;
` ;

  let ParamButtonDiv = styled.div`
  padding: 0% 0% 0% 60%;

  display: inline-block;
` ;

  let ParamButton = styled.button`
  border-radius: 2px;

  height: 100%;
  width: 140%;

  // ここは、このままじゃないときれいに出ない。
  padding-top: 100%;
  
  cursor: pointer;
` ;

  const setBackGround = (isMobile, is_target) => { 
    if(isMobile){
      return styled(ParamButton)` display:none;`;
    }
    return is_target ? styled(ParamButton)` background: #6DDCFF;` : styled(ParamButton)` background: #D8D8D8;`
  };

  const ParamButtonY = setBackGround(isMobile, unit === "y");
  const ParamButtonYM = setBackGround(isMobile, unit === "ym");
  const ParamButtonYMD = setBackGround(isMobile, unit === "ymd");
  const ParamButton1H = setBackGround(isMobile, unit === "1H");

  if (isMobile) {
    Area = styled(Area)`
    background:none;
    `;

    ParamAreaY = styled(ParamAreaY)`
    width: 100%;

    padding-bottom: 5%;

    display: block;
    `;

    ParamAreaYM = styled(ParamAreaYM)`
    width: 100%;

    padding-bottom: 5%;
    margin-top: 2%;
    margin-left: 0%;

    display: block;
    `;

    ParamAreaYMD = styled(ParamAreaYMD)`
    width: 100%;

    padding-bottom: 5%;
    margin-top: 2%;
    margin-left: 0%;

    display: block;
    `;

    ParamArea1H = styled(ParamArea1H)`
    width: 100%;

    padding-bottom: 5%;
    margin-top: 2%;
    margin-left: 0%;

    display: none;
    `;

    ParamButtonDiv = styled(ParamButtonDiv)`
    display: none;
    `;

    const setBackGround = (is_target, Component) => { 
      return is_target ? styled(Component)` background: #6DDCFF;` : styled(Component)` background: #efefef;`
    };
  
    ParamAreaY = setBackGround(unit === "y", ParamAreaY);
    ParamAreaYM = setBackGround(unit === "ym", ParamAreaYM);
    ParamAreaYMD = setBackGround(unit === "ymd", ParamAreaYMD);
    ParamArea1H = setBackGround(unit === "1H", ParamArea1H);
  }

  return {
    Area : Area,
    ParamArea : ParamArea,
    ParamAreaY : ParamAreaY,
    ParamAreaYM : ParamAreaYM,
    ParamAreaYMD : ParamAreaYMD,
    ParamArea1H : ParamArea1H,
    ParamLabel : ParamLabel,
    ParamButtonDiv : ParamButtonDiv,
    ParamButtonY : ParamButtonY,
    ParamButtonYM : ParamButtonYM,
    ParamButtonYMD : ParamButtonYMD,
    ParamButton1H : ParamButton1H,
  };
}

export default ConditionDetailFirst