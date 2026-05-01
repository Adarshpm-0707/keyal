import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Dna, Brain, Zap, Stethoscope, Sprout, Activity, Users, Baby, HeartPulse, Heart, Ribbon, Microscope, ChevronRight, MousePointer2 } from 'lucide-react';
import "../style/home.css";
import VisionImg from '../assets/vision.png';

const Vision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const domains = [
    { id: '01', title: 'DNA & Genomic Nutrition', desc: 'Precision nutrition from your genetic blueprint — the foundation of everything Kyeal does.', icon: Dna },
    { id: '02', title: 'Mental Health Nutrition', desc: 'Gut brain axis science, neurological nutrition, mood disorders and cognitive longevity.', icon: Brain },
    { id: '03', title: 'Physical Performance', desc: 'Sport science, athletic recovery, body composition and peak human physical potential.', icon: Zap },
    { id: '04', title: 'Expert Consultation', desc: "India's largest network of clinical nutritionists, dietitians and precision health specialists.", icon: Stethoscope },
    { id: '05', title: 'Reproductive & IVF', desc: 'Nutritional protocols for fertility optimization, IVF support and conception readiness.', icon: Sprout },
    { id: '06', title: 'Maternal Nutrition', desc: 'Trimester-specific nutrition, postpartum recovery and the 1,000 critical days of motherhood.', icon: Activity }, 
    { id: '07', title: 'Paternal & Family', desc: 'Male reproductive nutrition, sperm health and whole-family nutritional alignment from conception.', icon: Users },
    { id: '08', title: 'Pediatric Nutrition', desc: 'From infant feeding to adolescent development — growth, immunity, cognition and lifelong habits.', icon: Baby },
    { id: '09', title: 'Senior Longevity', desc: 'Sarcopenia prevention, bone density, cognitive aging and quality of life extension for the elderly.', icon: HeartPulse },
    { id: '10', title: 'Chronic Disease', desc: 'Therapeutic nutrition for diabetes, cardiovascular disease, PCOS, thyroid and hypertension.', icon: Heart },
    { id: '11', title: 'Oncology Nutrition', desc: 'Evidence-based nutritional support — cancer prevention, treatment support and survivorship.', icon: Ribbon },
    { id: '12', title: 'Research Institute', desc: 'The intellectual engine — publishing, patenting and pioneering nutrition science the world follows.', icon: Microscope },
  ];

  const phases = [
    {
      id: '1',
      title: 'Launch & Validation Markets',
      tags: ['BENGALURU', 'MUMBAI', 'GURUGRAM'],
      bullets: [
        'Technology hubs with strong early adopters and wellness-driven consumers',
        'High disposable income and premium lifestyle market penetration',
        'Corporate ecosystem enabling B2B wellness partnerships',
        'Early adopters of personalized wellness, high subscription retention'
      ]
    },
    {
      id: '2',
      title: 'High-Growth Metro Expansion',
      tags: ['HYDERABAD', 'PUNE', 'CHENNAI'],
      bullets: [
        'Rapidly growing tech workforces and health-conscious professionals',
        'Young professional population with strong fitness culture',
        'Established urban market with rising preventive healthcare adoption',
        'Expanding B2B wellness contracts and corporate pilots'
      ]
    },
    {
      id: '3',
      title: 'Market Penetration & Scale',
      tags: ['AHMEDABAD', 'DELHI', 'KOLKATA'],
      bullets: [
        'Expanding upper-middle income consumer base in Gujarat',
        'Large urban populations with increasing lifestyle disease awareness',
        'Emerging premium wellness demand in eastern India',
        'Education-led marketing approach for lower competition entry'
      ]
    },
    {
      id: '4',
      title: 'Strategic South India Consolidation',
      tags: ['KOCHI', 'THIRUVANANTHAPURAM'],
      bullets: [
        'Highly health-aware population with strong preventive healthcare mindset',
        'High literacy and acceptance of science-driven wellness solutions',
        'NRI-influenced purchasing power and premium consumption',
        'Strong national-driven growth, ideal pilot for precision nutrition'
      ]
    },
    {
      id: '5',
      title: 'Emerging Premium & International Markets',
      tags: ['JAIPUR', 'UAE', 'SINGAPORE', 'UK (NRI & EXPAT)'],
      bullets: [
        'Growing urban affluence and increasing wellness adoption in Rajasthan',
        'Lower competition versus Tier 1 metros, strong expansion scalability',
        'Indian diaspora markets — UAE, Singapore, UK as international entry',
        'First global footprint of the Kyeal empire established'
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="home-container selection:bg-[#2ECC71] selection:text-black">
      
      {/* Dynamic Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2ECC71] to-[#2ECC71]/20 origin-left z-[100]" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(46,204,113,0.08)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(46,204,113,0.05)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT — Content */}
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Mobile image — shown only on mobile, above the text */}
            <motion.div
              variants={sectionVariants}
              className="block lg:hidden w-full mb-8"
            >
              <img
                src={VisionImg}
                alt="Kyeal Vision"
                className="w-full h-[200px] sm:h-[260px] object-contain"
              />
            </motion.div>

            {/* Badge */}
            <motion.div variants={sectionVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2ECC71]/30 bg-[#2ECC71]/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-pulse shrink-0" />
              <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.35em] uppercase text-[#2ECC71]">Ten-Year Strategy · 2026—2036</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={sectionVariants} className="text-[4rem] sm:text-6xl md:text-[6rem] lg:text-[8rem] font-black text-white tracking-tighter leading-none font-serif mb-4">
              KYEAL
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={sectionVariants} className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[#2ECC71] shrink-0" />
              <span className="text-[#2ECC71] text-[10px] sm:text-xs font-bold tracking-[0.45em] uppercase">Empire of Nutrition</span>
            </motion.div>

            {/* Quote */}
            <motion.p variants={sectionVariants} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-serif text-[#94A3B8] italic font-light max-w-sm lg:max-w-xl mb-8">
              "In ten years, every human being who needs nutrition will turn to{' '}
              <span className="text-white font-semibold not-italic">one name.</span>"
            </motion.p>

            {/* Stats Row */}
            <motion.div variants={sectionVariants} className="flex gap-6 sm:gap-10">
              {[
                { num: '12', label: 'Domains' },
                { num: '5', label: 'Phases' },
                { num: '2035', label: 'Vision' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono tracking-tight">{s.num}</span>
                  <span className="text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-[#2ECC71]/60 mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Vision Image (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <img
              src={VisionImg}
              alt="Kyeal Vision"
              className="w-full h-[500px] object-contain"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
        >
          <MousePointer2 size={16} className="text-[#2ECC71]" />
          <span className="text-[7px] font-bold tracking-widest uppercase text-white">Scroll</span>
        </motion.div>
      </section>

      {/* Domains - The "Interactive Grid" */}
      <section className="py-40 relative bg-[#141614] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="mb-32 text-center"
          >
            <h2 className="text-5xl md:text-9xl font-bold text-white mb-10 font-serif tracking-tighter">The Twelve Domains</h2>
            <div className="h-1 w-20 bg-[#2ECC71] mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-[#94A3B8] italic font-serif opacity-70 max-w-4xl mx-auto leading-relaxed">
              Every dimension of human nutrition, unified under a single intellectual engine. From the genome to the grave.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 bg-white/5 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ backgroundColor: "rgba(46, 204, 113, 0.05)" }}
                className="p-12 bg-[#141614] transition-all duration-700 group relative flex flex-col items-center text-center"
              >
                <div className="mb-10 w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2ECC71]/40 group-hover:bg-[#2ECC71]/10 group-hover:rotate-[360deg] transition-all duration-1000 shadow-xl">
                  <domain.icon className="text-[#2ECC71] w-10 h-10" />
                </div>
                <div className="text-[10px] font-bold text-[#2ECC71]/40 uppercase mb-4 tracking-[0.4em]">Domain 0{domain.id}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-serif group-hover:text-[#2ECC71] transition-colors leading-tight">
                  {domain.title}
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed font-light opacity-80 group-hover:opacity-100">
                  {domain.desc}
                </p>
                
                {/* Minimalist Accents */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2ECC71] group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy - The "Chronicle" Layout */}
      <section className="py-40 bg-[#0A0B0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mb-32 text-center md:text-left"
          >
            <div className="inline-block px-4 py-1 bg-[#2ECC71]/10 border border-[#2ECC71]/20 text-[#2ECC71] text-[10px] font-bold tracking-[0.5em] uppercase mb-8">Strategic Conquest</div>
            <h2 className="text-5xl md:text-9xl font-bold text-white mb-10 font-serif tracking-tighter">Market Expansion</h2>
          </motion.div>

          <div className="space-y-40">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Large Index */}
                <div className="text-[12rem] md:text-[20rem] font-serif font-black text-white/[0.03] select-none pointer-events-none absolute -z-10 tracking-tighter">
                  0{phase.id}
                </div>

                <div className="lg:w-1/2">
                  <div className="flex flex-wrap gap-3 mb-10">
                    {phase.tags.map((tag, i) => (
                      <span key={i} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-[#2ECC71] tracking-widest uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white font-serif mb-10 leading-tight tracking-tight italic">
                    {phase.title}
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#2ECC71] to-transparent mb-12" />
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {phase.bullets.map((bullet, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/30 transition-all duration-500"
                    >
                      <ChevronRight className="text-[#2ECC71] w-6 h-6 mt-1 shrink-0" />
                      <p className="text-[#94A3B8] text-base leading-relaxed font-light">{bullet}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness City - The "Monumental" Finale */}
      <section className="py-20 md:py-40 relative bg-[#0A0B0A] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#2ECC71]/10 rounded-full blur-[200px]" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-8 font-serif tracking-tighter leading-none">
              Wellness City
            </h2>
            <p className="text-[9px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#2ECC71] mb-10 md:mb-16">Year 2035 — Permanent Legacy</p>
          </motion.div>

          {/* FULLY RESPONSIVE GRAPH — heights are % of container, never overflow */}
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[480px] flex items-end gap-1 sm:gap-2 md:gap-3 mb-16 md:mb-32 border-b border-white/10 pb-1 overflow-hidden">
            {[
              { h: 67, color: 'from-[#2ECC71] to-[#27ae60]' },
              { h: 47, color: 'from-[#27ae60] to-[#1e8449]' },
              { h: 33, color: 'from-[#1e8449] to-[#145a32]' },
              { h: 57, color: 'from-[#2ECC71] to-[#a9dfbf]' },
              { h: 100, color: 'from-[#2ECC71] to-[#27ae60]' },
              { h: 53, color: 'from-[#27ae60] to-[#1e8449]' },
              { h: 37, color: 'from-[#1e8449] to-[#145a32]' },
              { h: 63, color: 'from-[#2ECC71] to-[#a9dfbf]' },
              { h: 50, color: 'from-[#2ECC71] to-[#27ae60]' },
              { h: 40, color: 'from-[#27ae60] to-[#1e8449]' },
              { h: 57, color: 'from-[#1e8449] to-[#145a32]' },
              { h: 47, color: 'from-[#2ECC71] to-[#a9dfbf]' },
            ].map((bar, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${bar.h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                className={`flex-1 min-w-0 rounded-t-md md:rounded-t-xl relative group overflow-hidden bg-gradient-to-t ${bar.color} shadow-[0_0_20px_-5px_rgba(46,204,113,0.4)]`}
              >
                {/* Scanning Shine — opacity-only, no blur for performance */}
                <motion.div
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                  style={{ willChange: 'opacity' }}
                  className="absolute inset-0 bg-white/25 pointer-events-none"
                />
                <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[6px] md:text-[9px] font-black text-white whitespace-nowrap">B{i+1}</span>
                </div>
              </motion.div>
            ))}
            {/* Glowing Baseline */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2ECC71] shadow-[0_0_12px_#2ECC71]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-20 md:mb-40">
            {[
              { val: '12', label: 'DOMAINS' },
              { val: '1M+', label: 'LIVES' },
              { val: '2035', label: 'TARGET' },
              { val: '₹1,000Cr', label: 'VALUE' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-3 md:p-5 border border-white/5 bg-white/[0.02] rounded-xl"
              >
                <div className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-1 font-mono tracking-tight">{stat.val}</div>
                <div className="text-[7px] md:text-[9px] font-bold tracking-widest text-[#2ECC71] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pt-10 md:pt-20 border-t border-white/5 space-y-4 md:space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white font-serif leading-tight tracking-tighter">
              One Name. <span className="text-[#94A3B8]">Every Nutrition Need.</span>
            </h3>
            <p className="text-sm md:text-lg text-[#94A3B8] italic font-serif opacity-50">"The empire of nutrition begins today — and ends nowhere."</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 text-[8px] font-bold tracking-widest text-white/20 uppercase pt-4 md:pt-10">
              <span>KYEAL</span>
              <span>2026—2036</span>
              <span>GLOBAL HQ</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Vision;
