import React, {useState} from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import Cart from './Cart';
import Checkout from '../Pages/Checkout';
import {DropdownCart, Dropdown} from "../Styles/headerStyle"
import {FaShoppingCart} from "react-icons/fa"
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/thelogo.png"




function Header({cartProducts, setCartProducts}) {
  const [toggleCart, setToggleCart] = useState(false)

  let total = 0;


 // ---------- Toggle Cart ---------------------
 const handleToggleCart = () => {
  setToggleCart(!toggleCart)
}
/* 
  // ---------- Delete from Cart ---------------------
   const removeFromCart = id => {
    setCartProducts(cartProducts?.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  }  */

 

  return (
<div>

  <div className='header-message'>FREE SHIPPING ON PURCHASES OVER 200kr
</div>
  <div className='logo'>
<img height={200} width ={400} src={logo} alt="Logo" />
</div>
 

<div className='navigation'>
 
 <Link to ="/">Home</Link>
 <Link to ="/About">About us</Link>
 <Link to ="/Products">Our products</Link> 
 <Link to ="/Tips">Tips</Link>

              <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/>




 {/* <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}  onClick={handleToggleCart} /> */}
 
    </div>
    </div>
  )
}

export default Header