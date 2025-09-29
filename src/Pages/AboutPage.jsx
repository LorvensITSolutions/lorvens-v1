import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  Lightbulb, 
  Users, 
  Target, 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Eye, 
  Star, 
  Award, 
  TrendingUp, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Rocket,
  Code,
  Brain,
  Heart
} from "lucide-react";

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Hero Section with Parallax
const IntroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -150]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      <FloatingElements />
      
      {/* Dynamic Background with Mouse Tracking */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          y: y2,
          x: mousePosition.x * 0.5,
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Geometric Shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-6 h-6 border-2 border-orange-400 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ y: y3 }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-4 h-4 bg-blue-400 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ y: y1 }}
      />

      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto"
        style={{ y: y1, opacity, scale }}
      >
        {/* Startup Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-50 
                     border border-orange-200 rounded-full mb-8 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Rocket className="h-4 w-4 text-orange-600" />
          </motion.div>
          <span className="text-sm font-semibold text-orange-700">Building the Future • One Innovation at a Time</span>
          <motion.div
            className="w-2 h-2 bg-orange-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Main Title with Enhanced Animation */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-gray-900 via-orange-600 to-purple-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            style={{ backgroundSize: "200% 100%" }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Who We
          </motion.span>{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Are
          </motion.span>
        </motion.h1>

        {/* Enhanced Description Grid */}
 {/* Enhanced Description Grid */}
<motion.div
  className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  {/* Row 1 - Text only */}
  <motion.p 
    className="text-lg sm:text-xl leading-relaxed text-gray-700"
    whileInView={{ x: [-20, 0] }}
    transition={{ duration: 0.8 }}
  >
    At <span className="font-bold text-orange-600">YES LORVENS</span>, we're not just another tech company. We're digital architects crafting tomorrow's solutions today.
  </motion.p>

  <motion.p 
    className="text-base sm:text-lg leading-relaxed text-gray-600"
    whileInView={{ x: [20, 0] }}
    transition={{ duration: 0.8 }}
  >
    Our mission is crystal clear: empower businesses to grow smarter, faster, and stronger with cutting-edge digital solutions that make a real difference.
  </motion.p>

  {/* Row 2 - Cards only */}
  <motion.div
    className="flex items-center gap-4 p-4 bg-white/70 rounded-2xl border border-orange-100 shadow-sm"
    whileHover={{ scale: 1.02, y: -2 }}
    transition={{ duration: 0.3 }}
  >
    <Brain className="h-8 w-8 text-orange-600" />
    <div>
      <h3 className="font-bold text-gray-900">Innovation-First Mindset</h3>
      <p className="text-sm text-gray-600">Transforming ideas into impact</p>
    </div>
  </motion.div>

  <motion.div
    className="flex items-center gap-4 p-4 bg-white/70 rounded-2xl border border-orange-100 shadow-sm"
    whileHover={{ scale: 1.02, y: -2 }}
    transition={{ duration: 0.3 }}
  >
    <Heart className="h-8 w-8 text-purple-600" />
    <div>
      <h3 className="font-bold text-gray-900">Human-Centered Design</h3>
      <p className="text-sm text-gray-600">Technology that serves people</p>
    </div>
  </motion.div>
</motion.div>


        {/* Interactive Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { number: "2025", label: "Founded", icon: Rocket },
            { number: "∞", label: "Possibilities", icon: Sparkles },
            { number: "100%", label: "Passion", icon: Heart },
            { number: "24/7", label: "Innovation", icon: Zap },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg group cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl mb-3 text-white group-hover:shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="h-6 w-6" />
              </motion.div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Discover Our Story</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.button> */}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-orange-600 rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Enhanced Core Values Section with Interactive Cards
const FeaturesSection = () => {
  const features = [
    {
      title: "Innovation",
      desc: "Pioneering tomorrow's technology today. We don't just follow trends—we create them.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      hoverColor: "hover:from-yellow-400 hover:to-orange-500",
    },
    {
      title: "Expertise",
      desc: "Deep technical knowledge meets creative problem-solving across every project we undertake.",
      icon: <Users className="h-8 w-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      hoverColor: "hover:from-blue-400 hover:to-blue-600",
    },
    {
      title: "Collaboration",
      desc: "Your vision + Our expertise = Extraordinary results. We're partners, not just providers.",
      icon: <Target className="h-8 w-8" />,
      color: "from-red-400 to-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      hoverColor: "hover:from-red-400 hover:to-red-600",
    },
    {
      title: "Reliability",
      desc: "Consistent delivery, transparent communication, and unwavering support you can count on.",
      icon: <ShieldCheck className="h-8 w-8" />,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      hoverColor: "hover:from-green-400 hover:to-emerald-600",
    },
    {
      title: "Future-Ready",
      desc: "Scalable solutions built for growth, designed to evolve with your business needs.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      hoverColor: "hover:from-purple-400 hover:to-purple-600",
    },
    {
      title: "Sustainable Impact",
      desc: "Building technology that's good for business and good for the planet.",
      icon: <Leaf className="h-8 w-8" />,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      hoverColor: "hover:from-green-500 hover:to-teal-600",
    },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, orange 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-full mb-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-4 w-4 text-orange-600" />
            </motion.div>
            <span className="text-sm font-semibold text-orange-700">What Drives Us</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent">
              Core Values
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The principles that shape every decision, guide every interaction, and drive every innovation
          </motion.p>
        </div>

        {/* Interactive Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                         transition-all duration-500 ${feature.bgColor} border border-white/50 cursor-pointer`}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 
                            group-hover:opacity-10 transition-opacity duration-500`}
                whileHover={{ opacity: 0.15 }}
              ></motion.div>

              {/* Animated Icon Container */}
              <motion.div
                className={`relative z-10 inline-flex items-center justify-center w-16 h-16 
                           bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 group-hover:shadow-xl`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className="text-white">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 
                            group-hover:text-orange-700 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                >
                  {feature.desc}
                </motion.p>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0, rotate: -90 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-5 w-5 text-orange-600" />
              </motion.div>

              {/* Interactive Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent 
                          group-hover:border-orange-200 transition-colors duration-300"
                whileHover={{
                  borderColor: "rgba(251, 146, 60, 0.5)",
                  boxShadow: "0 0 20px rgba(251, 146, 60, 0.2)"
                }}
              ></motion.div>

              {/* Ripple Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-white opacity-0"
                whileHover={{
                  opacity: [0, 0.1, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 0.6 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Enhanced Belief Section with Parallax and Interactive Elements
const BeliefSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [1000, 2000], [0, -100]);
  const y2 = useTransform(scrollY, [1000, 2000], [0, -50]);

  const [isMobile, setIsMobile] = useState(false);

  // detect mobile on mount + resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const beliefs = [
    {
      title: "Our Vision",
      desc: "To be the catalyst that transforms ambitious ideas into world-changing realities.",
      extra: "We envision a future where technology seamlessly enhances human potential, creating opportunities for growth, innovation, and meaningful impact across every industry we touch.",
      icon: <Eye className="h-8 w-8" />,
      gradient: "from-purple-500 to-indigo-600",
      particles: "purple",
    },
    {
      title: "Our Mission",
      desc: "Empowering businesses through human-centered digital transformation and innovation.",
      extra: "We bridge the gap between cutting-edge technology and real-world solutions, ensuring every project we undertake creates lasting value and drives sustainable growth.",
      icon: <Target className="h-8 w-8" />,
      gradient: "from-orange-500 to-red-600",
      particles: "orange",
    },
    {
      title: "Our Team",
      desc: "A diverse collective of dreamers, builders, and innovators united by shared purpose.",
      extra: "Our strength lies in our diversity—combining fresh perspectives with proven expertise to tackle challenges others won't even attempt. Together, we build the impossible.",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-600",
      particles: "blue",
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white to-purple-50/80"
        style={{ y: y1 }}
      />

      {/* Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-orange-300 rotate-45 opacity-20"
        animate={{ rotate: [45, 135, 45] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ y: y1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-purple-100 
                       border border-orange-200 rounded-full mb-8 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-4 w-4 text-orange-600" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-700 to-purple-700 bg-clip-text text-transparent">
              Our Foundation Story
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-purple-600 bg-clip-text text-transparent">
              What We Believe
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Every startup begins with a belief. Ours is that{" "}
            <motion.span 
              className="font-bold text-orange-600"
              whileHover={{ scale: 1.05 }}
            >
              technology + creativity + purpose
            </motion.span>{" "}
            can change the world. Here's how we're making it happen.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 80, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative h-full p-8 rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl border border-white/20
                          group-hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${belief.gradient} opacity-0 
                              group-hover:opacity-5 transition-opacity duration-500`}
                ></motion.div>

                {/* Icon */}
                <motion.div
                  className={`relative z-10 inline-flex items-center justify-center w-16 h-16 
                             bg-gradient-to-br ${belief.gradient} rounded-2xl shadow-lg mb-6 group-hover:shadow-xl`}
                >
                  <div className="text-white">{belief.icon}</div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-6 
                              group-hover:text-orange-700 transition-colors duration-300"
                  >
                    {belief.title}
                  </motion.h3>
                  
                  <motion.p className="text-gray-700 text-base leading-relaxed mb-6">
                    {belief.desc}
                  </motion.p>
                  
                  {/* Extra line */}
                  {isMobile ? (
                    // always visible on mobile
                    <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-orange-200 pl-4">
                      {belief.extra}
                    </p>
                  ) : (
                    // hover on desktop
                    <motion.p
                      className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-orange-200 pl-4
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      {belief.extra}
                    </motion.p>
                  )}
                </div>

                {/* Arrow */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${belief.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Enhanced Milestones Section with More Interactivity
const MilestonesSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [2000, 3000], [0, -100]);
  const y2 = useTransform(scrollY, [2000, 3000], [0, -50]);
  const [activeIndex, setActiveIndex] = useState(0);

  const achievements = [
    { 
      icon: <Rocket className="h-6 w-6" />, 
      text: "Startup Innovation", 
      desc: "Fresh perspectives driving breakthrough solutions",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />, 
      text: "Rapid Growth", 
      desc: "Scaling impact through strategic partnerships",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <Globe className="h-6 w-6" />, 
      text: "Global Vision", 
      desc: "Building solutions for worldwide impact",
      color: "from-blue-500 to-purple-500"
    },
    { 
      icon: <CheckCircle2 className="h-6 w-6" />, 
      text: "Quality First", 
      desc: "Excellence in every line of code we write",
      color: "from-purple-500 to-pink-500"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Dynamic Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: y2 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600/20 to-purple-600/20 
                         border border-orange-500/30 rounded-full mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Award className="h-4 w-4 text-orange-400" />
              </motion.div>
              <span className="text-sm font-semibold text-orange-300">Our Startup Journey</span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-orange-300 to-purple-300 bg-clip-text text-transparent">
                Building Tomorrow
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              As a young startup, every day is a new milestone. We're not just building a company—we're crafting a{" "}
              <motion.span 
                className="font-bold text-orange-400"
                whileHover={{ scale: 1.05 }}
              >
                legacy of innovation
              </motion.span>{" "}
              that will shape the future of digital transformation.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg leading-relaxed text-gray-400 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From our first line of code to our boldest dreams, every step forward is powered by{" "}
              <span className="font-semibold text-white">passion, purpose, and unlimited potential</span>.
            </motion.p>

            {/* Interactive Achievement Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer
                             ${activeIndex === idx 
                               ? 'bg-white/10 border-orange-400/50 shadow-lg' 
                               : 'bg-white/5 border-white/10 hover:bg-white/10'
                             }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIndex(idx)}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} shadow-lg`}
                      animate={activeIndex === idx ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: activeIndex === idx ? Infinity : 0 }}
                    >
                      <div className="text-white">
                        {achievement.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-1">
                        {achievement.text}
                      </h4>
                      <motion.p
                        className="text-xs text-gray-500"
                        animate={{ opacity: activeIndex === idx ? 1 : 0.7 }}
                      >
                        {achievement.desc}
                      </motion.p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeIndex === idx && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-purple-400 rounded-r"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Interactive Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Dynamic Glow Effect */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative z-10 overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Startup Innovation"
                  className="w-full max-w-lg object-cover h-96 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Interactive Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.h3
                      className="text-xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      Innovation in Action
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      Where creativity meets technology
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Interactive Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg
                          flex items-center justify-center cursor-pointer"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg
                          flex items-center justify-center cursor-pointer"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Star className="h-5 w-5 text-white" />
              </motion.div>

              {/* Code Snippet Floating Element */}
              <motion.div
                className="absolute top-1/2 -left-8 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2 text-xs">
                  <Code className="h-3 w-3 text-orange-400" />
                  <span className="text-gray-300 font-mono">building.future()</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Call to Action Section
const CallToActionSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="relative py-20 px-6 lg:px-20 bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic Background Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)",
            "linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "20px 20px" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <Rocket className="h-4 w-4 text-white" />
          <span className="text-sm font-semibold text-white">Ready to Launch?</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Build the Future Together
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your vision + Our innovation = Extraordinary results. Ready to transform your ideas into reality?
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/contact">
  <motion.button
    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold
               rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
  >
    <span>Start Your Project</span>
    <motion.div
      animate={{ x: isHovered ? 5 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowRight className="h-5 w-5" />
    </motion.div>
  </motion.button>
</Link>

   <Link to="/services">
  <motion.button
    className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold
               rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>Learn More</span>
  </motion.button>
</Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-75"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-sm font-medium">Trusted by forward-thinking companies</div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-2 text-sm">5.0 rating</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Main About Page Component with Enhanced Scroll Progress
const AboutPage = () => {
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scrollProgress = useSpring(useTransform(scrollY, [0, 5000], [0, 1]), springConfig);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 z-50 shadow-lg"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />
      
      {/* Progress Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 z-40 blur-sm"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />

      <div className="pt-0">
        <IntroSection />
        <FeaturesSection />
        <BeliefSection />
        <MilestonesSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default AboutPage;