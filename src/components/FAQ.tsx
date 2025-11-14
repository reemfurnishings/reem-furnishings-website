import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your lead times for custom orders?",
    answer: "Our standard lead time is 7-10 business days from measurement to installation. For larger projects or special fabric orders, we'll provide a detailed timeline during consultation. Rush orders can be accommodated with advance notice."
  },
  {
    question: "How does trade pricing work?",
    answer: "We offer competitive volume discounts based on project size and ongoing partnership. Contact us to discuss your specific requirements and we'll provide customized pricing that fits your budget and project needs."
  },
  {
    question: "Do you provide measurement and installation services?",
    answer: "Yes, we provide comprehensive measurement and professional installation services for all projects. Our dedicated teams ensure precise measurements and flawless installation, backed by our 20+ years of experience in Dubai."
  },
  {
    question: "What types of window treatments do you offer?",
    answer: "We specialize in made-to-measure curtains, blinds (roller, roman, venetian), motorized solutions, and custom drapery. All products are crafted with premium materials and can be customized to match any design specification."
  },
  {
    question: "Can you handle large-scale development projects?",
    answer: "Absolutely. We regularly work with property developers on multi-unit projects, including villas, apartments, and commercial spaces. Our streamlined processes ensure consistent quality and on-time delivery across all units."
  },
  {
    question: "Do you offer fabric customization?",
    answer: "Yes, we offer extensive fabric selection and custom sourcing services. Our team can help you choose from our premium fabric collections or source specific materials to match your design vision."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Frequently Asked <span className="bg-gradient-gold bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-normal">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
