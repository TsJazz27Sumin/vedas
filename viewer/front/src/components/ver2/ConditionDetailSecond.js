import React from 'react'
import styled from 'styled-components';


const ConditionDetailSecond = (props) => {

  const dict = props.dict;

  const ConditionDetailArea2 = styled.div`
    height: 14%;
    margin-left: 5%;
    background: #fff;
    border-radius: 16px;
  ` ;
  
  const ConditionDetailParam = styled.div`
  display: inline-block;
  padding: 1%;
  width: 16.5%;
  background: #fff;
  cursor: pointer;
  border-radius: 16px;
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

  const ConditionDetailParamButton = styled.button`
  background: #6DDCFF;
  width: 13%;
  padding-top: 10%;
  border-radius: 2px;
  cursor: pointer;
` ;

  const ConditionDetailParamArea1 = styled.div`
  width: 100%;
  
` ;

  const ConditionDetailParamArea2 = styled.div`
  width: 100%;
  border-radius: 12px;
` ;

  return (
    <div>
      <ConditionDetailArea2>
        <ConditionDetailParamArea1>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.all}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.japan}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.hepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.tohokuepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.rikuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.tepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
        </ConditionDetailParamArea1>
        <ConditionDetailParamArea2>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.chuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.kepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.energia}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.yonden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.kyuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton />
            <ConditionDetailParamLabel>
              <p>{dict.okiden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParam>
        </ConditionDetailParamArea2>
      </ConditionDetailArea2>
    </div>
  )
}

export default ConditionDetailSecond