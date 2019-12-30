import React from 'react'
import styled from 'styled-components';

const ConditionDetailFirst = (props) => {

  const dict = props.dict;

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

  const ConditionDetailParamButton = styled.button`
  background: #6DDCFF;
  width: 140%;
  padding-top: 100%;
  border-radius: 2px;
  cursor: pointer;
` ;

  return (
    <div>
      <ConditionDetailArea1>
        <ConditionDetailParamArea>
          <ConditionDetailParamArea1>
            <ConditionDetailParamLabel>
              <p>{dict.unit_y}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButton />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea1>
          <ConditionDetailParamArea2>
            <ConditionDetailParamLabel>
              <p>{dict.unit_ym}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButton />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea2>
          <ConditionDetailParamArea2>
            <ConditionDetailParamLabel>
              <p>{dict.unit_ymd}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButton />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea2>
          <ConditionDetailParamArea2>
            <ConditionDetailParamLabel>
              <p>{dict.unit_1h}</p>
            </ConditionDetailParamLabel>
            <ConditionDetailParamButtonDiv>
              <ConditionDetailParamButton />
            </ConditionDetailParamButtonDiv>
          </ConditionDetailParamArea2>
        </ConditionDetailParamArea>
      </ConditionDetailArea1>
    </div>
  )
}

export default ConditionDetailFirst