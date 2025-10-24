import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Clock, Lightbulb, Calendar, CheckSquare, FileText, Headphones } from "lucide-react";

export const WhatYouGet = () => {
  const duringCall = [
    { icon: Clock, title: "Snap Assessment", time: "5 min", description: "your aim, your current state, and the one bottleneck" },
    { icon: Lightbulb, title: "Scene Craft", time: "10 min", description: "we co-create a short Live in the End scene (sensory + naturalness)" },
    { icon: Calendar, title: "Your 7-Day Routine", time: "10 min", description: "bedtime SATS, daytime inner speech swaps, and mini revision" },
    { icon: CheckSquare, title: "Checkpoints", time: "5 min", description: "how you'll know it's working, and what to tweak" }
  ];

  const afterCall = [
    { icon: FileText, title: "One-page plan (PDF)", description: "with your exact scene, prompts, and schedule" },
    { icon: Headphones, title: "Neville Daily Practice Kit", description: "PDF + 1 audio to keep you consistent" }
  ];

  const scrollToBooking = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What You'll Get In Your <span className="text-gradient">Free 30-Minute Session</span>
          </h2>
        </div>

        {/* During Call */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">In 30 minutes, we'll cover:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {duringCall.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard 
                  key={index}
                  hover
                  className="p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-secondary mb-1">{item.time}</div>
                  <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* After Call */}
        <GlassCard className="p-8 mb-8 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">You'll receive after the call:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {afterCall.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-white/5">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>

        <div className="text-center">
          <CTAButton variant="primary" onClick={scrollToBooking} className="inline-flex">
            Claim Your Free Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
