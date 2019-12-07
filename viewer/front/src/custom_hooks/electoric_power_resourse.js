import { useState, useCallback } from 'react';

const useElectoricPowerResourse = () => {

    const [demandChecked, setDemandChecked] = useState(true);
    const handleDemandChange = useCallback((newChecked) => setDemandChecked(newChecked), []);
    const [nuclearChecked, setNuclearChecked] = useState(false);
    const handleNuclearChange = useCallback((newChecked) => setNuclearChecked(newChecked), []);
    const [thermalChecked, setThermalChecked] = useState(false);
    const handleThermalChange = useCallback((newChecked) => setThermalChecked(newChecked), []);
    const [hydroChecked, setHydroChecked] = useState(false);
    const handleHydroChange = useCallback((newChecked) => setHydroChecked(newChecked), []);
    const [geothermalChecked, setGeothermalChecked] = useState(false);
    const handleGeothermalChange = useCallback((newChecked) => setGeothermalChecked(newChecked), []);
    const [biomassChecked, setBiomassChecked] = useState(false);
    const handleBiomassChange = useCallback((newChecked) => setBiomassChecked(newChecked), []);
    const [solarChecked, setSolarChecked] = useState(false);
    const handleSolarChange = useCallback((newChecked) => setSolarChecked(newChecked), []);
    const [solarOutputControlChecked, setSolarOutputControlChecked] = useState(false);
    const handleSolarOutputControlChange = useCallback((newChecked) => setSolarOutputControlChecked(newChecked), []);
    const [windChecked, setWindChecked] = useState(false);
    const handleWindChange = useCallback((newChecked) => setWindChecked(newChecked), []);
    const [windOutputControlChecked, setWindOutputControlChecked] = useState(false);
    const handleWindOutputControlChange = useCallback((newChecked) => setWindOutputControlChecked(newChecked), []);
    const [pumpingChecked, setPumpingChecked] = useState(false);
    const handlePumpingChange = useCallback((newChecked) => setPumpingChecked(newChecked), []);
    const [interconnectionChecked, setInterconnectionChecked] = useState(false);
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