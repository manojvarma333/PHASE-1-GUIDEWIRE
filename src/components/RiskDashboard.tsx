import { useState } from "react";
import { motion } from "framer-motion";
import { CloudRain, Thermometer, Wind, TrendingDown, MapPin, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const zones = [
  { name: "Koramangala", risk: "high", rainfall: 62, orderDrop: 45, workers: 340 },
  { name: "Indiranagar", risk: "medium", rainfall: 35, orderDrop: 22, workers: 280 },
  { name: "Whitefield", risk: "low", rainfall: 12, orderDrop: 8, workers: 420 },
  { name: "HSR Layout", risk: "high", rainfall: 58, orderDrop: 40, workers: 190 },
  { name: "Jayanagar", risk: "medium", rainfall: 30, orderDrop: 18, workers: 260 },
];

const riskColors: Record<string, string> = {
  high: "text-destructive",
  medium: "text-accent",
  low: "text-primary",
};

const riskBg: Record<string, string> = {
  high: "bg-destructive/10 border-destructive/20",
  medium: "bg-accent/10 border-accent/20",
  low: "bg-primary/10 border-primary/20",
};

const weatherCards = [
  { icon: CloudRain, label: "Rainfall", value: "52mm", status: "heavy", color: "text-destructive" },
  { icon: Thermometer, label: "Temperature", value: "28°C", status: "normal", color: "text-primary" },
  { icon: Wind, label: "AQI", value: "185", status: "poor", color: "text-accent" },
  { icon: TrendingDown, label: "Order Drop", value: "38%", status: "significant", color: "text-destructive" },
];

const RiskDashboard = () => {
  const [selectedZone, setSelectedZone] = useState(zones[0]);

  return (
    <section id="dashboard" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Live Risk <span className="text-gradient-primary">Dashboard</span>
          </h2>
          <p className="text-muted-foreground">Simulated real-time weather and zone monitoring</p>
        </motion.div>

        {/* Weather cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {weatherCards.map((w) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-glass border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <w.icon className={`w-5 h-5 ${w.color}`} />
                    <span className="text-sm text-muted-foreground">{w.label}</span>
                  </div>
                  <div className="text-2xl font-display font-bold">{w.value}</div>
                  <div className={`text-xs mt-1 capitalize ${w.color}`}>{w.status}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Zone grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-glass border-border/50 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Zone Risk Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {zones.map((z) => (
                    <button
                      key={z.name}
                      onClick={() => setSelectedZone(z)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selectedZone.name === z.name
                          ? riskBg[z.risk] + " ring-1 ring-current"
                          : "bg-secondary/50 border-border/50 hover:bg-secondary"
                      }`}
                    >
                      <div className="font-display font-semibold text-sm mb-1">{z.name}</div>
                      <div className={`text-xs capitalize font-medium ${riskColors[z.risk]}`}>
                        {z.risk} risk
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{z.workers} workers</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-glass border-border/50">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                <AlertTriangle className={`w-5 h-5 ${riskColors[selectedZone.risk]}`} />
                {selectedZone.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium capitalize ${riskBg[selectedZone.risk]} ${riskColors[selectedZone.risk]}`}>
                {selectedZone.risk} risk zone
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rainfall</span>
                  <span className="font-medium">{selectedZone.rainfall}mm</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(selectedZone.rainfall / 80 * 100, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order Drop</span>
                  <span className="font-medium">{selectedZone.orderDrop}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${selectedZone.orderDrop}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Workers</span>
                  <span className="font-medium">{selectedZone.workers}</span>
                </div>
              </div>
              {selectedZone.risk === "high" && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                  ⚠️ Payout triggers active for this zone
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RiskDashboard;
