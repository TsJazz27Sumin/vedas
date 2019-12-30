import React from 'react'
import styled from 'styled-components';


const ConditionDetailThird = (props) => {

  const dict = props.dict;

  const ConditionDetailArea3 = styled.div`
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

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  color: #000;
` ;

  const ConditionDetailParamButton = styled.button`
  background: #6DDCFF;
  width: 100%;
  padding-top: 3%;
  padding-bottom: 3%;
  border-radius: 5px;
  cursor: pointer;
` ;

  const ConditionDetailParamArea1 = styled.div`
  width: 100%;
  border-radius: 12px;
` ;

  const ConditionDetailParamArea2 = styled.div`
  width: 100%;
  border-radius: 12px;
` ;

  return (
    <div>
      <ConditionDetailArea3>
        <ConditionDetailParamArea1>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.demand}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.nuclear}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.thermal}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.hydro}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.geothermal}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.biomass}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
        </ConditionDetailParamArea1>
        <ConditionDetailParamArea2>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.solar}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.solar_output_control}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.wind}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.wind_output_control}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.pumping}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
          <ConditionDetailParam>
            <ConditionDetailParamButton>
              <ConditionDetailParamLabel>
                <p>{dict.interconnection}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButton>
          </ConditionDetailParam>
        </ConditionDetailParamArea2>
      </ConditionDetailArea3>
    </div>
  )
}

export default ConditionDetailThird