import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RiskDashboard from "@/components/RiskDashboard";
import PremiumCalculator from "@/components/PremiumCalculator";
import PayoutSimulator from "@/components/PayoutSimulator";

const Index = () => {
  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onGetStarted={scrollToDashboard} />
      <FeaturesSection />
      <RiskDashboard />
      <PremiumCalculator />
      <PayoutSimulator />
      <footer className="py-12 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>RiskShield — AI-Powered Income Protection for Delivery Workers</p>
          <p className="mt-1 text-xs">Phase 1 Prototype • Simulated Data</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
