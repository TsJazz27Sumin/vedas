import React from 'react'
import Note from './Note'
import Chart from './Chart'

const JapanEnergyCharts = props => {

    const get_volumeList = companyData => {
      let volumeList = []
  
      for (const group in companyData['demand']) {
        volumeList.push({
          name: group,
          demand: companyData['demand'][group],
          nuclear: companyData['nuclear'][group],
          thermal: companyData['thermal'][group],
          hydro: companyData['hydro'][group],
          geothermal: companyData['geothermal'][group],
          biomass: companyData['biomass'][group],
          solar_output_control: companyData['solar_output_control'][group],
          solar: companyData['solar'][group],
          wind: companyData['wind'][group],
          wind_output_control: companyData['wind_output_control'][group],
          pumping: companyData['pumping'][group],
          interconnection: companyData['interconnection'][group],
        });
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
      list.push(<Note company_name={dict.hepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.hepco)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.tohokuepcoChecked){
      list.push(<Note company_name={dict.tohokuepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.tohokuepco)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.rikudenChecked){
      list.push(<Note company_name={dict.rikuden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.rikuden)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.tepcoChecked){
      list.push(<Note company_name={dict.tepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.tepco)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.chudenChecked){
      list.push(<Note company_name={dict.chuden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.chuden)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.kepcoChecked){
      list.push(<Note company_name={dict.kepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.kepco)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.energiaChecked){
      list.push(<Note company_name={dict.energia}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.energia)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.yondenChecked){
      list.push(<Note company_name={dict.yonden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.yonden)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.kyudenChecked){
      list.push(<Note company_name={dict.kyuden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.kyuden)} energyResoursesChecked={energyResoursesChecked}/>);
    }
    if (electricPowersChecked.okidenChecked){
      list.push(<Note company_name={dict.okiden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.okiden)} energyResoursesChecked={energyResoursesChecked}/>);
    }

  return (
    list
  )
}

export default JapanEnergyCharts