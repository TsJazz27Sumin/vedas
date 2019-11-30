import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Chart from './components/Chart'
import noteService from './services/notes' 

const App = () => {
  const [data, setData] = useState([]) 

  useEffect(() => {
    noteService
      .getAll()
      .then(initialData => setData(initialData));
  }, [])

  const getSolars = () => {
    if(data.length === 0){
      return;
    }
    let list = []
    let tepco_solar_list = []
    let kyuden_solar_list = []
    console.log(data);

    for(const group in data.tepco_solar['demand']){
      tepco_solar_list.push({
        name: group, 
        demand: data.tepco_solar['demand'][group], 
        solar: data.tepco_solar['solar'][group]
      });
    }

    for(const group in data.kyuden_solar['demand']){
      kyuden_solar_list.push({
        name: group, 
        demand: data.kyuden_solar['demand'][group], 
        solar: data.kyuden_solar['solar'][group]
      });
    }

    list.push(<Chart d={tepco_solar_list}/>);
    list.push(<Chart d={kyuden_solar_list}/>);

    return list
  }
  
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {getSolars()}
      </ul>
    </div>
  )
}

export default App 