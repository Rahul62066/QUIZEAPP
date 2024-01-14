import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Quize from './Components/Quize';
import StartQuize from './Components/StartQuize';



// import './Styles/header.scss';
import './Styles/home.scss';
import './Styles/login.scss';
import './Styles/register.scss';
import './Styles/quize.scss';
import './Styles/startQuize.scss';




const App = () => {
  return (
    <>
    <Router>
       
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/quize" element={<Quize />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/startQuize" element={<StartQuize />} />
        

      </Routes>
    </Router>
    </>
  )
}

export default App