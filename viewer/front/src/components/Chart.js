import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Chart = ({energy_data}) => {
    return (
    	<LineChart width={1200} height={300} data={energy_data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="demand" stroke="#637381" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="hydro" stroke="#43467F" />
       <Line type="monotone" dataKey="biomass" stroke="#E3D0FF" />
       <Line type="monotone" dataKey="solar" stroke="#B3BCF5" />
       <Line type="monotone" dataKey="wind" stroke="#B4E1FA" />
      </LineChart>
    );
  }
  
  export default Chart