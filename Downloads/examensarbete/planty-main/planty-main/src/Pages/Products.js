import React, {useEffect, useState} from "react"
import Product from "./Product";

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);

// ---------- API --------------------- 
  const fetchData = async () => {
      try {
          const response = await fetch('http://localhost/planty-backend/Products.php');
          const data = await response.json();
          
          setProducts(data);
      } catch(error) {
          console.log(error);
      }
  }

  useEffect( () => {
      fetchData();
  }, [])

  return (
        
            products.map((product) => (
              <div key={product.id}>
              <Product 
               product={product}
               setCartProducts={setCartProducts} 
               cartProducts={cartProducts}/>
              </div>
            ))
        
  )

}

export default Products