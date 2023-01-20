import React from 'react';
import tips from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/Tips.png";

import News from '../Components/News';

function Tips() {
  return (
    <div className='tips'>

        <p className='tips-page-title'>Some tips and tricks, just for you</p>
        <p className='tips-title'>Lorem ipsum lorem ipsum</p>

        <div className='tips-container'>
          
        <p className='tips-content'>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
        anything embarrassing hidden in the middle of text. 
        There are many variations of passages of Lorem Ipsum available.
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
        anything embarrassing hidden in the middle of text. 
        There are many variations of passages of Lorem Ipsum available.
        </p>
        </div>



<div className='tips-img'>
<img src={tips} alt="Logo" />
</div>


<News />
    </div>
  )
}

export default Tips