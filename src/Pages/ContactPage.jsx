import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF6E5] pt-10 text-[#1F1F1F]">
      <motion.h1
        className="text-3xl pt-15 sm:text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Form Section */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Your Message</label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-600 transition-colors"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Info + Map */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-600 mt-1" />
              <p>
                  1st Floor, Flat No 530, Road No.86, Jubilee hills, Hyderabad, Telangana - 500096
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-orange-600 mt-1" />
              <p>Lorvensitsolutions.com</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-orange-600 mt-1" />
              <p>+91 9542935100, 9390575069</p>
            </div>
          </div>

          <motion.div
            className="overflow-hidden rounded-2xl shadow-xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.293147151777!2d78.38277847519137!3d17.44349640163486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e21e54b2f7%3A0x89ec8dd5f7a4de8f!2sMy%20Home%20Bhooja!5e0!3m2!1sen!2sin!4v1717743203741!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default ContactPage;
