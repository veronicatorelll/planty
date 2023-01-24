import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Product({ setCartProducts, cartProducts }) {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [quantity, setQuantity] = useState(0);

  // ------ API ------

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost/planty-backend/product.php?id=" + params.prodId
      );
      const data = await response.json();

      setProduct(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ------ Add to Cart ------
  const addToCart = (e, id) => {
    e.preventDefault();
    if (cartProducts.length > 0) {
      setCartProducts(
        cartProducts?.map((product) =>
          product.id == id && quantity > 0
            ? { ...product, cart: true, quantity: quantity }
            : product
        )
      );
      setQuantity(0);
    } else {
      setCartProducts(product);
      // localStorage.setItem('cartProducts', JSON.stringify(product))
    }
  };

  // ------ Handle quantity input ------

  const handleQuantityInput = (e) => {
    setQuantity(e.target.value);
  };

  // Increase Quantity
  const addItems = () => setQuantity((quantity) => quantity + 1);

  // Decrease Quantity
  const decreaseItems = () => {
    if (quantity > 0) setQuantity((quantity) => quantity - 1);
  };

  return (
    <div>
      <p className="product-title">{product.title}</p>

      <div className="product-info">
        <p className="product-price">{product.price} kr </p>

        <hr className="product-hr"></hr>
        <p className="stock">
          Denna produkt finns i lager och kan skickas omgående
        </p>
        <hr className="product-hr"></hr>

        <p className="product-description"> {product.description}</p>
      </div>

      <div className="product-img">
        <img src={product.img_url} alt="" />
      </div>

      <form
        className="add-cart-container-product"
        onSubmit={(e) => addToCart(e, product.id)}
      >
        <label>
          <span className="minus-product" onClick={decreaseItems}>
            -
          </span>
          <input
            className="input-quantity-product"
            type="text"
            name="quantity"
            onChange={handleQuantityInput}
            value={quantity}
          />
          <span className="plus-product" onClick={addItems}>
            +
          </span>
        </label>

        <button className="add-to-cart"> Add to cart </button>
      </form>
    </div>
  );
}
export default Product;
