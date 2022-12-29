import React, {useEffect, useState} from "react"
import Product from "./Product";
import ProductsContainer from "../Components/ProductsContainer";

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);

// ---------- API --------------------- 
  const fetchData = async () => {
      try {
          const response = await fetch('https://codexplained.se/shoes.php');
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
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>{product.price}</div>
                <div>{product.url}</div>


              <Product product={product}/>
              </div>
            ))
  )
}

export default Products