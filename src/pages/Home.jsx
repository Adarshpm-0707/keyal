import React, { useState } from "react";
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
  const rungs = Array.from({ length: 34 });

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
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const pillars = [
    { no: "01", title: "Mental Health", desc: "Neurological genetics shape your stress response, mood regulation, and cognitive function. Your DNA reveals what your brain needs to thrive.", icon: <Brain size={24} /> },
    { no: "02", title: "Physical Fitness", desc: "Muscle fibre profile, VO₂ ceiling, recovery rate — precision training prescriptions written in your genes. Not guesswork.", icon: <Zap size={24} /> },
    { no: "03", title: "Nutrition & Diet", desc: "Food as medicine — daily meals and targeted supplements tuned to how your body absorbs nutrients at the genetic level. Delivered to your door.", icon: <Utensils size={24} /> },
    { no: "04", title: "Preventive Health", desc: "Genetic flags for cancer, diabetes, cardiovascular disease — identified and intercepted before they become diagnoses. 18+ cancer-linked markers tracked.", icon: <ShieldCheck size={24} /> },
    { no: "05", title: "Continuous Monitoring", desc: "Quarterly biomarker blood panels, AI health coaching, and annual expert assessments. Your preventive protocol evolves as your biology does.", icon: <LineChart size={24} /> },
  ];

  const steps = [
    { no: "01", title: "DNA Blueprint Analysis", desc: "A single test through NABL & CAP-certified labs using Illumina Infinium™ technology across all 5 pillars." },
    { no: "02", title: "4-Expert Consultation Panel", desc: "Your results reviewed by a genetic counsellor, clinical dietitian, psychologist, and certified fitness trainer." },
    { no: "03", title: "Personalised Meals, Delivered Daily", desc: "DNA-matched meals delivered to your door — portioned, nutrient-aligned, and culturally appropriate." },
    { no: "04", title: "Targeted Monthly Supplements", desc: "Supplements matched to your exact absorption patterns, metabolic variants, and genetic risk markers." },
    { no: "05", title: "Annual Precision Health Review", desc: "Quarterly biomarker panels, clinical reviews, and AI monitoring. One DNA test — a lifelong protocol." },
  ];

  const discoveries = [
    { title: "Anti-Inflammatory Prevention", desc: "Inflammation is optional when you know your genetic triggers. Turmeric, walnuts, omega-3s — targeted to silence risk markers before they activate." },
    { title: "Cancer Risk Interception", desc: "18 cancer-linked genetic markers — identified, tracked, and countered with targeted nutritional interventions." },
    { title: "Metabolism Decoded", desc: "PPARG variants, B12 malabsorption, MTHFR pathways — each has a precise dietary answer that only your DNA can reveal." },
    { title: "Mental Wellness Nutrition", desc: "Serotonin, dopamine, cortisol — all modulated by what you eat. Your DNA reveals which nutritional levers to pull for optimal function." },
  ];

  const faqs = [
    { q: "What is DNA-based preventive healthcare?", a: "DNA-based preventive healthcare uses genetic testing to identify disease risks before symptoms appear. Kyeal is India's first company to offer this as a complete system, not just a test." },
    { q: "How much does the Kyeal program cost?", a: "Kyeal's DNA Blueprint starts at ₹20,000. Includes the DNA test, 5-pillar analysis, 4-expert panel, meal delivery, monthly supplements, and annual health review." },
    { q: "How is Kyeal different from other DNA tests?", a: "Other DNA tests give a PDF report — then stop. Kyeal delivers an ongoing system: daily meals, monthly supplements, quarterly biomarker reviews, and annual reassessment." },
    { q: "Are the labs certified?", a: "Yes. We use Illumina Infinium™ technology through NABL & CAP-certified labs, with research collaboration with Tata Memorial Hospital and MapMyGenome." },
    { q: "Can genetics really prevent cancer?", a: "Kyeal tracks 18+ cancer-linked genetic markers. Early identification of genetic risk combined with targeted nutrition significantly improves the odds of interception." }
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
            <span className="pulse-icon"></span> India's First DNA-Based Preventive Healthcare
          </div>
          <h1 className="hero-title-large">
            You Are What <br />
            <span className="gradient-text">You Eat.</span>
          </h1>
          <p className="hero-subtitle-pro">
            Your DNA holds the blueprint to preventing disease before it starts. We decode your genetics, then deliver personalised meals, targeted supplements, and a complete 5-pillar wellness protocol built around who you actually are.
          </p>
          <div className="hero-actions-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-pro"
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

      {/* NEW STATS BAND */}
      <motion.div 
        className="stats-band"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
          <h2>56%</h2>
          <p>Deaths in India linked to diet-related disease</p>
        </motion.div>
        <motion.div variants={itemVariants} className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
          <h2>101M+</h2>
          <p>Diabetics in India today</p>
        </motion.div>
        <motion.div variants={itemVariants} className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
          <h2>5 Pillars</h2>
          <p>Complete preventive wellness system</p>
        </motion.div>
        <motion.div variants={itemVariants} className="stat-item hover:scale-110 transition-transform duration-300 cursor-default">
          <h2>80%</h2>
          <p>Positive outcomes in pilot clients</p>
        </motion.div>
      </motion.div>

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
              Most healthcare waits for you to get sick, then treats symptoms. DNA-based preventive healthcare flips this model — using your genetic blueprint to identify risks years before symptoms appear.
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
               <p>Wait for symptoms → diagnose → treat with standard protocols. 56% of deaths in India are linked to diet-related disease.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="comp-card positive hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(46,204,113,0.15)] transition-all duration-500">
               <div className="comp-icon"><CheckCircle2 color="var(--stale-green)"/></div>
               <h3>Kyeal: Preventive. Personalised. Lifelong.</h3>
               <p>Decode your DNA → identify risks → prevent with precision nutrition. Every recommendation is built on your unique genetics.</p>
            </motion.div>
         </motion.div>
         <div className="science-banner">
            <h3>The Science Behind It</h3>
            <p>Kyeal applies nutrigenomics — the science of how genes interact with food — alongside genetic risk assessment, pharmacogenomics, and behavioural genetics to build India’s most comprehensive DNA-based preventive health plan.</p>
         </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="pillars-exploration">
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
            <p className="section-desc" style={{ textAlign: "center" }}>
              Most healthcare waits for you to get sick. We identify risks years before symptoms appear to protect your lifelong wellbeing.
            </p>
          </div>

          <div className="pillars-scroll-wrapper">
            {pillars.map((p) => (
              <motion.div
                key={p.no}
                variants={itemVariants}
                className="pillar-card-v2"
              >
                <div className="pillar-icon-wrapper">{p.icon}</div>
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
            <motion.span variants={itemVariants} className="section-kicker">The Crisis Nobody's Solving</motion.span>
            <motion.h2 variants={itemVariants} className="section-heading-main">Prevention is the cure nobody sells.</motion.h2>
            <motion.p variants={itemVariants} className="section-desc" style={{ marginLeft: 0, textAlign: 'left', maxWidth: '800px'}}>
              “Let food be thy medicine and medicine be thy food.” — Hippocrates, 400 BCE. Still ignored by modern healthcare. <br/><br/>
              India faces a preventable disease epidemic. Most chronic conditions could be intercepted years earlier with the right food for your specific body. Kyeal exists to change that equation.
            </motion.p>
            
            <motion.div variants={itemVariants} className="crisis-stats-grid">
               <div className="crisis-stat hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] transition-all duration-300 rounded-xl p-4 cursor-default">
                  <h4>₹178.6B</h4>
                  <p>India’s supplement market — dominated by generic products your body can’t optimise without knowing your DNA.</p>
               </div>
               <div className="crisis-stat hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] transition-all duration-300 rounded-xl p-4 cursor-default">
                  <h4>71%</h4>
                  <p>Of supplement users never consult a doctor — making blind decisions about their biology.</p>
               </div>
               <div className="crisis-stat hover:scale-105 hover:shadow-[0_10px_30px_rgba(46,204,113,0.1)] transition-all duration-300 rounded-xl p-4 cursor-default">
                  <h4>69%</h4>
                  <p>Of doctors don’t recommend targeted formulations — the system isn’t built for precision prevention.</p>
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="dna-changes-banner hover:shadow-[0_10px_40px_rgba(46,204,113,0.15)] transition-shadow duration-500">
               <h4>DNA Changes Everything</h4>
               <p>Kyeal maps your genetic risk profile and builds a preventive health plan that stops disease before it starts.</p>
            </motion.div>
         </motion.div>
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
                <div className="step-circle">{step.no}</div>
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
            DNA-based preventive healthcare starts at the dinner table. Your genes determine how your body responds to every nutrient.
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
              <h4>{d.title}</h4>
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
               <p>Standard genetic tests give you data — then leave you alone. No meals. No supplements. No ongoing support.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="diff-card kyeal hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(46,204,113,0.15)] transition-all duration-300">
               <div className="diff-header">Kyeal: DNA → Meals → Supplements → Monitoring.</div>
               <p>Complete preventive health loop: genetic analysis → 4-expert interpretation → daily personalised meals → monthly supplements → quarterly biomarker reviews → annual reassessment.</p>
            </motion.div>
         </motion.div>
         <motion.div 
           className="partners-banner"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
         >
            <span><strong>Illumina Infinium™</strong> — Gold-standard genotyping technology.</span>
            <span><strong>NABL & CAP Certified</strong> — India’s highest lab accreditation standards.</span>
            <span><strong>Tata Memorial Research</strong> — Active cancer research collaboration.</span>
            <span><strong>MapMyGenome Partner</strong> — ISO, HIPAA, and CAP certified genomics.</span>
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
            <button className="btn-primary-pro" style={{width: '100%', justifyContent: 'center', marginBottom: '15px'}}>Start My DNA Blueprint — ₹20,000</button>
            <button className="btn-secondary-pro" style={{width: '100%', justifyContent: 'center'}}>Talk to Our Team</button>
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