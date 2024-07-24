import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Academics from './components/Academics'
import Admissions from './components/Admissions'
import Students from './components/Students'
import Faculty from './components/Faculty'
import Gallery from './components/Gallery'
import Contactus from './components/Contactus'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Aboutus/>
      <Academics/>
      <Admissions/>
      <Faculty/>
      <Students/>
      <Gallery/>
      <Contactus/>
    </div>
  )
}

export default App
