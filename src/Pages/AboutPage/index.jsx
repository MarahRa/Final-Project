import React from "react";
import "./AboutPage.css";
import Portrait from "../../art.png";
import Outdoors from "../../forest.png";
import Indoors from "../../property.png";
import John from "../../John.jpg";
import Kate from "../../Kate.jpg";
import Sarah from "../../Sarah.jpg";
import Sam from "../../Sam.jpg";

const AboutPage = () => (
  <>
    <h1> MR GALLERY</h1>
    <h2 className="h2">Our Services</h2>
    <hr />
    <div className="background-block">
      <span className="text-services">
        <img className="services" src={Portrait} alt="portrait" />
        <pre>Portrait Photography</pre>
      </span>
      <span className="text-services">
        <img className="services" src={Outdoors} alt="outdoors" />
        <pre>Outdoors Photography</pre>
      </span>
      <span className="text-services">
        <img className="services" src={Indoors} alt="indoors" />
        <pre>Indoors Photography </pre>
      </span>
      <h2 className="h2">Our team</h2>
      <hr />
      <span className="text-team">
        Kate, Sam, Sarah, and John are all professional photographers with an
        eye for a good photo. Check the gallery to see their best work
      </span>
      <div className="img-container">
        <img className="team-member" src={Sarah} alt="black-woman" />
        <img className="team-member" src={John} alt="white-man" />
        <img className="team-member" src={Sam} alt="Pakistani-man" />
        <img className="team-member" src={Kate} alt="white-woman" />
      </div>
    </div>
  </>
);

export default AboutPage;
