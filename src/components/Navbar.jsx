import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from '../assets/LOGO.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
    { name: 'Vision', path: '/vision' },
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
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#2ECC71] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
 
        {/* Desktop Action Icons & Menu Toggle */}
        <div className="flex items-center gap-4 md:gap-8">
            <Link to="/cart" className="relative cursor-pointer group p-2 rounded-full hover:bg-white/5 transition-all">
              <motion.div whileHover={{ scale: 1.1 }} className="relative">
                <ShoppingCart className="h-6 w-6 text-white group-hover:text-[#2ECC71] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#2ECC71] text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#0A0B0A]">
                    {cartCount}
                  </span>
                )}
              </motion.div>
            </Link>

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
            className="md:hidden overflow-hidden bg-[#0A0B0A] border-t border-white/5"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-xl font-bold uppercase tracking-widest hover:text-[#2ECC71] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
