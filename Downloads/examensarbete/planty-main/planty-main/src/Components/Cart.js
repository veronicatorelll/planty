import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Checkout from '../Pages/Checkout';
import { CartButton } from '../Styles/cartStyle';

function Cart ({cartProducts, setCartProducts, toggleCart, setToggleCart}) {


  
  const cartItems = localStorage.getItem('cartProducts')
  ? JSON.parse(localStorage.getItem('cartProducts'))
  : [];

const initialState = {
  cartReducer: {
    cartProducts: cartProducts,
  },
};


  let total = 0



  // ---------- Delete from Cart ---------------------
   const removeFromCart = id => {
    setCartProducts(cartProducts?.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  } 

  // ---------- Delete All ---------------------
    const deleteAll = () => {
      setCartProducts(cartProducts?.map((product) => product.cart === true
      ? {...product, cart: false}
      : product
    ))
   }

   // ---------- Toggle Cart ---------------------
  const handleToggleCart = (e) => {
    e.preventDefault();
    setToggleCart(!toggleCart)
    console.log("checkout")
  }

  return (
    <div className="cart-container">

      {             
      cartProducts?.map(product => {
      if(product.cart === true) 
      { 
        total += product.price * product.quantity

                         return ( 
                         <div key={product.id}>                    
                          <h3>{product.title}</h3>                       
                          <p>{product.price} :- </p>                       
                          <p>{product.quantity}</p>                     
                          <div>                      
                          <img height={90} src={product.img_url} alt="" />
                    </div>                                           
                      <button className='remove-cart' onClick={() => removeFromCart(product.id)}>
                        Remove From Cart
                        </button> 

                 </div>
              ) } 
              else {return null}
        })
      }

     
        {
          total < 1
          ? "CART: 0 items in cart"
          : `CART Total: ${total} ` 
        }


{
        <Link to="/Checkout"
              onClick={() => {window.location.href="/Checkout"}}>
              Checkoutis 1
         </Link>}
          


              
        <Link to="/"
             onClick={()  => handleToggleCart}>              
             Go to checkout 2
        </Link>





{/* 


        <Checkout 
        cartProducts={cartProducts} 
        setCartProducts={setCartProducts} 
        toggleCart={toggleCart} 
        setToggleCart={setToggleCart}
        /> */}


      </div>
  )
}
export default Cart