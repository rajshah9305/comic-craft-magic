import ComicPanel from "./ComicPanel";

const ComicGrid = () => {
  const characters = [
    {
      image: "/lovable-uploads/35c59f43-d6ac-4319-875f-c16e4d5326dd.png",
      characterName: "Neon",
      title: "The Cybernetic Guardian",
      description: "In the neon-lit streets of Neo Tokyo, she stands as the last line of defense against digital corruption. Her cybernetic enhancements glow with electric blue energy, marking her as both human and machine.",
      size: "large" as const,
      delay: 100
    },
    {
      image: "/lovable-uploads/c4d7cef7-fd0c-4f02-8c4e-1dd7a9d9fa0b.png",
      characterName: "Aurora",
      title: "Keeper of Ancient Flames",
      description: "Born from fire and starlight, Aurora commands the primal forces that shaped the cosmos. Her golden hair flows like liquid flame, and her eyes hold the wisdom of millennia.",
      size: "medium" as const,
      delay: 200
    },
    {
      image: "/lovable-uploads/9e722ab5-cb29-4672-bd9c-3b94c34d09fd.png",
      characterName: "Valkyrie",
      title: "The Armored Sentinel",
      description: "Clad in armor forged from fallen stars, Valkyrie protects the boundaries between worlds. Her chest plate pulses with cosmic energy, powering abilities beyond mortal comprehension.",
      size: "medium" as const,
      delay: 300
    },
    {
      image: "/lovable-uploads/384d4057-4faa-42cb-8c56-42f91ce89263.png",
      characterName: "Solaris",
      title: "The Star-Touched Oracle",
      description: "Touched by solar winds and cosmic radiation, Solaris can see the threads of fate that bind all things. The geometric patterns behind her represent the mathematical nature of reality itself.",
      size: "small" as const,
      delay: 400
    },
    {
      image: "/lovable-uploads/a9f82f2f-4eca-475f-bd35-266988f47c0b.png",
      characterName: "Divine",
      title: "The Celestial Warrior",
      description: "With a halo of pure energy and armor blessed by ancient gods, Divine serves as humanity's champion against otherworldly threats. Her cross-shaped core channels divine power.",
      size: "medium" as const,
      delay: 500
    },
    {
      image: "/lovable-uploads/92a8c5e7-13d7-4969-9b56-d8fec7f05028.png",
      characterName: "Ember",
      title: "Child of Two Worlds",
      description: "Born during the convergence of realms, Ember possesses abilities from both the technological and mystical worlds. Her dual nature makes her uniquely powerful and eternally conflicted.",
      size: "small" as const,
      delay: 600
    },
    {
      image: "/lovable-uploads/3352fbd6-2646-49d5-a0eb-20ae47edb8ba.png",
      characterName: "Crimson",
      title: "The Shadow Empress",
      description: "From the crimson shadows of the underworld, she commands legions of darkness. Yet beneath her fearsome exterior lies a heart that still remembers the light she once knew.",
      size: "medium" as const,
      delay: 700
    },
    {
      image: "/lovable-uploads/b0d8fa9f-0b95-40cf-8338-a8af729f6c34.png",
      characterName: "Pixie",
      title: "The Quantum Hacker",
      description: "A master of digital realms and quantum encryption, Pixie can slip between virtual and physical reality at will. Her cybernetic implants pulse with data streams from across the network.",
      size: "small" as const,
      delay: 800
    },
    {
      image: "/lovable-uploads/79be6d70-8d39-4ec0-a3bc-919838652622.png",
      characterName: "Aurum",
      title: "The Golden Guardian",
      description: "Blessed with the power of precious metals, Aurum can transform her very essence into living gold. Her metallic skin reflects not just light, but the hopes and dreams of those she protects.",
      size: "medium" as const,
      delay: 900
    },
    {
      image: "/lovable-uploads/2bb19167-2278-4abb-ac79-520d61d65ec4.png",
      characterName: "Prism",
      title: "The Light Weaver",
      description: "Master of the electromagnetic spectrum, Prism can bend light itself to her will. The aurora that surrounds her is both beautiful and deadly, capable of revealing hidden truths or blinding enemies.",
      size: "large" as const,
      delay: 1000
    }
  ];

  return (
    <section id="comic-panels" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-cyber mb-6">
            Meet the Heroes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each guardian possesses unique abilities forged in the crucible of cosmic conflict. 
            Their stories intertwine across dimensions, creating a tapestry of heroism and sacrifice.
          </p>
        </div>

        {/* Comic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 auto-rows-max">
          {characters.map((character, index) => (
            <ComicPanel
              key={character.characterName}
              image={character.image}
              characterName={character.characterName}
              title={character.title}
              description={character.description}
              size={character.size}
              delay={character.delay}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-comic-panel border border-comic-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-neon mb-4">
              The Chronicles Begin
            </h3>
            <p className="text-muted-foreground mb-6">
              This is just the beginning. Each character's story unfolds across multiple dimensions, 
              revealing deeper mysteries and greater challenges that await.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                Read Chapter 1
              </button>
              <button className="px-8 py-3 border border-primary/50 hover:border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all duration-300">
                Character Profiles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComicGrid;