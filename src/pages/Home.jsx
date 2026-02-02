import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ServiceVideos from '../components/ServiceVideos';
import '../styles/Home.css';
import constructionImage from '../assets/image52.jpeg';

const Home = () => {
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  // State for testimonial slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Sample data for testimonials
  const testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, TechSpace Inc.',
      project: 'Office Complex Development',
      quote: 'COBRIXA exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched in the industry.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Property Developer',
      project: 'Luxury Residential Tower',
      quote: "Working with COBRIXA was a seamless experience. Their team's expertise and professionalism delivered exceptional results on our complex project.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      position: 'Facilities Director',
      project: 'Corporate Headquarters',
      quote: "The COBRIXA team delivered our project on time and within budget. Their innovative solutions saved us both time and money without compromising quality.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Real Estate Investor',
      project: 'Mixed-Use Development',
      quote: "I've worked with many construction firms, but COBRIXA stands out for their exceptional communication and problem-solving abilities. Highly recommended!",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
      name: 'Robert Williams',
      position: 'Hotel Chain Owner',
      project: 'Luxury Hotel Renovation',
      quote: "COBRIXA transformed our outdated property into a stunning modern hotel. Their attention to detail and quality craftsmanship exceeded all expectations.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial(prev =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Sample data for projects
  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
      description: 'A state-of-the-art office complex with sustainable design features.'
    },
    {
      title: 'Luxury Residential Tower',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      description: 'High-end residential apartments with premium amenities and finishes.'
    },
    {
      title: 'Shopping Mall Renovation',
      category: 'Commercial',
      image: 'https://images.adsttc.com/media/images/5013/c903/28ba/0d39/6300/1021/newsletter/stringio.jpg?1414410342',
      description: 'Complete renovation and modernization of an existing shopping center.'
    }
  ];



  // Testimonial slider variants
  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  // Company stats
  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '150+', label: 'Expert Team Members' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  // Sample data for showcase sections
  const showcaseImages = {
    mainImage: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1000&auto=format&fit=crop',
    smallImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=500&auto=format&fit=crop'
    ],
    rightSideImage: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative z-10 w-full h-screen">
        <Hero />
      </div>

      {/* Showcase Section 1: Left-Right Layout */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - 1 Large Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <motion.img
                  src={showcaseImages.mainImage}
                  alt="COBRIXA Construction Project"
                  className="w-full h-[600px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Premium Construction</h3>
                  <p className="text-lg">Excellence in every detail</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - 4 Small Images */}
            <motion.div
              className="w-full md:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {showcaseImages.smallImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <img
                    src={image}
                    alt={`COBRIXA Project ${index + 1}`}
                    className="w-full h-[250px] object-cover transition-all duration-500 hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Section 2: Right-Left Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl font-bold text-[#0A3A5E] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Building Tomorrow's Landmarks Today
              </motion.h2>

              <motion.div
                className="w-20 h-1 bg-[#0A3A5E] mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>

              <motion.p
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                At COBRIXA, we combine innovative design with precision engineering to create structures that stand the test of time. Our commitment to excellence is evident in every project we undertake.
              </motion.p>

              <motion.ul
                className="space-y-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Innovative Design Solutions', 'Sustainable Building Practices', 'Expert Project Management', 'Premium Quality Materials'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <span className="text-[#0A3A5E] mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link to="/services" className="btn bg-[#0A3A5E] text-white hover:bg-transparent hover:text-[#0A3A5E] border-2 border-[#0A3A5E] transition-all duration-300 py-3 px-8 rounded-md font-semibold inline-block">
                  Explore Our Approach
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <motion.img
                  src={constructionImage}
                  alt="COBRIXA Construction Excellence"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#0A3A5E] opacity-0 hover:opacity-20 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PC Construction Service Videos */}
      

      {/* About Section */}
      <section className="py-20 bg-gray-50" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#0A3A5E] mb-4">COBRIXA Excellence</h2>
            <div className="w-20 h-1 bg-[#0A3A5E] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              COBRIXA brings over two decades of construction excellence to every project.
              We specialize in premium residential, commercial, and industrial construction, delivering
              exceptional results through innovative design, quality craftsmanship, and sustainable building practices.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn bg-[#0A3A5E] text-white hover:bg-transparent hover:text-[#0A3A5E] border-2 border-[#0A3A5E] transition-all duration-300 py-3 px-8 rounded-md font-semibold inline-block">
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0A3A5E] text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{
                    textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 10px rgba(255,255,255,0.5)", "0px 0px 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#0A3A5E] mb-4">Our Premium Services</h2>
            <div className="w-20 h-1 bg-[#0A3A5E] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              COBRIXA delivers a comprehensive range of construction services with uncompromising quality and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop"
                  alt="Residential Construction"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A3A5E] mb-3">Construction</h3>
                <p className="text-gray-700 mb-4">Luxury homes and custom buildings built with precision craftsmanship and premium materials.</p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/construction" className="text-[#0A3A5E] font-semibold hover:underline inline-flex items-center">
                    Explore Construction <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://w0.peakpx.com/wallpaper/205/649/HD-wallpaper-hotel-room-interior-design-luxury-hotel-apartments-modern-interior-design-classic-style-luxury-chandelier.jpg"
                  alt="Commercial Construction"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A3A5E] mb-3">Interior Design</h3>
                <p className="text-gray-700 mb-4">Elegant interior spaces with premium finishes, custom furnishings, and thoughtful design elements.</p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/interior-design" className="text-[#0A3A5E] font-semibold hover:underline inline-flex items-center">
                    Explore Interior Design <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop"
                  alt="Interior Renovations"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A3A5E] mb-3">Specialized Projects</h3>
                <p className="text-gray-700 mb-4">Industrial facilities, infrastructure projects, and specialized construction solutions.</p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/services" className="text-[#0A3A5E] font-semibold hover:underline inline-flex items-center">
                    Explore Specialized <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#0A3A5E] mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-[#0A3A5E] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of exceptional construction projects that showcase our expertise and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A3A5E] text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A3A5E] mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link to="/projects" className="text-[#0A3A5E] font-semibold hover:underline inline-flex items-center">
                      View Project <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="btn bg-[#0A3A5E] text-white hover:bg-transparent hover:text-[#0A3A5E] border-2 border-[#0A3A5E] transition-all duration-300 py-3 px-8 rounded-md font-semibold inline-block">
                View All Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
  

      {/* CTA Section */}
      <section className="py-20 bg-[#0A3A5E] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build with COBRIXA?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project and discover how our expertise can bring your vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn bg-white text-[#0A3A5E] hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 text-lg px-8 py-3 rounded-md font-semibold inline-flex items-center">
                Start Your Project <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;



