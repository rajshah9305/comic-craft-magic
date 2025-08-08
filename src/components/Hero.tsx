import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_100%_65%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(320_91%_65%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(45_93%_65%/0.1),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="glow-effect mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
            <span className="text-cyber bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-shimmer">
              NOVA
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neon mb-6">
            Chronicles
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Enter a world where technology and mysticism collide. Follow the heroines 
          who stand between order and chaos in this interactive comic experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="px-12 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20 animate-glow transition-all duration-300"
            onClick={() => document.getElementById('comic-panels')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Begin Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-12 py-6 text-lg font-semibold border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            View Gallery
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;