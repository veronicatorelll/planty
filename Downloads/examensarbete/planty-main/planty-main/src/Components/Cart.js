import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Checkout from '../Pages/Checkout';
import { CartButton } from '../Styles/cartStyle';

function Cart ({cartProducts, setCartProducts, toggleCart, setToggleCart}) {


  
 /*  const cartItems = localStorage.getItem('cartProducts')
  ? JSON.parse(localStorage.getItem('cartProducts'))
  : [];

const initialState = {
  cartReducer: {
    cartProducts: cartProducts,
  },
}; */


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
    <div>
      <div className='cart-container'>

      <p className='cart-title'>Cart</p>
      <hr></hr>

      {             
      cartProducts?.map(product => {
      if(product.cart === true) 
      { 
        total += product.price * product.quantity

                         return ( 
                         <div key={product.id}>       
                          <div className='cart-img'>                      
                          <img height={200} src={product.img_url} alt="" />
                          </div>                   
                          <p className='cart-prodname'>{product.title}</p>                       
                          <p className='cart-amount'>Amount: {product.quantity}</p>      
                    {/*   <button className='remove-cart' onClick={() => removeFromCart(product.id)}>
                        Remove From Cart
                        </button>  */}

                 </div>
              ) } 
              else {return null}
        })
      }
      </div>

     <div className='cart-total'>
        {
          total < 1
          ? "Ops! No items."
          : `Total ${total} kr` 
        }

<div className='free'> 
<p>Free shipping on orders above 300 kr. </p>
<p>Free home delivery on orders above 500 kr.</p>

<div className='checkout-links'>
        <Link className='checkout-one' to="/Checkout"
              onClick={() => {window.location.href="/Checkout"}}>
              Checkout 
         </Link>
          


       {/*        
        <Link className='checkout-two' to="/Checkout"
             onClick={(e)  => handleToggleCart}>              
             Checkout two
        </Link> */}
        </div>-
        </div>



        </div>





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