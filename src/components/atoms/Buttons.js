import React, { useState } from "react";
import { Link } from "react-router-dom";

const Buttons = ({ type, variant, Icon, ImageSource, onButtonClick, buttonText, buttonLink }) => {
  const [isHovevered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const buttonClass = `button ${type} ${isHovevered ? "hover" : ""} ${
    isFocused ? "focused" : ""
  } ${isDisabled ? "disabled" : ""} ${variant}`;

  return (
    <Link to={buttonLink}
        className={buttonClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={onButtonClick}
        disabled={isDisabled}
      >
        {ImageSource && variant === "btn-img-left" && (
          <span className="btn-img-cont"><img src={ImageSource} alt="" className='left-img' /></span>
        )}
        {Icon && variant === "btn-icon-left" && (
          <span className="btn-icon-cont"><Icon className='btn-icon-l' /></span>
        )}
        {buttonText}
        {ImageSource && variant === "btn-img-right" && (
          <span className="btn-img-cont"><img src={ImageSource} alt="" className='right-img' /></span>
        )}
        {Icon && variant === "btn-icon-right" && (
          <span className="btn-icon-cont"><Icon className='btn-icon-r' /></span>
        )}
    </Link>
  );
};

export default Buttons;