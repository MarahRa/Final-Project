import React from "react";
import "./HomePage.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => (
  <main className="home-container">
    <h1> MR GALLERY </h1>
    <div className="box">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      <div>
        <div className="description">
          If you want to get to know us more, please visit our
          <Link to="./About">
            <strong> About </strong>
          </Link>
          page
        </div>
        <div className="description">
          If you want to see our gallery, please visit our
          <Link to="./Gallery">
            <strong> Gallery </strong>
          </Link>
          page
        </div>
        <div className="description">
          If you want us to take your photos, please
          <Link to="./Contact">
            <strong> Contact </strong>
          </Link>
          us
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
