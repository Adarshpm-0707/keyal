import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Dna, 
  Activity, 
  Database, 
  UserCheck, 
  AlertCircle, 
  ChevronRight, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  FileCheck, 
  EyeOff, 
  Scale
} from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
            Data Privacy & Security
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 uppercase italic text-white tracking-tighter">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2ECC71]">Policy</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-[#94A3B8] font-mono">
            <span>Effective Date: December 2024</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-[#2ECC71]">Last Updated: September 2, 2025</span>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 text-white/80 text-sm md:text-base leading-relaxed font-light"
        >
          {/* Section 1: Who We Are */}
          <motion.div 
            variants={itemVariants} 
            className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2ECC71]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center shrink-0 border border-[#2ECC71]/20 text-[#2ECC71]">
                <Shield size={22} />
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-black uppercase italic tracking-tight text-white">1. Who We Are</h2>
                <p>
                  This Privacy Policy explains how <strong>Abizen Nutrition Pvt. Ltd.</strong> ("Kyeal," "we," "us," or "our") collects, uses, stores, and protects your personal information — including your genetic data — when you use our website, mobile app, DNA testing services, gut microbiome testing, blood analysis integration, AI Coach, and related products (collectively, the "Services").
                </p>
                <p>
                  By using our Services, you agree to the practices described in this Policy. If you do not agree, please do not use our Services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2: What Data We Collect */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              2. What Data We Collect
            </h2>
            <p className="text-[#94A3B8] text-sm">
              We collect various categories of data to provide personalized biological insights and precision wellness guidance:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 2.1 Account & Registration Data */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <UserCheck size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">2.1 Account & Registration Data</h3>
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  Name, email, phone number, billing address, and payment details, collected when you sign up or purchase a product.
                </p>
              </div>

              {/* 2.2 Genetic Data */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <Dna size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">2.2 Genetic Data</h3>
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  Your DNA sample (typically a saliva swab) and the sequencing data, trait scores, and reports derived from it. This includes ancestry, health predispositions, nutrition-related traits, fitness traits, and clinical genetics findings (e.g., carrier status, pharmacogenomics, cancer risk markers).
                </p>
              </div>

              {/* 2.3 Gut Microbiome Data */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <Activity size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">2.3 Gut Microbiome Data</h3>
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  Results from any gut microbiome test you take, including bacterial/fungal/viral composition, diversity indices, and functional pathway readouts.
                </p>
              </div>

              {/* 2.4 Blood & Health Data */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <Database size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">2.4 Blood & Health Data</h3>
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  Blood test values you upload or collected as part of our Smart Blood Analysis, plus self-reported health history, family medical history, allergies, medications, and lifestyle information provided through intake forms or the app.
                </p>
              </div>

              {/* 2.5 Behavioral & App Usage Data */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <FileCheck size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">2.5 Behavioral & App Usage Data</h3>
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  Data generated through your use of the AI Coach and app — logged meals (including photos uploaded for meal analysis), workout completion, weight/measurement logs, questionnaire responses (e.g., cravings, stress-eating patterns, sleep quality), and general app interaction data.
                </p>
              </div>

              {/* 2.6 Automated Data */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <Lock size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">2.6 Automated Data</h3>
                </div>
                <p className="text-xs md:text-sm text-[#94A3B8]">
                  IP address, device type, browser type, and usage analytics collected automatically when you use our website or app.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 3: How We Use Your Data */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              3. How We Use Your Data
            </h2>
            <p>We use your data to:</p>
            <ul className="space-y-3 pl-2">
              {[
                "Generate your DNA Blueprint, gut microbiome report, blood analysis, and integrated Health OS output",
                "Personalize your nutrition plans, supplement protocols, fitness programs, and AI Coach recommendations",
                "Provide consultations with our genetic counselors, dietitians, psychologists, and physical trainers",
                "Communicate with you about your account, orders, and services",
                "Improve our Services, including through aggregated/de-identified research and quality review",
                "Comply with legal and regulatory obligations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#94A3B8]">
                  <CheckCircle2 size={16} className="text-[#2ECC71] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Zero-Ad / No Broker Promise Banner */}
            <div className="p-5 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/30 mt-6 flex items-center gap-4">
              <EyeOff size={24} className="text-[#2ECC71] shrink-0" />
              <p className="text-xs md:text-sm font-semibold text-white">
                <strong>Our Absolute Guarantee:</strong> We do not use your genetic or health data for advertising or sell it to data brokers.
              </p>
            </div>
          </motion.div>

          {/* Section 4: Genetic Data Processing — Our Lab Partners */}
          <motion.div variants={itemVariants} className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <h2 className="text-lg font-black uppercase italic tracking-tight text-white flex items-center gap-2">
              <Dna className="text-[#2ECC71]" size={20} />
              4. Genetic Data Processing — Our Lab Partners
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              Kyeal does not perform DNA sequencing in-house. Your saliva sample and resulting raw genetic data are processed by <strong className="text-white">The Gene Box (Virtus Nutrition Pvt. Ltd.)</strong>, operating under their own laboratory data-handling protocols in addition to this Policy.
            </p>
            
            <div className="p-5 rounded-2xl bg-white/[0.02] border-l-2 border-[#2ECC71] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2ECC71]">
                Kyeal's Commitment
              </h3>
              <p className="text-xs md:text-sm text-[#94A3B8]">
                Regardless of any broader data-use terms in our lab partner's own general policies, Kyeal does not permit sharing of your genetic data with third parties without your explicit consent. This commitment is reflected in our contractual terms with our lab partner, which exclude Kyeal customers from any more permissive default sharing or research clauses in the partner's own policy.
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-white pt-2">
              What we commit to on Kyeal's own side regardless of lab partner terms:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                "We do not attach your name or direct personal identity to your genetic data when it is sent for sequencing or interpretation.",
                "We do not sell your genetic data to third parties.",
                "We do not share your genetic data with third parties without your explicit consent."
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-[#94A3B8]">
                  <ChevronRight size={16} className="text-[#2ECC71] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 5: Third-Party Sharing */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              5. Third-Party Sharing
            </h2>
            <p>We share data only with strictly authorized parties:</p>
            <ul className="space-y-3 pl-2">
              {[
                { title: "Our accredited lab and sequencing partners", desc: "To process your sample and generate results (see Section 4)." },
                { title: "Kyeal's own network of consultants", desc: "Genetic counselors, dietitians, psychologists, physical trainers involved in your care, strictly on a need-to-know basis." },
                { title: "Payment processors", desc: "To safely handle payment transactions." },
                { title: "Service providers", desc: "Who support our infrastructure (e.g., secure cloud hosting), under contractual confidentiality obligations." },
                { title: "Regulators or law enforcement", desc: "Only where legally required by applicable statutory orders." },
                { title: "A successor entity", desc: "In the event of a merger, acquisition, or sale of Kyeal's business — your data would transfer subject to the same or a more protective privacy policy." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#94A3B8]">
                  <ChevronRight size={16} className="text-[#2ECC71] shrink-0 mt-0.5" />
                  <span><strong className="text-white">{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs md:text-sm text-[#94A3B8]">
              <strong className="text-white">Strict Protection:</strong> We do not share your genetic or health data with advertisers, employers, or insurers, and we do not permit third parties to use your data for marketing purposes.
            </div>
          </motion.div>

          {/* Section 6: Your Rights */}
          <motion.div variants={itemVariants} className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <h2 className="text-lg font-black uppercase italic tracking-tight text-white flex items-center gap-2">
              <Scale className="text-[#2ECC71]" size={20} />
              6. Your Rights
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              Under India's <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, and as a matter of our own policy, you have the right to:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                { title: "Access", text: "The personal and genetic data we hold about you." },
                { title: "Correct", text: "Inaccurate or incomplete personal data." },
                { title: "Withdraw Consent", text: "For data uses that were consent-based (note: withdrawing consent may limit our ability to provide certain Services)." },
                { title: "Request Deletion", text: "Of your account and associated data, subject to legal retention requirements (e.g., financial records)." },
                { title: "Lodge a Grievance", text: "With our Grievance Officer (see Section 10) or with the relevant Data Protection Board." }
              ].map((right, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#94A3B8]">
                  <CheckCircle2 size={16} className="text-[#2ECC71] shrink-0 mt-0.5" />
                  <span><strong className="text-white">{right.title}:</strong> {right.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <p className="text-xs md:text-sm text-[#94A3B8]">
                To exercise any of these rights, contact our privacy team at <a href="mailto:cfo@kyeal.in" className="text-white underline hover:text-[#2ECC71] font-semibold">cfo@kyeal.in</a>.
              </p>
              <p className="text-xs md:text-sm text-[#94A3B8]">
                <strong>Data Retention:</strong> We retain your genetic data for 90 days after your last active subscription or your last interaction with our Services, or until you request deletion, whichever comes first.
              </p>
            </div>
          </motion.div>

          {/* Section 7: Data Security */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              7. Data Security
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              We use industry-standard technical and organizational measures to protect your data, including encryption in transit and at rest, access controls, and staff confidentiality obligations. No system can be guaranteed 100% secure, and we will notify you and relevant authorities in the event of a data breach affecting your personal information, as required by law.
            </p>
          </motion.div>

          {/* Section 8: Children's Data */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              8. Children's Data
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              Our Services are not intended for individuals under 18. We do not knowingly collect data from anyone under 18. If a pediatric nutrition offering is introduced in the future, this section will need to be revisited with a specific parental-consent framework before that product line launches.
            </p>
          </motion.div>

          {/* Section 9: Sensitive Findings & Genetic Counseling */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              9. Sensitive Findings & Genetic Counseling
            </h2>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[#2ECC71]">
                <AlertCircle size={18} />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Ethical Guidelines & Medical Guidance</h3>
              </div>
              <p className="text-xs md:text-sm text-[#94A3B8]">
                Some genetic findings — including those related to cancer risk, carrier status, or other clinically significant conditions — are only released alongside guidance from a qualified genetic counselor, in line with ICMR's ethical guidelines on genetic testing. This Policy does not change how those findings are delivered; see your service agreement for details on the consultation process.
              </p>
            </div>
          </motion.div>

          {/* Section 10: Grievance Officer & Contact */}
          <motion.div variants={itemVariants} className="p-6 md:p-8 rounded-3xl bg-white/[0.01] border border-white/5">
            <h2 className="text-lg font-black uppercase italic tracking-tight text-[#2ECC71] mb-6 flex items-center gap-2">
              <Mail size={20} />
              10. Grievance Officer & Contact
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8] mb-4">
              For any privacy questions, complaints, or requests, please reach out to our designated Grievance Officer:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[#94A3B8] text-[10px] uppercase font-bold tracking-widest">Grievance Officer</span>
                <p className="text-white font-bold text-base">Ajhaz Muhammed</p>
                <p className="text-[#94A3B8]">
                  Email: <a href="mailto:cfo@kyeal.in" className="text-[#2ECC71] underline hover:text-white">cfo@kyeal.in</a>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#94A3B8] text-[10px] uppercase font-bold tracking-widest">
                  <MapPin size={12} className="text-[#2ECC71]" />
                  <span>Registered Address</span>
                </div>
                <p className="text-white font-medium">Abizen Nutrition Private Limited</p>
                <p className="text-[#94A3B8] leading-relaxed">
                  University Incubation Centre, Kannur University Rd, KUIIF, Thavakkara, Kannur, Kerala 670002
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 11: Changes to This Policy */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              11. Changes to This Policy
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              We may update this Policy from time to time. Material changes will be communicated to you via email or an in-app notice before they take effect. Continued use of our Services after changes take effect constitutes acceptance of the updated Policy.
            </p>
          </motion.div>

          {/* Section 12: Governing Law */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-l-4 border-[#2ECC71] pl-4">
              12. Governing Law
            </h2>
            <p className="text-xs md:text-sm text-[#94A3B8]">
              This Policy is governed by the laws of India, including the Digital Personal Data Protection Act, 2023, and other applicable data protection and health information regulations.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
