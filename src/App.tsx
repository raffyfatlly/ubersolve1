import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BusinessTypes from './components/BusinessTypes';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-dark text-gray-100 font-sans">
      <Header onShowContactForm={() => setShowContactForm(true)} />
      <main className="pt-16">
        <Hero />
        <Features />
        <BusinessTypes />
        <Pricing onShowContactForm={() => setShowContactForm(true)} />
        <CTA onShowContactForm={() => setShowContactForm(true)} />
      </main>
      
      <footer className="bg-dark-lighter/50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="font-medium">© 2024 agentif.co by Ubersolve. All rights reserved.</p>
        </div>
      </footer>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}