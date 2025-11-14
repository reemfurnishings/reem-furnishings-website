import { DollarSign, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Trade Pricing",
    description: "Competitive volume discounts tailored for professional projects"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "7–10 day lead times to keep your projects on schedule"
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Professional measurement and installation for every project"
  },
  {
    icon: Award,
    title: "Dubai Experience",
    description: "20+ years serving the region's most discerning clients"
  }
];

const WhyWorkWithUs = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Why Work <span className="bg-gradient-gold bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by Dubai's leading design professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
