import NeonNetworkBackground from "@/components/NeonNetworkBackground";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Twitter, Github, Send, Mail, MessageCircle, Users, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Connect = () => {
  const socialPlatforms = [
    {
      name: "Telegram",
      description: "Join our main community chat and get real-time updates",
      icon: Send,
      url: "https://t.me/blurbotai",
      members: "100+",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Twitter",
      description: "Follow us for news, insights, and market analysis",
      icon: Twitter,
      url: "https://x.com/bluronsol",
      members: "40+",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30"
    }
    // {
    //   name: "Discord",
    //   description: "Connect with traders and get technical support",
    //   icon: MessageCircle,
    //   url: "https://discord.gg/blurcrypto",
    //   members: "5.2K",
    //   color: "from-purple-500 to-indigo-600",
    //   bgColor: "bg-purple-500/10",
    //   borderColor: "border-purple-500/30"
    // },
    // {
    //   name: "GitHub",
    //   description: "Access our open-source tools and documentation",
    //   icon: Github,
    //   url: "https://github.com/blurcrypto",
    //   members: "1.1K",
    //   color: "from-gray-400 to-gray-600",
    //   bgColor: "bg-gray-400/10",
    //   borderColor: "border-gray-400/30"
    // }
  ];

  const directContacts = [
    {
      title: "Business Inquiries",
      description: "Partnership and business development opportunities",
      icon: Mail,
      contact: "hello@blur.ceo",
      type: "email"
    },
    {
      title: "Technical Support",
      description: "Get help with API integration and technical issues",
      icon: Users,
      contact: "help@blur.ceo",
      type: "email"
    },
    {
      title: "Media & Press",
      description: "Press releases, interviews, and media resources",
      icon: Globe,
      contact: "press@blur.ceo",
      type: "email"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NeonNetworkBackground />
      {/* Background effects */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 px-4 py-2 border border-primary/50 
                     rounded-lg text-primary hover:bg-primary/10 font-mono tracking-wide 
                     text-sm font-bold transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>НАЗАД</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-sm font-mono tracking-wider text-primary font-bold">
                COMMUNITY HUB
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-electric">
              CONNECT WITH BLUR
            </h1>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-glow-intense" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Join our thriving community of traders, developers, and crypto enthusiasts
            <span className="text-primary font-semibold text-glow"> across multiple platforms</span>
          </p>
        </div>

        {/* Social platforms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className={`card-premium p-8 rounded-2xl border ${platform.borderColor} 
                           hover:border-primary/50 transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl ${platform.bgColor}`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-electric">
                          {platform.name}
                        </h3>
                        <div className="text-sm font-mono text-muted-foreground">
                          {platform.members} members
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-primary-bright 
                               text-background font-mono tracking-wide font-bold
                               hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        <span>JOIN {platform.name.toUpperCase()}</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct contact options */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-electric">
              DIRECT CONTACT
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need to reach us directly? Choose the appropriate channel below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directContacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <div
                  key={contact.title}
                  className="card-premium p-8 rounded-2xl text-center space-y-6 
                           hover:border-primary/50 transition-all duration-300"
                >
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-electric">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {contact.description}
                    </p>
                  </div>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10 
                             font-mono tracking-wide transition-all duration-300"
                  >
                    <a href={`mailto:${contact.contact}`}>
                      <span className="font-mono text-sm">{contact.contact}</span>
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;