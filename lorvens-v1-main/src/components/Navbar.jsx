// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Home, Info, Briefcase, Phone, Menu, X, Folder } from "lucide-react";
import logoImg from "../assets/lorvensIT.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFF6E5] shadow-[0_2px_4px_rgba(0,0,0,0.05)] z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="flex items-center">
            <motion.img
              src={logoImg}
              alt="Lorvens Solutions"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#1F1F1F] font-medium text-base">
          <Link
            to="/"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              isActive("/") ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }`}
          >
            <Home size={20} /> Home
          </Link>

          <Link
            to="/about"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              isActive("/about") ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }`}
          >
            <Info size={20} /> About Us
          </Link>

          <Link
            to="/services"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              isActive("/services") ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }`}
          >
            <Briefcase size={20} /> Services
          </Link>

          <Link
            to="/projects"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              isActive("/projects") ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }`}
          >
            <Folder size={20} /> Projects
          </Link>

          <Link
            to="/contact"
            className={`flex items-center gap-2 transition-colors duration-300 ${
              isActive("/contact") ? "text-orange-600 font-semibold" : "hover:text-orange-600"
            }`}
          >
            <Phone size={20} /> Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed w-full bg-[#FFF6E5] transition-all duration-500 ease-out z-40 ${
          open ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 text-[#1F1F1F] font-medium text-lg py-4 px-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={isActive("/") ? "text-orange-600 font-semibold" : "hover:text-orange-600"}
          >
            <Home size={20} className="inline mr-2" /> Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={isActive("/about") ? "text-orange-600 font-semibold" : "hover:text-orange-600"}
          >
            <Info size={20} className="inline mr-2" /> About Us
          </Link>
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className={isActive("/services") ? "text-orange-600 font-semibold" : "hover:text-orange-600"}
          >
            <Briefcase size={20} className="inline mr-2" /> Services
          </Link>
          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className={isActive("/projects") ? "text-orange-600 font-semibold" : "hover:text-orange-600"}
          >
            <Folder size={20} className="inline mr-2" /> Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={isActive("/contact") ? "text-orange-600 font-semibold" : "hover:text-orange-600"}
          >
            <Phone size={20} className="inline mr-2" /> Contact
          </Link>
        </nav>
      </div>

      {open && <div className="fixed inset-0 bg-black/30 md:hidden z-30" onClick={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;
