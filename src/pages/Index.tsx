import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClassSelection from "@/components/ClassSelection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ClassSelection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
