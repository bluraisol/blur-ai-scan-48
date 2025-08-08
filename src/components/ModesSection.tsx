import { Lightbulb, Brain, TrendingUp, Target } from "lucide-react";

const ModesSection = () => {
  const modes = [
    {
      icon: Lightbulb,
      name: "SIMPLE MODE",
      target: "New Traders",
      returns: "100-200%",
      description: "A simple mode, designed for those new to trading. It will offer a simplified experience with consistent returns in the range of 100–200%.",
      features: [
        "Well suited for those who don't have much time to analyze the market",
        "Less risks — less calls",
        "Average gain 2.1x",
        "Up to 20 calls per day",
        "Basic analytics dashboard",
        "Average hit rate 67.8%",
        "Infinity evolution of AI",
        "Access to best runners",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Brain,
      name: "SMART MODE",
      target: "Seasoned Traders",
      returns: "Limitless",
      description: "An smart mode, built for seasoned traders willing to dive deep into the lore of the coin. Here, the potential profits are limitless, depending on how popular and hyped the coin becomes.",
      features: [
        "For locked in traders who want to maximize their profits",
        "Higher risks — higher rewards",
        "Up to 1000x daily returns",
        "50-100 calls per day",
        "Average gain 5x",
        "Advanced analytics dashboard",
        "Average hit rate 55%",
        "Early access to best runners",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="modes" className="relative py-32 px-6 overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary animate-pulse">●</span> TRADING MODES
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-electric font-blur">
              CHOOSE YOUR APPROACH
            </h2>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Select the trading mode that matches your experience level and 
            <span className="text-primary font-semibold text-glow"> risk tolerance</span>
          </p>
        </div>

        {/* Modes comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.name}
                className="card-premium p-8 space-y-8 hover-electric group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6 h-full flex flex-col">
                  {/* Mode header */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${mode.gradient} 
                                    rounded-xl flex items-center justify-center border border-primary/30`}>
                        <Icon className={`w-10 h-10 ${mode.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 border border-primary/20 rounded-xl animate-pulse" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold font-mono text-glow tracking-wide">
                        {mode.name}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{mode.target}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-success" />
                          <span className="text-sm font-mono text-success font-bold">{mode.returns}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {mode.description}
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-1 gap-3 flex-grow">
                    {mode.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a 
                      href="https://t.me/blurcryptobot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 border border-primary/50 rounded-lg 
                               text-primary hover:bg-primary/10 font-mono tracking-wide 
                               text-sm font-bold transition-all duration-300 
                               transform hover:scale-105 block text-center"
                    >
                      SELECT {mode.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModesSection;