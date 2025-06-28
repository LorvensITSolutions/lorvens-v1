import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "CEO, Innovix",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Lorvens truly exceeded our expectations. Their team was responsive, innovative, and highly skilled in delivering a top-notch digital solution.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, TechSprint",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Professional, timely, and quality-focused. The UI/UX and performance they delivered helped us scale smoothly.",
  },
  {
    name: "Rohan Das",
    role: "CTO, CloudPeak",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    feedback:
      "We collaborated with Lorvens for cloud deployment. Their understanding of modern infra helped us launch without issues.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex justify-center mb-3">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 mx-[1px] ${
          i < count ? "text-orange-500 fill-orange-500" : "text-gray-300"
        } transition-colors`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-[#FFF6E5] py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Hear from the amazing people and businesses we've partnered with.
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-md border border-orange-200 rounded-2xl p-6 text-center h-full flex flex-col items-center 
                         shadow-md hover:shadow-orange-200 hover:shadow-lg 
                         transition-transform transform hover:-translate-y-1 
                         relative before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-gradient-to-r before:from-orange-400 before:to-pink-500 before:z-[-1]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-4 border-orange-500 object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-orange-500 mb-2">{testimonial.role}</p>
              <StarRating count={testimonial.rating} />
              <p className="text-gray-700 text-sm leading-relaxed">“{testimonial.feedback}”</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
