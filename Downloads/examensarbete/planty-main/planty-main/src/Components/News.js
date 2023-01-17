import React from 'react'
import springsale from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/springsale.png"
import news1 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news1.png"
import news2 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news2.png"

function News() {
  return (
    <div>
        <p className='news-title'>Keep getting inspired. Follow us on Instagram!</p>
        <p className='planty-instagram'>@planty</p>
        
        <div className='news-container'>

          <div className ="news-img">
        <img height={280} width ={280} src={springsale} alt="" />
        <img height={280} width ={280} src={news2} alt="" />
        <img height={280} width ={280} src={news1} alt="" />
        </div>
        
        </div>
        </div>
  )
}

export default News