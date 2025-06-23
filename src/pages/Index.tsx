
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/AboutSection';
import ResearchSection from '../components/sections/ResearchSection';
import VenturesSection from '../components/VenturesSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ResearchSection />
      <VenturesSection />
      <TeamSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
