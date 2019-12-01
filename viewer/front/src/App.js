import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Chart from './components/Chart'
import noteService from './services/notes' 

//memo:cd ../supply-and-demand-viewer/viewer/front/
const App = () => {
  const [data, setData] = useState([]) 

  useEffect(() => {
    noteService
      .getAll()
      .then(initialData => setData(initialData));
  }, [])

  const getVolumeList = (companyData) => {
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

  const getCharts = () => {
    if(data.length === 0){
      return;
    }
    let list = []
    list.push(<Note companyName="Hepco"/>);
    list.push(<Chart d={getVolumeList(data.hepco)}/>);
    list.push(<Note companyName="Tohokuepco"/>);
    list.push(<Chart d={getVolumeList(data.tohokuepco)}/>);
    list.push(<Note companyName="Rikuden"/>);
    list.push(<Chart d={getVolumeList(data.rikuden)}/>);
    list.push(<Note companyName="Tepco"/>);
    list.push(<Chart d={getVolumeList(data.tepco)}/>);
    list.push(<Note companyName="Chuden"/>);
    list.push(<Chart d={getVolumeList(data.chuden)}/>);
    list.push(<Note companyName="Kepco"/>);
    list.push(<Chart d={getVolumeList(data.kepco)}/>);
    list.push(<Note companyName="Energia"/>);
    list.push(<Chart d={getVolumeList(data.energia)}/>);
    list.push(<Note companyName="Yonden"/>);
    list.push(<Chart d={getVolumeList(data.yonden)}/>);
    list.push(<Note companyName="Kyuden"/>);
    list.push(<Chart d={getVolumeList(data.kyuden)}/>);
    list.push(<Note companyName="Okiden"/>);
    list.push(<Chart d={getVolumeList(data.okiden)}/>);


    return list
  }
  
  return (
    <div>
      <h1>Energy Charts</h1>
      <ul>
        {getCharts()}
      </ul>
    </div>
  )
}

export default App 
