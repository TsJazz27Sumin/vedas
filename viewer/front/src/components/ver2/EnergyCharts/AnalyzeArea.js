import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import { AppProvider, Spinner } from '@shopify/polaris';
import FooterLogoArea from './FooterLogoArea'
import Condition from './Condition'
import ConditionDetailTitle from './ConditionDetailTitle'
import RangeSelectArea from './RangeSelectArea'
import DateSelectArea from './DateSelectArea'
import CompanyEnergyCharts from './CompanyEnergyCharts'
import ShareButtonArea from './ShareButtonArea'
import WatchoutArea from './WatchoutArea'
import electoricPowerResourseHook from '../../../custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from '../../../custom_hooks/electoric_power_company'
import dateSelectHook from '../../../custom_hooks/date_select'
import electoricPowerDataHook from '../../../custom_hooks/electoric_power_data'

const AnalyzeArea = (props) => {

  const dict = props.dict;
  const qs = props.qs;

  //電力データをCallするためのパラメータや処理
  const electoric_power_data = electoricPowerDataHook.useElectoricPowerData(qs.electoric_power_data_initialize_params);
  
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
    height: ${1450 + (350 * checkedCount)}px;
    width: 91%;
    position: absolute;
    left: 4.1%;
    top: 140%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  let Content = styled.div`
    position: absolute;
    height: ${350 + (350 * checkedCount)}px;
    width: 90%;
    left: 5%;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 16px;
  `;

  let ChartsAreaUl = styled.ul`
  `;

  if (isMobile) {
    AnalyzeArea = styled(AnalyzeArea)`
      background:none;
      width: 100%;
      left: 0%;
      right: 0%;
      height: ${2000 + (300 * checkedCount)}px;
    `;
    Content = styled(Content)`
      background:none;
      height: ${800 + (300 * checkedCount)}px;
    `;

    ChartsAreaUl = styled(ChartsAreaUl)`
      margin-left: -10%;
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
        <ConditionDetailTitle dict={dict}/>
        {
            electoric_power_data.is_range_slider_open ? 
          (
            <RangeSelectArea
              range_slider={electoric_power_data.range_slider}
              unit={electoric_power_data.unit}
              year_and_month={electoric_power_data.year_and_month}
            />
          ):(
            <DateSelectArea
              dict={dict}
              unit={electoric_power_data.unit}
              date_select={date_select} 
            />
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
        <ShareButtonArea/>
      </Content>
      <WatchoutArea dict={dict} checkedCount={checkedCount}/>
      <FooterLogoArea handleMenuChange={props.handleMenuChange}/>
    </AnalyzeArea>
  )
}

export default AnalyzeArea