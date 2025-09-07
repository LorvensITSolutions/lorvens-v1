import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import HeroBg from "../assets/website.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-start h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-3xl text-left space-y-6">
        {/* Main Heading */}
        <motion.h1
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
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
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl max-[420px]:text-sm"
        >
          At <strong className="text-orange-500">YES LORVENS</strong>, we help
          startups & enterprises launch websites, apps, and full-stack digital
          solutions tailored for real results.
        </motion.p>

        {/* Input + Button */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-md bg-gray-200 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 h-12 sm:h-14 max-[420px]:w-full"
          />
          <button className="sm:w-auto bg-orange-500 text-white px-6 sm:px-8 h-12 sm:h-14 rounded-md hover:bg-orange-600 transition-all font-medium shadow-lg">
            Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
