import {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/trash.png"





function Checkout ({cartProducts, setCartProducts}) {
  
  let total = 0
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0)



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
          setQuantity(0)

      } else {
          setCartProducts(product)
      }
  }


// ------ Handle quantity input ------
  const handleQuantityInput = (e) => {
    setQuantity(e.target.value)
    
  } 

   
  // Increase Quantity
  const addItems = () => setQuantity(quantity => quantity + 1);

  // Decrease Quantity
  const decreaseItems = () => {
    if(quantity > 0) setQuantity(quantity => quantity - 1);
  };


  
    return (
      <div className="checkout">


        <p className='checkout-title'>Checkout</p>
        <p className='order-summary'>Order Summary</p>
        <div className='continue-container'>
                    <Link className='continue' to="/Products">
                          Continue shopping
                         </Link>
                         </div>
          {
              cartProducts?.map(product =>
                 {
                if(product.cart === true) {
                  total += product.price  * product.quantity
                   return (
                    <div key={product.id}>



                   
                       <hr className='checkout-hr'></hr>

                       
                     <div className="checkout-img">
                      <img height={300} width={250} src={product.img_url} alt="" />
                    </div>
                    <button className='checkout-remove' onClick={() => removeFromCart(product.id)}>
                    <img height={30} width={30} src={logo} alt="Logo" />
                    </button>

                    <div className='checkout-prodinfo'>
                    <p className='checkout-prodtitle'>{product.title}</p>   
                    <p>Price: {product.price} :-</p>  
                    <p>Amount: {product.quantity}</p>  
                    <p>{product.quantity.total}</p> 
                    </div>

                         
      <form onSubmit={(e) => addToCart(e, product.id)}>
            <label className='quantity-container-checkout'>
            <span className="decr" onClick={decreaseItems}>-</span>
            <input className='input-quantity-checkout' type="text" name="quantity" onChange={handleQuantityInput} value={quantity}/>
            <span className="add" onClick={addItems}>+</span>

            </label>
            
            <button className='checkout-quantity'> Update </button>
            </form>

                         
                </div>
                 
              ) } 
              else {
                 return null }
              
        })
      }
 <hr className='checkout-hr'></hr>
               
               
                {/* Total */}

        <div className='total'>
        {
          total <1
          ?  "Sorry, no products here."
          : `Total: ${total} kr` 
        }
        
       </div>
       <hr className='checkout-hr'></hr>


       <div className='payment-container'>
   <a className='payment' href='http://127.0.0.1:5500/planty-main/planty-main/Klarna%20Payment/payment.html'> 
   To payment </a>
   </div>

   <div className='to-orderconf'>
    <Link to="/OrderConf">
      To Order Confirmation
    </Link>
   </div>


    </div>
    
  )
}

export default Checkout