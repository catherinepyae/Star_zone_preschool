import React from 'react'
import {Footer,Header,Blog,AboutStarZone,Features,Classes} from './containers'
import {CTA,Brand,Navba} from './components';
import './App.css';

 

//react functional component
const App = () => {
  return (
    <div className='App'>
      <div className='school_bg'>
        <Navba/>
        <Header/>
      </div>
      <Brand/>
      <AboutStarZone/>
      <Features/>
      <Classes/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App