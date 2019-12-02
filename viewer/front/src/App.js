import React, { useState, useEffect, useCallback } from 'react'
import {AppProvider, Select, Card, Stack, Badge, Checkbox} from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import japanEnergyService from './services/japan_energy' 
import wordDictionaryService from './services/word_dictionary' 

//memo:cd ../supply-and-demand-viewer/viewer/front/ npm start
//https://polaris.shopify.com/components/
const App = () => {

  //Polaris area

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

  const options = [
    {label: '日本語', value: 'jp'},
    {label: 'English', value: 'en'},
    {label: 'China(Simplified)', value: 'ch'},
    {label: 'Spanish', value: 'es'},
  ];

  let lang = selected;
  let dict = wordDictionaryService.get_word_dictionary(lang);

  const [data, setData] = useState([]) 

  //end
  useEffect(() => {
    japanEnergyService
      .get()
      .then(initialData => setData(initialData));
  }, [])
  
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
          <JapanEnergyCheckboxes
            dict={dict} 
            allChecked={allChecked}
            handleAllChange={handleAllChange}
            hepcoChecked={hepcoChecked}
            handleHepcoChange={handleHepcoChange}
            tohokuepcoChecked={tohokuepcoChecked}
            handleTohokuepcoChange={handleTohokuepcoChange}
            rikudenChecked={rikudenChecked}
            handleRikudenChange={handleRikudenChange}
            tepcoChecked={tepcoChecked}
            handleTepcoChange={handleTepcoChange}
            chudenChecked={chudenChecked}
            handleChudenChange={handleChudenChange}
            kepcoChecked={kepcoChecked}
            handleKepcoChange={handleKepcoChange}
            energiaChecked={energiaChecked}
            handleEnergiaChange={handleEnergiaChange}
            yondenChecked={yondenChecked}
            handleYondenChange={handleYondenChange}
            kyudenChecked={kyudenChecked}
            handleKyudenChange={handleKyudenChange}
            okidenChecked={okidenChecked}
            handleOkidenChange={handleOkidenChange}
          />
          <Stack>
            <Badge>
              <Checkbox
                label={dict.demand}
                checked={demandChecked}
                onChange={handleDemandChange}
              />
            </Badge>
            <Badge>
              <Checkbox
                label={dict.nuclear}
                checked={nuclearChecked}
                onChange={handleNuclearChange}
              />
            </Badge>
            <Badge>
              <Checkbox
                label={dict.thermal}
                checked={thermalChecked}
                onChange={handleThermalChange}
              />
            </Badge>
            <Badge>
              <Checkbox
                label={dict.green}
                checked={greenChecked}
                onChange={handleGreenChange}
              />
            </Badge>
            <Badge>
              <Checkbox
                label={dict.interconnection}
                checked={interconnectionChecked}
                onChange={handleInterconnectionChange}
              />
            </Badge>
          </Stack>
          </Card>
          
      </AppProvider>
      <ul>
        <JapanEnergyCharts 
          data={data}
          dict={dict}
          hepcoChecked={hepcoChecked} 
          tohokuepcoChecked={tohokuepcoChecked}
          rikudenChecked={rikudenChecked}
          tepcoChecked={tepcoChecked}
          chudenChecked={chudenChecked}
          kepcoChecked={kepcoChecked}
          energiaChecked={energiaChecked}
          yondenChecked={yondenChecked}
          kyudenChecked={kyudenChecked}
          okidenChecked={okidenChecked}
          demandChecked={demandChecked}
          nuclearChecked={nuclearChecked}
          thermalChecked={thermalChecked}
          greenChecked={greenChecked}
          interconnectionChecked={interconnectionChecked}
        />
      </ul>
    </div>
  )
}

export default App 
