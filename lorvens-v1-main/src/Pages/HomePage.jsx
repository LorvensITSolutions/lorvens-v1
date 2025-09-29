import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Cog,
  Monitor,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InnovationSection from "../components/InnovationSection";

// ✨ Enhanced Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.08,
    y: -8,
    rotateY: 5,
    boxShadow: "0px 20px 40px rgba(255, 165, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.2 },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 0.5, 0],
    scale: [0, 1.5, 2],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Enhanced Partner cards with better descriptions
const cards = [
  {
    id: 1,
    icon: <Users className="w-6 h-6 text-orange-600" />,
    title: "Experienced Team",
    desc: "Our design experts craft exceptional digital products with their extensive knowledge.",
    gradient: "from-orange-50 to-red-50",
  },
  {
    id: 2,
    icon: <Cog className="w-6 h-6 text-orange-600" />,
    title: "User-Centric Design",
    desc: "Products that truly match user needs and preferences.",
    gradient: "from-orange-50 to-yellow-50",
  },
  {
    id: 3,
    icon: <Monitor className="w-6 h-6 text-orange-600" />,
    title: "Seamless User Experience",
    desc: "Interfaces designed for user delight and engagement.",
    gradient: "from-orange-50 to-amber-50",
  },
  {
    id: 4,
    icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
    title: "Results Driven",
    desc: "We focus on growth and results that you can clearly see and track.",
    gradient: "from-orange-50 to-pink-50",
  },
  {
    id: 5,
    icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
    title: "Innovative Solutions",
    desc: "We use the latest technology, fresh ideas, and powerful execution.",
    gradient: "from-orange-50 to-purple-50",
  },
  {
    id: 6,
    icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
    title: "24/7 Support",
    desc: "Our team is available anytime to help and answer your questions.",
    gradient: "from-orange-50 to-blue-50",
  },
];
const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E5] via-[#FFF8EB] to-[#FFEFDB] text-[#1F1F1F] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{ y, opacity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]),
          opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]),
        }}
      />

      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-orange-400"
        variants={pulseVariants}
        animate="animate"
      >
        <Sparkles size={24} />
      </motion.div>
      <motion.div
        className="absolute top-3/4 right-1/4 text-yellow-500"
        variants={pulseVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      >
        <Zap size={20} />
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* ✨ Innovation Section */}
      <InnovationSection />

      {/* ✨ Enhanced Partner / Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative">
        {/* Section Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-yellow-100/30 rounded-3xl blur-3xl"
          variants={glowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-800 font-medium mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={16} />
              <span>Why Choose Us</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#0B2149] via-orange-600 to-[#0B2149] bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Yours Success, Our Mission
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Choosing the right partner can make or break your digital journey.
              Here's why industry leaders trust us with their most ambitious
              projects.
            </motion.p>
          </motion.div>

          {/* Enhanced Grid Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} 
                           border border-orange-200/50 backdrop-blur-sm
                           hover:border-orange-400/70 transition-all duration-500 
                           flex flex-col justify-between h-full min-h-[280px]
                           shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden`}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Card Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <motion.div
                    className="relative w-16 h-16 flex items-center justify-center rounded-2xl 
                               bg-gradient-to-br from-white to-orange-50 
                               border-2 border-orange-300/50 mb-6 shadow-lg group-hover:shadow-xl"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {/* Icon Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10">{card.icon}</div>
                  </motion.div>

                  {/* Enhanced Title */}
                  <motion.h3
                    className="text-2xl font-bold text-[#0B2149] mb-3 group-hover:text-orange-700 transition-colors duration-300"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Animated Divider */}
                  <motion.div
                    className="flex items-center gap-2 mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <motion.div
                      className="h-1 w-12 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                    <motion.div
                      className="h-1 w-4 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    />
                    <motion.div
                      className="h-1 w-2 bg-orange-300 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Enhanced Description */}
                  <motion.p
                    className="text-gray-700 text-base leading-relaxed flex-grow group-hover:text-gray-800 transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {card.desc}
                  </motion.p>
                </div>

                {/* Hover Arrow Effect */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg">
                    <ArrowRight size={16} />
                  </div>
                </motion.div>

                {/* Particle Effect */}
                <motion.div
                  className="absolute top-4 right-4 text-orange-300/50"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles size={16} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ✨ Enhanced Final CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-yellow-500/5 to-orange-500/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-1/4 w-2 h-2 bg-orange-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-20 right-1/3 w-3 h-3 bg-yellow-400 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Enhanced CTA Header */}
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full text-orange-800 font-semibold mb-6 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(255, 165, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} />
              </motion.div>
              <span>Ready to Transform?</span>
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 
                       bg-gradient-to-r from-[#0B2149] via-orange-600 via-yellow-500 to-[#0B2149] 
                       bg-clip-text text-transparent leading-tight"
            variants={fadeInUp}
            custom={1}
          >
            Build Something
            <motion.span
              className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Extraordinary
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
            custom={2}
          >
            Transform your vision into reality with our cutting-edge digital
            solutions. Whether you're a startup dreaming big or an enterprise
            scaling new heights —
            <span className="text-orange-600 font-semibold">
              {" "}
              we're your catalyst for success.
            </span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeInUp}
            custom={3}
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 
               bg-gradient-to-r from-orange-600 to-yellow-500 text-white 
               font-bold text-lg rounded-2xl shadow-xl 
               hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 
                 opacity-0 group-hover:opacity-20 pointer-events-none"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                />

                <span className="relative z-10">Start Your Project</span>

                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 
               bg-white/80 backdrop-blur-sm text-orange-600 
               font-semibold text-lg rounded-2xl border-2 border-orange-200
               hover:border-orange-400 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <span>View Our Work</span>
                <Monitor size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500"
            variants={fadeInUp}
            custom={4}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1, color: "#ea580c" }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium"> Expireance Team</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1, color: "#ea580c" }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-medium"> 100% Satisfaction Guarantee</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1, color: "#ea580c" }}
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="font-medium">24/7 Support</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll to Top Indicator */}
      {/* <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          className="w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className="rotate-[-90deg]" size={20} />
        </motion.button>
      </motion.div> */}
    </div>
  );
};

export default HomePage;
