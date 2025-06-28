import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from '../assets/hero1.png';

const Hero = () => {
  return (
<section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-16 pb-16 container mx-auto">

      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Tagline Badge */}
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          <div className="flex items-center gap-2 bg-orange-100 w-fit px-4 py-2 rounded-full hover:bg-orange-200 transition-colors cursor-pointer group shadow-sm">
            <span className="text-orange-600 group-hover:scale-110 transition-transform">🚀</span>
            <span className="text-sm font-medium text-orange-800">Jumpstart with LORVENS</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
        >
          Digital solutions built for{' '}
          <span className="text-orange-500 inline-block relative">
            growth & scale
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-200/70 rounded-full"></span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          At <strong className="text-orange-500">LORVENS</strong>, we help startups & enterprises launch websites, apps, and full-stack digital solutions tailored for real results.
        </motion.p>

        {/* Email input + button */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col sm:flex-row gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-gray-700 shadow-sm"
          />
          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all hover:shadow-lg shadow-orange-200 active:scale-95">
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Right Column - Image */}
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team working on digital solutions"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
