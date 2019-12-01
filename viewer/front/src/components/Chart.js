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
       <Line type="monotone" dataKey="demand" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="solar" stroke="#82ca9d" />
      </LineChart>
    );
  }
  
  export default Chart