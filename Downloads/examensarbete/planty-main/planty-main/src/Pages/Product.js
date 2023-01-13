import React, {useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom";



function Product ({setCartProducts, cartProducts}) {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const [quantity, setQuantity] = useState("")
  
// ------ API ------

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost/planty-backend/product.php?id="+ params.prodId);
            const data = await response.json();

            setProduct(data);
        } catch(error) {
        }
    }

    useEffect( () => {
        fetchData();
    }, [])
    

// ------ Add to Cart ------
    const addToCart = (e, id) => {
        e.preventDefault();
        if (cartProducts.length > 0) {
            setCartProducts(cartProducts?.map((product)=> product.id == id
                ? {...product, cart: true, quantity: quantity}
                : product
                ))
                setQuantity("")
                console.log("Product.js: Added")

            } else {
                setCartProducts(product)
            }
        }      
        
       
// ------ Handle quantity input ------
 
    const handleQuantityInput = (e) => {
     setQuantity(e.target.value)
     
   }  
       

  return (       
   
    <div>

            <p className='product-title'>{product.title}</p>


            <div className='price-desc-container'>
            <p className='product-price'>{product.price} kr </p>
            <p className='product-description'> {product.description}</p>
            </div>
            <div className="product-img">
            <img height={550} src={product.img_url} alt="" />
            </div>

            <form className='add-cart-container' onSubmit={(e) => addToCart(e, product.id)}>
            <label>
            <input className='input-quantity' placeholder= 'amount . . .' type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
            </label>
            
            <button className='add-to-cart'> Add to cart </button>
            </form>

    </div>
    
  )
}
export default Product