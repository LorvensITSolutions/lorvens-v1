// src/components/Footer.jsx
import React from "react";
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#FFF6E5] text-[#1F1F1F] pt-12 pb-6 px-4 sm:px-6 md:px-12 border-t border-orange-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

        {/* Brand */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-[#0B2149] mb-2 tracking-wide">
            YES LORVENS
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Crafting innovative tech solutions tailored to your business goals.
          </p>
          <div className="flex gap-4 mt-2 flex-wrap">
            <motion.a
              href="https://www.instagram.com/yeslorvenssolutionspvt"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-orange-600 hover:text-orange-700 transition cursor-pointer"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/yes-lorvens-solutions-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-orange-600 hover:text-orange-700 transition cursor-pointer"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/yeslorvens"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-orange-600 hover:text-orange-700 transition cursor-pointer"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://twitter.com/yeslorvens"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-orange-600 hover:text-orange-700 transition cursor-pointer"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#0B2149] mb-3">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-600 transition">Services</Link></li>
            <li><Link to="/projects" className="hover:text-orange-600 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
  <h3 className="text-lg font-semibold text-[#0B2149] mb-3">Our Services</h3>
  <ul className="space-y-2 text-sm">

    <li>
      <Link to="/service/web-development" className="hover:text-orange-600 transition">
        Web Development
      </Link>
    </li>

    <li>
      <Link to="/service/mobile-development" className="hover:text-orange-600 transition">
        Mobile Apps
      </Link>
    </li>

    <li>
      <Link to="/service/ui-ux-design" className="hover:text-orange-600 transition">
        UI/UX Design
      </Link>
    </li>

    <li>
      <Link to="/service/digital-marketing" className="hover:text-orange-600 transition">
        Digital Marketing
      </Link>
    </li>

    <li>
      <Link to="/service/ai-ml-integration" className="hover:text-orange-600 transition">
        AI/ML Integrations
      </Link>
    </li>

    <li>
      <Link to="/service/school-website" className="hover:text-orange-600 transition">
        School Website Development
      </Link>
    </li>

    <li>
      <Link to="/service/ecommerce-website" className="hover:text-orange-600 transition">
        E-Commerce Websites
      </Link>
    </li>

    <li>
      <Link to="/service/portfolio-building" className="hover:text-orange-600 transition">
        Portfolio Building
      </Link>
    </li>

  </ul>
</div>



        {/* Contact */}
      <div>
  <h3 className="text-lg font-semibold text-[#0B2149] mb-3">Contact</h3>
  <ul className="space-y-2 text-sm text-gray-700">

    <li className="flex items-center gap-2">
  <Phone className="w-4 h-4 text-orange-600" />
  <span>
    <a href="tel:+917013814030" className="hover:text-orange-600 transition">
      +91 7013814030
    </a>
    <br />
    <a href="tel:+914031985921" className="hover:text-orange-600 transition">
      +91 4031985921
    </a>
  </span>
</li>


    <li className="flex items-center gap-2">
      <Mail className="w-4 h-4 text-orange-600" />
      <a 
        href="mailto:info@yeslorvens.com" 
        className="hover:text-orange-600 transition"
      >
        info@yeslorvens.com
      </a>
    </li>

    <li className="flex items-start gap-2">
      <MapPin className="w-4 h-4 text-orange-600 mt-[2px]" />
      <span>
        Jubilee Hills Road No 86, Hyderabad, Telangana <br />
        India - 500033
      </span>
    </li>

  </ul>
</div>


        {/* SUPPORT FIELD (NEW) */}
      <div>
  <h3 className="text-lg font-semibold text-[#0B2149] mb-3"> Legal </h3>
  <ul className="space-y-2 text-sm">

    {/* Privacy Policy */}
    <li>
      <Link
        to="/privacy-policy"
        className="hover:text-orange-600 transition"
      >
        Privacy Policy
      </Link>
    </li>

    {/* Terms of Use */}
    <li>
      <Link
        to="/terms-of-use"
        className="hover:text-orange-600 transition"
      >
        Terms of Use
      </Link>
    </li>

  </ul>
</div>


      </div>
      

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-orange-200 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YES LORVENS. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
