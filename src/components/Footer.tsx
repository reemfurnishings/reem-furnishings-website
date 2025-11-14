import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import rfLogo from "@/assets/rf-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-accent border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Brand */}
          <div className="space-y-6">
            <img 
              src={rfLogo} 
              alt="Reem Furnishings" 
              className="w-20 h-20 object-contain"
            />
            <p className="text-muted-foreground leading-relaxed">
              Premium window treatments for Dubai's finest interiors since 2004.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <a 
              href="tel:+971XXXXXXXX" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>+971 XX XXX XXXX</span>
            </a>
            <a 
              href="mailto:info@reemfurnishings.ae" 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>info@reemfurnishings.ae</span>
            </a>
            <a 
              href="https://wa.me/971XXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>WhatsApp</span>
            </a>
          </div>
          
          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6">Visit Us</h3>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="leading-relaxed">
                Reem Furnishings LLC<br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Reem Furnishings LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
