import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
import { WOO_URL, WOO_CONSUMER_KEY, WOO_CONSUMER_SECRET } from "../config";

// ── WOOCOMMERCE CONFIGURATION ──
// Replace these with your actual credentials
// Replace these with your actual credentials

const oauth = OAuth({
  consumer: {
    key: WOO_CONSUMER_KEY,
    secret: WOO_CONSUMER_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
  },
});


export const wooCommerceAPI = {
  // ── ORDERS ──
  createOrder: async (orderData) => {
    const endpoint = '/orders';
    const requestData = {
      url: `${WOO_URL}/wp-json/wc/v3${endpoint}`,
      method: 'POST',
    };
    const headers = oauth.toHeader(oauth.authorize(requestData));
    
    try {
      const response = await axios.post(requestData.url, orderData, {
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('WooCommerce Order Error:', error.response?.data || error.message);
      throw error;
    }
  },

  // ── PRODUCTS ──
  getProducts: async () => {
    const endpoint = '/products';
    const requestData = {
      url: `${WOO_URL}/wp-json/wc/v3${endpoint}`,
      method: 'GET',
    };
    const headers = oauth.toHeader(oauth.authorize(requestData));
    
    try {
      const response = await axios.get(requestData.url, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.error('WooCommerce Products Error:', error.response?.data || error.message);
      throw error;
    }
  },
};
