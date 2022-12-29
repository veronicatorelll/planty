import useState from 'react'
import { Link } from 'react-router-dom'

function Checkout({cartProducts, setCartProducts}) {

  var total = 0
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState("")


  // ------ Delete from Checkout ------
  const removeFromCart = id => {
    console.log(id)
    setCartProducts(cartProducts.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  };

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
      };

  return (
    <div>
        <h1>Checkout</h1>
    </div>
  )
}

export default Checkout