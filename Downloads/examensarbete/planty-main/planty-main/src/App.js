import React, {useState, useEffect} from 'react';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Cart from "./Components/Cart"
import Time from "./Components/Time"
import Times from "./Components/Times"
import Booking from "./Pages/Booking"
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

function App() {

  // ----- Cart State ------

  const [cartProducts, setCartProducts] = useState([]);

  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost/planty-backend/Products.php');
        const data = await response.json();
        // console.log(data)
        
        setCartProducts(data);
    } catch(error) {
    }
}

useEffect( () => {
    fetchData();
}, []) 



   return (
    <div className="App">
   <Header cartProducts={cartProducts} setCartProducts={setCartProducts}/>
  

  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/Contact" element={<Contact />} /> 
  <Route path="/About" element={<About />} /> 
  <Route path="/Booking" element={<Booking />} /> 
  <Route path="/Cart" element={<Cart />} />  
  <Route path="/Payment" element={<Payment />} />  
  <Route path="/OrderConf" element={<OrderConf />} />  
  <Route path="/Tips" element={<Tips />} />  



  {/* <Route path="/Payment" element={<Payment />} />   */}
  <Route path="/Products" element={<Products cartProducts={cartProducts} setCartProducts={setCartProducts} />} /> 
  <Route path="/Product/:prodId" element ={<Product cartProducts={cartProducts} setCartProducts={setCartProducts}/>} /> 
  <Route path="/Checkout" element={<Checkout cartProducts={cartProducts} setCartProducts={setCartProducts} />} /> 
  </Routes>
  </BrowserRouter>

   <Footer/>
</div>
  );
}

export default App;
