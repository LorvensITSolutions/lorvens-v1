import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Mobile App Development",
    description:
      "We craft scalable, feature-rich, and user-friendly mobile applications for Android and iOS platforms. Our mobile apps are tailored to meet user demands and business goals, ensuring seamless performance and cutting-edge user experience.",
    fullDetails:
      "At Lorvens IT Solutions, we specialize in crafting robust, scalable, and intuitive mobile applications for Android and iOS platforms. Whether you're a startup aiming to launch an MVP or an enterprise modernizing its mobile strategy, our development process ensures high performance, security, and user satisfaction. We leverage both native development (Kotlin for Android, Swift for iOS) and cross-platform frameworks like React Native and Flutter to meet your unique business goals efficiently.Our UX-first design philosophy ensures that your users are at the center of every interaction. We create wireframes, conduct user testing, and refine the design until it provides a seamless and engaging experience. From gesture-based navigation to animations and responsive layouts, we ensure every screen reflects your brand identity and enhances usability.Beyond the frontend, our mobile solutions are backed by powerful APIs, real-time databases, offline capabilities, and robust authentication systems. We integrate with third-party services like Firebase, Stripe, Google Maps, and more. We also guide you through publishing your app on the App Store and Google Play, offering maintenance and performance monitoring post-launch.Our mobile apps are not just tools—they’re solutions designed to solve real-world problems, streamline business operations, and create long-term value. Let us help you take your mobile vision from idea to reality.",
    image: "https://images.unsplash.com/photo-1663245482988-22fad02654e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Web App Development",
    description:
      "",
    fullDetails:
      "",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "",
    fullDetails:
      "",
    image: "https://images.unsplash.com/photo-1506617679926-3c56c0eed900?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTQ4MjQ2NHx8ZW58MHx8fHx8",
  },
  {
    title: "Portfolio Websites",
    description:
      "Create a strong digital presence with a personalized, visually appealing portfolio. We build responsive and stylish websites that reflect your personality, brand, and achievements.",
    fullDetails:
      "",
    image: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODA1MjY1Njh8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI & Automation",
    description:
      "Incorporate cutting-edge AI solutions into your business processes. We provide intelligent automation, predictive analytics, chatbots, and custom machine learning tools for smarter operations.",
    fullDetails:
      "",
    image: "https://media.istockphoto.com/id/1493495125/photo/artificial-intelligence-and-automated-machine-learning-language-blue-digital-user-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qq5o5YR3KJdN1zBVD_IiZRbvBa8L-IZZD8Dj3TxL4WY=",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online reach with our full-suite digital marketing services including SEO, SEM, content creation, email marketing, and performance tracking.",
    fullDetails:
      "",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "IT Consulting",
    description:
      "Optimize your digital strategy with expert IT consultation. We help businesses choose the right technologies, plan infrastructure, migrate systems, and ensure digital transformation success.",
    fullDetails:
      "",
    image: "https://images.unsplash.com/photo-1536148935331-408321065b18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww",
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[parseInt(id)];

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl text-red-600 font-semibold">Service not found.</h1>
        <Link to="/services" className="mt-6 inline-block text-blue-600 underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] text-[#1F1F1F] dark:bg-[#0d0d0d] dark:text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]" />
      </div>

      <Navbar />

      <motion.div
        className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-orange-700 dark:text-orange-400 mb-4">
            {service.title}
          </h1>
          <p className="text-lg leading-relaxed mb-6">{service.fullDetails}</p>
          <Link
            to="/services"
            className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Back to Services
          </Link>
        </div>
      </motion.div>

    </div>
  );
};

export default ServiceDetail;
