import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = (props) => {
    const dict = props.dict;
    return (
    	<LineChart width={1300} height={300} data={props.energy_data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" name={dict.demand} dataKey="demand" stroke="#637381" activeDot={{r: 8}}/>
       <Line type="monotone" name={dict.nuclear} dataKey="nuclear" stroke="#919EAB" />
       <Line type="monotone" name={dict.thermal} dataKey="thermal" stroke="#BF0711" />
       <Line type="monotone" name={dict.hydro} dataKey="hydro" stroke="#43467F" />
       <Line type="monotone" name={dict.geothermal} dataKey="geothermal" stroke="#50B83C" />
       <Line type="monotone" name={dict.biomass} dataKey="biomass" stroke="#E3D0FF" />
       <Line type="monotone" name={dict.solar} dataKey="solar" stroke="#B3BCF5" />
       <Line type="monotone" name={dict.wind} dataKey="wind" stroke="#B4E1FA" />
       <Line type="monotone" name={dict.pumping} dataKey="pumping" stroke="#47C1BF" />
       <Line type="monotone" name={dict.interconnection} dataKey="interconnection" stroke="#F49342" />
      </LineChart>
    );
  }
  
  export default Chart