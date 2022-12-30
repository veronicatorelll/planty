import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Products from './Products';



function Product ({setCartProducts, cartProducts}) {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const [quantity, setQuantity] = useState("")

// ------ API ------

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost/planty-backend/Products.php?id="+ params.testid);
            const data = await response.json();

            setProduct(data);
        } catch(error) {
        }
    }

    useEffect( () => {
        fetchData();
    }, [])
    

// ------ Add to Cart ------
   /*   const addToCart = (e, id) => {
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
        }      */  
        
       
// ------ Handle quantity input ------
 /* 
    const handleQuantityInput = (e) => {
     setQuantity(e.target.value)
     
   }  */
       

  return (
        <div>

            <div className='product-wrap'>
            <div className="productpic">
            <img src={product.img_url} alt=""/>
            </div>
            
      {/*     <form onSubmit={(e) => addToCart(e, product.id)}>
                <label className='label-addcart'>
                 <input type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
                </label>
                 <button className='addtocart'>Add to cart</button>
                  </form>  */}
            </div>
  
        </div>
    )
}
export default Product