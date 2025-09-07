import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import useContactStore from "../stores/useContactStore";

const ContactModal = ({ isOpen, onClose }) => {
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
    success,
    loading,
  } = useContactStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "subject") setSubject(value);
    else if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm();
    if (success) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      onClose();
    }
  };

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative z-[1010]"
          initial={{ y: 50, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 z-[1020]"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ContactModal;
