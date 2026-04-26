import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark pt-24 pb-12 px-6 border-t border-olive-green/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center">
                <span className="text-primary-dark font-bold">K</span>
              </div>
              <span className="text-accent-cream font-serif text-xl font-bold tracking-tight">KYEAL</span>
            </div>
            <p className="text-muted-green max-w-sm leading-relaxed mb-8">
              Redefining the standard of care through biological optimization and personalized wellness strategies.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-olive-green/40 flex items-center justify-center text-accent-cream hover:bg-accent-lime hover:text-primary-dark transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-accent-cream font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-muted-green hover:text-accent-lime transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-green hover:text-accent-lime transition-colors">About Us</a></li>
              <li><a href="#pillar" className="text-muted-green hover:text-accent-lime transition-colors">The Pillars</a></li>
              <li><a href="/shop" className="text-muted-green hover:text-accent-lime transition-colors">Shop</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent-cream font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4">
              <li><a href="/research" className="text-muted-green hover:text-accent-lime transition-colors">Research Papers</a></li>
              <li><a href="/case-studies" className="text-muted-green hover:text-accent-lime transition-colors">Case Studies</a></li>
              <li><a href="/support" className="text-muted-green hover:text-accent-lime transition-colors">Support Center</a></li>
              <li><a href="/privacy" className="text-muted-green hover:text-accent-lime transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-olive-green/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-green text-sm">
            © {new Date().getFullYear()} KYEAL Healthcare Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-muted-green text-sm uppercase tracking-tighter">Handcrafted with precision</span>
            <span className="text-accent-lime text-sm uppercase tracking-tighter">Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
