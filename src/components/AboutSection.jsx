import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-3xl px-6 text-center"
      >
        <h2 className="text-4xl font-light mb-6">About Me</h2>
        <p className="text-lg text-slate-300">
          Software Developer and MCA student based in Bengaluru. Passionate about building immersive web
          experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
