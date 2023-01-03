import React, {useState} from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import Booking from "../Pages/Booking"
import Cart from './Cart';
import Checkout from '../Pages/Checkout';
import Product from '../Pages/Product';
import ProductComponent from './ProductComponent';
import {DropdownCart, Dropdown} from "../Styles/headerStyle"
import {FaShoppingCart} from "react-icons/fa"


function Header({cartProducts, setCartProducts}) {
  const [toggleCart, setToggleCart] = useState(false)

  // ---------- Toggle Cart ---------------------
  const handleToggleCart = () => {
    setToggleCart(!toggleCart)
  }

  return (
<div className='header'>
 
<h3 className='page-under-title'> HEADER </h3>
<div className='navigation'>

 <BrowserRouter>
 <Link to ="/Home">Home</Link> 
 <Link to ="/About">About us</Link>
 <Link to ="/Products">Our products</Link> 
 {/* <Link to ="/Cart"> <FaShoppingCart/></Link>  */}
 <FaShoppingCart className="FaShoppingCart" onClick={handleToggleCart}/>
    <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/>
    <Checkout cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/>

    <Link path="/Checkout" element={<Checkout cartProducts={cartProducts}setCartProducts={setCartProducts}/>} /> 
 </BrowserRouter>
    </div>
    </div>
  )
}

export default Header