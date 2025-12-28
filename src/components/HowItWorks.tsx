import { ClipboardCheck, Factory, Ruler, SwatchBook, Users } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Design Coordination",
    description: "We confirm scope, room schedules, interface points, and installation constraints with your design and site teams."
  },
  {
    icon: SwatchBook,
    title: "Sampling & Approvals",
    description: "We issue samples and document selections so finishes, light control intent, and system assumptions are approved before release."
  },
  {
    icon: Ruler,
    title: "Measurement & Documentation",
    description: "We complete site measurement and provide window-by-window documentation to support BOQs, shop drawings, and site alignment."
  },
  {
    icon: Factory,
    title: "Production & Installation",
    description: "We manufacture to the approved specification and coordinate installation to the project programme, site readiness, and access conditions."
  },
  {
    icon: ClipboardCheck,
    title: "Snagging & Handover",
    description: "We complete snagging, final adjustments, and handover notes so the installation is signed off and ready for occupancy."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-we-work" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            How We <span className="bg-gradient-gold bg-clip-text text-transparent">Work</span> on Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our process is designed for residential projects in Dubai, with clear coordination, approvals, and site sequencing from early design to handover.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-gold opacity-20" style={{ top: "64px" }} />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-medium">
                  <step.icon className="w-14 h-14 text-primary-foreground" />
                </div>
                <div className="w-12 h-12 -mt-2 mb-6 rounded-full bg-background border-4 border-primary flex items-center justify-center text-sm font-medium">
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
