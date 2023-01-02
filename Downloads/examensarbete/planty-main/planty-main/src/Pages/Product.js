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
                console.log("Add to cart")
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
   
    <div>

            <div className="productpic">
            <img height={300} src={product.img_url} alt="" />
            </div>
            <h3>{product.title}</h3>
            <p>{product.price} :- </p>
            <p>{product.description}</p>


            <form onSubmit={(e) => addToCart(e, product.id)}>
            <label>
            <input type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
            </label>
            <button> Add to cart </button>
            </form>

    </div>
    
  )
}
export default Product