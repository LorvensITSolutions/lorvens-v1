// ContactPage.jsx
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Globe,
  MessageCircle,
} from "lucide-react";
import useContactStore from "../stores/useContactStore";
import "./ProjectPage.css";

// -----------------------------------------
// Parallax Background
// -----------------------------------------
const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -500]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-300 to-orange-400 blur-xl opacity-10 rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-400 blur-xl opacity-10 rounded-full"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-r from-pink-300 to-rose-400 blur-xl opacity-10 rounded-full"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-r from-green-300 to-teal-400 blur-xl opacity-10 rounded-full"
      />
    </div>
  );
};

// -----------------------------------------
// UPDATED ContactInfoCard with Icon Left + Title Right
// -----------------------------------------
const ContactInfoCard = ({ icon: Icon, title, info, delay = 0, gradient }) => {
  // Convert info safely
  const safeInfo = String(info || "");

  // Detect Content
  const isEmail = safeInfo.includes("@");
  const isPhone = safeInfo.includes("+91");
  const isLocation = !isEmail && !isPhone;

  // Extract lines
  const lines = safeInfo.split("\n").filter(Boolean);
  const email = isEmail ? lines[0] : null;
  const phones = isPhone ? lines.slice(0, 2) : [];
  const location = isLocation ? safeInfo : null;
  const description = lines[2] || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-orange-100 transition-all duration-300 group"
    >
      {/* TOP ROW: Icon + Title */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          initial={{ rotate: 0, opacity: 1 }}
          animate={{
            rotate: [0, 8, -8, 0],
            opacity: [1, 0.8, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ rotate: 5, scale: 1.15 }}
          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient}`}
        >
          <Icon size={28} className="text-white" />
        </motion.div>

        <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="text-gray-700 leading-relaxed space-y-1">

        {/* EMAIL */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
          >
            {email}
          </a>
        )}

        {/* PHONE NUMBERS */}
        {phones.length > 0 &&
          phones.map((number, index) => (
            <a
              key={index}
              href={`tel:${number}`}
              className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
            >
              {number}
            </a>
          ))}

        {/* LOCATION → Google Maps */}
        {location && !email && !isPhone && (
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#FFA559] cursor-pointer transition-all duration-300 block"
          >
            {location}
          </a>
        )}

        {/* Description */}
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </motion.div>
  );
};

// -----------------------------------------
// Contact Page
// -----------------------------------------
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
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E5] via-orange-50 to-[#FFF6E5] relative overflow-hidden">
      <ParallaxBackground />

      {/* HERO */}
      <motion.section
        style={{ y: headerY, opacity: headerOpacity }}
        className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 py-16 sm:py-20 lg:py-28 text-center"
      >
        <MessageCircle size={48} className="text-white mx-auto mb-6" />

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
          Join{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
            YES LORVENS
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mt-3 mb-6">
          Build Your Future with Us
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
          At <span className="font-bold text-yellow-300">YES LORVENS</span>, we
          foster a culture centered on innovation, collaboration, and
          excellence.
        </p>
      </motion.section>

      {/* CONTACT SECTION */}
      <section className="bg-gradient-to-r from-gray-50 to-orange-50 py-14">
        <div className="text-center mb-10">
          <Globe size={40} className="text-orange-500 mx-auto mb-2" />
          <h2 className="text-4xl font-bold text-gray-800">
            Get In{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Ready to start your journey with us? Contact us anytime.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 px-6 lg:px-20">
          
          {/* FORM */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="xl:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-orange-100">
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-xl shadow-sm border-gray-200"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-xl shadow-sm border-gray-200"
                />

                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  className="w-full p-3 border rounded-xl shadow-sm border-gray-200"
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full p-3 border rounded-xl shadow-sm border-gray-200 resize-none"
                  rows="5"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>

              {success && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  Message sent successfully!
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-xl">
                  {error}
                </div>
              )}
            </div>
          </motion.div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
            <ContactInfoCard
  icon={Mail}
  title="Email Us"
  info={`yeslorvenssolutions@gmail.com\nConnect with our team for any inquiries`}
  delay={0.05}
  gradient="from-green-500 to-green-600"
/>


            <ContactInfoCard
              icon={Phone}
              title="Call Us"
              info={`+91 7013814030\n+91 4031985921\nAvailable Mon-Fri, 9AM-6PM`}
              delay={0.1}
              gradient="from-purple-500 to-purple-600"
            />

            <ContactInfoCard
              icon={MapPin}
              title="Visit Us"
              info="YES LORVENS SOLUTIONS PVT LTD, Flat No:530, ROAD NO 86, Jubilee Hills, Hyderabad, India, 500096"
              delay={0.15}
              gradient="from-blue-500 to-blue-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
