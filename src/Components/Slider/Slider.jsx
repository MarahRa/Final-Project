import React from "react";
import { useState } from "react";
import "./Slider.css"
import moon from "../../landscape1.jpg"
import hand from "../../landscape2.jpg"
import mountain from "../../landscape3.jpg"
import sky from "../../landscape4.jpg"
import lake from "../../landscape5.jpg"



const Slider = () => {
const[state, setState] = useState(0)
let images = [moon, hand, mountain, sky, lake]

const toTheRight = () => {
  setState((state + 1) % images.length);
}

const toTheLeft = () => {
  setState((state - 1) % images.length);
}

return (
  <div className="container">
    <button onClick={toTheLeft}>{"<"}</button>
    <img src={images[state]} alt={state}/>
<button onClick={toTheRight}>{">"}</button>
  </div>
)
};


export default Slider;
