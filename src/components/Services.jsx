// File: src/components/Services.jsx
// Description: Services Section with cards and hover animation
// Location: src/components/Services.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

const services = [
  { title: "Frontend Development", icon: <FaLaptopCode />, description: "Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern JS frameworks." },
  { title: "Backend Development", icon: <FaMobileAlt />, description: "Creating RESTful APIs, server-side logic, and database management with Node.js, Express.js, MongoDB." },
  { title: "UI/UX Design", icon: <FaPalette />, description: "Designing clean and modern interfaces with a focus on usability and aesthetics." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0,255,255,0.3)" },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#00ffff]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-800/50 p-6 rounded-xl flex flex-col items-center text-center cursor-pointer hover:bg-blue-700/70 transition duration-300"
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
