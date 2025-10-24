import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Sparkles, CheckCircle } from "lucide-react";

export const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="container max-w-5xl mx-auto relative z-10">
        <GlassCard className="p-8 md:p-12 lg:p-16 text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Free 30-Minute Consultation</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Make Your End a <span className="text-gradient">Daily Reality</span> — Starting Tonight
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Book a <strong className="text-primary">free 30‑minute 1:1 consultation</strong> with Truecosmic's imagination coach{" "}
            <strong className="text-secondary">Robert Meade</strong>. In one focused session, you'll define your aim, craft a Neville‑style{" "}
            <strong>Live in the End</strong> scene, and leave with a <strong>7‑day plan</strong> you can actually follow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CTAButton variant="primary" onClick={scrollToBooking}>
              Book Your Free 1:1 Session
            </CTAButton>
            <CTAButton variant="glass">
              Get the Neville Daily Practice Kit (Free)
            </CTAButton>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/80 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Judgement-free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Neville Goddard methods</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Practical daily routines</span>
            </div>
          </div>

          <p className="text-sm text-foreground/70">
            No paywall. If a program fits, we'll mention it—<strong>no pressure</strong>.
          </p>
        </GlassCard>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};
