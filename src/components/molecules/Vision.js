import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <motion.div
      className="vision-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="vision-content">
        <motion.h2
          className="vision-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="vision-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          To create a sustainable future where innovation and technology empower
          communities, drive positive change, and foster global collaboration. We
          envision a world where every individual has access to opportunities
          that enable them to thrive and contribute to a better tomorrow.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Vision;