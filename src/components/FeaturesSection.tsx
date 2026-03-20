import { motion } from "framer-motion";
import { Cloud, MapPin, Brain, CreditCard, Shield, Activity } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Weather Monitoring",
    desc: "Real-time rainfall, heat, and AQI tracking across your delivery zone.",
  },
  {
    icon: MapPin,
    title: "Zone-Based Protection",
    desc: "City divided into risk zones. If your zone is hit, you're automatically covered.",
  },
  {
    icon: Brain,
    title: "AI Risk Engine",
    desc: "ML models predict disruptions and dynamically calculate your premium.",
  },
  {
    icon: CreditCard,
    title: "Instant Payouts",
    desc: "No manual claims. Parametric triggers auto-credit ₹300–₹500 to your wallet.",
  },
  {
    icon: Shield,
    title: "Weekly Plans",
    desc: "Affordable ₹50–₹90/week plans tailored to your earnings and zone risk.",
  },
  {
    icon: Activity,
    title: "Fraud Detection",
    desc: "GPS + activity validation ensures fair payouts for genuine workers.",
  },
];

const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          How it <span className="text-gradient-primary">works</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Multi-factor parametric triggers protect you automatically — no paperwork, no delays.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
