import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="about-us">
          {/* Hero Section */}
          <div className="about-hero-section">
            <div className="about-hero-content">
              <h1>About Us</h1>
              <p>Empowering communities, transforming lives.</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-mission-section">
            <div className="about-container">
              <h2>Our Mission</h2>
              <p>
                At [Foundation Name], our mission is to create sustainable
                solutions for the challenges faced by underserved communities.
                We believe in the power of collaboration, innovation, and
                compassion to drive meaningful change.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="about-vision-section">
            <div className="about-container">
              <h2>Our Vision</h2>
              <p>
                We envision a world where every individual has access to basic
                necessities, education, and opportunities to thrive. Together,
                we can build a brighter future for generations to come.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="about-team-section">
            <div className="about-container">
              <h2>Meet Our Team</h2>
              <div className="about-team-members">
                <div className="about-team-member">
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg"
                    alt="Team Member"
                  />
                  <h3>John Doe</h3>
                  <p>Founder & CEO</p>
                </div>
                <div className="about-team-member">
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg"
                    alt="Team Member"
                  />
                  <h3>Jane Smith</h3>
                  <p>Program Director</p>
                </div>
                <div className="about-team-member">
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-photography-african-business-man_1085768-22.jpg"
                    alt="Team Member"
                  />
                  <h3>Alice Johnson</h3>
                  <p>Community Outreach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="about-values-section">
            <div className="about-container">
              <h2>Our Values</h2>
              <div className="about-values-list">
                <div className="about-value">
                  <h3>Integrity</h3>
                  <p>
                    We are committed to transparency and ethical practices in
                    everything we do.
                  </p>
                </div>
                <div className="about-value">
                  <h3>Compassion</h3>
                  <p>
                    We care deeply about the well-being of the communities we
                    serve.
                  </p>
                </div>
                <div className="about-value">
                  <h3>Innovation</h3>
                  <p>
                    We embrace creative solutions to address complex challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
