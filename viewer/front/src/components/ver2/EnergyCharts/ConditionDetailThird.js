import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const ConditionDetailThird = (props) => {

  const dict = props.dict;
  const energyResoursesChecked = props.electoric_power_resource.Checked;
  const handleEnergyResoursesChange = props.electoric_power_resource.handleValueChange;

  const ConditionDetailArea3 = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

    height: 14%;
    margin-left: 5%;
    background: #fff;
    border-radius: 16px;
  ` ;

  let ConditionDetailParam = styled.div`  
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

  padding: 1%;
  width: 16.5%;
  background: #fff;
  cursor: pointer;
  border-radius: 16px;
` ;

  let ConditionDetailParamDemand = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamNuclear = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamThermal = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamHydro = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamGeothermal = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamBiomass = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamSolar = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamSolarOutputControl = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamWind = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamWindOutputControl = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamPumping = styled(ConditionDetailParam)`display: inline-block;`;
  let ConditionDetailParamInterconnection = styled(ConditionDetailParam)`display: inline-block;`;


  const ConditionDetailParamLabel = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  color: #000;
` ;

  let ConditionDetailParamButton = styled.button`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

  background: #6DDCFF;
  width: 100%;
  padding-top: 3%;
  padding-bottom: 3%;
  border-radius: 5px;
  cursor: pointer;
` ;

  const ConditionDetailParamArea1 = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

  width: 100%;
  border-radius: 12px;
` ;

  const ConditionDetailParamArea2 = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

  width: 100%;
  border-radius: 12px;
` ;

  const setBackGround = (isMobile, checked) => {
    if (isMobile){
      ConditionDetailParamButton = styled(ConditionDetailParamButton)`
      // 文字に関するスタイル
      // 枠線に関するスタイル
      // 背景に関するスタイル
      // 横幅と高さに関するスタイル
      // 余白に関するスタイル
      // ボックスサイズの算出方法を指定
      // テキストに関するスタイル
      // 表示に関するスタイル
      // 位置に関するスタイル
      // 横並び(浮動)に関するスタイル
      // 影に関するスタイル

        text-align: left;
        padding-left: 5%;
        padding-top: 4%;
        padding-bottom: 4%;
      `;
    } 
    return checked ? styled(ConditionDetailParamButton)` background: #6DDCFF;` : styled(ConditionDetailParamButton)` background: #D8D8D8;`
  };

  const ConditionDetailParamButtonDemand = setBackGround(isMobile, energyResoursesChecked.demandChecked);
  const ConditionDetailParamButtonNuclear = setBackGround(isMobile, energyResoursesChecked.nuclearChecked);
  const ConditionDetailParamButtonThermal = setBackGround(isMobile, energyResoursesChecked.thermalChecked);
  const ConditionDetailParamButtonHydro = setBackGround(isMobile, energyResoursesChecked.hydroChecked);
  const ConditionDetailParamButtonGeothermal = setBackGround(isMobile, energyResoursesChecked.geothermalChecked);
  const ConditionDetailParamButtonBiomass = setBackGround(isMobile, energyResoursesChecked.biomassChecked);
  const ConditionDetailParamButtonSolar = setBackGround(isMobile, energyResoursesChecked.solarChecked);
  const ConditionDetailParamButtonSolarOutputControl = setBackGround(isMobile, energyResoursesChecked.solarOutputControlChecked);
  const ConditionDetailParamButtonWind = setBackGround(isMobile, energyResoursesChecked.windChecked);
  const ConditionDetailParamButtonWindOutputControl = setBackGround(isMobile, energyResoursesChecked.windOutputControlChecked);
  const ConditionDetailParamButtonPumping = setBackGround(isMobile, energyResoursesChecked.pumpingChecked);
  const ConditionDetailParamButtonInterconnection = setBackGround(isMobile, energyResoursesChecked.interconnectionChecked);

  if (isMobile){
    ConditionDetailParamDemand = styled(ConditionDetailParamDemand)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル

      display:block;
      width: 100%;
      border-radius: 10px;
    `;
    ConditionDetailParamNuclear = styled(ConditionDetailParamNuclear)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル

      display:block;
      width: 100%;
      border-radius: 10px;
    `;
    ConditionDetailParamThermal = styled(ConditionDetailParamThermal)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル

      display:block;
      width: 100%;
      border-radius: 10px;
    `;
    ConditionDetailParamHydro = styled(ConditionDetailParamHydro)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル

      display:block;
      width: 100%;
      border-radius: 10px;
    `;
    ConditionDetailParamGeothermal = styled(ConditionDetailParamGeothermal)`display:none;`;
    ConditionDetailParamBiomass = styled(ConditionDetailParamBiomass)`display:none;`;
    ConditionDetailParamSolar = styled(ConditionDetailParamSolar)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル

      display:block;
      width: 100%;
      border-radius: 10px;
    `;
    ConditionDetailParamSolarOutputControl = styled(ConditionDetailParamSolarOutputControl)`display:none;`;
    ConditionDetailParamWind = styled(ConditionDetailParamWind)`
    // 文字に関するスタイル
    // 枠線に関するスタイル
    // 背景に関するスタイル
    // 横幅と高さに関するスタイル
    // 余白に関するスタイル
    // ボックスサイズの算出方法を指定
    // テキストに関するスタイル
    // 表示に関するスタイル
    // 位置に関するスタイル
    // 横並び(浮動)に関するスタイル
    // 影に関するスタイル
    
      display:block;
      width: 100%;
      border-radius: 10px;
    `;
    ConditionDetailParamWindOutputControl = styled(ConditionDetailParamWindOutputControl)`display:none;`;
    ConditionDetailParamPumping = styled(ConditionDetailParamPumping)`display:none;`;
    ConditionDetailParamInterconnection = styled(ConditionDetailParamInterconnection)`display:none;`;
  }
  return (
    <div>
      <ConditionDetailArea3>
        <ConditionDetailParamArea1>
          <ConditionDetailParamDemand onClick={() => handleEnergyResoursesChange.handleDemandChange(!energyResoursesChecked.demandChecked)}>
            <ConditionDetailParamButtonDemand>
              <ConditionDetailParamLabel>
                <p>{dict.demand}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonDemand>
          </ConditionDetailParamDemand>
          <ConditionDetailParamNuclear onClick={() => handleEnergyResoursesChange.handleNuclearChange(!energyResoursesChecked.nuclearChecked)}>
            <ConditionDetailParamButtonNuclear>
              <ConditionDetailParamLabel>
                <p>{dict.nuclear}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonNuclear>
          </ConditionDetailParamNuclear>
          <ConditionDetailParamThermal onClick={() => handleEnergyResoursesChange.handleThermalChange(!energyResoursesChecked.thermalChecked)}>
            <ConditionDetailParamButtonThermal>
              <ConditionDetailParamLabel>
                <p>{dict.thermal}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonThermal>
          </ConditionDetailParamThermal>
          <ConditionDetailParamHydro onClick={() => handleEnergyResoursesChange.handleHydroChange(!energyResoursesChecked.hydroChecked)}>
            <ConditionDetailParamButtonHydro>
              <ConditionDetailParamLabel>
                <p>{dict.hydro}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonHydro>
          </ConditionDetailParamHydro>
          <ConditionDetailParamGeothermal onClick={() => handleEnergyResoursesChange.handleGeothermalChange(!energyResoursesChecked.geothermalChecked)}>
            <ConditionDetailParamButtonGeothermal>
              <ConditionDetailParamLabel>
                <p>{dict.geothermal}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonGeothermal>
          </ConditionDetailParamGeothermal>
          <ConditionDetailParamBiomass onClick={() => handleEnergyResoursesChange.handleBiomassChange(!energyResoursesChecked.biomassChecked)}>
            <ConditionDetailParamButtonBiomass>
              <ConditionDetailParamLabel>
                <p>{dict.biomass}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonBiomass>
          </ConditionDetailParamBiomass>
        </ConditionDetailParamArea1>
        <ConditionDetailParamArea2>
          <ConditionDetailParamSolar onClick={() => handleEnergyResoursesChange.handleSolarChange(!energyResoursesChecked.solarChecked)}>
            <ConditionDetailParamButtonSolar>
              <ConditionDetailParamLabel>
                <p>{dict.solar}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonSolar>
          </ConditionDetailParamSolar>
          <ConditionDetailParamSolarOutputControl onClick={() => handleEnergyResoursesChange.handleSolarOutputControlChange(!energyResoursesChecked.solarOutputControlChecked)}>
            <ConditionDetailParamButtonSolarOutputControl>
              <ConditionDetailParamLabel>
                <p>{dict.solar_output_control}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonSolarOutputControl>
          </ConditionDetailParamSolarOutputControl>
          <ConditionDetailParamWind onClick={() => handleEnergyResoursesChange.handleWindChange(!energyResoursesChecked.windChecked)}>
            <ConditionDetailParamButtonWind>
              <ConditionDetailParamLabel>
                <p>{dict.wind}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonWind>
          </ConditionDetailParamWind>
          <ConditionDetailParamWindOutputControl onClick={() => handleEnergyResoursesChange.handleWindOutputControlChange(!energyResoursesChecked.windOutputControlChecked)}>
            <ConditionDetailParamButtonWindOutputControl>
              <ConditionDetailParamLabel>
                <p>{dict.wind_output_control}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonWindOutputControl>
          </ConditionDetailParamWindOutputControl>
          <ConditionDetailParamPumping onClick={() => handleEnergyResoursesChange.handlePumpingChange(!energyResoursesChecked.pumpingChecked)}>
            <ConditionDetailParamButtonPumping>
              <ConditionDetailParamLabel>
                <p>{dict.pumping}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonPumping>
          </ConditionDetailParamPumping>
          <ConditionDetailParamInterconnection onClick={() => handleEnergyResoursesChange.handleInterconnectionChange(!energyResoursesChecked.interconnectionChecked)}>
            <ConditionDetailParamButtonInterconnection>
              <ConditionDetailParamLabel>
                <p>{dict.interconnection}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonInterconnection>
          </ConditionDetailParamInterconnection>
        </ConditionDetailParamArea2>
      </ConditionDetailArea3>
    </div>
  )
}

export default ConditionDetailThird