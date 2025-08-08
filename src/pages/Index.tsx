import EditorialNavigation from "@/components/NavigationHeader";
import EditorialHero from "@/components/EditorialHero";
import MagazineLayout from "@/components/MagazineLayout";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EditorialNavigation />
      <main>
        <EditorialHero />
        <MagazineLayout />
      </main>
    </div>
  );
};

export default Index;
