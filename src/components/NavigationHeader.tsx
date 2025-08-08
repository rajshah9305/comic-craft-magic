import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-lg border-b border-comic-border' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-lg font-black text-background">N</span>
          </div>
          <span className="text-xl font-bold text-cyber">Nova Chronicles</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#comic-panels" className="text-muted-foreground hover:text-primary transition-colors">
            Characters
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Chapters
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
        >
          Read Now
        </Button>
      </nav>
    </header>
  );
};

export default NavigationHeader;