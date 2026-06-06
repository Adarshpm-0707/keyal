// src/data/productsData.js
import productImg from '../assets/product.jpg';

const products = [
  {
    id: 1,
    name: "DNA Blueprint — Complete Wellness Kit",
    badge: "Most Popular",
    badgeColor: "#2ECC71",
    image: productImg,
    description:
      "India's first complete DNA-based preventive healthcare kit. One NABL-certified DNA test covering all 5 wellness pillars — mental health, physical fitness, personalised nutrition, preventive disease screening, and continuous health monitoring. Delivered to your doorstep.",
    price: 30000,
    originalPrice: 39999,
    rating: 4.9,
    reviews: 218,
    features: [
      "Illumina Infinium™ genotyping technology",
      "5-pillar DNA analysis report",
      "4-expert consultation panel (genetics, nutrition, fitness, psychology)",
      "3-month personalised meal plan — delivered daily",
      "Monthly targeted supplements (3 months)",
      "Quarterly biomarker blood panel",
      "18+ cancer-linked genetic markers tracked",
      "Annual precision health review",
    ],
    tag: "DNA + Meals + Supplements + Monitoring",
    category: "Core",
  },
];

export default products;
