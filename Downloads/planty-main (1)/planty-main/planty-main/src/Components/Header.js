import React from 'react';
import {Link}  from 'react-router-dom';




function Header() {
  return (
<div className='header'>
<Link className='page-title' to ="/">PLANTY</Link>
<h3 className='page-under-title'>We'll take care of your plants when you're away!</h3>

    <div className='navigation'>
  <Link  className='about-nav' to ="/About">About us</Link>
  <Link  className='service-nav' to ="/Services">Our services</Link>
  <Link  className='book-nav' to ="/Booking">Book us</Link>
  <Link  className='contact-nav' to ="/Contact">Contact us</Link>
  <Link  className='cart-nav' to ="/Cart">Cart</Link>


    </div>
    </div>

  )
}

export default Header