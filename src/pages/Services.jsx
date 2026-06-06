import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dna,
  Utensils,
  Pill,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0B0A] text-[#E0F0C1] overflow-hidden relative pt-24 md:pt-36 pb-20 md:pb-28">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#2ECC71]/10 to-transparent pointer-events-none" />
      <div className="absolute top-40 right-[-150px] w-[600px] h-[600px] bg-[#2ECC71] rounded-full blur-[180px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[-150px] w-[500px] h-[500px] bg-[#2ECC71] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HERO HEADER & FLYER DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] text-xs font-bold tracking-widest uppercase mb-6">
            Precision Optimization
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-serif text-white leading-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">Services</span>
          </h1>
          <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
            Kyeal’s DNA Wellness Report provides a comprehensive and confidential analysis of your unique genetic profile, covering nutrients, metabolic traits, disease risks, allergies, and wellness factors. It translates your DNA insights into clear, actionable recommendations for diet, supplements, lifestyle, and preventive care. Every section is personalized—helping you understand your strengths and risks across nutrition, fitness, skin/hair, chronic conditions, and response to medications. Delivered in a user-friendly format with expert support, this report empowers you to make smarter health decisions and achieve optimal well-being based on science.
          </p>
        </motion.div>

        {/* 3 CORE SERVICE SECTIONS GRID */}
        <section className="mb-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "report",
                name: "DNA Wellness Report",
                desc: "View your genetic baseline markers, health scores, and 15 focus area diagnostics.",
                icon: <Dna className="w-8 h-8 text-[#2ECC71]" />
              },
              {
                id: "meals",
                name: "DNA-Based Meal Delivery",
                desc: "Explore your nutrigenomic daily meals, energy requirements, and food allergen exclusions.",
                icon: <Utensils className="w-8 h-8 text-[#2ECC71]" />
              },
              {
                id: "supplements",
                name: "Personalized Supplement",
                desc: "Examine bio-individual micronutrient formulations and absorption-tuned dosages.",
                icon: <Pill className="w-8 h-8 text-[#2ECC71]" />
              }
            ].map((section, idx) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => navigate(`/report-detail?section=${section.id}`)}
                className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/5 hover:scale-[1.03] transition-all duration-500 flex flex-col justify-between text-left group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <div>
                  <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-[#2ECC71]/15 text-white group-hover:text-[#2ECC71] transition-all duration-300 w-fit mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                    {section.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 font-serif group-hover:text-[#2ECC71] transition-colors">{section.name}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">{section.desc}</p>
                </div>
                
                <span className="text-xs font-black text-[#2ECC71] uppercase tracking-widest flex items-center gap-1.5 group-hover:translate-x-1 transition-all mt-auto">
                  View Report <ArrowRight size={14} />
                </span>
              </motion.button>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Services;
