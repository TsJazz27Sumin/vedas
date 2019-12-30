import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { AppProvider, Spinner } from '@shopify/polaris';
import styled from 'styled-components';
import FooterLogo from '../../../components/ver2/EnergyCharts/FooterLogo'
import Condition from '../../../components/ver2/EnergyCharts/Condition'
import RangeSelect from '../../../components/ver2/EnergyCharts/RangeSelect'
import DateSelect from '../../../components/ver2/EnergyCharts/DateSelect'
import CompanyEnergyCharts from '../../../components/ver2/EnergyCharts/CompanyEnergyCharts'
import wordDictionaryService from '../../../services/word_dictionary'
import queryParamPerserService from '../../../services/query_param_perser'
import electoricPowerResourseHook from '../../../custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from '../../../custom_hooks/electoric_power_company'
import dateSelectHook from '../../../custom_hooks/date_select'
import electoricPowerDataHook from '../../../custom_hooks/electoric_power_data'

const EnergyCharts = (props) => {

  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  //クエリパラメータ
  const qs = queryParamPerserService.execute(props.qs, lang);

  //電力データをCallするためのパラメータや処理
  const electoric_power_data = electoricPowerDataHook.useElectoricPowerData(qs.electoric_power_data_initialize_params);

  //言語選択
  let dict = wordDictionaryService.getV2(lang);

  //30分値指定の期間
  const date_select = dateSelectHook.useDateSelect(
    qs.electoric_power_data_initialize_params, 
    electoric_power_data.setData, 
    electoric_power_data.setIsLoading
  );

  //電力会社の選択
  const electoric_power_company = electoricPowerCompanyHook.useElectoricPowerCompany(qs.energy_power_company_initialize_params);

  //エネルギーリソースの選択
  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse(qs.electoric_power_resourse_initialize_params);

  const AnalyzeArea = styled.div`
    height: 2000%;
    width: 91%;
    position: absolute;
    left: 4.1%;
    right: 4.1%;
    top: 140%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  const Content = styled.div`
    position: absolute;
    width: 90%;
    height: 50%;
    left: 5%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
  `;

  const ConditionDetailTitle = styled.div`
    height: 0%;
    margin-top: 3%;
    padding-bottom: 3%;
    margin-left: 4%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;

    color: #000;
  ` ;

  let RangeSelectArea = styled.div`
    height: 2%;
    width: 94%;
    margin-top: 0%;
    margin-left: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    background: #F0F0F0;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 12px;
  `;

  let DateSelectArea = styled.div`
    height: 2%;
    width: 94%;
    margin-top: 0%;
    margin-left: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    background: #F0F0F0;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 12px;
  `;

  return (
    <AnalyzeArea>
      <Condition 
        dict={dict}
        electoric_power_data={electoric_power_data}
        electoric_power_company={electoric_power_company}
        electoric_power_resource={electoric_power_resource}
        />
      <Content>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text4}</p></ConditionDetailTitle>
        {electoric_power_data.is_range_slider_open ? (
          <RangeSelectArea>
            <AppProvider>
              <RangeSelect
                range_slider={electoric_power_data.range_slider}
                unit={electoric_power_data.unit}
                year_and_month={electoric_power_data.year_and_month}
              />
            </AppProvider>
          </RangeSelectArea>
        ):(
          <DateSelectArea>
            <AppProvider>
              <DateSelect
                dict={dict}
                unit={electoric_power_data.unit}
                date_select={date_select}
              />
            </AppProvider>
          </DateSelectArea>
        )
        }
        <AppProvider>
        {
          electoric_power_data.is_loading ?
            (
              <ul>
                <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
              </ul>
            )
            :
            (<ul>
              <CompanyEnergyCharts
                data={electoric_power_data.data}
                dict={dict}
                electricPowersChecked={electoric_power_company.Checked}
                energyResoursesChecked={electoric_power_resource.Checked}
              />
            </ul>
            )
        }
        </AppProvider>
      </Content>
      <FooterLogo handleMenuChange={props.handleMenuChange}/>
    </AnalyzeArea>
  )
}

export default EnergyCharts