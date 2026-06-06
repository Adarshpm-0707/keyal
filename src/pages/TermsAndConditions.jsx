import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0B0A] pt-28 md:pt-36 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#2ECC71]/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#2ECC71] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-[0.01] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#2ECC71]/30 text-[#2ECC71] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 bg-[#2ECC71]/5">
            Legal Protocol
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 uppercase italic text-white tracking-tighter">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">Conditions</span>
          </h1>
          <p className="text-xs md:text-sm text-[#94A3B8] uppercase tracking-widest font-bold font-mono">
            Last Updated: June 1, 2025
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 text-white/80 text-sm md:text-base leading-relaxed font-light"
        >
          {/* Intro Card */}
          <motion.div 
            variants={itemVariants} 
            className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center shrink-0 border border-[#2ECC71]/20 text-[#2ECC71]">
                <FileText size={22} />
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-black uppercase italic tracking-tight text-white">1. Introduction & Acceptance</h2>
                <p>
                  Welcome to Kyeal, a precision wellness platform operated by <strong>Abizen Nutrition Pvt. Ltd.</strong> ("Company", "we", "our", or "us"), a company incorporated under the Companies Act, 2013, with its registered office in Bengaluru, Karnataka, India.
                </p>
                <p>
                  By accessing or using the Kyeal platform, website, mobile application, or any of our services (collectively, "Services"), you agree to be legally bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, you must not use our Services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you ("User", "you", or "your") and Abizen Nutrition Pvt. Ltd. Please read them carefully before proceeding.
                </p>
              </div>
            </div>
            
            {/* Sub-section: Eligibility */}
            <div className="mt-6 pl-6 sm:pl-16 space-y-3 border-l-2 border-[#2ECC71]/30">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#2ECC71]">1.1 Eligibility</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
                <li>You must be at least 18 years of age to use our Services independently.</li>
                <li>Minors (under 18) may use the platform only with verifiable parental or guardian consent.</li>
                <li>By using our Services, you represent and warrant that you meet all eligibility requirements.</li>
                <li>The Services are intended for users located in India and subject to Indian law.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">2. Description of Services</h2>
            <p>
              Kyeal operates on a 'Food as Medicine' philosophy, offering the following core service pillars:
            </p>
            <ul className="space-y-3 pl-4">
              {[
                "DNA-Guided Nutrition Protocols: Personalised dietary recommendations based on genetic analysis in partnership with NABL/CAP-certified laboratories.",
                "Nutrition Consulting: One-on-one and group sessions with certified nutritionists and dieticians.",
                "Prevention & Fitness Programs: Evidence-based lifestyle and fitness planning.",
                "Mental Wellness Support: Guided mental health modules integrated with physical wellness.",
                "Continuous Health Monitoring: Periodic health check-ins, biomarker tracking, and outcome reporting."
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#94A3B8]">
                  <ChevronRight size={16} className="text-[#2ECC71] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p>
              Our Services are for informational and wellness purposes only. They do not constitute medical diagnosis, treatment, or a substitute for professional medical advice.
            </p>

            {/* Warning Box */}
            <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 mt-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-red-500 mb-2">2.1 Medical Disclaimer</h4>
              <p className="text-xs text-[#94A3B8]">
                <strong>IMPORTANT:</strong> Kyeal's services are wellness and nutrition guidance tools, not medical services. Nothing on this platform constitutes medical advice, diagnosis, or treatment. Always consult a qualified medical professional before making any changes to your diet, exercise, or health regimen, especially if you have an existing medical condition.
              </p>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">3. User Accounts & Registration</h2>
            
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">3.1 Account Creation</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
                <li>You must provide accurate, complete, and current information during registration.</li>
                <li>You are solely responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You agree to notify us immediately at <a href="mailto:legal@kyeal.in" className="text-white underline hover:text-[#2ECC71]">legal@kyeal.in</a> if you suspect any unauthorized access to your account.</li>
                <li>You are responsible for all activities that occur under your account.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">3.2 Account Termination</h3>
              <p>We reserve the right to suspend or terminate your account at our sole discretion if:</p>
              <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
                <li>You violate any provision of these Terms.</li>
                <li>You provide false or misleading information.</li>
                <li>Your conduct is harmful to other users, third parties, or our business interests.</li>
                <li>Required by applicable law or court order.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">4. Payments, Billing & Refunds</h2>
            
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">4.1 Pricing & Payments</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
                <li>All fees are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</li>
                <li>Payments are processed through secure third-party payment gateways. We do not store your payment card information.</li>
                <li>Subscription plans auto-renew unless cancelled at least 48 hours before the renewal date.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">4.2 Refund Policy</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
                <li>Requests for refunds must be submitted within 7 days of purchase to <a href="mailto:legal@kyeal.in" className="text-white underline hover:text-[#2ECC71]">legal@kyeal.in</a>.</li>
                <li>Refunds are evaluated on a case-by-case basis. Services that have been fully rendered are generally non-refundable.</li>
                <li>DNA testing kits, once dispatched or sample collected, are non-refundable.</li>
                <li>Approved refunds will be processed within 7-10 business days.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">5. Intellectual Property</h2>
            <p>
              All content on the Kyeal platform, including but not limited to text, graphics, logos, software, nutrition protocols, genetic analysis frameworks, reports, and methodologies, is the exclusive intellectual property of Abizen Nutrition Pvt. Ltd. or its licensors and is protected under the Copyright Act, 1957 and other applicable Indian and international IP laws.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/90">5.1 Permitted Use</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
                <li>You may access and use content solely for your personal, non-commercial wellness purposes.</li>
                <li>You may not reproduce, distribute, modify, create derivative works of, or commercially exploit any content without our prior written consent.</li>
                <li>Personalized wellness reports and DNA analysis results generated for you remain subject to our IP rights in the methodology and presentation.</li>
              </ul>
            </div>
          </motion.div>

          {/* Section 6 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">6. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
              <li>Use our Services for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Share, resell, or distribute personalized wellness reports or genetic data to any third party without our written consent.</li>
              <li>Attempt to gain unauthorized access to any part of our systems or databases.</li>
              <li>Transmit any harmful, offensive, defamatory, or otherwise objectionable content.</li>
              <li>Use automated bots, scrapers, or other tools to extract data from our platform.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any party.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            </ul>
          </motion.div>

          {/* Section 7 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
              <li>Abizen Nutrition Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</li>
              <li>Our total liability for any claim arising from your use of the Services shall not exceed the amount paid by you for the specific service giving rise to the claim in the 3 months preceding the claim.</li>
              <li>We do not warrant that the Services will be uninterrupted, error-free, or free from harmful components.</li>
            </ul>
            <p className="text-xs italic text-[#94A3B8]">
              Nothing in these Terms limits liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded under Indian law.
            </p>
          </motion.div>

          {/* Section 8 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">8. Governing Law & Dispute Resolution</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#94A3B8] text-xs md:text-sm">
              <li>These Terms are governed by and construed in accordance with the laws of India.</li>
              <li>Any disputes arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiation.</li>
              <li>If unresolved within 30 days, disputes shall be submitted to arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator appointed by mutual consent.</li>
              <li>The courts of Bengaluru, Karnataka shall have exclusive jurisdiction over any matter not subject to arbitration.</li>
            </ul>
          </motion.div>

          {/* Section 9 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">9. Amendments to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be notified via email or through a prominent notice on our platform. Continued use of our Services after the effective date of changes constitutes acceptance of the revised Terms.
            </p>
          </motion.div>

          {/* Section 10 */}
          <motion.div variants={itemVariants} className="p-6 md:p-8 rounded-3xl bg-white/[0.01] border border-white/5">
            <h2 className="text-lg font-black uppercase italic tracking-tight text-[#2ECC71] mb-4">10. Contact Information</h2>
            <div className="space-y-2 text-xs md:text-sm text-[#94A3B8]">
              <p className="text-white font-bold">Abizen Nutrition Pvt. Ltd. (Kyeal)</p>
              <p>Email: <a href="mailto:legal@kyeal.in" className="text-white underline hover:text-[#2ECC71]">legal@kyeal.in</a></p>
              <p>Website: <a href="https://www.kyeal.in" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#2ECC71]">www.kyeal.in</a></p>
              <p>Address: Bengaluru, Karnataka, India</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
