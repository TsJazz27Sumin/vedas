import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const ConditionDetailThird = (props) => {

  const dict = props.dict;
  const energyResoursesChecked = props.electoric_power_resource.Checked;
  const handleEnergyResoursesChange = props.electoric_power_resource.handleValueChange;

  const ConditionDetailArea3 = styled.div`
    height: 14%;
    margin-left: 5%;
    background: #fff;
    border-radius: 16px;
  ` ;

  let ConditionDetailParam = styled.div`
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

  let ConditionDetailParamButton = styled.button`
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

  const setBackGround = (isMobile, checked) => {
    if (isMobile){
      ConditionDetailParamButton = styled(ConditionDetailParamButton)`
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
    ConditionDetailParam = styled(ConditionDetailParam)`
      display:block;
      width: 100%;
      border-radius: 10px;
    `;
  }
  return (
    <div>
      <ConditionDetailArea3>
        <ConditionDetailParamArea1>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleDemandChange(!energyResoursesChecked.demandChecked)}>
            <ConditionDetailParamButtonDemand>
              <ConditionDetailParamLabel>
                <p>{dict.demand}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonDemand>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleNuclearChange(!energyResoursesChecked.nuclearChecked)}>
            <ConditionDetailParamButtonNuclear>
              <ConditionDetailParamLabel>
                <p>{dict.nuclear}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonNuclear>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleThermalChange(!energyResoursesChecked.thermalChecked)}>
            <ConditionDetailParamButtonThermal>
              <ConditionDetailParamLabel>
                <p>{dict.thermal}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonThermal>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleHydroChange(!energyResoursesChecked.hydroChecked)}>
            <ConditionDetailParamButtonHydro>
              <ConditionDetailParamLabel>
                <p>{dict.hydro}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonHydro>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleGeothermalChange(!energyResoursesChecked.geothermalChecked)}>
            <ConditionDetailParamButtonGeothermal>
              <ConditionDetailParamLabel>
                <p>{dict.geothermal}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonGeothermal>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleBiomassChange(!energyResoursesChecked.biomassChecked)}>
            <ConditionDetailParamButtonBiomass>
              <ConditionDetailParamLabel>
                <p>{dict.biomass}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonBiomass>
          </ConditionDetailParam>
        </ConditionDetailParamArea1>
        <ConditionDetailParamArea2>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleSolarChange(!energyResoursesChecked.solarChecked)}>
            <ConditionDetailParamButtonSolar>
              <ConditionDetailParamLabel>
                <p>{dict.solar}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonSolar>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleSolarOutputControlChange(!energyResoursesChecked.solarOutputControlChecked)}>
            <ConditionDetailParamButtonSolarOutputControl>
              <ConditionDetailParamLabel>
                <p>{dict.solar_output_control}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonSolarOutputControl>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleWindChange(!energyResoursesChecked.windChecked)}>
            <ConditionDetailParamButtonWind>
              <ConditionDetailParamLabel>
                <p>{dict.wind}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonWind>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleWindOutputControlChange(!energyResoursesChecked.windOutputControlChecked)}>
            <ConditionDetailParamButtonWindOutputControl>
              <ConditionDetailParamLabel>
                <p>{dict.wind_output_control}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonWindOutputControl>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handlePumpingChange(!energyResoursesChecked.pumpingChecked)}>
            <ConditionDetailParamButtonPumping>
              <ConditionDetailParamLabel>
                <p>{dict.pumping}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonPumping>
          </ConditionDetailParam>
          <ConditionDetailParam onClick={() => handleEnergyResoursesChange.handleInterconnectionChange(!energyResoursesChecked.interconnectionChecked)}>
            <ConditionDetailParamButtonInterconnection>
              <ConditionDetailParamLabel>
                <p>{dict.interconnection}</p>
              </ConditionDetailParamLabel>
            </ConditionDetailParamButtonInterconnection>
          </ConditionDetailParam>
        </ConditionDetailParamArea2>
      </ConditionDetailArea3>
    </div>
  )
}

export default ConditionDetailThird