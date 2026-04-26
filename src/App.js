import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-primary-dark font-sans selection:bg-accent-lime selection:text-primary-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
