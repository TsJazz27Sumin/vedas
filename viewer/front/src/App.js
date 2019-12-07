import React, { useState, useCallback } from 'react'
import { AppProvider, Select, Card, Stack, RangeSlider, DisplayText, Spinner } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import JapanEnergyResourseRadioButtons from './components/JapanEnergyResourseRadioButtons'
import wordDictionaryService from './services/word_dictionary'
import languageOptionService from './services/language_option'
import electoricPowerResourseHook from './custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from './custom_hooks/electoric_power_company'
import rangeSliderHook from './custom_hooks/electoric_power_data'

//memo:cd ../supply-and-demand-viewer/viewer/front/ npm start
//https://polaris.shopify.com/components/
const App = () => {

  //電力データをCallするためのパラメータや処理
  const electoric_power_data_hook = rangeSliderHook.useElectoricPowerData()
  const is_loading = electoric_power_data_hook.is_loading;
  const year_and_month = electoric_power_data_hook.year_and_month;
  const data = electoric_power_data_hook.data;
  const unit = electoric_power_data_hook.unit;
  const handleTermChange = electoric_power_data_hook.handleTermChange;
  const prefix = electoric_power_data_hook.prefix;
  const min = electoric_power_data_hook.min;
  const max = electoric_power_data_hook.max;
  const step = electoric_power_data_hook.step;
  const rangeValue = electoric_power_data_hook.rangeValue;
  const handleRangeSliderChange = electoric_power_data_hook.handleRangeSliderChange;
  const lowerTextFieldValue = electoric_power_data_hook.lowerTextFieldValue;
  const upperTextFieldValue = electoric_power_data_hook.upperTextFieldValue;

  //言語選択
  const [selected, setSelected] = useState('en');
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = languageOptionService.get();
  let lang = selected;
  let dict = wordDictionaryService.get(lang);

  //電力会社のチェックボックス
  const electoric_power_company = electoricPowerCompanyHook.useElectoricPowerCompany();
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  const handleElectricPowersChange = electoric_power_company.handleValueChange;

  //エネルギーリソースのチェックボックス
  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse();
  const energyResoursesChecked = electoric_power_resource.Checked;
  const handleEnergyResoursesChange = electoric_power_resource.handleValueChange;

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
      {
        is_loading ? (<ul><AppProvider><Spinner accessibilityLabel="Spinner example" size="large" color="teal" /></AppProvider></ul>) :
        (<ul>
          <JapanEnergyCharts
            data={data}
            dict={dict}
            electricPowersChecked={electricPowersChecked}
            energyResoursesChecked={energyResoursesChecked}
          />
        </ul>)}
    </div >
  )
}

export default App 
