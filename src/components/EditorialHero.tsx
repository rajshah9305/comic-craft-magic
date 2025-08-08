import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const EditorialHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(45_86%_68%/0.03),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className={`space-y-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="space-y-4">
            <p className="text-accent-gold text-sm font-medium tracking-wider uppercase">
              Digital Magazine
            </p>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
              <span className="text-editorial">The</span>
              <br />
              <span className="text-accent-gold">New</span>
              <br />
              <span className="text-editorial">Pantheon</span>
            </h1>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg">
              An exclusive feature on the heroines redefining power in our digital age. 
              Where ancient mythology meets cutting-edge technology.
            </p>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-px bg-accent"></div>
              <p className="text-sm text-muted-foreground">Issue #001</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="read-more-button px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read Featured Stories
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 border-editorial hover:border-accent text-primary hover:bg-accent/5"
            >
              Subscribe to Series
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className={`relative transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
        }`}>
          <div className="editorial-surface rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src="/lovable-uploads/35c59f43-d6ac-4319-875f-c16e4d5326dd.png"
              alt="Featured Character"
              className="character-feature"
            />
            
            {/* Feature Badge */}
            <div className="absolute top-6 left-6">
              <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                Cover Story
              </div>
            </div>
            
            {/* Character Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 border border-editorial">
                <h3 className="text-xl font-bold text-editorial mb-1">Neon</h3>
                <p className="text-sm text-muted-foreground">The Cybernetic Guardian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialHero;