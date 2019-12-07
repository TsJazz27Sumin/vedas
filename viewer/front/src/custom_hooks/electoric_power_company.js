import { useState, useCallback } from 'react';

const useElectoricPowerCompany = () => {

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

    const [hepcoChecked, setHepcoChecked] = useState(false);
    const handleHepcoChange = useCallback((newChecked) => setHepcoChecked(newChecked), []);
    const [tohokuepcoChecked, setTohokuepcoChecked] = useState(false);
    const handleTohokuepcoChange = useCallback((newChecked) => setTohokuepcoChecked(newChecked), []);
    const [rikudenChecked, setRikudenChecked] = useState(false);
    const handleRikudenChange = useCallback((newChecked) => setRikudenChecked(newChecked), []);
    const [tepcoChecked, setTepcoChecked] = useState(true);
    const handleTepcoChange = useCallback((newChecked) => setTepcoChecked(newChecked), []);
    const [chudenChecked, setChudenChecked] = useState(false);
    const handleChudenChange = useCallback((newChecked) => setChudenChecked(newChecked), []);
    const [kepcoChecked, setKepcoChecked] = useState(false);
    const handleKepcoChange = useCallback((newChecked) => setKepcoChecked(newChecked), []);
    const [energiaChecked, setEnergiaChecked] = useState(false);
    const handleEnergiaChange = useCallback((newChecked) => setEnergiaChecked(newChecked), []);
    const [yondenChecked, setYondenChecked] = useState(false);
    const handleYondenChange = useCallback((newChecked) => setYondenChecked(newChecked), []);
    const [kyudenChecked, setKyudenChecked] = useState(false);
    const handleKyudenChange = useCallback((newChecked) => setKyudenChecked(newChecked), []);
    const [okidenChecked, setOkidenChecked] = useState(false);
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