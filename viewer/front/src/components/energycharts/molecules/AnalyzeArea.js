import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import { AppProvider, Spinner } from '@shopify/polaris';
import FooterLogoArea from './FooterLogoArea'
import Condition from 'components/energycharts/molecules/Condition'
import ConditionDetailTitle from 'components/energycharts/atoms/ConditionDetailTitle'
import RangeSelectArea from 'components/energycharts/molecules/RangeSelectArea'
import DateSelectArea from 'components/energycharts/molecules/DateSelectArea'
import CompanyEnergyCharts from 'components/energycharts/molecules/CompanyEnergyCharts'
import ShareButtonArea from 'components/energycharts/molecules/ShareButtonArea'
import WatchoutArea from 'components/energycharts/atoms/WatchoutArea'
import electoricPowerResourseHook from 'custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from 'custom_hooks/electoric_power_company'
import dateSelectHook from 'custom_hooks/date_select'
import electoricPowerDataHook from 'custom_hooks/electoric_power_data'
import WindowSizeService from 'services/window_size'
import Color from 'services/color'

const AnalyzeArea = (props) => {

  const dict = props.dict;
  const qs = props.qs;

  //電力データをCallするためのパラメータや処理
  const electoric_power_data = electoricPowerDataHook.useElectoricPowerData(qs.electoric_power_data_initialize_params, props.is_sample_case);
  
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

  const StyledComponents = getStyledComponents(checkedCount, props.lang);
  const AnalyzeArea = StyledComponents.AnalyzeArea;
  const Content = StyledComponents.Content;
  const ChartsAreaUl = StyledComponents.ChartsAreaUl;

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
        <ShareButtonArea pathname={props.pathname}/>
      </Content>
      <WatchoutArea dict={dict} checkedCount={checkedCount}/>
      <FooterLogoArea menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </AnalyzeArea>
  )
}

const getStyledComponents = (checkedCount, lang) => {

  let AnalyzeArea = styled.div`
  border-radius: 54px;
  background: ${Color.gray};

  height: ${(lang === "en" ? 1550 : 1450) + (350 * checkedCount)}px;
  width: 91%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 140%;
  left: 4.1%;
  right: 0%;
  bottom: 0%;
` ;

  let Content = styled.div`
  border: 1px solid ${Color.white};
  border-radius: 16px;

  background: ${Color.white};
  
  height: ${350 + (350 * checkedCount)}px;
  width: 90%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: auto;
  left: 5%;
  right: 0%;
  bottom: auto;
  `;

  let ChartsAreaUl = styled.ul`
  `;

  if (isMobile) {
    const window_height = WindowSizeService.getWindowHeightSize();
    
    let intervalHeight = 0;

    if (window_height > 800){
      intervalHeight = 200;
    } else if (window_height > 700){
      intervalHeight = 300;
    } else if (window_height > 600){
      intervalHeight = 300;
    }

    AnalyzeArea = styled(AnalyzeArea)`
    background:none;

    height: ${2000 + (intervalHeight * checkedCount)}px;
    width: 100%;
    
    left: 0%;
    right: 0%;
    `;

    Content = styled(Content)`
    background:none;
    
    height: ${800 + (intervalHeight * checkedCount)}px;
    `;

    ChartsAreaUl = styled(ChartsAreaUl)`
    margin-left: -10%;
    `;
  }

  return {
    AnalyzeArea : AnalyzeArea,
    Content : Content,
    ChartsAreaUl : ChartsAreaUl
  };
}

export default AnalyzeArea