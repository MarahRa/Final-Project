import React from "react";
import "./ProductList.css";
import moon from "../../images/landscape1.jpg";
import hand from "../../images/landscape2.jpg";
import mountain from "../../images/landscape3.jpg";
import sky from "../../images/landscape4.jpg";
import lake from "../../images/landscape5.jpg";
import man from "../../images/image-2.jpg";
import asian from "../../images/asian.jpg";
import hijabi from "../../images/hijabi.jpg";
import blondeMan from "../../images/man2.jpg";
import mansion from "../../images/mansion.jpg";
import blue from "../../images/blue.jpg";
import subway from "../../images/subway.jpg";
import livingRoom from "../../images/livingroom.jpg";
import { ProductCard } from "../ProductCard";

const images = [
  { img: moon, title: "Moon in the sky", cost: 99.99 },
  { img: hand, title: "Hand to the moon", cost: 200 },
  { img: mountain, title: "Mountains", cost: 99.99 },
  { img: sky, title: "Sky", cost: 150 },
  { img: lake, title: "Lake", cost: 200 },
  { img: man, title: "Portrait 1", cost: 99.99 },
  { img: asian, title: "Portrait 2", cost: 300 },
  { img: hijabi, title: "Portrait 3", cost: 150 },
  { img: blondeMan, title: "Portrait 4", cost: 99.99 },
  { img: mansion, title: "Mansion", cost: 150 },
  { img: blue, title: "Blue", cost: 200 },
  { img: subway, title: "Subway", cost: 300 },
  { img: livingRoom, title: "Living Room", cost: 150 },
];

const ProductList = ({ addToCart }) =>
  images.map((image, index) => (
    <ProductCard
      addToCart={addToCart}
      img={image.img}
      name={image.title}
      price={image.cost}
      key={index}
    />
  ));

export default ProductList;
