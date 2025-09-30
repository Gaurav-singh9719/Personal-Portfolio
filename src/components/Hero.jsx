// File: src/components/Hero.jsx
// Description: Hero Section with professional typing-effect animation for summary and key skills
// Location: src/components/Hero.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myImage from "../assets/Profile.png";

export default function Hero() {
  const sentences = [
    "Passionate about building scalable web applications and interactive user experiences.",
    "Skilled in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JavaScript, Git & GitHub.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (charIndex < sentences[sentenceIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + sentences[sentenceIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 60 + Math.random() * 50); // slight variation for human typing effect
      } else {
        timeout = setTimeout(() => setTyping(false), 1500); // pause after sentence
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 30 + Math.random() * 20); // human-like deleting speed
      } else {
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, sentenceIndex, sentences]);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24">
      {/* Left Text Section */}
      <div className="text-white flex-1 flex flex-col gap-4">
        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-[#00ffff]">Gaurav Singh</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-200 mb-2 min-h-[3rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full Stack Developer | {displayedText}
          <span className="text-[#00ffff] animate-pulse">|</span>
        </motion.h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 flex-wrap">
          <motion.a
            href="#projects"
            className="bg-transparent border-2 border-[#00ffff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00ffff] hover:text-blue-900 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1IGiP_ZoCjjen9y49Tnn8kh4vX7qeQtUt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#00ffff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00ffff] hover:text-blue-900 transition"
          >
            Resume
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#00ffff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00ffff] hover:text-blue-900 transition"
          >
            Cover Letter
          </motion.a>
        </div>
      </div>

      {/* Right Circular Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myImage}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#00ffff] object-cover"
        />
      </motion.div>
    </section>
  );
}
