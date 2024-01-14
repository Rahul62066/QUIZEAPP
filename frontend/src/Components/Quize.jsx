import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Header from './Header'


import '../Styles/header.scss'
import Quizecard from './Quizecard'
import "../Styles/quizecard.scss"
const Quize = () => {
  return (
    <>
    <Header /> 
    <div className='quize'>
        <div className='first'>
        <div className='topic'>Quizes
        <div><HashLink to={'./#latest'}>Latest Quizes</HashLink>
            <HashLink to={'./#coming'}>Coming Quizes</HashLink>
            <HashLink to={'./#previous'}>Previous Quizes</HashLink></div>
        </div>
        
        </div>
    <div className='second'>
    <div id='latest'>
      <h1>Latest Quizes</h1>
    <div className='cards'><Quizecard />
    <Quizecard />
    <Quizecard />
    <Quizecard />
    <Quizecard /></div>
    </div>
    <div id='coming'>
    <h1>Coming Quizes</h1>
    <div className='cards'><Quizecard />
    <Quizecard />
    <Quizecard />
    <Quizecard />
    <Quizecard /></div>
    </div>
    <div id='previous'>
    <h1>Previous Quizes</h1>
    <div className='cards'><Quizecard />
    <Quizecard />
    <Quizecard />
    <Quizecard />
    <Quizecard /></div>
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Quize