import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
        <div className="footer">
          <span className="footer-container-left">
            Copyright @ 2025 RM Foundation
          </span>
          <div className="footer-container-right">
            <span onClick={() => navigate("/Terms+&+Conditions")}>Terms & Conditions</span>
            <span>|</span>
            <span onClick={() => navigate("/Privacy+Policy")}>Privacy Policy</span>
          </div>
        </div>
    </>
  );
};

export default Footer;