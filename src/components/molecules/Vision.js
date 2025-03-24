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
          To create a sustainable and forward-thinking foundation that mobilises empowered and highly trained middle-class professionals in Ghana and the diaspora to support social democratic ideals and principles to better the well-being of Ghana and Ghanaians.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Vision;
