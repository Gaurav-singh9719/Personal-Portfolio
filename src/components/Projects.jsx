// File: src/components/Projects.jsx
// Description: Projects Section with full animations (container fade, staggered cards, card hover, buttons, skills)
// Location: src/components/Projects.jsx

import React from "react";
import { motion } from "framer-motion";

// Project Data
const projects = [
  {
    title: "Movix App",
    description: "A modern Movie & TV Show Discovery Web Application built with React.js, styled with SCSS, and powered by the TMDb API. Movix-App lets you explore trending, popular, and upcoming movies/series with a sleek and responsive UI.",
    skills: ["React.js", "TMDB API", "Tailwind CSS"],
    repo: "https://github.com/Gaurav-singh9719/Movix-App.git",
    live: "https://codemovix-app.netlify.app/",
  },
  {
    title: "Weather App",
    description: "Real-time weather application fetching data from OpenWeather API.",
    skills: ["React.js", "OpenWeather API", "CSS"],
    repo: "https://github.com/Gaurav-singh9719/Weather-App.git",
    live: "https://temprature-webapplication.netlify.app/",
  },
  {
    title: "AI Powered Fitness Website",
    description: "Fitness website powered with AI recommendations and exercises.",
    skills: ["HTML, CSS, javaScript, Gemini API"],
    repo: "https://github.com/Gaurav-singh9719/AI-Powered-Fitness-Website.git",
    live: "https://ai-fitness-live.netlify.app",
  },
  {
    title: "Rental Listing Web Application",
    description: "HomeQuest is a React.js based rental property management UI where Owners can add/delete properties, manage tenant requests, and Tenants can view properties, apply, and see their requests.The app is responsive and works on both laptops and mobile devices with a collapsible navigation bar.",
    skills: ["React.js", "Node.js", "MongoDB", "Tailwind CSS, Express.js"],
    repo: "https://github.com/Gaurav-singh9719/HomeQuest-Frontend.git",
    live: "https://homerenatal.netlify.app/",
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0,255,255,0.3)" },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 text-white"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-[#00ffff]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-700/50 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 text-[#00ffff]">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-2">{project.description}</p>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              variants={container}
            >
              {project.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="bg-[#00ffff]/20 text-[#00ffff] px-2 py-1 rounded-md text-sm"
                  variants={skillVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto flex-wrap">
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#00ffff] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#00ffff] hover:text-blue-900 transition"
                whileHover={{ scale: 1.1 }}
              >
                Repo
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00ffff] text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-white transition"
                whileHover={{ scale: 1.1 }}
              >
                Live
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
