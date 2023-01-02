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
                <Link to={`/product/${product.id}`}>
                <h2>{product.title}</h2>
                </Link>
                <div>{product.description}</div>
                <div>{product.price} :- </div>
                <img height={300} src={product.img_url} alt="" />
                
              </div>
            ))


  )
}

export default Products