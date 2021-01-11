import React from "react";
import "./ShoppingCart.css";
import Button from "@material-ui/core/Button";

const ShoppingCart = ({ cart, completePurchase, removeItemFroCart }) => {
  const totalQuantity = cart.reduce((acc, iter) => acc + iter.quantity, 0);
  const totalPrice =
    Math.round(
      cart.reduce((acc, iter) => acc + iter.price * iter.quantity, 0) * 100
    ) / 100;

  return (
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.name + index}>
              <th>{item.name}</th>
              <td>{item.size}</td>
              <td>{item.quantity}</td>
              <td>{Math.floor(item.quantity * item.price * 100) / 100}</td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  data-index={index}
                  onClick={removeItemFroCart}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <td>-</td>
            <td>-</td>
            <td>{totalQuantity}</td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <Button
        disabled={!cart.length}
        variant="contained"
        color="primary"
        onClick={completePurchase}
      >
        Complete Purchase
      </Button>
    </div>
  );
};

export default ShoppingCart;
