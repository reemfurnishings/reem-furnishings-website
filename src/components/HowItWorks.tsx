import { MessageCircle, Ruler, Factory, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consult",
    description: "Share your vision and requirements with our team"
  },
  {
    icon: Ruler,
    title: "Measure",
    description: "Professional on-site measurement and assessment"
  },
  {
    icon: Factory,
    title: "Fabricate",
    description: "Custom manufacturing with premium materials"
  },
  {
    icon: CheckCircle,
    title: "Install & Handover",
    description: "Expert installation and final quality check"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            How It <span className="bg-gradient-gold bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A seamless process from concept to completion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-gold opacity-20" style={{ top: "64px" }} />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-medium">
                  <step.icon className="w-14 h-14 text-primary-foreground" />
                </div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center text-sm font-medium z-20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-normal mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
