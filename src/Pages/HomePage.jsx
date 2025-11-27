import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Cog,
  Monitor,
  TrendingUp,
  Lightbulb,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InnovationSection from "../components/InnovationSection";

// ⚡ Balanced Animation Variants - Fast & Smooth
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const iconBounce = {
  hover: {
    scale: 1.15,
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

// Enhanced Partner cards
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
    title: "Smooth Experience",
    desc: "Interfaces designed for user delight and engagement",
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
    desc: "We use the latest technology and fresh ideas and powerful execution.",
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E5] via-[#FFF8EB] to-[#FFEFDB] text-[#1F1F1F] overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Innovation Section */}
      <InnovationSection />

      {/* ⚡ Enhanced Why Choose Us Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-800 font-medium mb-4"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(255, 165, 0, 0.2)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} />
              </motion.div>
              <span>Why Choose Us</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#0B2149] via-orange-600 to-[#0B2149] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Success, Our Mission
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Choosing the right partner can make or break your digital journey.
              Here's why industry leaders trust us with their most ambitious
              projects.
            </motion.p>
          </motion.div>

          {/* Grid Cards - Enhanced Effects */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} 
                           border border-orange-200/50 backdrop-blur-sm
                           hover:border-orange-400/70 transition-all duration-300 
                           flex flex-col justify-between h-full min-h-[280px]
                           shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden`}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                custom={index}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-orange-400/0 group-hover:from-orange-400/10 group-hover:to-transparent transition-all duration-300"
                  initial={false}
                />

                {/* Animated Top Border */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />

                <div className="relative z-10">
                  {/* Icon Container with Hover Effect */}
                  <motion.div
                    className="w-16 h-16 flex items-center justify-center rounded-2xl 
                               bg-gradient-to-br from-white to-orange-50 
                               border-2 border-orange-300/50 mb-6 shadow-lg group-hover:shadow-xl
                               transition-shadow duration-300"
                    variants={iconBounce}
                    whileHover="hover"
                  >
                    {card.icon}
                  </motion.div>

                  {/* Title with Hover Effect */}
                  <motion.h3
                    className="text-2xl font-bold text-[#0B2149] mb-3 group-hover:text-orange-700 transition-colors duration-300"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Animated Divider */}
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      className="h-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                    <motion.div
                      className="h-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 16 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.div
                      className="h-1 w-2 bg-orange-300 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-base leading-relaxed flex-grow group-hover:text-gray-800 transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>

                {/* Sparkle Effect on Hover */}
                <motion.div
                  className="absolute top-4 right-4 text-orange-400/0 group-hover:text-orange-400/70 transition-all duration-300"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles size={18} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ⚡ Enhanced Final CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center relative">
        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* CTA Header */}
          <motion.div className="mb-4 mt-0" variants={fadeInUp}>
  <motion.div
    className="inline-flex items-center gap-2 px-6 py-2.5 
               bg-gradient-to-r from-orange-100 to-yellow-100 
               rounded-full text-orange-800 font-semibold 
               mb-4 shadow-md"
    whileHover={{ scale: 1.05, y: -2 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
  >
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
    >
      <Sparkles size={18} />
    </motion.div>

    <span className="tracking-wide">Ready to Transform?</span>
  </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-[#0B2149] via-orange-600 to-[#0B2149] bg-clip-text text-transparent">
              Build Something
            </span>
            <motion.span
              className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Extraordinary
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Transform your vision into reality with our cutting-edge digital
            solutions. Whether you're a startup dreaming big or an enterprise
            scaling new heights —
            <span className="text-orange-600 font-semibold">
              {" "}
              we're your catalyst for success.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeInUp}
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 
                 bg-gradient-to-r from-orange-600 to-yellow-500 text-white 
                 font-bold text-lg rounded-2xl shadow-xl 
                 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10">Start Your Project</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
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

          {/* Trust Indicators with Animation */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-500"
            variants={fadeInUp}
          >
            {[
              { color: "bg-green-500", text: "Experienced Team" },
              { color: "bg-blue-500", text: "100% Satisfaction Guarantee" },
              { color: "bg-purple-500", text: "24/7 Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-2 h-2 ${item.color} rounded-full`}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;