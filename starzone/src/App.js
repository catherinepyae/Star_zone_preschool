import React from 'react'
import {Footer,Header,Blog,AboutStarZone,Features,Classes} from './containers'
import {CTA,Brand,Navbar} from './components';

//react functional component
const App = () => {
  return (
    <div className='App'>
      <div className='school_bg'>
        <Navbar/>
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