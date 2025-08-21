import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-light">Chandan Jain HP</h1>
      <div className="space-x-6">
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
