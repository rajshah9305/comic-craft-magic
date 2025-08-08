import { useState, useEffect, useRef } from "react";

interface FeatureStoryProps {
  image: string;
  title: string;
  subtitle: string;
  characterName: string;
  excerpt: string;
  readTime: string;
  category: string;
  size: 'large' | 'medium' | 'small';
  featured?: boolean;
}

const FeatureStory = ({ 
  image, 
  title, 
  subtitle, 
  characterName, 
  excerpt, 
  readTime, 
  category, 
  size, 
  featured = false 
}: FeatureStoryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sizeClasses = {
    large: 'col-span-8 row-span-2 h-[32rem]',
    medium: 'col-span-4 row-span-1 h-80',
    small: 'col-span-4 row-span-1 h-64'
  };

  return (
    <article
      ref={storyRef}
      className={`editorial-surface rounded-2xl transition-all duration-700 ${sizeClasses[size]} ${
        isVisible ? 'fade-up visible' : 'fade-up'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={characterName}
          className={`character-feature transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-6 right-6">
            <span className="bg-primary/20 backdrop-blur-sm text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className={`transform transition-all duration-500 ${
            isHovered ? 'translate-y-0' : 'translate-y-2'
          }`}>
            {/* Meta Info */}
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-accent text-xs font-medium">{characterName}</span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-muted-foreground text-xs">{readTime} read</span>
            </div>

            {/* Title */}
            <h3 className={`font-bold text-primary mb-2 transition-all duration-300 ${
              size === 'large' ? 'text-3xl lg:text-4xl' : 
              size === 'medium' ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
            }`}>
              {title}
            </h3>

            {/* Subtitle */}
            <p className={`text-accent-gold font-medium mb-3 ${
              size === 'large' ? 'text-lg' : 'text-base'
            }`}>
              {subtitle}
            </p>

            {/* Excerpt - only show on large and medium sizes */}
            {(size === 'large' || size === 'medium') && (
              <p className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
                isHovered ? 'opacity-100 max-h-20' : 'opacity-80 max-h-16'
              } overflow-hidden ${size === 'large' ? 'text-base' : 'text-sm'}`}>
                {excerpt}
              </p>
            )}

            {/* Read More Link */}
            <div className={`mt-4 transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
            }`}>
              <button className="text-accent text-sm font-medium text-highlight">
                Read Story →
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeatureStory;