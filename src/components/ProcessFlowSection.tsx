import { Search, Brain, Bell, Trophy } from "lucide-react";

const ProcessFlowSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Detection",
      description: "Blur AI scans all new pairs (4-5 thousands every hour) and receives information about them directly from the Solana blockchain to speed up all processes as much as possible"
    },
    {
      id: 2,
      icon: Brain,
      title: "Analysis", 
      description: "Blur Validation AI collects all information from DEXs, Solscan, and Twitter, analyzes it using Blur Success Ratio AI, Blur Traffic AI, and Blur Smart Trader AI, checks the security of the coin, and sends the data to Blur Distributor AI"
    },
    {
      id: 3,
      icon: Bell,
      title: "Alert",
      description: "Instant notifications (0.3 seconds) sent to Blur Bot in Telegram with detailed information about the coin"
    },
    {
      id: 4,
      icon: Trophy,
      title: "Results",
      description: "Every Blur movement is recorded behind the scenes, statistics and token success rates are sent to the dashboard and immediately forwarded to the Blur Team for further AI training. Blur evolves with every call"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary animate-pulse">●</span> PROCESS FLOW
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-electric font-blur">
              HOW BLUR WORKS
            </h2>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            How Blur's AI engine identifies and alerts you to profitable 
            <span className="text-primary font-semibold text-glow"> memecoin opportunities</span>
          </p>
        </div>

        {/* Process flow grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="card-premium p-8 text-center space-y-6 hover-electric group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full 
                              flex items-center justify-center border-2 border-background">
                  <span className="text-background font-black text-sm">{step.id}</span>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 
                                  rounded-xl flex items-center justify-center border border-primary/30 mx-auto">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 border border-primary/20 rounded-xl animate-pulse mx-auto" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-mono text-glow tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connection line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent animate-glow-intense" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;