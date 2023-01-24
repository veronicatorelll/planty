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
    

         <div>
<p className="our-products">Plants</p>
          <div className="products-container">
          {products.map((product) => (

<div className="products-container">

 <div key={product.id} >
  <img height={400} width={350} src={product.img_url} alt="" />

   <Link to={`/product/${product.id}`}> <div className="product-titles">{product.title} </div> </Link>

 <div>{product.price} :-</div> 
 </div>



 </div>

))

             }   </div>



         </div>
  )
}

export default Products