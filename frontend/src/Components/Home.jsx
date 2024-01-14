import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/header.scss'
const Home = () => {
  return (
    <>
     
    <div className='home1'>
        <div> Welcome to QuizeApp...</div>
        <div className='link'>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        </div>
       
    </div>
    
    </>
    
  )
}

export default Home