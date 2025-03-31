import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <motion.div
          className="about-us-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-us-content">
            <motion.h2
              className="about-us-title"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="about-us-subtitle"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Communities Through Resource Mobilisation
            </motion.p>

            {/* Mission Section */}
            <motion.div
              className="about-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="about-section-title">Our Mission</h3>
              <p className="about-section-description">
                To collaborate with our middle-class members and other key
                stakeholders to engage in programmes and projects that enhances
                the lives of or members and supports the developmental agendas
                in our country Ghana.
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              className="about-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="about-section-title">Our Vision</h3>
              <p className="about-section-description">
                To create a sustainable and forward-thinking foundation that
                mobilises empowered and highly trained middle-class
                professionals in Ghana and the diaspora to support social
                democratic ideals and principles to better the well-being of
                Ghana and Ghanaians.
              </p>
            </motion.div>

            {/* Values Section */}
            <motion.div
              className="about-values-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="about-section-title">Our Values</h3>
              <div className="about-values-grid">
                <div className="about-value-card">
                  <h4>Integrity</h4>
                  <p>
                  Carry out our membership recruitment in a transparent and objective manner.
                  </p>
                </div>
                <div className="about-value-card">
                  <h4>Collaboration</h4>
                  <p>
                  Recruit and collaborate with middle class members and partners who have integrity, positivity and respect as their core principles.
                  </p>
                </div>
                <div className="about-value-card">
                  <h4>Sustainability</h4>
                  <p>
                  Only engage in projects that seeks to impact positively in the lives of our members and the society.
                  </p>
                </div>
                <div className="about-value-card">
                  <h4>Impact</h4>
                  <p>
                  Support in the achievement of building a better Ghana agenda of the country.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
