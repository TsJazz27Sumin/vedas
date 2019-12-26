import React, {useEffect} from 'react'
import ReactGA from 'react-ga';
import { AppProvider, Card, Spinner } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import CompanyEnergyCharts from '../components/CompanyEnergyCharts'
import CompanyCheckBoxes from '../components/CompanyCheckBoxes'
import EnergyResourseBadges from '../components/EnergyResourseBadges'
import AnalyzeTermRadioButtons from '../components/AnalyzeTermRadioButtons'
import DateSelect from '../components/DateSelect'
import RangeSelect from '../components/RangeSelect'
import ShareButtons from '../components/ShareButtons'
import VedasTopBar from '../components/VedasTopBar'
import wordDictionaryService from '../services/word_dictionary'
import queryParamPerserService from '../services/query_param_perser'
import electoricPowerResourseHook from '../custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from '../custom_hooks/electoric_power_company'
import dateSelectHook from '../custom_hooks/date_select'
import rangeSliderHook from '../custom_hooks/electoric_power_data'

//memo:
//cd ../supply-and-demand-viewer/viewer/front/
//npm start
//reference:https://polaris.shopify.com/components/
const JapanEnergyChart = (props) => {
  
  useEffect(() => {
    const { pathname } = props.location;
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);

    // if(props.query_param.case !== undefined){
    //   window.scrollTo(0, 667);
    // }
  });

  //クエリパラメータ
  const lang = props.lang;
  const qs = queryParamPerserService.execute(props.query_param, lang);
  const language_initialize = qs.lang;
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
  let dict = wordDictionaryService.get(language_initialize);

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

  const current_url = window.location.href;
  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_image = public_url + '/vedas.png';

  return (
    <div>
      <VedasTopBar location={props.location} qs={qs} lang={lang}/>
      <svg className="start" width="1440" height="347" viewBox="0 0 1440 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
        <path className="st2" d="M-110 331.41C-92.712 331.41 26.9003 331.41 367.046 331.41C707.191 331.41 899.011 209.816 1005.33 173.824C1111.65 137.832 1219.98 137.832 1219.98 137.832H1449" stroke="#9B00E3" strokeWidth="10"/>
        <path className="st2" d="M-94.7808 30H296.508C365.173 30 433.706 63.4966 467.348 140.151C509.401 235.97 635.888 260.123 705.209 260.123C760.667 260.123 1340.7 254.758 1445.5 254.758" stroke="#FF33AD" strokeWidth="10"/>
        <path className="st2" d="M-96 259.955H414.712C504.333 259.955 593.783 233.48 637.693 172.893C692.58 97.1603 857.672 78.0697 948.151 78.0697C1020.53 78.0697 1312.21 78.0697 1449 78.0697" stroke="#FFED48" strokeWidth="10"/>
        <path className="st2" d="M-103 216.695H404.824C493.938 216.695 695.298 233.43 781.952 161.453C935.246 34.1219 1019.51 45.8756 1109.47 45.8756C1181.45 45.8756 1316.98 45.8756 1453 45.8756" stroke="#6DDCFF" strokeWidth="10"/>
        <path className="st1" d="M1453 23.5041C1435.83 23.5041 1317.07 23.5041 979.32 23.5041C641.575 23.5041 451.109 120.616 345.538 149.361C239.966 178.107 132.407 178.107 132.407 178.107H-95" stroke="#9B00E3" strokeWidth="10"/>
        <path className="st2" d="M-120 298.93H405.587C497.819 298.93 589.873 270.942 635.062 206.894C691.549 126.833 861.449 106.652 954.563 106.652C1029.05 106.652 1329.23 106.652 1470 106.652" stroke="#FF33AD" strokeWidth="10"/>
        <path className="st2" d="M-287 5H293.79C395.709 5 497.432 26.3692 547.368 75.2711C609.787 136.399 797.532 151.807 900.426 151.807C982.741 151.807 1314.44 151.807 1470 151.807" stroke="#FFED48" strokeWidth="10"/>
        <path className="st2" d="M-146 269.658H381.406C473.956 269.658 683.08 263.618 773.076 289.595C932.281 335.549 1019.79 331.307 1113.23 331.307C1187.98 331.307 1328.74 331.307 1470 331.307" stroke="#6DDCFF" strokeWidth="10"/>
        </g>
      </svg>
      <div className="main-title">でんきの「！」を見つける</div>
      <div className="vedas-logo">
        <img width="30%" src={vedas_logo_image} alt="vedas log"/>
      </div>
      <AppProvider>
        <Card sectioned>
          <Card.Section>
            <AnalyzeTermRadioButtons
              dict={dict}
              unit={unit}
              year_and_month={year_and_month}
              lowerTextFieldValue={range_slider.lowerTextFieldValue}
              upperTextFieldValue={range_slider.upperTextFieldValue}
              handleTermChange={handleTermChange}
            />
          </Card.Section>
          <Card.Section>
            <CompanyCheckBoxes
              dict={dict}
              allChecked={allChecked}
              handleAllChange={handleAllChange}
              electricPowersChecked={electricPowersChecked}
              handleElectricPowersChange={handleElectricPowersChange}
            />
          </Card.Section>
          <Card.Section>
            <EnergyResourseBadges
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
      <AppProvider>
        {
          is_loading ?
            (
              <ul>
                <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
              </ul>
            )
            :
            (<ul>
              <CompanyEnergyCharts
                data={data}
                dict={dict}
                electricPowersChecked={electricPowersChecked}
                energyResoursesChecked={energyResoursesChecked}
              />
            </ul>
            )
        }
        <Card title={dict.watchout} sectioned>
          <Card.Section>
            <p>{dict.watchout_info1}</p>
            <p>{dict.watchout_info2}</p>
            <br/>
            <p>{dict.watchout_info3}</p>
            <p>{dict.watchout_info4}</p>
            <p>{dict.watchout_info5}</p>
          </Card.Section>
          <Card.Section>
            <ShareButtons current_url={current_url}/>
          </Card.Section>
        </Card>
      </AppProvider>
    </div >
  )
}

export default JapanEnergyChart 
