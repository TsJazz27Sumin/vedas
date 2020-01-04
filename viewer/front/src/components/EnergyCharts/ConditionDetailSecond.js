import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../services/color';

const ConditionDetailSecond = (props) => {

  const dict = props.dict;
  const electoric_power_company = props.electoric_power_company;
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  const handleElectricPowersChange = electoric_power_company.handleValueChange;

  let ConditionDetailArea2 = styled.div`
  background: ${Color.white};
  border-radius: 16px;

  height: 14%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  margin-left: 5%;
  ` ;

  let ConditionDetailParam = styled.div`
  background: ${Color.white};
  border-radius: 16px;

  height: auto;
  width: 16.5%;

  padding: 1% 1% 1% 1%;
  margin:  0% 0% 0% 0%;

  cursor: pointer;
` ;

  let ConditionDetailParamAll = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamJapan = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamHepco = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamTohokuepco = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamRikuden = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamTepco = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamChuden = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamKepco = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamEnergia = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamYonden = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamKyuden = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamOkiden = styled(ConditionDetailParam)`display: inline-block;`;

  let ConditionDetailParamLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #000;
  
  padding: 0% 0% 0% 0%;
  margin:  4% 0% 0% 5%;
  
  display: inline-block;

  line-height: 22px;
` ;

  let ConditionDetailParamButton = styled.button`
  border-radius: 2px;

  height: auto;
  width: 13%;

  padding: 10% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  cursor: pointer;
` ;

  const setBackGround = (isMobile, checked) => {
    if (isMobile){
      return styled(ConditionDetailParamButton)` display: none;`;
    }
    return checked ? styled(ConditionDetailParamButton)` background: #6DDCFF;` : styled(ConditionDetailParamButton)` background: #D8D8D8;`
  };

  let ConditionDetailParamButtonAll = setBackGround(isMobile, allChecked);
  let ConditionDetailParamButtonJapan = setBackGround(isMobile, electricPowersChecked.japanChecked);
  let ConditionDetailParamButtonHepco = setBackGround(isMobile, electricPowersChecked.hepcoChecked);
  let ConditionDetailParamButtonTohokuepco = setBackGround(isMobile, electricPowersChecked.tohokuepcoChecked);
  let ConditionDetailParamButtonRikuden = setBackGround(isMobile, electricPowersChecked.rikudenChecked);
  let ConditionDetailParamButtonTepco = setBackGround(isMobile, electricPowersChecked.tepcoChecked);
  let ConditionDetailParamButtonChuden = setBackGround(isMobile, electricPowersChecked.chudenChecked);
  let ConditionDetailParamButtonKepco = setBackGround(isMobile, electricPowersChecked.kepcoChecked);
  let ConditionDetailParamButtonEnergia = setBackGround(isMobile, electricPowersChecked.energiaChecked);
  let ConditionDetailParamButtonYonden = setBackGround(isMobile, electricPowersChecked.yondenChecked);
  let ConditionDetailParamButtonKyuden = setBackGround(isMobile, electricPowersChecked.kyudenChecked);
  let ConditionDetailParamButtonOkiden = setBackGround(isMobile, electricPowersChecked.okidenChecked);

  let ConditionDetailParamArea1 = styled.div`
  height: auto;
  width: 100%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  let ConditionDetailParamArea2 = styled.div`
  border-radius: 12px;
  
  height: auto;
  width: 100%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  if (isMobile) {
    ConditionDetailArea2 = styled(ConditionDetailArea2)`
      background: none;
    `;
    ConditionDetailParamButtonAll = styled(ConditionDetailParamButtonAll)`display:none`;
    ConditionDetailParamButtonJapan = styled(ConditionDetailParamButtonJapan)`display:none`;
    ConditionDetailParamButtonHepco = styled(ConditionDetailParamButtonHepco)`display:none`;
    ConditionDetailParamButtonTohokuepco = styled(ConditionDetailParamButtonTohokuepco)`display:none`;
    ConditionDetailParamButtonRikuden = styled(ConditionDetailParamButtonRikuden)`display:none`;
    ConditionDetailParamButtonTepco = styled(ConditionDetailParamButtonTepco)`display:none`;
    ConditionDetailParamButtonChuden = styled(ConditionDetailParamButtonChuden)`display:none`;
    ConditionDetailParamButtonKepco = styled(ConditionDetailParamButtonKepco)`display:none`;
    ConditionDetailParamButtonEnergia = styled(ConditionDetailParamButtonEnergia)`display:none`;
    ConditionDetailParamButtonYonden = styled(ConditionDetailParamButtonYonden)`display:none`;
    ConditionDetailParamButtonKyuden = styled(ConditionDetailParamButtonKyuden)`display:none`;
    ConditionDetailParamButtonOkiden = styled(ConditionDetailParamButtonOkiden)`display:none`;

    ConditionDetailParam = styled(ConditionDetailParam)`
    border-radius: 10px;

    width: 100%;
    
    margin-top:2%;
    margin-bottom:2%;
    padding-bottom: 4%;
    `;

    const setBackGround = (checked) => {
      return checked ? styled(ConditionDetailParam)` background: #6DDCFF;` : styled(ConditionDetailParam)` background: #efefef;`
    };
      
    ConditionDetailParamAll = styled(ConditionDetailParam)` display:none;`
    ConditionDetailParamJapan = setBackGround(electricPowersChecked.japanChecked);
    ConditionDetailParamHepco = setBackGround(electricPowersChecked.hepcoChecked);
    ConditionDetailParamTohokuepco = setBackGround(electricPowersChecked.tohokuepcoChecked);
    ConditionDetailParamRikuden = setBackGround(electricPowersChecked.rikudenChecked);
    ConditionDetailParamTepco = setBackGround(electricPowersChecked.tepcoChecked);
    ConditionDetailParamChuden = setBackGround(electricPowersChecked.chudenChecked);
    ConditionDetailParamKepco = setBackGround(electricPowersChecked.kepcoChecked);
    ConditionDetailParamEnergia = setBackGround(electricPowersChecked.energiaChecked);
    ConditionDetailParamYonden = setBackGround(electricPowersChecked.yondenChecked);
    ConditionDetailParamKyuden = setBackGround(electricPowersChecked.kyudenChecked);
    ConditionDetailParamOkiden = setBackGround(electricPowersChecked.okidenChecked);
  }

  return (
    <div>
      <ConditionDetailArea2>
        <ConditionDetailParamArea1>
          <ConditionDetailParamAll
            onClick={() => handleAllChange(!allChecked)}
          >
            <ConditionDetailParamButtonAll />
            <ConditionDetailParamLabel>
              <p>{dict.all}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamAll>
          <ConditionDetailParamJapan
            onClick={() => handleElectricPowersChange.handleJapanChange(!electricPowersChecked.japanChecked)}
          >
            <ConditionDetailParamButtonJapan />
            <ConditionDetailParamLabel>
              <p>{dict.japan}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamJapan>
          <ConditionDetailParamHepco
            onClick={() => handleElectricPowersChange.handleHepcoChange(!electricPowersChecked.hepcoChecked)}
          >
            <ConditionDetailParamButtonHepco />
            <ConditionDetailParamLabel>
              <p>{dict.hepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamHepco>
          <ConditionDetailParamTohokuepco
            onClick={() => handleElectricPowersChange.handleTohokuepcoChange(!electricPowersChecked.tohokuepcoChecked)}
          >
            <ConditionDetailParamButtonTohokuepco />
            <ConditionDetailParamLabel>
              <p>{dict.tohokuepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamTohokuepco>
          <ConditionDetailParamRikuden
            onClick={() => handleElectricPowersChange.handleRikudenChange(!electricPowersChecked.rikudenChecked)}
          >
            <ConditionDetailParamButtonRikuden />
            <ConditionDetailParamLabel>
              <p>{dict.rikuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamRikuden>
          <ConditionDetailParamTepco
            onClick={() => handleElectricPowersChange.handleTepcoChange(!electricPowersChecked.tepcoChecked)}
          >
            <ConditionDetailParamButtonTepco />
            <ConditionDetailParamLabel>
              <p>{dict.tepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamTepco>
        </ConditionDetailParamArea1>
        <ConditionDetailParamArea2>
          <ConditionDetailParamChuden
            onClick={() => handleElectricPowersChange.handleChudenChange(!electricPowersChecked.chudenChecked)}
          >
            <ConditionDetailParamButtonChuden />
            <ConditionDetailParamLabel>
              <p>{dict.chuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamChuden>
          <ConditionDetailParamKepco
            onClick={() => handleElectricPowersChange.handleKepcoChange(!electricPowersChecked.kepcoChecked)}
          >
            <ConditionDetailParamButtonKepco />
            <ConditionDetailParamLabel>
              <p>{dict.kepco}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamKepco>
          <ConditionDetailParamEnergia
            onClick={() => handleElectricPowersChange.handleEnergiaChange(!electricPowersChecked.energiaChecked)}
          >
            <ConditionDetailParamButtonEnergia />
            <ConditionDetailParamLabel>
              <p>{dict.energia}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamEnergia>
          <ConditionDetailParamYonden
            onClick={() => handleElectricPowersChange.handleYondenChange(!electricPowersChecked.yondenChecked)}
          >
            <ConditionDetailParamButtonYonden />
            <ConditionDetailParamLabel>
              <p>{dict.yonden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamYonden>
          <ConditionDetailParamKyuden
            onClick={() => handleElectricPowersChange.handleKyudenChange(!electricPowersChecked.kyudenChecked)}
          >
            <ConditionDetailParamButtonKyuden />
            <ConditionDetailParamLabel>
              <p>{dict.kyuden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamKyuden>
          <ConditionDetailParamOkiden
            onClick={() => handleElectricPowersChange.handleOkidenChange(!electricPowersChecked.okidenChecked)}
          >
            <ConditionDetailParamButtonOkiden />
            <ConditionDetailParamLabel>
              <p>{dict.okiden}</p>
            </ConditionDetailParamLabel>
          </ConditionDetailParamOkiden>
        </ConditionDetailParamArea2>
      </ConditionDetailArea2>
    </div>
  )
}

export default ConditionDetailSecond