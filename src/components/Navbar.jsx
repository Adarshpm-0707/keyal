import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/LOGO.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-colors duration-300 px-6 md:px-12 py-4 md:py-6 border-b ${
        isScrolled || isMenuOpen ? 'bg-[#0A0B0A] border-white/10 shadow-2xl' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Keyal Logo" className="h-7 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="relative text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#6F9378] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
 
        {/* Desktop Action Icons & Menu Toggle */}
        <div className="flex items-center gap-4 md:gap-8">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer group p-2 rounded-full hover:bg-white/5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-[#6F9378] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute top-1 right-1 bg-[#6F9378] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#34453D]">0</span>
          </motion.div>
          
          <button className="hidden sm:block px-6 py-2 border border-[#6F9378] text-[#6F9378] hover:bg-[#6F9378] hover:text-white transition-all duration-500 rounded-full text-xs font-bold uppercase tracking-widest">
            Login
          </button>

          {/* Mobile Menu Toggle (3 Dots / Hamburger) */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#34453D] border-t border-white/5"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-xl font-bold uppercase tracking-widest hover:text-[#6F9378] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full py-4 mt-4 border border-[#6F9378] text-[#6F9378] rounded-xl text-sm font-bold uppercase tracking-widest">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
