import React, { useState, useEffect } from "react";
import {
  Home,
  Info,
  Briefcase,
  Users,
  Phone,
  Menu,
  X,
  Folder,
} from "lucide-react";
import logoImg from "../assets/lorvensIT.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", icon: <Home size={20} />, label: "Home" },
  { to: "/about", icon: <Info size={20} />, label: "About Us" },
  { to: "/services", icon: <Briefcase size={20} />, label: "Services" },
  { to: "/projects", icon: <Folder size={20} />, label: "Projects" },
  { to: "/contact", icon: <Phone size={20} />, label: "Contact" },
];



const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFF6E5] shadow-[0_2px_4px_rgba(0,0,0,0.03)] z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="flex items-center"
          >
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
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <Link
                to={link.to}
                className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-300"
              >
                {link.icon}
                <motion.span whileHover={{ x: 4 }} className="transition-transform">
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <X size={28} className="animate-spin-in" />
          ) : (
            <Menu size={28} className="animate-pulse-once" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed w-full bg-[#FFF6E5] transition-all duration-500 ease-out z-40 ${
          open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-[#1F1F1F] font-medium text-lg py-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 hover:text-orange-600 transition-all duration-300"
              >
                {link.icon}
                <motion.span whileHover={{ x: 3 }}>{link.label}</motion.span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Animations */}
      <style jsx="true" global="true">{`
        @keyframes spin-in {
          from {
            transform: rotate(180deg);
            opacity: 0;
          }
          to {
            transform: rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes pulse-once {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-spin-in {
          animation: spin-in 0.3s ease-out;
        }
        .animate-pulse-once {
          animation: pulse-once 0.3s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;