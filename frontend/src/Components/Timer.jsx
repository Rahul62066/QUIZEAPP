import React, { useState } from 'react'
import { useEffect } from 'react';
const Timer = () => {
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);
    
    var timer;
    useEffect(() => {
        timer= setInterval(() => {
            setSeconds(seconds+1);
            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            }
            if(minutes===59){
                setHours(hours+1);
                setHours(0);
            }
        }, 1000);
        return ()=>{clearInterval(timer);}
    });



  return (
    <div className='timer'>
        
            <h1>Timer :- </h1>
            <h1 >{hours<10?"0"+hours:hours}:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
        
    </div>
  )
}

export default Timer