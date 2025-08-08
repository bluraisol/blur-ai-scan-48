import { useState } from "react";
import LoadingIntro from "@/components/LoadingIntro";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessFlowSection from "@/components/ProcessFlowSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import ModesSection from "@/components/ModesSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import CompactFooter from "@/components/CompactFooter";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <LoadingIntro onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="relative bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProcessFlowSection />
      <ModesSection />
      <PricingSection />
      <TokenomicsSection />
      <CompactFooter />
    </div>
  );
};

export default Index;
