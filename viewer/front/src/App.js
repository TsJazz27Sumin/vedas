import React, { useState, useEffect, useCallback } from 'react'
import {AppProvider, Select} from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import Note from './components/Note'
import Chart from './components/Chart'
import noteService from './services/notes' 
import wordDictionaryService from './services/word_dictionary' 

//memo:cd ../supply-and-demand-viewer/viewer/front/ npm start
const App = () => {

  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: '日本語', value: 'jp'},
    {label: 'English', value: 'en'},
    {label: 'China(Simplified)', value: 'ch'},
  ];

  let lang = selected;

  const [data, setData] = useState([]) 

  useEffect(() => {
    noteService
      .getAll()
      .then(initialData => setData(initialData));
  }, [])

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

  const get_charts = () => {
    if(data.length === 0){
      return;
    }
    
    let dict = wordDictionaryService.get_word_dictionary(lang);

    let list = []
    list.push(<Note company_name={dict.hepco}/>);
    list.push(<Chart energy_data={get_volumeList(data.hepco)}/>);
    list.push(<Note company_name={dict.tohokuepco}/>);
    list.push(<Chart energy_data={get_volumeList(data.tohokuepco)}/>);
    list.push(<Note company_name={dict.rikuden}/>);
    list.push(<Chart energy_data={get_volumeList(data.rikuden)}/>);
    list.push(<Note company_name={dict.tepco}/>);
    list.push(<Chart energy_data={get_volumeList(data.tepco)}/>);
    list.push(<Note company_name={dict.chuden}/>);
    list.push(<Chart energy_data={get_volumeList(data.chuden)}/>);
    list.push(<Note company_name={dict.kepco}/>);
    list.push(<Chart energy_data={get_volumeList(data.kepco)}/>);
    list.push(<Note company_name={dict.energia}/>);
    list.push(<Chart energy_data={get_volumeList(data.energia)}/>);
    list.push(<Note company_name={dict.yonden}/>);
    list.push(<Chart energy_data={get_volumeList(data.yonden)}/>);
    list.push(<Note company_name={dict.kyuden}/>);
    list.push(<Chart energy_data={get_volumeList(data.kyuden)}/>);
    list.push(<Note company_name={dict.okiden}/>);
    list.push(<Chart energy_data={get_volumeList(data.okiden)}/>);


    return list
  }
  
  return (
    <div>
      <AppProvider>
          <Select
            label="Language"
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
      </AppProvider>
      
      <h1>Energy Charts</h1>
      <ul>
        {get_charts()}
      </ul>
    </div>
  )
}

export default App 
