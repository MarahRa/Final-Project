import React from "react";
import Collapsible from "react-collapsible";
import Slider from "../../Components/Slider/Slider";
import "./GalleryPage.css";

const GalleryPage = () => (
  <>
    <h1>MR GALLERY</h1>
    <div className="container">
      <Collapsible className="Collapsible__trigger" trigger="Landscape">
        <Slider />
      </Collapsible>
      <Collapsible className="Collapsible__trigger" trigger="Portrait" />
      <Collapsible className="Collapsible__trigger" trigger="Indoors" />
    </div>
  </>
);

export default GalleryPage;
