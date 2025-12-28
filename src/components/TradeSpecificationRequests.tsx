import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

type RoleOption = "Interior Designer" | "Fit-Out Contractor" | "Developer" | "Property Manager" | "Consultant / PMC" | "Other";
type ProjectTypeOption = "Apartment" | "Villa" | "Show Unit" | "Multi-Unit" | "Refurbishment";
type InstallWindowOption = "Immediate / Fast-track" | "1–2 months" | "3+ months";
type SpecPackageOption = "Contemporary" | "Premium" | "Signature" | "Not sure yet";
type ServiceOption = "Curtains" | "Blinds" | "Motorised systems" | "Upholstery / sofa refurbishment";

const ROLE_OPTIONS: RoleOption[] = [
  "Interior Designer",
  "Fit-Out Contractor",
  "Developer",
  "Property Manager",
  "Consultant / PMC",
  "Other",
];
const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = ["Apartment", "Villa", "Show Unit", "Multi-Unit", "Refurbishment"];
const INSTALL_WINDOW_OPTIONS: InstallWindowOption[] = ["Immediate / Fast-track", "1–2 months", "3+ months"];
const SPEC_PACKAGE_OPTIONS: SpecPackageOption[] = ["Contemporary", "Premium", "Signature", "Not sure yet"];
const SERVICE_OPTIONS: ServiceOption[] = ["Curtains", "Blinds", "Motorised systems", "Upholstery / sofa refurbishment"];

const TradeSpecificationRequests = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // About You
    fullName: "",
    companyName: "",
    role: "" as RoleOption | "",
    email: "",
    phone: "",
    // Project Information
    projectType: "" as ProjectTypeOption | "",
    projectLocation: "",
    estimatedUnitsOrWindows: "",
    targetInstallWindow: "" as InstallWindowOption | "",
    specPackageInterest: "" as SpecPackageOption | "",
    // Scope & Notes
    servicesRequired: [] as ServiceOption[],
    additionalNotes: "",
  });

  const servicesSet = useMemo(() => new Set(formData.servicesRequired), [formData.servicesRequired]);

  const toggleService = (service: ServiceOption) => {
    setFormData((prev) => {
      const next = new Set(prev.servicesRequired);
      if (next.has(service)) next.delete(service);
      else next.add(service);
      return { ...prev, servicesRequired: Array.from(next) };
    });
  };

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push("Trade & Specification Request");
    lines.push("");
    lines.push("About You");
    lines.push(`Role: ${formData.role || "—"}`);
    lines.push("");
    lines.push("Project Information");
    lines.push(`Project Type: ${formData.projectType || "—"}`);
    lines.push(`Project Location: ${formData.projectLocation || "—"}`);
    lines.push(`Estimated Number of Units / Windows: ${formData.estimatedUnitsOrWindows || "—"}`);
    lines.push(`Target Installation Window: ${formData.targetInstallWindow || "—"}`);
    lines.push(`Specification Package of Interest: ${formData.specPackageInterest || "—"}`);
    lines.push("");
    lines.push("Scope & Notes");
    lines.push(`Services Required: ${formData.servicesRequired.length ? formData.servicesRequired.join(", ") : "—"}`);
    lines.push(`Additional Notes / Constraints: ${formData.additionalNotes || "—"}`);
    return lines.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.role) {
      toast({
        title: "Please complete required fields",
        description: "Full Name, Role, and Email Address are required for trade requests.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.fullName.trim(),
        company_name: formData.companyName.trim() || null,
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        inquiry_type: "specification_sheet_request",
        message: buildMessage(),
      });

      if (error) throw error;

      toast({
        title: "Request received",
        description: "We typically respond to trade enquiries within one working day.",
      });

      setFormData({
        fullName: "",
        companyName: "",
        role: "",
        email: "",
        phone: "",
        projectType: "",
        projectLocation: "",
        estimatedUnitsOrWindows: "",
        targetInstallWindow: "",
        specPackageInterest: "",
        servicesRequired: [],
        additionalNotes: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or use the general contact form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="trade-specification-requests" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Trade &amp; Specification Requests</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            This form is for interior designers, fit-out contractors, developers, and property managers with
            project-based requirements. If you are a homeowner enquiring for a single residence, please use the{" "}
            <a href="#contact" className="underline underline-offset-4">
              general contact form
            </a>{" "}
            instead.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-elegant border-2">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* About You */}
              <div className="space-y-6">
                <h3 className="text-xl font-normal">About You</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="trade_full_name">Full Name *</Label>
                    <Input
                      id="trade_full_name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trade_company_name">Company Name</Label>
                    <Input
                      id="trade_company_name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Role *</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value as RoleOption })}>
                      <SelectTrigger className="h-12 border-2 focus:border-primary">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trade_email">Email Address *</Label>
                    <Input
                      id="trade_email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="trade_phone">Phone Number (optional)</Label>
                    <Input
                      id="trade_phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-normal">Project Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value as ProjectTypeOption })}
                    >
                      <SelectTrigger className="h-12 border-2 focus:border-primary">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trade_project_location">Project Location</Label>
                    <Input
                      id="trade_project_location"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trade_estimated_units">Estimated Number of Units / Windows</Label>
                    <p className="text-xs text-muted-foreground">(Approximate is fine)</p>
                    <Input
                      id="trade_estimated_units"
                      value={formData.estimatedUnitsOrWindows}
                      onChange={(e) => setFormData({ ...formData, estimatedUnitsOrWindows: e.target.value })}
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Target Installation Window</Label>
                    <Select
                      value={formData.targetInstallWindow}
                      onValueChange={(value) =>
                        setFormData({ ...formData, targetInstallWindow: value as InstallWindowOption })
                      }
                    >
                      <SelectTrigger className="h-12 border-2 focus:border-primary">
                        <SelectValue placeholder="Select timing" />
                      </SelectTrigger>
                      <SelectContent>
                        {INSTALL_WINDOW_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>Specification Package of Interest</Label>
                    <Select
                      value={formData.specPackageInterest}
                      onValueChange={(value) =>
                        setFormData({ ...formData, specPackageInterest: value as SpecPackageOption })
                      }
                    >
                      <SelectTrigger className="h-12 border-2 focus:border-primary">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        {SPEC_PACKAGE_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Scope & Notes */}
              <div className="space-y-6">
                <h3 className="text-xl font-normal">Scope &amp; Notes</h3>

                <div className="space-y-3">
                  <Label>Services Required</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICE_OPTIONS.map((service) => {
                      const checked = servicesSet.has(service);
                      return (
                        <label key={service} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Checkbox checked={checked} onCheckedChange={() => toggleService(service)} />
                          <span className="text-foreground">{service}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trade_notes">Additional Notes / Constraints</Label>
                  <Textarea
                    id="trade_notes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="min-h-[150px] border-2 focus:border-primary"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-gold hover:opacity-90 text-primary-foreground text-lg rounded-xl shadow-medium transition-all hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Specification Sheet"
                  )}
                </Button>
                <p className="text-muted-foreground text-sm text-center mt-3">
                  We typically respond to trade enquiries within <span className="font-medium text-foreground">one working day</span>.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TradeSpecificationRequests;


