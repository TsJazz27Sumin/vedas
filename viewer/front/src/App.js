import React, { useState, useCallback } from 'react'
import { AppProvider, Select, Card, Stack, RangeSlider, DisplayText, Spinner } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import JapanEnergyResourseRadioButtons from './components/JapanEnergyResourseRadioButtons'
import wordDictionaryService from './services/word_dictionary'
import languageOptionService from './services/language_option'
import dateSelectContentsService from './services/date_select_contents'
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
  const dateSelected = date_select.dateSelected;
  const handleDateSelectChange = date_select.handleDateSelectChange;
  const monthSelected = date_select.monthSelected;
  const handleMonthSelectChange = date_select.handleMonthSelectChange;
  const month_options = date_select.month_options;
  const yearSelected = date_select.yearSelected;
  const handleYearSelectChange = date_select.handleYearSelectChange;
  const year_options = date_select.year_options;

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
                <RangeSlider
                  value={range_slider.rangeValue}
                  prefix={range_slider.prefix}
                  min={range_slider.min}
                  max={range_slider.max}
                  step={range_slider.step}
                  onChange={(value) => range_slider.handleRangeSliderChange(value, unit, year_and_month[value[0]], year_and_month[value[1]])}
                />
                <Stack distribution="equalSpacing" spacing="extraLoose">
                  <DisplayText size="small">{year_and_month[range_slider.lowerTextFieldValue]}</DisplayText>
                  <DisplayText size="small">{year_and_month[range_slider.upperTextFieldValue]}</DisplayText>
                </Stack>
              </Card.Section>) : (
                <Card.Section>
                  <Stack>
                    <Select
                      key="yearSelect"
                      label={dict.unit_y}
                      options={year_options}
                      onChange={(value) => handleYearSelectChange(unit, value, monthSelected, dateSelected)}
                      value={yearSelected}
                    />
                    <Select
                      key="monthSelect"
                      label={dict.unit_ym}
                      options={month_options}
                      onChange={(value) => handleMonthSelectChange(unit, yearSelected, value, dateSelected)}
                      value={monthSelected}
                    />
                    <Select
                      key="dateSelect"
                      label={dict.unit_ymd}
                      options={dateSelectContentsService.get_date_map(yearSelected, monthSelected)}
                      onChange={(value) => handleDateSelectChange(unit, yearSelected, monthSelected, value)}
                      value={dateSelected}
                    />
                  </Stack>
                </Card.Section>
              )
          }
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
