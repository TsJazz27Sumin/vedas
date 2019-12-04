import React, { useState, useCallback } from 'react'
import { AppProvider, Select, Card, Stack, RangeSlider, DisplayText } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import JapanEnergyResourseRadioButtons from './components/JapanEnergyResourseRadioButtons'
import japanEnergyService from './services/japan_energy'
import wordDictionaryService from './services/word_dictionary'
import yearAndMonthService from './services/year_and_month'

//memo:cd ../supply-and-demand-viewer/viewer/front/ npm start
//https://polaris.shopify.com/components/
const App = () => {

  const year_and_month = yearAndMonthService.get();
  const initialValue = [year_and_month.length - 12, year_and_month.length];
  const [data, setData] = useState([])
  const [unit, setUnit] = useState('ym');
  const handleTermChange = useCallback((newUnit, from, to) => {
    setUnit(newUnit);
    japanEnergyService
      .get(newUnit, from, to)
      .then(initialData => setData(initialData));
  }, []);

  //Polaris area

  //Range slider
  const prefix = '';
  const min = 0;
  const max = year_and_month.length - 1;
  const step = 1;

  //TODO:レンジスライダーは、ハンドリングが気になる。連続で動かすのは制御した方が良さそう。
  const [intermediateTextFieldValue, setIntermediateTextFieldValue] = useState(
    initialValue,
  );
  const [rangeValue, setRangeValue] = useState(initialValue);

  const handleRangeSliderChange = useCallback((value, unit, from, to) => {
    setRangeValue(value);
    setIntermediateTextFieldValue(value);

    const handler = setTimeout(() => {
      japanEnergyService
        .get(unit, from, to)
        .then(initialData => setData(initialData));
    }, 100);

    return () => {
      clearTimeout(handler);
    };
  }, []);

  const lowerTextFieldValue =
    intermediateTextFieldValue[0] === rangeValue[0]
      ? rangeValue[0]
      : intermediateTextFieldValue[0];

  const upperTextFieldValue =
    intermediateTextFieldValue[1] === rangeValue[1]
      ? rangeValue[1]
      : intermediateTextFieldValue[1];

  //TODO:各コンポーネントのID、Warning対応

  //select
  const [selected, setSelected] = useState('en');
  const handleSelectChange = useCallback((value) => setSelected(value), []);

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

  //TODO:このstateがズラッと並んじゃうのどうにかならんか。
  const [hepcoChecked, setHepcoChecked] = useState(false);
  const handleHepcoChange = useCallback((newChecked) => setHepcoChecked(newChecked), []);
  const [tohokuepcoChecked, setTohokuepcoChecked] = useState(false);
  const handleTohokuepcoChange = useCallback((newChecked) => setTohokuepcoChecked(newChecked), []);
  const [rikudenChecked, setRikudenChecked] = useState(false);
  const handleRikudenChange = useCallback((newChecked) => setRikudenChecked(newChecked), []);
  const [tepcoChecked, setTepcoChecked] = useState(false);
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

  const [demandChecked, setDemandChecked] = useState(false);
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

  const energyResoursesChecked = {
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
  }

  const handleEnergyResoursesChange = {
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
  }

  const electricPowersChecked = {
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

  const handleElectricPowersChange = {
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

  const options = [
    { label: '日本語', value: 'jp' },
    { label: 'English', value: 'en' },
    { label: 'China(Simplified)', value: 'ch' },
    { label: 'Spanish', value: 'es' },
  ];

  let lang = selected;
  let dict = wordDictionaryService.get_word_dictionary(lang);

  return (
    <div>
      <AppProvider>
        <Select
          label="Language"
          options={options}
          onChange={handleSelectChange}
          value={selected}
        />
        <Card title={dict.title} sectioned>
          <JapanEnergyResourseRadioButtons
            dict={dict}
            unit={unit}
            year_and_month={year_and_month}
            lowerTextFieldValue={lowerTextFieldValue}
            upperTextFieldValue={upperTextFieldValue}
            handleTermChange={handleTermChange}
          />
          <JapanEnergyCheckboxes
            dict={dict}
            allChecked={allChecked}
            handleAllChange={handleAllChange}
            electricPowersChecked={electricPowersChecked}
            handleElectricPowersChange={handleElectricPowersChange}
          />
          <JapanEnergyResourseBadges
            dict={dict}
            energyResoursesChecked={energyResoursesChecked}
            handleEnergyResoursesChange={handleEnergyResoursesChange}
          />
        </Card>
        <Card sectioned title={dict.term}>
            <RangeSlider
              value={rangeValue}
              prefix={prefix}
              min={min}
              max={max}
              step={step}
              onChange={(value) => handleRangeSliderChange(value, unit, year_and_month[value[0]], year_and_month[value[1]])}
            />
            <Stack distribution="equalSpacing" spacing="extraLoose">
              <DisplayText size="small">{year_and_month[lowerTextFieldValue]}</DisplayText>
              <DisplayText size="small">{year_and_month[upperTextFieldValue]}</DisplayText>
            </Stack>
        </Card>
      </AppProvider>
      <ul>
        <JapanEnergyCharts
          data={data}
          dict={dict}
          electricPowersChecked={electricPowersChecked}
          energyResoursesChecked={energyResoursesChecked}
        />
      </ul>
    </div >
  )
}

export default App 
