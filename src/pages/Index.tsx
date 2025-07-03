import React from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ResearchSection from "../components/sections/ResearchSection";
import AboutSection from "../components/sections/AboutSection";
import FAQSection from "../components/sections/FAQSection";
import TeamSection from "../components/sections/TeamSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import VenturesSection from "../components/sections/VenturesSection";

import Whatsaap from "@/utils/Whatsaap";

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
      <Whatsaap />
    </div>
  );
};

export default Index;
