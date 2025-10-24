import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Calendar, FileQuestion, Mail, Video } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: FileQuestion,
      title: "Answer 3 quick questions",
      description: "Your aim, biggest sticking point, preferred outcome"
    },
    {
      icon: Calendar,
      title: "Pick a time with Robert",
      description: "Choose a convenient slot from our calendar"
    },
    {
      icon: Mail,
      title: "Check your email for prep",
      description: "3-minute welcome video and your intake sheet"
    },
    {
      icon: Video,
      title: "We meet on Zoom/phone",
      description: "You leave with your one-page plan"
    }
  ];

  const scrollToBooking = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How <span className="text-gradient">Booking Works</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <GlassCard 
                  key={index}
                  hover
                  className="p-6 text-center animate-fade-in-up relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-4 border-background relative z-10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{index + 1}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <CTAButton variant="primary" onClick={scrollToBooking} className="inline-flex">
            Book Your Free 1:1 Session
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
