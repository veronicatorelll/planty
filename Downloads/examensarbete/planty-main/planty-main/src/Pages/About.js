import React from 'react';
import about from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall2.jpg";
import News from '../Components/News';



function About() {
  return(
    <div className='about-container'>
        <p className='about-title'> Where it all began... </p>
     
<div className='about-img'>
<img src={about} alt="" />
</div>


<div className='about-text-container'>
        <p className='about-text'>
    "What seems to be just another page in your sitemap, probably accessible through your header and/or footer, is actually one of your most compelling pieces of content. Or at least, it should be.
Yes, we’re talking about your website’s About Us page.

Let’s take a look at 16 of our favorite About Us pages, whose design and content. "

</p>
   
<div className='about-button-container'>
        <button className='about-button'>read more</button>
       </div>
</div>
<News />

    </div>
    
  )
}

export default About