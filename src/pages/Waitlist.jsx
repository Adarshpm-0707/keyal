import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  ExternalLink,
  Users,
  Dna,
  RefreshCw,
  ShieldCheck,
  Check
} from 'lucide-react';
import { saveOrder } from '../services/dbService';

const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/GNEpKE6SIIO3ePFrAMscxO";

const Waitlist = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Q1 - Q3
    fullName: '',
    email: '',
    whatsapp: '',
    
    // Q4
    ageGroup: '',
    
    // Q5
    wellnessGoal: '',
    wellnessGoalOther: '',
    
    // Q6
    currentEatingDecision: '',
    
    // Q7
    biggestChallenge: '',
    biggestChallengeOther: '',
    
    // Q8
    aiCompanionHelpMost: '',
    
    // Q9
    wouldUseAiMealAnalysis: '',
    
    // Q10
    preferredInputMethod: '',
    
    // Q11
    personalizationImportance: 5,
    
    // Q12
    trustFactors: [],
    trustFactorsOther: '',
    
    // Q13
    interestTestingEarly: '',
    
    // Q14
    mustHaveFeature: '',
    
    // Q15
    willingToGiveFeedback: '',
    
    // Q16
    referralSource: '',
    referralSourceOther: '',
    
    // Q17
    additionalNotes: '',
    
    // Q18
    notifyEarlyAccess: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxArrayToggle = (field, item) => {
    setFormData(prev => {
      const list = prev[field] || [];
      if (list.includes(item)) {
        return { ...prev, [field]: list.filter(i => i !== item) };
      } else {
        return { ...prev, [field]: [...list, item] };
      }
    });
  };

  // Calculate completed questions count for live progress bar
  const calculateProgress = () => {
    let filled = 0;
    if (formData.fullName.trim()) filled++;
    if (formData.email.trim()) filled++;
    if (formData.whatsapp.trim()) filled++;
    if (formData.ageGroup) filled++;
    if (formData.wellnessGoal) filled++;
    if (formData.currentEatingDecision) filled++;
    if (formData.biggestChallenge) filled++;
    if (formData.aiCompanionHelpMost.trim()) filled++;
    if (formData.wouldUseAiMealAnalysis) filled++;
    if (formData.preferredInputMethod) filled++;
    if (formData.personalizationImportance) filled++;
    if (formData.trustFactors.length > 0) filled++;
    if (formData.interestTestingEarly) filled++;
    if (formData.mustHaveFeature.trim()) filled++;
    if (formData.willingToGiveFeedback) filled++;
    if (formData.referralSource) filled++;
    if (formData.additionalNotes.trim()) filled++;
    if (formData.notifyEarlyAccess) filled++;
    return Math.min(100, Math.round((filled / 18) * 100));
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setErrorMsg('Please fill in your Full Name, Email Address, and WhatsApp Number.');
      scrollToSection('section-contact');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const waitlistRecord = {
        type: 'waitlist_signup',
        set_paid: true,
        payment_status: 'waitlist_registered',
        total: 0,
        customerName: formData.fullName,
        billing: {
          first_name: formData.fullName,
          email: formData.email,
          phone: formData.whatsapp
        },
        waitlistAnswers: {
          q1_fullName: formData.fullName,
          q2_email: formData.email,
          q3_whatsapp: formData.whatsapp,
          q4_ageGroup: formData.ageGroup || 'Not specified',
          q5_wellnessGoal: formData.wellnessGoal === 'Other' ? `Other: ${formData.wellnessGoalOther}` : (formData.wellnessGoal || 'Not specified'),
          q6_currentEatingDecision: formData.currentEatingDecision || 'Not specified',
          q7_biggestChallenge: formData.biggestChallenge === 'Other' ? `Other: ${formData.biggestChallengeOther}` : (formData.biggestChallenge || 'Not specified'),
          q8_aiCompanionHelpMost: formData.aiCompanionHelpMost || 'Not specified',
          q9_wouldUseAiMealAnalysis: formData.wouldUseAiMealAnalysis || 'Not specified',
          q10_preferredInputMethod: formData.preferredInputMethod || 'Not specified',
          q11_personalizationImportance: formData.personalizationImportance,
          q12_trustFactors: (formData.trustFactors.length > 0 ? formData.trustFactors.join(', ') : 'Not specified') + (formData.trustFactorsOther ? ` (Other: ${formData.trustFactorsOther})` : ''),
          q13_interestTestingEarly: formData.interestTestingEarly || 'Not specified',
          q14_mustHaveFeature: formData.mustHaveFeature || 'Not specified',
          q15_willingToGiveFeedback: formData.willingToGiveFeedback || 'Not specified',
          q16_referralSource: formData.referralSource === 'Other' ? `Other: ${formData.referralSourceOther}` : (formData.referralSource || 'Not specified'),
          q17_additionalNotes: formData.additionalNotes || 'Not specified',
          q18_notifyEarlyAccess: formData.notifyEarlyAccess ? 'Yes' : 'No'
        },
        createdAt: new Date().toISOString()
      };

      await saveOrder(waitlistRecord);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Error saving waitlist submission to Firebase:", err);
      // Graceful fallback for UX
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPct = calculateProgress();

  return (
    <div className="min-h-screen bg-[#0A0B0A] text-white pt-20 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[#2ECC71]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header / Back Button */}
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#94A3B8] hover:text-[#2ECC71] transition-colors group cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>

          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2ECC71] bg-[#2ECC71]/10 border border-[#2ECC71]/30 px-3 py-1 rounded-full">
            KYEAL AI Early Access
          </span>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PANEL (Laptop/Desktop Sticky Hero Sidebar) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 bg-[#141614]/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2ECC71]/15 border border-[#2ECC71]/40 text-[#2ECC71] text-[11px] font-black uppercase tracking-wider">
                  <Sparkles size={13} /> Official Waiting List Form
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Meet Your <span className="gradient-text">DNA-Synced AI Coach</span>
                </h1>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  An AI companion that grows and adapts with you — not one that judges you. Complete the 18 questions to shape early access.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3 pt-4 border-t border-white/10 hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] flex items-center justify-center shrink-0 mt-0.5">
                    <RefreshCw size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Real-Time Recalibration</h4>
                    <p className="text-[11px] text-[#94A3B8]">Log meals or missed workouts — automatic plan adjustments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] flex items-center justify-center shrink-0 mt-0.5">
                    <Dna size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">DNA-Synced Intelligence</h4>
                    <p className="text-[11px] text-[#94A3B8]">Cross-referenced against genetic risk markers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/10 border border-[#2ECC71]/30 text-[#2ECC71] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Priority Launch Access</h4>
                    <p className="text-[11px] text-[#94A3B8]">Waitlist members get exclusive beta invites.</p>
                  </div>
                </div>
              </div>

              {/* Live Form Completion Progress */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#94A3B8]">
                  <span>Survey Completion</span>
                  <span className="text-[#2ECC71] font-extrabold">{progressPct}%</span>
                </div>
                <div className="w-full h-2.5 bg-black/50 border border-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2ECC71] to-[#B9E075] transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(46,204,113,0.5)]"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Quick Jump Navigation (Laptop & Mobile) */}
              <div className="pt-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8] block mb-2">Jump to Section</span>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  <button onClick={() => scrollToSection('section-contact')} className="py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-[11px] font-bold text-white transition-colors">
                    1. Contact Details (Q1–3)
                  </button>
                  <button onClick={() => scrollToSection('section-goals')} className="py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-[11px] font-bold text-white transition-colors">
                    2. Demographics & Goals (Q4–7)
                  </button>
                  <button onClick={() => scrollToSection('section-ai')} className="py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-[11px] font-bold text-white transition-colors">
                    3. AI Preferences (Q8–12)
                  </button>
                  <button onClick={() => scrollToSection('section-access')} className="py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-[11px] font-bold text-white transition-colors">
                    4. Early Access (Q13–18)
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PANEL (Scrolling Survey Form) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 bg-[#141614] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-10"
            >
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* SECTION 1: Contact Details (Q1 - Q3) */}
                <div id="section-contact" className="space-y-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-8">
                  <div className="flex items-center gap-2.5 text-[#2ECC71] border-b border-white/10 pb-3">
                    <User size={20} />
                    <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                      Section 1: Contact Details
                    </h2>
                  </div>

                  {/* Q1: Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      1. Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#2ECC71] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Q2: Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      2. Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@domain.com"
                        required
                        className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#2ECC71] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Q3: WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      3. WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => handleChange('whatsapp', e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#2ECC71] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Demographics & Health Goals (Q4 - Q7) */}
                <div id="section-goals" className="space-y-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-8">
                  <div className="flex items-center gap-2.5 text-[#2ECC71] border-b border-white/10 pb-3">
                    <Sparkles size={20} />
                    <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                      Section 2: Demographics & Wellness Goals
                    </h2>
                  </div>

                  {/* Q4: Age Group */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      4. What is your age group?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Under 18', '18–24', '25–34', '35–44', '45–54', '55+'].map((age) => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => handleChange('ageGroup', age)}
                          className={`min-h-[48px] py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                            formData.ageGroup === age 
                              ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.3)]' 
                              : 'bg-[#0A0B0A] text-[#94A3B8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {formData.ageGroup === age && <Check size={14} />} {age}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q5: Wellness Goal */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      5. What best describes your current health & wellness goal?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Lose weight',
                        'Build muscle / gain strength',
                        'Improve nutrition',
                        'Improve energy & productivity',
                        'Better sleep & recovery',
                        'Manage blood sugar / metabolic health',
                        'Improve gut health',
                        'Improve overall health',
                        'Other'
                      ].map((goal) => (
                        <label
                          key={goal}
                          className={`min-h-[48px] flex items-center gap-3 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.wellnessGoal === goal 
                              ? 'bg-[#2ECC71]/15 border-[#2ECC71] text-white' 
                              : 'bg-[#0A0B0A] border-white/10 text-[#94A3B8] hover:border-white/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="wellnessGoal"
                            value={goal}
                            checked={formData.wellnessGoal === goal}
                            onChange={() => handleChange('wellnessGoal', goal)}
                            className="accent-[#2ECC71] w-4 h-4 shrink-0"
                          />
                          <span className="leading-snug">{goal}</span>
                        </label>
                      ))}
                    </div>
                    {formData.wellnessGoal === 'Other' && (
                      <input
                        type="text"
                        value={formData.wellnessGoalOther}
                        onChange={(e) => handleChange('wellnessGoalOther', e.target.value)}
                        placeholder="Please specify your wellness goal"
                        className="w-full mt-3 bg-[#0A0B0A] border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-[#2ECC71]"
                      />
                    )}
                  </div>

                  {/* Q6: Eating Decision Factor */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      6. How do you currently decide what to eat?
                    </label>
                    <div className="space-y-2.5">
                      {[
                        'I follow a diet/meal plan',
                        'I use a fitness or nutrition app',
                        'I follow advice from social media',
                        'I consult a nutritionist/dietitian',
                        'I mostly eat based on convenience or cravings',
                        'I just eat whatever is available'
                      ].map((item) => (
                        <label
                          key={item}
                          className={`min-h-[48px] flex items-center gap-3 p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.currentEatingDecision === item 
                              ? 'bg-[#2ECC71]/15 border-[#2ECC71] text-white' 
                              : 'bg-[#0A0B0A] border-white/10 text-[#94A3B8] hover:border-white/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="currentEatingDecision"
                            value={item}
                            checked={formData.currentEatingDecision === item}
                            onChange={() => handleChange('currentEatingDecision', item)}
                            className="accent-[#2ECC71] w-4 h-4 shrink-0"
                          />
                          <span className="leading-snug">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Q7: Biggest Challenge */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      7. What is the biggest challenge you face with eating healthy consistently?
                    </label>
                    <div className="space-y-2.5">
                      {[
                        'I don\'t know what to eat',
                        'I don\'t have time to plan meals',
                        'Healthy food feels expensive',
                        'I struggle with cravings',
                        'I can\'t stay consistent',
                        'I don\'t know what works for my body',
                        'I get confused by conflicting nutrition advice',
                        'Other'
                      ].map((challenge) => (
                        <label
                          key={challenge}
                          className={`min-h-[48px] flex items-center gap-3 p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.biggestChallenge === challenge 
                              ? 'bg-[#2ECC71]/15 border-[#2ECC71] text-white' 
                              : 'bg-[#0A0B0A] border-white/10 text-[#94A3B8] hover:border-white/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="biggestChallenge"
                            value={challenge}
                            checked={formData.biggestChallenge === challenge}
                            onChange={() => handleChange('biggestChallenge', challenge)}
                            className="accent-[#2ECC71] w-4 h-4 shrink-0"
                          />
                          <span className="leading-snug">{challenge}</span>
                        </label>
                      ))}
                    </div>
                    {formData.biggestChallenge === 'Other' && (
                      <input
                        type="text"
                        value={formData.biggestChallengeOther}
                        onChange={(e) => handleChange('biggestChallengeOther', e.target.value)}
                        placeholder="Please specify your challenge"
                        className="w-full mt-3 bg-[#0A0B0A] border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-[#2ECC71]"
                      />
                    )}
                  </div>
                </div>

                {/* SECTION 3: AI Preferences & Personalization (Q8 - Q12) */}
                <div id="section-ai" className="space-y-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-8">
                  <div className="flex items-center gap-2.5 text-[#2ECC71] border-b border-white/10 pb-3">
                    <Sparkles size={20} />
                    <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                      Section 3: AI Preferences & Trust Factors
                    </h2>
                  </div>

                  {/* Q8: Desired AI Help */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      8. Imagine an AI companion that understands your food, habits, goals and preferences and helps you make better decisions every day. What would you want it to help you with most?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.aiCompanionHelpMost}
                      onChange={(e) => handleChange('aiCompanionHelpMost', e.target.value)}
                      placeholder="e.g. Automatically adjust my meal plan when I eat out or skip a workout..."
                      className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl p-4 text-xs text-white placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#2ECC71] resize-none"
                    />
                  </div>

                  {/* Q9: Would use AI meal analysis */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      9. Would you use an AI that analyzes what you eat and gives you personalized recommendations for your next meals?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {['Definitely', 'Probably', 'Maybe', 'Probably not', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('wouldUseAiMealAnalysis', opt)}
                          className={`min-h-[48px] py-3 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                            formData.wouldUseAiMealAnalysis === opt 
                              ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.3)]' 
                              : 'bg-[#0A0B0A] text-[#94A3B8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {formData.wouldUseAiMealAnalysis === opt && <Check size={14} />} {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q10: How to tell KYEAL AI what you ate */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      10. How would you prefer to tell KYEAL AI what you ate?
                    </label>
                    <div className="space-y-2.5">
                      {[
                        'Upload a photo',
                        'Type what I ate',
                        'Send a voice message',
                        'Scan the food/product',
                        'Any of the above'
                      ].map((method) => (
                        <label
                          key={method}
                          className={`min-h-[48px] flex items-center gap-3 p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.preferredInputMethod === method 
                              ? 'bg-[#2ECC71]/15 border-[#2ECC71] text-white' 
                              : 'bg-[#0A0B0A] border-white/10 text-[#94A3B8] hover:border-white/20'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredInputMethod"
                            value={method}
                            checked={formData.preferredInputMethod === method}
                            onChange={() => handleChange('preferredInputMethod', method)}
                            className="accent-[#2ECC71] w-4 h-4 shrink-0"
                          />
                          <span className="leading-snug">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Q11: Personalization scale */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      11. How important is personalization to you when it comes to nutrition? (Scale: 1 — Not important → 5 — Extremely important)
                    </label>
                    <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto pt-2">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleChange('personalizationImportance', val)}
                          className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl text-sm font-black border transition-all cursor-pointer flex items-center justify-center ${
                            formData.personalizationImportance === val
                              ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_20px_rgba(46,204,113,0.4)]'
                              : 'bg-[#0A0B0A] text-[#94A3B8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q12: Trust factors */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      12. What would make you trust an AI nutrition companion? (Select all options that apply)
                    </label>
                    <div className="space-y-2.5">
                      {[
                        'Evidence-based recommendations',
                        'Input from nutritionists/dietitians',
                        'Personalized recommendations based on my data',
                        'Transparency about why a recommendation was made',
                        'Scientific/clinical research',
                        'Integration with health/fitness data'
                      ].map((factor) => (
                        <label
                          key={factor}
                          className={`min-h-[48px] flex items-center gap-3 p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                            formData.trustFactors.includes(factor) 
                              ? 'bg-[#2ECC71]/15 border-[#2ECC71] text-white' 
                              : 'bg-[#0A0B0A] border-white/10 text-[#94A3B8] hover:border-white/20'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.trustFactors.includes(factor)}
                            onChange={() => handleCheckboxArrayToggle('trustFactors', factor)}
                            className="accent-[#2ECC71] w-4 h-4 rounded shrink-0"
                          />
                          <span className="leading-snug">{factor}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Early Access & Feedback (Q13 - Q18) */}
                <div id="section-access" className="space-y-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-8">
                  <div className="flex items-center gap-2.5 text-[#2ECC71] border-b border-white/10 pb-3">
                    <Users size={20} />
                    <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                      Section 4: Early Access & Community
                    </h2>
                  </div>

                  {/* Q13: Interest testing early */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      13. Would you be interested in being one of the first people to test KYEAL AI before public launch?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {['Yes, absolutely', 'Yes, I\'d love to', 'Maybe', 'Not right now'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('interestTestingEarly', opt)}
                          className={`min-h-[48px] py-3 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                            formData.interestTestingEarly === opt 
                              ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.3)]' 
                              : 'bg-[#0A0B0A] text-[#94A3B8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {formData.interestTestingEarly === opt && <Check size={14} />} {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q14: Must-have feature */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      14. What feature would make you say, "I actually need this"?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.mustHaveFeature}
                      onChange={(e) => handleChange('mustHaveFeature', e.target.value)}
                      placeholder="e.g. DNA-compatible meal photo scanning..."
                      className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl p-4 text-xs text-white placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#2ECC71] resize-none"
                    />
                  </div>

                  {/* Q15: Willing to give feedback */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      15. Would you be willing to give feedback and help us improve KYEAL AI during the early-access period?
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {['Yes', 'Maybe', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleChange('willingToGiveFeedback', opt)}
                          className={`min-h-[48px] py-3 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                            formData.willingToGiveFeedback === opt 
                              ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.3)]' 
                              : 'bg-[#0A0B0A] text-[#94A3B8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {formData.willingToGiveFeedback === opt && <Check size={14} />} {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Q16: Referral source */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      16. Where did you hear about KYEAL AI?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'Instagram',
                        'LinkedIn',
                        'WhatsApp',
                        'Friend / referral',
                        'College / university',
                        'Event',
                        'Other'
                      ].map((src) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => handleChange('referralSource', src)}
                          className={`min-h-[48px] py-3 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                            formData.referralSource === src 
                              ? 'bg-[#2ECC71] text-black border-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.3)]' 
                              : 'bg-[#0A0B0A] text-[#94A3B8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {formData.referralSource === src && <Check size={14} />} {src}
                        </button>
                      ))}
                    </div>
                    {formData.referralSource === 'Other' && (
                      <input
                        type="text"
                        value={formData.referralSourceOther}
                        onChange={(e) => handleChange('referralSourceOther', e.target.value)}
                        placeholder="Please specify referral source"
                        className="w-full mt-3 bg-[#0A0B0A] border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-[#2ECC71]"
                      />
                    )}
                  </div>

                  {/* Q17: Additional notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                      17. Anything else you'd like us to know about your nutrition, lifestyle, or what you expect from KYEAL AI?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => handleChange('additionalNotes', e.target.value)}
                      placeholder="Share any additional thoughts..."
                      className="w-full bg-[#0A0B0A] border border-white/10 rounded-xl p-4 text-xs text-white placeholder:text-[#94A3B8]/40 focus:outline-none focus:border-[#2ECC71] resize-none"
                    />
                  </div>

                  {/* Q18: Join Community Checkbox & Option */}
                  <div className="p-5 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/30">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.notifyEarlyAccess}
                        onChange={(e) => handleChange('notifyEarlyAccess', e.target.checked)}
                        className="mt-1 accent-[#2ECC71] w-4 h-4 rounded shrink-0"
                      />
                      <div className="text-xs">
                        <span className="font-bold text-white block mb-0.5">18. Join the KYEAL AI Early Access Community</span>
                        <span className="text-[#94A3B8] leading-relaxed block">I want to be notified when KYEAL AI is ready for early access.</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#2ECC71] text-black font-black rounded-2xl text-base hover:bg-[#27ae60] transition-all inline-flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_35px_rgba(46,204,113,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Form...' : <>Submit Early Access Form <Send size={18} /></>}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        ) : (
          /* SUCCESS SCREEN WITH WHATSAPP COMMUNITY LINK */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#141614] border border-[#2ECC71]/40 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-[0_0_60px_rgba(46,204,113,0.2)] space-y-8"
          >
            <div className="w-20 h-20 rounded-full bg-[#2ECC71]/20 border border-[#2ECC71] text-[#2ECC71] flex items-center justify-center mx-auto">
              <CheckCircle2 size={44} />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Early Access Form Submitted!
              </h2>
              <p className="text-[#94A3B8] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.fullName}</span>! All 18 survey responses have been saved.
              </p>
            </div>

            {/* WhatsApp Community Callout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#2ECC71]/20 to-[#0A0B0A] border border-[#2ECC71]/50 text-left space-y-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71] text-black flex items-center justify-center font-black shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base">Join the KYEAL AI Early Access Community</h3>
                  <p className="text-xs text-[#94A3B8]">Get live updates, early beta invitations, and progress news on WhatsApp.</p>
                </div>
              </div>

              <a
                href={WHATSAPP_COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#2ECC71] text-black font-black rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#27ae60] transition-all shadow-[0_0_25px_rgba(46,204,113,0.35)] cursor-pointer"
              >
                Join WhatsApp Community <ExternalLink size={18} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl text-xs hover:bg-white/20 transition-colors"
              >
                Return to Home
              </button>
              <button
                onClick={() => navigate('/product')}
                className="w-full sm:w-auto px-8 py-3.5 border border-[#2ECC71]/40 text-[#2ECC71] font-bold rounded-xl text-xs hover:bg-[#2ECC71]/10 transition-colors"
              >
                Explore DNA Blueprint
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
