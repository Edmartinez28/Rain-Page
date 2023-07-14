import React from "react";
import { motion } from "framer-motion";

const InteractiveContent = () => {
  return (
    <div className="content-container">
      <section className="custom-section">
        <div className="custom-overlay">
          <img
            src="/assets/ImageSonParte.png"
            alt="Background"
            className="custom-image"
          />
          <motion.div
            className="custom-content"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="custom-text">
              <h1 className="custom-title">Miembros de la</h1>
              <h2 className="custom-subtitle">RED RAIN</h2>
            </div>
            <motion.button
              className="custom-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ¿Quiénes son parte?
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Resto del contenido */}
    </div>
  );
};

export default InteractiveContent;
