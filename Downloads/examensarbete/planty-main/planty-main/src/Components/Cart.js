import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Checkout from '../Pages/Checkout';
import { CartButton } from '../Styles/cartStyle';



function Cart ({cartProducts, setCartProducts, toggleCart, setToggleCart}) {
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
  const handleToggleCart = () => {
    setToggleCart(!toggleCart)
  }

  return (
    <div>
      <div className='cart-container'>

<div className='one'>
      <p className='cart-title'>Shopping cart</p>


      <hr className='cart-hr'></hr>
      </div>

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
                          <button className='remove-cart' onClick={() => removeFromCart(product.id)}> x </button>  
                          <p className='cart-prodname'>{product.title}</p>                       
                          <p className='cart-amount'>Amount: {product.quantity}</p>      
<hr className='lower-cart-hr'></hr>
<div className='cart-total'>
        {
          total < 1
          ? "Ops! No items."
          : `Total ${total} kr` 
        }

<div className='free'> 
<p>Free shipping on orders above 300 kr. </p>
<p>Free home delivery on orders above 500 kr.</p>
 </div>

        <Link className='link-checkout' to="/Checkout">
     Go to Checkout
   </Link>



        </div>
                 </div>
              ) } 
              else { return null }
        })
      }
      
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