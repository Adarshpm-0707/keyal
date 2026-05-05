/**
 * CONTACT PAGE COMPONENT
 * Security Hardened: Native Fetch, CSP Compatible, Environment Variable Protected
 */
import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | 'missing_config'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if keys are missing
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS keys are missing! Please check your .env file and restart your server.');
      setSubmitStatus('missing_config');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Extract data manually
    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Use native fetch to bypass any SDK issues
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.ok) {
          console.log('Email successfully sent!');
          setSubmitStatus('success');
          form.current.reset();
        } else {
          const errText = await response.text();
          console.error('Email failed to send:', errText);
          setErrorMessage(errText || `Error ${response.status}: ${response.statusText}`);
          setSubmitStatus('error');
        }
      })
      .catch((error) => {
        console.error('Network Error:', error);
        setErrorMessage(error.message === 'Failed to fetch' 
          ? 'Network Error: Please check your internet connection or disable Ad-blockers.' 
          : error.message);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0B0A] pt-28 md:pt-36 pb-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#2ECC71]/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2ECC71] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16 max-w-2xl text-center md:text-left mx-auto md:mx-0"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-[#2ECC71]/30 text-[#2ECC71] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 bg-[#2ECC71]/5">
            Connect
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-serif text-white leading-tight">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">Get In Touch</span>
          </h1>
          <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-light max-w-xl mx-auto md:mx-0">
            We'd love to hear from you! Whether you have a question, suggestion, partnership opportunity, or need support, our channels are always open.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-3 md:space-y-4"
          >
            {[
              { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, title: "Email Address", text: "ceo@kyeal.in" },
              { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, title: "Phone Number", text: "+91 73567 40010" },
              { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, title: "Location Address", text: "Abizen Nutrition Private Limited, Kannur university Incubation centre (KUIIF) Kannur, Kerala, India" }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#2ECC71]/50 transition-all duration-500 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2ECC71]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2ECC71]/20 transition-all duration-500 border border-[#2ECC71]/20">
                  <div className="text-[#2ECC71] group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>
                <div className="pt-0.5">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-0.5 font-serif tracking-wide">{card.title}</h3>
                  <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-md shadow-2xl"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-[#2ECC71] font-bold pl-1">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 md:py-3 px-4 text-sm text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#2ECC71] focus:bg-white/10 transition-all" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs uppercase tracking-widest text-[#2ECC71] font-bold pl-1">Your Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 md:py-3 px-4 text-sm text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#2ECC71] focus:bg-white/10 transition-all" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-[#2ECC71] font-bold pl-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 md:py-3 px-4 text-sm text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#2ECC71] focus:bg-white/10 transition-all" 
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] md:text-xs uppercase tracking-widest text-[#2ECC71] font-bold pl-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="3" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 md:py-3 px-4 text-sm text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:border-[#2ECC71] focus:bg-white/10 transition-all resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-[#2ECC71] text-black text-xs md:text-sm font-bold rounded-xl hover:bg-white disabled:opacity-70 disabled:hover:bg-[#2ECC71] transition-all duration-300 uppercase tracking-widest shadow-[0_0_15px_rgba(46,204,113,0.3)] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Message
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p>Thank you! Your message has been sent successfully.</p>
                  </motion.div>
                )}
                {submitStatus === 'missing_config' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="font-bold">Configuration Missing</p>
                    </div>
                    <p className="pl-8 opacity-80">The EmailJS keys could not be found. If you just added them to your .env file, you must <strong>restart your development server</strong> (stop it and run npm start again).</p>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>

            {/* Social Media */}
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/80">Follow us</h3>
              <div className="flex gap-3">
                <a href="/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#2ECC71] hover:text-black hover:border-[#2ECC71] transition-all duration-300 shadow-lg group">
                  <InstagramIcon />
                </a>
                <a href="/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#2ECC71] hover:text-black hover:border-[#2ECC71] transition-all duration-300 shadow-lg group">
                  <WhatsAppIcon />
                </a>
                <a href="/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#2ECC71] hover:text-black hover:border-[#2ECC71] transition-all duration-300 shadow-lg group">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
