import React, { useState, useCallback } from 'react'
import { AppProvider, Select, Card, Stack, Spinner } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import JapanEnergyResourseRadioButtons from './components/JapanEnergyResourseRadioButtons'
import DateSelect from './components/DateSelect'
import RangeSelect from './components/RangeSelect'
import wordDictionaryService from './services/word_dictionary'
import languageOptionService from './services/language_option'
import queryParamPerserService from './services/query_param_perser'
import electoricPowerResourseHook from './custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from './custom_hooks/electoric_power_company'
import dateSelectHook from './custom_hooks/date_select'
import rangeSliderHook from './custom_hooks/electoric_power_data'

//memo:
//cd ../supply-and-demand-viewer/viewer/front/
//npm start
//reference:https://polaris.shopify.com/components/
const App = (props) => {

  //クエリパラメータ
  const qs = queryParamPerserService.execute(props.qs);
  const language_initialize = qs.language_initialize;
  const electoric_power_data_initialize_params = qs.electoric_power_data_initialize_params;
  const energy_power_company_initialize_params = qs.energy_power_company_initialize_params;
  const electoric_power_resourse_initialize_params = qs.electoric_power_resourse_initialize_params;

  //電力データをCallするためのパラメータや処理
  const electoric_power_data_hook = rangeSliderHook.useElectoricPowerData(electoric_power_data_initialize_params)
  const is_loading = electoric_power_data_hook.is_loading;
  const year_and_month = electoric_power_data_hook.year_and_month;
  const data = electoric_power_data_hook.data;
  const unit = electoric_power_data_hook.unit;
  const handleTermChange = electoric_power_data_hook.handleTermChange;
  const range_slider = electoric_power_data_hook.range_slider;
  const is_range_slider_open = electoric_power_data_hook.is_range_slider_open;
  const setData = electoric_power_data_hook.setData;
  const setIsLoading = electoric_power_data_hook.setIsLoading;

  //言語選択
  const [languageSelected, setLanguageSelected] = useState(language_initialize);
  const handleLanguageSelectChange = useCallback((value) => setLanguageSelected(value), []);
  const languageOptions = languageOptionService.get();
  let lang = languageSelected;
  let dict = wordDictionaryService.get(lang);

  //30分値指定の期間
  const date_select = dateSelectHook.useDateSelect(electoric_power_data_initialize_params, setData, setIsLoading);

  //電力会社のチェックボックス
  const electoric_power_company = electoricPowerCompanyHook.useElectoricPowerCompany(energy_power_company_initialize_params);
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  const handleElectricPowersChange = electoric_power_company.handleValueChange;

  //エネルギーリソースのチェックボックス
  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse(electoric_power_resourse_initialize_params);
  const energyResoursesChecked = electoric_power_resource.Checked;
  const handleEnergyResoursesChange = electoric_power_resource.handleValueChange;

  return (
    <div>
      <AppProvider>
        <Stack>
          <Select
            label="Current language is "
            labelInline
            key="languageSelect"
            options={languageOptions}
            onChange={handleLanguageSelectChange}
            value={languageSelected}
          />
        </Stack>
        <Card title={dict.title} sectioned>
          <Card.Section>
            <JapanEnergyResourseRadioButtons
              dict={dict}
              unit={unit}
              year_and_month={year_and_month}
              lowerTextFieldValue={range_slider.lowerTextFieldValue}
              upperTextFieldValue={range_slider.upperTextFieldValue}
              handleTermChange={handleTermChange}
            />
          </Card.Section>
          <Card.Section>
            <JapanEnergyCheckboxes
              dict={dict}
              allChecked={allChecked}
              handleAllChange={handleAllChange}
              electricPowersChecked={electricPowersChecked}
              handleElectricPowersChange={handleElectricPowersChange}
            />
          </Card.Section>
          <Card.Section>
            <JapanEnergyResourseBadges
              dict={dict}
              energyResoursesChecked={energyResoursesChecked}
              handleEnergyResoursesChange={handleEnergyResoursesChange}
            />
          </Card.Section>
          {
            is_range_slider_open ?
              (<Card.Section>
                <RangeSelect
                  range_slider={range_slider}
                  unit={unit}
                  year_and_month={year_and_month}
                />
              </Card.Section>) : (
                <Card.Section>
                  <DateSelect
                    dict={dict}
                    unit={unit}
                    date_select={date_select}
                  />
                </Card.Section>
              )
          }
        </Card>
      </AppProvider>
      {
        is_loading ? 
          (
            <ul>
              <AppProvider>
                <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
                </AppProvider>
            </ul>
          ) 
        :
          (<ul>
            <JapanEnergyCharts
              data={data}
              dict={dict}
              electricPowersChecked={electricPowersChecked}
              energyResoursesChecked={energyResoursesChecked}
            />
          </ul>
          )
        }
    </div >
  )
}

export default App 
