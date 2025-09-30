import './App.css'

import React from 'react'
import NavBar from "./component/NavBar"
import HomePage from "./pages/HomePage"
import Services from "./pages/Services"
import About from "./pages/About"

const App = () => {
  return (
    <>
    <div className="">
      <NavBar/>
      <HomePage/>
      <Services/>
      <About/>
    </div>
    </>
  )
}

export default App