import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const ConditionDetailThird = (props) => {

  const dict = props.dict;
  const energyResoursesChecked = props.electoric_power_resource.Checked;
  const handleEnergyResoursesChange = props.electoric_power_resource.handleValueChange;

  const ConditionDetailArea3 = styled.div`
  background: #fff;
  
  border-radius: 16px;

  height: 14%;
  
  margin-left: 5%;
  ` ;

  let ConditionDetailParam = styled.div`  
  background: #fff;

  border-radius: 16px;

  width: 16.5%;

  padding: 1%;
  
  cursor: pointer;
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
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  
  display: inline-block;

  line-height: 22px;
` ;

  let ConditionDetailParamButton = styled.button`
  background: #6DDCFF;

  border-radius: 5px;

  width: 100%;
  
  padding-top: 3%;
  padding-bottom: 3%;
  
  cursor: pointer;
` ;

  const ConditionDetailParamArea1 = styled.div`
  border-radius: 12px;

  width: 100%;
` ;

  const ConditionDetailParamArea2 = styled.div`
  border-radius: 12px;

  width: 100%;
` ;

  const setBackGround = (isMobile, checked) => {
    if (isMobile){
      ConditionDetailParamButton = styled(ConditionDetailParamButton)`
      padding-top: 4%;
      padding-left: 5%;
      padding-bottom: 4%;

      text-align: left;
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
    border-radius: 10px;
    
    width: 100%;
    
    display:block;
    `;

    ConditionDetailParamNuclear = styled(ConditionDetailParamNuclear)`
    width: 100%;

    display:block;
    
    border-radius: 10px;
    `;

    ConditionDetailParamThermal = styled(ConditionDetailParamThermal)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    
    ConditionDetailParamHydro = styled(ConditionDetailParamHydro)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    
    ConditionDetailParamGeothermal = styled(ConditionDetailParamGeothermal)`display:none;`;
    ConditionDetailParamBiomass = styled(ConditionDetailParamBiomass)`display:none;`;
    ConditionDetailParamSolar = styled(ConditionDetailParamSolar)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    ConditionDetailParamSolarOutputControl = styled(ConditionDetailParamSolarOutputControl)`display:none;`;
    ConditionDetailParamWind = styled(ConditionDetailParamWind)`
    border-radius: 10px;

    width: 100%;

    display:block;
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