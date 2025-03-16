import React, { useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img
          className="logo"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        {/* <span className="logo-text">RM Foundation</span> */}
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      
      {/* Navigation Menu */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About us</a>
        </li>
        <li>
          <a href="/Articles">Articles</a>
        </li>
        {/* <li style={{display: "none"}}> */}
        <li>
          <a href="/Contact">Contact us</a>
        </li>
        <li>
          <a href="/Leadership">Our Leadership</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


// const Welcome = () => {
//   return (
//     <>
//       <div className="content glitch-container">
//         <div class="glitch-wrapper">
//           <div class="glitch" data-glitch="You are welcome to RM Foundation">
//             You are welcome to RM Foundation
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
