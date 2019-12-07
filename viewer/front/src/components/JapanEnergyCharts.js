import React from 'react'
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

    if(props.data.length === 0){
      return null;
    }

    let list = []
    const dict = props.dict;
    const data = props.data;
    const electricPowersChecked = props.electricPowersChecked;
    const energyResoursesChecked = props.energyResoursesChecked;

    if (electricPowersChecked.hepcoChecked){
      list.push(<CompanyName company_name={dict.hepco} key="hepco_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.hepco)} key="hepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.tohokuepcoChecked){
      list.push(<CompanyName company_name={dict.tohokuepco} key="tohokuepco_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.tohokuepco)} key="tohokuepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.rikudenChecked){
      list.push(<CompanyName company_name={dict.rikuden} key="rikuden_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.rikuden)} key="rikuden_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.tepcoChecked){
      list.push(<CompanyName company_name={dict.tepco} key="tepco_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.tepco)} key="tepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.chudenChecked){
      list.push(<CompanyName company_name={dict.chuden} key="chuden_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.chuden)} key="chuden_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.kepcoChecked){
      list.push(<CompanyName company_name={dict.kepco} key="kepco_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.kepco)} key="kepco_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.energiaChecked){
      list.push(<CompanyName company_name={dict.energia} key="energia_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.energia)} key="energia_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.yondenChecked){
      list.push(<CompanyName company_name={dict.yonden} key="yonden_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.yonden)} key="yonden_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.kyudenChecked){
      list.push(<CompanyName company_name={dict.kyuden} key="kyuden_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.kyuden)} key="kyuden_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.okidenChecked){
      list.push(<CompanyName company_name={dict.okiden} key="okiden_note"/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.okiden)} key="okiden_chart" energyResoursesChecked={energyResoursesChecked}/>);
    }

  return (
    list
  )
}

export default JapanEnergyCharts