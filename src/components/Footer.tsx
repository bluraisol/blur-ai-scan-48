import { Brain, Github, Twitter, Send, Mail, Globe, Zap, Shield } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "PLATFORM",
      icon: Zap,
      links: [
        { name: "Scanner Bot", href: "#" },
        { name: "AI Models", href: "#" },
        { name: "Analytics Dashboard", href: "#" },
        { name: "API Access", href: "#" }
      ]
    },
    {
      title: "RESOURCES",
      icon: Globe,
      links: [
        { name: "Documentation", href: "#" },
        { name: "Technical Specs", href: "#" },
        { name: "Integration Guide", href: "#" },
        { name: "Support Center", href: "#" }
      ]
    },
    {
      title: "COMMUNITY",
      icon: Send,
      links: [
        { name: "Discord Server", href: "#" },
        { name: "Telegram Group", href: "#" },
        { name: "Twitter Updates", href: "#" },
        { name: "GitHub Repository", href: "#" }
      ]
    },
    {
      title: "DEVELOPERS",
      icon: Brain,
      links: [
        { name: "API Documentation", href: "#" },
        { name: "SDK Downloads", href: "#" },
        { name: "Code Examples", href: "#" },
        { name: "Developer Support", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer id="contact" className="relative bg-background-secondary border-t border-border overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-animated-grid opacity-10" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Enhanced brand section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-bright 
                                rounded-xl rotate-45 animate-glow-intense group-hover:rotate-180 
                                transition-transform duration-500" />
                  <div className="absolute inset-0 w-12 h-12 border border-primary/50 
                                rounded-xl animate-pulse" />
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-black tracking-wider text-electric">Blur</span>
                  <div className="text-sm font-mono text-muted-foreground tracking-widest">
                    AI MEMECOIN SCANNER
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Revolutionary AI-powered memecoin scanner for the Solana ecosystem. 
                <span className="text-primary font-semibold"> Nine neural networks</span> working 
                24/7 to identify the next big opportunity.
              </p>
            </div>
            
            {/* Enhanced system status */}
            <div className="card-premium p-6 space-y-4">
              <div className="flex items-center space-x-2 text-sm font-mono">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold">SYSTEM STATUS</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">NETWORK:</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary">ONLINE</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">AI MODELS:</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-success">9/9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links sections with enhanced design */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-mono tracking-wider text-primary font-bold">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors 
                                   text-sm hover:translate-x-1 transform duration-200 block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="border-t border-border pt-8 space-y-8">
          {/* Performance metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "UPTIME", value: "99.97%", change: "+0.02%" },
              { label: "LATENCY", value: "<50ms", change: "-5ms" },
              { label: "ACCURACY", value: "64.3%", change: "+2.1%" },
              { label: "THROUGHPUT", value: "12.8K/s", change: "+850/s" }
            ].map((metric) => (
              <div key={metric.label} className="text-center space-y-2">
                <div className="text-xl font-black font-mono text-electric">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  {metric.label}
                </div>
                <div className="text-xs text-success font-mono">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 Blur AI Systems. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Security</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 border border-border rounded-lg flex items-center justify-center
                             hover-electric group transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary 
                                   group-hover:scale-110 transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow-intense" />
    </footer>
  );
};

export default Footer;