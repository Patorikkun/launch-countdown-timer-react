import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faPinterestSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="social-container">
      <FontAwesomeIcon
        className="icon"
        icon={faFacebookSquare}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon"
        icon={faPinterestSquare}
      ></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
    </div>
  );
};

export default Socials;
