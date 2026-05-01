import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart, Shield, Activity, CheckCircle2,
  Star, RotateCcw, Layers, Microscope, Beaker, Truck
} from "lucide-react";
import products from "../data/productsData";
import { useCart } from "../context/CartContext";
import "../style/home.css";

const Product = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("overview");
  const [added, setAdded] = useState(false);
  
  const product = products[0];
  const {
    name, badge, image, description,
    price, originalPrice, rating, reviews, features
  } = product;

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      navigate("/cart");
    }, 500);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Layers },
    { id: "specs", label: "System Specs", icon: Activity },
    { id: "science", label: "Lab Science", icon: Microscope },
    { id: "trust", label: "Trust Protocols", icon: Shield },
  ];

  return (
    <div className="home-container" style={{ minHeight: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px 40px 20px", overflowX: "hidden", position: "relative", background: "var(--bg-dark)" }}>
      
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-[var(--glow)] rounded-full blur-[100px] lg:blur-[200px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[300px] lg:w-[800px] h-[300px] lg:h-[800px] bg-[var(--stale-green-dim)] rounded-full blur-[100px] lg:blur-[150px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[1050px] h-auto lg:h-[80vh] flex flex-col lg:flex-row bg-[var(--bg-card)]/90 backdrop-blur-3xl border border-white/5 rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)]"
      >
        
        {/* ── LEFT: Focal Visual (40%) ── */}
        <div className="w-full lg:w-[40%] h-auto lg:h-full flex flex-col items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 relative bg-gradient-to-br from-transparent to-white/[0.02] shrink-0">
          <div className="absolute top-6 lg:top-10 left-6 lg:left-10">
            <span className="text-[10px] lg:text-[12px] font-black text-[#2ECC71] tracking-[0.4em] uppercase opacity-40">System Core v4.0</span>
          </div>
          
          <motion.div 
            key={image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-[220px] lg:max-w-[360px] my-6 lg:my-0"
          >
            <img src={image} alt={name} className="w-full aspect-square object-cover rounded-[32px] lg:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10" />
            <div className="absolute inset-0 rounded-[32px] lg:rounded-[40px] overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#2ECC71]/10 to-transparent skew-y-12"
              />
            </div>
          </motion.div>

          <div className="text-center lg:mt-10">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-3xl lg:text-4xl font-black text-white tracking-tighter">₹{price.toLocaleString("en-IN")}</span>
              <span className="text-xs lg:text-sm text-[#94A3B8] line-through">₹{originalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="text-[10px] lg:text-[12px] font-black text-[#2ECC71] tracking-[0.3em] uppercase">Save {discount}% · Value Protection</div>
          </div>
        </div>

        {/* ── RIGHT: Data Interface (60%) ── */}
        <div className="flex-1 h-auto lg:h-full flex flex-col p-6 lg:p-12 relative overflow-hidden">
          
          {/* Horizontal Tab Bar */}
          <div className="flex items-center gap-4 lg:gap-8 mb-6 lg:mb-10 border-b border-white/5 pb-4 lg:pb-6 overflow-x-auto no-scrollbar scroll-smooth">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-2 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 shrink-0 ${activeTab === tab.id ? 'text-[#2ECC71]' : 'text-[#94A3B8] hover:text-white'}`}
              >
                <div className="flex items-center gap-2">
                  <tab.icon size={12} />
                  {tab.label}
                </div>
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2ECC71] shadow-[0_0_10px_#2ECC71]" />
                )}
              </button>
            ))}
            <div className="flex-1" />
            <button onClick={() => navigate("/cart")} className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#2ECC71] hover:border-[#2ECC71]/30 transition-all shrink-0">
              <ShoppingCart size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-4 mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {activeTab === "overview" && (
                  <div className="max-w-full lg:max-w-[580px]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-md bg-[#2ECC71]/10 text-[#2ECC71] text-[10px] lg:text-[12px] font-black uppercase tracking-[0.2em]">{badge}</span>
                      <div className="h-[1px] flex-1 bg-white/10" />
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-black text-white mb-4 lg:mb-6 tracking-tighter leading-[1] uppercase italic gradient-text">{name}</h1>
                    <div className="space-y-4 mb-8">
                      <p className="text-[#94A3B8] text-sm lg:text-base leading-relaxed uppercase font-bold tracking-tight opacity-80">{description}</p>
                    </div>
                    <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/5 w-fit">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#2ECC71" color="#2ECC71" />)}
                      </div>
                      <span className="text-[10px] lg:text-[12px] font-black text-white uppercase tracking-widest">{rating} · {reviews} Verified Reviews</span>
                    </div>
                  </div>
                )}

                {activeTab === "specs" && (
                  <div>
                    <h3 className="text-lg lg:text-xl font-black text-white mb-6 tracking-widest uppercase italic border-l-2 border-[#2ECC71] pl-4">System Architecture</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                      {features.map((f, i) => (
                        <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-[#2ECC71]/5 hover:border-[#2ECC71]/20 transition-all group cursor-default">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-md bg-[#2ECC71]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2ECC71] transition-all">
                              <CheckCircle2 size={12} className="group-hover:text-black" />
                            </div>
                            <span className="text-xs text-[#94A3B8] group-hover:text-white transition-colors font-bold leading-tight uppercase tracking-tight">{f}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "science" && (
                  <div className="space-y-6">
                    <h3 className="text-lg lg:text-xl font-black text-white mb-6 tracking-widest uppercase italic border-l-2 border-[#2ECC71] pl-4">Molecular Foundation</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { title: "Illumina Genotyping", desc: "Advanced array technology for SNP detection with >99.9% precision and call rates.", icon: Beaker },
                        { title: "Biomarker Mapping", desc: "Correlation of genetic markers with advanced metabolic pathways and nutritional absorption.", icon: Activity },
                      ].map((item, i) => (
                        <div key={i} className="p-5 lg:p-8 rounded-3xl border border-[#2ECC71]/10 bg-gradient-to-br from-[#2ECC71]/5 to-transparent flex gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center shrink-0">
                            <item.icon size={24} className="text-[#2ECC71]" />
                          </div>
                          <div>
                            <div className="text-[12px] font-black text-[#2ECC71] uppercase tracking-[0.2em] mb-2">{item.title}</div>
                            <p className="text-[13px] lg:text-[14px] text-[#94A3B8] leading-relaxed font-medium">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "trust" && (
                  <div className="space-y-6">
                    <h3 className="text-lg lg:text-xl font-black text-white mb-6 tracking-widest uppercase italic border-l-2 border-[#2ECC71] pl-4">Trust Protocols</h3>
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      {[
                        { icon: Shield, label: "NABL CERTIFIED", desc: "Accredited Lab Testing" },
                        { icon: Truck, label: "COLD CHAIN", desc: "Zero-risk Delivery" },
                        { icon: RotateCcw, label: "ANNUAL CYCLE", desc: "Precision Updates" },
                        { icon: CheckCircle2, label: "CAP ACCREDITED", desc: "American Pathologists" },
                      ].map((item, i) => (
                        <div key={i} className="p-4 lg:p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center">
                          <item.icon size={24} className="text-[#2ECC71] mb-3" />
                          <div className="text-[11px] lg:text-[12px] font-black text-white uppercase tracking-widest mb-1">{item.label}</div>
                          <p className="text-[10px] lg:text-[11px] text-[#94A3B8] font-bold leading-tight">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Fixed Action Bar at the Bottom */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 lg:gap-8 bg-transparent">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(46, 204, 113, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAdd}
              className="w-full sm:flex-1 h-[56px] lg:h-[72px] bg-[#2ECC71] text-black rounded-2xl font-black text-[12px] lg:text-[13px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(46,204,113,0.2)]"
            >
              <ShoppingCart size={20} strokeWidth={3} />
              {added ? "PROTOCOL INITIATED" : "ADD TO MANIFEST"}
            </motion.button>
            <div className="hidden lg:flex flex-col items-end opacity-60">
              <div className="text-[11px] font-black text-white leading-none mb-1 uppercase tracking-tighter">SECURE_GATEWAY_v4.0</div>
              <div className="text-[9px] font-bold text-[#2ECC71] uppercase tracking-[0.2em]">Authorized Access</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
