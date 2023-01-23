import React from 'react'
import { Link } from 'react-router-dom'
import springsale from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/springsale.png"
import news1 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news1.png"
import news2 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news2.png"
import news3 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news3.png"
import news4 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news4.png"
import news5 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news5.png"
import news14 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news14.jpg"
import news15 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news15.png"
import news16 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/news16.png"
import arrow from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/arrow.png"


function News() {
  return (
    <div>
        <p className='news-title'>Keep getting inspired</p>
        <p className='planty-instagram'>@planty</p>
        
        <div className='news-container'>

          <div className ="news-img">
        <img height={390} width ={390} src={springsale} alt="" />
        <img height={390} width ={390} src={news3} alt="" />

        <img height={390} width ={390} src={news2} alt="" />
        <img height={390} width ={390} src={news1} alt="" />
        <img height={390} width ={390} src={news4} alt="" />
        <img height={390} width ={390} src={news5} alt="" />
        <img height={390} width ={390} src={news14} alt="" />
        <img height={390} width ={390} src={news15} alt="" />
        <img height={390} width ={390} src={news16} alt="" />
        </div>
        
        </div>

        <Link className='link-to-news' to="/NewsPage">More news 
        <img className='arrow' height={20} width={20} src={arrow} alt=""></img>
        </Link>
        </div>
  )
}

export default News