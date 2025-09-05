import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";


import { 
  Monitor, 
  Smartphone, 
  TrendingUp, 
  Brain, 
  Palette, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Eye,
  Clock,
  Shield,
  CheckCircle2,
  Globe,
  Target,
  Users,
  Award
} from "lucide-react";


// Enhanced services data with icons and enhanced details
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Create dynamic web experiences using the latest technologies",
    fullDetails: "We build modern, fast, and secure web applications tailored to your business needs. From responsive design to progressive web apps, our solutions are built to perform and scale.",
    icon: <Monitor className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Integration", "Performance Optimization"],
    deliveryTime: "4-8 weeks",
  },
  {
    id: "mobile-development", 
    title: "Mobile App Development",
    description: "Transform your ideas into powerful mobile experiences",
    fullDetails: "Our team develops native and cross-platform mobile apps with excellent performance and intuitive user interfaces. Perfect for iOS and Android.",
    icon: <Smartphone className="h-8 w-8" />,
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Native iOS & Android", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications"],
    deliveryTime: "6-12 weeks",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Amplify your brand's reach with data-driven strategies",
    fullDetails: "We create targeted digital marketing campaigns including SEO, content marketing, and paid ads to boost your online visibility and conversions.",
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    deliveryTime: "2-4 weeks",
  },
  {
    id: "ai-ml-integration",
    title: "AI/ML Integrations", 
    description: "Leverage artificial intelligence to drive insights and automation",
    fullDetails: "We integrate AI and Machine Learning solutions into your products to automate processes, analyze data, and provide predictive insights for smarter business decisions.",
    icon: <Brain className="h-8 w-8" />,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    deliveryTime: "8-16 weeks",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Designing",
    description: "Design intuitive and engaging interfaces for users",
    fullDetails: "Our UI/UX design team creates visually appealing, user-friendly designs that enhance user experience and drive engagement.",
    icon: <Palette className="h-8 w-8" />,
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
    image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    deliveryTime: "3-6 weeks",
  },
  {
    id: "school-website",
    title: "School Website Development",
    description: "Build modern, interactive school websites",
    fullDetails: "We develop comprehensive school websites with features like student portals, teacher dashboards, and online admissions for an efficient educational experience.",
    icon: <GraduationCap className="h-8 w-8" />,
    gradient: "from-teal-500 to-blue-600",
    bgGradient: "from-teal-50 to-blue-50",
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Student Portal", "Teacher Dashboard", "Online Admissions", "Grade Management"],
    deliveryTime: "6-10 weeks",
  },
  {
    id: "portfolio-building",
    title: "Portfolio Building",
    description: "Create professional portfolios to showcase your work",
    fullDetails: "We help individuals and companies build digital portfolios that highlight achievements, projects, and skills, with optimized performance and design.",
    icon: <Briefcase className="h-8 w-8" />,
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: ["Personal Branding", "Project Showcases", "Contact Integration", "SEO Optimization"],
    deliveryTime: "2-4 weeks",
  },
  {
  id: "ecommerce-website",
  title: "E-Commerce Website",
  description: "Launch powerful online stores with secure payment and seamless shopping experiences",
  fullDetails: "We design and develop feature-rich e-commerce platforms that provide smooth shopping experiences. From product catalogs and secure checkouts to inventory management and analytics, our e-commerce solutions help you grow your business online.",
  icon: <ShoppingCart className="h-8 w-8" />,
  gradient: "from-emerald-500 to-green-600",
  bgGradient: "from-emerald-50 to-green-50",
  image: "https://images.pexels.com/photos/5632407/pexels-photo-5632407.jpeg?auto=compress&cs=tinysrgb&w=1200",
  features: ["Product Catalog", "Secure Payments", "Shopping Cart", "Order Management", "Mobile Friendly"],
  deliveryTime: "6-10 weeks",
},

];

