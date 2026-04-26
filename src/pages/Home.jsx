import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DNAHelix from '../components/DNAHelix';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { scrollYProgress } = useScroll();

  // PARALLAX VALUES
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotateHero = useTransform(scrollYProgress, [0, 0.2], [0, 10]);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "circOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 1, ease: "backOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const pillars = [
    { id: '01', title: 'Mental Health', description: 'Neurological genetics shape your stress response, mood regulation, and cognitive function.', icon: '🧠' },
    { id: '02', title: 'Physical Fitness', description: 'Precision prescriptions for muscle fibre profile, VO2 ceiling, and recovery rate.', icon: '⚡' },
    { id: '03', title: 'Nutrition & Diet', description: 'Food as medicine—daily meals and supplements tuned to your genetic absorption patterns.', icon: '🍃' },
    { id: '04', title: 'Preventive Health', description: 'Tracking 18+ cancer-linked markers and genetic flags for diabetes and cardiovascular disease.', icon: '🛡️' },
    { id: '05', title: 'Continuous Monitoring', description: 'Quarterly biomarker blood panels, AI health coaching, and expert assessments.', icon: '📈' }
  ];

  const journeySteps = [
    { num: '1', title: 'DNA Blueprint Analysis', desc: 'Single cheek-swab test using Illumina Infinium™ technology at NABL & CAP certified labs.' },
    { num: '2', title: '4-Expert Consultation', desc: 'Review by genetic counselor, clinical dietitian, psychologist, and certified fitness trainer.' },
    { num: '3', title: 'Personalised Meals', desc: 'DNA-matched, portioned, and nutrient-aligned meals delivered daily to your door.' },
    { num: '4', title: 'Targeted Supplements', desc: 'Supplements matched to exact absorption patterns and metabolic variants addressed daily.' },
    { num: '5', title: 'Precision Health Review', desc: 'Evolving lifelong protocol based on quarterly biomarker panels and clinical reviews.' }
  ];

  const stats = [
    { value: '56%', label: 'Diet-related deaths in India' },
    { value: '101M+', label: 'Diabetics in India today' },
    { value: '₹178.6B', label: 'India\'s generic supplement market' },
    { value: '80%', label: 'Positive outcome rate in pilots' }
  ];

  const prescriptions = [
    { t: 'Anti-Inflammatory Prevention', d: 'Targeted nutrition to silence risk markers before they manifest.' },
    { t: 'Cancer Risk Interception', d: '18+ cancer-linked markers tracked and countered through precision protocols.' },
    { t: 'Mental Wellness Nutrition', d: 'Modulating serotonin, dopamine, and cortisol through precise food choices.' }
  ];

  const partners = ['Illumina Infinium™', 'NABL Certified', 'CAP Accredited', 'MapMyGenome Partner', 'Tata Memorial Research', 'Illumina Infinium™', 'NABL Certified', 'CAP Accredited', 'MapMyGenome Partner', 'Tata Memorial Research'];

  const faqs = [
    { question: "What is DNA-based preventive healthcare?", answer: "Most healthcare waits for you to get sick. Kyeal flips this model—using your genetic blueprint to identify risks years before symptoms appear, allowing for precision intervention." },
    { question: "How is Kyeal different from generic DNA reports?", answer: "Competitors provide a 100+ page PDF with no action plan. Kyeal is a Done-For-You ecosystem: Analysis → Expert Interpretation → Daily Meals → Monthly Supplements → Quarterly Monitoring." },
    { question: "How much does it cost?", answer: "The comprehensive DNA Blueprint package, including the test, 4-expert consultations, and initial protocol, is priced at ₹20,000." },
    { question: "Is Kyeal's technology scientifically validated?", answer: "Yes, we use Illumina Infinium™ technology, the gold standard, and partner with NABL & CAP certified laboratories and research institutes like Tata Memorial." }
  ];

  return (
    <main className="relative bg-[#0B1408] font-sans selection:bg-accent-lime selection:text-primary-dark scroll-smooth overflow-x-hidden">
      
      {/* BACKGROUND INTERACTION */}
      <DNAHelix />

      {/* PARALLAX DECORATION TEXT */}
      <motion.div 
        style={{ y: y1 }}
        className="fixed top-[20%] right-[-10%] text-[20vw] font-serif font-black text-white/[0.02] pointer-events-none select-none z-0"
      >
        KYEAL
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="fixed bottom-[10%] left-[-10%] text-[20vw] font-serif font-black text-accent-lime/[0.02] pointer-events-none select-none z-0"
      >
        HEALTH
      </motion.div>

      <div className="relative z-10 w-full">
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
            <motion.div 
              style={{ rotate: rotateHero }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="z-10"
            >
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block px-4 py-1 rounded-full border border-olive-green/40 text-accent-lime text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-6 md:mb-8"
              >
                India's First DNA-Based Preventive Healthcare
              </motion.div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-serif font-bold text-accent-cream leading-[1.1] mb-6 md:mb-8 tracking-tighter">
                You Are What <br />
                <motion.span 
                  animate={{ color: ["#B9E075", "#E0F0C1", "#B9E075"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="italic"
                >You Eat.</motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-muted-green text-sm md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 md:mb-12 leading-relaxed font-medium"
              >
                Your DNA holds the blueprint to preventing disease before it starts. We decode your genetics, then deliver personalised meals, targeted supplements, and a complete 5-pillar protocol.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-5 bg-accent-lime text-primary-dark font-bold rounded-full hover:bg-accent-cream transition-all shadow-xl shadow-accent-lime/20 text-sm md:text-base"
                >
                  Get Your DNA Blueprint →
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(185, 224, 117, 0.1)" }}
                  className="w-full sm:w-auto px-10 py-5 border border-olive-green/40 text-accent-cream font-bold rounded-full transition-all text-sm md:text-base"
                >
                  Discover the 5 Pillars
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              {...floating}
              className="lg:flex items-center justify-center relative py-12 lg:py-0"
            >
               <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-accent-lime/10 flex items-center justify-center relative mx-auto">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-accent-lime/5"
                  />
                  <div className="text-6xl sm:text-7xl md:text-9xl grayscale hover:grayscale-0 transition-all duration-700 cursor-help">🧪</div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Concept Comparison */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-y border-olive-green/10 bg-secondary-dark/20 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-accent-cream mb-8 leading-tight">
                  Stop Treating Symptoms. <br />
                  <span className="text-accent-lime italic">Start Preventing Them.</span>
                </h2>
                <p className="text-muted-green text-sm md:text-lg leading-relaxed mb-12">
                  Most healthcare waits for you to get sick. Kyeal flips this model—using your genetic blueprint to identify risks years before symptoms appear.
                </p>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-3xl border border-red-900/20 bg-red-900/5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-900/40"></div>
                    <h4 className="text-red-400 font-bold uppercase tracking-widest text-[10px] mb-3">Traditional Healthcare</h4>
                    <p className="text-muted-green text-xs md:text-sm">Reactive. Generic. Late. Wait for symptoms → diagnose → treat with standard protocols.</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-8 rounded-3xl border border-accent-lime/20 bg-accent-lime/5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-lime/40"></div>
                    <h4 className="text-accent-lime font-bold uppercase tracking-widest text-[10px] mb-3">The Kyeal Way</h4>
                    <p className="text-accent-cream text-xs md:text-sm">Preventive. Personalised. Lifelong. Decode your DNA → identify risks → prevent with precision nutrition.</p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                {...scaleIn}
                className="bg-olive-green/5 p-12 rounded-[50px] border border-olive-green/20 text-center relative"
              >
                 <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl md:text-8xl mb-8"
                 >🔬</motion.div>
                 <h3 className="text-2xl md:text-4xl font-serif font-bold text-accent-cream mb-6">Nutrigenomics</h3>
                 <p className="text-muted-green text-xs md:text-lg leading-relaxed mb-10">
                   We apply the science of how your genes interact with food for a 360° health view.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {['Risk Assessment', 'Biomarkers', 'Pharmacogenomics', 'Genetic Flags'].map(t => (
                      <motion.div 
                        key={t} 
                        whileHover={{ scale: 1.1, color: "#B9E075" }}
                        className="px-4 py-3 rounded-2xl border border-olive-green/10 text-[10px] uppercase font-bold text-muted-green cursor-default"
                      >{t}</motion.div>
                    ))}
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. The 5 Pillars */}
        <section id="pillar" className="py-16 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-7xl font-serif font-bold text-accent-cream mb-6">
                The 5 Pillars of <span className="text-accent-lime italic">Prevention.</span>
              </h2>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {pillars.map((pillar) => (
                <motion.div 
                  key={pillar.id} 
                  variants={fadeIn}
                  whileHover={{ y: -10, borderColor: "rgba(185, 224, 117, 0.4)" }}
                  className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-olive-green/20 bg-secondary-dark/40 backdrop-blur-sm group transition-all duration-500"
                >
                  <motion.div {...floating} className="text-4xl md:text-5xl mb-6 md:mb-8">{pillar.icon}</motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-accent-cream mb-4">{pillar.title}</h3>
                  <p className="text-muted-green text-xs md:text-base leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. Stats Section */}
        <section className="py-16 md:py-24 bg-accent-lime text-primary-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-base md:text-2xl font-serif font-bold mb-12 md:mb-20 uppercase tracking-[0.3em] opacity-80">Crisis & Outcome</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="space-y-2 md:space-y-4"
                >
                  <div className="text-4xl md:text-8xl font-serif font-black">{stat.value}</div>
                  <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest max-w-[150px] mx-auto opacity-70 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. The Journey */}
        <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.h2 {...fadeIn} className="text-3xl md:text-7xl font-serif font-bold text-accent-cream mb-20 text-center">
              Your Journey to <span className="text-accent-lime italic">Precision.</span>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {journeySteps.map((step, i) => (
                <motion.div 
                  key={step.num} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(185, 224, 117, 0.05)" }}
                  className="p-8 rounded-[35px] border border-olive-green/10 bg-secondary-dark/40 backdrop-blur-sm flex flex-col h-full transition-all"
                >
                  <div className="text-4xl font-serif font-bold text-olive-green mb-8">{step.num}</div>
                  <h4 className="text-lg md:text-xl font-bold text-accent-cream mb-4 leading-tight">{step.title}</h4>
                  <p className="text-muted-green text-xs md:text-sm leading-relaxed mt-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Prescription Section */}
        <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-y border-olive-green/10 bg-secondary-dark/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div {...scaleIn} className="order-2 lg:order-1 relative">
               <div className="aspect-[4/5] rounded-[60px] bg-gradient-to-tr from-primary-dark to-olive-green/40 flex flex-col justify-end p-12 overflow-hidden border border-olive-green/20 relative group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center transition-all duration-1000"
                  />
                  <div className="relative z-10">
                    <div className="text-accent-lime text-xs font-bold uppercase tracking-[0.4em] mb-6">Metabolism Decoded</div>
                    <h3 className="text-2xl md:text-5xl font-serif font-bold text-accent-cream leading-tight">
                      PPARγ, B12, and MTHFR addressed daily.
                    </h3>
                  </div>
               </div>
             </motion.div>
             
             <div className="order-1 lg:order-2">
               <motion.h2 {...fadeIn} className="text-3xl md:text-7xl font-serif font-bold text-accent-cream mb-12 leading-tight">
                 'Your Plate Is a <br />
                 <span className="text-accent-lime italic">Prescription.'</span>
               </motion.h2>
               <div className="space-y-10">
                 {prescriptions.map((item, i) => (
                   <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-8"
                   >
                     <motion.div 
                      whileHover={{ rotate: 360 }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-olive-green/20 flex items-center justify-center text-accent-lime flex-shrink-0"
                     >✓</motion.div>
                     <div>
                       <h4 className="text-xl md:text-2xl font-bold text-accent-cream mb-3">{item.t}</h4>
                       <p className="text-muted-green text-sm md:text-lg leading-relaxed">{item.d}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* 7. Ecosystem Comparison */}
        <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <motion.div {...fadeIn} className="text-center mb-24">
               <h2 className="text-3xl md:text-7xl font-serif font-bold text-accent-cream mb-6">Done-For-You Health.</h2>
               <p className="text-muted-green text-lg md:text-2xl max-w-2xl mx-auto">Stop wasting time on 100-page PDF reports that offer no real-world action.</p>
             </motion.div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div {...fadeIn} className="p-10 md:p-16 rounded-[50px] bg-primary-dark/40 border border-red-900/10 opacity-50 grayscale hover:grayscale-0 transition-all">
                  <h4 className="text-red-400 font-bold mb-10 uppercase text-xs tracking-[0.5em] text-center">Standard Labs</h4>
                  <ul className="space-y-6 text-sm md:text-lg text-muted-green">
                    {['Static PDF Report only', 'No daily dietary implementation', 'Generic lifestyle advice', 'Fragmented expert care', 'No biomarker monitoring'].map(x => (
                      <li key={x} className="flex gap-6"><span>✕</span> {x}</li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="p-10 md:p-16 rounded-[50px] bg-accent-lime text-primary-dark shadow-[0_0_100px_rgba(185,224,117,0.1)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
                  <h4 className="text-primary-dark font-bold mb-10 uppercase text-xs tracking-[0.5em] text-center">The Kyeal Ecosystem</h4>
                  <ul className="space-y-6 text-sm md:text-lg font-bold">
                    {['Complete DNA → Action Loop', '4-Expert Integrated Review', 'Daily DNA-Matched Meals', 'Monthly Targeted Supplements', 'Quarterly Precision Health Review'].map(x => (
                      <li key={x} className="flex gap-6"><span>✓</span> {x}</li>
                    ))}
                  </ul>
                </motion.div>
             </div>
          </div>
        </section>

        {/* 8. FAQ Section */}
        <section id="faq" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-secondary-dark/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <motion.h2 {...fadeIn} className="text-3xl md:text-7xl font-serif font-bold text-accent-cream text-center mb-24 italic">Decoding Kyeal.</motion.h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeIn}
                  className="border border-olive-green/10 rounded-3xl bg-secondary-dark/40 backdrop-blur-md overflow-hidden hover:border-accent-lime/30 transition-all"
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full p-8 md:p-10 text-left flex justify-between items-center"
                  >
                    <span className="text-base md:text-2xl font-bold text-accent-cream pr-8 leading-tight">{faq.question}</span>
                    <motion.span 
                      animate={{ rotate: openIndex === idx ? 45 : 0, color: openIndex === idx ? "#B9E075" : "#E0F0C1" }}
                      className="text-4xl"
                    >+</motion.span>
                  </button>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-10 pt-0 text-muted-green text-sm md:text-xl leading-relaxed border-t border-olive-green/5"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Scrolling Partner Marquee */}
        <section className="py-20 px-4 md:px-6 border-t border-olive-green/5 bg-secondary-dark/10 overflow-hidden relative">
          <div className="flex w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 md:gap-32 whitespace-nowrap"
            >
              {partners.map((p, i) => (
                <div key={i} className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-muted-green opacity-30 whitespace-nowrap hover:opacity-100 transition-opacity">
                  {p}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 10. CTA & Pricing */}
        <section className="py-24 md:py-48 px-6 relative overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-accent-lime/5 blur-[150px] rounded-full"
          />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div 
              {...scaleIn}
              className="bg-secondary-dark/60 backdrop-blur-2xl p-16 md:p-32 rounded-[80px] border border-accent-lime/20 shadow-2xl"
            >
              <h2 className="text-4xl md:text-8xl font-serif font-bold text-accent-cream mb-8 tracking-tighter">Stop Treating Symptoms.</h2>
              <p className="text-muted-green text-lg md:text-2xl mb-16 max-w-3xl mx-auto">Join India's first DNA-based ecosystem decoding your health for a lifelong precision protocol.</p>
              <div className="text-5xl md:text-[100px] font-serif font-bold text-accent-lime mb-16">₹20,000<span className="text-2xl text-muted-green/60 font-sans font-normal ml-6 italic tracking-normal">Complete Blueprint</span></div>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-8 bg-accent-lime text-primary-dark font-bold rounded-full text-2xl shadow-3xl shadow-accent-lime/30"
              >
                Start Your Journey →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* 11. Footer */}
        <footer id="contact" className="bg-secondary-dark/60 pt-32 pb-16 px-6 md:px-12 lg:px-24 border-t border-olive-green/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
              <div className="space-y-8">
                <div className="text-4xl font-serif font-bold text-accent-cream tracking-tighter">KYEAL<span className="text-accent-lime">.</span></div>
                <p className="text-muted-green text-base leading-relaxed opacity-80">Decoding your genetics to prevent disease before it starts. Powered by gold-standard Illumina Infinium™ technology.</p>
              </div>
              <div>
                <h4 className="text-accent-cream font-bold mb-10 uppercase text-xs tracking-[0.4em]">Certifications</h4>
                <div className="flex flex-col gap-6 text-xs font-bold text-muted-green uppercase tracking-widest">
                  <div className="flex items-center gap-4 hover:text-accent-lime transition-colors">
                    <span className="w-8 h-[1px] bg-accent-lime/30" /> NABL Certified
                  </div>
                  <div className="flex items-center gap-4 hover:text-accent-lime transition-colors">
                    <span className="w-8 h-[1px] bg-accent-lime/30" /> CAP Accredited
                  </div>
                  <div className="flex items-center gap-4 hover:text-accent-lime transition-colors">
                    <span className="w-8 h-[1px] bg-accent-lime/30" /> Tata Research Partner
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-accent-cream font-bold mb-10 uppercase text-xs tracking-[0.4em]">Connect</h4>
                <div className="space-y-4 text-muted-green text-base">
                  <p className="hover:text-accent-lime transition-colors cursor-pointer">contact@kyeal.in</p>
                  <p className="hover:text-accent-lime transition-colors cursor-pointer">+91 98765 43210</p>
                </div>
              </div>
              <div>
                <h4 className="text-accent-cream font-bold mb-10 uppercase text-xs tracking-[0.4em]">Address</h4>
                <p className="text-muted-green text-base leading-relaxed opacity-80">123, Wellness Tower, Indiranagar,<br />Bangalore, KA - 560038</p>
              </div>
            </div>
            <div className="pt-16 border-t border-olive-green/5 flex flex-col md:row justify-between items-center gap-8">
              <div className="text-muted-green/30 text-[10px] uppercase tracking-[0.6em]">© 2026 Kyeal Healthcare. All Rights Reserved.</div>
              <div className="flex gap-12 text-muted-green/30 text-[10px] uppercase tracking-[0.4em]">
                <span className="hover:text-accent-lime transition-colors cursor-pointer">Privacy</span>
                <span className="hover:text-accent-lime transition-colors cursor-pointer">Terms</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
