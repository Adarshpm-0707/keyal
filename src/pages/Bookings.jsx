import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Search, Calendar, ShoppingBag, 
  User, Mail, Phone, MapPin, ChevronDown, ChevronUp, RefreshCw, 
  CheckCircle2, Clock, Database, Sparkles
} from "lucide-react";
import { getAllOrders } from "../services/dbService";

const Bookings = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // 'all', 'paid', 'pending'
  const [activeTab, setActiveTab] = useState("orders"); // 'orders' | 'waitlist'
  const [expandedOrders, setExpandedOrders] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchOrders = async (silent = false) => {
    if (!silent) setLoading(true);
    else setIsRefreshing(true);
    
    try {
      const data = await getAllOrders();
      setOrders(data);
      setError("");
    } catch (err) {
      console.error("Error loading bookings:", err);
      setError("Failed to synchronize with primary database manifest. Please check your credentials or network rules.");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const toggleExpand = (orderId) => {
    setExpandedOrders(prev => ({ ...prev, [orderId]: !prev[orderId] }));
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    if (timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    try {
      return new Date(timestamp).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return String(timestamp);
    }
  };

  // Separate records into E-Commerce Purchase Orders and AI Coach Waitlist Signups
  const ecommerceOrders = orders.filter(order => order.type !== 'waitlist_signup' && !order.waitlistAnswers);
  const waitlistOrders = orders.filter(order => order.type === 'waitlist_signup' || order.waitlistAnswers);

  // Active dataset based on selected sidebar tab
  const currentDataset = activeTab === "orders" ? ecommerceOrders : waitlistOrders;

  // Search & Filter Logic
  const filteredRecords = currentDataset.filter(order => {
    const billing = order.billing || {};
    const answers = order.waitlistAnswers || {};
    
    const name = (order.customerName || billing.first_name || answers.q1_fullName || "").toLowerCase();
    const email = (billing.email || answers.q2_email || "").toLowerCase();
    const phone = (billing.phone || answers.q3_whatsapp || "").toLowerCase();
    const transactionId = (order.transaction_id || "").toLowerCase();
    const city = (billing.city || "").toLowerCase();
    
    const matchesSearch = 
      name.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase()) ||
      phone.includes(searchTerm.toLowerCase()) ||
      transactionId.includes(searchTerm.toLowerCase()) ||
      city.includes(searchTerm.toLowerCase());

    const isPaid = order.set_paid === true || order.payment_status === "successful" || order.type === 'waitlist_signup';
    
    if (statusFilter === "paid") {
      return matchesSearch && isPaid;
    } else if (statusFilter === "pending") {
      return matchesSearch && !isPaid;
    }
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-3">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[10px] font-bold text-[#94A3B8] hover:text-[#2ECC71] transition-colors uppercase tracking-[0.2em] group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Home
            </button>
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-[#2ECC71]"></div>
              <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic">
                Administrative Dashboard
              </h1>
            </div>
            <p className="text-xs text-[#94A3B8] font-semibold uppercase tracking-wider">
              Manage product orders & KYEAL AI Coach waitlist survey submissions
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => fetchOrders(true)}
              disabled={isRefreshing || loading}
              className="flex items-center gap-2 px-5 h-12 bg-white/[0.02] border border-white/10 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/[0.06] hover:border-[#2ECC71]/40 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw size={14} className={`${isRefreshing ? 'animate-spin text-[#2ECC71]' : ''}`} />
              {isRefreshing ? 'Synchronizing' : 'Sync Database'}
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
            {error}
          </div>
        )}

        {/* MAIN LAYOUT WITH SIDEBAR */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* SIDEBAR NAVIGATION (Desktop & Mobile Tabs) */}
          <div className="md:col-span-3 space-y-4">
            <div className="bg-[#141614] border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8] block px-2">
                Database Manifests
              </span>

              <div className="space-y-2">
                {/* Tab 1: Product Orders */}
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs font-bold cursor-pointer ${
                    activeTab === "orders"
                      ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_20px_rgba(46,204,113,0.3)]'
                      : 'bg-white/5 text-white/80 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag size={18} />
                    <span>Product Orders</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                    activeTab === "orders" ? 'bg-black/20 text-black' : 'bg-white/10 text-white/90'
                  }`}>
                    {ecommerceOrders.length}
                  </span>
                </button>

                {/* Tab 2: Waiting List Form */}
                <button
                  onClick={() => setActiveTab("waitlist")}
                  className={`w-full p-3.5 rounded-xl border transition-all flex items-center justify-between text-xs font-bold cursor-pointer ${
                    activeTab === "waitlist"
                      ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_20px_rgba(46,204,113,0.3)]'
                      : 'bg-white/5 text-white/80 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles size={18} />
                    <span>Waitlist Submissions</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                    activeTab === "waitlist" ? 'bg-black/20 text-black' : 'bg-white/10 text-white/90'
                  }`}>
                    {waitlistOrders.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="bg-[#141614] border border-white/10 rounded-2xl p-5 space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8] block">
                Manifest Stats
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center text-[#94A3B8]">
                  <span>Total Database Records</span>
                  <span className="font-mono text-white font-bold">{orders.length}</span>
                </div>
                <div className="flex justify-between items-center text-[#94A3B8]">
                  <span>E-Commerce Orders</span>
                  <span className="font-mono text-[#2ECC71] font-bold">{ecommerceOrders.length}</span>
                </div>
                <div className="flex justify-between items-center text-[#94A3B8]">
                  <span>AI Survey Registrations</span>
                  <span className="font-mono text-[#2ECC71] font-bold">{waitlistOrders.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT DISPLAY PANEL */}
          <div className="md:col-span-9 space-y-6">
            
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-[#141614] border border-white/10 p-4 rounded-2xl">
              <div className="relative w-full sm:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={`Search ${activeTab === "orders" ? "orders" : "waitlist entries"}...`}
                  className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-[#94A3B8]/50 focus:outline-none focus:border-[#2ECC71]"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {['all', 'paid', 'pending'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStatusFilter(filter)}
                    className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      statusFilter === filter
                        ? 'bg-[#2ECC71] text-black border-[#2ECC71]'
                        : 'bg-white/5 border-white/10 text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Section Header */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                {activeTab === "orders" ? (
                  <ShoppingBag size={20} className="text-[#2ECC71]" />
                ) : (
                  <Sparkles size={20} className="text-[#2ECC71]" />
                )}
                <h2 className="text-lg font-black uppercase tracking-tight">
                  {activeTab === "orders" ? "Product Purchase Orders Manifest" : "KYEAL AI Early Access Survey Applications"}
                </h2>
              </div>
              <span className="text-xs font-bold text-[#94A3B8]">
                Showing {filteredRecords.length} of {currentDataset.length} Entries
              </span>
            </div>

            {/* Record List */}
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center space-y-4 bg-[#141614] rounded-2xl border border-white/5">
                <div className="w-10 h-10 border-2 border-[#2ECC71] border-t-transparent rounded-full animate-spin"></div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                  Loading database manifests...
                </div>
              </div>
            ) : filteredRecords.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-[#141614] border border-white/5 space-y-3">
                <Database size={36} className="mx-auto text-white/20" />
                <div className="text-sm font-bold uppercase tracking-wider text-[#94A3B8]">
                  No Matching Records Found
                </div>
                <p className="text-xs text-white/40 max-w-sm mx-auto">
                  No records match parameters: search "{searchTerm}", status "{statusFilter}" in {activeTab === "orders" ? "Orders" : "Waitlist"}.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRecords.map((order) => {
                  const orderId = order.id;
                  const isExpanded = !!expandedOrders[orderId];
                  const billing = order.billing || {};
                  const shipping = order.shipping || {};
                  const lineItems = order.line_items || [];
                  const answers = order.waitlistAnswers || {};
                  const isPaid = order.set_paid === true || order.payment_status === "successful" || order.type === 'waitlist_signup';
                  const isWaitlistRecord = order.type === 'waitlist_signup' || !!order.waitlistAnswers;

                  return (
                    <div 
                      key={orderId}
                      className={`rounded-2xl bg-[#141614] border transition-all overflow-hidden ${
                        isExpanded ? 'border-[#2ECC71]/40 shadow-2xl' : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Summary Row */}
                      <div 
                        onClick={() => toggleExpand(orderId)}
                        className="p-5 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-4 cursor-pointer select-none"
                      >
                        {/* Icon & Name */}
                        <div className="col-span-12 md:col-span-4 flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            isWaitlistRecord 
                              ? 'bg-[#2ECC71]/15 text-[#2ECC71] border border-[#2ECC71]/30' 
                              : isPaid ? 'bg-[#2ECC71]/15 text-[#2ECC71]' : 'bg-yellow-500/15 text-yellow-500'
                          }`}>
                            {isWaitlistRecord ? <Sparkles size={20} /> : (isPaid ? <CheckCircle2 size={20} /> : <Clock size={20} />)}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-black text-white uppercase tracking-tight">
                              {order.customerName || billing.first_name || answers.q1_fullName || "Anonymous"}
                            </h3>
                            <p className="text-[11px] font-bold text-[#94A3B8] truncate">
                              {billing.email || answers.q2_email || "No Email"}
                            </p>
                          </div>
                        </div>

                        {/* Date */}
                        <div className="col-span-12 md:col-span-3 flex items-center gap-2 text-[#94A3B8]">
                          <Calendar size={14} className="shrink-0" />
                          <span className="text-xs uppercase font-bold tracking-wider">
                            {formatDate(order.createdAt)}
                          </span>
                        </div>

                        {/* Record ID / Type */}
                        <div className="col-span-12 md:col-span-2">
                          <span className="text-xs font-mono bg-white/5 px-2.5 py-1 rounded text-white/80 border border-white/5 truncate max-w-full block">
                            {isWaitlistRecord ? 'WAITLIST-SURVEY' : (order.transaction_id || orderId.substring(0, 12))}
                          </span>
                        </div>

                        {/* Total & Status Badge */}
                        <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-4 w-full">
                          <div className="text-left md:text-right">
                            <span className="text-sm font-black text-[#2ECC71]">
                              {isWaitlistRecord ? 'Early Access' : `₹${(order.total || 0).toLocaleString("en-IN")}`}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md border ${
                              isWaitlistRecord
                                ? 'bg-[#2ECC71]/15 text-[#2ECC71] border-[#2ECC71]/40'
                                : isPaid 
                                  ? 'bg-[#2ECC71]/10 text-[#2ECC71] border-[#2ECC71]/20' 
                                  : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                            }`}>
                              {isWaitlistRecord ? 'Waitlist' : (isPaid ? 'Paid' : 'Pending')}
                            </span>
                            
                            <div className="p-1.5 rounded-lg hover:bg-white/10 text-[#94A3B8]">
                              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expanded View */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-white/10 bg-black/40 p-6 space-y-6"
                          >
                            {isWaitlistRecord ? (
                              /* WAITLIST 18-QUESTION SURVEY DETAILS PANEL */
                              <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
                                  <div className="flex items-center gap-2 text-[#2ECC71]">
                                    <Sparkles size={18} />
                                    <h4 className="text-xs font-black uppercase tracking-wider text-white">
                                      KYEAL AI — 18 Survey Responses Submitted
                                    </h4>
                                  </div>
                                  <span className="text-[10px] font-bold text-[#2ECC71] uppercase tracking-widest bg-[#2ECC71]/10 px-3 py-1 rounded-full border border-[#2ECC71]/30">
                                    WhatsApp: {answers.q3_whatsapp || billing.phone || 'N/A'}
                                  </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">1. Full Name</span>
                                    <p className="text-xs font-bold text-white">{answers.q1_fullName || order.customerName || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">2. Email Address</span>
                                    <p className="text-xs font-bold text-white break-all">{answers.q2_email || billing.email || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">3. WhatsApp Number</span>
                                    <p className="text-xs font-bold text-white">{answers.q3_whatsapp || billing.phone || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">4. Age Group</span>
                                    <p className="text-xs font-bold text-white">{answers.q4_ageGroup || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">5. Wellness Goal</span>
                                    <p className="text-xs font-bold text-white">{answers.q5_wellnessGoal || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">6. Eating Decision Factor</span>
                                    <p className="text-xs font-bold text-white">{answers.q6_currentEatingDecision || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">7. Biggest Challenge</span>
                                    <p className="text-xs font-bold text-white">{answers.q7_biggestChallenge || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 md:col-span-2">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">8. Desired AI Help (Long Answer)</span>
                                    <p className="text-xs text-white/90 leading-relaxed font-medium">{answers.q8_aiCompanionHelpMost || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">9. Would Use Meal Analysis</span>
                                    <p className="text-xs font-bold text-white">{answers.q9_wouldUseAiMealAnalysis || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">10. Preferred Input Method</span>
                                    <p className="text-xs font-bold text-white">{answers.q10_preferredInputMethod || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">11. Personalization Scale (1-5)</span>
                                    <p className="text-xs font-black text-[#2ECC71]">{answers.q11_personalizationImportance} / 5</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 md:col-span-2">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">12. Trust Factors</span>
                                    <p className="text-xs text-white/90">{answers.q12_trustFactors || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">13. Test Early Interest</span>
                                    <p className="text-xs font-bold text-white">{answers.q13_interestTestingEarly || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 md:col-span-2">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">14. "Must-Have" Feature</span>
                                    <p className="text-xs text-white/90 leading-relaxed font-medium">{answers.q14_mustHaveFeature || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">15. Willing to Give Feedback</span>
                                    <p className="text-xs font-bold text-white">{answers.q15_willingToGiveFeedback || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">16. Referral Source</span>
                                    <p className="text-xs font-bold text-white">{answers.q16_referralSource || 'N/A'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">18. Notify Early Access</span>
                                    <p className="text-xs font-bold text-[#2ECC71]">{answers.q18_notifyEarlyAccess || 'Yes'}</p>
                                  </div>

                                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 lg:col-span-3">
                                    <span className="text-[10px] font-extrabold text-[#2ECC71] uppercase tracking-wider block">17. Additional Notes & Expectations</span>
                                    <p className="text-xs text-white/90 leading-relaxed">{answers.q17_additionalNotes || 'None provided'}</p>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              /* E-COMMERCE PURCHASE ORDER DETAILS PANEL */
                              <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  
                                  {/* Billing Details */}
                                  <div className="space-y-3">
                                    <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#2ECC71] pl-2.5">
                                      Billing Protocol
                                    </h4>
                                    <div className="space-y-2 text-xs">
                                      <div className="flex items-start gap-2">
                                        <User size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                                        <div>
                                          <span className="text-[#94A3B8] text-[9px] font-bold uppercase block">Customer</span>
                                          <span className="font-bold">{billing.first_name || "N/A"} {billing.last_name || ""}</span>
                                        </div>
                                      </div>

                                      <div className="flex items-start gap-2">
                                        <Mail size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                                        <div>
                                          <span className="text-[#94A3B8] text-[9px] font-bold uppercase block">Email</span>
                                          <span className="font-bold break-all">{billing.email || "N/A"}</span>
                                        </div>
                                      </div>

                                      <div className="flex items-start gap-2">
                                        <Phone size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                                        <div>
                                          <span className="text-[#94A3B8] text-[9px] font-bold uppercase block">Phone</span>
                                          <span className="font-bold">{billing.phone || "N/A"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Shipping Details */}
                                  <div className="space-y-3">
                                    <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#2ECC71] pl-2.5">
                                      Shipping Manifest
                                    </h4>
                                    <div className="space-y-2 text-xs">
                                      <div className="flex items-start gap-2">
                                        <MapPin size={14} className="text-[#2ECC71] mt-0.5 shrink-0" />
                                        <div>
                                          <span className="text-[#94A3B8] text-[9px] font-bold uppercase block">Destination</span>
                                          <span className="font-bold block">{shipping.address_1 || billing.address_1 || "N/A"}</span>
                                          <span className="font-bold block text-white/80">
                                            {shipping.city || billing.city || ""}, {shipping.state || billing.state || ""} - {shipping.postcode || billing.postcode || ""}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Payment Logs */}
                                  <div className="space-y-3">
                                    <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#2ECC71] pl-2.5">
                                      Transaction Terminal
                                    </h4>
                                    <div className="space-y-2 text-xs">
                                      <div>
                                        <span className="text-[#94A3B8] text-[9px] font-bold uppercase block">Gateway</span>
                                        <span className="font-bold text-[#2ECC71] uppercase">{order.payment_method_title || order.payment_method || "N/A"}</span>
                                      </div>
                                      <div>
                                        <span className="text-[#94A3B8] text-[9px] font-bold uppercase block">Razorpay ID</span>
                                        <span className="font-mono text-white/70 break-all">{order.razorpay_order_id || "N/A"}</span>
                                      </div>
                                    </div>
                                  </div>

                                </div>

                                {/* Molecular Products Table */}
                                <div className="space-y-3">
                                  <h4 className="text-xs font-black text-white uppercase tracking-wider border-l-2 border-[#2ECC71] pl-2.5">
                                    Purchased Molecular Items
                                  </h4>
                                  <div className="border border-white/10 rounded-xl bg-black/60 overflow-hidden">
                                    <table className="w-full text-left text-xs">
                                      <thead>
                                        <tr className="border-b border-white/10 bg-white/[0.02] text-[#94A3B8] uppercase text-[9px] font-bold">
                                          <th className="p-3">Product Name</th>
                                          <th className="p-3 text-center">Quantity</th>
                                          <th className="p-3 text-right">Unit Price</th>
                                          <th className="p-3 text-right">Total</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-white/5">
                                        {lineItems.map((item, idx) => (
                                          <tr key={idx}>
                                            <td className="p-3 font-bold text-white">{item.name || "N/A"}</td>
                                            <td className="p-3 text-center font-bold text-white/90">[{item.quantity}x]</td>
                                            <td className="p-3 text-right font-mono text-[#94A3B8]">₹{(item.price || 0).toLocaleString("en-IN")}</td>
                                            <td className="p-3 text-right font-mono text-[#2ECC71] font-bold">₹{((item.price || 0) * (item.quantity || 0)).toLocaleString("en-IN")}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Bookings;
