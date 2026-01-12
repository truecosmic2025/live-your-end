import { GlassCard } from "./GlassCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Do I need Neville experience?",
      answer: "No. If you're brand-new, we'll keep it simple and practical."
    },
    {
      question: "Is the session really free?",
      answer: "Yes. If we believe a course or container could help, we'll mention it briefly. No pressure."
    },
    {
      question: "How fast will I see changes?",
      answer: "Many notice a calmer state within days of consistent practice. Outcomes vary; we focus on state first, outcomes follow."
    },
    {
      question: "What if my goal changes?",
      answer: "Great. We'll teach you how to re-frame the end and adjust your scene."
    },
    {
      question: "Is this therapy?",
      answer: "No. This is a 1:1 consultation to find out what's holding you back."
    },
    {
      question: "What should I prepare?",
      answer: "Come with one aim and a short note on when doubt usually hits. We'll do the rest."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
        </div>

        <GlassCard className="p-8 animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </div>
    </section>
  );
};
