import { useState, useEffect } from "react";
import { TrendingUp, Target, DollarSign, Activity, Zap, Shield } from "lucide-react";

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    coinsDetected: 0,
    totalReturn: 0,
    averageReturn: 0,
    hitRate: 0
  });

  const [realTimeData, setRealTimeData] = useState({
    currentScanning: 11928,
    activeConnections: 1337,
    processingSpeed: 12847
  });

  const finalStats = {
    coinsDetected: 11928,
    totalReturn: 34591,
    averageReturn: 2.9,
    hitRate: 64.3
  };

  useEffect(() => {
    const duration = 2500;
    const interval = 60;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);
      
      setAnimatedStats({
        coinsDetected: Math.floor(finalStats.coinsDetected * progress),
        totalReturn: parseFloat((finalStats.totalReturn * progress).toFixed(1)),
        averageReturn: parseFloat((finalStats.averageReturn * progress).toFixed(1)),
        hitRate: parseFloat((finalStats.hitRate * progress).toFixed(1))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, interval);

    // Real-time data updates
    const realTimeTimer = setInterval(() => {
      setRealTimeData(prev => ({
        currentScanning: prev.currentScanning + Math.floor(Math.random() * 5),
        activeConnections: 1337 + Math.floor(Math.random() * 100),
        processingSpeed: 12847 + Math.floor(Math.random() * 1000)
      }));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(realTimeTimer);
    };
  }, []);

  const mainStats = [
    {
      icon: Target,
      label: "COINS DETECTED",
      value: animatedStats.coinsDetected.toLocaleString(),
      description: "Total memecoins analyzed by neural networks",
      trend: "+5.2%",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      label: "TOTAL RETURN",
      value: `${animatedStats.totalReturn.toLocaleString()}x`,
      description: "Cumulative returns from identified opportunities",
      trend: "+12.8%",
    },
    {
      icon: DollarSign,
      label: "AVERAGE RETURN",
      value: `${animatedStats.averageReturn}x`,
      description: "Mean return per successful prediction",
      trend: "+8.1%",
      color: "text-primary"
    },
    {
      icon: Activity,
      label: "AVERAGE HIT RATE",
      value: `${animatedStats.hitRate}%`,
      description: "AI prediction accuracy across all models",
      trend: "+2.3%",
    }
  ];

  return (
    <section id="stats" className="relative min-h-screen flex items-center px-6 bg-circuit-board overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neural-network opacity-60" />
        <div className="absolute inset-0 quantum-particles" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-0 bg-holographic opacity-25" />
        <div className="absolute inset-0 cyber-scan-line" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full py-20">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary animate-pulse">●</span> LIVE ANALYTICS DASHBOARD
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-electric">
              PERFORMANCE METRICS
            </h2>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Real-time performance data showcasing BLUR's effectiveness in 
            <span className="text-primary font-semibold text-glow"> memecoin detection and analysis </span> 
            across the Solana ecosystem.
          </p>
        </div>

        {/* Main stats grid with enhanced design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="card-premium p-8 text-center space-y-6 hover-electric group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 
                                  rounded-xl flex items-center justify-center border border-primary/30 mx-auto">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 border border-primary/20 rounded-xl animate-pulse mx-auto" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`text-4xl md:text-5xl font-black font-mono text-electric ${stat.color}`}>
                      {stat.value}
                    </div>
                    <h3 className="text-sm font-mono tracking-wider text-primary font-bold">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm font-mono text-success font-bold">{stat.trend}</span>
                    <span className="text-xs text-muted-foreground">24h</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      

        {/* Real-time performance metrics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="glass-effect p-6 text-center space-y-4 hover-electric group">
                <Icon className="w-6 h-6 mx-auto text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-1">
                  <div className="text-2xl font-black font-mono text-electric">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default StatsSection;