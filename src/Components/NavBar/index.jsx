import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "../ShoppingCartIcon";
import "./NavBar.css";

const NavBar = ({ cart = [], openCart }) => {
  const items = cart.reduce((acc, iter) => acc + iter.quantity, 0);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="./">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./About">About</NavLink>
          </li>
          <li>
            <NavLink to="./Gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="./Shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="./Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <span onClick={items ? openCart : () => null}>
        <ShoppingCartIcon items={items} />
      </span>
    </header>
  );
};

export default NavBar;
