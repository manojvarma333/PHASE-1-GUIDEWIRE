import { useState } from "react";
import { motion } from "framer-motion";
import { User, IndianRupee, Shield, Activity, MapPin, LogOut, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UserProfile = ({ user, onLogout, recentPayouts = [] }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Daily Earnings", value: user.earnings, icon: IndianRupee },
    { label: "Work Schedule", value: user.workHours, icon: Activity },
    { label: "Protection Plan", value: "₹70/week", icon: Shield },
    { label: "Coverage Zone", value: "Koramangala", icon: MapPin },
  ];

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        activeTab === id
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

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
            My <span className="text-gradient-primary">Dashboard</span>
          </h2>
          <p className="text-muted-foreground">Manage your protection and view earnings</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="bg-glass border-border/50 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">{user.name}</h3>
                    <p className="text-muted-foreground">Delivery Partner • Active</p>
                    <Badge variant="secondary" className="mt-1">
                      Protected Since: March 2024
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={onLogout}>
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <TabButton id="overview" label="Overview" icon={User} />
            <TabButton id="wallet" label="Wallet" icon={Wallet} />
            <TabButton id="payouts" label="Recent Payouts" icon={IndianRupee} />
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {activeTab === "overview" && (
              <>
                {/* Wallet Balance Card */}
                <Card className="bg-glass border-primary/20 glow-primary">
                  <CardHeader>
                    <CardTitle className="font-display flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-primary" />
                      Wallet Balance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4">
                      <div className="text-5xl font-display font-bold text-gradient-primary">
                        ₹{user.walletBalance.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Available for withdrawal</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card className="bg-glass border-border/50">
                        <CardContent className="p-4 text-center">
                          <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                          <div className="font-display font-semibold">{stat.value}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "wallet" && (
              <Card className="bg-glass border-border/50">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-primary" />
                    Wallet Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Current Balance</h4>
                      <div className="text-3xl font-display font-bold text-primary">
                        ₹{user.walletBalance.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Last updated: Today</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Monthly Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Premiums Paid</span>
                          <span>₹280</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Payouts Received</span>
                          <span className="text-primary">₹1,350</span>
                        </div>
                        <div className="flex justify-between font-semibold pt-2 border-t">
                          <span>Net Protection</span>
                          <span className="text-primary">₹1,070</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="hero" className="flex-1">
                      <IndianRupee className="w-4 h-4" />
                      Withdraw Funds
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Statement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "payouts" && (
              <Card className="bg-glass border-border/50">
                <CardHeader>
                  <CardTitle className="font-display flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    Recent Payouts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentPayouts.length > 0 ? (
                    <div className="space-y-3">
                      {recentPayouts.map((payout, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <IndianRupee className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{payout.reason}</div>
                              <div className="text-sm text-muted-foreground">{payout.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-display font-semibold text-primary">₹{payout.amount}</div>
                            <div className="text-xs text-muted-foreground">{payout.time}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <IndianRupee className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>No payouts yet</p>
                      <p className="text-sm">Payouts will appear here when disruptions occur</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
