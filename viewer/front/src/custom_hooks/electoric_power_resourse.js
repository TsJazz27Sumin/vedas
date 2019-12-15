import { useState, useCallback } from 'react';

const useElectoricPowerResourse = (electoric_power_resourse_initialize_params) => {

    const intialize = electoric_power_resourse_initialize_params;

    const [demandChecked, setDemandChecked] = useState(intialize.demandChecked_initialize);
    const handleDemandChange = useCallback((newChecked) => setDemandChecked(newChecked), []);
    const [nuclearChecked, setNuclearChecked] = useState(intialize.nuclearChecked_initialize);
    const handleNuclearChange = useCallback((newChecked) => setNuclearChecked(newChecked), []);
    const [thermalChecked, setThermalChecked] = useState(intialize.thermalChecked_initialize);
    const handleThermalChange = useCallback((newChecked) => setThermalChecked(newChecked), []);
    const [hydroChecked, setHydroChecked] = useState(intialize.hydroChecked_initialize);
    const handleHydroChange = useCallback((newChecked) => setHydroChecked(newChecked), []);
    const [geothermalChecked, setGeothermalChecked] = useState(intialize.geothermalChecked_initialize);
    const handleGeothermalChange = useCallback((newChecked) => setGeothermalChecked(newChecked), []);
    const [biomassChecked, setBiomassChecked] = useState(intialize.biomassChecked_initialize);
    const handleBiomassChange = useCallback((newChecked) => setBiomassChecked(newChecked), []);
    const [solarChecked, setSolarChecked] = useState(intialize.solarChecked_initialize);
    const handleSolarChange = useCallback((newChecked) => setSolarChecked(newChecked), []);
    const [solarOutputControlChecked, setSolarOutputControlChecked] = useState(intialize.solarOutputControlChecked_initialize);
    const handleSolarOutputControlChange = useCallback((newChecked) => setSolarOutputControlChecked(newChecked), []);
    const [windChecked, setWindChecked] = useState(intialize.windChecked_initialize);
    const handleWindChange = useCallback((newChecked) => setWindChecked(newChecked), []);
    const [windOutputControlChecked, setWindOutputControlChecked] = useState(intialize.windOutputControlChecked_initialize);
    const handleWindOutputControlChange = useCallback((newChecked) => setWindOutputControlChecked(newChecked), []);
    const [pumpingChecked, setPumpingChecked] = useState(intialize.pumpingChecked_initialize);
    const handlePumpingChange = useCallback((newChecked) => setPumpingChecked(newChecked), []);
    const [interconnectionChecked, setInterconnectionChecked] = useState(intialize.interconnectionChecked_initialize);
    const handleInterconnectionChange = useCallback((newChecked) => setInterconnectionChecked(newChecked), []);

    const Checked = {
        demandChecked: demandChecked,
        nuclearChecked: nuclearChecked,
        thermalChecked: thermalChecked,
        hydroChecked: hydroChecked,
        geothermalChecked: geothermalChecked,
        biomassChecked: biomassChecked,
        solarOutputControlChecked: solarOutputControlChecked,
        solarChecked: solarChecked,
        windChecked: windChecked,
        windOutputControlChecked: windOutputControlChecked,
        pumpingChecked: pumpingChecked,
        interconnectionChecked: interconnectionChecked,
    };

    const handleValueChange = {
        handleDemandChange: handleDemandChange,
        handleNuclearChange: handleNuclearChange,
        handleThermalChange: handleThermalChange,
        handleHydroChange: handleHydroChange,
        handleGeothermalChange: handleGeothermalChange,
        handleBiomassChange: handleBiomassChange,
        handleSolarOutputControlChange: handleSolarOutputControlChange,
        handleSolarChange: handleSolarChange,
        handleWindChange: handleWindChange,
        handleWindOutputControlChange: handleWindOutputControlChange,
        handlePumpingChange: handlePumpingChange,
        handleInterconnectionChange: handleInterconnectionChange,
    };

    return { Checked, handleValueChange }
};

export default { useElectoricPowerResourse }