import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 

  Globe,
  ShieldCheck,
} from 'lucide-react';
import Logo from '../assets/LOGO.png';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const supportLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, href: 'https://www.instagram.com/kyeal_wellness/', name: 'Instagram' },
  ];

  return (
    <footer className="relative bg-[#0A0B0A] pt-32 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2ECC71]/30 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#2ECC71]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Large Background Text */}
    

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <img 
                src={Logo} 
                alt="Keyal Logo" 
                className="h-10 w-auto object-contain brightness-0 invert opacity-90" 
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#94A3B8] text-lg leading-relaxed max-w-md"
            >
              We are decoding human biology to create a future where health is personalized, 
              preventive, and powered by your own DNA.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#2ECC71] hover:border-[#2ECC71]/50 hover:bg-[#2ECC71]/5 transition-all duration-500 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-[#2ECC71] text-[10px] font-black uppercase tracking-[0.3em]">Explore</h4>
              <ul className="space-y-4">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm flex items-center group gap-2"
                    >
                      <span className="w-0 h-px bg-[#2ECC71] group-hover:w-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[#2ECC71] text-[10px] font-black uppercase tracking-[0.3em]">Legal</h4>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-sm flex items-center group gap-2"
                    >
                      <span className="w-0 h-px bg-[#2ECC71] group-hover:w-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#2ECC71]/10 rounded-full blur-3xl" />
              
              <h4 className="text-white text-xl font-bold mb-2">Join the Lab</h4>
              <p className="text-[#94A3B8] text-sm mb-6">
                Get the latest research on biological optimization directly to your inbox.
              </p>
              
            
              
              <div className="mt-6 flex items-center gap-4 text-[10px] text-[#94A3B8]/60 uppercase tracking-widest font-bold">
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-[#2ECC71]" /> Encrypted</span>
                <span className="flex items-center gap-1"><Globe size={12} className="text-[#2ECC71]" /> Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest">
              © {currentYear} KYEAL Healthcare Solutions
            </p>
        
          </div>
          
          <div className="flex items-center gap-12">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-[0.2em]">Based in</span>
              <span className="text-sm text-white font-medium">Kerala, India</span>
            </div>
            <motion.button 
              whileHover={{ y: -5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
            >
              <ArrowUpRight size={20} className="-rotate-45" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
