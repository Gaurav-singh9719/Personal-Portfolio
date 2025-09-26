// File: src/components/Contact.jsx
// Description: Contact Section with animated form inputs and motion effects
// Location: src/components/Contact.jsx

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-24 text-white"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-[#00ffff]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      {/* Summary */}
      <motion.p
        className="text-center text-gray-300 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Feel free to reach out for collaborations, projects, or just a friendly
        hello 👋
      </motion.p>

      {/* Form */}
      <motion.form
        className="flex flex-col gap-6 bg-blue-700/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name */}
        <motion.input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-blue-900/40 border border-[#00ffff]/40 focus:outline-none focus:border-[#00ffff] text-white"
          whileFocus={{ scale: 1.02 }}
        />

        {/* Email */}
        <motion.input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-blue-900/40 border border-[#00ffff]/40 focus:outline-none focus:border-[#00ffff] text-white"
          whileFocus={{ scale: 1.02 }}
        />

        {/* Message */}
        <motion.textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-lg bg-blue-900/40 border border-[#00ffff]/40 focus:outline-none focus:border-[#00ffff] text-white"
          whileFocus={{ scale: 1.02 }}
        />

        {/* Submit */}
        <motion.button
          type="submit"
          className="bg-[#00ffff] text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
