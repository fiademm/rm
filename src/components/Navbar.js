import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        RM Foundation
        <img src="" alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
        <li>
          <a href="#leadership">Our Leadership</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
