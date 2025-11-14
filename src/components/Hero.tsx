import { useState } from "react";
import { Button } from "@/components/ui/button";
import rfLogo from "@/assets/rf-logo.svg";
import TradePricingDialog from "./TradePricingDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Subtle Corner Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-gold opacity-5 blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* RF Logo */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <img 
            src={rfLogo} 
            alt="Reem Furnishings" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-elegant"
          />
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Premium Window Treatments<br />
          <span className="bg-gradient-gold bg-clip-text text-transparent font-normal">
            for Designers & Developers
          </span>
          <br />in Dubai
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Since 2004, Reem Furnishings delivers made-to-measure curtains, blinds, 
          and motorised window solutions trusted by interior designers, developers, 
          and luxury homeowners.
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg"
            onClick={() => setDialogOpen(true)}
            className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-elegant transition-all hover:scale-105"
          >
            Request Trade Pricing
          </Button>
        </div>
      </div>
      
      <TradePricingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Hero;
