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

function App() {

  const [cartProducts, setCartProducts] = useState([]);

  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost/planty-backend/Products.php');
        const data = await response.json();
        
        setCartProducts(data);
    } catch(error) {
        console.log(error);
    }
}

useEffect( () => {
    fetchData();
}, []) 



   return (
    <div className="App">
   <Header/>

  <BrowserRouter>
  <Routes>

  <Route path="/Contact" element={<Contact />} /> 
  <Route path="/About" element={<About />} /> 
  <Route path="/Booking" element={<Booking />} /> 
  <Route path="/Cart" element={<Cart />} /> 
  <Route path="/Products" element={<Products />} /> 
  <Route path="/Product" element={<Product />} /> 


  </Routes>
  </BrowserRouter>
   <Footer/>
</div>
  );
}

export default App;
