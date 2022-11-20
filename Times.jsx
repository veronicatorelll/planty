import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react"


const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
  <ChakraProvider>
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div className='your-appointment'>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
 </ChakraProvider>
  )
}

export default Times;