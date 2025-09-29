// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRegClock } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-[#fff1dc] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="mb-4 inline-block px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-600">
            ⭐ Jump start your growth
          </div>

<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
  We craft digital solutions for <br />
  <span className="text-blue-600">Startups, Scaleups</span> <br />
  & Global Enterprises
</h1>
<p className="mt-4 text-lg text-gray-700">
  From websites to mobile apps, we turn ideas into impactful digital products.
</p>

        </motion.div>

        {/* Right Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4"
        >
          {[1, 2, 3].map((col, i) => (
            <div
              key={i}
              className="w-24 md:w-40 h-64 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={`/images/hero${col}.jpg`} // You must provide these images in the public/images folder
                alt={`hero-${col}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
