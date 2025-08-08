import NavigationHeader from "@/components/NavigationHeader";
import Hero from "@/components/Hero";
import ComicGrid from "@/components/ComicGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <Hero />
        <ComicGrid />
      </main>
    </div>
  );
};

export default Index;
