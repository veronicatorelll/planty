import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Checkout from "../Pages/Checkout";
import { FaShoppingCart } from "react-icons/fa";
import logo from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/trash.png";

function Cart({ cartProducts, setCartProducts, toggleCart, setToggleCart }) {
  let total = 0;

  // ---------- Delete from Cart ---------------------
  const removeFromCart = (id) => {
    setCartProducts(
      cartProducts?.map((product) =>
        product.id === id ? { ...product, cart: false } : product
      )
    );
  };

  // ---------- Delete All ---------------------
  const deleteAll = () => {
    setCartProducts(
      cartProducts?.map((product) =>
        product.cart === true ? { ...product, cart: false } : product
      )
    );
  };

  // ---------- Toggle Cart ---------------------
  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <div>
      <div className="cart-container">
        <div className="cart-title-container">
          <p className="cart-title">Shopping cart</p>

          <hr className="cart-hr"></hr>
        </div>

        {cartProducts?.map((product) => {
          if (product.cart === true) {
            total += product.price * product.quantity;

            return (
              <div key={product.id}>
                <div className="cart-img">
                  <img height={200} width={200} src={product.img_url} alt="" />
                </div>
                <p className="cart-prodname">{product.title}</p>
                <p className="cart-amount">Amount: {product.quantity}</p>
                <button
                  className="remove-cart"
                  onClick={() => removeFromCart(product.id)}
                >
                  <img height={30} width={30} src={logo} alt="Logo" />
                </button>
                <hr className="lower-cart-hr"></hr>
                <div className="cart-total"></div>
              </div>
            );
          } else {
            return null;
          }
        })}

        <div className="no-items">
          {total < 1 ? "Ops! No items." : `Total ${total} kr`}
        </div>

        <div className="link-checkout-container">
          <Link className="link-checkout" to="/Checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Cart;
