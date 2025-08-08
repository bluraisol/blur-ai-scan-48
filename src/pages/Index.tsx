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
