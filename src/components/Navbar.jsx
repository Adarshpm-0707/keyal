import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 md:py-6 px-6 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-olive-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-primary-dark font-serif text-2xl font-bold tracking-tight">KYEAL</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-primary-dark/70 hover:text-olive-green transition-colors text-sm font-bold uppercase tracking-widest">Home</Link>
          <Link to="/about" className="text-primary-dark/70 hover:text-olive-green transition-colors text-sm font-bold uppercase tracking-widest">About</Link>
          <Link to="/contact" className="text-primary-dark/70 hover:text-olive-green transition-colors text-sm font-bold uppercase tracking-widest">Contact</Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-8">
          <div className="relative cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-dark group-hover:text-olive-green transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-olive-green text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
