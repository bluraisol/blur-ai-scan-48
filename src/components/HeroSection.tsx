import { useState, useEffect } from "react";
import { Brain, Zap, Target, Shield, TrendingUp, Activity } from "lucide-react";

const HeroSection = () => {
  const [scanningCount, setScanningCount] = useState(20000);
  const [aiModelsActive, setAiModelsActive] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanningCount(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, label: "AI MODELS", value: "9", description: "Neural Networks" },
    { icon: Zap, label: "SCANNING", value: "24/7", description: "Real-time" },
    { icon: Target, label: "ACCURACY", value: "64.3%", description: "Hit Rate" },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Advanced background effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Dynamic geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/10 animate-float-complex"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i * 15) % 70}%`,
              animationDelay: `${i * 0.6}s`,
              clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                       i % 3 === 1 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' :
                       'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 px-6 max-w-7xl mx-auto pt-20">
        {/* Hero text with enhanced styling */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary">●</span> NEXT-GEN AI TECHNOLOGY
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="block text-electric">BLUR</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl font-light text-muted-foreground mt-1">
                MEMECOIN SCANNER
              </span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Revolutionary <span className="text-primary font-semibold text-glow">AI-powered scanner</span> for 
              the Solana ecosystem, featuring <span className="text-primary font-semibold text-glow">9 AI </span> 
              trained on <span className="text-primary font-semibold text-glow">millions</span> of memecoin patterns
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-sm font-mono">
              <div className="flex items-center justify-center space-x-2 glass-effect py-3 px-4 rounded-lg">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">REAL-TIME ANALYSIS</span>
              </div>
              <div className="flex items-center justify-center space-x-2 glass-effect py-3 px-4 rounded-lg">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">EVOLVING AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced stats display */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className="card-premium p-6 text-center space-y-4 hover-electric group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Icon className="w-8 h-8 mx-auto text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 w-8 h-8 mx-auto border border-primary/30 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-black text-electric">
                    {feature.value}
                  </div>
                  <div className="text-xs font-mono text-primary tracking-wider">
                    {feature.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section with advanced design */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://t.me/blurcryptobot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-bright 
                       text-background font-mono tracking-wide text-base font-bold
                       rounded-lg hover:shadow-xl transform hover:scale-105 
                       transition-all duration-300 cyber-border overflow-hidden block"
            >
              <span className="relative z-10">EXPLORE BLUR</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-bright to-primary 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Live data stream */}
          <div className="flex justify-center">
            <div className="glass-effect px-6 py-3 rounded-full border border-primary/30">
              <div className="flex items-center space-x-4 text-xs font-mono">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">SCANNING:</span>
                  <span className="text-primary font-bold">{scanningCount.toLocaleString()}</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-muted-foreground">AI:</span>
                  <span className="text-success font-bold">{aiModelsActive}/9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;