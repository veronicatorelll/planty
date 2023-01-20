import React, {useState} from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import Cart from './Cart';
import Checkout from '../Pages/Checkout';
import {DropdownCart, Dropdown} from "../Styles/headerStyle"
import {FaShoppingCart} from "react-icons/fa"
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/logo21.png"




function Header({cartProducts, setCartProducts}) {
  const [toggleCart, setToggleCart] = useState(false)

  let total = 0;


 // ---------- Toggle Cart ---------------------
 const handleToggleCart = () => {
  setToggleCart(!toggleCart)
}


  return (
<div>

  <div className='header-message'>FREE SHIPPING ON PURCHASES OVER 200kr
</div>
  <div className='logo'>
<img height={350} width ={700} src={logo} alt="Logo" />
</div>
 

<div className='navigation'>
 
 <Link to ="/">Home</Link>
 <Link to ="/About">About us</Link>
 <Link to ="/Products">Our products</Link> 
 <Link to ="/Tips">Tips</Link>
 </div>

{/* <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/> */}




 {/* <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}  onClick={handleToggleCart} /> */}
 
    </div>
  )
}

export default Header