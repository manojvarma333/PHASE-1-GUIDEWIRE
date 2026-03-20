import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle2, CloudRain, TrendingDown, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { icon: CloudRain, label: "Weather Alert", detail: "Rainfall detected: 52mm (threshold: 40mm)", color: "text-destructive" },
  { icon: TrendingDown, label: "Order Drop", detail: "Order volume dropped 38% (threshold: 35%)", color: "text-accent" },
  { icon: Clock, label: "Activity Check", detail: "Ravi active for 6 hours (minimum: 4 hrs)", color: "text-info" },
  { icon: CheckCircle2, label: "Payout Triggered", detail: "₹450 auto-credited to wallet", color: "text-primary" },
];

const PayoutSimulator = () => {
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [complete, setComplete] = useState(false);

  const runSimulation = () => {
    setRunning(true);
    setComplete(false);
    setCurrentStep(0);

    steps.forEach((_, i) => {
      setTimeout(() => {
        setCurrentStep(i);
        if (i === steps.length - 1) {
          setTimeout(() => {
            setComplete(true);
            setRunning(false);
          }, 800);
        }
      }, (i + 1) * 1200);
    });
  };

  const reset = () => {
    setCurrentStep(-1);
    setComplete(false);
    setRunning(false);
  };

  return (
    <section className="py-24 relative">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Payout <span className="text-gradient-primary">Simulator</span>
          </h2>
          <p className="text-muted-foreground">Watch how automatic payouts are triggered for Ravi's scenario</p>
        </motion.div>

        <Card className="bg-glass border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="font-display">
              👤 Ravi — Food Delivery Partner
            </CardTitle>
            <p className="text-sm text-muted-foreground">Earns ₹1,000/day • Works 10 hrs/day • Heavy rain day</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Steps */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={false}
                  animate={{
                    opacity: currentStep >= i ? 1 : 0.3,
                    scale: currentStep === i ? 1.02 : 1,
                  }}
                  className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${
                    currentStep >= i ? "bg-secondary/80 border-border" : "bg-secondary/20 border-border/30"
                  }`}
                >
                  <div className={`mt-0.5 ${currentStep >= i ? step.color : "text-muted-foreground"}`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm">{step.label}</div>
                    <div className="text-xs text-muted-foreground">{step.detail}</div>
                  </div>
                  {currentStep >= i && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-primary"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {complete && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center"
                >
                  <IndianRupee className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-gradient-primary">₹450 Credited!</div>
                  <p className="text-sm text-muted-foreground mt-1">Payout sent to Ravi's wallet in under 5 minutes</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center gap-3 pt-2">
              {!running && !complete && (
                <Button variant="hero" onClick={runSimulation}>
                  <Play className="w-4 h-4" />
                  Run Simulation
                </Button>
              )}
              {complete && (
                <Button variant="hero-outline" onClick={reset}>
                  Run Again
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PayoutSimulator;
