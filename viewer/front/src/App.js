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
import electoricPowerResourseHook from './custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from './custom_hooks/electoric_power_company'
import rangeSliderHook from './custom_hooks/electoric_power_data'

//memo:
//cd ../supply-and-demand-viewer/viewer/front/
//npm start
//reference:https://polaris.shopify.com/components/
const App = (props) => {

  //Query Param
  const qs = props.qs;

  //言語選択
  const language_initialize = (qs.language_initialize === undefined) ? "jp" : qs.language_initialize;

  //集計単位
  const unit_initialize = (qs.unit_initialize === undefined) ? "ym" : qs.unit_initialize;

  //電力会社
  const toBoolean = (data) => data.toLowerCase() === 'true';
  const energy_power_company_initialize_params = {
    hepcoChecked_initialize: (qs.hepcoChecked_initialize === undefined) ? false : toBoolean(qs.hepcoChecked_initialize),
    tohokuepcoChecked_initialize: (qs.tohokuepcoChecked_initialize === undefined) ? false : toBoolean(qs.tohokuepcoChecked_initialize),
    rikudenChecked_initialize: (qs.rikudenChecked_initialize === undefined) ? false : toBoolean(qs.rikudenChecked_initialize),
    //tepcoだけSampleでDefault is true.
    tepcoChecked_initialize: (qs.tepcoChecked_initialize === undefined) ? true : toBoolean(qs.tepcoChecked_initialize),
    chudenChecked_initialize: (qs.chudenChecked_initialize === undefined) ? false : toBoolean(qs.chudenChecked_initialize),
    kepcoChecked_initialize: (qs.kepcoChecked_initialize === undefined) ? false : toBoolean(qs.kepcoChecked_initialize),
    energiaChecked_initialize: (qs.energiaChecked_initialize === undefined) ? false : toBoolean(qs.energiaChecked_initialize),
    yondenChecked_initialize: (qs.yondenChecked_initialize === undefined) ? false : toBoolean(qs.yondenChecked_initialize),
    kyudenChecked_initialize: (qs.kyudenChecked_initialize === undefined) ? false : toBoolean(qs.kyudenChecked_initialize),
    okidenChecked_initialize: (qs.okidenChecked_initialize === undefined) ? false : toBoolean(qs.okidenChecked_initialize),
  };

  //電源リソース
  const electoric_power_resourse_initialize_params = {
    //demandだけSampleでDefault is true.
    demandChecked_initialize: (qs.demandChecked_initialize === undefined) ? true : toBoolean(qs.demandChecked_initialize),
    nuclearChecked_initialize: (qs.nuclearChecked_initialize === undefined) ? false : toBoolean(qs.nuclearChecked_initialize),
    thermalChecked_initialize: (qs.thermalChecked_initialize === undefined) ? false : toBoolean(qs.thermalChecked_initialize),
    hydroChecked_initialize: (qs.hydroChecked_initialize === undefined) ? false : toBoolean(qs.hydroChecked_initialize),
    geothermalChecked_initialize: (qs.geothermalChecked_initialize === undefined) ? false : toBoolean(qs.geothermalChecked_initialize),
    biomassChecked_initialize: (qs.biomassChecked_initialize === undefined) ? false : toBoolean(qs.biomassChecked_initialize),
    solarChecked_initialize: (qs.solarChecked_initialize === undefined) ? false : toBoolean(qs.solarChecked_initialize),
    solarOutputControlChecked_initialize: (qs.solarOutputControlChecked_initialize === undefined) ? false : toBoolean(qs.solarOutputControlChecked_initialize),
    windChecked_initialize: (qs.windChecked_initialize === undefined) ? false : toBoolean(qs.windChecked_initialize),
    windOutputControlChecked_initialize: (qs.windOutputControlChecked_initialize === undefined) ? false : toBoolean(qs.windOutputControlChecked_initialize),
    pumpingChecked_initialize: (qs.pumpingChecked_initialize === undefined) ? false : toBoolean(qs.pumpingChecked_initialize),
    interconnectionChecked_initialize: (qs.interconnectionChecked_initialize === undefined) ? false : toBoolean(qs.interconnectionChecked_initialize),
  };

  //電力データをCallするためのパラメータや処理
  const electoric_power_data_hook = rangeSliderHook.useElectoricPowerData(unit_initialize)
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

  const [yearSelected, setYearSelected] = useState(dateSelectContents.this_year);
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

  const [monthSelected, setMonthSelected] = useState(dateSelectContents.prev_month);
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

  const [dateSelected, setDateSelected] = useState(1);
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
