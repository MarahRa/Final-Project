import React from "react";
import "./AboutPage.css";
import Portrait from "../../images/art.png";
import Outdoors from "../../images/forest.png";
import Indoors from "../../images/property.png";
import John from "../../images/John.jpg";
import Kate from "../../images/Kate.jpg";
import Sarah from "../../images/Sarah.jpg";
import Sam from "../../images/Sam.jpg";

const AboutPage = () => (
  <>
    <h1> MR GALLERY</h1>
    <h2 className="h2">Our Services</h2>
    <hr />
    <div className="background-block">
      <figure className="text-services">
        <img className="services" src={Portrait} alt="portrait" />
        <figcaption>Portrait Photography</figcaption>
      </figure>
      <figure className="text-services">
        <img className="services" src={Outdoors} alt="outdoors" />
        <figcaption>Outdoors Photography</figcaption>
      </figure>
      <figure className="text-services">
        <img className="services" src={Indoors} alt="indoors" />
        <figcaption>Indoors Photography </figcaption>
      </figure>
      <h2 className="h2">Our team</h2>
      <hr />
      <div className="team-container">
        <p className="text-team">
          Kate, Sam, Sarah, and John are all professional photographers with an
          eye for a good photo. Check the gallery to see their best work
        </p>
        <div className="img-container">
          <img className="team-member" src={Sarah} alt="black-woman" />
          <img className="team-member" src={John} alt="white-man" />
          <img className="team-member" src={Sam} alt="Pakistani-man" />
          <img className="team-member" src={Kate} alt="white-woman" />
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
