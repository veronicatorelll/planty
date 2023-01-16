import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import Product from "./Product";




function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);
  

// --------------- API --------------------- 
  const fetchData = async () => {
      try {
          const response = await fetch('http://localhost/planty-backend/Products.php');
          const data = await response.json();
          
          setProducts(data);
      } catch(error){
      }
  }

  useEffect( () => {
      fetchData();
  }, [])

  return (
    

            products.map((product) => (

               <div key={product.id} >

            
              <div className="img-products">
                <img height={500} width={400}src={product.img_url} alt="" />
                </div> 

                <Link className="link-products" to={`/product/${product.id}`}>
                <div className="product-titles">{product.title} </div> 
                </Link>
               <div className="product-prices">{product.price} :- </div>

              </div>
            ))


  )
}

export default Products