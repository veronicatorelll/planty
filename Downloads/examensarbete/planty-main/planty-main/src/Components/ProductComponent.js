import React, {useState} from "react"
import {Link} from "react-router-dom"

function ProductComponent({setCartProducts, cartProducts, product}) {

    const [quantity, setQuantity] = useState("")

    // ---------- Add to Cart ---------------------
    const addToCart = (e, id) => {
        e.preventDefault();
        console.log(id)
        console.log(quantity)
         setCartProducts(cartProducts.map((product) => product.id === id && quantity > 0
         ? {...product, cart: true, quantity: quantity}
         : product
       ))
       setQuantity("")
       }
    
      // ---------- Handle Quantity Input ---------------------
      const handleQuantityInput = (e) => {
        setQuantity(e.target.value)
        
      }

    return (
    <div key={product.id}>
        <Link className="link-toprod" to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        </Link>
        <p>Price: {product.price}:-</p>
        <div>
            <Link className="link-toprod" to={`/product/${product.id}`}>
            <img src={product.img_url} alt="" />
            </Link>
        </div>

        <form onSubmit={(e) => addToCart(e, product.id)}>
            <p>Amount</p>
            <input type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
            <button className="add-tocart" >Add To Cart</button>
        </form>
    </div>
  )
}

export default ProductComponent