import { Shield } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2 font-display font-bold text-lg">
        <Shield className="w-5 h-5 text-primary" />
        <span>RiskShield</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a>
        <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#" className="hover:text-foreground transition-colors">How It Works</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
