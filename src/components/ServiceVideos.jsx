import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceVideos = () => {
  // Construction service videos
  const serviceVideos = [
    {
      id: 1,
      title: "PC Construction: Residential Projects",
      description: "Explore our premium residential construction services and projects.",
      videoSrc: "/videos/residential-construction.mp4",
      thumbnail: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "PC Construction: Commercial Buildings",
      description: "Our expertise in commercial construction and office buildings.",
      videoSrc: "/videos/commercial-construction.mp4",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "PC Construction: Industrial Facilities",
      description: "Specialized construction for industrial and manufacturing facilities.",
      videoSrc: "/videos/industrial-construction.mp4",
      thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "PC Construction: Renovation Services",
      description: "Expert renovation and remodeling services for all property types.",
      videoSrc: "/videos/renovation-services.mp4",
      thumbnail: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // State for active video
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Handle video selection
  const handleVideoSelect = (video) => {
    setActiveVideo(video);
    setVideoLoaded(false);
    setIsPlaying(true);
  };

  // Handle video loading
  useEffect(() => {
    if (videoRef.current && activeVideo) {
      const video = videoRef.current;

      const handleLoadedData = () => {
        setVideoLoaded(true);
        if (isPlaying) {
          video.play().catch(error => {
            console.error("Autoplay failed:", error);
          });
        }
      };

      const handleError = (e) => {
        console.error("Video failed to load:", e);
        setVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [activeVideo, isPlaying]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#0A3A5E] mb-4">PC Construction Services</h2>
          <div className="w-20 h-1 bg-[#0A3A5E] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our specialized PC construction services through our video showcase. Click on any service to learn more.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {serviceVideos.map((video) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              onClick={() => handleVideoSelect(video)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#0A3A5E] bg-opacity-80 flex items-center justify-center">
                    <i className="fas fa-play text-white text-xl"></i>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A3A5E] mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveVideo(null);
              setIsPlaying(false);
            }}
          >
            <motion.div
              className="relative bg-black rounded-lg overflow-hidden max-w-5xl w-full max-h-[80vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-70"
                onClick={() => {
                  setActiveVideo(null);
                  setIsPlaying(false);
                }}
              >
                <i className="fas fa-times"></i>
              </button>

              {/* Loading indicator */}
              {!videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div className="w-16 h-16 border-4 border-t-transparent border-[#0A3A5E] rounded-full animate-spin"></div>
                </div>
              )}

              {/* Video player */}
              <video
                ref={videoRef}
                className="w-full"
                controls
                src={activeVideo.videoSrc}
                poster={activeVideo.thumbnail}
              />

              {/* Video info */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-[#0A3A5E] mb-2">{activeVideo.title}</h3>
                <p className="text-gray-600">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceVideos;
