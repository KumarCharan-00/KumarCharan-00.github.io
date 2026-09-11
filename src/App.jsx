import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PitchBanner from './components/PitchBanner';
import CaseStudiesSection from './components/CaseStudiesSection';
import PersonalProjectsSection from './components/PersonalProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import DeliveryFramework from './components/DeliveryFramework';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* Value Proposition Pitch */}
      <PitchBanner onOpenContact={handleOpenContact} />

      {/* Enterprise Case Studies & Blueprints */}
      <CaseStudiesSection />

      {/* Autonomous AI Agents & Personal Projects */}
      <PersonalProjectsSection />

      {/* Technical Stack Radar & Competencies */}
      <SkillsMatrix />

      {/* 5-Phase Delivery Roadmap */}
      <DeliveryFramework />

      {/* Contact & Consultation Section */}
      <ContactSection isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
