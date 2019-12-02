import React from 'react'
import { Badge, Checkbox } from '@shopify/polaris';

const JapanEnergyResourseBadges = props => {

    const dict = props.dict;
    const energyResoursesChecked = props.energyResoursesChecked;
    const handleEnergyResoursesChange = props.handleEnergyResoursesChange;

    return (
        <div>
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
                    label={dict.green}
                    checked={energyResoursesChecked.greenChecked}
                    onChange={handleEnergyResoursesChange.handleGreenChange}
                />
            </Badge>
            <Badge>
                <Checkbox
                    label={dict.interconnection}
                    checked={energyResoursesChecked.interconnectionChecked}
                    onChange={handleEnergyResoursesChange.andleInterconnectionChange}
                />
            </Badge>
        </div>
    )
}
export default JapanEnergyResourseBadges