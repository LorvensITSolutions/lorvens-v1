import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AI from "../assets/AI.jpg";
import DIGITAL from "../assets/DIGI_MARKETING.jpg";
import e_commerce from "../assets/E-COMMERCE.jpg";  
import mobile from "../assets/MOBILE_DEV.jpg"
import virtualClasses from '../assets/ONLINE_CLASS.jpg';
import web from "../assets/web.jpg";
import IT from "../assets/IT.jpg";
import portfolio from "../assets/PORTFOLIO.jpg";

export const services = [
  {
    title: "Mobile Solutions",
    tagline: "Native & Cross-Platform Excellence",
    description: "Transform your ideas into powerful mobile experiences. We build scalable iOS and Android applications with intuitive design, robust security, and seamless performance that grows with your business needs.",
    image: mobile,
    features: ["iOS & Android", "Cross-Platform", "Performance Optimized"]
  },
  {
    title: "Web Applications",
    tagline: "Modern, Fast & Secure",
    description: "Create dynamic web experiences that deliver results. From progressive web apps to enterprise solutions, we craft responsive, accessible, and high-performing applications tailored to your workflow.",
    image: web,
    features: ["Progressive Web Apps", "Enterprise Grade", "Cloud Ready"]
  },
  {
    title: "Learning Platforms",
    tagline: "Education Technology Solutions",
    description: "Bridge the gap between knowledge and learners with immersive educational platforms. We build scalable e-learning solutions that make education accessible, engaging, and effective for everyone.",
    image: virtualClasses,
    features: ["Interactive Learning", "Real-time Collaboration", "Accessible Design"]
  },
  {
    title: "E-Commerce Platforms",
    tagline: "Complete Commerce Solutions",
    description: "Launch and scale your online business with confidence. Our e-commerce solutions combine beautiful design with powerful functionality, secure payments, and analytics to drive sustainable growth.",
    image: e_commerce,
    features: ["Secure Payments", "Inventory Management", "Analytics Dashboard"]
  },
  {
    title: "Digital Portfolios",
    tagline: "Your Professional Presence",
    description: "Stand out in the digital landscape with a compelling portfolio that tells your story. We create responsive, SEO-optimized websites that showcase your work and attract opportunities.",
    image: portfolio,
    features: ["SEO Optimized", "Fast Loading", "Professional Design"]
  },
  {
    title: "AI Integration",
    tagline: "Intelligent Automation",
    description: "Harness the power of artificial intelligence to streamline operations and unlock insights. We implement responsible AI solutions that enhance productivity while maintaining human oversight.",
    image: AI,
    features: ["Process Automation", "Data Analytics", "Responsible AI"]
  },
  {
    title: "Digital Growth",
    tagline: "Strategic Marketing Solutions",
    description: "Amplify your brand's reach with data-driven marketing strategies. We combine creativity with analytics to deliver campaigns that build meaningful connections and drive measurable results.",
    image: DIGITAL,
    features: ["SEO & SEM", "Content Strategy", "Performance Tracking"]
  },
  {
    title: "Technology Consulting",
    tagline: "Strategic IT Guidance",
    description: "Navigate digital transformation with confidence. Our consultants help you make informed technology decisions, optimize infrastructure, and build sustainable digital strategies for long-term success.",
    image: IT,
    features: ["Digital Strategy", "Infrastructure Planning", "Technology Audit"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const Services = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,120,0,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,160,0,0.08)_0%,_transparent_50%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 pt-24 pb-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-sm font-medium mb-6"
            >
              ✨ Premium IT Services & Solutions
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent leading-tight">
              Services We Excel At
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Empowering businesses with innovative technology solutions. From concept to deployment, 
              we deliver scalable, secure, and user-centric digital experiences that drive real results.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Trusted by 500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-12 lg:px-20 pb-20">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid gap-8 md:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  {/* Content Side */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 rounded-full text-xs font-semibold mb-3">
                        {service.tagline}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link to={`/services/${index}`} className="inline-block">
                      <button className="group/btn bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-medium hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Explore Solution
                        <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="px-6 md:px-12 lg:px-20 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 text-white shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help you build something extraordinary. 
              Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </section>
      </main>

    </div>
  );
};

export default Services;