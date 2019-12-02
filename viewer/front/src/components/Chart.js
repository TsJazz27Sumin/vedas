import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
    const dict = props.dict;

    let list = []

    if (props.demandChecked){
      list.push(<Line type="monotone" name={dict.demand} dataKey="demand" stroke="#637381" activeDot={{r: 8}}/>);
    }
    if (props.nuclearChecked){
      list.push(<Line type="monotone" name={dict.nuclear} dataKey="nuclear" stroke="#919EAB" />);
    }
    if (props.thermalChecked){
      list.push(<Line type="monotone" name={dict.thermal} dataKey="thermal" stroke="#BF0711" />);
    }
    if (props.greenChecked){
      list.push(<Line type="monotone" name={dict.hydro} dataKey="hydro" stroke="#43467F" />);
      list.push(<Line type="monotone" name={dict.geothermal} dataKey="geothermal" stroke="#50B83C" />);
      list.push(<Line type="monotone" name={dict.biomass} dataKey="biomass" stroke="#E3D0FF" />);
      list.push(<Line type="monotone" name={dict.solar} dataKey="solar" stroke="#F49342" />);
      list.push(<Line type="monotone" name={dict.solar_output_control} dataKey="solar_output_control" stroke="#8A6116" />);
      list.push(<Line type="monotone" name={dict.wind} dataKey="wind" stroke="#B4E1FA" />);
      list.push(<Line type="monotone" name={dict.wind_output_control} dataKey="wind_output_control" stroke="#573B00" />);
      list.push(<Line type="monotone" name={dict.pumping} dataKey="pumping" stroke="#47C1BF" />);
    }
    if (props.interconnectionChecked){
      list.push(<Line type="monotone" name={dict.interconnection} dataKey="interconnection" stroke="#B3BCF5" />);
    }

    return (
    	<LineChart width={1300} height={300} data={props.energy_data}
            margin={{top: 30, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       {list}
      </LineChart>
    );
  }
  
  export default Chart