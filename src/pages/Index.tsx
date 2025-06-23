
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ResearchSection from '../components/ResearchSection';
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
    </div>
  );
};

export default Index;
