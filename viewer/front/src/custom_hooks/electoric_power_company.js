import { useState, useCallback } from 'react';

const useElectoricPowerCompany = (energy_power_company_initialize_params) => {

    //checkbox
    const [allChecked, setAllChecked] = useState(false);

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
        setJapanChecked(newChecked);
    }, []);

    const intialize = energy_power_company_initialize_params;

    const [hepcoChecked, setHepcoChecked] = useState(intialize.hepcoChecked_initialize);
    const handleHepcoChange = useCallback((newChecked) => {
        setHepcoChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [tohokuepcoChecked, setTohokuepcoChecked] = useState(intialize.tohokuepcoChecked_initialize);
    const handleTohokuepcoChange = useCallback((newChecked) => {
        setTohokuepcoChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [rikudenChecked, setRikudenChecked] = useState(intialize.rikudenChecked_initialize);
    const handleRikudenChange = useCallback((newChecked) => {
        setRikudenChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [tepcoChecked, setTepcoChecked] = useState(intialize.tepcoChecked_initialize);
    const handleTepcoChange = useCallback((newChecked) => {
        setTepcoChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [chudenChecked, setChudenChecked] = useState(intialize.chudenChecked_initialize);
    const handleChudenChange = useCallback((newChecked) => {
        setChudenChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [kepcoChecked, setKepcoChecked] = useState(intialize.kepcoChecked_initialize);
    const handleKepcoChange = useCallback((newChecked) => {
        setKepcoChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [energiaChecked, setEnergiaChecked] = useState(intialize.energiaChecked_initialize);
    const handleEnergiaChange = useCallback((newChecked) => {
        setEnergiaChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [yondenChecked, setYondenChecked] = useState(intialize.yondenChecked_initialize);
    const handleYondenChange = useCallback((newChecked) => {
        setYondenChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [kyudenChecked, setKyudenChecked] = useState(intialize.kyudenChecked_initialize);
    const handleKyudenChange = useCallback((newChecked) => {
        setKyudenChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [okidenChecked, setOkidenChecked] = useState(intialize.okidenChecked_initialize);
    const handleOkidenChange = useCallback((newChecked) => {
        setOkidenChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);
    const [japanChecked, setJapanChecked] = useState(intialize.japanChecked_initialize);
    const handleJapanChange = useCallback((newChecked) => {
        setJapanChecked(newChecked);
        if (!newChecked){
            setAllChecked(newChecked);
        }
    }, []);

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
        okidenChecked: okidenChecked,
        japanChecked: japanChecked
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
        handleOkidenChange: handleOkidenChange,
        handleJapanChange: handleJapanChange
    }

    return { allChecked, handleAllChange, Checked, handleValueChange }
};

export default { useElectoricPowerCompany }