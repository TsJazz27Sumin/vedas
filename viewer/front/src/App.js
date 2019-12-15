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
import japanEnergyService from './services/japan_energy'
import queryParamPerserService from './services/query_param_perser'
import electoricPowerResourseHook from './custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from './custom_hooks/electoric_power_company'
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
  const prefix = electoric_power_data_hook.prefix;
  const min = electoric_power_data_hook.min;
  const max = electoric_power_data_hook.max;
  const step = electoric_power_data_hook.step;
  const rangeValue = electoric_power_data_hook.rangeValue;
  const handleRangeSliderChange = electoric_power_data_hook.handleRangeSliderChange;
  const lowerTextFieldValue = electoric_power_data_hook.lowerTextFieldValue;
  const upperTextFieldValue = electoric_power_data_hook.upperTextFieldValue;
  const is_range_slider_open = electoric_power_data_hook.is_range_slider_open;
  const setData = electoric_power_data_hook.setData;
  const setIsLoading = electoric_power_data_hook.setIsLoading;

  //言語選択
  const [languageSelected, setLanguageSelected] = useState(language_initialize);
  const handleLanguageSelectChange = useCallback((value) => setLanguageSelected(value), []);
  const languageOptions = languageOptionService.get();
  let lang = languageSelected;
  let dict = wordDictionaryService.get(lang);

  //TODO:CustomHook作って集約したい。
  //30分値指定の期間
  const dateSelectContents = dateSelectContentsService.get();

  const year_initialize = (
    electoric_power_data_initialize_params.year_initialize !== undefined
    ) ? parseInt(electoric_power_data_initialize_params.year_initialize) : dateSelectContents.this_year;

  const [yearSelected, setYearSelected] = useState(year_initialize);
  const handleYearSelectChange = useCallback((unit, value, monthSelected, dateSelected) => {
    setYearSelected(parseInt(value));
    japanEnergyService
      .get_daily_data(unit, value, monthSelected, dateSelected)
      .then(initialData => {
        setData(initialData);
        setIsLoading(false);
      });
  },
    // eslint-disable-next-line
    []);
  const year_options = dateSelectContents.year_map;

  const month_initialize = (
    electoric_power_data_initialize_params.month_initialize !== undefined
    ) ? parseInt(electoric_power_data_initialize_params.month_initialize) : dateSelectContents.prev_month;

  const [monthSelected, setMonthSelected] = useState(month_initialize);
  const handleMonthSelectChange = useCallback((unit, yearSelected, value, dateSelected) => {
    setMonthSelected(parseInt(value));
    japanEnergyService
      .get_daily_data(unit, yearSelected, value, dateSelected)
      .then(initialData => {
        setData(initialData);
        setIsLoading(false);
      });
  },
    // eslint-disable-next-line
    []);
  const month_options = dateSelectContents.month_map;

  const date_initialize = (
    electoric_power_data_initialize_params.date_initialize !== undefined
    ) ? parseInt(electoric_power_data_initialize_params.date_initialize) : 1;

  const [dateSelected, setDateSelected] = useState(date_initialize);
  const handleDateSelectChange = useCallback((unit, yearSelected, monthSelected, value) => {
    setDateSelected(parseInt(value));
    japanEnergyService
      .get_daily_data(unit, yearSelected, monthSelected, value)
      .then(initialData => {
        setData(initialData);
        setIsLoading(false);
      });
  },
    // eslint-disable-next-line
    []);
  const date_options = dateSelectContents.date_map;

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
              lowerTextFieldValue={lowerTextFieldValue}
              upperTextFieldValue={upperTextFieldValue}
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
                      options={date_options}
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
