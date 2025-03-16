import React from 'react';
import { FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa'; // For 2D icons

const Test = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>We are a forward-thinking company dedicated to innovation and excellence.</p>
      </div>

      <div className="mission-vision-values">
        {/* Mission Section */}
        <div className="section mission">
          <div className="icon">
            <FaRocket size={50} color="#4CAF50" />
          </div>
          <h2>Mission</h2>
          <p>To empower businesses and individuals through cutting-edge technology and innovative solutions.</p>
        </div>

        {/* Vision Section */}
        <div className="section vision">
          <div className="icon">
            <FaLightbulb size={50} color="#FFC107" />
          </div>
          <h2>Vision</h2>
          <p>To be a global leader in technology, driving positive change and creating a better future.</p>
        </div>

        {/* Values Section */}
        <div className="section values">
          <div className="icon">
            <FaHandshake size={50} color="#2196F3" />
          </div>
          <h2>Values</h2>
          <p>Integrity, Innovation, Collaboration, and Sustainability.</p>
        </div>
      </div>
    </div>
  );
};

export default Test;