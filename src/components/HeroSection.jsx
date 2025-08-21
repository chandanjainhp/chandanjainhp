import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
      <motion.h1
        style={{ y }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-thin"
      >
        Chandan Jain HP
      </motion.h1>
    </section>
  );
};

export default HeroSection;
