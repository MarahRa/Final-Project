import React from "react";
import Form from "../../Components/Form";
import "./ContactPage.css";

const ContactPage = () => (
  <>
    <h1>MR GALLERY</h1>
    <div>
      <Form />
    </div>
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="map"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=harrow%20on%20the%20hill&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  </>
);

export default ContactPage;
