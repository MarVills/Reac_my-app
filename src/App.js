import React from 'react'
import './App.css'
import Card from './Card'
const App = () =>{


  return (
    <div className='app-main'>
      <Card name="Marbs" age={23} gender="Male" title="Mine"/>
      <Card name="Greg" age={27} gender="Male" title="Dev"/>
      <Card name="Saiben" age={30} gender="Male" title="Frend"/>
      <Card name="Jonar" age={24} gender="Male" title="Head"/>

    </div>
  )
}

export default App