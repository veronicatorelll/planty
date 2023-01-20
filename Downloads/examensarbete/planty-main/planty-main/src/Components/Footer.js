import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom'
import icon1 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/icon-instagram-green.png"
import icon2 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/icon-facebook-green.png"
import icon3 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/icon-twitter-green.png"
import klarna from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/sofort-klarna.png"
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/logo20.png"



function Footer() {
  return (
    <div className='footer'>


{/* Information */}
{/* <div className='info-container'>
  <p className='information-title'>INFORMATION</p>
  <p> purchase conditions </p>
  <p>returns & complaints</p>
  <p>payment methods</p>
  <p>delivery information</p>
  <p>privacy policy</p>
  <p> FAQ </p>
</div> */}



{/* Social Media Icons */}
<div className='socials'>
    <img height={45} width ={45} src={icon1} alt="" />
    <img height={45} width ={45} src={icon2} alt="" />
    <img height={45} width ={45} src={icon3} alt="" />
  </div>
<p className='footer-logo'> PLANTY </p>
{/* Klarna Payment Icon */}
  {/* <div className='klarna-icon'>
  <p> Smooth payments with</p>
<img height={65} width ={70} src={klarna} alt="" />
</div> */}

{/* Copyright */}
 <p className='copyright'>
Copyright © PLANTY AB 2023 ◦ All rights reserved
</p> 


    </div>
  )
}

export default Footer