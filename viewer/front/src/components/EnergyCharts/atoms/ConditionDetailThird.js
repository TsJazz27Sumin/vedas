import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from '../../../services/color';

const ConditionDetailThird = (props) => {

  const dict = props.dict;
  const energyResoursesChecked = props.electoric_power_resource.Checked;
  const handleEnergyResoursesChange = props.electoric_power_resource.handleValueChange;

  const Area = styled.div`
  background: ${Color.white};
  border-radius: 16px;

  height: 14%;
  width: auto;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 5%;
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

  let ParamDemand = styled(Param)`display: inline-block;`;
  let ParamNuclear = styled(Param)`display: inline-block;`;
  let ParamThermal = styled(Param)`display: inline-block;`;
  let ParamHydro = styled(Param)`display: inline-block;`;
  let ParamGeothermal = styled(Param)`display: inline-block;`;
  let ParamBiomass = styled(Param)`display: inline-block;`;
  let ParamSolar = styled(Param)`display: inline-block;`;
  let ParamSolarOutputControl = styled(Param)`display: inline-block;`;
  let ParamWind = styled(Param)`display: inline-block;`;
  let ParamWindOutputControl = styled(Param)`display: inline-block;`;
  let ParamPumping = styled(Param)`display: inline-block;`;
  let ParamInterconnection = styled(Param)`display: inline-block;`;


  const ParamLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: ${Color.black};
  
  display: inline-block;

  line-height: 22px;
` ;

  let ParamButton = styled.button`
  background: ${Color.lightGray};
  border-radius: 5px;

  height: auto;
  width: 100%;
  
  padding: 3% 0% 3% 0%;
  margin:  0% 0% 0% 0%;
  
  cursor: pointer;
` ;

  const ParamArea1 = styled.div`
  border-radius: 12px;

  height: auto;
  width: 100%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  const ParamArea2 = styled.div`
  border-radius: 12px;

  height: auto;
  width: 100%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
` ;

  const setBackGround = (isMobile, checked) => {
    if (isMobile){
      ParamButton = styled(ParamButton)`
      padding-top: 4%;
      padding-left: 5%;
      padding-bottom: 4%;

      text-align: left;
      `;
    } 
    return checked ? styled(ParamButton)` background: #6DDCFF;` : styled(ParamButton)` background: #D8D8D8;`
  };

  const ParamButtonDemand = setBackGround(isMobile, energyResoursesChecked.demandChecked);
  const ParamButtonNuclear = setBackGround(isMobile, energyResoursesChecked.nuclearChecked);
  const ParamButtonThermal = setBackGround(isMobile, energyResoursesChecked.thermalChecked);
  const ParamButtonHydro = setBackGround(isMobile, energyResoursesChecked.hydroChecked);
  const ParamButtonGeothermal = setBackGround(isMobile, energyResoursesChecked.geothermalChecked);
  const ParamButtonBiomass = setBackGround(isMobile, energyResoursesChecked.biomassChecked);
  const ParamButtonSolar = setBackGround(isMobile, energyResoursesChecked.solarChecked);
  const ParamButtonSolarOutputControl = setBackGround(isMobile, energyResoursesChecked.solarOutputControlChecked);
  const ParamButtonWind = setBackGround(isMobile, energyResoursesChecked.windChecked);
  const ParamButtonWindOutputControl = setBackGround(isMobile, energyResoursesChecked.windOutputControlChecked);
  const ParamButtonPumping = setBackGround(isMobile, energyResoursesChecked.pumpingChecked);
  const ParamButtonInterconnection = setBackGround(isMobile, energyResoursesChecked.interconnectionChecked);

  if (isMobile){
    ParamDemand = styled(ParamDemand)`
    border-radius: 10px;
    
    width: 100%;
    
    display:block;
    `;

    ParamNuclear = styled(ParamNuclear)`
    width: 100%;

    display:block;
    
    border-radius: 10px;
    `;

    ParamThermal = styled(ParamThermal)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    
    ParamHydro = styled(ParamHydro)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    
    ParamGeothermal = styled(ParamGeothermal)`display:none;`;
    ParamBiomass = styled(ParamBiomass)`display:none;`;
    ParamSolar = styled(ParamSolar)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    ParamSolarOutputControl = styled(ParamSolarOutputControl)`display:none;`;
    ParamWind = styled(ParamWind)`
    border-radius: 10px;

    width: 100%;

    display:block;
    `;
    ParamWindOutputControl = styled(ParamWindOutputControl)`display:none;`;
    ParamPumping = styled(ParamPumping)`display:none;`;
    ParamInterconnection = styled(ParamInterconnection)`display:none;`;
  }
  return (
    <div>
      <Area>
        <ParamArea1>
          <ParamDemand onClick={() => handleEnergyResoursesChange.handleDemandChange(!energyResoursesChecked.demandChecked)}>
            <ParamButtonDemand>
              <ParamLabel>
                <p>{dict.demand}</p>
              </ParamLabel>
            </ParamButtonDemand>
          </ParamDemand>
          <ParamNuclear onClick={() => handleEnergyResoursesChange.handleNuclearChange(!energyResoursesChecked.nuclearChecked)}>
            <ParamButtonNuclear>
              <ParamLabel>
                <p>{dict.nuclear}</p>
              </ParamLabel>
            </ParamButtonNuclear>
          </ParamNuclear>
          <ParamThermal onClick={() => handleEnergyResoursesChange.handleThermalChange(!energyResoursesChecked.thermalChecked)}>
            <ParamButtonThermal>
              <ParamLabel>
                <p>{dict.thermal}</p>
              </ParamLabel>
            </ParamButtonThermal>
          </ParamThermal>
          <ParamHydro onClick={() => handleEnergyResoursesChange.handleHydroChange(!energyResoursesChecked.hydroChecked)}>
            <ParamButtonHydro>
              <ParamLabel>
                <p>{dict.hydro}</p>
              </ParamLabel>
            </ParamButtonHydro>
          </ParamHydro>
          <ParamGeothermal onClick={() => handleEnergyResoursesChange.handleGeothermalChange(!energyResoursesChecked.geothermalChecked)}>
            <ParamButtonGeothermal>
              <ParamLabel>
                <p>{dict.geothermal}</p>
              </ParamLabel>
            </ParamButtonGeothermal>
          </ParamGeothermal>
          <ParamBiomass onClick={() => handleEnergyResoursesChange.handleBiomassChange(!energyResoursesChecked.biomassChecked)}>
            <ParamButtonBiomass>
              <ParamLabel>
                <p>{dict.biomass}</p>
              </ParamLabel>
            </ParamButtonBiomass>
          </ParamBiomass>
        </ParamArea1>
        <ParamArea2>
          <ParamSolar onClick={() => handleEnergyResoursesChange.handleSolarChange(!energyResoursesChecked.solarChecked)}>
            <ParamButtonSolar>
              <ParamLabel>
                <p>{dict.solar}</p>
              </ParamLabel>
            </ParamButtonSolar>
          </ParamSolar>
          <ParamSolarOutputControl onClick={() => handleEnergyResoursesChange.handleSolarOutputControlChange(!energyResoursesChecked.solarOutputControlChecked)}>
            <ParamButtonSolarOutputControl>
              <ParamLabel>
                <p>{dict.solar_output_control}</p>
              </ParamLabel>
            </ParamButtonSolarOutputControl>
          </ParamSolarOutputControl>
          <ParamWind onClick={() => handleEnergyResoursesChange.handleWindChange(!energyResoursesChecked.windChecked)}>
            <ParamButtonWind>
              <ParamLabel>
                <p>{dict.wind}</p>
              </ParamLabel>
            </ParamButtonWind>
          </ParamWind>
          <ParamWindOutputControl onClick={() => handleEnergyResoursesChange.handleWindOutputControlChange(!energyResoursesChecked.windOutputControlChecked)}>
            <ParamButtonWindOutputControl>
              <ParamLabel>
                <p>{dict.wind_output_control}</p>
              </ParamLabel>
            </ParamButtonWindOutputControl>
          </ParamWindOutputControl>
          <ParamPumping onClick={() => handleEnergyResoursesChange.handlePumpingChange(!energyResoursesChecked.pumpingChecked)}>
            <ParamButtonPumping>
              <ParamLabel>
                <p>{dict.pumping}</p>
              </ParamLabel>
            </ParamButtonPumping>
          </ParamPumping>
          <ParamInterconnection onClick={() => handleEnergyResoursesChange.handleInterconnectionChange(!energyResoursesChecked.interconnectionChecked)}>
            <ParamButtonInterconnection>
              <ParamLabel>
                <p>{dict.interconnection}</p>
              </ParamLabel>
            </ParamButtonInterconnection>
          </ParamInterconnection>
        </ParamArea2>
      </Area>
    </div>
  )
}

const getStyledComponents = (lang) => {


  return {
    xxx :xxx
  };
}

export default ConditionDetailThird