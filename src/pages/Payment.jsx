import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Lock, ChevronDown, CheckCircle2, AlertTriangle, ShieldCheck
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { wooCommerceAPI } from "../services/woocommerce";
import { RAZORPAY_KEY } from "../config";

// System Alert Component
const SystemAlert = ({ type, message }) => {
  const isWarning = type === "warning";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border ${isWarning ? 'border-red-500/30 bg-red-500/5' : 'border-[#2ECC71]/30 bg-[#2ECC71]/5'} backdrop-blur-xl mb-8`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isWarning ? 'bg-red-500/20' : 'bg-[#2ECC71]/20'}`}>
        {isWarning ? <AlertTriangle size={18} className="text-red-500" /> : <ShieldCheck size={18} className="text-[#2ECC71]" />}
      </div>
      <div>
        <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-0.5 ${isWarning ? 'text-red-500' : 'text-[#2ECC71]'}`}>
          {isWarning ? "Protocol Alert" : "System Verified"}
        </div>
        <p className="text-xs text-white/60 m-0 leading-tight uppercase font-bold tracking-wider">{message}</p>
      </div>
    </motion.div>
  );
};

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Auto-clear alerts
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);
  
  // Billing State
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    postcode: "",
    country: ""
  });  const [acceptTerms, setAcceptTerms] = useState(false);

  // Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "Greece", code: "GR" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kuwait", code: "KW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mexico", code: "MX" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Russia", code: "RU" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Singapore", code: "SG" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Thailand", code: "TH" },
    { name: "Turkey", code: "TR" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Vietnam", code: "VN" }
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
  ];
  
  const initialCountry = countries.find(c => c.code === formData.country)?.name || "";
  const [countrySearch, setCountrySearch] = useState(initialCountry);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  
  const [stateSearch, setStateSearch] = useState(formData.state);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredStates = states.filter(s => 
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  // Dynamically load Razorpay script if not present
  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const total = getCartTotal();

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const selectCountry = (country) => {
    setFormData({ ...formData, country: country.code });
    setCountrySearch(country.name);
    setIsCountryDropdownOpen(false);
  };

  const selectState = (stateName) => {
    setFormData({ ...formData, state: stateName });
    setStateSearch(stateName);
    setIsStateDropdownOpen(false);
  };

  const handlePlaceOrder = async (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (!formData.email || !formData.firstName || !formData.address || !formData.phone) {
      setError("Incomplete Protocol: Please finalize all required billing fields.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!acceptTerms) {
      setError("Authorization Required: Please accept the Terms & Conditions.");
      return;
    }

    if (!RAZORPAY_KEY) {
      setError("System Configuration Error: Security credentials missing.");
      return;
    }

    if (typeof window.Razorpay === 'undefined') {
      setError("Secure module is still loading. Please wait 5 seconds.");
      return;
    }

    // ── RAZORPAY INTEGRATION BLOCK ──
    const options = {
      key: RAZORPAY_KEY,           
      amount: total * 100,        
      currency: "INR",
      name: "KYEAL",
      description: "Precision Health System Transaction",
      image: "/logo.png",         
      
      handler: async function (response) {
        setIsProcessing(true);
        try {
          const lineItems = cartItems.map(item => ({
            product_id: item.id,
            quantity: item.quantity
          }));

          // Construction of the WooCommerce Order Payload
          const orderData = {
            payment_method: "razorpay",
            payment_method_title: "Razorpay (Credit/Debit/Netbanking)",
            set_paid: true,                        
            transaction_id: response.razorpay_payment_id, 
            billing: {
              first_name: formData.firstName,
              last_name: formData.lastName,
              company: formData.company,
              address_1: formData.address,
              city: formData.city,
              state: formData.state,
              postcode: formData.postcode,
              country: formData.country,
              email: formData.email,
              phone: formData.phone
            },
            shipping: {
              first_name: formData.firstName,
              last_name: formData.lastName,
              address_1: formData.address,
              city: formData.city,
              state: formData.state,
              postcode: formData.postcode,
              country: formData.country
            },
            line_items: lineItems
          };

          // Synchronizing with WooCommerce Backend
          await wooCommerceAPI.createOrder(orderData);
          
          setSuccess("Order Verified: System manifest synchronized successfully.");
          setTimeout(() => {
            clearCart();
            navigate("/");
          }, 2000);
        } catch (error) {
          console.error("Order Sync Error:", error);
          setError("Sync Failure: Payment verified, but manifest failed to synchronize.");
        } finally {
          setIsProcessing(false);
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        address: formData.address
      },
      theme: {
        color: "#2ECC71" 
      }
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert("Payment failed: " + response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error("Razorpay Error:", err);
      alert("Error opening Payment Gateway. Please check your config.js.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0A] pt-16 md:pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatePresence>
          {error && <SystemAlert type="warning" message={error} />}
          {success && <SystemAlert type="success" message={success} />}
        </AnimatePresence>
        
        <div className="mb-8">
          <button 
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 text-[10px] font-bold text-[#94A3B8] hover:text-[#2ECC71] transition-colors uppercase tracking-[0.2em] mb-4 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Manifest
          </button>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">Checkout</h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Forms */}
          <div className="w-full lg:col-span-7 space-y-8">
            
            {/* Billing Address */}
            <section className="space-y-6">
              <h2 className="text-lg font-black text-white tracking-tight uppercase italic border-l-4 border-[#2ECC71] pl-4">Billing Details</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="sm:col-span-2 h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  required
                />

                {/* Searchable Country Select */}
                <div className="sm:col-span-2 relative">
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="Country / Region"
                      value={countrySearch}
                      onFocus={() => setIsCountryDropdownOpen(true)}
                      onChange={(e) => {
                        setCountrySearch(e.target.value);
                        setIsCountryDropdownOpen(true);
                      }}
                      className="w-full h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide"
                    />
                    <ChevronDown className={`absolute right-6 top-1/2 -translate-y-1/2 text-white/20 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                  </div>

                  <AnimatePresence>
                    {isCountryDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[60] left-0 right-0 mt-2 max-h-[300px] overflow-y-auto bg-[#1A1B1A] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar backdrop-blur-xl"
                      >
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => selectCountry(country)}
                              className="w-full text-left px-6 py-4 text-sm text-[#94A3B8] hover:bg-[#2ECC71]/10 hover:text-white transition-all border-b border-white/5 last:border-0 font-bold uppercase tracking-widest"
                            >
                              {country.name}
                            </button>
                          ))
                        ) : (
                          <div className="px-6 py-4 text-sm text-[#94A3B8] italic text-center">No matching regions found</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {isCountryDropdownOpen && (
                    <div className="fixed inset-0 z-[50]" onClick={() => setIsCountryDropdownOpen(false)} />
                  )}
                </div>

                <input type="text" placeholder="First Name" className="h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" value={formData.firstName} onChange={(e) => handleInputChange(e, 'firstName')} />
                <input type="text" placeholder="Last Name" className="h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" value={formData.lastName} onChange={(e) => handleInputChange(e, 'lastName')} />
                
                <input type="text" placeholder="Company Name (optional)" className="sm:col-span-2 h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" value={formData.company} onChange={(e) => handleInputChange(e, 'company')} />
                
                <input type="text" placeholder="Street Address" className="sm:col-span-2 h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" value={formData.address} onChange={(e) => handleInputChange(e, 'address')} />
                
                <input type="text" placeholder="City" className="h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" value={formData.city} onChange={(e) => handleInputChange(e, 'city')} />
                
                {/* Searchable State Select */}
                <div className="relative">
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="State / Province"
                      value={stateSearch}
                      onFocus={() => setIsStateDropdownOpen(true)}
                      onChange={(e) => {
                        setStateSearch(e.target.value);
                        setFormData({ ...formData, state: e.target.value });
                        setIsStateDropdownOpen(true);
                      }}
                      className="w-full h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide"
                    />
                    <ChevronDown className={`absolute right-6 top-1/2 -translate-y-1/2 text-white/20 transition-transform ${isStateDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                  </div>

                  <AnimatePresence>
                    {isStateDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-[60] left-0 right-0 mt-2 max-h-[250px] overflow-y-auto bg-[#1A1B1A] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar backdrop-blur-xl"
                      >
                        {filteredStates.length > 0 ? (
                          filteredStates.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => selectState(s)}
                              className="w-full text-left px-6 py-4 text-sm text-[#94A3B8] hover:bg-[#2ECC71]/10 hover:text-white transition-all border-b border-white/5 last:border-0 font-bold uppercase tracking-widest"
                            >
                              {s}
                            </button>
                          ))
                        ) : (
                          <div className="px-6 py-4 text-sm text-[#94A3B8] italic text-center">No matching states found</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {isStateDropdownOpen && (
                    <div className="fixed inset-0 z-[50]" onClick={() => setIsStateDropdownOpen(false)} />
                  )}
                </div>

                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" 
                  value={formData.phone} 
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    handleInputChange({ target: { value } }, 'phone');
                  }} 
                />
                <input 
                  type="text" 
                  placeholder="PIN Code / ZIP" 
                  className="h-14 md:h-16 bg-white/[0.03] border border-white/10 rounded-xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#2ECC71]/50 transition-all font-bold tracking-wide" 
                  value={formData.postcode} 
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    handleInputChange({ target: { value } }, 'postcode');
                  }} 
                />
              </div>
            </section>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] md:text-xs text-[#94A3B8] leading-relaxed mb-8 max-w-xl font-medium uppercase tracking-tighter">
                By proceeding with your purchase you agree to our <span className="text-white underline cursor-pointer">Terms and Conditions</span> and <span className="text-white underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-6 md:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-6 backdrop-blur-3xl">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Lock size={80} className="text-[#2ECC71]" />
              </div>

              <h3 className="text-lg md:text-xl font-black text-white tracking-tight uppercase italic">Order Manifest</h3>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 md:gap-6 items-center">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 overflow-hidden bg-black/40 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#2ECC71] text-black text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#0A0B0A] shadow-lg">{item.quantity}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-tight truncate leading-tight">{item.name}</h4>
                        <span className="text-xs md:text-sm font-black text-white shrink-0">₹{item.price.toLocaleString("en-IN")}</span>
                      </div>
                      <p className="text-[10px] text-[#94A3B8] mt-1 uppercase font-bold tracking-widest opacity-40">Precision Health System</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 space-y-4 md:space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#94A3B8] font-bold uppercase tracking-widest">Subtotal</span>
                  <span className="text-white font-black">₹{total.toLocaleString("en-IN")}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#94A3B8] font-bold uppercase tracking-widest">Protocol Fee</span>
                  <span className="text-[#2ECC71] font-black uppercase tracking-widest">Included</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20 flex justify-between items-end">
                <span className="text-xl font-black text-white uppercase italic tracking-tighter">Total</span>
                <div className="text-right">
                  <span className="block text-3xl md:text-4xl font-black text-[#2ECC71] leading-none tracking-tighter">₹{total.toLocaleString("en-IN")}</span>
                  <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-[0.2em] mt-2 block">All taxes included</span>
                </div>
              </div>

              <div className="pt-4 space-y-6">
                
                {/* Terms & Conditions Checkbox */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 cursor-pointer hover:bg-white/[0.04] transition-all" onClick={() => setAcceptTerms(!acceptTerms)}>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all shrink-0 mt-0.5 ${acceptTerms ? 'bg-[#2ECC71] border-[#2ECC71]' : 'bg-transparent border-white/20'}`}>
                    {acceptTerms && <CheckCircle2 size={12} className="text-black" />}
                  </div>
                  <span className="text-[10px] md:text-[11px] text-[#94A3B8] font-medium leading-relaxed uppercase tracking-wider">
                    I agree to the <span className="text-white border-b border-white/20">Terms & Conditions</span> and <span className="text-white border-b border-white/20">Privacy Policy</span>.
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(46, 204, 113, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                  className="w-full h-16 md:h-20 bg-[#2ECC71] text-black rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-xl relative overflow-hidden flex items-center justify-center"
                >
                    {isProcessing ? (
                      <span className="animate-pulse">Synthesizing...</span>
                    ) : (
                      "Buy Now"
                    )}
                </motion.button>

                <div className="flex items-center justify-center gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Lock size={14} className="text-white" />
                  </div>
                  <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest leading-none">AES-256 Bit Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
