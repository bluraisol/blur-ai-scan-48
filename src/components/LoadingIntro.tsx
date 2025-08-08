import { useState, useEffect } from "react";
import { Brain, Shield, Zap } from "lucide-react";

// Configuration variable for loading duration
const LOADING_DURATION_MS = 3000; // Reduced for better UX

interface LoadingIntroProps {
  onComplete: () => void;
}

const LoadingIntro = ({ onComplete }: LoadingIntroProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing AI Systems");

  const loadingSequence = [
    "Initializing AI Systems",
    "Connecting to Solana Network", 
    "Loading Neural Networks",
    "Calibrating Prediction Models",
    "Systems Ready"
  ];

  useEffect(() => {
    const duration = LOADING_DURATION_MS;
    const interval = 50;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      
      // Update text based on progress
      const textIndex = Math.floor((newProgress / 100) * (loadingSequence.length - 1));
      if (textIndex < loadingSequence.length) {
        setCurrentText(loadingSequence[textIndex]);
      }
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setTimeout(onComplete, 500);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      {/* Central loading interface */}
      <div className="text-center space-y-12 max-w-md mx-6">
        {/* Logo section */}
        <div className="space-y-6">
          <div className="relative">
            <img 
              src="/favicon.ico" 
              alt="Blur Logo" 
              className="w-20 h-20 mx-auto rounded-2xl object-cover border-2 border-primary/30 
                       animate-glow transition-all duration-500" 
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-6xl font-black tracking-wider text-electric">
              BLUR
            </h1>
            <p className="text-lg font-light text-muted-foreground tracking-wide">
              AI Memecoin Scanner
            </p>
          </div>
        </div>

        {/* Loading status */}
        <div className="space-y-6">
          <div className="h-12 flex items-center justify-center">
            <p className="text-base text-foreground font-medium">
              {currentText}
            </p>
          </div>
          
          {/* Progress bar */}
          <div className="space-y-3">
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary-bright 
                           transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Loading</span>
              <span className="text-primary font-mono font-bold">{Math.floor(progress)}%</span>
            </div>
          </div>
        </div>

        {/* System indicators */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Brain, label: "AI Core", status: progress > 30 ? "Ready" : "Loading" },
            { icon: Zap, label: "Network", status: progress > 60 ? "Connected" : "Connecting" },
            { icon: Shield, label: "Security", status: progress > 90 ? "Active" : "Standby" }
          ].map((item, i) => {
            const Icon = item.icon;
            const isActive = item.status === "Ready" || item.status === "Connected" || item.status === "Active";
            
            return (
              <div key={item.label} className="text-center space-y-2">
                <div className="mx-auto w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Icon className={`w-5 h-5 transition-colors duration-500 ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-foreground">{item.label}</div>
                  <div className={`text-xs transition-colors duration-500 ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {item.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Blur AI Systems
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingIntro;