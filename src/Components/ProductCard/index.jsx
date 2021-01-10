import React, { useState } from "react";

export const ProductCard = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const product = { name: props.title, price: props.cost };
    setCart([...cart, product]);
  };
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.cost}</h4>
      <img width="50%" src={props.img} alt={props.title} />
      <button onClick={addToCart}>Add to cart</button>
      <hr />
    </div>
  );
};
