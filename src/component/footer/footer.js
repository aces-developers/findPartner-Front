import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <>
      <footer>
        <h2>Find Partner</h2>
        <p>Your Partner to Success</p>
        <p>© 2020 Find Partner Inc. All rights reserved. Privacy Policy</p>
        <div>
          <FontAwesomeIcon className="fab" icon={faFacebook} />
          <FontAwesomeIcon className="fab" icon={faTwitter} />
          <FontAwesomeIcon className="fab" icon={faInstagram} />
          <FontAwesomeIcon className="fab" icon={faYoutube} />
        </div>
      </footer>
    </>
  );
}
