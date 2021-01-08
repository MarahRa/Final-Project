import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setInterval(toTheRight, 3000);
    return () => clearInterval(timer);
  });

  const toTheRight = () => {
    setState((state + 1) % images.length);
  };

  const toTheLeft = () => {
    setState((state - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="arrow-left" onClick={toTheLeft}>
        {"<"}
      </button>
      <img
        className="photos"
        src={images[state].img}
        alt={images[state].title}
      />
      <button className="arrow-right" onClick={toTheRight}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
