import React from 'react'
import { Badge, Checkbox, Stack } from '@shopify/polaris';

const JapanEnergyResourseBadges = props => {

    const dict = props.dict;
    const energyResoursesChecked = props.energyResoursesChecked;
    const handleEnergyResoursesChange = props.handleEnergyResoursesChange;

    return (
        <div>
            <Stack>
                <Badge>
                    <Checkbox
                        label={dict.demand}
                        checked={energyResoursesChecked.demandChecked}
                        onChange={handleEnergyResoursesChange.handleDemandChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.nuclear}
                        checked={energyResoursesChecked.nuclearChecked}
                        onChange={handleEnergyResoursesChange.handleNuclearChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.thermal}
                        checked={energyResoursesChecked.thermalChecked}
                        onChange={handleEnergyResoursesChange.handleThermalChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.hydro}
                        checked={energyResoursesChecked.hydroChecked}
                        onChange={handleEnergyResoursesChange.handleHydroChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.geothermal}
                        checked={energyResoursesChecked.geothermalChecked}
                        onChange={handleEnergyResoursesChange.handleGeothermalChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.biomass}
                        checked={energyResoursesChecked.biomassChecked}
                        onChange={handleEnergyResoursesChange.handleBiomassChange}
                    />
                </Badge>
            </Stack>
            <Stack>
                <Badge>
                    <Checkbox
                        label={dict.solar}
                        checked={energyResoursesChecked.solarChecked}
                        onChange={handleEnergyResoursesChange.handleSolarChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.solar_output_control}
                        checked={energyResoursesChecked.solarOutputControlChecked}
                        onChange={handleEnergyResoursesChange.handleSolarOutputControlChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.wind}
                        checked={energyResoursesChecked.windChecked}
                        onChange={handleEnergyResoursesChange.handleWindChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.wind_output_control}
                        checked={energyResoursesChecked.windOutputControlChecked}
                        onChange={handleEnergyResoursesChange.handleWindOutputControlChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.pumping}
                        checked={energyResoursesChecked.pumpingChecked}
                        onChange={handleEnergyResoursesChange.handlePumpingChange}
                    />
                </Badge>
                <Badge>
                    <Checkbox
                        label={dict.interconnection}
                        checked={energyResoursesChecked.interconnectionChecked}
                        onChange={handleEnergyResoursesChange.handleInterconnectionChange}
                    />
                </Badge>
            </Stack>
        </div>
    )
}
export default JapanEnergyResourseBadges