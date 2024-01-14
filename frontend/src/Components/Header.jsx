import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   
    <nav>
      <h1>QuizeApp</h1>
      <main>
        <Link to={"/"}>Home</Link>
        
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </main>
    </nav>
    
    
    </>
  )
}

export default Header
