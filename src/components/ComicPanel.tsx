import { useState, useEffect, useRef } from "react";

interface ComicPanelProps {
  image: string;
  title: string;
  description: string;
  characterName: string;
  size?: 'small' | 'medium' | 'large';
  delay?: number;
}

const ComicPanel = ({ image, title, description, characterName, size = 'medium', delay = 0 }: ComicPanelProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const sizeClasses = {
    small: 'col-span-1 row-span-1 h-80',
    medium: 'col-span-1 md:col-span-2 row-span-2 h-96 md:h-[32rem]',
    large: 'col-span-1 md:col-span-3 row-span-3 h-[28rem] md:h-[40rem]'
  };

  return (
    <div
      ref={panelRef}
      className={`comic-panel ${sizeClasses[size]} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={characterName}
          className={`comic-character transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Glow Effect on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div className={`transform transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
        }`}>
          <h3 className="text-xl md:text-2xl font-bold text-cyber mb-2">
            {characterName}
          </h3>
          <h4 className="text-lg md:text-xl font-semibold text-neon mb-3">
            {title}
          </h4>
          <p className={`text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-500 ${
            isHovered ? 'max-h-32 opacity-100' : 'max-h-16 opacity-75'
          } overflow-hidden`}>
            {description}
          </p>
        </div>

        {/* Character Badge */}
        <div className={`absolute top-4 right-4 transition-all duration-500 ${
          isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
        }`}>
          <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-3 py-1">
            <span className="text-xs font-medium text-primary">Hero</span>
          </div>
        </div>
      </div>

      {/* Interactive Border Effect */}
      <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-500 ${
        isHovered 
          ? 'border-primary shadow-lg shadow-primary/20' 
          : 'border-comic-border'
      }`} />
    </div>
  );
};

export default ComicPanel;