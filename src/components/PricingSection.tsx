import { Check, Pencil, Computer, Crown } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      icon: Pencil,
      name: "1 MONTH",
      price: "1.6",
      currency: "SOL",
      description: "A perfect entry point to see how Blur tracks signals, social sentiment, and early momentum — all in one place.",
      features: [
        "Real-time memecoin scanning",
        "Telegram alerts",
        "Default support",
        "Community access"
      ],
      popular: false
    },
    {
      icon: Computer,
      name: "3 MONTHS",
      price: "3.5",
      currency: "SOL",
      description: "90 days of powerful tools and real-time insights — designed to keep you ahead in fast-moving markets.",
      features: [
        "All 1-month features",
        "Priority support",
        "Referral rewards",
        "Airdrop eligibility",
        "Advanced metrics and analytics",
      ],
      popular: true
    },
    {
      icon: Crown,
      name: "6 MONTHS",
      price: "5",
      currency: "SOL",
      description: "Half a year of uninterrupted access to our evolving AI engine, precision metrics, and smart token evaluation layers.",
      features: [
        "All 3-month features",
        "Blur Zone access",
        "Support from developers team",
        "Increased referral rewards",
        "Early access to new features",
        "Priority airdrop eligibility",
        "Exclusive community events"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden" style={{background: 'transparent'}}>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 border border-primary/50 rounded-full 
                          bg-primary/10 backdrop-blur-sm text-sm font-mono tracking-widest">
              <span className="text-primary animate-pulse">●</span> SUBSCRIPTION PLANS
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-electric font-blur">
              CHOOSE YOUR PLAN
            </h2>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Select the perfect plan to unlock Blur's 
            <span className="text-primary font-semibold text-glow"> AI-powered memecoin scanning</span> capabilities
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative card-premium p-8 space-y-8 hover-electric group w-full ${
                  plan.popular ? 'border-primary/50 bg-primary/5' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-primary text-background text-xs font-mono font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="space-y-6 h-full flex flex-col">
                  {/* Plan header */}
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 
                                    rounded-xl flex items-center justify-center border border-primary/30 mx-auto">
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 border border-primary/20 rounded-xl animate-pulse mx-auto" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-mono text-glow tracking-wide">
                        {plan.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-black text-electric">{plan.price}</span>
                        <span className="text-lg text-primary font-mono">{plan.currency}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {plan.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
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
                      className={`my-5 w-full py-4 px-6 space-y-3 rounded-lg font-mono tracking-wide text-sm font-bold
                                transition-all duration-300 transform hover:scale-105 block text-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary to-primary-bright text-background hover:shadow-xl'
                          : 'border border-primary/50 text-primary hover:bg-primary/10'
                      }`}
                    >
                      GET ACCESS
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground">
            All plans include 24/7 support and access to our community
          </p>
          <div className="flex items-center justify-center space-x-6 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">NO HIDDEN FEES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;