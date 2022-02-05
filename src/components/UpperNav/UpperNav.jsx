import React from "react";
import "./UpperNav.css";
import {
  FaWhatsapp,
  FaTwitter,
  FaPhoneVolume,
  FaInstagram,
  FaEnvelope,
  FaGooglePlus,
  FaFacebookF,
} from "react-icons/fa";

function UpperNav() {
  return (
    <nav className="navbar upper-nav">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="left">
          <span className="upper-nav__span">
            <FaPhoneVolume className="span" />
            +201027247203
          </span>
          <span className="upper-nav__span">
            <FaEnvelope className="span" /> mail@example.com
          </span>
        </div>
        <div className="right">
          {/* <span style={{ textTransform: "capitalize" }}>visit us on</span> */}
          <span className="upper-nav__span fb">
            <FaFacebookF />
          </span>
          <span className="upper-nav__span tw">
            <FaTwitter />
          </span>
          <span className="upper-nav__span wh">
            <FaWhatsapp />
          </span>
          <span className="upper-nav__span insta">
            <FaInstagram />
          </span>
          <span className="upper-nav__span gp">
            <FaGooglePlus />
          </span>
        </div>
      </div>
      {/* container */}
    </nav>
  );
}

export default UpperNav;
