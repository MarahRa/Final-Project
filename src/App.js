import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, AboutPage, GalleryPage, ContactPage } from "./Pages";
import Footer from "./Components/Footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faFacebook, faTwitter, faInstagram);

function App() {
  return (
    <>
      <body>
        <Switch>
          <Route path="/Home" exact component={HomePage} />
          <Route path="/About" exact component={AboutPage} />
          <Route path="/Gallery" exact component={GalleryPage} />
          <Route path="/Contact" exact component={ContactPage} />
        </Switch>
        <Footer />
      </body>
    </>
  );
}

export default App;
