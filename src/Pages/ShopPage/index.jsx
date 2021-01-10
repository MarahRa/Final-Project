import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import "./ShopPage.css";

const ShopPage = ({ addToCart }) => (
  <main className="shop-container">
    <h1> MR GALLERY</h1>
    <hr />
    <p className="store"> Shop your favorite print photos at our store </p>
    <ProductList addToCart={addToCart} />
  </main>
);

export default ShopPage;
