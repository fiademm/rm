import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                To mobilise resources effectively and efficiently to support
                sustainable development initiatives, empower communities, and
                drive positive change globally.
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
                To create a sustainable future where innovation and technology
                empower communities, drive positive change, and foster global
                collaboration. We envision a world where every individual has
                access to opportunities that enable them to thrive and
                contribute to a better tomorrow.
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
                    We uphold the highest standards of honesty, transparency,
                    and accountability in all our actions and decisions.
                  </p>
                </div>
                <div className="about-value-card">
                  <h4>Collaboration</h4>
                  <p>
                    We believe in the power of partnerships and teamwork to
                    achieve shared goals and create lasting impact.
                  </p>
                </div>
                <div className="about-value-card">
                  <h4>Sustainability</h4>
                  <p>
                    We are committed to ensuring that our initiatives are
                    environmentally, socially, and economically sustainable.
                  </p>
                </div>
                <div className="about-value-card">
                  <h4>Impact</h4>
                  <p>
                    We measure our success by the tangible and positive changes
                    we bring to the communities we serve.
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
