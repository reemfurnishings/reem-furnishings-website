import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface TradePricingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TradePricingDialog = ({ open, onOpenChange }: TradePricingDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: ""
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
        inquiry_type: "trade_pricing",
        message: formData.message
      });

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you within 24 hours with our trade pricing information.",
      });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: ""
      });
      onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request Trade Pricing</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll send you our competitive trade pricing guide.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Full Name *"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="h-12 border-2"
          />
          
          <Input
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="h-12 border-2"
          />
          
          <Input
            type="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12 border-2"
          />
          
          <Input
            type="tel"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-12 border-2"
          />
          
          <Textarea
            placeholder="Tell us about your project (optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[100px] border-2"
          />
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-gold hover:opacity-90 text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TradePricingDialog;
