import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "../Pages/Checkout";
import { FaShoppingCart } from "react-icons/fa";
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/logo21.png";
import cartlogo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/cart-logo.jpg";

function Header({ cartProducts, setCartProducts }) {
  const [toggleCart, setToggleCart] = useState(false);

  let total = 0;

  // ---------- Toggle Cart ---------------------
  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <div className="header-wrapper">
      <div className="header-message">
        FREE SHIPPING ON PURCHASES OVER 200kr
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="dropdown">
        <button className="button2">
          <img height={50} width={60} src={cartlogo} alt="Logo" />
        </button>

        <div className="dropdown-content">
          <Cart
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            toggleCart={toggleCart}
            setToggleCart={setToggleCart}
          />
        </div>
      </div>

      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>

          <span></span>

          <span></span>

          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="Products">
              <li>Products</li>
            </a>
            <a href="About">
              <li>About</li>
            </a>
            <a href="Tips">
              <li>Tips</li>
            </a>
            <a href="Contact">
              <li>Contact</li>
            </a>
            <a href="NewsPage">
              <li>News</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
