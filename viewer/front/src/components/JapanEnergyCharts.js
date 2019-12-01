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

    if (props.hepcoChecked){
      list.push(<Note company_name={dict.hepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.hepco)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.tohokuepcoChecked){
      list.push(<Note company_name={dict.tohokuepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.tohokuepco)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.rikudenChecked){
      list.push(<Note company_name={dict.rikuden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.rikuden)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.tepcoChecked){
      list.push(<Note company_name={dict.tepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.tepco)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.chudenChecked){
      list.push(<Note company_name={dict.chuden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.chuden)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.kepcoChecked){
      list.push(<Note company_name={dict.kepco}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.kepco)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.energiaChecked){
      list.push(<Note company_name={dict.energia}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.energia)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.yondenChecked){
      list.push(<Note company_name={dict.yonden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.yonden)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.kyudenChecked){
      list.push(<Note company_name={dict.kyuden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.kyuden)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }
    if (props.okidenChecked){
      list.push(<Note company_name={dict.okiden}/>);
      list.push(<Chart dict={dict} energy_data={get_volumeList(data.okiden)} nuclearChecked={props.nuclearChecked} thermalChecked={props.thermalChecked} greenChecked={props.greenChecked} interconnectionChecked={props.interconnectionChecked}/>);
    }

  return (
    list
  )
}

export default JapanEnergyCharts