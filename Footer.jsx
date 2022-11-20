import React from 'react';
import {Link}  from 'react-router-dom'
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react"




function Footer() {
  return (
    <ChakraProvider>
    <div className='footer'>
     <Link  className='contact-link' to ="/Contact">Contact us</Link>
     <Link  className='about-link' to ="/About">About us</Link>
    </div>
    </ChakraProvider>
  )
}

export default Footer