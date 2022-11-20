import {useState} from 'react';
import Calendar from 'react-calendar';
import Times from "./Times";
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react"


function Time(props) {
 
 return (
  <ChakraProvider>
 <div>
  {props.showTime ? <Times date={props.date}/> : null}
 </div>
 </ChakraProvider>
  )
}

export default Time;