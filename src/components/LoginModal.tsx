import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, User, Lock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Hardcoded user credentials
const USER_CREDENTIALS = {
  username: "ravi",
  password: "delivery123",
  name: "Ravi Kumar",
  earnings: "₹1,000/day",
  workHours: "10 hrs/day",
  walletBalance: 0,
};

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
      onLogin(USER_CREDENTIALS);
      onClose();
    } else {
      setError("Invalid credentials. Use: ravi / delivery123");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <Card className="bg-glass border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="font-display flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5 text-primary" />
              Login to Your Account
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Access your protection dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Username</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Button type="submit" variant="hero" className="w-full">
                  <LogIn className="w-4 h-4" />
                  Login
                </Button>
                <Button type="button" variant="ghost" className="w-full" onClick={onClose}>
                  Cancel
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                <div className="font-medium mb-1">Demo Credentials:</div>
                <div>Username: <span className="font-mono">ravi</span></div>
                <div>Password: <span className="font-mono">delivery123</span></div>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginModal;
