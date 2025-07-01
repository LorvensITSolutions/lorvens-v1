import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Code,
  Smartphone,
  Palette,
  Rocket,
  Server,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Responsive websites crafted for performance, scalability, and visual impact.",
    icon: <Code className="h-10 w-10 text-orange-500 mx-auto group-hover:animate-pulse" />,
  },
  {
    title: "Mobile Applications",
    desc: "Native & cross-platform mobile apps with seamless user experience.",
    icon: <Smartphone className="h-10 w-10 text-orange-500 mx-auto group-hover:animate-pulse" />,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and intuitive designs to engage users effectively.",
    icon: <Palette className="h-10 w-10 text-orange-500 mx-auto group-hover:animate-pulse" />,
  },
  {
    title: "Startup Solutions",
    desc: "MVP to scaling, tailored services for early-stage startups.",
    icon: <Rocket className="h-10 w-10 text-orange-500 mx-auto group-hover:animate-pulse" />,
  },
  {
    title: "Custom APIs",
    desc: "Build secure, efficient backends and APIs for your product.",
    icon: <Server className="h-10 w-10 text-orange-500 mx-auto group-hover:animate-pulse" />,
  },
  {
    title: "Cloud Deployment",
    desc: "Deploy and scale your apps reliably with modern cloud tech.",
    icon: <Cloud className="h-10 w-10 text-orange-500 mx-auto group-hover:animate-pulse" />,
  },
];

const ServicesCarousel = () => {
  return (
    <section className="bg-[#FFF6E5] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          At <span className="text-orange-500 font-bold">LORVENS</span>, we deliver powerful, custom digital solutions tailored to your business.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative group">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:shadow-orange-200 p-8 text-center h-full transition-transform transform hover:-translate-y-1 group">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional custom arrow styling if needed */}
        <style jsx>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #f97316; /* Tailwind orange-500 */
            transition: transform 0.3s ease;
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServicesCarousel;
