import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "₹600", label: "Avg. daily income loss" },
  { value: "40%+", label: "Workers affected by weather" },
  { value: "<5min", label: "Auto payout time" },
];

const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(155_72%_48%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(210_80%_60%/0.06),transparent_60%)]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              AI-Powered Income Protection
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            Protect your{" "}
            <span className="text-gradient-primary">earnings</span>
            <br />
            from disruptions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            Smart parametric insurance for delivery workers. Get automatic payouts
            when weather, demand drops, or zone restrictions cut your income.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button variant="hero" size="lg" onClick={onGetStarted}>
              <Zap className="w-5 h-5" />
              Get Protected — ₹60/week
            </Button>
            <Button variant="hero-outline" size="lg" onClick={onGetStarted}>
              <TrendingUp className="w-5 h-5" />
              View Dashboard
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-primary">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
