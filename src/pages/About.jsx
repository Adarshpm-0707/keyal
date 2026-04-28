import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from 'lucide-react';
import "../style/home.css";

const About = () => {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      </div>
    </main>
  );
};

export default About;

