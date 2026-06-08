import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Search, Calendar, CreditCard, ShoppingBag, 
  User, Mail, Phone, MapPin, ChevronDown, ChevronUp, RefreshCw, 
  CheckCircle2, Clock, Database
} from "lucide-react";
import { getAllOrders } from "../services/dbService";

const Bookings = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // 'all', 'paid', 'pending'
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
    // If it's a Firestore Timestamp object
    if (timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    // If it's a date or timestamp string/number
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

  // Filter and Search logic
  const filteredOrders = orders.filter(order => {
    const billing = order.billing || {};
    const shipping = order.shipping || {};
    
    const name = (order.customerName || billing.first_name || shipping.first_name || "").toLowerCase();
    const email = (billing.email || "").toLowerCase();
    const phone = (billing.phone || "").toLowerCase();
    const transactionId = (order.transaction_id || "").toLowerCase();
    const city = (billing.city || "").toLowerCase();
    const country = (billing.country || "").toLowerCase();
    
    const matchesSearch = 
      name.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase()) ||
      phone.includes(searchTerm.toLowerCase()) ||
      transactionId.includes(searchTerm.toLowerCase()) ||
      city.includes(searchTerm.toLowerCase()) ||
      country.includes(searchTerm.toLowerCase());

    const isPaid = order.set_paid === true || order.payment_status === "successful";
    
    if (statusFilter === "paid") {
      return matchesSearch && isPaid;
    } else if (statusFilter === "pending") {
      return matchesSearch && !isPaid;
    }
    
    return matchesSearch;
  });

  // Calculate Metrics
  const metrics = {
    totalBookings: orders.length,
    totalRevenue: orders.reduce((sum, order) => {
      const isPaid = order.set_paid === true || order.payment_status === "successful";
      return isPaid ? sum + (order.total || 0) : sum;
    }, 0),
    paidCount: orders.filter(order => order.set_paid === true || order.payment_status === "successful").length,
    totalItems: orders.reduce((sum, order) => {
      const lineItems = order.line_items || [];
      return sum + lineItems.reduce((itemSum, item) => itemSum + (item.quantity || 0), 0);
    }, 0)
  };

  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[10px] font-bold text-[#94A3B8] hover:text-[#B9E075] transition-colors uppercase tracking-[0.2em] group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Home
            </button>
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-[#B9E075]"></div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
                Booking manifests
              </h1>
            </div>
            <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-wider">
              Secure administrative access to primary billing databases
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => fetchOrders(true)}
              disabled={isRefreshing || loading}
              className="flex items-center gap-2 px-5 h-12 bg-white/[0.02] border border-white/10 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/[0.06] hover:border-[#B9E075]/40 transition-all active:scale-95 disabled:opacity-50"
            >
              <RefreshCw size={14} className={`${isRefreshing ? 'animate-spin text-[#B9E075]' : ''}`} />
              {isRefreshing ? 'Synchronizing' : 'Sync Database'}
            </button>
          </div>
        </div>

        {/* Error Notification */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-red-500/30 bg-red-500/5 backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-red-500/20">
                <Database size={18} className="text-red-500" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-0.5 text-red-500">
                  Database Protocol Error
                </div>
                <p className="text-xs text-white/60 m-0 font-bold uppercase tracking-wider leading-tight">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group hover:border-[#B9E075]/20 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <ShoppingBag size={80} className="text-white" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-2">Total Manifests</div>
            <div className="text-3xl font-black text-white italic tracking-tighter uppercase">{metrics.totalBookings}</div>
            <div className="text-[9px] text-[#94A3B8]/60 mt-1 uppercase font-bold tracking-widest">Registered documents</div>
          </div>

          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group hover:border-[#B9E075]/20 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <CreditCard size={80} className="text-[#B9E075]" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-2">Synchronized Revenue</div>
            <div className="text-3xl font-black text-[#B9E075] italic tracking-tighter uppercase">
              ₹{metrics.totalRevenue.toLocaleString("en-IN")}
            </div>
            <div className="text-[9px] text-[#94A3B8]/60 mt-1 uppercase font-bold tracking-widest">Paid transactions only</div>
          </div>

          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group hover:border-[#B9E075]/20 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <CheckCircle2 size={80} className="text-white" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-2">Verified Purchases</div>
            <div className="text-3xl font-black text-white italic tracking-tighter uppercase">
              {metrics.paidCount} <span className="text-xs text-[#94A3B8] font-normal not-italic">/ {metrics.totalBookings}</span>
            </div>
            <div className="text-[9px] text-[#94A3B8]/60 mt-1 uppercase font-bold tracking-widest">
              {((metrics.paidCount / (metrics.totalBookings || 1)) * 100).toFixed(0)}% Conversion rate
            </div>
          </div>

          <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden group hover:border-[#B9E075]/20 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <ShoppingBag size={80} className="text-[#B9E075]" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#94A3B8] mb-2">Items Distributed</div>
            <div className="text-3xl font-black text-[#B9E075] italic tracking-tighter uppercase">{metrics.totalItems}</div>
            <div className="text-[9px] text-[#94A3B8]/60 mt-1 uppercase font-bold tracking-widest">Total molecular products</div>
          </div>

        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input
              type="text"
              placeholder="Search by customer name, email, transaction ID, phone, city..."
              className="w-full h-14 bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#B9E075]/50 transition-all font-bold tracking-wide text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-6 h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all ${
                statusFilter === "all"
                  ? "bg-[#B9E075] text-black border-[#B9E075]"
                  : "bg-white/[0.02] border-white/10 text-[#94A3B8] hover:border-white/20 hover:text-white"
              }`}
            >
              All Manifests
            </button>
            
            <button
              onClick={() => setStatusFilter("paid")}
              className={`px-6 h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all ${
                statusFilter === "paid"
                  ? "bg-[#B9E075] text-black border-[#B9E075]"
                  : "bg-white/[0.02] border-white/10 text-[#94A3B8] hover:border-white/20 hover:text-white"
              }`}
            >
              Paid
            </button>

            <button
              onClick={() => setStatusFilter("pending")}
              className={`px-6 h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all ${
                statusFilter === "pending"
                  ? "bg-[#B9E075] text-black border-[#B9E075]"
                  : "bg-white/[0.02] border-white/10 text-[#94A3B8] hover:border-white/20 hover:text-white"
              }`}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Bookings List/Table */}
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-2 border-[#B9E075] border-t-transparent rounded-full animate-spin"></div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#94A3B8]">
              Loading biological records...
            </div>
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="py-20 text-center rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl space-y-4">
            <Database size={40} className="mx-auto text-white/20" />
            <div className="text-sm font-black uppercase tracking-[0.2em] text-[#94A3B8]">
              No Matching Records Available
            </div>
            <p className="text-xs text-white/40 max-w-md mx-auto uppercase tracking-wider font-bold">
              Database returned zero matching files for parameters: search "{searchTerm}", filter "{statusFilter}".
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-right text-[10px] font-black uppercase tracking-[0.25em] text-[#94A3B8]/60 pr-4">
              Showing {filteredOrders.length} of {orders.length} Records
            </div>
            
            {filteredOrders.map((order) => {
              const orderId = order.id;
              const isExpanded = !!expandedOrders[orderId];
              const billing = order.billing || {};
              const shipping = order.shipping || {};
              const lineItems = order.line_items || [];
              const isPaid = order.set_paid === true || order.payment_status === "successful";

              return (
                <div 
                  key={orderId}
                  className={`rounded-[24px] bg-white/[0.02] border transition-all overflow-hidden ${
                    isExpanded ? 'border-[#B9E075]/30 shadow-2xl' : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Order Header Summary (Click to expand) */}
                  <div 
                    onClick={() => toggleExpand(orderId)}
                    className="p-6 flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-4 cursor-pointer select-none"
                  >
                    {/* Status Icon & Customer */}
                    <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        isPaid ? 'bg-[#2ECC71]/15 text-[#2ECC71]' : 'bg-yellow-500/15 text-yellow-500'
                      }`}>
                        {isPaid ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-black text-white uppercase tracking-tight italic">
                          {order.customerName || billing.first_name || "Anonymous"}
                        </h3>
                        <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest break-all">
                          {billing.email || "No Email Provided"}
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

                    {/* Transaction ID */}
                    <div className="col-span-12 md:col-span-2">
                      <span className="text-[9px] uppercase tracking-widest text-[#94A3B8]/60 font-black block md:hidden">Transaction</span>
                      <span className="text-xs font-mono bg-white/5 px-2.5 py-1 rounded text-white/80 border border-white/5 truncate max-w-full block">
                        {order.transaction_id || "N/A"}
                      </span>
                    </div>

                    {/* Total & Status Badge */}
                    <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-6 w-full">
                      <div className="text-left md:text-right">
                        <span className="text-[9px] uppercase tracking-widest text-[#94A3B8]/60 font-black block md:hidden">Paid Manifest Total</span>
                        <span className="text-lg font-black text-[#B9E075] italic tracking-tighter">
                          ₹{(order.total || 0).toLocaleString("en-IN")}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md border ${
                          isPaid 
                            ? 'bg-[#2ECC71]/10 text-[#2ECC71] border-[#2ECC71]/20' 
                            : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        }`}>
                          {isPaid ? 'Paid' : 'Pending'}
                        </span>
                        
                        <div className="p-1 rounded-lg hover:bg-white/5 text-[#94A3B8]">
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Expanded Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-white/5 bg-white/[0.01]"
                      >
                        <div className="p-6 space-y-8">
                          
                          {/* Grid Details (Billing / Shipping / System info) */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            
                            {/* Billing Address Details */}
                            <div className="md:col-span-4 space-y-4">
                              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] italic border-l-2 border-[#B9E075] pl-3">
                                Billing protocols
                              </h4>
                              
                              <div className="space-y-3 text-xs">
                                <div className="flex items-start gap-2">
                                  <User size={14} className="text-[#B9E075] mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Customer Name</span>
                                    <span className="font-bold">{billing.first_name || "N/A"} {billing.last_name || ""}</span>
                                  </div>
                                </div>

                                {billing.company && (
                                  <div className="flex items-start gap-2">
                                    <Database size={14} className="text-[#B9E075] mt-0.5 shrink-0" />
                                    <div>
                                      <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Company</span>
                                      <span className="font-bold">{billing.company}</span>
                                    </div>
                                  </div>
                                )}

                                <div className="flex items-start gap-2">
                                  <Mail size={14} className="text-[#B9E075] mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Email ID</span>
                                    <span className="font-bold break-all">{billing.email || "N/A"}</span>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <Phone size={14} className="text-[#B9E075] mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Contact Phone</span>
                                    <span className="font-bold">{billing.phone || "N/A"}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Shipping Details */}
                            <div className="md:col-span-4 space-y-4">
                              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] italic border-l-2 border-[#B9E075] pl-3">
                                Shipping Manifest
                              </h4>
                              
                              <div className="space-y-3 text-xs">
                                <div className="flex items-start gap-2">
                                  <MapPin size={14} className="text-[#B9E075] mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Destination Address</span>
                                    <span className="font-bold block">{shipping.address_1 || billing.address_1 || "N/A"}</span>
                                    <span className="font-bold block">
                                      {shipping.city || billing.city || ""}, {shipping.state || billing.state || ""} - {shipping.postcode || billing.postcode || ""}
                                    </span>
                                    <span className="font-bold block uppercase tracking-wider text-[#94A3B8] mt-1 text-[10px]">
                                      {shipping.country || billing.country || ""}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <Database size={14} className="text-[#B9E075] mt-0.5 shrink-0" />
                                  <div>
                                    <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Document ID (Firebase)</span>
                                    <span className="font-mono bg-white/5 px-2 py-0.5 rounded text-[10px] text-white/70">{orderId}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* System Payload Status */}
                            <div className="md:col-span-4 space-y-4">
                              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] italic border-l-2 border-[#B9E075] pl-3">
                                Transaction logs
                              </h4>
                              
                              <div className="space-y-3 text-xs">
                                <div>
                                  <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Gateway Terminal</span>
                                  <span className="font-black text-[#B9E075] uppercase">{order.payment_method_title || order.payment_method || "N/A"}</span>
                                </div>

                                <div>
                                  <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Razorpay Order ID</span>
                                  <span className="font-mono break-all text-white/70">{order.razorpay_order_id || "N/A"}</span>
                                </div>

                                <div>
                                  <span className="text-[#94A3B8] font-bold uppercase tracking-widest text-[9px] block">Razorpay Signature</span>
                                  <span className="font-mono break-all text-white/40 block leading-tight truncate">{order.razorpay_signature || "N/A"}</span>
                                </div>

                                {/* Full database metadata is displayed in the payload block below */}
                              </div>
                            </div>

                          </div>

                          {/* Ordered Manifest Items */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] italic border-l-2 border-[#B9E075] pl-3">
                              Molecular products manifest
                            </h4>
                            
                            <div className="border border-white/5 rounded-2xl bg-black/40 overflow-hidden">
                              <table className="w-full text-left text-xs">
                                <thead>
                                  <tr className="border-b border-white/5 bg-white/[0.02] text-[#94A3B8] uppercase font-bold tracking-widest text-[9.5px]">
                                    <th className="p-4">Product details</th>
                                    <th className="p-4 text-center">Quantity</th>
                                    <th className="p-4 text-right">Unit cost</th>
                                    <th className="p-4 text-right">Total cost</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                  {lineItems.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-white/[0.01]">
                                      <td className="p-4">
                                        <div className="font-black uppercase tracking-tight text-white">{item.name || "N/A"}</div>
                                        <div className="text-[9px] text-[#94A3B8]/60 font-bold uppercase tracking-widest mt-0.5">ID: {item.product_id || "N/A"}</div>
                                      </td>
                                      <td className="p-4 text-center font-bold text-white/90">
                                        [{item.quantity}x]
                                      </td>
                                      <td className="p-4 text-right font-mono text-[#94A3B8]">
                                        ₹{(item.price || 0).toLocaleString("en-IN")}
                                      </td>
                                      <td className="p-4 text-right font-mono text-[#B9E075] font-black">
                                        ₹{((item.price || 0) * (item.quantity || 0)).toLocaleString("en-IN")}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                     

                        </div>
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
  );
};

export default Bookings;
