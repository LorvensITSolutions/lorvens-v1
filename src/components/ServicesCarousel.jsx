import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Code, Smartphone, Palette, Rocket, Server, Cloud } from "lucide-react";

const services = [
  { title: "Web Development", desc: "Responsive websites crafted for performance.", icon: <Code className="h-8 w-8 text-orange-500 mx-auto" /> },
  { title: "Mobile Applications", desc: "Native & cross-platform mobile apps.", icon: <Smartphone className="h-8 w-8 text-orange-500 mx-auto" /> },
  { title: "UI/UX Design", desc: "Beautiful and intuitive designs.", icon: <Palette className="h-8 w-8 text-orange-500 mx-auto" /> },
  { title: "Cloud Deployment", desc: "Deploy and scale your apps reliably.", icon: <Cloud className="h-8 w-8 text-orange-500 mx-auto" /> },
];

const ServicesCarousel = () => {
  return (
    <section className="bg-orange-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
      </div>
      <div className="max-w-5xl mx-auto relative group">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" fadeEffect={{ crossFade: true }} autoplay={{ delay: 3000 }} speed={1200} loop slidesPerView={1} className="pb-10">
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-sm border border-orange-100 hover:border-orange-400 transition-all duration-700 p-6 text-center flex flex-col justify-center max-w-md mx-auto">
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-orange-500 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesCarousel;
