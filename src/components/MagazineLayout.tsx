import FeatureStory from "./FeatureStory";

const MagazineLayout = () => {
  const stories = [
    {
      image: "/lovable-uploads/c4d7cef7-fd0c-4f02-8c4e-1dd7a9d9fa0b.png",
      characterName: "Aurora",
      title: "Fire Born",
      subtitle: "Ancient Power in Digital Age",
      excerpt: "In the convergence of worlds where magic meets technology, Aurora stands as a bridge between realms. Her golden flames burn bright against the dark void of space, illuminating paths that were thought lost forever.",
      readTime: "8 min",
      category: "Origin Story",
      size: "large" as const,
      featured: true
    },
    {
      image: "/lovable-uploads/9e722ab5-cb29-4672-bd9c-3b94c34d09fd.png",
      characterName: "Valkyrie",
      title: "The Armored Sentinel",
      subtitle: "Guardian of Boundaries",
      excerpt: "Her armor, forged from celestial metals, pulses with energy that transcends mortal understanding. Between worlds she stands, protecting reality itself.",
      readTime: "6 min",
      category: "Character Study",
      size: "medium" as const
    },
    {
      image: "/lovable-uploads/384d4057-4faa-42cb-8c56-42f91ce89263.png",
      characterName: "Solaris",
      title: "Mathematics of Destiny",
      subtitle: "The Oracle's Vision",
      excerpt: "Through sacred geometry and cosmic calculations, she reads the threads of fate that bind all existence.",
      readTime: "5 min",
      category: "Mysticism",
      size: "medium" as const
    },
    {
      image: "/lovable-uploads/a9f82f2f-4eca-475f-bd35-266988f47c0b.png",
      characterName: "Divine",
      title: "Celestial Warrior",
      subtitle: "Divine Intervention",
      excerpt: "When darkness threatens to consume reality, divine light pierces through the void.",
      readTime: "7 min",
      category: "Epic",
      size: "small" as const
    },
    {
      image: "/lovable-uploads/92a8c5e7-13d7-4969-9b56-d8fec7f05028.png",
      characterName: "Ember",
      title: "Between Worlds",
      subtitle: "The Duality of Power",
      excerpt: "Born during the great convergence, she embodies both technological precision and mystical chaos.",
      readTime: "6 min",
      category: "Biography",
      size: "small" as const
    },
    {
      image: "/lovable-uploads/3352fbd6-2646-49d5-a0eb-20ae47edb8ba.png",
      characterName: "Crimson",
      title: "Shadows and Light",
      subtitle: "The Empress Returns",
      excerpt: "From the crimson depths, she emerges with power that could reshape the very fabric of existence. Her journey from darkness to light reveals the true nature of redemption.",
      readTime: "9 min",
      category: "Drama",
      size: "medium" as const
    },
    {
      image: "/lovable-uploads/b0d8fa9f-0b95-40cf-8338-a8af729f6c34.png",
      characterName: "Pixie",
      title: "Quantum Hacker",
      subtitle: "Digital Revolution",
      excerpt: "In the space between bits and bytes, she weaves reality like code.",
      readTime: "4 min",
      category: "Technology",
      size: "small" as const
    },
    {
      image: "/lovable-uploads/79be6d70-8d39-4ec0-a3bc-919838652622.png",
      characterName: "Aurum",
      title: "Golden Guardian",
      subtitle: "Precious Metal, Precious Soul",
      excerpt: "Her metallic transformation reflects more than physical change—it mirrors the golden heart that beats within.",
      readTime: "5 min",
      category: "Transformation",
      size: "small" as const
    },
    {
      image: "/lovable-uploads/2bb19167-2278-4abb-ac79-520d61d65ec4.png",
      characterName: "Prism",
      title: "Light Weaver",
      subtitle: "Master of Spectrum",
      excerpt: "Through the manipulation of light itself, she reveals truths hidden in shadow and illuminates the path forward for all who follow.",
      readTime: "7 min",
      category: "Power Profile",
      size: "large" as const,
      featured: true
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Featured Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-editorial mb-6">
            Power Profiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Exclusive interviews and deep dives into the lives, powers, and motivations 
            of the heroines shaping our digital future.
          </p>
        </header>

        {/* Magazine Grid */}
        <div className="magazine-grid mb-16">
          {stories.map((story, index) => (
            <FeatureStory
              key={story.characterName}
              {...story}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="editorial-surface rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-editorial mb-4">
              Subscribe to The New Pantheon
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Get exclusive access to extended character profiles, behind-the-scenes content, 
              and early access to new story releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="read-more-button px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg">
                Start Reading
              </button>
              <button className="px-8 py-4 border border-editorial hover:border-accent text-primary hover:bg-accent/5 font-semibold rounded-lg transition-all duration-300">
                View All Issues
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazineLayout;