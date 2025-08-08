import { Link } from "react-router-dom";
import { ArrowLeft, Coins, Lock, Calendar, TrendingUp } from "lucide-react";
import NeonNetworkBackground from "@/components/NeonNetworkBackground";

const Tokenomics = () => {
  const allocationData = [
    { name: "Public", tokens: "400M", percentage: 40, cliff: "-", vesting: "-", color: "bg-primary" },
    { name: "DEX Liquidity", tokens: "100M", percentage: 10, cliff: "Locked (24 months)", vesting: "Locked (24 months)", color: "bg-primary/90" },
    { name: "Ecosystem Incentives", tokens: "105M", percentage: 10.5, cliff: "-", vesting: "12", color: "bg-primary/80" },
    { name: "Marketing", tokens: "95M", percentage: 9.5, cliff: "-", vesting: "12", color: "bg-primary/70" },
    { name: "Research & Development", tokens: "75M", percentage: 7.5, cliff: "1", vesting: "12", color: "bg-primary/60" },
    { name: "Team", tokens: "60M", percentage: 6, cliff: "6", vesting: "36", color: "bg-primary/50" },
    { name: "CEX Liquidity", tokens: "60M", percentage: 6, cliff: "-", vesting: "-", color: "bg-primary/40" },
    { name: "KOLs", tokens: "55M", percentage: 5.5, cliff: "2", vesting: "6", color: "bg-primary/30" },
    { name: "Advisory", tokens: "50M", percentage: 5, cliff: "2", vesting: "12", color: "bg-primary/20" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NeonNetworkBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            to="/main"
            className="inline-flex items-center space-x-2 px-4 py-2 border border-primary/50 
                     rounded-lg text-primary hover:bg-primary/10 font-mono tracking-wide 
                     text-sm font-bold transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>BACK</span>
          </Link>
        </div>

        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Coins className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-sm font-mono tracking-wider text-primary font-bold">
                TOKEN DISTRIBUTION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-electric">
              TOKENOMICS
            </h1>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Transparent and strategic token allocation designed for 
            <span className="text-primary font-semibold text-glow"> long-term ecosystem growth</span>
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Visual representation */}
          <div className="space-y-8">
            <div className="card-premium p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-electric mb-8 text-center">
                TOKEN ALLOCATION
              </h3>
              
              {/* Custom visual representation */}
              <div className="space-y-4">
                {allocationData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-primary font-mono">{item.percentage}%</span>
                    </div>
                    <div className="relative h-3 bg-background-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000 animate-glow`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.tokens}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Allocation table */}
          <div className="space-y-8">
            <div className="card-premium p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-electric mb-8 flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <span>VESTING SCHEDULE</span>
              </h3>
              
              <div className="space-y-1">
                {/* Table header */}
                <div className="grid grid-cols-4 gap-4 p-4 bg-background-secondary rounded-lg border border-primary/20">
                  <div className="text-xs font-mono text-primary font-bold">WHO</div>
                  <div className="text-xs font-mono text-primary font-bold">TOKENS</div>
                  <div className="text-xs font-mono text-primary font-bold">CLIFF</div>
                  <div className="text-xs font-mono text-primary font-bold">VESTING</div>
                </div>
                
                {/* Table rows */}
                <div className="space-y-2">
                  {allocationData.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 gap-4 p-4 border border-border/50 rounded-lg 
                               hover:border-primary/30 hover:bg-background-secondary/50 
                               transition-all duration-300"
                    >
                      <div className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </div>
                      <div className="text-sm font-mono text-primary">
                        {item.tokens} ({item.percentage}%)
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {item.cliff === "Locked (24 months)" ? (
                          <span className="text-warning">Locked (24m)</span>
                        ) : item.cliff === "-" ? (
                          <span>-</span>
                        ) : (
                          <span>{item.cliff}m</span>
                        )}
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {item.vesting === "Locked (24 months)" ? (
                          <span className="text-warning">Locked (24m)</span>
                        ) : item.vesting === "-" ? (
                          <span>-</span>
                        ) : (
                          <span>{item.vesting}m</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;