import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  CTASection,
} from "@/components/LandingSections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
