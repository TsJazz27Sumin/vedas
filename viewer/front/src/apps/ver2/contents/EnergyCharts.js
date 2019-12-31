import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { AppProvider, Spinner } from '@shopify/polaris';
import styled from 'styled-components';
import FooterLogo from '../../../components/ver2/EnergyCharts/FooterLogo'
import Condition from '../../../components/ver2/EnergyCharts/Condition'
import RangeSelect from '../../../components/ver2/EnergyCharts/RangeSelect'
import DateSelect from '../../../components/ver2/EnergyCharts/DateSelect'
import CompanyEnergyCharts from '../../../components/ver2/EnergyCharts/CompanyEnergyCharts'
import ShareButtons from '../../../components/ver2/ShareButtons'
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
  const checkedCount = electoric_power_company.CheckedCount;
  //エネルギーリソースの選択
  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse(qs.electoric_power_resourse_initialize_params);

  let AnalyzeArea = styled.div`
    height: 5300px
    width: 91%;
    position: absolute;
    left: 4.1%;
    right: 4.1%;
    top: 140%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  let Content = styled.div`
    position: absolute;
    width: 90%;
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
    height: 100px;
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
    height: 100px;
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

  let DateSelectAreaHelp = styled.div`
    margin-top: -3%;
    margin-left: 45%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    display: flex;

    color: rgba(0, 0, 0, 0.34);
    `;

  let ShareButtonArea = styled.div`
    margin-top: 5%;
    margin-left: 37%;
  `;

  let WatchoutArea = styled.div`
    margin-left: 6%;
  `;

  let WatchoutTitle = styled.div`
    margin-top: 10%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 21px;

    color: #000;
  `;

  let WatchoutTexts = styled.div`
    margin-top: 5%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;

    color: #000;
  `;

  AnalyzeArea = styled(AnalyzeArea)`height: ${1450 + (350 * checkedCount)}px`;
  Content = styled(Content)`height: ${350 + (350 * checkedCount)}px`;
  WatchoutArea = styled(WatchoutArea)`margin-top: ${450 + (350 * checkedCount)}px`;

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
              <DateSelectAreaHelp>
                <p>{dict.analyze_condtion_text5}</p>
              </DateSelectAreaHelp>
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
        <ShareButtonArea>
          <ShareButtons type="big"/>
        </ShareButtonArea>
      </Content>
      <WatchoutArea>
        <WatchoutTitle>
          <p>{dict.watchout}</p>
        </WatchoutTitle>
        <WatchoutTexts>
          <p>{dict.watchout_info2}</p>
          <p>{dict.watchout_info3}</p>
          <p>{dict.watchout_info4}</p>
          <p>{dict.watchout_info5}</p>
        </WatchoutTexts>
      </WatchoutArea>
      <FooterLogo handleMenuChange={props.handleMenuChange}/>
    </AnalyzeArea>
  )
}

export default EnergyCharts