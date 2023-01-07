import React from 'react';
import tips from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/Tips.png";

function Tips() {
  return (
    <div>
        <p className='tipstricks'>Some tips and tricks just for you</p>
        <p className='tips-content'>
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected humour, 
        or randomised words which don't look even slightly believable. 
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
        anything embarrassing hidden in the middle of text. 
        </p>
<div className='tips-img'>
<img height={500} width ={600} src={tips} alt="Logo" />
</div>

    </div>
  )
}

export default Tips