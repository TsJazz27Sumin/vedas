import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import { AppProvider, Spinner } from '@shopify/polaris';
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../../../components/ver2/Common/FooterLogo'
import Condition from '../../../components/ver2/EnergyCharts/Condition'
import RangeSelectArea from '../../../components/ver2/EnergyCharts/RangeSelectArea'
import DateSelect from '../../../components/ver2/EnergyCharts/DateSelect'
import CompanyEnergyCharts from '../../../components/ver2/EnergyCharts/CompanyEnergyCharts'
import WatchoutArea from '../../../components/ver2/EnergyCharts/WatchoutArea'
import ShareButtons from '../../../components/ver2/Common/ShareButtons'
import wordDictionaryService from '../../../services/word_dictionary'
import queryParamPerserService from '../../../services/query_param_perser'
import electoricPowerResourseHook from '../../../custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from '../../../custom_hooks/electoric_power_company'
import dateSelectHook from '../../../custom_hooks/date_select'
import electoricPowerDataHook from '../../../custom_hooks/electoric_power_data'
import '../../../css/EnergyCharts.css';

const EnergyCharts = (props) => {

  const lang = props.lang;

  useEffect(() => {
    //TODO:毎回呼ばれる。
    const pathname = '/' + lang + '/home';
    console.log(pathname);
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
    top: 140%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  let Content = styled.div`
    position: absolute;
    width: 90%;
    left: 5%;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 16px;
  `;

  let ConditionDetailTitle = styled.div`
    height: 0%;
    margin-top: 3%;
    padding-bottom: 3%;
    margin-left: 4%;
    font-family: Roboto;
    font-size: 22px;
    line-height: 26px;
    color: #000;
  ` ;

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
    border-radius: 12px;
  `;

  let DateSelectAreaHelp = styled.div`
    margin-top: -3.5%;
    margin-left: 45%;
    font-family: Roboto;
    display: flex;
    color: rgba(0, 0, 0, 0.34);
    `;

  let ChartsAreaUl = styled.ul`
  `;

  let ShareButtonArea = styled.div`
    margin-top: 5%;
    margin-left: 37%;
  `;

  let LogoArea = styled.div`
    margin-top: 70px
    position: absolute;
    width: 60%;
  `;

  AnalyzeArea = styled(AnalyzeArea)`height: ${1450 + (350 * checkedCount)}px`;
  Content = styled(Content)`height: ${350 + (350 * checkedCount)}px`;

  if(isMobile){
    AnalyzeArea = styled(AnalyzeArea)`
      background:none;
      width: 100%;
      left: 0%;
      right: 0%;
    `;
    AnalyzeArea = styled(AnalyzeArea)`height: ${2000 + (300 * checkedCount)}px`;
    Content = styled(Content)`
      background:none;
    `;
    Content = styled(Content)`height: ${800 + (300 * checkedCount)}px`;

    ConditionDetailTitle = styled(ConditionDetailTitle)`
      margin-top: 0%;
      padding-bottom: 12%;
    `;

    DateSelectArea = styled(DateSelectArea)`
      width: 100%;
      margin-left: 0%;
    `;

    ChartsAreaUl = styled(ChartsAreaUl)`
      margin-left: -10%;
    `;

    ShareButtonArea = styled(ShareButtonArea)`
      margin-top: 10%;
      margin-left: 9%;
    `;

    LogoArea = styled(LogoArea)`
      margin-top: 50px;
      margin-bottom: 50px;
    `;
  }

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
        {
          electoric_power_data.is_range_slider_open ? 
        (
          <RangeSelectArea
            range_slider={electoric_power_data.range_slider}
            unit={electoric_power_data.unit}
            year_and_month={electoric_power_data.year_and_month}
          />
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
            (<ChartsAreaUl>
              <CompanyEnergyCharts
                data={electoric_power_data.data}
                dict={dict}
                electricPowersChecked={electoric_power_company.Checked}
                energyResoursesChecked={electoric_power_resource.Checked}
              />
            </ChartsAreaUl>
            )
        }
        </AppProvider>
        <ShareButtonArea>
          <ShareButtons type="big"/>
        </ShareButtonArea>
      </Content>
      <WatchoutArea dict={dict} checkedCount={checkedCount}/>
      <FooterLogo LogoArea={LogoArea} handleMenuChange={props.handleMenuChange}/>
    </AnalyzeArea>
  )
}

export default EnergyCharts