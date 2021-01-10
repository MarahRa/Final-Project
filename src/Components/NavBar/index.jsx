import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "../ShoppingCartIcon";
import "./NavBar.css";

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="./">Home</NavLink>
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
    <ShoppingCartIcon items={2} />
  </header>
);

export default NavBar;
