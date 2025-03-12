import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Instagram from "../../assets/icons/instagram.svg";

const Socials = () => {
  return (
    <div className="content">
      <div className="socials-container">
        <span className="hr socials-left-line"></span>
        <div className="social-icons">
            <FaLinkedin className="social-icon"/>
            <FaSquareXTwitter className="social-icon"/>
            <FaYoutube className="social-icon" />
            <FaFacebookSquare className="social-icon"/>
            <FaInstagram className="social-icon"/>
        </div>
        <span className="hr socials-right-line"></span>
      </div>
    </div>
  );
};

export default Socials;