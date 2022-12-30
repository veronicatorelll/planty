import React, {useEffect, useState} from "react"
import Product from "./Product";
import ProductsContainer from "../Components/ProductsContainer";

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);

// ---------- API --------------------- 
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
                <a href="/Product=id?">
                <div>{product.title}</div>
                </a>
                <div>{product.description}</div>
                <div>{product.price} :- </div>
                <img height={300} src={product.img_url} alt="" />
              <Product product={product}/>
              </div>
            ))
  )
}

export default Products