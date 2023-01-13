import {useState} from 'react'

function Checkout ({cartProducts, setCartProducts}) {
  let total = 0
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState("")



// ------ Delete from Checkout ------
const removeFromCart = id => {
  console.log(id)
  setCartProducts(cartProducts.map((product) => product.id === id
  ? {...product, cart: false}
  : product
))
}

// ------ Add to Checkout ------
const addToCart = (e, id) => {
  e.preventDefault();
  if (cartProducts.length > 0) {
      setCartProducts(cartProducts.map((product)=> product.id === id
          ? {...product, cart: true, quantity: quantity}
          : product
          ))
          setQuantity("")

      } else {
          setCartProducts(product)
      }
  }


// ------ Handle quantity input ------
  const handleQuantityInput = (e) => {
    setQuantity(e.target.value)
    
  } 



  
    return (
      <div className="checkout">

        <p className='checkout-title'>Checkout</p>
          {
              cartProducts.map(product => {
    
                if(product.cart === true) {
                  total += product.price  * product.quantity
                   return (
                    <div key={product.id}>



                    <p className='order-summary'>Order Summary</p>
                       <hr></hr>
                     <div className="cartpicture">
                      <img height={200}src={product.img_url} alt="" />
                    </div>

                    <div className='checkout-prodinfo'>
                    <p className='checkout-prodtitle'>{product.title}</p>    
                    <p>Amount: {product.quantity}</p>  
                    <p>{product.quantity.total}</p> 
                    </div>

                    <button className='checkout-remove' onClick={() => removeFromCart(product.id )}>x</button>
                    <form onSubmit={(e) => addToCart(e, product.id)}>


                      {/* Update Quantity */}
                      <label className='quantity-label'>
                        <input className='quantity-label' type="number" min="1" placeholder='wanted amount...' name="quantity" 
                        onChange={handleQuantityInput} value={quantity.id}/>
                         </label>
                         <button className='quantity-button'>Update quantity</button>
                         </form>
                         
                </div>
                 
              ) } 
              else {
                 return null }
              
        })
      }
 <hr></hr>
               
               
                {/* Total */}

        <div className='total'>
        {
          total <1
          ?  "You have 0 products."
          : `Total: ${total} kr` 
        }
       </div>

    </div>
  )
}

export default Checkout