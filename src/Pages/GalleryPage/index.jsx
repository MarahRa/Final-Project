import React from "react";
import Collapsible from "../../Components/Collapsible";
import Slider from "../../Components/Slider/Slider";
import "./GalleryPage.css";
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

const imagesSliderOne = [
  { img: moon, title: "moon on the sky" },
  { img: hand, title: "hand" },
  { img: mountain, title: "mountain" },
  { img: sky, title: "sky" },
  { img: lake, title: "lake" },
];
const imagesSliderTwo = [
  { img: man, title: "man" },
  { img: asian, title: "asian" },
  { img: hijabi, title: "hijabi" },
  { img: blondeMan, title: "blondeMan" },
];
const imagesSliderThree = [
  { img: mansion, title: "mansion" },
  { img: blue, title: "blue" },
  { img: subway, title: "subway" },
  { img: livingRoom, title: "livingRoom" },
];

const GalleryPage = () => (
  <>
    <div className="container">
      <h1>MR GALLERY</h1>
      <Collapsible className="labelimg" label="Landscape">
        <Slider images={imagesSliderOne} />
      </Collapsible>
      <Collapsible className="labelimg" label="Portrait">
        <Slider images={imagesSliderTwo} />
      </Collapsible>
      <Collapsible className="labelimg" label="Indoors">
        <Slider images={imagesSliderThree} />
      </Collapsible>
    </div>
  </>
);

export default GalleryPage;
