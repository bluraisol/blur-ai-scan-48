import { useState, useEffect } from "react";

// Configuration variable for loading duration
const LOADING_DURATION_MS = 2500; // Change this value to adjust total loading time

interface LoadingIntroProps {
  onComplete: () => void;
}

const LoadingIntro = ({ onComplete }: LoadingIntroProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("INITIALIZING NEURAL NETWORKS");
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  const loadingSequence = [
    "INITIALIZING NEURAL NETWORKS",
    "CONNECTING TO SOLANA BLOCKCHAIN",
    "SCANNING MEMECOIN SIGNATURES", 
    "LOADING AI PATTERN RECOGNITION",
    "CALIBRATING PREDICTION SYSTEMS",
    "SYNCING REAL-TIME DATA FEEDS",
    "ENABLING AI PROTOCOLS",
    "BLUR SYSTEMS FULLY OPERATIONAL"
  ];

  useEffect(() => {
    // Generate matrix characters
    const chars = [];
    for (let i = 0; i < 50; i++) {
      chars.push(String.fromCharCode(0x30A0 + Math.random() * 96));
    }
    setMatrixChars(chars);

    const interval = setInterval(() => {
      setProgress(prev => {
        const incrementPerStep = 100 / (LOADING_DURATION_MS / 50); // Calculate increment based on duration
        const newProgress = prev + incrementPerStep;
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingSequence.length);
        if (textIndex < loadingSequence.length) {
          setCurrentText(loadingSequence[textIndex]);
        }
        
        if (newProgress >= 100) {
          setTimeout(onComplete, 1000);
          clearInterval(interval);
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-animated-grid opacity-20" />
        
        {/* Animated geometric field */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-primary/30 animate-float-complex cyber-border"
              style={{
                width: `${60 + i * 25}px`,
                height: `${60 + i * 25}px`,
                left: `${10 + i * 8}%`,
                top: `${15 + i * 7}%`,
                animationDelay: `${i * 0.3}s`,
                clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                         i % 3 === 1 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' : 
                         'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Central loading interface */}
      <div className="relative z-10 text-center space-y-12 card-premium p-12 rounded-lg max-w-2xl mx-6">
        {/* Logo with enhanced effects */}
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-8xl font-black tracking-wider text-electric">
              BLUR
            </h1>
            {/* Underline effect */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="h-1 w-40 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow-intense" />
            </div>
          </div>
          <p className="text-xl font-light text-muted-foreground tracking-wide">
            NEXT-GEN MEMECOIN SCANNER
          </p>
        </div>

        {/* Dynamic loading text with typewriter effect */}
        <div className="space-y-6">
          <div className="h-16 flex items-center justify-center">
            <p className="text-lg font-mono text-glow tracking-wider">
              <span className="animate-pulse">[!] </span>
              {currentText}
              <span>...</span>
            </p>
          </div>
          
          {/* Enhanced progress system */}
          <div className="space-y-4">
            {/* Main progress bar */}
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary-bright to-primary 
                           transition-all duration-300 ease-out animate-glow-intense"
                style={{ width: `${progress}%` }}
              />
              {/* Data stream effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="h-full w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent 
                               animate-data-stream" />
              </div>
            </div>
            
            {/* Progress details */}
            <div className="flex justify-between items-center text-sm font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-muted-foreground">PROGRESS</span>
              </div>
              <span className="text-primary font-bold">{Math.floor(progress)}%</span>
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">READY</span>
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* System status grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "AI-CORE", status: progress > 12 ? "READY" : "BOOTING", delay: 0 },
            { label: "SERVICES", status: progress > 25 ? "READY" : "DOWNLOADING", delay: 0.5 },
            { label: "VALIDATION", status: progress > 50 ? "ACTIVE" : "STANDBY", delay: 1 },
            { label: "SOLSCAN", status: progress > 90 ? "SYNC" : "CONNECTING", delay: 2 }
          ].map((item, i) => (
            <div 
              key={item.label} 
              className="glass-effect p-4 rounded border hover-electric"
              style={{ animationDelay: `${item.delay}s` }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <div 
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      item.status.includes('ONLINE') || item.status.includes('READY') || item.status.includes('ACTIVE') || item.status.includes('SYNC')
                        ? 'bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]' 
                        : 'bg-muted animate-pulse'
                    }`} 
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs font-mono text-primary font-bold">{item.label}</div>
                  <div className={`text-xs font-mono ${
                    item.status.includes('ONLINE') || item.status.includes('READY') || item.status.includes('ACTIVE') || item.status.includes('SYNC')
                      ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Network indicators */}
        <div className="flex justify-center space-x-8 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">NETWORK:</span>
            <span className="text-primary">BLUR NETWORK</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">LATENCY:</span>
            <span className="text-primary">&lt;50ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIntro;