import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  ArrowRight,
  Plus,
  ShieldCheck,
  Brain,
  Zap,
  LineChart,
  ChevronDown,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import "../style/home.css";

// 3D DNA Component
const DNAStrand3D = () => {
  const rungs = Array.from({ length: 120 });

  return (
    <div className="dna-3d-wrapper">
      <div className="dna-3d-container">
        {rungs.map((_, i) => (
          <div
            key={i}
            className="dna-rung css-animated-rung"
            style={{
              "--i": i,
              top: "calc(var(--i) * var(--rung-gap, 12px))",
              animationDelay: `calc(${i} * -0.15s)`,
            }}
          >
            <div className="dna-dot left" />
            <div className="dna-line" />
            <div className="dna-dot right" />
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} color="var(--stale-green)" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 45, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        duration: 1 
      } 
    },
  };

  const pillars = [
    { no: "01", title: "Mental Health", desc: "Neurological genetics shape your stress response, mood regulation, and cognitive function. Your DNA reveals what your brain needs to thrive.", icon: <Brain size={24} /> },
    { no: "02", title: "Physical Fitness", desc: "Muscle fibre profile, VO₂ ceiling, recovery rate  precision training prescriptions written in your genes. Not guesswork.", icon: <Zap size={24} /> },
    { no: "03", title: "Nutrition & Diet", desc: "Food as medicine  daily meals and targeted supplements tuned to how your body absorbs nutrients at the genetic level. Delivered to your door.", icon: <Utensils size={24} /> },
    { no: "04", title: "Preventive Health", desc: "Genetic flags for cancer, diabetes, cardiovascular disease identified and intercepted before they become diagnoses. 18+ cancer linked markers tracked.", icon: <ShieldCheck size={24} /> },
    { no: "05", title: "Continuous Monitoring", desc: "Quarterly biomarker blood panels, AI health coaching, and annual expert assessments. Your preventive protocol evolves as your biology does.", icon: <LineChart size={24} /> },
  ];

  const steps = [
    { no: "01", title: "DNA Blueprint Analysis", desc: "A single test through NABL & CAP-certified labs using Illumina Infinium™ technology across all 5 pillars." },
    { no: "02", title: "4-Expert Consultation Panel", desc: "Your results reviewed by a genetic counsellor, clinical dietitian, psychologist, and certified fitness trainer." },
    { no: "03", title: "Personalised Meals, Delivered Daily", desc: "DNA-matched meals delivered to your door  portioned, nutrient-aligned, and culturally appropriate." },
    { no: "04", title: "Targeted Monthly Supplements", desc: "Supplements matched to your exact absorption patterns, metabolic variants, and genetic risk markers." },
    { no: "05", title: "Annual Precision Health Review", desc: "Quarterly biomarker panels, clinical reviews, and AI monitoring. One DNA test  a lifelong protocol." },
  ];

  const discoveries = [
    { title: "Anti-Inflammatory Prevention", desc: "Inflammation is optional when you know your genetic triggers. Turmeric, walnuts, omega-3s targeted to silence risk markers before they activate." },
    { title: "Cancer Risk Interception", desc: "18 cancer-linked genetic markers  identified, tracked, and countered with targeted nutritional interventions." },
    { title: "Metabolism Decoded", desc: "PPARG variants, B12 malabsorption, MTHFR pathways  each has a precise dietary answer that only your DNA can reveal." },
    { title: "Mental Wellness Nutrition", desc: "Serotonin, dopamine, cortisol  all modulated by what you eat. Your DNA reveals which nutritional levers to pull for optimal function." },
  ];

  const faqs = [
    { q: "What is DNA-based preventive healthcare?", a: "DNA-based preventive healthcare uses genetic testing to identify disease risks before symptoms appear. Kyeal is India's first company to offer this as a complete system, not just a test." },
    { q: "How much does the Kyeal program cost?", a: "Kyeal's DNA Blueprint starts at ₹19,999. Includes the DNA test, 5-pillar analysis, 4-expert panel, meal delivery, monthly supplements, and annual health review." },
    { q: "How is Kyeal different from other DNA tests?", a: "Other DNA tests give a PDF report  then stop. Kyeal delivers an ongoing system: daily meals, monthly supplements, quarterly biomarker reviews, and annual reassessment." },
    { q: "Are the labs certified?", a: "Yes. We use Illumina Infinium™ technology through NABL & CAP-certified labs, with research collaboration with Tata Memorial Hospital and MapMyGenome." },
    { q: "Can genetics really prevent cancer?", a: "Kyeal tracks 18+ cancer-linked genetic markers. Early identification of genetic risk combined with targeted nutrition significantly improves the odds of interception." }
  ];

  const historyQuotes = [
    {
      quote: "Sik-yak Dong-won (食藥同源) — food and medicine share the same origin.”",
      context: "A principle rooted in East Asian philosophy, echoed from ancient healing traditions to modern science.",
      source: "East Asian Philosophy"
    },
    {
      quote: "“Let food be thy medicine and medicine be thy food.”",
      context: "A cornerstone of ancient Greek medicine—where healing began not in prescriptions, but in daily nourishment.",
      source: "Hippocrates"
    },
    {
      quote: "“Ahara is Mahabhaishajya” (आहारः महाभैषज्यम्) — Ayurveda",
      context: "Food is the greatest medicine. A foundational doctrine of Indian healing systems—placing diet at the center of prevention, balance, and longevity.",
      source: "Ancient India"
    },
    {
      quote: "“Al-ma‘idah bayt al-da’ wal-himya ra’s al-dawa.” (The stomach is the home of disease, and diet is the head of medicine.)",
      context: "A principle from classical Islamic medicine—where discipline in eating was seen as the first line of defense.",
      source: "Ibn Sina"
    },
    {
      quote: "“Food will be thy medicine.”",
      context: "A Renaissance rebellion against early pharmaceutical thinking—arguing that nature, not chemicals, holds the primary cure.",
      source: "Paracelsus"
    },
    {
      quote: "“He who takes medicine and neglects diet wastes the skill of his doctors.”",
      context: "A cultural reminder from Chinese wisdom: treatment without nutrition is incomplete medicine.",
      source: "Chinese Proverb"
    },
    {
      quote: "“Unyango lusemathunjini.” (Healing begins in the gut.)",
      context: "Ancestral African systems recognized gut health as the foundation of immunity and vitality—long before microbiome science caught up.",
      source: "Traditional African Medicine"
    }
  ];

  return (
    <main className="home-container">
      
      {/* HERO SECTION */}
      <section className="hero-split-section">
        <div className="hero-pattern-bg" />
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-tag-premium">
            <span className="pulse-icon"></span> India's First DNA Based Preventive Healthcare
          </div>
          <h1 className="hero-title-large">
            You Are What <br />
            <span className="gradient-text">You Eat.</span>
          </h1>
          <p className="hero-subtitle-pro">
            Your DNA holds the blueprint to preventing disease before it starts. We decode your genetics, then deliver personalised meals, targeted supplements, and a complete 5 pillar wellness protocol built around who you actually are.
          </p>
          <div className="hero-actions-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-pro"
              onClick={() => navigate('/product')}
            >
              Get Your DNA Blueprint <ArrowRight size={18} />
            </motion.button>
            <button className="btn-secondary-pro">Book For Consultation</button>
          </div>
        </motion.div>

        <motion.div className="hero-right">
          <div className="dna-visual-container">
            <DNAStrand3D />
           
          </div>
        </motion.div>
      </section>

      {/* NEW STATS BAND (MARQUEE) */}
      <div className="stats-marquee-container">
        <div className="stats-marquee-track">
          {/* First Set */}
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>56%</h2>
            <p>Deaths in India linked to diet related disease</p>
          </div>
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>101M+</h2>
            <p>Diabetics in India today</p>
          </div>
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>5 Pillars</h2>
            <p>Complete preventive wellness system</p>
          </div>
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>80%</h2>
            <p>Positive outcomes in pilot clients</p>
          </div>
          
          {/* Second Set for Seamless Loop */}
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>56%</h2>
            <p>Deaths in India linked to diet related disease</p>
          </div>
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>101M+</h2>
            <p>Diabetics in India today</p>
          </div>
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>5 Pillars</h2>
            <p>Complete preventive wellness system</p>
          </div>
          <div className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
            <h2>80%</h2>
            <p>Positive outcomes in pilot clients</p>
          </div>
        </div>
      </div>

      {/* DEFINING THE FUTURE SECTION */}
      <section className="future-health-section">
         <motion.div 
           className="section-intro"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            <motion.span variants={itemVariants} className="section-kicker">The Paradigm Shift</motion.span>
            <motion.h2 variants={itemVariants} className="section-heading-main">Defining the Future of Health</motion.h2>
            <motion.p variants={itemVariants} className="section-desc text-center">
              Most healthcare waits for you to get sick, then treats symptoms. DNA based preventive healthcare flips this model using your genetic blueprint to identify risks years before symptoms appear.
            </motion.p>
         </motion.div>
         <motion.div 
           className="comparison-cards"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            <motion.div variants={itemVariants} className="comp-card negative hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,74,74,0.1)] transition-all duration-500">
               <div className="comp-icon"><AlertTriangle color="#ff4a4a"/></div>
               <h3>Traditional Healthcare: Reactive. Generic. Late.</h3>
               <p>Wait for symptoms → diagnose → treat with standard protocols. 56% of deaths in India are linked to diet related disease.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="comp-card positive hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(46,204,113,0.15)] transition-all duration-500">
                <div className="comp-icon">
                  <div className="w-10 h-10 rounded-xl bg-[#2ECC71] flex items-center justify-center shadow-[0_0_20px_rgba(46,204,113,0.3)]">
                    <CheckCircle2 size={24} className="text-black" />
                  </div>
                </div>
               <h3>Kyeal: Preventive. Personalised. Lifelong.</h3>
               <p>Decode your DNA → identify risks → prevent with precision nutrition. Every recommendation is built on your unique genetics.</p>
            </motion.div>
         </motion.div>
         <div className="science-banner">
            <h3>The Science Behind It</h3>
            <p>Kyeal applies nutrigenomics the science of how genes interact with food alongside genetic risk assessment, pharmacogenomics, and behavioural genetics to build India’s most comprehensive DNA based preventive health plan.</p>
         </div>
      </section>

      {/* PILLARS SECTION */}
      <section id="pillars" className="pillars-exploration">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="section-intro">
            <span className="section-kicker">Precision Prevention</span>
            <h2 className="section-heading-main">
              Discover the Five Pillars
            </h2>
            <p className="section-desc" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              Dedicated to pioneering advancements in personalized wellness and genetic nutrition, leading Kyeal towards a healthier future.
            </p>
          </div>

          <div className="pillars-scroll-wrapper" style={{ perspective: "1000px" }}>
            {pillars.map((p) => (
              <motion.div
                key={p.no}
                variants={pillarVariants}
                className="pillar-card-v2"
              >
                <div className="pillar-icon-wrapper">
                  <div className="w-12 h-12 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/20 flex items-center justify-center text-[#2ECC71] shadow-[0_0_20px_rgba(46,204,113,0.1)]">
                    {p.icon}
                  </div>
                </div>
                <div className="pillar-index">{p.no}</div>
                <h3 className="pillar-name">{p.title}</h3>
                <p className="pillar-detail">{p.desc}</p>
                <div className="pillar-footer">
                  <Plus size={20} className="plus-icon" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CRISIS SECTION */}
      <section className="crisis-section">
         <motion.div 
           className="crisis-content"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            <motion.span variants={itemVariants} className="section-kicker">The Prevention Paradox</motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-6xl md:text-8xl font-bold text-white font-serif leading-[0.9] mb-8"
            >
              Prevention is the <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-white">cure nobody sells.</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed max-w-3xl mb-12"
            >
              Modern medicine waits for symptoms. Kyeal waits for nothing. We decode your unique genetic vulnerabilities and neutralize them with precision nutrition before they ever become a diagnosis.
            </motion.p>
            
            <motion.div variants={itemVariants} className="crisis-stats-grid">
               <div className="crisis-stat hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] transition-all duration-300 rounded-xl p-4 cursor-default">
                  <h4>₹178.6B</h4>
                  <p>India’s supplement market dominated by generic products your body can’t optimise without knowing your DNA.</p>
               </div>
               <div className="crisis-stat hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] transition-all duration-300 rounded-xl p-4 cursor-default">
                  <h4>71%</h4>
                  <p>Of supplement users never consult a doctor making blind decisions about their biology.</p>
               </div>
               <div className="crisis-stat hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] transition-all duration-300 rounded-xl p-4 cursor-default">
                  <h4>69%</h4>
                  <p>Of doctors don’t recommend targeted formulations the system isn’t built for precision prevention.</p>
               </div>
             </motion.div>

             <motion.div variants={itemVariants} className="dna-changes-banner hover:shadow-[0_10px_40px_rgba(46,204,113,0.15)] transition-shadow duration-500">
               <h4>DNA Changes Everything</h4>
               <p>Kyeal maps your genetic risk profile and builds a preventive health plan that stops disease before it starts.</p>
            </motion.div>
         </motion.div>
      </section>

      {/* HISTORY & WISDOM SECTION */}
      <section className="history-wisdom-section py-32 bg-[#0A0B0A] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2ECC71]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2ECC71]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="inline-block text-[#2ECC71] text-xs font-bold uppercase mb-6"
            >
              Universal Truths
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold text-white font-serif mb-8 leading-none"
            >
              History is also <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">with us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#94A3B8] text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Precision health isn't a new concept. It's the ultimate evolution of wisdom that has guided humanity for millennia.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {historyQuotes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#2ECC71]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute -top-4 -right-2 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                  <span className="text-[12rem] font-serif text-white">“</span>
                </div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-6 bg-[#2ECC71]" />
                    <span className="text-[#2ECC71] text-[10px] font-black tracking-[0.4em] uppercase">
                      {item.source}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-medium text-white font-serif leading-tight italic group-hover:text-[#2ECC71] transition-colors duration-500">
                    {item.quote}
                  </h4>
                  
                  <p className="text-[#94A3B8] text-lg leading-relaxed font-light group-hover:text-white/90 transition-colors duration-500">
                    {item.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="timeline-journey">
        <div className="timeline-header">
          <span
            className="section-kicker"
            style={{ display: "block", textAlign: "center" }}
          >
            Your Preventive Health Journey
          </span>
          <h2
            className="section-heading-main"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            From DNA to Daily Prevention.
          </h2>
          <p className="section-desc" style={{ marginBottom: "80px", textAlign: "center" }}>
            Five steps from a simple cheek swab to a lifelong, evolving preventive health system built on your genetics.
          </p>
        </div>
        <div className="timeline-container">
          <div className="timeline-central-line" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="step-circle">{step.no}</div>
                  <div className="w-5 h-5 rounded-md bg-[#2ECC71]/20 flex items-center justify-center">
                    <CheckCircle2 size={10} className="text-[#2ECC71]" />
                  </div>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DISCOVERIES GRID */}
      <section className="discoveries-section-v2">
        <motion.div
          className="section-intro"
          style={{ textAlign: "center", marginBottom: "60px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="section-kicker">Nutrigenomics in Action</motion.span>
          <motion.h2 variants={itemVariants} className="section-heading-main">Your Plate Is a Prescription.</motion.h2>
          <motion.p variants={itemVariants} className="section-desc">
            DNA based preventive healthcare starts at the dinner table. Your genes determine how your body responds to every nutrient.
          </motion.p>
        </motion.div>
        <motion.div 
          className="discoveries-grid-v2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {discoveries.map((d, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="discovery-card-minimal hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(46,204,113,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-6 h-6 rounded-lg bg-[#2ECC71]/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-[#2ECC71]" />
                </div>
                <h4 className="m-0">{d.title}</h4>
              </div>
              <p>{d.desc}</p>
              <div className="card-acc"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="difference-section">
         <motion.div 
           className="section-intro" 
           style={{textAlign: "center", marginBottom: "60px"}}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            <motion.span variants={itemVariants} className="section-kicker">The Science & Difference</motion.span>
            <motion.h2 variants={itemVariants} className="section-heading-main">Why Kyeal Isn't Just Another DNA Test</motion.h2>
            <motion.p variants={itemVariants} className="section-desc">Most DNA testing services in India stop at the report. Kyeal starts where they stop.</motion.p>
         </motion.div>
         <motion.div 
           className="diff-comparison"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            <motion.div variants={itemVariants} className="diff-card others hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all duration-300">
               <div className="diff-header">Others: PDF Report. No Follow-Through.</div>
               <p>Standard genetic tests give you data then leave you alone. No meals. No supplements. No ongoing support.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="diff-card kyeal hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(46,204,113,0.15)] transition-all duration-300">
               <div className="diff-header">Kyeal: DNA → Meals → Supplements → Monitoring.</div>
               <p>Complete preventive health loop: genetic analysis → 4 expert interpretation → daily personalised meals → monthly supplements → quarterly biomarker reviews → annual reassessment.</p>
            </motion.div>
         </motion.div>
         <motion.div 
           className="partners-banner"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
         >
            <span><strong>Illumina Infinium™</strong> Gold standard genotyping technology.</span>
            <span><strong>NABL & CAP Certified</strong> India’s highest lab accreditation standards.</span>
            <span><strong>Tata Memorial Research</strong> Active cancer research collaboration.</span>
            <span><strong>MapMyGenome Partner</strong> ISO, HIPAA, and CAP certified genomics.</span>
         </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
         <motion.div 
           className="section-intro" 
           style={{textAlign: "center", marginBottom: "60px"}}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            <motion.span variants={itemVariants} className="section-kicker">Frequently Asked Questions</motion.span>
            <motion.h2 variants={itemVariants} className="section-heading-main">Questions About Kyeal</motion.h2>
         </motion.div>
         <motion.div 
           className="faq-container"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
         >
            {faqs.map((f, i) => (
              <motion.div key={i} variants={itemVariants}>
                <FAQItem question={f.q} answer={f.a} />
              </motion.div>
            ))}
         </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-v3">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="command-center-box"
        >
          <div className="cta-left">
            <span className="section-kicker">Begin Your Journey</span>
            <h2 className="section-heading-main">
              Stop Treating Symptoms. <br />
              <span className="gradient-text">Start Preventing Them.</span>
            </h2>
            <p className="section-desc" style={{ marginLeft: 0, textAlign: 'left' }}>
              One DNA test. Five pillars of precision prevention. A lifelong partner that knows your biology better than any generic diet plan ever could.
            </p>
          </div>
          <div className="cta-right">
            <button 
              className="btn-primary-pro" 
              style={{width: '100%', justifyContent: 'center', marginBottom: '15px'}}
              onClick={() => navigate('/product')}
            >
              Start My DNA Blueprint ₹19,999
            </button>
            <button className="btn-secondary-pro" style={{width: '100%', justifyContent: 'center'}} onClick={() => navigate('/contact')}>Talk to Our Team</button>
          </div>
        </motion.div>
        <div className="footer-credits">
           Powered by Illumina Infinium™ · NABL Certified Lab · MapMyGenome Partner · Tata Memorial Hospital Research
        </div>
      </section>
    </main>
  );
};

export default Home;