import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <>
    <footer>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="icon"
          icon={["fab", "facebook-square"]}
          color="#fcf3ec"
        />
      </a>
      <a
        href="https://twitter.com/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="icon"
          icon={["fab", "twitter-square"]}
          color="#fcf3ec"
        />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="icon"
          icon={["fab", "instagram-square"]}
          color="#fcf3ec"
        />
      </a>
      <p className="copyrights">&copy; Copyrights MR Gallery 2020</p>
    </footer>
  </>
);

export default Footer;
