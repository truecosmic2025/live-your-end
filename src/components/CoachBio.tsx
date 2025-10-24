import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { CheckCircle } from "lucide-react";

export const CoachBio = () => {
  const coachingPoints = [
    { label: "Practical first", description: "clear scene, clear routine, clear check-ins" },
    { label: "Gentle correction", description: "we fine-tune inner speech and state without shame" },
    { label: "Results-minded", description: "you'll leave with a plan that fits real life" }
  ];

  const scrollToBooking = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <GlassCard className="p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Coach Image */}
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 mx-auto max-w-sm">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="text-6xl">👤</span>
                    </div>
                    <p className="text-sm text-foreground/60">Robert Meade</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Meet Your Coach — <span className="text-gradient">Robert Meade</span>
              </h2>
              
              <p className="text-lg text-foreground/90 mb-6">
                I'm Robert, an imagination coach at Truecosmic Academy. My specialty is translating Neville Goddard's{" "}
                <strong className="text-primary">Live in the End</strong> into a simple, daily practice you can start{" "}
                <strong>tonight</strong>.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold mb-3">How I coach:</h3>
                {coachingPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-primary">{point.label}:</span>{" "}
                      <span className="text-foreground/80">{point.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 mb-8 border-l-4 border-secondary">
                <p className="italic text-foreground/90">
                  "Assume the feeling of the wish fulfilled and continue feeling it is fulfilled until that which you feel objectifies itself."
                </p>
                <p className="text-sm text-foreground/70 mt-2">— Neville Goddard</p>
              </div>

              <CTAButton variant="primary" onClick={scrollToBooking} className="w-full">
                Book with Robert — Free 30 Minutes
              </CTAButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
