import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Product from './pages/Product';
import Loader from './components/Loader';
import WhatsAppWidget from './components/WhatsAppWidget';

import { CartProvider } from './context/CartContext';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <Router>
        {loading && <Loader />}
        <WhatsAppWidget />
        <SmoothScroll>
          <div className="min-h-screen bg-primary-dark font-sans selection:bg-accent-lime selection:text-primary-dark">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />
            </Routes>
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </CartProvider>
  );
}

export default App;
