// File: src/components/Navbar.jsx
// Description: Navbar with smooth scroll to sections using refs, fixed position, and mobile menu
// Location: src/components/Navbar.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ refs }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", ref: refs.homeRef },
    { name: "About", ref: refs.homeRef }, // About points to Hero
    { name: "Services", ref: refs.servicesRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Projects", ref: refs.projectsRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-blue-950/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-[#00ffff] cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => handleScroll(refs.homeRef)}
        >
          MyPortfolio
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((nav, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                onClick={() => handleScroll(nav.ref)}
                className="text-white hover:text-[#00ffff] transition-colors duration-300"
              >
                {nav.name}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-blue-900/90 px-6 py-4 space-y-4"
        >
          {navLinks.map((nav, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(nav.ref)}
                className="block text-white hover:text-[#00ffff] transition-colors duration-300"
              >
                {nav.name}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
