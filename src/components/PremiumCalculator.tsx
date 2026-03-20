import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const PremiumCalculator = () => {
  const [weeklyEarnings, setWeeklyEarnings] = useState([7000]);
  const [riskLevel, setRiskLevel] = useState<"low" | "medium" | "high">("medium");

  const basePremium = 60;
  const riskAdj = riskLevel === "high" ? 20 : riskLevel === "low" ? -10 : 0;
  const earningsAdj = Math.round((weeklyEarnings[0] - 7000) / 1000) * 5;
  const premium = Math.max(50, Math.min(90, basePremium + riskAdj + earningsAdj));

  const maxPayout = Math.min(500, Math.round(weeklyEarnings[0] * 0.6 / 7));
  const minPayout = Math.max(300, maxPayout - 150);

  return (
    <section className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Premium <span className="text-gradient-accent">Calculator</span>
          </h2>
          <p className="text-muted-foreground">See your personalized weekly protection plan</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-glass border-border/50">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-accent" />
                  Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-muted-foreground">Weekly Earnings</span>
                    <span className="font-display font-bold text-foreground">₹{weeklyEarnings[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={weeklyEarnings}
                    onValueChange={setWeeklyEarnings}
                    min={3000}
                    max={15000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹3,000</span>
                    <span>₹15,000</span>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground block mb-3">Zone Risk Level</span>
                  <div className="grid grid-cols-3 gap-2">
                    {(["low", "medium", "high"] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setRiskLevel(level)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all border ${
                          riskLevel === level
                            ? level === "high"
                              ? "bg-destructive/10 border-destructive/30 text-destructive"
                              : level === "medium"
                              ? "bg-accent/10 border-accent/30 text-accent"
                              : "bg-primary/10 border-primary/30 text-primary"
                            : "bg-secondary/50 border-border/50 text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-glass border-primary/20 glow-primary">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Your Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-4">
                  <div className="text-sm text-muted-foreground mb-1">Weekly Premium</div>
                  <div className="text-5xl font-display font-bold text-gradient-primary">
                    ₹{premium}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">/week</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Base Premium</span>
                    <span>₹{basePremium}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Risk Adjustment</span>
                    <span className={riskAdj > 0 ? "text-destructive" : riskAdj < 0 ? "text-primary" : ""}>
                      {riskAdj > 0 ? "+" : ""}₹{riskAdj}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Earnings Adjustment</span>
                    <span>{earningsAdj > 0 ? "+" : ""}₹{earningsAdj}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Payout Range</span>
                    <span className="font-semibold text-primary">₹{minPayout}–₹{maxPayout}</span>
                  </div>
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  <Zap className="w-5 h-5" />
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCalculator;
