import React, { useState } from "react";
import { motion } from "framer-motion";

// Add your own images here
const images = [
  // Developer coding in dark mode environment
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",

  // Team collaboration in a modern office
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",

  // Professional workspace with laptop and tech setup
  "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=80",

  "https://images.unsplash.com/photo-1669023414171-56f0740e34cd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];



const CompanySlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="w-full bg-gradient-to-b from-white to-slate-900 pt-10 pb-14">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl shadow-2xl border border-gray-300"
        >
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full object-cover h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] transition-all duration-700"
          />
        </motion.div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-orange-600 hover:text-white text-gray-800 rounded-full p-3 shadow-md transition z-10"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-orange-600 hover:text-white text-gray-800 rounded-full p-3 shadow-md transition z-10"
          aria-label="Next Slide"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                current === idx ? "bg-orange-600 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
