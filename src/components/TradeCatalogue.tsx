import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Download, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const TradeCatalogue = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.fullName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: "catalogue_download"
      });

      if (error) throw error;

      toast({
        title: "Catalogue Request Received!",
        description: "We'll send the catalogue to your email within 24 hours.",
      });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="p-12 shadow-elegant border-2">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Download Our <span className="bg-gradient-gold bg-clip-text text-transparent">Trade Catalogue</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Access our complete product range, specifications, and pricing guide
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Full Name" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 border-2 focus:border-primary"
                />
                <Input 
                  placeholder="Company Name" 
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="h-12 border-2 focus:border-primary"
                />
              </div>
              
              <Input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 border-2 focus:border-primary"
              />
              
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 border-2 focus:border-primary"
              />
              
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
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Catalogue
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TradeCatalogue;
