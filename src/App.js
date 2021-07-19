import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font font-mono">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
