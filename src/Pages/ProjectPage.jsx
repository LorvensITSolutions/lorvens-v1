import React, { useState, useEffect, useRef } from "react";
import "./ProjectPage.css";
import { Link } from "react-router-dom";
import { 
  
  ExternalLink, 
  Calendar, 
  Users, 
  Code, 
  ArrowRight, 
  Filter,
  Sparkles,
  Zap,
  Target,
  Trophy,
  Eye,
  MousePointer,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";

// ✨ Enhanced Animation Variants
const slideVariants = {
  hiddenLeft: { 
    opacity: 0, 
    x: -100, 
    scale: 0.9,
    filter: "blur(10px)"
  },
  hiddenRight: { 
    opacity: 0, 
    x: 100, 
    scale: 0.9,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// 🔥 Enhanced Projects Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Development",
    subtitle: "Next-Gen Shopping Experience",
    description: "A comprehensive e-commerce solution built with modern technologies, featuring user authentication, payment integration, inventory management, and admin dashboard with real-time analytics.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549921296-3a0431d42d36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    duration: "6 months",
    team: "5 developers",
    category: "Web Development",
    status: "Completed",
    impact: "300% increase in sales",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "AI-ML Integration Platform",
    subtitle: "Intelligent Business Analytics",
    description: "Advanced analytics platform using machine learning algorithms to provide business intelligence, predictive analytics, and automated decision-making capabilities.",
    images: [
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
    duration: "10 months",
    team: "4 developers",
    category: "AI/ML",
    status: "Completed",
    impact: "85% accuracy improvement",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Educational Management System",
    subtitle: "Smart Learning Environment",
    description: "A modern and interactive school website built with the MERN stack. Features include student portals, teacher dashboards, online admissions, and virtual classroom integration.",
    images: [
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    duration: "5 months",
    team: "6 developers",
    category: "Web Development",
    status: "Completed",
    impact: "50% efficiency boost",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    subtitle: "Growth-Driven Strategy",
    description: "A results-driven campaign combining SEO, Google Ads, social media marketing, and content strategies to deliver measurable growth and brand awareness.",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=1200&q=80",
    ],
    technologies: ["SEO", "Google Ads", "Analytics", "Social Media"],
    duration: "4 months",
    team: "3 marketers",
    category: "Digital Marketing",
    status: "Completed",
    impact: "400% ROI increase",
    color: "from-pink-500 to-violet-600"
  },
{
  id: 3,
  title: "UI/UX Design Project",
  subtitle: "Modern User-Centered Experience",
  description:
    "A sleek and intuitive UI/UX design project focused on delivering engaging, user-friendly, and accessible digital experiences. Includes interactive prototypes, responsive layouts, and usability testing for seamless navigation.",
  images: [
    "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1200&q=80", // Designer working on UI mockups
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80", // Wireframing & sketches
    "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=1200&q=80", // Figma UI/UX on screen
  ],
  technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
  duration: "2 months",
  team: "3 designers",
  category: "UI/UX Development",
  status: "COMPLETED",
  impact: "Enhanced usability & engagement",
  color: "from-purple-500 to-pink-600",
}
];

// 🎯 Parallax Background Component
const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-200 rounded-full opacity-20"
      />
    </div>
  );
};

