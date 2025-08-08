import { useState } from "react";
import LoadingIntro from "@/components/LoadingIntro";
import NeonNetworkBackground from "@/components/NeonNetworkBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessFlowSection from "@/components/ProcessFlowSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import ModesSection from "@/components/ModesSection";
import CompactFooter from "@/components/CompactFooter";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <LoadingIntro onComplete={() => setShowLoading(false)} />;
  }

  return (
    <div className="relative">
      <NeonNetworkBackground />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProcessFlowSection />
      <ModesSection />
      <PricingSection />
      <CompactFooter />
    </div>
  );
};

export default Index;
