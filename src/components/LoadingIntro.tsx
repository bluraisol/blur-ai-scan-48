import { useState, useEffect } from "react";
import { Brain, Zap, Shield, Activity, Cpu, Database, Network, Eye } from "lucide-react";

// Configuration variable for loading duration
const LOADING_DURATION_MS = 2500; // Change this value to adjust total loading time

interface LoadingIntroProps {
  onComplete: () => void;
}

const LoadingIntro = ({ onComplete }: LoadingIntroProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING NEURAL NETWORKS");
  const [activeAI, setActiveAI] = useState(0);

  const loadingSequence = [
    "INITIALIZING NEURAL NETWORKS",
    "CONNECTING TO SOLANA BLOCKCHAIN", 
    "LOADING AI PATTERN RECOGNITION",
    "CALIBRATING PREDICTION SYSTEMS",
    "SYNCING REAL-TIME DATA FEEDS",
    "ENABLING AI PROTOCOLS",
    "BLUR SYSTEMS FULLY OPERATIONAL"
  ];

  const aiModels = [
    { name: "TWITTER AI", icon: Eye, status: "LOADING" },
    { name: "DEX SCANNING AI", icon: Database, status: "LOADING" },
    { name: "SUCCESS RATIO AI", icon: Brain, status: "LOADING" },
    { name: "SOLSCAN AI", icon: Network, status: "LOADING" },
    { name: "VALIDATION AI", icon: Shield, status: "LOADING" },
    { name: "TOKEN DISTRIBUTION AI", icon: Cpu, status: "LOADING" },
    { name: "SMART HOLDER AI", icon: Activity, status: "LOADING" },
    { name: "PHISHING AI", icon: Shield, status: "LOADING" },
    { name: "RUG CHECK AI", icon: Zap, status: "LOADING" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const incrementPerStep = 100 / (LOADING_DURATION_MS / 50);
        const newProgress = prev + incrementPerStep;
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingSequence.length);
        if (textIndex < loadingSequence.length) {
          setCurrentText(loadingSequence[textIndex]);
        }

        // Update active AI models
        const aiIndex = Math.floor((newProgress / 100) * aiModels.length);
        setActiveAI(aiIndex);
        
        if (newProgress >= 100) {
          setTimeout(onComplete, 800);
          clearInterval(interval);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Main loading interface */}
      <div className="relative z-10 text-center space-y-16 max-w-6xl mx-6 w-full">
        
        {/* Enhanced Logo Section */}
        <div className="space-y-8">
          <div className="relative">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/favicon.ico" 
                alt="Blur Logo" 
                className="w-16 h-16 rounded-xl object-cover border-2 border-primary/50 
                         animate-glow-intense" 
              />
              <div className="space-y-1">
                <h1 className="text-6xl md:text-8xl font-black tracking-wider text-electric">
                  BLUR
                </h1>
                <p className="text-lg md:text-xl font-mono text-primary tracking-widest">
                  AI MEMECOIN SCANNER
                </p>
              </div>
            </div>
            
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="h-1 w-64 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow-intense" />
            </div>
          </div>
        </div>

        {/* AI Models Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-electric">
            NEURAL NETWORK ENSEMBLE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {aiModels.map((model, index) => {
              const Icon = model.icon;
              const isActive = index <= activeAI;
              const isCompleted = index < activeAI;
              
              return (
                <div
                  key={model.name}
                  className={`card-premium p-4 rounded-lg border transition-all duration-500 ${
                    isCompleted 
                      ? 'border-primary/50 bg-primary/5' 
                      : isActive 
                        ? 'border-primary/30 bg-primary/5 animate-glow' 
                        : 'border-border/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-primary/20' 
                        : isActive 
                          ? 'bg-primary/10 animate-pulse' 
                          : 'bg-muted/20'
                    }`}>
                      <Icon className={`w-5 h-5 transition-all duration-500 ${
                        isCompleted 
                          ? 'text-primary' 
                          : isActive 
                            ? 'text-primary animate-pulse' 
                            : 'text-muted-foreground'
                      }`} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="text-sm font-mono font-bold text-foreground">
                        {model.name}
                      </div>
                      <div className={`text-xs font-mono transition-all duration-500 ${
                        isCompleted 
                          ? 'text-primary' 
                          : isActive 
                            ? 'text-primary animate-pulse' 
                            : 'text-muted-foreground'
                      }`}>
                        {isCompleted ? 'READY' : isActive ? 'LOADING...' : 'STANDBY'}
                      </div>
                    </div>
                    
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]' 
                        : isActive 
                          ? 'bg-primary/50 animate-pulse' 
                          : 'bg-muted'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Loading Status */}
        <div className="space-y-6">
          <div className="card-premium p-6 rounded-lg max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <p className="text-lg font-mono text-glow tracking-wider">
                  {currentText}
                </p>
              </div>
              
              {/* Enhanced progress bar */}
              <div className="space-y-3">
                <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary-bright to-primary 
                             transition-all duration-300 ease-out animate-glow-intense rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                  {/* Scanning effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="h-full w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                   animate-data-stream" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-muted-foreground">PROGRESS</span>
                  <span className="text-primary font-bold">{Math.floor(progress)}%</span>
                  <span className="text-muted-foreground">COMPLETE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "NETWORK", value: "SOLANA", status: progress > 20 ? "CONNECTED" : "CONNECTING" },
            { label: "LATENCY", value: "<50ms", status: progress > 40 ? "OPTIMAL" : "MEASURING" },
            { label: "ACCURACY", value: "64.3%", status: progress > 60 ? "CALIBRATED" : "CALIBRATING" },
            { label: "MODELS", value: `${Math.min(9, Math.floor((progress / 100) * 9))}/9`, status: progress > 80 ? "ACTIVE" : "LOADING" }
          ].map((metric, i) => (
            <div 
              key={metric.label} 
              className="glass-effect p-4 rounded-lg border border-primary/20 hover-electric"
            >
              <div className="space-y-2 text-center">
                <div className="text-xl font-black font-mono text-electric">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-primary font-bold">
                  {metric.label}
                </div>
                <div className={`text-xs font-mono ${
                  metric.status.includes('CONNECTED') || metric.status.includes('OPTIMAL') || 
                  metric.status.includes('CALIBRATED') || metric.status.includes('ACTIVE')
                    ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {metric.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingIntro;