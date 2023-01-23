import React from 'react'
import hero from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/home.jpg"
import watering from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/watering.jpg"
import homevisit from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/homevisit.jpg"
import tips from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/tips.jpg"

import News from '../Components/News'


function Home() {
  return (
    <div>
        <p className='home-title'>Green for sustainability.</p>
        <p className='home-p'>Nobody wants a world without plants. It can only get better with more of them. </p>
        <a href='/contact'>
        <div className='contact-btn-container'> 
           <button className='contact-button'>Contact us</button>
           </div> 
          </a>
            
           <div className='hero'>
         <img className='hero-home' src={hero} alt="hero" />
        </div>

            <p className='offering'>OUR OFFERING</p>
            <p className='get'>What you can get at Planty</p>
            <div className='offer-img'>
              
            <img src={watering} alt="" />
            <img src={homevisit} alt="" />
            <img src={tips} alt="" />            
            </div>
            <div className='info-offering'>
            </div>
          

<News/>
            
    </div>
  )
}

export default Home