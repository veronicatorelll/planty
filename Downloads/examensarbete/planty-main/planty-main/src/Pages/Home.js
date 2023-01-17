import React from 'react'
import hero from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/home.jpg"
import offer4 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/offer4.png"
import offer2 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/offer2.png"
import offer3 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/offer3.png"
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
            <img height={300} className='' src={offer2} alt="" />
            <img height={300} className='' src={offer4} alt="" />
            <img height={300} className='' src={offer3} alt="" />
            </div>

            <div className='info-offering'>
            <p className='home'> Home visits for watering </p>
            <p className='high'> High quality potted plants </p>
            <p className='care'> Care advice and tips </p>
            </div>

<News/>
            
    </div>
  )
}

export default Home