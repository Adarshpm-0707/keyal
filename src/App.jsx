import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import ReportDetail from './pages/ReportDetail';
import TermsAndConditions from './pages/TermsAndConditions';
import Bookings from './pages/Bookings';
import Services from './pages/Services';
import Waitlist from './pages/Waitlist';
import Loader from './components/Loader';
import WhatsAppWidget from './components/WhatsAppWidget';

import { CartProvider } from './context/CartContext';
import SmoothScroll from './components/SmoothScroll';

function AppContent() {
  const location = useLocation();
  const isBookingsPage = location.pathname === '/bookings';

  return (
    <div className="min-h-screen bg-primary-dark font-sans selection:bg-accent-lime selection:text-primary-dark">
      {!isBookingsPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/report-detail" element={<ReportDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/services" element={<Services />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
      {!isBookingsPage && <Footer />}
    </div>
  );
}

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
          <AppContent />
        </SmoothScroll>
      </Router>
    </CartProvider>
  );
}

export default App;

