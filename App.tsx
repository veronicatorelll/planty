import React from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom';
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Booking from "./Components/Booking";
import Time from "./Components/Time";
import Times from "./Components/Times";
import Cart from "./Components/Cart"

function App() {

   return (
    <div className="App">

      <Header />

        <Routes>
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Booking" element={<Booking />} /> 
          <Route path="/Services" element={<Services />} /> 
          <Route path="/Cart" element={<Cart />} /> 


        </Routes> 

     <Footer />
    </div>
  );
}

export default App;
