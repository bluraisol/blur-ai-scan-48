import { Cpu, Database, Zap, Shield, Target, Activity, Brain, Network } from "lucide-react";

const AboutSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "NEURAL NETWORK ENSEMBLE",
      description: "Nine specialized AI models working in parallel, each trained on specific memecoin patterns and market behaviors for comprehensive analysis.",
      features: ["Pattern Recognition", "Behavioral Analysis", "Risk Assessment"]
    },
    {
      icon: Activity,
      title: "REAL-TIME PROCESSING",
      description: "Continuous monitoring of the Solana blockchain with sub-second latency, processing thousands of transactions per minute.",
      features: ["Live Data Feed", "Instant Analysis", "Real-time Alerts"]
    },
    {
      icon: Target,
      title: "PREDICTIVE MODELING",
      description: "Advanced algorithms that analyze historical data, social sentiment, and market trends to predict memecoin performance.",
      features: ["Trend Analysis", "Price Prediction", "Risk Scoring"]
    },
    {
      icon: Shield,
      title: "SECURITY & RELIABILITY",
      description: "Enterprise-grade security protocols with 99.9% uptime guarantee, ensuring your scanning operations never miss opportunities.",
      features: ["Encrypted Data", "Secure API", "24/7 Monitoring"]
    }
  ];

  const techStack = [
    { name: "SOLANA", category: "BLOCKCHAIN", status: "INTEGRATED" },
    { name: "TENSORFLOW", category: "AI/ML", status: "OPTIMIZED" },
    { name: "RUST", category: "PERFORMANCE", status: "NATIVE" },
    { name: "WEBSOCKETS", category: "REAL-TIME", status: "STREAMING" }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center px-6 bg-digital-matrix overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-quantum-field opacity-50" />
        <div className="absolute inset-0 quantum-particles animate-neural-pulse" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-0 bg-neural-network opacity-30" />
        <div className="absolute inset-0 cyber-scan-line" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full py-20">
        {/* Section header with enhanced design */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary">●</span> ADVANCED TECHNOLOGY
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-electric">
              AI ARCHITECTURE
            </h2>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Blur leverages cutting-edge artificial intelligence and blockchain technology to deliver 
            <span className="text-primary font-semibold text-glow"> unparalleled memecoin analysis</span> on the Solana network.
          </p>
        </div>

        {/* AI Models Showcase */}
        <div className="card-premium p-8 mb-20 space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-electric">NEURAL NETWORK ENSEMBLE</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Nine specialized AI models, each optimized for different aspects of memecoin analysis.
              All Blur AI systems operate in parallel, allowing the entire evaluation process to be completed in under one second
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "BLUR TWITTER (X) SCANNING AI", accuracy: "100%", specialty: "Processes up to 100,000 posts per second to detect coin contract addresses shared by top influencers. Also scans high-performing tweets, analyzing engagement metrics and author verification credibility" },
              { name: "BLUR DEX SCANNING AI", accuracy: "91.8%", specialty: "Analyzes up to 30,000 coins per second, identifies coin metrics: liquidity, market capitalization, trading volume, percentage of holdings by the top 10 holders" },
              { name: "BLUR SUCCESS RATIO AI", accuracy: "65.1%", specialty: "Calculates the success ratio of individual coins by evaluating traffic trends and overall popularity" },
              { name: "BLUR SOLSCAN AI", accuracy: "95.7%", specialty: "Process up to 30,000 coins per second, performs in-depth analysis of all smart contracts associated with tokens minted on the Wrapped Solana blockchain" },
              { name: "BLUR VALIDATION AI", accuracy: "87.2%", specialty: "Serves as the final verification layer before a coin is sent to the Blur Bot on Telegram. It compiles data from all Blur AIs and outputs coins that meet all criteria" },
              { name: "BLUR TOKEN DISTRIBUTION AI", accuracy: "98.4%", specialty: "Identifies Insiders, KOL/VC, Smart Holders, Whales, Phishing wallets in coins" },
              { name: "BLUR SMART HOLDER AI", accuracy: "100%", specialty: "Identifies Smart Holders in coins" },
              { name: "BLUR PHISHING AI", accuracy: "64.4%", specialty: "Identifies wallets that have been associated with fraudulent coins or rugpulls" },
              { name: "BLUR RUG CHECK AI", accuracy: "70.4%", specialty: "Rates Rugpull probability" }
            ].map((model, i) => (
              <div key={model.name} className="glass-effect p-4 rounded-lg border border-primary/20 hover-electric group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span className="text-xs font-mono text-primary font-bold">{model.accuracy}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono font-bold text-glow">{model.name}</h4>
                    <p className="text-xs text-muted-foreground">{model.specialty}</p>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary-bright animate-glow-intense"
                      style={{ width: model.accuracy }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology stack with enhanced design */}
        <div className="space-y-8 mb-20">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-electric">TECHNOLOGY STACK</h3>
            <p className="text-muted-foreground">Powered by cutting-edge technologies for maximum performance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className="card-premium p-4 text-center space-y-3 hover-electric group"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="space-y-2">
                  <div className="text-lg font-bold font-mono text-electric group-hover:scale-110 transition-transform duration-1000">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{tech.category}</div>
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-primary font-bold">{tech.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;