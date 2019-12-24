import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import queryString from 'query-string';
import JapanEnergyChart from './apps/JapanEnergyChart'
import News from './apps/News'
import About from './apps/About'
import HowToUse from './apps/HowToUse'
import Contact from './apps/Contact'
import LanguageSetting from './apps/LanguageSetting'

const App = (props) => {
 
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route 
            exact path='/jp/' 
            render={ 
              (props) => <JapanEnergyChart lang="jp" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            exact path='/en/' 
            render={ 
              (props) => <JapanEnergyChart lang="en" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            exact path='/ch/' 
            render={ 
              (props) => <JapanEnergyChart lang="ch" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            exact path='/es/' 
            render={ 
              (props) => <JapanEnergyChart lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/jp/news'
            render={ 
              (props) => <News lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/en/news'
            render={ 
              (props) => <News lang="en" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/ch/news'
            render={ 
              (props) => <News lang="ch" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/es/news'
            render={ 
              (props) => <News lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/jp/about'
            render={ 
            (props) => <About lang="jp" location={props.location} query_param={queryString.parse(props.location.search)} />
            } 
          />
          <Route 
            path='/en/about'
            render={ 
            (props) => <About lang="en" location={props.location} query_param={queryString.parse(props.location.search)} />
            } 
          />
          <Route 
            path='/ch/about'
            render={ 
            (props) => <About lang="ch" location={props.location} query_param={queryString.parse(props.location.search)} />
            } 
          />
          <Route 
            path='/es/about'
            render={ 
            (props) => <About lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
            } 
          />
          <Route 
            path='/jp/howtouse' 
            render={ 
              (props) => <HowToUse lang="jp" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/en/howtouse' 
            render={ 
              (props) => <HowToUse lang="en" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/ch/howtouse' 
            render={ 
              (props) => <HowToUse lang="ch" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/es/howtouse' 
            render={ 
              (props) => <HowToUse lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/jp/contact'
            render={ 
              (props) => <Contact lang="jp" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/en/contact'
            render={ 
              (props) => <Contact lang="en" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/ch/contact'
            render={ 
              (props) => <Contact lang="ch" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/es/contact'
            render={ 
              (props) => <Contact lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/jp/language_setting'
            render={ 
              (props) => <LanguageSetting lang="jp" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/en/language_setting'
            render={ 
              (props) => <LanguageSetting lang="en" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/ch/language_setting'
            render={ 
              (props) => <LanguageSetting lang="ch" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
          <Route 
            path='/es/language_setting'
            render={ 
              (props) => <LanguageSetting lang="es" location={props.location} query_param={queryString.parse(props.location.search)} />
              } 
          />
        </div>
      </BrowserRouter>
    </div >
  )
}

export default App 
