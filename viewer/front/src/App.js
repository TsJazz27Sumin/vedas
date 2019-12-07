import React, { useState, useCallback } from 'react'
import { AppProvider, Select, Card, Stack, RangeSlider, DisplayText } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import JapanEnergyResourseRadioButtons from './components/JapanEnergyResourseRadioButtons'
import japanEnergyService from './services/japan_energy'
import wordDictionaryService from './services/word_dictionary'
import languageOptionService from './services/language_option'
import yearAndMonthService from './services/year_and_month'
import electoricPowerResourseHook from './custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from './custom_hooks/electoric_power_company'

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

  const electoric_power_company = electoricPowerCompanyHook.useElectoricPowerCompany();
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  const handleElectricPowersChange = electoric_power_company.handleValueChange;

  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse();
  const energyResoursesChecked = electoric_power_resource.Checked;
  const handleEnergyResoursesChange = electoric_power_resource.handleValueChange;

  const options = languageOptionService.get();

  let lang = selected;
  let dict = wordDictionaryService.get(lang);

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
