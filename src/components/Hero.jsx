import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../assets/website.jpg"; // Import image normally as URL
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const Hero = React.memo(() => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-start h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: "#111827", // Fallback color for instant load
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
      {/* Content - single container for viewport optimization */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-left space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Heading */}
        <motion.h1
          variants={headingVariants}
          className="font-extrabold leading-snug"
        >
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap max-[420px]:text-2xl">
            Digital solutions built
          </span>
          <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight whitespace-nowrap max-[420px]:text-2xl">
            <span className="text-white">for </span>
            <span className="text-orange-500">growth & scale</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={textVariants}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl max-[420px]:text-sm"
        >
          At <strong className="text-orange-500">YES LORVENS</strong>, we help
          startups & enterprises launch websites, apps, and full-stack digital
          solutions tailored for real results.
        </motion.p>
        {/* Input + Button */}
        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-md bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent h-12 sm:h-14 max-[420px]:w-full transition-all duration-200"
          />
          <motion.button 
            className="sm:w-auto bg-orange-500 text-white px-6 sm:px-8 h-12 sm:h-14 rounded-md hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Work Together
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
