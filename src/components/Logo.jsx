import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-white bg-opacity-90 p-3 rounded-lg shadow-lg"
    >
      {/* COBRIXA Logo */}
      <svg 
        width="200" 
        height="200" 
        viewBox="0 0 800 800" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized "C" made of isometric blocks */}
        <g fill="#0A3A5E">
          {/* Top cube */}
          <polygon points="400,150 500,200 400,250 300,200" />
          <polygon points="400,250 500,200 500,300 400,350" />
          <polygon points="300,200 400,250 400,350 300,300" />
          
          {/* Left side cubes */}
          <polygon points="300,300 400,350 300,400 200,350" />
          <polygon points="300,400 400,450 300,500 200,450" />
          <polygon points="300,500 400,550 300,600 200,550" />
          
          {/* Bottom cubes */}
          <polygon points="400,550 500,500 600,550 500,600" />
          <polygon points="500,500 600,450 700,500 600,550" />
        </g>
        
        {/* COBRIXA text */}
        <text 
          x="400" 
          y="700" 
          fontFamily="Arial, sans-serif" 
          fontSize="100" 
          fontWeight="bold" 
          fill="#0A3A5E" 
          textAnchor="middle"
        >
          COBRIXA
        </text>
      </svg>
    </motion.div>
  );
};

export default Logo;
