import React, {useState} from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import Booking from "../Pages/Booking"
import Cart from './Cart';
import Checkout from '../Pages/Checkout';
import Product from '../Pages/Product';
import ProductComponent from './ProductComponent';
import {DropdownCart, Dropdown} from "../Styles/headerStyle"
import {FaShoppingCart} from "react-icons/fa"
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/thelogo.png"




function Header({cartProducts, setCartProducts}) {
  const [toggleCart, setToggleCart] = useState(false)

  // ---------- Toggle Cart ---------------------
  const handleToggleCart = () => {
    setToggleCart(!toggleCart)
  }

  return (
<div>
  <div className='logo'>
<img height={200} width ={400} src={logo} alt="Logo" />
</div>

<div className='navigation'>
 <BrowserRouter>
 <Link to ="/Home">Home</Link>
 <Link to ="/About">About us</Link>
 <Link to ="/Products">Our products</Link> 
 <Link className='cart-icon' to ="/Cart"> <FaShoppingCart/> <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/>
</Link> 
 {/* <FaShoppingCart className="FaShoppingCart" onClick={handleToggleCart}/> */}
   
 </BrowserRouter>
    </div>
    </div>
  )
}

export default Header