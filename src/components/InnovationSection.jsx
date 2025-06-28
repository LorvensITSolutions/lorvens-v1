import React, { useState } from "react";
import { Lightbulb, Rocket, Building2, UserSearch } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  textVariant,
  scale,
  staggerContainer,
} from "../utils/motion";
import ContactModal from "../components/ContactModal";

const services = [
  {
    title: "Web Development",
    icon: <Lightbulb className="h-12 w-12 text-orange-500" />,
    desc: "Custom websites that are fast, scalable, and built for performance, aligned with your brand and business goals.",
  },
  {
    title: "Mobile Applications",
    icon: <Rocket className="h-12 w-12 text-orange-500" />,
    desc: "Build native and cross-platform mobile apps with seamless UX and robust functionality for iOS and Android.",
  },
  {
    title: "Startup Acceleration",
    icon: <Building2 className="h-12 w-12 text-orange-500" />,
    desc: "LORVENS partners with startups to turn their ideas into real, working MVPs and scalable products.",
  },
  {
    title: "Tech Talent as a Service",
    icon: <UserSearch className="h-12 w-12 text-orange-500" />,
    desc: "Get access to highly skilled designers, developers, and strategists on demand to supercharge your project.",
  },
];

const InnovationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-[#FFF6E5] py-20 px-4 md:px-12 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-100 rounded-full z-0 blur-3xl"
      />

      {/* Section Header */}
      <motion.div
        variants={staggerContainer(0.2, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2
          variants={textVariant(0.1)}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Innovation @ LORVENS
        </motion.h2>
        <motion.div
          variants={scale(0.2)}
          className="w-20 h-1 mx-auto bg-orange-500 mt-3 mb-5 rounded-full"
        />
        <motion.p
          variants={fadeIn("up", 0.3)}
          className="max-w-3xl mx-auto text-gray-700 text-lg"
        >
          At <span className="text-orange-500 font-semibold">LORVENS</span>,
          innovation isn’t a service — it’s our core DNA. We create elegant,
          scalable digital products by combining deep tech expertise with
          creativity and strategy.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={staggerContainer(0.25, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn("up", index * 0.2)}
            whileHover={{ scale: 1.03 }}
            className="group flex items-start gap-4 bg-white rounded-2xl shadow-md p-6 hover:shadow-orange-300 transition-all duration-300 border border-orange-100"
          >
            <motion.div
              variants={scale(index * 0.3)}
              className="transition-transform duration-300"
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Contact Us Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-xl hover:bg-orange-600 transition-all duration-300"
        >
          📬 Contact Us
        </motion.button>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default InnovationSection;
