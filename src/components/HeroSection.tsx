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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{background: 'transparent'}}>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 px-6 max-w-7xl mx-auto" style={{background: 'transparent'}}>
        {/* Hero text with enhanced styling */}
        <div className="space-y-12">
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


        {/* Enhanced CTA Section */}
        <div className="space-y-12">
          {/* Main CTA Button */}
          <div className="flex justify-center">
            <a 
              href="https://t.me/blurcryptobot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-gradient-to-r from-primary via-primary-bright to-primary 
                       text-background font-mono tracking-wide text-xl font-bold
                       rounded-2xl hover:shadow-2xl transform hover:scale-105 
                       transition-all duration-500 cyber-border overflow-hidden
                       before:absolute before:inset-0 before:bg-gradient-to-r 
                       before:from-primary-bright before:to-primary before:opacity-0 
                       before:transition-opacity before:duration-500 hover:before:opacity-100"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Zap className="w-6 h-6" />
                <span>EXPLORE BLUR</span>
              </span>
            </a>
          </div>

          {/* Simple stats display */}
          <div className="flex items-center justify-center space-x-12 text-sm font-mono mt-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">SCANNING:</span>
              <span className="text-primary font-bold">{scanningCount.toLocaleString()} COINS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-muted-foreground">AI MODELS:</span>
              <span className="text-success font-bold">{aiModelsActive}/9 ACTIVE</span>
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