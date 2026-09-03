import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Dna, 
  Activity, 
  Microscope, 
  Stethoscope, 
  HeartPulse, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight,
  GitBranch,
  Layers,
  Cpu,
  Apple,
  Dumbbell,
  Shield,
  Sprout,
  RefreshCw,
  Award,
  Users,
  Binary
} from 'lucide-react';
import "../style/home.css";

// Import Advisor Images
import DrBeenaImg from "../assets/Dr beena .jpeg";
import DrShaestaImg from "../assets/Dr shaesta.jpeg";
import JayakrishnanImg from "../assets/jayakrishnan.jpeg";

const Science = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const advisors = [
    {
      name: "DR. BEENA P.S.",
      role: "Scientific Advisor — Genomics & Molecular Biology",
      affiliation: "Director, OmicsGen LifeSciences Pvt. Ltd.",
      image: DrBeenaImg,
      highlight: "15+ years in genomics, molecular biology & NGS research",
      education: "Ph.D. in Biotechnology from Cochin University of Science & Technology (CUSAT)",
      experience: "Founder & Director of OmicsGen • Former COO at RGCS",
      bio: "Her work spans translational genomics, molecular biology, NGS, and laboratory operations — connecting genomic research with real-world implementation. At Kyeal, she drives our DNA testing framework, scientific validation, regulatory readiness, and innovation roadmap.",
      expertise: [
        "Genomics",
        "Next-Generation Sequencing",
        "Molecular Biology",
        "Translational Genomics",
        "Laboratory Operations",
        "Scientific Validation"
      ]
    },
    {
      name: "DR. SHAESTA MEHTA",
      role: "Senior Professor & Consultant — Gastroenterology",
      affiliation: "Tata Memorial Hospital, Mumbai",
      image: DrShaestaImg,
      highlight: "50+ peer-reviewed publications across major medical journals",
      education: "Senior Professor & Consultant in Gastrointestinal Oncology",
      experience: "Multi-center national cancer research initiatives • Advanced endoscopic oncology",
      bio: "Extensive clinical and research expertise across gastroenterology, GI cancers, pancreatic-biliary disease, and endoscopic oncology. Her clinical research investigates outcomes, safety, survival, and evidence-based pathways, grounding Kyeal's gut and preventive insights in clinical reality.",
      expertise: [
        "Gastroenterology",
        "GI Oncology",
        "Endoscopic Oncology",
        "Cancer Research",
        "Clinical Outcomes",
        "Evidence-Based Practice"
      ]
    },
    {
      name: "JAYAKRISHNAN P",
      role: "Clinical Advisor — Reproductive Science & Embryology",
      affiliation: "Clinical Embryologist",
      image: JayakrishnanImg,
      highlight: "Master's in Clinical Embryology & Reproductive Medicine Specialist",
      education: "Master's Degree in Clinical Embryology • B.Sc. Life Sciences (Biotech & Micro)",
      experience: "IVF & ICSI procedures • Former Head Clinical Advisor at Kyeal Wellness",
      bio: "Hands-on expertise in assisted reproductive technology, semen DFI analysis, cryopreservation, embryo culture, grading, and biopsy. He steers Kyeal's expansion into fertility, reproductive health, preconception wellness, and maternal nutrition.",
      expertise: [
        "Clinical Embryology",
        "IVF & ICSI Protocols",
        "Reproductive Science",
        "Embryo Biology",
        "Fertility Care",
        "Assisted Reproductive Tech"
      ]
    }
  ];

  const scientificPillars = [
    { title: "Genetics & Genomics", desc: "Deciphering genetic variation, inherited traits, and functional genomic markers.", icon: Dna },
    { title: "Molecular Biology", desc: "Connecting genetic blueprints with biological mechanisms and cellular pathways.", icon: Binary },
    { title: "Next-Gen Sequencing (NGS)", desc: "Leveraging cutting-edge high-throughput sequencing for deep genomic mapping.", icon: Microscope },
    { title: "Microbiome Science", desc: "Analyzing complex bacterial, fungal, and viral ecosystems in the gut.", icon: Activity },
    { title: "Metagenomics", desc: "Evaluating microbial genetic material to map metabolic and digestive pathways.", icon: GitBranch },
    { title: "Clinical Biomarkers", desc: "Interpreting blood chemistry to understand real-time physiological status.", icon: HeartPulse },
    { title: "Reproductive Science", desc: "Integrating embryological and fertility insights for preconception wellness.", icon: Sprout },
    { title: "Bioinformatics & AI", desc: "Transforming vast multi-dimensional datasets into structured actionable insights.", icon: Cpu },
    { title: "Multi-Omics Integration", desc: "Synthesizing DNA, microbiome, and blood layers into a unified profile.", icon: Layers },
    { title: "Precision Health", desc: "Translating rigorous multi-system science into personalized lifestyle protocols.", icon: Sparkles },
  ];

  const methodologySteps = [
    { step: "01", title: "Sample Collection", desc: "Non-invasive, standardized collection via clinical swabs and certified blood panels.", icon: Dna },
    { step: "02", title: "High-Res Measurement", desc: "Whole Exome Sequencing (WES) & metagenomic sequencing in NABL/CAP labs.", icon: Microscope },
    { step: "03", title: "Quality Control", desc: "Rigorous analytical quality checks ensuring read depth, accuracy, and reproducibility.", icon: ShieldCheck },
    { step: "04", title: "Bioinformatics Pipeline", desc: "Computational variant calling, functional annotation, and pathway mapping.", icon: Cpu },
    { step: "05", title: "Scientific Interpretation", desc: "Evaluating variants against peer-reviewed clinical databases and ICMR guidelines.", icon: Stethoscope },
    { step: "06", title: "Multi-Omics Integration", desc: "Health OS synthesizes genomic stability, microbiome dynamics, and blood metrics.", icon: Layers },
    { step: "07", title: "Human Clinical Oversight", desc: "Review by genetic counselors, clinical dietitians, and medical advisors.", icon: Users },
    { step: "08", title: "Personalized Action", desc: "Dynamic protocols across nutrition, micro-supplementation, fitness, and lifestyle.", icon: Sparkles }
  ];

  const healthDimensions = [
    {
      title: "Nutrition & Metabolism",
      desc: "Understand how genetic variants and physiological markers shape macronutrient efficiency, micronutrient requirements, food intolerances, and metabolic targets.",
      icon: Apple,
      color: "from-emerald-500/20 to-green-500/5",
      accent: "#2ECC71"
    },
    {
      title: "Fitness & Recovery",
      desc: "Use your muscle fiber profile, VO2 max genetic ceiling, injury predisposition, and recovery markers to design scientifically optimal training regimens.",
      icon: Dumbbell,
      color: "from-cyan-500/20 to-blue-500/5",
      accent: "#38BDF8"
    },
    {
      title: "Preventive Health",
      desc: "Identify clinically meaningful signals across cardiovascular, metabolic, and inherited risks early, empowering proactive clinical consultations.",
      icon: Shield,
      color: "from-amber-500/20 to-orange-500/5",
      accent: "#F59E0B"
    },
    {
      title: "Reproductive & Maternal Health",
      desc: "Informed by clinical embryology and reproductive science, optimize cellular fertility markers, prenatal wellness, and trimester-specific nutrition.",
      icon: Sprout,
      color: "from-purple-500/20 to-pink-500/5",
      accent: "#EC4899"
    },
    {
      title: "Longitudinal Health Intelligence",
      desc: "Your biology evolves. Kyeal tracks continuous shifts in gut composition and blood chemistry over time, refining recommendations dynamically.",
      icon: RefreshCw,
      color: "from-lime-500/20 to-emerald-500/5",
      accent: "#A3E635"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0B0A] text-white selection:bg-[#2ECC71] selection:text-black overflow-hidden relative pt-28 md:pt-36 pb-24">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2ECC71] via-emerald-400 to-[#2ECC71] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[#2ECC71]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-200px] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-200px] w-[600px] h-[600px] bg-[#2ECC71]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Hero Section */}
        <section className="mb-32 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] text-xs font-bold uppercase tracking-[0.25em] mb-6"
          >
            <Microscope size={14} />
            <span>The Science Behind Kyeal</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 font-serif leading-[1.1]"
          >
            Your biology isn't generic. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#2ECC71]">
              Your health plan shouldn't be either.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-[#94A3B8] leading-relaxed font-light mb-10"
          >
            Kyeal is building a precision-health platform that brings together <strong className="text-white font-medium">genomics, microbiome science, clinical biomarkers, nutrition science, and computational intelligence</strong> to create a more complete picture of individual biology.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2ECC71]/10 rounded-full blur-3xl" />
            <p className="text-xl md:text-2xl font-serif italic text-white/90 mb-3">
              "Sophisticated biology requires more than sophisticated technology. <br className="hidden md:inline" />
              <span className="text-[#2ECC71] font-sans font-bold not-italic">It requires scientific oversight.</span>"
            </p>
            <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto">
              Our scientific and clinical advisory network unites world-class leaders across genomics, next-generation sequencing, molecular biology, gastroenterology, oncology, reproductive science, and clinical embryology.
            </p>
          </motion.div>
        </section>

        {/* Section: Scientific & Clinical Advisors */}
        <section className="mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2ECC71] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Expert Oversight
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
              Our Scientific & Clinical Advisors
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg">
              Different disciplines working in synergy to build one cohesive, actionable biological picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#2ECC71]/40 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2ECC71]/5 rounded-full blur-3xl group-hover:bg-[#2ECC71]/15 transition-all duration-700 pointer-events-none" />
                
                <div className="space-y-6">
                  {/* Advisor Portrait & Affiliation Badge */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-[#2ECC71]/50 transition-all duration-500 shadow-xl bg-white/5">
                      <img 
                        src={advisor.image} 
                        alt={advisor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 text-[#2ECC71] text-[10px] font-bold uppercase tracking-wider max-w-full">
                        <Award size={12} className="shrink-0" />
                        <span className="leading-snug break-words">{advisor.affiliation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Name and Role - Full width for crisp un-truncated typography */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight group-hover:text-[#2ECC71] transition-colors leading-tight">
                      {advisor.name}
                    </h3>
                    <p className="text-xs font-bold tracking-widest text-[#2ECC71] uppercase leading-relaxed">
                      {advisor.role}
                    </p>
                  </div>

                  {/* Highlight bar */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                    {advisor.highlight}
                  </div>

                  {/* Bio */}
                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed font-light">
                    {advisor.bio}
                  </p>
                </div>

                {/* Expertise Pills */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-[10px] text-[#94A3B8]/70 uppercase tracking-widest font-bold block mb-3">
                    Areas of Expertise
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {advisor.expertise.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#94A3B8] group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section: The Biological Trinity */}
        <section className="mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2ECC71] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Multi-Layered Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
              The Biological Trinity
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg">
              Most health decisions are built around isolated measurements. But human biology is a dynamic, interconnected system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 01 DNA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#2ECC71]/50 transition-all duration-500 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-white/10 font-mono group-hover:text-[#2ECC71]/30 transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] border border-[#2ECC71]/20">
                    <Dna size={24} />
                  </div>
                </div>
                <span className="text-[#2ECC71] text-[10px] font-bold uppercase tracking-widest block mb-1">Your Genetic Foundation</span>
                <h3 className="text-2xl font-bold font-serif text-white mb-4">DNA (Genomics)</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-light">
                  Your DNA contains biological instructions that remain relatively stable throughout your life. Powered by <strong className="text-white">Whole Exome Sequencing (WES)</strong>, we map thousands of protein-coding regions to uncover traits in metabolism, nutrition, fitness, pharmacogenomics, and inherited disease risks.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#2ECC71]/5 border border-[#2ECC71]/20 text-xs font-medium text-[#2ECC71]">
                ⚡ DNA gives us the permanent baseline foundation.
              </div>
            </motion.div>

            {/* 02 GUT MICROBIOME */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#38BDF8]/50 transition-all duration-500 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-white/10 font-mono group-hover:text-[#38BDF8]/30 transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] border border-[#38BDF8]/20">
                    <Activity size={24} />
                  </div>
                </div>
                <span className="text-[#38BDF8] text-[10px] font-bold uppercase tracking-widest block mb-1">Living Ecosystem</span>
                <h3 className="text-2xl font-bold font-serif text-white mb-4">Gut Microbiome</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-light">
                  Unlike your genome, your microbiome is dynamic and responsive to diet, lifestyle, and environment. We analyze microbial diversity, bacterial, fungal, and viral communities, and functional pathways to understand digestion, inflammation, and gut-brain signaling.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#38BDF8]/5 border border-[#38BDF8]/20 text-xs font-medium text-[#38BDF8]">
                🌱 Your microbiome changes. Your strategy evolves with it.
              </div>
            </motion.div>

            {/* 03 BLOOD */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#F59E0B]/50 transition-all duration-500 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-white/10 font-mono group-hover:text-[#F59E0B]/30 transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] border border-[#F59E0B]/20">
                    <HeartPulse size={24} />
                  </div>
                </div>
                <span className="text-[#F59E0B] text-[10px] font-bold uppercase tracking-widest block mb-1">Physiological State</span>
                <h3 className="text-2xl font-bold font-serif text-white mb-4">Smart Blood</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-light">
                  Individual numbers rarely tell the complete story. Kyeal's Smart Blood methodology interprets cross-parameter biomarker relationships, longitudinal trends, and sub-clinical patterns to answer: <em className="text-white italic">"What does the overall pattern suggest right now?"</em>
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 text-xs font-medium text-[#F59E0B]">
                🩸 Blood tells us what is happening in real time.
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Health OS Intelligence Architecture */}
        <section className="mb-36 p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2ECC71]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] text-[10px] font-bold uppercase tracking-widest mb-3">
              The Engine
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
              Health OS: The Intelligence Layer
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg font-light">
              Connecting multi-dimensional biological inputs into a singular, structured computational model.
            </p>
          </div>

          {/* 4-Stage Workflow Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Stage 1: Data */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold font-serif text-white mb-2">RAW DATA</h3>
              <p className="text-xs text-[#2ECC71] font-mono uppercase tracking-wider mb-4">Inputs Ingested</p>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {['Whole Exome DNA', 'Gut Microbiome Metagenomics', 'Clinical Blood Biomarkers', 'Health & Family History', 'Dietary & Lifestyle Logs', 'Activity & Sleep Metrics'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2ECC71]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage 2: Interpretation */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold font-serif text-white mb-2">INTERPRETATION</h3>
              <p className="text-xs text-[#2ECC71] font-mono uppercase tracking-wider mb-4">Processing Engine</p>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {['Genomic Variant Annotation', 'Microbiome Diversity & Pathways', 'Cross-Biomarker Correlations', 'Longitudinal Pattern Tracking', 'Sub-Clinical Risk Detection', 'Multi-Omics Synthesis'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2ECC71]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage 3: Intelligence */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold font-serif text-white mb-2">INTELLIGENCE</h3>
              <p className="text-xs text-[#2ECC71] font-mono uppercase tracking-wider mb-4">Structured Output</p>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {['Prioritized Biological Insights', 'Metabolic & Nutrient Bottlenecks', 'Systemic Inflammation Alerts', 'Personalized Health Trajectory', 'Clinically Contextualized Scores', 'Dynamic Health Blueprint'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2ECC71]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage 4: Action */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] mb-4 font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-lg font-bold font-serif text-white mb-2">ACTION</h3>
              <p className="text-xs text-[#2ECC71] font-mono uppercase tracking-wider mb-4">Real-World Execution</p>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {['Precision Nutrition Protocols', 'Custom Supplement Formulations', 'Tailored Athletic Regimens', 'AI Coach Adaptive Guidance', 'Genetic Counselor Consultations', 'Continuous Health Monitoring'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#2ECC71]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Scientific Foundation Pillars */}
        <section className="mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2ECC71] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Comprehensive Domain Coverage
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
              Our Scientific Foundation
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg">
              Ten integrated biological disciplines fueling Kyeal's research and diagnostic pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {scientificPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/30 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#2ECC71] mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section: From Data to Action (Health Dimensions) */}
        <section className="mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2ECC71] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Translational Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
              From Data to Action
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg">
              Science is only useful when it informs better, highly customized daily decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthDimensions.map((dim, i) => {
              const Icon = dim.icon;
              return (
                <motion.div
                  key={dim.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${dim.accent}15`, color: dim.accent, border: `1px solid ${dim.accent}30` }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-white mb-3">
                      {dim.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                      {dim.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section: The Scientific Methodology Workflow */}
        <section className="mb-36">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2ECC71] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
              Step-by-Step Rigor
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4">
              The Scientific Methodology
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg">
              How raw biological samples transform into high-confidence actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/30 transition-all relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#2ECC71] px-2.5 py-1 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20">
                      STAGE {step.step}
                    </span>
                    <Icon size={18} className="text-[#94A3B8]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-light">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section: Evidence Over Hype & Four Pillars of Evolution */}
        <section className="mb-36">
          <div className="p-8 md:p-14 rounded-[2.5rem] bg-gradient-to-b from-[#2ECC71]/10 via-white/[0.02] to-transparent border border-[#2ECC71]/20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-[#2ECC71] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
                Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-serif mb-4 text-white">
                Evidence Over Hype
              </h2>
              <p className="text-[#94A3B8] text-base md:text-lg">
                We believe the future of personalized health should be built on rigorous clinical evidence, not buzzwords. Kyeal operates with NABL/CAP-certified laboratory partners, strict validation protocols, and comprehensive scientific advisory oversight.
              </p>
            </div>

            {/* Comparison Transformation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { from: "Generic Advice", to: "Personalized Protocols" },
                { from: "Reactive Treatment", to: "Preventive Optimization" },
                { from: "Isolated Data Points", to: "Integrated Multi-Omics" },
                { from: "Static PDF Reports", to: "Continuous Intelligence" },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 text-center flex flex-col justify-center">
                  <span className="text-xs text-red-400/80 line-through mb-1">{item.from}</span>
                  <div className="flex items-center justify-center gap-1.5 text-[#2ECC71] font-bold text-sm">
                    <ArrowRight size={14} />
                    <span>{item.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm md:text-base text-[#2ECC71] font-mono uppercase tracking-widest font-bold">
              Where Science Meets Intelligence
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold font-serif leading-tight text-white">
              Your biology is already telling a story. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">
                Kyeal is building the intelligence to help you read it.
              </span>
            </h2>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <Link 
                to="/services" 
                className="px-8 py-4 rounded-full bg-[#2ECC71] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#27ae60] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(46,204,113,0.3)] flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ChevronRight size={16} />
              </Link>
              <Link 
                to="/waitlist" 
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>Join AI Coach</span>
                <Sparkles size={16} className="text-[#2ECC71]" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Science;
