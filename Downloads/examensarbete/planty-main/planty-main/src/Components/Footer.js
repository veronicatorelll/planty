import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom'




function Footer() {
  return (
    <div className='footer'>

    <BrowserRouter>
    <Link to ="/Contact">Contact us</Link>
    <Link to ="/About">About us</Link>

    </BrowserRouter>
    </div>
  )
}

export default Footer