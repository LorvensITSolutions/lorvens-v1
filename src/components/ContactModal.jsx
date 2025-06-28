import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", form);
    // Optionally send data to backend here
    setForm({ name: "", email: "", message: "" });
    onClose(); // close modal
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative"
            initial={{ y: 100, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
