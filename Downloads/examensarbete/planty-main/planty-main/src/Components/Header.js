import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import Booking from "../Pages/Booking"
import Cart from './Cart';
import {FaShoppingCart} from "react-icons/fa"





function Header() {
  return (
<div className='header'>
 
<h3 className='page-under-title'> HEADER</h3>
<div className='navigation'>
 <BrowserRouter>
 <Link to ="/Home">Home</Link> 
 <Link to ="/About">About us</Link>
 <Link to ="/Products">Our products</Link>
 <Link to ="/Booking">Book us</Link>
 <Link to ="/Cart"> <FaShoppingCart/></Link> 


 </BrowserRouter>
    </div>
    </div>
  )
}

export default Header