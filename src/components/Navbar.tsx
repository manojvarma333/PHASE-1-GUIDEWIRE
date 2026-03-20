import { Shield, User, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ user, onLoginClick, onLogout }) => (
  <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2 font-display font-bold text-lg">
        <Shield className="w-5 h-5 text-primary" />
        <span>RiskShield</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#dashboard" className="hover:text-foreground transition-colors">Dashboard</a>
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#" className="hover:text-foreground transition-colors">How It Works</a>
        </div>
        
        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{user.name}</span>
            </div>
            <Button variant="outline" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline ml-2">Logout</span>
            </Button>
          </div>
        ) : (
          <Button variant="hero" size="sm" onClick={onLoginClick}>
            <LogIn className="w-4 h-4" />
            <span className="hidden md:inline ml-2">Login</span>
          </Button>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
