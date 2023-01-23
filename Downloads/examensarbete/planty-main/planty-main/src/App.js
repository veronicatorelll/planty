import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Cart from "./Components/Cart"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Products from './Pages/Products';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import Payment from './Pages/Payment';
import OrderConf from './Pages/OrderConf';
import Tips from './Pages/Tips';
import News from './Components/News';
import NewsPage from './Pages/NewsPage';

function App() {

  // ----- Cart State ------

      const [product, setProduct] = useState([]);
      const [quantity, setQuantity] = useState("")
      const [cartProducts, setCartProducts] = useState([]);

      



  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost/planty-backend/Products.php');
        const data = await response.json();
        
        setCartProducts(data);
    } 
     catch(error) {
    }
}

useEffect( () => {
    fetchData();
}, []) 





   return (
    <div className="App">


<BrowserRouter>
<Header cartProducts={cartProducts} setCartProducts={setCartProducts}/>

<Routes>
<Route path="/Products" element={<Products cartProducts={cartProducts} setCartProducts={setCartProducts}/>} />
<Route path="/product/:prodId" element={<Product cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
<Route path="/Checkout" element={<Checkout cartProducts={cartProducts} setCartProducts={setCartProducts}/>} /> 
<Route path="/" element={<Home />} /> 
<Route path="/Contact" element={<Contact />} /> 
<Route path="/About" element={<About />} /> 
<Route path="/Cart" element={<Cart />} />  
<Route path="/Payment" element={<Payment />} />  
<Route path="/OrderConf" element={<OrderConf />} />  
<Route path="/Tips" element={<Tips />} />  
<Route path="/Header" element={<Header/>} />  
<Route path="NewsPage" element={<NewsPage />} /> 

</Routes>

<Footer/>

</BrowserRouter>

   
 </div>
 );
}

export default App;
