import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../style/home.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const About = () => {
  // Ensure the page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-container" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
      
      {/* HERO SECTION */}
      <section className="future-health-section" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <motion.div 
          className="section-intro"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ alignItems: "flex-start", textAlign: "left" }}
        >
          <motion.span variants={itemVariants} className="section-kicker" style={{ margin: "0 auto 20px auto", display: "block", textAlign: "center" }}>About Us</motion.span>
          <motion.h1 variants={itemVariants} className="section-heading-main" style={{ marginBottom: "40px", textAlign: "left" }}>
            Welcome to Kyeal.in – A <span className="gradient-text">Smarter</span> Approach to Wellness
          </motion.h1>

          <motion.div variants={itemVariants} style={{ maxWidth: "1000px", fontSize: "18px", lineHeight: "1.8", textAlign: "left", color: "var(--text-dim)" }}>
            <p style={{ marginBottom: "15px" }}>
              At <strong style={{ color: "#FFF" }}>Kyeal</strong>, we’re redefining wellness through the power of advanced genetics and nutritional science. Based at the Kannur University Incubation Centre in Kerala, we specialize in transforming your DNA insights into simple, actionable plans for healthier living.
            </p>
            <p style={{ marginBottom: "15px" }}>
              As a venture of <strong style={{ color: "#FFF" }}>Abizen Nutrition Private Limited</strong>, our expert team blends cutting-edge research with a personalized approach to wellness. We offer DNA-based nutrition guidance, lifestyle programs, and custom-tailored supplements designed for both individuals and organizations.
            </p>
            <p style={{ marginBottom: "50px" }}>
              Whether you're looking to optimize your personal health or elevate your team's wellbeing, Kyeal provides science-backed advice and continuous support — always rooted in empathy, innovation, and scientific excellence.
            </p>

            <h2 className="about-subheading">Our Mission</h2>
            <p style={{ marginBottom: "15px" }}>
              To make health and wellness truly personal by harnessing the power of DNA science and nutritional expertise.
            </p>
            <p style={{ marginBottom: "50px" }}>
              We deliver actionable, evidence-based programs that empower individuals and organizations to make informed, sustainable lifestyle choices. By bridging the gap between advanced genetic research and everyday wellness, our mission is to redefine health—making it accessible, achievable, and deeply personal.
            </p>

            <h2 className="about-subheading">Our Vision</h2>
            <p style={{ marginBottom: "15px" }}>
              To become India’s most trusted provider of DNA-powered nutrition and lifestyle solutions.
            </p>
            <p style={{ marginBottom: "50px" }}>
              We aim to lead the way in precision health and preventive care, setting new standards in wellness through innovation, research, and strategic partnerships. Our vision is a world where personalized wellbeing is not just a possibility—but a guaranteed reality for all.
            </p>

            <h2 className="about-subheading">Our Philosophy</h2>
            <p style={{ marginBottom: "15px" }}>
              At Kyeal, we believe true wellness begins with understanding who you are—down to your DNA.
            </p>
            <p style={{ marginBottom: "15px" }}>
              Your genetic code is unique, and your path to health should be too. That’s why we combine advanced genetic testing, nutritional science, and deep empathy to create personalized wellness solutions that work.
            </p>
            <p style={{ marginBottom: "15px" }}>
              We go beyond treating symptoms. We focus on people.
            </p>
            <p style={{ marginBottom: "30px" }}>
              Grounded in <strong style={{ color: "#FFF" }}>integrity</strong>, driven by <strong style={{ color: "#FFF" }}>innovation</strong>, and committed to <strong style={{ color: "#FFF" }}>respecting each individual's journey</strong>, we make wellbeing transformative and attainable. With Kyeal, wellness is no longer a one-size-fits-all concept—it’s a custom-designed journey toward your full health potential.
            </p>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
};

export default About;
