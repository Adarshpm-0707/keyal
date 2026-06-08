import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Dna,
  CheckCircle2,
  Activity,
  Utensils,
  ShieldCheck,
  AlertTriangle,
  Pill,
  Heart,
  Sparkles,
  Brain,
  Moon,
  Target,
  Ribbon,
  Ban,
  Scale,
  Leaf,
  Truck,
  Stethoscope,
  Tag,
  PlusCircle,
  ArrowRight
} from "lucide-react";

const diagnosticsList = [
  { name: "VITAMIN AND MINERAL", desc: "Absorption efficiency for Vitamins A, B, C, D, E, K.", icon: <Pill /> },
  { name: "CARDIO-METABOLIC", desc: "Cardiovascular endurance and lipid profiles.", icon: <Heart /> },
  { name: "HAIR & SKIN", desc: "Collagen elasticity and UV photo-aging sensitivity.", icon: <Sparkles /> },
  { name: "CARRIER STATUS", desc: "Screening of single-gene autosomal recessive conditions.", icon: <ShieldCheck /> },
  { name: "ADDICTIONS", desc: "Dopamine receptor sensitivity and dependency risks.", icon: <Brain /> },
  { name: "AUTOIMMUNE", desc: "Inflammatory responses and cytokine activity.", icon: <ShieldCheck /> },
  { name: "OBESITY & METABOLISM", desc: "FTO gene variants and carb-to-fat conversion.", icon: <Activity /> },
  { name: "NEUROLOGICAL", desc: "Cognitive markers and stress response traits.", icon: <Brain /> },
  { name: "SLEEP", desc: "Circadian clock tracking and sleep latency cycles.", icon: <Moon /> },
  { name: "LIVER & GASTRO", desc: "Hepatic detoxification and gut lining health.", icon: <Activity /> },
  { name: "WELLNESS TRAITS", desc: "Motivation, memory, and resilience factors.", icon: <Target /> },
  { name: "DIABETES", desc: "Insulin sensitivity and fasting glucose genetics.", icon: <Activity /> },
  { name: "FOOD ALLERGIES", desc: "Lactose, gluten, and histamine triggers.", icon: <AlertTriangle /> },
  { name: "PHARMACOGENOMICS", desc: "CYP450 drug clearance speeds and efficacy.", icon: <Pill /> },
  { name: "CANCERS", desc: "Hereditary tumor susceptibility markers.", icon: <Ribbon /> }
];

const mealsProgramList = [
  { name: "GENE MATCHED", desc: "Aligned with your genomic metabolic profile.", icon: <Dna /> },
  { name: "VITAMIN SUPPORT", desc: "Engineered for your micronutrient absorption.", icon: <Pill /> },
  { name: "ALLERGY VOID", desc: "Excludes your genetic allergen triggers.", icon: <Ban /> },
  { name: "WEIGHT CONTROL", desc: "Optimized for insulin stability.", icon: <Scale /> },
  { name: "FARM TO TABLE", desc: "Organic ingredients without preservatives.", icon: <Leaf /> },
  { name: "HOME DELIVERY", desc: "Temperature-controlled doorstep delivery.", icon: <Truck /> },
  { name: "READY TO EAT", desc: "Pre-portioned for seamless routine.", icon: <CheckCircle2 /> },
  { name: "DIETITIAN ACCESS", desc: "Certified clinical nutritionist support.", icon: <Stethoscope /> },
  { name: "GENETIC LABELS", desc: "Mapping nutrients to your markers.", icon: <Tag /> },
  { name: "ENERGY BOOST", desc: "Mitochondrial-supportive food selection.", icon: <PlusCircle /> }
];

const supplementsProgramList = [
  { name: "DNA MATCHED", desc: "Bio-individual vitamin formulas.", icon: <Dna /> },
  { name: "GAP FILLING", desc: "Fills identified genomic deficiencies.", icon: <Pill /> },
  { name: "ALLERGY SAFE", icon: <Ban />, desc: "100% hypoallergenic, filler-free." },
  { name: "CUSTOM DOSE", icon: <PlusCircle />, desc: "Optimized for your metabolic clearance." },
  { name: "GOAL ORIENTED", icon: <Target />, desc: "Promotes energy and immune function." },
  { name: "SUBSCRIPTION", icon: <Truck />, desc: "Recurring monthly home delivery." },
  { name: "EXPERT ADVICE", icon: <Stethoscope />, desc: "Consultation with clinical dietitians." },
  { name: "TRACKABLE FIT", icon: <Tag />, desc: "Ingredients connected to gene variants." },
  { name: "GMP QUALITY", icon: <CheckCircle2 />, desc: "Manufactured under strict safety standards." }
];

const ReportDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const sectionKey = searchParams.get("section") || "report";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionKey]);

  const handleTabChange = (key) => {
    setSearchParams({ section: key });
  };

  const getActiveData = () => {
    if (sectionKey === "meals") return { list: mealsProgramList, title: "DNA-BASED MEALS", score: 92, label: "NUTRITION FIT", color: "#2ECC71" };
    if (sectionKey === "supplements") return { list: supplementsProgramList, title: "PERSONALIZED SUPPLEMENTS", score: 95, label: "ABSORPTION FIT", color: "#2ECC71" };
    return { list: diagnosticsList, title: "DNA WELLNESS REPORT", score: 99.8, label: "GENETIC FIT", color: "#2ECC71" };
  };

  const activeData = getActiveData();

  return (
    <main className="min-h-screen bg-[#0A0B0A] text-[#E0F0C1] relative pb-20">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#2ECC71]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[40%] bg-[#2ECC71]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#2ECC71] transition-colors group"
            >
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Ecosystem
            </button>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
              PRECISION <span className="text-[#2ECC71]">HEALTH.</span>
            </h1>
          </div>

        </div>

        {/* Modern Tab Navigation */}
        <div className="flex p-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl mb-12 overflow-x-auto no-scrollbar">
          {[
            { id: "report", name: "Wellness Report", icon: <Dna size={16} /> },
            { id: "meals", name: "Meal Delivery", icon: <Utensils size={16} /> },
            { id: "supplements", name: "Supplementation", icon: <Pill size={16} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex flex-1 items-center justify-center gap-3 px-6 py-4 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                sectionKey === tab.id
                  ? "bg-[#2ECC71] text-black shadow-[0_0_20px_rgba(46,204,113,0.3)]"
                  : "text-[#94A3B8] hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* STICKY SIDEBAR (Score & CTA) */}
          <aside className="w-full lg:w-[350px] lg:sticky lg:top-32 space-y-6">
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ECC71]/10 blur-3xl group-hover:bg-[#2ECC71]/20 transition-all" />
              
              <div className="relative flex flex-col items-center">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#94A3B8] mb-8 uppercase">System Diagnostics</p>
                
                {/* Circular Gauge */}
                <div className="relative w-48 h-48 flex items-center justify-center mb-8">
                  <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(46,204,113,0.2)]">
                    <circle cx="96" cy="96" r="88" className="stroke-white/5" strokeWidth="6" fill="transparent" />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      className="stroke-[#2ECC71] transition-all duration-1000 ease-out"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={553}
                      strokeDashoffset={553 - (553 * activeData.score) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-5xl font-black text-white block tracking-tighter">{activeData.score}%</span>
                    <span className="text-[9px] text-[#2ECC71] font-black uppercase tracking-[0.2em]">{activeData.label}</span>
                  </div>
                </div>

                <div className="w-full space-y-4">

                    <p className="text-xs text-[#94A3B8] leading-relaxed text-center px-2">
                        Precision-engineered results based on 700,000+ genetic markers unique to your biological sequence.
                    </p>
                </div>

                <button
                  onClick={() => navigate("/product")}
                  className="w-full mt-8 py-4 bg-white text-black hover:bg-[#2ECC71] font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Unlock Full Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </aside>

          {/* DYNAMIC GRID (Features) */}
          <div className="flex-1 w-full">
            <div className="mb-8 px-2">
                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{activeData.title}</h2>
                <p className="text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
                    Our computational biology engine translates raw DNA data into actionable health protocols. 
                    Explore the dimensions of your personalized {sectionKey} plan below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
              {activeData.list.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/40 hover:bg-[#2ECC71]/5 transition-all duration-500 flex items-start gap-5"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-[#2ECC71] group-hover:scale-110 group-hover:bg-[#2ECC71] group-hover:text-black transition-all duration-500">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2 group-hover:text-[#2ECC71] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed group-hover:text-white/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

        
          </div>

        </div>
      </div>

      {/* Background Gradient for bottom */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0B0A] to-transparent pointer-events-none z-0" />
    </main>
  );
};

export default ReportDetail;