// 🎴 Enhanced Project Card
const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, hovering ? 1500 : 3000);
    return () => clearInterval(interval);
  }, [project.images.length, hovering]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group mb-16 lg:mb-24`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Floating decoration */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className={`absolute -top-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-12 h-12 bg-gradient-to-r ${project.color} rounded-full opacity-20 blur-sm`}
      />

      <div
        className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] flex flex-col ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Enhanced Image Section */}
        <div className="lg:w-1/2 relative group">
          <div className="relative h-80 sm:h-[32rem] lg:h-[40rem] overflow-hidden">
            {/* Image carousel */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 left-4"
            >
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Completed' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-yellow-500 text-black'
              }`}>
                {project.status}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative">
          {/* Floating icons */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute top-4 right-4 opacity-10"
          >
            <Sparkles size={24} className="text-orange-500" />
          </motion.div>

          {/* Category tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-3"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
              {project.category}
            </span>
          </motion.div>

          {/* Title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              {project.title}
            </h3>
            <p className="text-orange-500 font-medium text-sm sm:text-base">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base"
          >
            {project.description}
          </motion.p>

          {/* Impact metric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200"
          >
            <div className="flex items-center">
              <Trophy size={16} className="text-orange-500 mr-2" />
              <span className="text-orange-700 font-semibold text-sm">
                Impact: {project.impact}
              </span>
            </div>
          </motion.div>

          {/* Project Details with enhanced icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center text-gray-600 group"
            >
              <div className="p-2 bg-orange-100 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                <Calendar size={16} className="text-orange-500" />
              </div>
              <span className="text-sm font-medium">{project.duration}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center text-gray-600 group"
            >
              <div className="p-2 bg-orange-100 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                <Users size={16} className="text-orange-500" />
              </div>
              <span className="text-sm font-medium">{project.team}</span>
            </motion.div>
          </motion.div>

          {/* Technologies with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center mb-3">
              <div className="p-2 bg-orange-100 rounded-lg mr-3">
                <Code size={16} className="text-orange-500" />
              </div>
              <span className="font-semibold text-gray-700 text-sm sm:text-base">
                Technologies Used
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:shadow-md transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons have been removed as per request */}
        </div>
      </div>
    </motion.div>
  );
};

// 🎨 Animated Filter Button
const FilterButton = ({ category, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
        : "bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 shadow-md"
    }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
    <span className="relative z-10 text-sm sm:text-base">{category}</span>
  </motion.button>
);

// 🌟 Stats Counter Component
const StatsCounter = ({ number, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < number) {
            return prev + Math.ceil(number / 50);
          }
          return number;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-3 inline-block"
      >
        <Icon size={24} className="text-white" />
      </motion.div>
      <motion.div
        className="text-2xl sm:text-3xl font-bold text-white mb-1"
        animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {count}+
      </motion.div>
      <div className="text-white/80 text-sm font-medium">{label}</div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E5] via-orange-50 to-[#FFF6E5] relative overflow-hidden">
      <ParallaxBackground />
      
      {/* Enhanced Header with Parallax */}
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity,  }}
        className=" icon-zap relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <Zap size={48} className=" text-white mx-auto" />
            </motion.div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
              Our 
              <motion.span
                className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {" "}Projects
              </motion.span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover the innovative solutions we've crafted with{" "}
              <motion.span 
                className="text-yellow-300 font-bold"
                whileHover={{ scale: 1.1 }}
              >
                Passion & Technology
              </motion.span>
            </p>
          </motion.div>
        </motion.div>


        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatsCounter number={50} label="Projects Completed" icon={Trophy} />
            <StatsCounter number={100} label="Happy Clients" icon={Users} />
            <StatsCounter number={25} label="Technologies" icon={Code} />
            <StatsCounter number={5} label="Years Experience" icon={Target} />
          </div>
        </motion.div> */}
      </motion.div>

      {/* Enhanced Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sticky top-20 z-30 bg-white/80 backdrop-blur-lg shadow-lg border-b border-orange-100 py-4 sm:py-6"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter size={20} className="text-orange-500" />
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Filter Projects</span>
          </div>
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {categories.map((cat) => (
              <FilterButton
                key={cat}
                category={cat}
                isActive={filter === cat}
                onClick={() => setFilter(cat)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Projects Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 max-w-7xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <Sparkles size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced CTA Section with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="inline-block mb-6"
            >
              <Target size={48} className="text-orange-500 mx-auto" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Ready to Start Your 
              <motion.span
                className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {" "}Dream Project?
              </motion.span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with
              cutting-edge technology and innovative strategies that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
  <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0px 15px 35px rgba(249,115,22,0.5)"
    }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 
               rounded-xl font-bold text-lg flex items-center group 
               hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl"
  >
    <Sparkles size={20} className="mr-3" />
    Start Your Project
    <ArrowRight
      size={20}
      className="ml-3 group-hover:translate-x-1 transition-transform"
    />
  </motion.button>
</Link>
              
              {/* <Link to="/projects">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
  >
    View Portfolio
  </motion.button>
</Link> */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;