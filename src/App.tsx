import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LoginModal from "./components/LoginModal.tsx";
import UserProfile from "./components/UserProfile.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [recentPayouts, setRecentPayouts] = useState([]);

  const handleLogin = (userData) => {
    setUser({ ...userData, walletBalance: 0 });
  };

  const handleLogout = () => {
    setUser(null);
    setRecentPayouts([]);
  };

  const addPayout = (amount, reason) => {
    const newPayout = {
      amount,
      reason,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setRecentPayouts(prev => [newPayout, ...prev]);
    setUser(prev => prev ? { ...prev, walletBalance: prev.walletBalance + amount } : null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <Index 
                  user={user}
                  onLoginClick={() => setShowLogin(true)}
                  onLogout={handleLogout}
                  onPayout={addPayout}
                  recentPayouts={recentPayouts}
                />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        <LoginModal 
          isOpen={showLogin} 
          onClose={() => setShowLogin(false)} 
          onLogin={handleLogin}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
