import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rfLogo from "@/assets/rf-logo.svg";
import TradePricingDialog from "./TradePricingDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <img src={rfLogo} alt="Reem Furnishings" className="h-12 w-12 object-contain" />
              <div className="hidden md:block">
                <span className="text-xl font-light">Reem Furnishings</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Partners
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => setDialogOpen(true)}
                className="bg-gradient-gold hover:opacity-90 text-primary-foreground px-6 rounded-full shadow-soft"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-md">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Partners
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  Contact
                </button>
                <Button
                  onClick={() => {
                    setDialogOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-gold hover:opacity-90 text-primary-foreground w-full rounded-full"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <TradePricingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Navbar;
