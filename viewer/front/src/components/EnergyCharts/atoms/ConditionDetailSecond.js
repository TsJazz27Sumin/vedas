import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../../services/color';

const ConditionDetailSecond = (props) => {

  const dict = props.dict;
  const electoric_power_company = props.electoric_power_company;
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  const handleElectricPowersChange = electoric_power_company.handleValueChange;

  let Area = styled.div`
  background: ${Color.white};
  border-radius: 16px;

  height: 14%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  margin-left: 5%;
  ` ;

  let Param = styled.div`
  background: ${Color.white};
  border-radius: 16px;

  height: auto;
  width: 16.5%;

  padding: 1% 1% 1% 1%;
  margin:  0% 0% 0% 0%;

  cursor: pointer;
` ;

  let ParamAll = styled(Param)`display: inline-block;`;
  let ParamJapan = styled(Param)`display: inline-block;`;
  let ParamHepco = styled(Param)`display: inline-block;`;
  let ParamTohokuepco = styled(Param)`display: inline-block;`;
  let ParamRikuden = styled(Param)`display: inline-block;`;
  let ParamTepco = styled(Param)`display: inline-block;`;
  let ParamChuden = styled(Param)`display: inline-block;`;
  let ParamKepco = styled(Param)`display: inline-block;`;
  let ParamEnergia = styled(Param)`display: inline-block;`;
  let ParamYonden = styled(Param)`display: inline-block;`;
  let ParamKyuden = styled(Param)`display: inline-block;`;
  let ParamOkiden = styled(Param)`display: inline-block;`;

  let ParamLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #000;
  
  padding: 0% 0% 0% 0%;
  margin:  4% 0% 0% 5%;
  
  display: inline-block;

  line-height: 22px;
` ;

  let ParamButton = styled.button`
  border-radius: 2px;

  height: auto;
  width: 13%;

  padding: 10% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  cursor: pointer;
` ;

  const setBackGround = (isMobile, checked) => {
    if (isMobile){
      return styled(ParamButton)` display: none;`;
    }
    return checked ? styled(ParamButton)` background: #6DDCFF;` : styled(ParamButton)` background: #D8D8D8;`
  };

  let ParamButtonAll = setBackGround(isMobile, allChecked);
  let ParamButtonJapan = setBackGround(isMobile, electricPowersChecked.japanChecked);
  let ParamButtonHepco = setBackGround(isMobile, electricPowersChecked.hepcoChecked);
  let ParamButtonTohokuepco = setBackGround(isMobile, electricPowersChecked.tohokuepcoChecked);
  let ParamButtonRikuden = setBackGround(isMobile, electricPowersChecked.rikudenChecked);
  let ParamButtonTepco = setBackGround(isMobile, electricPowersChecked.tepcoChecked);
  let ParamButtonChuden = setBackGround(isMobile, electricPowersChecked.chudenChecked);
  let ParamButtonKepco = setBackGround(isMobile, electricPowersChecked.kepcoChecked);
  let ParamButtonEnergia = setBackGround(isMobile, electricPowersChecked.energiaChecked);
  let ParamButtonYonden = setBackGround(isMobile, electricPowersChecked.yondenChecked);
  let ParamButtonKyuden = setBackGround(isMobile, electricPowersChecked.kyudenChecked);
  let ParamButtonOkiden = setBackGround(isMobile, electricPowersChecked.okidenChecked);

  let ParamArea1 = styled.div`
  height: auto;
  width: 100%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  let ParamArea2 = styled.div`
  border-radius: 12px;
  
  height: auto;
  width: 100%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  if (isMobile) {
    Area = styled(Area)`
      background: none;
    `;
    ParamButtonAll = styled(ParamButtonAll)`display:none`;
    ParamButtonJapan = styled(ParamButtonJapan)`display:none`;
    ParamButtonHepco = styled(ParamButtonHepco)`display:none`;
    ParamButtonTohokuepco = styled(ParamButtonTohokuepco)`display:none`;
    ParamButtonRikuden = styled(ParamButtonRikuden)`display:none`;
    ParamButtonTepco = styled(ParamButtonTepco)`display:none`;
    ParamButtonChuden = styled(ParamButtonChuden)`display:none`;
    ParamButtonKepco = styled(ParamButtonKepco)`display:none`;
    ParamButtonEnergia = styled(ParamButtonEnergia)`display:none`;
    ParamButtonYonden = styled(ParamButtonYonden)`display:none`;
    ParamButtonKyuden = styled(ParamButtonKyuden)`display:none`;
    ParamButtonOkiden = styled(ParamButtonOkiden)`display:none`;

    Param = styled(Param)`
    border-radius: 10px;

    width: 100%;
    
    margin-top:2%;
    margin-bottom:2%;
    padding-bottom: 4%;
    `;

    const setBackGround = (checked) => {
      return checked ? styled(Param)` background: #6DDCFF;` : styled(Param)` background: #efefef;`
    };
      
    ParamAll = styled(Param)` display:none;`
    ParamJapan = setBackGround(electricPowersChecked.japanChecked);
    ParamHepco = setBackGround(electricPowersChecked.hepcoChecked);
    ParamTohokuepco = setBackGround(electricPowersChecked.tohokuepcoChecked);
    ParamRikuden = setBackGround(electricPowersChecked.rikudenChecked);
    ParamTepco = setBackGround(electricPowersChecked.tepcoChecked);
    ParamChuden = setBackGround(electricPowersChecked.chudenChecked);
    ParamKepco = setBackGround(electricPowersChecked.kepcoChecked);
    ParamEnergia = setBackGround(electricPowersChecked.energiaChecked);
    ParamYonden = setBackGround(electricPowersChecked.yondenChecked);
    ParamKyuden = setBackGround(electricPowersChecked.kyudenChecked);
    ParamOkiden = setBackGround(electricPowersChecked.okidenChecked);
  }

  return (
    <div>
      <Area>
        <ParamArea1>
          <ParamAll
            onClick={() => handleAllChange(!allChecked)}
          >
            <ParamButtonAll />
            <ParamLabel>
              <p>{dict.all}</p>
            </ParamLabel>
          </ParamAll>
          <ParamJapan
            onClick={() => handleElectricPowersChange.handleJapanChange(!electricPowersChecked.japanChecked)}
          >
            <ParamButtonJapan />
            <ParamLabel>
              <p>{dict.japan}</p>
            </ParamLabel>
          </ParamJapan>
          <ParamHepco
            onClick={() => handleElectricPowersChange.handleHepcoChange(!electricPowersChecked.hepcoChecked)}
          >
            <ParamButtonHepco />
            <ParamLabel>
              <p>{dict.hepco}</p>
            </ParamLabel>
          </ParamHepco>
          <ParamTohokuepco
            onClick={() => handleElectricPowersChange.handleTohokuepcoChange(!electricPowersChecked.tohokuepcoChecked)}
          >
            <ParamButtonTohokuepco />
            <ParamLabel>
              <p>{dict.tohokuepco}</p>
            </ParamLabel>
          </ParamTohokuepco>
          <ParamRikuden
            onClick={() => handleElectricPowersChange.handleRikudenChange(!electricPowersChecked.rikudenChecked)}
          >
            <ParamButtonRikuden />
            <ParamLabel>
              <p>{dict.rikuden}</p>
            </ParamLabel>
          </ParamRikuden>
          <ParamTepco
            onClick={() => handleElectricPowersChange.handleTepcoChange(!electricPowersChecked.tepcoChecked)}
          >
            <ParamButtonTepco />
            <ParamLabel>
              <p>{dict.tepco}</p>
            </ParamLabel>
          </ParamTepco>
        </ParamArea1>
        <ParamArea2>
          <ParamChuden
            onClick={() => handleElectricPowersChange.handleChudenChange(!electricPowersChecked.chudenChecked)}
          >
            <ParamButtonChuden />
            <ParamLabel>
              <p>{dict.chuden}</p>
            </ParamLabel>
          </ParamChuden>
          <ParamKepco
            onClick={() => handleElectricPowersChange.handleKepcoChange(!electricPowersChecked.kepcoChecked)}
          >
            <ParamButtonKepco />
            <ParamLabel>
              <p>{dict.kepco}</p>
            </ParamLabel>
          </ParamKepco>
          <ParamEnergia
            onClick={() => handleElectricPowersChange.handleEnergiaChange(!electricPowersChecked.energiaChecked)}
          >
            <ParamButtonEnergia />
            <ParamLabel>
              <p>{dict.energia}</p>
            </ParamLabel>
          </ParamEnergia>
          <ParamYonden
            onClick={() => handleElectricPowersChange.handleYondenChange(!electricPowersChecked.yondenChecked)}
          >
            <ParamButtonYonden />
            <ParamLabel>
              <p>{dict.yonden}</p>
            </ParamLabel>
          </ParamYonden>
          <ParamKyuden
            onClick={() => handleElectricPowersChange.handleKyudenChange(!electricPowersChecked.kyudenChecked)}
          >
            <ParamButtonKyuden />
            <ParamLabel>
              <p>{dict.kyuden}</p>
            </ParamLabel>
          </ParamKyuden>
          <ParamOkiden
            onClick={() => handleElectricPowersChange.handleOkidenChange(!electricPowersChecked.okidenChecked)}
          >
            <ParamButtonOkiden />
            <ParamLabel>
              <p>{dict.okiden}</p>
            </ParamLabel>
          </ParamOkiden>
        </ParamArea2>
      </Area>
    </div>
  )
}

export default ConditionDetailSecond