import React, {useEffect, useState} from "react"
import Product from "./Product";
import ProductsContainer from "../Components/ProductsContainer";

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);

// ---------- API --------------------- 
  const fetchData = async () => {
      try {
          const response = await fetch('planty-backend/Products.php');
          const data = await response.json();
          
          setProducts(data);
      } catch(error){
      }
  }

  useEffect( () => {
      fetchData();
  }, [])

  return (
    <ProductsContainer>
        {
            products.map((product) => (
              <div key={product.id}>
              <Product product={product}/>
              </div>
            ))
        }
    </ProductsContainer>
  )
}

export default Products