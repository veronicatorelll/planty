import React from 'react';
import {useState} from 'react';
import Calendar from 'react-calendar';
import Time from './Time.jsx'
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react"


function Booking() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 

 return (
  <ChakraProvider>
 <div className='booking'>
   <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   </div>

   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p className='selected-date'>
      <span>Selected date:</span> {date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>

 </div>
 </ChakraProvider>
  )
}

export default Booking;