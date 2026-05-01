import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import "../style/home.css";

// Import Team Images
import AbhimanyuImg from "../assets/ABHIMANYU PV.png";
import AdnanImg from "../assets/ADNAN MUHAMMED.png";
import AbinImg from "../assets/ABIN GEORGE.png";
import AlexImg from "../assets/ALEX FEMI.png";
import AjasImg from "../assets/MUHAMMED AJAS M.png";

const team = [
  { name: "Adnan Muhammed", role: "CEO", image: AdnanImg },
  { name: "Abhimanyu PV", role: "CGO", image: AbhimanyuImg },
  { name: "Abin George", role: "COO", image: AbinImg },
  { name: "Alex Femi", role: "CPO", image: AlexImg },
  { name: "Muhammed Ajas M", role: "CFO", image: AjasImg },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play logic (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <main className="min-h-screen bg-[#0A0B0A] text-[#E0F0C1] overflow-hidden relative" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#2ECC71]/10 to-transparent pointer-events-none" />
      <div className="absolute top-40 right-[-100px] w-[500px] h-[500px] bg-[#2ECC71] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] text-xs font-bold tracking-widest uppercase mb-6">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">Kyeal.in</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed">
            A smarter approach to wellness, redefining the standard of care through the power of advanced genetics and nutritional science.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="mb-32 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-[#94A3B8] text-lg leading-relaxed text-left"
          >
            <p>
              At <strong className="text-white">Kyeal</strong>, we specialize in transforming your DNA insights into simple, actionable plans for healthier living. Based at the Kannur University Incubation Centre in Kerala, our foundation is built on scientific rigor and personalized care.
            </p>
            <p>
              As a venture of <strong className="text-white">Abizen Nutrition Private Limited</strong>, our expert team blends cutting edge research with a tailored approach to wellness. We offer DNA based nutrition guidance, lifestyle programs, and custom supplements designed for both individuals and organizations.
            </p>
            <p>
              Whether you're optimizing personal health or elevating your team's wellbeing, Kyeal provides science-backed advice rooted in empathy, innovation, and absolute scientific excellence.
            </p>
          </motion.div>
        </div>

        {/* Mission, Vision, Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Target size={28} className="text-[#2ECC71]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">Our Mission</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              To make health and wellness truly personal by harnessing the power of DNA science and nutritional expertise. We deliver actionable, evidence based programs that empower individuals to make informed, sustainable choices.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Eye size={28} className="text-[#2ECC71]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">Our Vision</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              To become India's most trusted provider of DNA powered nutrition and lifestyle solutions. We aim to lead the way in precision health, ensuring personalized wellbeing is a guaranteed reality for all.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Heart size={28} className="text-[#2ECC71]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">Our Philosophy</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              We go beyond treating symptoms. We focus on people. Grounded in integrity and driven by innovation, we combine advanced genetic testing with deep empathy to create personalized wellness solutions that work.
            </p>
          </motion.div>
        </div>

        {/* Team Section - Hero Spotlight Design */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-24 border-t border-white/5 relative overflow-hidden"
        >
          {/* Large Background Text (Role) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <motion.h2 
              key={`bg-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 0.03, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[20vw] font-black text-white uppercase leading-none whitespace-nowrap"
            >
              {team[currentIndex].role}
            </motion.h2>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center">
              
              {/* Main Portrait - Clean & Borderless */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12">
                <div className="absolute inset-0 bg-[#2ECC71] rounded-full blur-[100px] opacity-10 animate-pulse" />
                <motion.div
                  key={`img-${currentIndex}`}
                  initial={{ opacity: 0, y: 40, rotateY: 30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <img
                    src={team[currentIndex].image}
                    alt={team[currentIndex].name}
                    className="w-full h-full object-cover rounded-[60px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-white/5"
                  />
                </motion.div>
              </div>

              {/* Identity Section */}
              <div className="text-center space-y-4">
                <motion.div
                  key={`name-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-5xl md:text-7xl font-bold text-white font-serif tracking-tighter">
                    {team[currentIndex].name}
                  </h3>
                </motion.div>
                
                <motion.div
                  key={`role-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className="h-[2px] w-8 bg-[#2ECC71]" />
                  <p className="text-[#2ECC71] text-xl font-bold tracking-[0.5em] uppercase">
                    {team[currentIndex].role}
                  </p>
                  <div className="h-[2px] w-8 bg-[#2ECC71]" />
                </motion.div>
              </div>

              {/* Minimalist Controls */}
              <div className="flex items-center gap-12 mt-16">
                <button 
                  onClick={handlePrev}
                  className="p-4 rounded-full border border-white/10 text-white/40 hover:text-[#2ECC71] hover:border-[#2ECC71] transition-all"
                >
                  <ChevronLeft size={28} />
                </button>

                <div className="flex gap-3">
                  {team.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-[#2ECC71] scale-125' : 'bg-white/10'}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNext}
                  className="p-4 rounded-full border border-white/10 text-white/40 hover:text-[#2ECC71] hover:border-[#2ECC71] transition-all"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default About;

