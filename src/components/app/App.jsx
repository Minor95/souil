import React from 'react'
import '../scss/app.scss'
import Header from '../common/header/Header'
import Home from "../common/home/Home"

function App(props) {
  return (
    <div className='app_container'>
      <Header />
      <Home />
    </div>
  )
}

export default App
