import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProjectsGallery = () => {
  const cards = useRef([]);

  useEffect(() => {
    gsap.from(cards.current, { y: 50, opacity: 0, stagger: 0.2, ease: 'power3.out' });
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {[1,2,3].map((i) => (
          <div
            key={i}
            ref={(el) => (cards.current[i-1] = el)}
            className="project-card bg-white/10 border border-white/20 p-6 rounded-xl transform-gpu hover:rotate-3 hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-2xl font-light mb-2">Project {i}</h3>
            <p className="text-slate-300 text-sm">Description placeholder.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
