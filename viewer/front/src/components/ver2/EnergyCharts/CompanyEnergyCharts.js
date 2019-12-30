import React from 'react'
import { DisplayText, Spinner, AppProvider } from '@shopify/polaris';
import CompanyName from './CompanyName'
import Chart from './Chart'

const JapanEnergyCharts = props => {

    const get_volumeList = companyData => {
      let volumeList = []
  
      for (const group in companyData['demand']) {

        let volumeDict = {};
        volumeDict['name'] = group;

        if (energyResoursesChecked.demandChecked){
          volumeDict['demand'] = companyData['demand'][group];
        }
        if (energyResoursesChecked.nuclearChecked){
          volumeDict['nuclear'] = companyData['nuclear'][group];
        }
        if (energyResoursesChecked.thermalChecked){
          volumeDict['thermal'] = companyData['thermal'][group];
        }
        if (energyResoursesChecked.hydroChecked){
          volumeDict['hydro'] = companyData['hydro'][group];
        }
        if (energyResoursesChecked.geothermalChecked){
          volumeDict['geothermal'] = companyData['geothermal'][group];
        }
        if (energyResoursesChecked.biomassChecked){
          volumeDict['biomass'] = companyData['biomass'][group];
        }
        if (energyResoursesChecked.solarChecked){
          volumeDict['solar'] = companyData['solar'][group];
        }
        if (energyResoursesChecked.solarOutputControlChecked){
          volumeDict['solar_output_control'] = companyData['solar_output_control'][group];
        }
        if (energyResoursesChecked.windChecked){
          volumeDict['wind'] = companyData['wind'][group];
        }
        if (energyResoursesChecked.windOutputControlChecked){
          volumeDict['wind_output_control'] = companyData['wind_output_control'][group];
        }
        if (energyResoursesChecked.pumpingChecked){
          volumeDict['pumping'] = companyData['pumping'][group];
        }
        if (energyResoursesChecked.interconnectionChecked){
          volumeDict['interconnection'] = companyData['interconnection'][group];
        }

        volumeList.push(volumeDict);
      }
  
      return volumeList;
    }

    const dict = props.dict;
    const data = props.data;

    if(props.data === undefined || props.data.length === 0){
      return <AppProvider><Spinner accessibilityLabel="Spinner example" size="large" color="teal" /></AppProvider>;
    }

    let list = []
    const electricPowersChecked = props.electricPowersChecked;
    const energyResoursesChecked = props.energyResoursesChecked;

    if (electricPowersChecked.hepcoChecked){
      list.push(<CompanyName company_name={dict.hepco} jurisdiction={dict.jurisdiction} key="hepco_note"/>);

      if(Object.values(data.hepco['demand']).length === 0){
        list.push(<DisplayText key="hepco_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        console.log(electricPowersChecked.hepcoChecked);
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.hepco)} key="hepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.tohokuepcoChecked){
      list.push(<CompanyName company_name={dict.tohokuepco} jurisdiction={dict.jurisdiction} key="tohokuepco_note"/>);

      if(Object.values(data.tohokuepco['demand']).length === 0){
        list.push(<DisplayText key="tohokuepco_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.tohokuepco)} key="tohokuepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.rikudenChecked){
      list.push(<CompanyName company_name={dict.rikuden} jurisdiction={dict.jurisdiction} key="rikuden_note"/>);

      if(Object.values(data.rikuden['demand']).length === 0){
        list.push(<DisplayText key="rikuden_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.rikuden)} key="rikuden_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.tepcoChecked){
      list.push(<CompanyName company_name={dict.tepco} jurisdiction={dict.jurisdiction} key="tepco_note"/>);

      if(Object.values(data.tepco['demand']).length === 0){
        list.push(<DisplayText key="tepco_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.tepco)} key="tepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.chudenChecked){
      list.push(<CompanyName company_name={dict.chuden} jurisdiction={dict.jurisdiction} key="chuden_note"/>);

      if(Object.values(data.chuden['demand']).length === 0){
        list.push(<DisplayText key="chuden_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.chuden)} key="chuden_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.kepcoChecked){
      list.push(<CompanyName company_name={dict.kepco} jurisdiction={dict.jurisdiction} key="kepco_note"/>);

      if(Object.values(data.kepco['demand']).length === 0){
        list.push(<DisplayText key="kepco_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.kepco)} key="kepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.energiaChecked){
      list.push(<CompanyName company_name={dict.energia} jurisdiction={dict.jurisdiction} key="energia_note"/>);

      if(Object.values(data.energia['demand']).length === 0){
        list.push(<DisplayText key="energia_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.energia)} key="energia_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.yondenChecked){
      list.push(<CompanyName company_name={dict.yonden} jurisdiction={dict.jurisdiction} key="yonden_note"/>);

      if(Object.values(data.yonden['demand']).length === 0){
        list.push(<DisplayText key="yonden_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.yonden)} key="yonden_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.kyudenChecked){
      list.push(<CompanyName company_name={dict.kyuden} jurisdiction={dict.jurisdiction} key="kyuden_note"/>);

      if(Object.values(data.kyuden['demand']).length === 0){
        list.push(<DisplayText key="kyuden_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.kyuden)} key="kyuden_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.okidenChecked){
      list.push(<CompanyName company_name={dict.okiden} jurisdiction={dict.jurisdiction} key="okiden_note"/>);

      if(Object.values(data.okiden['demand']).length === 0){
        list.push(<DisplayText key="okiden_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.okiden)} key="okiden_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }
    if (electricPowersChecked.japanChecked){
      list.push(<CompanyName company_name={dict.japan} jurisdiction="" key="japan_note"/>);

      if(Object.values(data.japan['demand']).length === 0){
        list.push(<DisplayText key="japan_no_data" size="small">{dict.no_data}</DisplayText>)
      } else {
        list.push(<Chart dict={dict} energy_data={get_volumeList(data.japan)} key="japan_chart" energyResoursesChecked={energyResoursesChecked}/>);
      }
    }

  return (
    list
  )
}

export default JapanEnergyCharts