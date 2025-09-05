// ContactPage.jsx
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Globe,
  MessageCircle,
} from "lucide-react";
import useContactStore from "../stores/useContactStore"; // adjust path if needed

// --- ParallaxBackground (same as your previous implementation) ---
const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full opacity-10 blur-xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-10 blur-xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full opacity-10 blur-xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-10 blur-xl"
      />
    </div>
  );
};

// --- ContactInfoCard (defined here so it's not undefined) ---
const ContactInfoCard = ({ icon: Icon, title, info, delay = 0, gradient }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -5,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} mb-4`}
      >
        <Icon size={24} className="text-white" />
      </motion.div>
      <h3 className="font-bold text-gray-800 mb-2 text-lg group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{info}</p>
    </motion.div>
  );
};

// --- ContactPage (uses zustand store) ---
const ContactPage = () => {
  const {
    name,
    email,
    subject,
    message,
    setName,
    setEmail,
    setSubject,
    setMessage,
    submitForm,
    loading,
    success,
    error,
  } = useContactStore();

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E5] via-orange-50 to-[#FFF6E5] relative overflow-hidden">
      <ParallaxBackground />

      {/* Hero */}
      <motion.section
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-16 sm:py-20 lg:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center relative z-10">
          <div className="inline-block mb-6">
            <MessageCircle size={48} className="text-white mx-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            Join <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">YES LORVENS</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-6">
            Build Your Future with Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            At <span className="font-bold text-yellow-300">YES LORVENS</span>, we foster a culture centered on innovation, collaboration, and excellence.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-gray-50 to-orange-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="text-center mb-12 sm:mb-16">
          <Globe size={40} className="text-orange-500 mx-auto" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Ready to start your journey with us? Let's connect and discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="xl:col-span-2">
              <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-orange-100 relative overflow-hidden">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none"
                  />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none"
                  />
                  <textarea
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none resize-none"
                  />

                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" disabled={loading} className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center group disabled:opacity-50">
                    {loading ? "Sending..." : (<><Send size={18} className="mr-2" />Send Message</>)}
                  </motion.button>
                </form>

                {success && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl flex items-center">
                    <CheckCircle size={20} className="mr-2 text-green-600" />
                    Message sent successfully!
                  </motion.div>
                )}
                {error && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-red-100 text-red-700 rounded-xl">
                    {error}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
              <ContactInfoCard
                icon={Mail}
                title="Email Us"
                info={`yeslorvenspvt@gmail.com\nConnect with our team for any inquiries`}
                delay={0.2}
                gradient="from-green-500 to-green-600"
              />
              <ContactInfoCard
                icon={Phone}
                title="Call Us"
                info={`+91 9542935109\n+91 9390575069\nAvailable Mon-Fri, 9AM-6PM`}
                delay={0.3}
                gradient="from-purple-500 to-purple-600"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Visit Us"
                info="YES LORVENS SOLUTIONS PVT LTD, JUBILEE HILLS ROAD NO 86 Hyderabad, India"
                delay={0.1}
                gradient="from-blue-500 to-blue-600"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
