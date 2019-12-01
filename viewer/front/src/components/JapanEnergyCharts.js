import React from 'react'
import Note from './Note'
import Chart from './Chart'

const JapanEnergyCharts = (
  { 
    data, 
    dict, 
    hepcoChecked, 
    tohokuepcoChecked, 
    rikudenChecked,
    tepcoChecked,
    chudenChecked,
    kepcoChecked,
    energiaChecked,
    yondenChecked,
    kyudenChecked,
    okidenChecked
  }
  ) => {

    const get_volumeList = (companyData) => {
      let volumeList = []
  
      for (const group in companyData['demand']) {
        volumeList.push({
          name: group,
          demand: companyData['demand'][group],
          solar: companyData['solar'][group]
        });
      }
  
      return volumeList;
    }

    if(data.length === 0){
      return null;
    }

    let list = []

    if (hepcoChecked){
      list.push(<Note company_name={dict.hepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.hepco)}/>);
    }
    if (tohokuepcoChecked){
      list.push(<Note company_name={dict.tohokuepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.tohokuepco)}/>);
    }
    if (rikudenChecked){
      list.push(<Note company_name={dict.rikuden}/>);
      list.push(<Chart energy_data={get_volumeList(data.rikuden)}/>);
    }
    if (tepcoChecked){
      list.push(<Note company_name={dict.tepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.tepco)}/>);
    }
    if (chudenChecked){
      list.push(<Note company_name={dict.chuden}/>);
      list.push(<Chart energy_data={get_volumeList(data.chuden)}/>);
    }
    if (kepcoChecked){
      list.push(<Note company_name={dict.kepco}/>);
      list.push(<Chart energy_data={get_volumeList(data.kepco)}/>);
    }
    if (energiaChecked){
      list.push(<Note company_name={dict.energia}/>);
      list.push(<Chart energy_data={get_volumeList(data.energia)}/>);
    }
    if (yondenChecked){
      list.push(<Note company_name={dict.yonden}/>);
      list.push(<Chart energy_data={get_volumeList(data.yonden)}/>);
    }
    if (kyudenChecked){
      list.push(<Note company_name={dict.kyuden}/>);
      list.push(<Chart energy_data={get_volumeList(data.kyuden)}/>);
    }
    if (okidenChecked){
      list.push(<Note company_name={dict.okiden}/>);
      list.push(<Chart energy_data={get_volumeList(data.okiden)}/>);
    }

  return (
    list
  )
}

export default JapanEnergyCharts