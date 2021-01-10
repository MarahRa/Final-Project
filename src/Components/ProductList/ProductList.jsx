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
  { img: moon, title: "moon in the sky", cost: 99.99 },
  { img: hand, title: "hand", cost: 200 },
  { img: mountain, title: "mountain", cost: 99.99 },
  { img: sky, title: "sky", cost: 150 },
  { img: lake, title: "lake", cost: 200 },
  { img: man, title: "Portrait 1", cost: 99.99 },
  { img: asian, title: "Portrait 2", cost: 300 },
  { img: hijabi, title: "Portrait 3", cost: 150 },
  { img: blondeMan, title: "Portrait 4", cost: 99.99 },
  { img: mansion, title: "mansion", cost: 150 },
  { img: blue, title: "blue", cost: 200 },
  { img: subway, title: "subway", cost: 300 },
  { img: livingRoom, title: "living Room", cost: 150 },
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
