// src/components/DashboardCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/DashboardCard.css';

const DashboardCard = ({ title, value, icon, iconColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="dashboard-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-icon" style={{ backgroundColor: iconColor }}>
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{value}</p>
        <motion.a
          href="#"
          className="view-all"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All
          <motion.span
            className="arrow-icon"
            animate={{
              x: isHovered ? 5 : 0,
              opacity: isHovered ? 1 : 0.7
            }}
            transition={{ duration: 0.2 }}
          >
            <FaArrowRight />
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default DashboardCard;