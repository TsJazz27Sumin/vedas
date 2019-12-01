import React from 'react'
import Note from './Note'
import Chart from './Chart'

const JapanEnergyCharts = (props) => {

    const get_volumeList = (companyData) => {
      let volumeList = []
  
      for (const group in companyData['demand']) {
        volumeList.push({
          name: group,
          demand: companyData['demand'][group],
          hydro: companyData['hydro'][group],
          biomass: companyData['biomass'][group],
          solar: companyData['solar'][group],
          wind: companyData['wind'][group],
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

    if (props.hepcoChecked){
      list.push(<Note company_name={dict.hepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.hepco)}/>);
    }
    if (props.tohokuepcoChecked){
      list.push(<Note company_name={dict.tohokuepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.tohokuepco)}/>);
    }
    if (props.rikudenChecked){
      list.push(<Note company_name={dict.rikuden}/>);
      list.push(<Chart energy_data={get_volumeList(data.rikuden)}/>);
    }
    if (props.tepcoChecked){
      list.push(<Note company_name={dict.tepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.tepco)}/>);
    }
    if (props.chudenChecked){
      list.push(<Note company_name={dict.chuden}/>);
      list.push(<Chart energy_data={get_volumeList(data.chuden)}/>);
    }
    if (props.kepcoChecked){
      list.push(<Note company_name={dict.kepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.kepco)}/>);
    }
    if (props.energiaChecked){
      list.push(<Note company_name={dict.energia}/>);
      list.push(<Chart energy_data={get_volumeList(data.energia)}/>);
    }
    if (props.yondenChecked){
      list.push(<Note company_name={dict.yonden}/>);
      list.push(<Chart energy_data={get_volumeList(data.yonden)}/>);
    }
    if (props.kyudenChecked){
      list.push(<Note company_name={dict.kyuden}/>);
      list.push(<Chart energy_data={get_volumeList(data.kyuden)}/>);
    }
    if (props.okidenChecked){
      list.push(<Note company_name={dict.okiden}/>);
      list.push(<Chart energy_data={get_volumeList(data.okiden)}/>);
    }

  return (
    list
  )
}

export default JapanEnergyCharts