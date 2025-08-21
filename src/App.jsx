import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsGallery from './components/ProjectsGallery';
import SkillsVisualization from './components/SkillsVisualization';
import ContactForm from './components/ContactForm';

const App = () => {
  const location = useLocation();

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <SkillsVisualization />
                  <ProjectsGallery />
                  <ContactForm />
                </>
              }
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
