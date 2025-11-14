import { Palette, Building2, Key } from "lucide-react";
import { Card } from "@/components/ui/card";

const programs = [
  {
    icon: Palette,
    title: "Interior Designers",
    benefits: [
      "Exclusive trade pricing",
      "Priority project scheduling",
      "Custom fabric sourcing",
      "Technical support and consultation"
    ]
  },
  {
    icon: Building2,
    title: "Property Developers",
    benefits: [
      "Volume discount programs",
      "Bulk ordering efficiency",
      "Consistent delivery timelines",
      "Show unit coordination"
    ]
  },
  {
    icon: Key,
    title: "Real Estate Brokers",
    benefits: [
      "Preferred partner pricing",
      "Staging support services",
      "Fast-track installations",
      "Portfolio enhancement solutions"
    ]
  }
];

const PartnerPrograms = () => {
  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Partner <span className="bg-gradient-gold bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored solutions for every professional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-primary transition-all duration-500 hover:shadow-medium"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-4">
                  <program.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-normal">{program.title}</h3>
              </div>
              <ul className="space-y-3">
                {program.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerPrograms;
