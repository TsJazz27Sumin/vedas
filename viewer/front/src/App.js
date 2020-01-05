import React from 'react'
import Home from './components/common/Home'

const App = (props) => {

  const lang = props.qs.lang === undefined ? 'jp' : props.qs.lang;
 
  return (
    <div>
      <Home lang={lang} location={props.location} qs={props.qs} />
    </div >
  )
}

export default App 
