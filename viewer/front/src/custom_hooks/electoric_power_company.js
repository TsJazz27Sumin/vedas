import { useState, useCallback } from 'react';

const useElectoricPowerCompany = (energy_power_company_initialize_params) => {

    //checkbox
    const [allChecked, setAllChecked] = useState(false);
    //TODO:allの挙動が悩ましいが、いったんこれにしておく。
    const handleAllChange = useCallback((newChecked) => {
        setAllChecked(newChecked);
        setHepcoChecked(newChecked);
        setTohokuepcoChecked(newChecked);
        setRikudenChecked(newChecked);
        setTepcoChecked(newChecked);
        setChudenChecked(newChecked);
        setKepcoChecked(newChecked);
        setEnergiaChecked(newChecked);
        setYondenChecked(newChecked);
        setKyudenChecked(newChecked);
        setOkidenChecked(newChecked);
    }, []);

    const intialize = energy_power_company_initialize_params;

    const [hepcoChecked, setHepcoChecked] = useState(intialize.hepcoChecked_initialize);
    const handleHepcoChange = useCallback((newChecked) => setHepcoChecked(newChecked), []);
    const [tohokuepcoChecked, setTohokuepcoChecked] = useState(intialize.tohokuepcoChecked_initialize);
    const handleTohokuepcoChange = useCallback((newChecked) => setTohokuepcoChecked(newChecked), []);
    const [rikudenChecked, setRikudenChecked] = useState(intialize.rikudenChecked_initialize);
    const handleRikudenChange = useCallback((newChecked) => setRikudenChecked(newChecked), []);
    const [tepcoChecked, setTepcoChecked] = useState(intialize.tepcoChecked_initialize);
    const handleTepcoChange = useCallback((newChecked) => setTepcoChecked(newChecked), []);
    const [chudenChecked, setChudenChecked] = useState(intialize.chudenChecked_initialize);
    const handleChudenChange = useCallback((newChecked) => setChudenChecked(newChecked), []);
    const [kepcoChecked, setKepcoChecked] = useState(intialize.kepcoChecked_initialize);
    const handleKepcoChange = useCallback((newChecked) => setKepcoChecked(newChecked), []);
    const [energiaChecked, setEnergiaChecked] = useState(intialize.energiaChecked_initialize);
    const handleEnergiaChange = useCallback((newChecked) => setEnergiaChecked(newChecked), []);
    const [yondenChecked, setYondenChecked] = useState(intialize.yondenChecked_initialize);
    const handleYondenChange = useCallback((newChecked) => setYondenChecked(newChecked), []);
    const [kyudenChecked, setKyudenChecked] = useState(intialize.kyudenChecked_initialize);
    const handleKyudenChange = useCallback((newChecked) => setKyudenChecked(newChecked), []);
    const [okidenChecked, setOkidenChecked] = useState(intialize.okidenChecked_initialize);
    const handleOkidenChange = useCallback((newChecked) => setOkidenChecked(newChecked), []);

    const Checked = {
        hepcoChecked: hepcoChecked,
        tohokuepcoChecked: tohokuepcoChecked,
        rikudenChecked: rikudenChecked,
        tepcoChecked: tepcoChecked,
        chudenChecked: chudenChecked,
        kepcoChecked: kepcoChecked,
        energiaChecked: energiaChecked,
        yondenChecked: yondenChecked,
        kyudenChecked: kyudenChecked,
        okidenChecked: okidenChecked
    }

    const handleValueChange = {
        handleHepcoChange: handleHepcoChange,
        handleTohokuepcoChange: handleTohokuepcoChange,
        handleRikudenChange: handleRikudenChange,
        handleTepcoChange: handleTepcoChange,
        handleChudenChange: handleChudenChange,
        handleKepcoChange: handleKepcoChange,
        handleEnergiaChange: handleEnergiaChange,
        handleYondenChange: handleYondenChange,
        handleKyudenChange: handleKyudenChange,
        handleOkidenChange: handleOkidenChange
    }

    return { allChecked, handleAllChange, Checked, handleValueChange }
};

export default { useElectoricPowerCompany }