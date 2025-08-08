import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const EditorialNavigation = () => {
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
        ? 'bg-background/95 backdrop-blur-lg border-b border-editorial' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-lg font-black text-accent-foreground">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-editorial leading-none">The New</span>
            <span className="text-sm text-accent-gold leading-none">Pantheon</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Stories
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Characters
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Issues
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            About
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          size="sm"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 font-medium"
        >
          Subscribe
        </Button>
      </nav>
    </header>
  );
};

export default EditorialNavigation;