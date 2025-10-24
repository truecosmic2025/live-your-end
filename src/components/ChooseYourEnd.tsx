import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Heart, DollarSign, Smile } from "lucide-react";

export const ChooseYourEnd = () => {
  const focuses = [
    {
      icon: Heart,
      title: "Love & Relationships",
      description: "Rekindle a connection or deepen the bond. We'll script a scene that feels like normal life after it's done—then rehearse it nightly.",
      color: "text-pink-400"
    },
    {
      icon: DollarSign,
      title: "Money & Career",
      description: "Stabilise identity around being chosen, paid, or promoted. We'll align inner speech with an identity that quietly expects the outcome.",
      color: "text-primary"
    },
    {
      icon: Smile,
      title: "Peace & Confidence",
      description: "Less spiralling, more centred presence. We'll build a scene that proves to your nervous system: \"This is who I am now.\"",
      color: "text-secondary"
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
            <span className="text-gradient">Choose Your End</span>
          </h2>
          <p className="text-xl text-foreground/80">Pick One Focus to Start</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {focuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <GlassCard 
                key={index}
                hover
                className="p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className={`w-10 h-10 ${focus.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{focus.title}</h3>
                <p className="text-foreground/80">{focus.description}</p>
              </GlassCard>
            );
          })}
        </div>

        <div className="text-center">
          <CTAButton variant="primary" onClick={scrollToBooking} className="inline-flex">
            Start with a Free 1:1
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
