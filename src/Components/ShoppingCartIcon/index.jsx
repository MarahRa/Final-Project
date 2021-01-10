import React from "react";
import "./ShoppingCartIcon.css";

const ShoppingCartIcon = ({ items }) => (
  <div className="shopping-cart-icon">
    <span role="img" aria-label="Shopping Cart">
      🛒
    </span>
    {items && <span className="shopping-cart-amount">{items}</span>}
  </div>
);

export default ShoppingCartIcon;
