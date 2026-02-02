// eslint-disable-next-line no-unused-vars
import {AnimatePresence, motion} from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
// import Logo from './Logo';

const Hero = () => {
  // Background images for hero section slideshow
  const backgroundImages = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop"
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Modern, sophisticated color theme for the hero section
  const colorTheme = {
    primary: "#0A3A5E",    // COBRIXA Blue
    secondary: "#2D3748",  // Dark gray
    accent: "#F59E0B",     // Amber
    dark: "#1A202C",       // Almost black
    light: "#F7FAFC"       // Off-white
  };

  // Animation state
  const [scrollY, setScrollY] = useState(0);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const containerRef = useRef(null);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image slideshow effect - change image every 5 seconds with slow transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  // Animation variants for expanded content
  const expandedContentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="flex flex-col w-full text-white" ref={containerRef}>
      {/* Premium construction photo background with parallax effect */}
      <motion.div
        className="relative w-full h-[100vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ zIndex: 1 }}
      >
        {/* Background Image Slideshow with Parallax */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            style={{ y: scrollY * 0.2, zIndex: 5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                transform: 'scale(1.05)'
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))',
            zIndex: 10
          }}
        ></motion.div>

        {/* Hero Content - Left Aligned */}
        <div className="container mx-auto px-4 h-full relative" style={{ zIndex: 20 }}>
          <div className="flex items-center justify-start h-full">
            <motion.div
              className="text-left max-w-2xl ml-0 md:ml-16 lg:ml-32 mt-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Animated Accent Line */}
              <motion.div
                className="w-20 h-1 mb-6"
                initial={{ width: 0 }}
                animate={{
                  width: 80,
                  background: 'rgba(255, 255, 255, 0.7)'
                }}
                transition={{
                  width: { duration: 1, delay: 0.8 }
                }}
              ></motion.div>

              {/* Line 1 */}
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.span
                  className="inline-block"
                  style={{
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  COBRIXA
                </motion.span>
              </motion.h1>

              {/* Line 2 */}
              <motion.p
                className="text-xl md:text-2xl font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)' }}
              >
                Building excellence, crafting futures
              </motion.p>

              {/* Animated Button */}
              <motion.button
                className="relative overflow-hidden py-3 px-8 text-lg font-semibold uppercase tracking-wider mr-4 cursor-pointer"
                style={{
                  backgroundColor: colorTheme.primary,
                  color: '#ffffff',
                  border: `2px solid ${colorTheme.primary}`,
                  borderRadius: '4px'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  boxShadow: [
                    '0 0 0 rgba(10, 58, 94, 0)',
                    '0 0 20px rgba(10, 58, 94, 0.5)',
                    '0 0 0 rgba(10, 58, 94, 0)'
                  ]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.5 },
                  y: { duration: 0.5, delay: 1.5 },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorTheme.accent,
                  color: '#ffffff',
                  borderColor: colorTheme.accent
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMoreContent(!showMoreContent)}
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    zIndex: 0
                  }}
                />

                <motion.span
                  className="relative z-10 inline-flex items-center"
                >
                  {showMoreContent ? 'Show Less' : 'Click Me'}
                  <motion.i
                    className={`fas ${showMoreContent ? 'fa-chevron-up' : 'fa-arrow-right'} ml-2`}
                    animate={{
                      x: showMoreContent ? 0 : [0, 5, 0],
                      y: showMoreContent ? [0, -3, 0] : 0
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  ></motion.i>
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Expanded Content Section */}
        <AnimatePresence>
          {showMoreContent && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent"
              variants={expandedContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ paddingTop: '100px', paddingBottom: '40px', zIndex: 30 }}
            >
              <div className="container mx-auto px-4">
                {/* COBRIXA Introduction */}
                <motion.div
                  className="text-center mb-10"
                  variants={itemVariants}
                >
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                    animate={{
                      textShadow: [
                        '0 0 7px rgba(255,255,255,0.3)',
                        '0 0 10px rgba(255,255,255,0.5)',
                        '0 0 7px rgba(255,255,255,0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Welcome to COBRIXA Construction
                  </motion.h2>
                  <motion.div
                    className="w-24 h-1 bg-white mx-auto mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  ></motion.div>
                  <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                    COBRIXA is a premier construction company with over 20 years of experience delivering exceptional building solutions across residential, commercial, and industrial sectors.
                  </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {/* Service Card 1 */}
                  <motion.div
                    className="bg-black bg-opacity-70 p-6 rounded-lg border border-opacity-20 cursor-pointer"
                    style={{ borderColor: colorTheme.primary }}
                    variants={itemVariants}
                    whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                  >
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{
                        color: [colorTheme.primary, colorTheme.accent, colorTheme.primary],
                        textShadow: [
                          `0 0 10px rgba(255, 255, 255, 0.3)`,
                          `0 0 20px rgba(255, 255, 255, 0.6)`,
                          `0 0 10px rgba(255, 255, 255, 0.3)`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <i className="fas fa-building"></i>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">Residential Excellence</h3>
                    <p className="text-gray-300 mb-4">Luxury homes and residential buildings crafted with precision and attention to detail.</p>
                    <ul className="text-gray-400 text-sm space-y-1 mb-4">
                      <li>• Custom Home Construction</li>
                      <li>• Luxury Apartments</li>
                      <li>• Residential Complexes</li>
                    </ul>
                  </motion.div>

                  {/* Service Card 2 */}
                  <motion.div
                    className="bg-black bg-opacity-70 p-6 rounded-lg border border-opacity-20 cursor-pointer"
                    style={{ borderColor: colorTheme.primary }}
                    variants={itemVariants}
                    whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                  >
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{
                        color: [colorTheme.primary, colorTheme.accent, colorTheme.primary],
                        textShadow: [
                          `0 0 10px rgba(255, 255, 255, 0.3)`,
                          `0 0 20px rgba(255, 255, 255, 0.6)`,
                          `0 0 10px rgba(255, 255, 255, 0.3)`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      <i className="fas fa-industry"></i>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">Commercial Innovation</h3>
                    <p className="text-gray-300 mb-4">Office buildings, retail spaces, and commercial facilities built to the highest standards.</p>
                    <ul className="text-gray-400 text-sm space-y-1 mb-4">
                      <li>• Corporate Headquarters</li>
                      <li>• Retail Developments</li>
                      <li>• Hospitality Projects</li>
                    </ul>
                  </motion.div>

                  {/* Service Card 3 */}
                  <motion.div
                    className="bg-black bg-opacity-70 p-6 rounded-lg border border-opacity-20 cursor-pointer"
                    style={{ borderColor: colorTheme.primary }}
                    variants={itemVariants}
                    whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                  >
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{
                        color: [colorTheme.primary, colorTheme.accent, colorTheme.primary],
                        textShadow: [
                          `0 0 10px rgba(255, 255, 255, 0.3)`,
                          `0 0 20px rgba(255, 255, 255, 0.6)`,
                          `0 0 10px rgba(255, 255, 255, 0.3)`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      <i className="fas fa-tools"></i>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white">Specialized Expertise</h3>
                    <p className="text-gray-300 mb-4">Transform existing spaces with our expert renovation and specialized construction services.</p>
                    <ul className="text-gray-400 text-sm space-y-1 mb-4">
                      <li>• Industrial Facilities</li>
                      <li>• Historic Renovations</li>
                      <li>• Sustainable Building</li>
                    </ul>
                  </motion.div>
                </div>

                {/* COBRIXA Values */}
                <motion.div
                  className="bg-black bg-opacity-50 p-6 rounded-lg border border-opacity-20 max-w-4xl mx-auto cursor-pointer"
                  style={{ borderColor: colorTheme.primary }}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold mb-4 text-white text-center">Our Core Values</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <motion.div
                      className="p-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl mb-2 text-white"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-medal"></i>
                      </motion.div>
                      <h4 className="text-white font-semibold">Excellence</h4>
                    </motion.div>

                    <motion.div
                      className="p-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl mb-2 text-white"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <i className="fas fa-handshake"></i>
                      </motion.div>
                      <h4 className="text-white font-semibold">Integrity</h4>
                    </motion.div>

                    <motion.div
                      className="p-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl mb-2 text-white"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <i className="fas fa-lightbulb"></i>
                      </motion.div>
                      <h4 className="text-white font-semibold">Innovation</h4>
                    </motion.div>

                    <motion.div
                      className="p-3 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="text-3xl mb-2 text-white"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      >
                        <i className="fas fa-leaf"></i>
                      </motion.div>
                      <h4 className="text-white font-semibold">Sustainability</h4>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>





        {/* Premium Animated Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ zIndex: 15 }}
        >
          {/* Animated particles */}
          {[...Array(12)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                opacity: 0
              }}
              animate={{
                y: [null, window.innerHeight * 0.8],
                scale: [0, 1, 0],
                opacity: [0, 0.7, 0],
                rotate: Math.random() > 0.5 ? 180 : -180
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                backgroundColor: index % 2 === 0 ? colorTheme.primary : colorTheme.accent,
                boxShadow: `0 0 10px ${index % 2 === 0 ? colorTheme.primary : colorTheme.accent}`
              }}
            />
          ))}

          {/* Geometric shapes */}
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={`shape-${index}`}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 0,
                opacity: 0
              }}
              animate={{
                rotate: 360,
                opacity: [0, 0.15, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: Math.random() * 20 + 30,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                border: `1px solid ${index % 2 === 0 ? colorTheme.primary : colorTheme.accent}33`,
                borderRadius: index % 3 === 0 ? '0%' : index % 3 === 1 ? '50%' : '0'
              }}
            />
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;
