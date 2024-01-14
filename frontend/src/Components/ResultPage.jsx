import React, { useState } from 'react'

const ResultPage = (props) => {
  

 
  return (
    <>
    <div className='Result'>
      <h3>Your Score:{props.score}</h3>
        <h3>Total Score:{props.totalScore}</h3>
        <button className='btn' onClick={props.tryAgain}>Try Again</button>
    </div>
    
    
    </>
  )
}

export default ResultPage