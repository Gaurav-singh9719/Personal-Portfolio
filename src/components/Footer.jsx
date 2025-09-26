// File: src/components/Footer.jsx
// Description: Footer with simple copyright and social links
// Location: src/components/Footer.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-900/40 text-white py-6 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} My Portfolio | All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Gaurav-singh9719"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffff] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-singh-49aaba253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ffff] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gaurav.singh.971999@gmail.com"
            className="hover:text-[#00ffff] transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
