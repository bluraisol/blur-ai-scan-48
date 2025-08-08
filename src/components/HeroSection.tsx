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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30" 
             style={{ background: 'var(--gradient-mesh)' }} />
        
        {/* Grid pattern with animation */}
        <div className="absolute inset-0 bg-animated-grid opacity-15" />
        
        {/* Radial glow */}
        <div className="absolute inset-0" 
             style={{ background: 'var(--gradient-hero)' }} />
        
        {/* Dynamic geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-primary/20 animate-float-complex cyber-border"
              style={{
                width: `${40 + i * 20}px`,
                height: `${40 + i * 20}px`,
                left: `${5 + (i * 7) % 90}%`,
                top: `${10 + (i * 11) % 80}%`,
                animationDelay: `${i * 0.4}s`,
                clipPath: i % 4 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                         i % 4 === 1 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' :
                         i % 4 === 2 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' :
                         'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-16 px-6 max-w-7xl mx-auto">
        {/* Hero text with enhanced styling */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary">●</span> NEXT-GEN AI TECHNOLOGY
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="block text-electric font-blur">BLUR</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl font-light text-muted-foreground mt-2">
                MEMECOIN SCANNER
              </span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Revolutionary <span className="text-primary font-semibold text-glow">AI-powered scanner</span> for 
              the Solana ecosystem, featuring <span className="text-primary font-semibold text-glow">9 AI </span> 
              trained on <span className="text-primary font-semibold text-glow">millions</span> of memecoin patterns
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm font-mono">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                <div className="space-y-1">
                  <div className="text-3xl font-black text-electric">
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
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://t.me/blurcryptobot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-primary-bright 
                       text-background font-mono tracking-wide text-lg font-bold
                       rounded-lg hover:shadow-2xl transform hover:scale-105 
                       transition-all duration-300 cyber-border overflow-hidden block"
            >
              <span className="relative z-10">EXPLORE BLUR</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-bright to-primary 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            {/* <button className="group px-10 py-5 border-2 border-primary text-primary 
                             font-mono tracking-wide text-lg font-bold rounded-lg
                             hover-electric transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">VIEW ANALYTICS</span>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
            </button> */}
          </div>

          {/* Live data stream */}
          <div className="flex justify-center">
            <div className="glass-effect px-8 py-4 rounded-full border border-primary/30">
              <div className="flex items-center space-x-6 text-sm font-mono">
                <div className="flex items-center space-x-2">
                  <div className="w-4h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">SCANNING:</span>
                  <span className="text-primary font-bold">{scanningCount.toLocaleString()}</span>
                  <span className="text-muted-foreground">COINS</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-muted-foreground">AI MODELS:</span>
                  <span className="text-success font-bold">{aiModelsActive}/9</span>
                  <span className="text-muted-foreground">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="text-xs font-mono text-muted-foreground tracking-widest">
              EXPLORE TECHNOLOGY
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
            <div className="w-2 h-2 border border-primary rounded-full animate-pulse" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;