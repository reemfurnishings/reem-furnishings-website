import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: ""
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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Get in <span className="bg-gradient-gold bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to elevate your project? Contact our team today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're an interior designer, property developer, or real estate broker, 
                we're here to support your vision with premium window treatment solutions.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+971XXXXXXXX" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +971 XX XXX XXXX
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:info@reemfurnishings.ae" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@reemfurnishings.ae
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/971XXXXXXXX" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Reem Furnishings LLC<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-elegant border-2">
            <h3 className="text-2xl font-light mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
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
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 border-2 focus:border-primary"
              />

              <Input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 border-2 focus:border-primary"
              />

              <Textarea
                placeholder="Tell us about your project *"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px] border-2 focus:border-primary"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-gold hover:opacity-90 text-primary-foreground text-lg rounded-xl shadow-medium transition-all hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
