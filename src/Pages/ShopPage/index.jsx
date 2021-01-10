import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import "./ShopPage.css";

const ShopPage = () => (
  <>
    <h1> MR GALLERY</h1>
    <hr />
    <p className="store"> Shop your favorite print photos at our store </p>
    <ProductList />
  </>
);

export default ShopPage;
