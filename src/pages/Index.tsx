
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketSection from "@/components/MarketSection";
import SwotSection from "@/components/SwotSection";
import AnalysisSection from "@/components/AnalysisSection";
import RoadmapSection from "@/components/RoadmapSection";
import FinancialSection from "@/components/FinancialSection";
import StrategySection from "@/components/StrategySection";
import RisksCtaSection from "@/components/RisksCtaSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Simple scroll animation for elements
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        
        if (elementTop < window.innerHeight - elementHeight / 2) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on component mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MarketSection />
      <SwotSection />
      <AnalysisSection />
      <RoadmapSection />
      <FinancialSection />
      <StrategySection />
      <RisksCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
