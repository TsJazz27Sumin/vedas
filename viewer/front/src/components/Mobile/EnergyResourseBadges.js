import React from 'react'
import { Badge, Checkbox, Stack } from '@shopify/polaris';

const JapanEnergyResourseBadges = props => {

    const dict = props.dict;
    const energyResoursesChecked = props.energyResoursesChecked;
    const handleEnergyResoursesChange = props.handleEnergyResoursesChange;

    return (<div>
        <Stack>
            <Badge status={energyResoursesChecked.demandChecked ? "info" : ""}>
                <Checkbox
                    label={dict.demand}
                    checked={energyResoursesChecked.demandChecked}
                    onChange={handleEnergyResoursesChange.handleDemandChange}
                />
            </Badge>
            <Badge status={energyResoursesChecked.nuclearChecked ? "info" : ""}>
                <Checkbox
                    label={dict.nuclear}
                    checked={energyResoursesChecked.nuclearChecked}
                    onChange={handleEnergyResoursesChange.handleNuclearChange}
                />
            </Badge>
        </Stack>
        <Stack>
            <Badge status={energyResoursesChecked.thermalChecked ? "info" : ""}>
                <Checkbox
                    label={dict.thermal}
                    checked={energyResoursesChecked.thermalChecked}
                    onChange={handleEnergyResoursesChange.handleThermalChange}
                />
            </Badge>
            <Badge status={energyResoursesChecked.hydroChecked ? "info" : ""}>
                <Checkbox
                    label={dict.hydro}
                    checked={energyResoursesChecked.hydroChecked}
                    onChange={handleEnergyResoursesChange.handleHydroChange}
                />
            </Badge>
        </Stack>
        <Stack>
            <Badge status={energyResoursesChecked.geothermalChecked ? "info" : ""}>
                <Checkbox
                    label={dict.geothermal}
                    checked={energyResoursesChecked.geothermalChecked}
                    onChange={handleEnergyResoursesChange.handleGeothermalChange}
                />
            </Badge>
            <Badge status={energyResoursesChecked.biomassChecked ? "info" : ""}>
                <Checkbox
                    label={dict.biomass}
                    checked={energyResoursesChecked.biomassChecked}
                    onChange={handleEnergyResoursesChange.handleBiomassChange}
                />
            </Badge>
        </Stack>
        <Stack>
            <Badge status={energyResoursesChecked.solarChecked ? "info" : ""}>
                <Checkbox
                    label={dict.solar}
                    checked={energyResoursesChecked.solarChecked}
                    onChange={handleEnergyResoursesChange.handleSolarChange}
                />
            </Badge>
            <Badge status={energyResoursesChecked.solarOutputControlChecked ? "info" : ""}>
                <Checkbox
                    label={dict.solar_output_control}
                    checked={energyResoursesChecked.solarOutputControlChecked}
                    onChange={handleEnergyResoursesChange.handleSolarOutputControlChange}
                />
            </Badge>
        </Stack>
        <Stack>
            <Badge status={energyResoursesChecked.windChecked ? "info" : ""}>
                <Checkbox
                    label={dict.wind}
                    checked={energyResoursesChecked.windChecked}
                    onChange={handleEnergyResoursesChange.handleWindChange}
                />
            </Badge>
            <Badge status={energyResoursesChecked.windOutputControlChecked ? "info" : ""}>
                <Checkbox
                    label={dict.wind_output_control}
                    checked={energyResoursesChecked.windOutputControlChecked}
                    onChange={handleEnergyResoursesChange.handleWindOutputControlChange}
                />
            </Badge>
        </Stack>
        <Stack>
            <Badge status={energyResoursesChecked.pumpingChecked ? "info" : ""}>
                <Checkbox
                    label={dict.pumping}
                    checked={energyResoursesChecked.pumpingChecked}
                    onChange={handleEnergyResoursesChange.handlePumpingChange}
                />
            </Badge>
            <Badge status={energyResoursesChecked.interconnectionChecked ? "info" : ""}>
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