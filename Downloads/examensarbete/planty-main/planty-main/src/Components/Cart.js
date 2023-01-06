import { Link } from 'react-router-dom'
import { useState } from 'react';
import Header from './Header'
import Checkout from '../Pages/Checkout';

function Cart ({cartProducts, setCartProducts, toggleCart, setToggleCart}) {
  var total = 0



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
                          <p className='quantity'>{product.quantity}</p>                     
                          <div>                      
                          <img height={90} src={product.img_url} alt="" />
                    </div>                                           
                      <button className='remove-cart' onClick={() => removeFromCart(product.id)}>Remove From Cart</button> 

                 </div>
              ) } 
        })
      }

     
        {
          total < 1
          ? "0 items in cart"
          : `Total: ${total} :-` 
        }




          

        <br></br>
                  <Link  to ="/Checkout">Checkout</Link>



      {/* <Checkout cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/> */}


     {/*  <Link className='link-checkout' to="/Checkout">
          <button onClick={handleToggleCart}>
            Go to Checkout
          </button>
        </Link> */}
        
        
        
      

      </div>
  )
}
export default Cart