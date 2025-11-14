import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Reem Furnishings has been our go-to partner for over 10 years. Their attention to detail and consistent quality make them invaluable for our luxury villa projects.",
    author: "Sarah Al-Mansouri",
    title: "Principal Interior Designer",
    company: "Luxe Interiors Dubai"
  },
  {
    quote: "The trade pricing and fast turnaround times have helped us deliver multiple show units on schedule. Their team understands the demands of large-scale developments.",
    author: "Michael Chen",
    title: "Project Director",
    company: "Emirates Property Group"
  },
  {
    quote: "Working with Reem Furnishings gives our listings an immediate edge. The quality of their window treatments elevates every property we stage.",
    author: "Fatima Hassan",
    title: "Senior Real Estate Broker",
    company: "Dubai Properties Elite"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Trusted by <span className="bg-gradient-gold bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What our partners say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-500 relative"
            >
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-gold opacity-10 flex items-center justify-center">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-sm text-primary mt-1">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
