import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./InteractiveContent.css";

const InteractiveContent = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);

  useEffect(() => {
    const handleImageLoad = () => {
      setImagesLoaded(true);
    };

    const images = Array.from(document.querySelectorAll(".custom-image"));
    let loadedCount = 0;

    images.forEach((image) => {
      if (image.complete) {
        loadedCount++;
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });

    if (loadedCount === images.length) {
      setImagesLoaded(true);
    }

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <div className="InteractiveContent">
      <div className="row">
        <motion.div
          className={`image-item ${imagesLoaded ? "loaded" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src="/assets/MiembrosRAIN.png"
            alt="Background"
            className="custom-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="image-content">
            <h3 className="custom-title">Miembros de la RED RAIN</h3>
            
          </div>
        </motion.div>
        <motion.div
          className={`image-item ${imagesLoaded ? "loaded" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src="/assets/ReconocimientoRAIN.png"
            alt="Background"
            className="custom-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="image-content">
            <h3 className="custom-title">Reconocimiento RAIN</h3>
            
          </div>
        </motion.div>
      </div>
      <div className="row">
        <motion.div
          className={`image-item ${imagesLoaded ? "loaded" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ opacity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src="/assets/EventosRAIN.png"
            alt="Background"
            className="custom-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="image-content">
            <h3 className="custom-title">Eventos RAIN</h3>
           
          </div>
        </motion.div>
        <motion.div
          className={`image-item ${imagesLoaded ? "loaded" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ opacity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src="/assets/AlianzasRAIN.png"
            alt="Background"
            className="custom-image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="image-content">
            <h3 className="custom-title">Alianzas RAIN</h3>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContent;
