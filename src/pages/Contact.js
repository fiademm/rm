import React from "react";
import Buttons from "../components/atoms/Buttons";

const Contact = () => {
  return (
    <div className="content">
      <div className="screen-text-container">
        <span className="screen-title">Want to Join The RM Foundation?</span>
        <span className="screen-subtitle">
          Send an email to the administrator.
        </span>
      </div>

      <Buttons
        type=""
        variant=""
        Icon={null}
        onButtonClick={null}
        buttonText={"Contact us"}
        buttonLink={null}
      />
    </div>
  );
};

export default Contact;
