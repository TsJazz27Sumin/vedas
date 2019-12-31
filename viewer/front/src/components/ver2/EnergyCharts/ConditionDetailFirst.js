import React from 'react'
import styled from 'styled-components';

const ConditionDetailFirst = (props) => {

  const dict = props.dict;
  const unit = props.electoric_power_data.unit;
  const year_and_month = props.electoric_power_data.year_and_month;
  const lowerTextFieldValue = props.electoric_power_data.range_slider.lowerTextFieldValue;
  const upperTextFieldValue = props.electoric_power_data.range_slider.upperTextFieldValue;
  const handleTermChange = props.electoric_power_data.handleTermChange;

  const ConditionDetailArea1 = styled.div`
  height: 5%;
  margin-left: 5%;
  background: #efefef;
` ;

  const ConditionDetailParamArea = styled.div`
  height: 100%;
` ;

  const ConditionDetailParamArea1 = styled.div`
  display: inline-block;
  padding-bottom: 1%;
  height: 100%;
  width: 23%;
  background: #fff;
  border-radius: 10px;
  cursor: pointer;
` ;

  const ConditionDetailParamArea2 = styled(ConditionDetailParamArea1)`
  margin-left: 2%;
` ;

  const ConditionDetailParamLabel = styled.div`
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

  const setBackGround = (is_target) => { 
    return is_target ? styled(ConditionDetailParamButton)` background: #6DDCFF;` : styled(ConditionDetailParamButton)` background: #D8D8D8;`
  };

  const ConditionDetailParamButtonY = setBackGround(unit === "y");
  const ConditionDetailParamButtonYM = setBackGround(unit === "ym");
  const ConditionDetailParamButtonYMD = setBackGround(unit === "ymd");
  const ConditionDetailParamButton1H = setBackGround(unit === "1H");

  return (
    <div>
      <ConditionDetailArea1>
        <ConditionDetailParamArea>
          <ConditionDetailParamArea1 
            onClick={() => handleTermChange("y", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_y}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButtonY />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea1>
          <ConditionDetailParamArea2 
            onClick={() => handleTermChange("ym", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_ym}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButtonYM />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea2>
          <ConditionDetailParamArea2 
            onClick={() => handleTermChange("ymd", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_ymd}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButtonYMD />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea2>
          <ConditionDetailParamArea2 
            onClick={() => handleTermChange("1H", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
          >
            <ConditionDetailParamLabel>
              <p>{dict.unit_1h}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButton1H />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea2>
        </ConditionDetailParamArea>
      </ConditionDetailArea1>
    </div>
  )
}

export default ConditionDetailFirst