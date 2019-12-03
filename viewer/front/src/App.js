import React, { useState, useCallback } from 'react'
import { AppProvider, Select, Card, Stack, RadioButton } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import japanEnergyService from './services/japan_energy'
import wordDictionaryService from './services/word_dictionary'

//memo:cd ../supply-and-demand-viewer/viewer/front/ npm start
//https://polaris.shopify.com/components/
const App = () => {

  //Polaris area
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
  const [greenChecked, setGreenChecked] = useState(false);
  const handleGreenChange = useCallback((newChecked) => setGreenChecked(newChecked), []);
  const [interconnectionChecked, setInterconnectionChecked] = useState(false);
  const handleInterconnectionChange = useCallback((newChecked) => setInterconnectionChecked(newChecked), []);

  const energyResoursesChecked = {
    demandChecked: demandChecked,
    nuclearChecked: nuclearChecked,
    thermalChecked: thermalChecked,
    greenChecked: greenChecked,
    interconnectionChecked: interconnectionChecked,
  }

  const handleEnergyResoursesChange = {
    handleDemandChange: handleDemandChange,
    handleNuclearChange: handleNuclearChange,
    handleThermalChange: handleThermalChange,
    handleGreenChange: handleGreenChange,
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

  const [data, setData] = useState([])

  const [term, setTerm] = useState('');
  const handleTermChange = useCallback((newTerm) => {
    setTerm(newTerm);
    japanEnergyService
      .get(newTerm)
      .then(initialData => setData(initialData));
  }, []);


  //TODO: https://polaris.shopify.com/components/forms/range-slider#navigation
  //Dual thumb range sliderを使えば良さそう。
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
          <Stack>
            <RadioButton
              label={dict.term_y}
              checked={term === "y"}
              id="term_y"
              name="term"
              onChange={() => handleTermChange("y")}
            />
            <RadioButton
              label={dict.term_ym}
              id="term_ym"
              name="term"
              checked={term === "ym"}
              onChange={() => handleTermChange("ym")}
            />
            <RadioButton
              label={dict.term_ymd}
              id="term_ymd"
              name="term"
              checked={term === "ymd"}
              onChange={() => handleTermChange("ymd")}
            />
          </Stack>
          <JapanEnergyCheckboxes
            dict={dict}
            allChecked={allChecked}
            handleAllChange={handleAllChange}
            electricPowersChecked={electricPowersChecked}
            handleElectricPowersChange={handleElectricPowersChange}
          />
          <Stack>
            <JapanEnergyResourseBadges
              dict={dict}
              energyResoursesChecked={energyResoursesChecked}
              handleEnergyResoursesChange={handleEnergyResoursesChange}
            />
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
    </div>
  )
}

export default App 
