// File: src/components/Skills.jsx
// Skills section with fast hover effect
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" />, level: "Fluent" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, level: "Fluent" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Fluent" },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Fluent" },
  { name: "Java", icon: <FaJava className="text-red-500" />, level: "Intermediate" },
  { name: "Data Structures & Algorithms", icon: <GiBrain className="text-purple-500" />, level: "Strong Foundation" },
  { name: "OOP (Object-Oriented Programming)", icon: <GiBrain className="text-indigo-500" />, level: "Strong Foundation" },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" />, level: "Proficient" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-[#00ffff]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-blue-900/50 p-6 rounded-xl shadow-lg flex items-center gap-4 cursor-pointer hover:bg-blue-800/70 transition-all duration-150 ease-linear"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }} // Entry animation duration
            >
              <div className="text-4xl">{skill.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-300">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
