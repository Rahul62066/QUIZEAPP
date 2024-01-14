import React from 'react'

const HeaderWquize = () => {
  return (
    <>
   
    <nav>
      <h1>QuizeApp</h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/quize"}>Quizes</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </main>
    </nav>
    
    
    </>
  )
}

export default HeaderWquize