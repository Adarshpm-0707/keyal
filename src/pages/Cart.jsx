import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ShoppingCart, ShieldCheck, CreditCard, 
  Trash2, ChevronRight, CheckCircle2, 
  ArrowLeft, Plus, Minus, PackageOpen
} from "lucide-react";
import { useCart } from "../context/CartContext";
import "../style/home.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [processing, setProcessing] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate("/payment");
    }, 500);
  };

  const subtotal = getCartTotal();

  return (
    <div className="home-container min-h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 pt-24 md:pt-32 bg-[var(--bg-dark)] relative overflow-x-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[600px] lg:h-[800px] bg-[var(--glow)] rounded-full blur-[80px] md:blur-[150px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[1200px] min-h-[60vh] lg:h-[80vh] flex flex-col lg:flex-row bg-[var(--bg-card)]/80 backdrop-blur-3xl border border-white/5 rounded-[24px] md:rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl"
      >
        
        {/* ── LEFT: Order Manifest (Scrollable area) ── */}
        <div className="w-full lg:w-[65%] p-6 md:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col bg-white/[0.01]">
          <div className="flex items-center justify-between mb-6 lg:mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 md:p-3 rounded-2xl bg-[var(--stale-green-dim)] border border-[#2ECC71]/20">
                <ShoppingCart size={20} className="text-[#2ECC71]" />
              </div>
              <div>
                <h2 className="text-base md:text-xl font-black text-white tracking-tight uppercase italic leading-none gradient-text">Order Manifest</h2>
                <p className="text-[9px] md:text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest mt-1">Review selection</p>
              </div>
            </div>
            <span className="text-[10px] md:text-[12px] font-black text-[#2ECC71] tracking-widest uppercase px-3 py-1.5 rounded-xl bg-[var(--stale-green-dim)] border border-[#2ECC71]/20">
              {cartItems.length} {cartItems.length === 1 ? 'UNIT' : 'UNITS'}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto pr-1 md:pr-4 custom-scrollbar lg:max-h-full max-h-[50vh]">
            <AnimatePresence mode="popLayout">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group p-4 md:p-6 rounded-[20px] md:rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#2ECC71]/20 transition-all flex gap-4 md:gap-6 mb-4 relative"
                  >
                    <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shrink-0 bg-black/40">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="truncate">
                          <h3 className="text-white font-black text-xs md:text-sm lg:text-lg leading-tight mb-1 uppercase italic tracking-tighter truncate">{item.name}</h3>
                          <div className="text-[8px] md:text-[10px] text-[#2ECC71] font-black uppercase tracking-widest">Verified System</div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 rounded-lg md:rounded-xl hover:bg-red-500/10 text-[#94A3B8] hover:text-red-400 transition-all border border-transparent hover:border-red-500/20"
                        >
                          <Trash2 size={14} className="md:w-4 md:h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 md:gap-4 bg-black/40 rounded-xl p-1 border border-white/5">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#94A3B8] hover:text-white transition-all"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-[10px] md:text-sm font-black text-white w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#94A3B8] hover:text-white transition-all"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-[#F8FAFC] font-black text-sm md:text-lg lg:text-xl tracking-tighter">₹{(item.price * item.quantity).toLocaleString("en-IN")}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
                  <PackageOpen size={48} className="text-[#94A3B8] opacity-20 mb-4" />
                  <h3 className="text-lg font-black text-white mb-2 uppercase italic">Manifest Empty</h3>
                  <button 
                    onClick={() => navigate("/product")}
                    className="mt-4 px-6 py-2.5 bg-[#2ECC71] text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    Initiate Selection
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
            <button onClick={() => navigate("/product")} className="text-[10px] md:text-[12px] font-black text-[#94A3B8] hover:text-[#2ECC71] transition-all flex items-center gap-2 uppercase tracking-widest group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
            </button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-[#2ECC71]/20">
              <div className="w-4 h-4 flex items-center justify-center rounded bg-[#2ECC71]/10 border border-[#2ECC71]/20">
                <ShieldCheck size={10} className="text-[#2ECC71]" />
              </div>
              <span className="text-[9px] md:text-[11px] font-black text-[#2ECC71] uppercase tracking-widest">Secure Stream</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Technical Summary ── */}
        <div className="w-full lg:w-[35%] p-6 md:p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-b from-white/[0.03] to-transparent relative">
          
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="h-[1px] flex-1 bg-white/10" />
              <div className="text-[10px] md:text-[12px] font-black text-[#2ECC71] tracking-[0.3em] uppercase">Summary</div>
              <div className="h-[1px] w-6 bg-white/10" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8] text-[11px] md:text-[13px] font-medium uppercase tracking-widest">Subtotal</span>
                <span className="text-white font-black tracking-tight">₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94A3B8] text-[11px] md:text-[13px] font-medium uppercase tracking-widest">Logistics</span>
                <span className="text-[#2ECC71] font-black uppercase text-[10px]">Free</span>
              </div>
              
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-black text-[#2ECC71] uppercase tracking-widest mb-1">Total Valuation</div>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-black text-[#2ECC71] tracking-tighter leading-none">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 md:p-5 rounded-2xl border border-white/5 bg-black/40 hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <CreditCard size={18} className="text-[#2ECC71]" />
                <span className="text-[10px] md:text-[12px] font-black text-white uppercase">Payment Gateway</span>
              </div>
              <div className="flex justify-between items-center opacity-60 text-[8px] md:text-[9px] font-black text-white uppercase tracking-widest">
                <span>VISA · MC · UPI</span>
                <CheckCircle2 size={12} className="text-[#2ECC71]" />
              </div>
            </div>

            <motion.button
              whileHover={cartItems.length > 0 ? { scale: 1.02 } : {}}
              whileTap={cartItems.length > 0 ? { scale: 0.98 } : {}}
              onClick={handleCheckout}
              disabled={processing || cartItems.length === 0}
              className={`w-full h-14 md:h-16 lg:h-20 rounded-xl md:rounded-[24px] font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 relative overflow-hidden transition-all ${cartItems.length > 0 ? 'bg-[#2ECC71] text-black shadow-[0_10px_30px_rgba(46,204,113,0.2)]' : 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'}`}
            >
              {processing ? "AUTHENTICATING..." : (
                <>Checkout <ChevronRight size={18} /></>
              )}
              {processing && (
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/20 skew-x-12"
                />
              )}
            </motion.button>
          </div>

          {/* Technical Hash Background Text - Hidden on small mobile */}
          <div className="hidden lg:block absolute top-1/2 -right-20 -translate-y-1/2 rotate-90 opacity-[0.03] text-[80px] font-black text-[#2ECC71] pointer-events-none whitespace-nowrap">
            SECURE_PAY_V4
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;