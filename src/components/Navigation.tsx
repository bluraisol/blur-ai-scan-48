import { useState, useEffect } from "react";
import { Menu, X, Zap, Activity, TrendingUp, CircleDollarSign, Blend, ScrollText, AtSign } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "MAIN", icon: Zap },
    { id: "stats", label: "METRICS", icon: TrendingUp },
    { id: "about", label: "TECHNOLOGY", icon: Activity },
    { id: "modes", label: "MODES", icon: Blend },    
    { id: "pricing", label: "PRICING", icon: CircleDollarSign },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    if (sectionId === "connect" || sectionId === "tokenomics") {
      window.location.href = `/${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/favicon.ico" 
                  alt="Blur Logo" 
                  className="w-10 h-10 rounded-xl object-cover border border-primary/50 
                           group-hover:scale-110 transition-transform" 
                />
              </div>
              <div className="space-y-0">
                <span className="text-2xl font-black tracking-wider text-electric font-blur">BLUR</span>
                <div className="text-xs font-mono text-muted-foreground tracking-widest">
                  AI SCANNER
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, 10).map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-lg 
                               transition-all duration-300 hover-electric ${
                      activeSection === item.id 
                        ? 'bg-primary/10 text-primary border border-primary/50' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Icon size={16} className="transition-transform group-hover:scale-110" />
                    <span className="text-sm font-mono tracking-wide">{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection("connect")}
                className="group flex items-center space-x-2 px-4 py-2 rounded-lg 
                         transition-all duration-300 hover-electric text-muted-foreground hover:text-primary"
              >
                <AtSign size={16} className="transition-transform group-hover:scale-110" />
                <span className="text-sm font-mono tracking-wide">CONNECT</span>
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="group flex items-center space-x-2 px-4 py-2 rounded-lg 
                         transition-all duration-300 hover-electric text-muted-foreground hover:text-primary"
              >
                <ScrollText size={16} className="transition-transform group-hover:scale-110" />
                <span className="text-sm font-mono tracking-wide">TOKENOMICS</span>
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>LIVE</span>
              </div>
              <a 
                href="https://t.me/blurcryptobot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-border px-6 py-3 bg-gradient-to-r from-primary to-primary-bright 
                         text-background font-mono tracking-wide text-sm font-bold
                         hover:shadow-lg transform hover:scale-105 transition-all duration-300
                         rounded-lg block"
              >
                GET BLUR
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover-electric border border-border"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Real-time status bar */}
        <div className="border-t border-border bg-background/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-6">
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          <div className="relative flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center space-x-4 px-8 py-4 rounded-lg 
                           hover-electric text-2xl transition-all duration-300"
                >
                  <Icon size={24} className="transition-transform group-hover:scale-110" />
                  <span className="font-mono tracking-wide">{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("connect")}
              className="group flex items-center space-x-4 px-8 py-4 rounded-lg 
                       hover-electric text-2xl transition-all duration-300"
            >
              <Menu size={24} className="transition-transform group-hover:scale-110" />
              <span className="font-mono tracking-wide">CONNECT</span>
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="group flex items-center space-x-4 px-8 py-4 rounded-lg 
                       hover-electric text-2xl transition-all duration-300"
            >
              <ScrollText size={24} className="transition-transform group-hover:scale-110" />
              <span className="font-mono tracking-wide">TOKENOMICS</span>
            </button>
            <a 
              href="https://t.me/blurcryptobot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-border px-8 py-4 bg-gradient-to-r from-primary to-primary-bright 
                       text-background font-mono tracking-wide text-lg font-bold
                       rounded-lg mt-8 block"
            >
              ACTIVATE SCANNER
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;