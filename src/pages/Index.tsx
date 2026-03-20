import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RiskDashboard from "@/components/RiskDashboard";
import PremiumCalculator from "@/components/PremiumCalculator";
import PayoutSimulator from "@/components/PayoutSimulator";
import UserProfile from "@/components/UserProfile";

const Index = ({ user, onLoginClick, onLogout, onPayout, recentPayouts }) => {
  const [showProfile, setShowProfile] = useState(false);

  const scrollToDashboard = () => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePayoutComplete = (amount) => {
    if (user) {
      onPayout(amount, "Heavy Rain Disruption");
      setShowProfile(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar user={user} onLoginClick={onLoginClick} onLogout={onLogout} />
      
      {!showProfile ? (
        <>
          <HeroSection onGetStarted={user ? () => setShowProfile(true) : onLoginClick} />
          <FeaturesSection />
          <RiskDashboard />
          <PremiumCalculator />
          <PayoutSimulator 
            onPayoutComplete={handlePayoutComplete} 
            user={user}
            onLoginRequired={onLoginClick}
          />
          <footer className="py-12 border-t border-border/50">
            <div className="container text-center text-sm text-muted-foreground">
              <p>RiskShield — AI-Powered Income Protection for Delivery Workers</p>
              <p className="mt-1 text-xs">Phase 1 Prototype • Simulated Data</p>
            </div>
          </footer>
        </>
      ) : (
        <UserProfile 
          user={user} 
          onLogout={onLogout}
          recentPayouts={recentPayouts}
        />
      )}
    </div>
  );
};

export default Index;
