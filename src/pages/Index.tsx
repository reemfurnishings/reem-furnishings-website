import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ProjectShowcase from "@/components/ProjectShowcase";
import PartnerPrograms from "@/components/PartnerPrograms";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import TradeCatalogue from "@/components/TradeCatalogue";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyWorkWithUs />
      <ProjectShowcase />
      <PartnerPrograms />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <TradeCatalogue />
      <Footer />
    </div>
  );
};

export default Index;
