import React from "react";

const ShoppingCart = ({ cart, removeItemFroCart }) => {
  const totalQuantity = cart.reduce((acc, iter) => acc + iter.quantity, 0);
  const totalPrice =
    Math.round(
      cart.reduce((acc, iter) => acc + iter.price * iter.quantity, 0) * 100
    ) / 100;

  return (
    <div>
      {cart.map((item, index) => (
        <div key={item.name + index}>
          {item.name}: {item.quantity}{" "}
          <button data-index={index} onClick={removeItemFroCart}>
            X
          </button>
        </div>
      ))}
      <p> Basket :{totalQuantity} </p>
      <p> Total Price : {totalPrice} </p>
    </div>
  );
};

export default ShoppingCart;
