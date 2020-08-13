import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="./Home">Home</NavLink>
      </li>
      <li>
        <NavLink to="./About">About</NavLink>
      </li>
      <li>
        <NavLink to="./Gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="./Contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
