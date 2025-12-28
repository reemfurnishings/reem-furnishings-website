import { Card } from "@/components/ui/card";

type SpecPackage = {
  code: string;
  name: string;
  intent: string;
  bestSuitedFor: string;
  inclusions: Array<{ label: string; value: string }>;
  leadTimeRange: string;
  projectSupport: string;
};

const packages: SpecPackage[] = [
  {
    code: "Package A",
    name: "Contemporary",
    intent: "Standard specification for repeatable residential layouts",
    bestSuitedFor: "Apartments, multi-unit refurbishments, standard bedrooms/living areas",
    inclusions: [
      {
        label: "Fabric specification",
        value:
          "Contract-suitable sheers and blackout fabrics (curated range; subject to selected range)",
      },
      {
        label: "System specification",
        value: "Standard curtain tracks and blind systems (roller / zebra / blackout options)",
      },
      {
        label: "Motorisation readiness",
        value:
          "Tracks and systems prepared for future motorisation; motorised options available on request (subject to final system selection)",
      },
      {
        label: "Make-up & fabrication",
        value: "Standard headings and clean, consistent finishing details",
      },
    ],
    leadTimeRange: "10–15 working days from site measure + final selection sign-off",
    projectSupport:
      "Measurement, coordination with site teams, shop drawings (on request), and installation scheduling aligned to project programme and site readiness",
  },
  {
    code: "Package B",
    name: "Premium",
    intent: "Enhanced specification for upgraded finishes and show units",
    bestSuitedFor: "Villas, show units, upgraded apartments, developer handover upgrades",
    inclusions: [
      {
        label: "Fabric specification",
        value: "Expanded curated range with higher hand-feel options; coordinated sheers + blackouts",
      },
      {
        label: "System specification",
        value: "Upgraded tracks and blind hardware for smoother operation and cleaner stack-back",
      },
      {
        label: "Motorisation readiness",
        value:
          "Motor-ready systems; optional motorised curtains/blinds with wired or battery solutions (integration-ready upon request)",
      },
      {
        label: "Light control intent",
        value: "Improved blackout and privacy control options based on room use",
      },
    ],
    leadTimeRange: "12–20 working days from site measure + final selection sign-off",
    projectSupport: "Enhanced coordination with defined approvals (samples, drawings, sign-off checkpoints)",
  },
  {
    code: "Package C",
    name: "Signature",
    intent: "High-detail specification for feature spaces and flagship units",
    bestSuitedFor: "High-visibility show units, premium villas, multi-window feature spaces, stakeholder-led projects",
    inclusions: [
      {
        label: "Fabric specification",
        value: "Curated premium selections with stronger drape and finish; tighter coordination across rooms",
      },
      {
        label: "System specification",
        value: "High-spec tracks/rods and blind systems designed for clean detailing and consistent operation",
      },
      {
        label: "Motorisation approach",
        value:
          "Motorised-first approach; zoning and control options; interface planning with MEP/controls teams when required",
      },
      {
        label: "Documentation",
        value: "BOQ-friendly schedules (window-by-window) and coordinated scope notes for tender clarity",
      },
    ],
    leadTimeRange: "15–25 working days from site measure + final selection sign-off",
    projectSupport: "Dedicated project lead for coordination, approvals, and on-site sequencing",
  },
];

const SpecificationPackages = () => {
  return (
    <section id="specification-packages" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Curtain &amp; Blind{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">Specification Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Built for residential projects in Dubai where timelines, coordination, and repeatable specifications
            matter. Choose a package level, then request the full specification sheet with standard inclusions,
            options, and BOQ-ready descriptions.
          </p>
          <p className="text-muted-foreground text-base max-w-3xl mx-auto mt-4">
            All packages can be adapted per project requirements. Final specifications are confirmed during sampling and
            approval stages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.code}
              className="p-8 border-2 hover:border-primary transition-all duration-500 hover:shadow-medium"
            >
              <div className="mb-6">
                <p className="text-sm tracking-wide text-muted-foreground mb-2">{pkg.code}</p>
                <h3 className="text-2xl font-normal">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{pkg.intent}</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">Best suited for:</span> {pkg.bestSuitedFor}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">Project support:</span> {pkg.projectSupport}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">Key technical inclusions:</span>
                  </span>
                </li>
              </ul>

              <ul className="mt-3 space-y-3 pl-5">
                {pkg.inclusions.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-2 flex-shrink-0" />
                    <span>
                      <span className="font-medium text-foreground">{item.label}:</span> {item.value}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">Lead time (typical range):</span>{" "}
                    {pkg.leadTimeRange}
                  </span>
                </li>
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center text-lg mt-12">
          <a href="#contact" className="underline underline-offset-4">
            Request Full Specification Sheet
          </a>
          <p className="text-muted-foreground text-sm mt-2">
            (BOQ descriptions, options, approval notes, and system assumptions)
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecificationPackages;


