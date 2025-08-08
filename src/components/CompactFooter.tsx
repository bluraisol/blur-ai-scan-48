import { FileText, Twitter, Github, Send, Mail, Globe } from "lucide-react";

const CompactFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/blurcrypto", label: "Twitter" },
    { icon: Github, href: "https://github.com/blurcrypto", label: "GitHub" },
    { icon: Send, href: "https://t.me/blurcrypto", label: "Telegram" },
    { icon: Mail, href: "mailto:contact@blur.ai", label: "Email" }
  ];

  const quickLinks = [
    { name: "Documentation", href: "#" },
    { name: "API Access", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="relative bg-background-secondary border-t border-border overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-0 bg-animated-grid opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/favicon.ico" 
                alt="Blur Logo" 
                className="w-10 h-10 rounded-xl object-cover border border-primary/50 
                         group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="space-y-1">
                <span className="text-2xl font-black tracking-wider text-electric">Blur</span>
                <div className="text-sm font-mono text-muted-foreground tracking-widest">
                  AI MEMECOIN SCANNER
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Revolutionary AI-powered memecoin scanner for the Solana ecosystem. 
              <span className="text-primary font-semibold"> Nine neural networks</span> working 
              24/7 to identify the next big opportunity.
            </p>
            
            {/* Whitepaper button */}
            <a 
              href="https://whitepaper.blur.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-primary/50 
                       rounded-lg text-primary hover:bg-primary/10 font-mono tracking-wide 
                       text-sm font-bold transition-all duration-300 group"
            >
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>WHITEPAPER</span>
            </a>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono tracking-wider text-primary font-bold flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>RESOURCES</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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

          {/* Social links */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono tracking-wider text-primary font-bold flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>COMMUNITY</span>
            </h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary 
                             transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 Blur AI Systems. All rights reserved.</span>
            </div>
            
            {/* System status indicator */}
            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary">NETWORK ONLINE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-success">AI MODELS: 9/9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
    </footer>
  );
};

export default CompactFooter;