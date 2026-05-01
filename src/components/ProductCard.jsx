import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, CheckCircle2, ArrowRight, Shield, Truck, RotateCcw } from "lucide-react";
import "../style/product.css";

const ProductCard = ({ product, onAddToCart }) => {
  const {
    name,
    badge,
    badgeColor,
    image,
    description,
    price,
    originalPrice,
    rating,
    reviews,
    features,
    tag,
  } = product;

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── LEFT: Image Panel ── */}
      <div className="product-card__image-panel">
        <img src={image} alt={name} />
        <div className="product-card__image-overlay" />

        {/* Badges */}
        <div className="product-card__badges">
          <span
            className="product-card__badge-main"
            style={{ background: badgeColor }}
          >
            {badge}
          </span>
          <span className="product-card__badge-discount">{discount}% OFF</span>
        </div>

        {/* Bottom image tag */}
        <div className="product-card__image-tag">📦 {tag}</div>
      </div>

      {/* ── RIGHT: Details Panel ── */}
      <div className="product-card__details">

        {/* Rating */}
        <div className="product-card__rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(rating) ? "#F59E0B" : "none"}
              color={i < Math.floor(rating) ? "#F59E0B" : "#334155"}
            />
          ))}
          <span>{rating} · {reviews} verified reviews</span>
        </div>

        {/* Name */}
        <h2 className="product-card__name">{name}</h2>

        {/* Pricing */}
        <div className="product-card__price-box">
          <span className="product-card__price-main">
            ₹{price.toLocaleString("en-IN")}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span className="product-card__price-original">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="product-card__price-save">
              You save ₹{(originalPrice - price).toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="product-card__desc">{description}</p>

        <div className="product-card__divider" />

        {/* Features */}
        <div>
          <p className="product-card__features-label">What's Included</p>
          <ul className="product-card__features">
            {features.map((f, i) => (
              <li key={i} className="product-card__feature-item">
                <CheckCircle2 size={15} color="#2ECC71" style={{ marginTop: "1px", flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-card__divider" />

        {/* Trust badges */}
        <div className="product-card__trust">
          {[
            { icon: Shield, label: "NABL Certified Lab" },
            { icon: Truck, label: "Delivered to Door" },
            { icon: RotateCcw, label: "Annual Reassessment" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="product-card__trust-item">
              <Icon size={13} color="#2ECC71" />
              {label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          className="product-card__cta"
          whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(46,204,113,0.3)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onAddToCart && onAddToCart(product)}
        >
          <ShoppingCart size={18} />
          Add to Cart
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
