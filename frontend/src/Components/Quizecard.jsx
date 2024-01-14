import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import photo from "../assets/download.jpeg"
const Quizecard = () => {
  return (
    <div className='quizecard'>
        <img src={photo} alt="photo" />
        <div>Quize on React</div>
        <div><FaUser /></div>
        <Link to={'/startQuize'} >START NOW</Link>
    </div>
  )
}

export default Quizecard