// File: src/App.jsx
// Description: Main App with section refs for smooth scroll, Contact section, and scroll offset for fixed navbar
// Location: src/App.jsx

import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Section refs
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Navbar with refs */}
      <Navbar
        refs={{ homeRef, servicesRef, skillsRef, projectsRef, contactRef }}
      />

      {/* Hero Section */}
      <div ref={homeRef} className="scroll-mt-20">
        <Hero />
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="scroll-mt-20">
        <Services />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className="scroll-mt-20">
        <Skills />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="scroll-mt-20">
        <Projects />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="scroll-mt-20">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
