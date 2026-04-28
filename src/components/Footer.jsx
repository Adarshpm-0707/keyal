import React from 'react';
import Logo from '../assets/LOGO.png';
import { ArrowRight, Mail } from 'lucide-react';

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#0A0B0A] pt-24 pb-12 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-[#2ECC71] to-transparent opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2ECC71] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-start text-left">
            <div className="flex items-center mb-6">
              <img src={Logo} alt="Keyal Logo" className="h-9 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-xs pr-4">
              Redefining the standard of care through biological optimization and DNA-powered wellness strategies.
            </p>
            <div className="flex gap-4 justify-start">
              {[
                { icon: <TwitterIcon />, href: "#" },
                { icon: <InstagramIcon />, href: "#" },
                { icon: <LinkedinIcon />, href: "#" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:bg-[#2ECC71] hover:text-black hover:border-[#2ECC71] transition-all duration-300 shadow-lg hover:shadow-[#2ECC71]/20">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Section (2 columns on all devices) */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Links Column 1 */}
            <div className="text-left">
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
              <ul className="space-y-4 inline-block text-left">
                {['Home', 'About Us', 'The Pillars', 'Shop'].map((item, idx) => (
                  <li key={idx}>
                    <a href="/" className="text-[#94A3B8] text-sm hover:text-[#2ECC71] transition-colors flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#2ECC71]" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Links Column 2 */}
            <div className="text-left">
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Resources</h4>
              <ul className="space-y-4 inline-block text-left">
                {['Research Papers', 'Case Studies', 'Support Center', 'Privacy Policy'].map((item, idx) => (
                  <li key={idx}>
                    <a href="/" className="text-[#94A3B8] text-sm hover:text-[#2ECC71] transition-colors flex items-center gap-3 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#2ECC71]" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1 lg:col-span-1 text-left">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Stay Optimized</h4>
            <p className="text-[#94A3B8] text-sm mb-4 max-w-sm">
              Subscribe to get the latest research on longevity directly to your inbox.
            </p>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={16} className="text-[#94A3B8]" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-12 text-white text-sm focus:outline-none focus:border-[#2ECC71] transition-colors placeholder:text-[#94A3B8]/50"
              />
              <button className="absolute inset-y-0 right-1.5 top-1.5 bottom-1.5 bg-[#2ECC71] text-black px-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[#94A3B8] text-xs text-left">
            © {new Date().getFullYear()} KYEAL Healthcare Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-start gap-4 sm:gap-8">
            <span className="text-[#94A3B8] text-xs uppercase tracking-widest">Handcrafted with precision</span>
            <span className="text-[#2ECC71] text-xs uppercase tracking-widest font-semibold drop-shadow-[0_0_8px_rgba(46,204,113,0.5)]">Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
