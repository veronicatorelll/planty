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

  let total = 0;


 // ---------- Toggle Cart ---------------------
 const handleToggleCart = () => {
  setToggleCart(!toggleCart)
  console.log("checkout")
}

  // ---------- Delete from Cart ---------------------
   const removeFromCart = id => {
    setCartProducts(cartProducts?.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  } 

 

  return (
<div>
  <div className='logo'>
<img height={200} width ={400} src={logo} alt="Logo" />
</div>
 

<div className='navigation'>
 <BrowserRouter>
 <Link to ="/"onClick={() => {window.location.href="/"}}>Home</Link>
 <Link to ="/About"onClick={() => {window.location.href="/About"}}>About us</Link>
 <Link to ="/Products"onClick={() => {window.location.href="/Products"}}>Our products</Link> 
 <Link to ="/Tips" onClick={() => {window.location.href="/Tips"}}>Tips</Link> 
 <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/>
        {/* <Checkout cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/> */}

 {/* <FaShoppingCart className="FaShoppingCart" onClick={handleToggleCart}/> */}
   
 </BrowserRouter>




 

 {             
      cartProducts?.map(product => {
      if(product.cart === true) 
      { 
        total += product.price * product.quantity

                         return ( 
                         <div key={product.id}>           
                    
                 </div>
              ) } 
        })
      }



        <br></br>



    </div>

    </div>
  )
}

export default Header