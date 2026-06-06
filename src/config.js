// Configuration file for API keys
// For Vercel deployment, add these as Environment Variables in the Vercel Dashboard
export const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY_ID || process.env.REACT_APP_RAZORPAY_KEY || "rzp_live_RSwNij2pp8aXj2";
export const WOO_URL = process.env.REACT_APP_WOO_URL || "https://kyeal.in";
export const WOO_CONSUMER_KEY = process.env.REACT_APP_WOO_CONSUMER_KEY || "ck_c839847ba138db49ecc00a674dd55e2cdeacfddc";
export const WOO_CONSUMER_SECRET = process.env.REACT_APP_WOO_CONSUMER_SECRET || "cs_ca0f25b4281d31e59e8f70bd65176e7e96df252a";

// EmailJS Configuration
export const EMAILJS_SERVICE_ID = (process.env.REACT_APP_EMAILJS_SERVICE_ID || "").trim();
export const EMAILJS_TEMPLATE_ID = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "").trim();
export const EMAILJS_PUBLIC_KEY = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "").trim();
