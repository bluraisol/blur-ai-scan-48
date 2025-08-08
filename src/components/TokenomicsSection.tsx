import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Coins, Lock, Calendar, TrendingUp } from "lucide-react";

const TokenomicsSection = () => {
  const allocationData = [
    { name: "Public", tokens: "40M", percentage: 40, cliff: "-", vesting: "-", color: "#00ffff" },
    { name: "DEX Liquidity", tokens: "10M", percentage: 10, cliff: "Locked (24 months)", vesting: "Locked (24 months)", color: "#00e6e6" },
    { name: "Ecosystem Incentives", tokens: "10.5M", percentage: 10.5, cliff: "-", vesting: "12", color: "#00cccc" },
    { name: "Marketing", tokens: "9.5M", percentage: 9.5, cliff: "-", vesting: "12", color: "#00b3b3" },
    { name: "Research & Development", tokens: "7.5M", percentage: 7.5, cliff: "1", vesting: "12", color: "#009999" },
    { name: "Team", tokens: "6M", percentage: 6, cliff: "6", vesting: "36", color: "#008080" },
    { name: "CEX Liquidity", tokens: "6M", percentage: 6, cliff: "-", vesting: "-", color: "#006666" },
    { name: "KOLs", tokens: "5.5M", percentage: 5.5, cliff: "2", vesting: "6", color: "#004d4d" },
    { name: "Advisory", tokens: "5M", percentage: 5, cliff: "2", vesting: "12", color: "#003333" }
  ];

  const chartData = allocationData.map(item => ({
    name: item.name,
    value: item.percentage,
    tokens: item.tokens,
    color: item.color
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background-secondary border border-primary/30 rounded-lg p-4 shadow-lg">
          <p className="text-primary font-mono font-bold">{data.name}</p>
          <p className="text-muted-foreground">{data.tokens} ({data.value}%)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="tokenomics" className="relative py-32 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-animated-grid opacity-10" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Coins className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-sm font-mono tracking-wider text-primary font-bold">
                TOKEN DISTRIBUTION
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-electric">
              TOKENOMICS
            </h2>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Transparent and strategic token allocation designed for 
            <span className="text-primary font-semibold text-glow"> long-term ecosystem growth</span>
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Pie Chart */}
          <div className="space-y-8">
            <div className="card-premium p-8 rounded-2xl">
              <h3 className="text-2xl font-black text-electric mb-8 text-center">
                TOKEN ALLOCATION
              </h3>
              
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="hsl(var(--border))"
                      strokeWidth={2}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-premium p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-black text-electric">100M</div>
                <div className="text-sm text-muted-foreground font-mono">TOTAL SUPPLY</div>
              </div>
              <div className="card-premium p-6 text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-black text-electric">50%</div>
                <div className="text-sm text-muted-foreground font-mono">LOCKED/VESTED</div>
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
                          <span className="text-warning">Locked</span>
                        ) : item.cliff === "-" ? (
                          <span>-</span>
                        ) : (
                          <span>{item.cliff}m</span>
                        )}
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {item.vesting === "Locked (24 months)" ? (
                          <span className="text-warning">24m</span>
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
    </section>
  );
};

export default TokenomicsSection;