// Hero Section with Parallax
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-green-400 to-teal-400 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        style={{ y: y1, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-50 
                     border border-orange-200 rounded-full mb-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-bold text-orange-700">Premium Solutions</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We provide a range of <span className="font-bold text-orange-600">cutting-edge solutions</span> designed to help your business grow and thrive in the digital landscape.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
        <Link to="/projects">
  <motion.button
    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
               text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>Explore Solutions</span>
    <ArrowRight className="h-5 w-5" />
  </motion.button>
</Link>
             <Link to="/projects">
      {/* <motion.button
        className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 
                   font-bold rounded-full border-2 border-gray-200 hover:border-orange-300 transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Eye className="h-5 w-5" />
        <span>View Portfolio</span>
      </motion.button> */}
    </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-orange-600 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <motion.div
        className="relative h-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden
                   group-hover:shadow-2xl transition-all duration-500"
        whileHover={{ 
          y: -15,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                        group-hover:opacity-5 transition-opacity duration-500`}></div>

        {/* Image Section with Parallax */}
        <div className="relative overflow-hidden h-64 sm:h-72">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onLoad={() => setImageLoaded(true)}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ 
              scale: imageLoaded ? 1 : 1.2, 
              opacity: imageLoaded ? 1 : 0 
            }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating Icon */}
          <motion.div
            className={`absolute top-6 right-6 w-14 h-14 bg-gradient-to-br ${service.gradient} 
                       rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-sm`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            whileHover={{ 
              scale: 1.1,
              rotate: 10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="text-white">
              {service.icon}
            </div>
          </motion.div>

          {/* Delivery Badge */}
          <motion.div
            className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full
                       border border-white/20 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-orange-600" />
              <span className="text-xs font-semibold text-gray-700">{service.deliveryTime}</span>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 p-8">
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 
                       transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
          >
            {service.description}
          </motion.p>

          {/* Features List */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
          >
            <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.7 + idx * 0.05 }}
                >
                  <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
        <Link to={`/service/${service.id}`} className="block w-full">
  <motion.button
    className="w-full py-4 px-6 bg-orange-500 text-white font-bold 
               rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
               flex items-center justify-center gap-3 group/btn
               hover:bg-orange-600 active:bg-orange-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
    whileHover={{ 
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <span>Explore Solution</span>
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isHovered ? 5 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
    </motion.div>
  </motion.button>
</Link>

        </div>

        {/* Animated Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-200/50
                     transition-colors duration-500"
          initial={{ scale: 0.9, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Proven Expertise",
      description: "Years of experience delivering world-class solutions",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "24/7 support and maintenance for peace of mind",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Standards",
      description: "International quality standards and best practices",
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, orange 2px, transparent 2px)",
              "radial-gradient(circle at 80% 80%, orange 2px, transparent 2px)",
              "radial-gradient(circle at 80% 20%, orange 2px, transparent 2px)",
              "radial-gradient(circle at 20% 80%, orange 2px, transparent 2px)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ backgroundSize: "50px 50px" }}
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 border border-orange-500/30 
                       rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-4 w-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">Why Choose Us</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-orange-300 to-white bg-clip-text text-transparent">
              Excellence Delivered
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just deliver projects — we deliver results that transform businesses
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 
                           bg-gradient-to-br ${reason.gradient} rounded-3xl shadow-lg mb-6
                           group-hover:shadow-2xl transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-white">
                  {reason.icon}
                </div>
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced CTA Section
const CTASection = () => {
  return (
    <motion.section
      className="relative py-20 px-6 lg:px-20 bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, white 2px, transparent 2px)",
              "radial-gradient(circle at 75% 75%, white 2px, transparent 2px)",
              "radial-gradient(circle at 75% 25%, white 2px, transparent 2px)",
              "radial-gradient(circle at 25% 75%, white 2px, transparent 2px)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ backgroundSize: "60px 60px" }}
        ></motion.div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl mb-10 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's transform your ideas into digital reality
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <Link to="/contact">
  <motion.button
    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-bold
               rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>Get Started Today</span>
    <ArrowRight className="h-5 w-5" />
  </motion.button>
</Link>
          
          <Link to="/projects">
  <motion.button
    className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white 
               text-white font-bold rounded-full hover:bg-white hover:text-orange-600 
               transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Eye className="h-5 w-5" />
    <span>View Our Work</span>
  </motion.button>
</Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Main Services Component
const Services = () => {
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scrollProgress = useSpring(useTransform(scrollY, [0, 4000], [0, 1]), springConfig);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-gray-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 z-50"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />

      <HeroSection />

      {/* Services Grid Section */}
      <section className="relative py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 
                         rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Our Solutions</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default Services;