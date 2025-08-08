import { FileText, Twitter, Github, Send, Mail, Globe } from "lucide-react";

const CompactFooter = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/bluronsol", label: "Twitter" },
    { icon: Send, href: "https://t.me/blurbotai", label: "Telegram" },
    { icon: Mail, href: "mailto:hello@blur.ceo", label: "Email" }
  ];

  const quickLinks = [
    { name: "Documentation", href: "https://whitepaper.blur.ceo" },
    { name: "Support", href: "/connect" },
  ];

  return (
    <footer className="relative border-t border-border overflow-hidden bg-black/20 backdrop-blur-sm">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
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
                <span className="text-2xl font-black tracking-wider text-electric">BLUR</span>
                <div className="text-sm font-mono text-muted-foreground tracking-widest">
                  AI MEMECOIN SCANNER
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              <span className="text-primary font-semibold">Revolutionary</span> AI-powered memecoin scanner for the Solana ecosystem. 
              <span className="text-primary font-semibold"> 9 AI</span> working 
              <span className="text-primary font-semibold"> 24/7</span> to identify the next big opportunity.
            </p>
            
            {/* Whitepaper button */}
            <a 
              href="https://whitepaper.blur.ceo" 
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
          </div>
        </div>
      </div>

      {/* Animated bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
    </footer>
  );
};

export default CompactFooter;