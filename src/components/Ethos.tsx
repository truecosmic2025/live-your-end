import { GlassCard } from "./GlassCard";
import { Shield } from "lucide-react";

export const Ethos = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <GlassCard className="p-8 animate-fade-in">
          <div className="flex gap-4 items-start">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Ethos & Safety</h3>
              <p className="text-foreground/80">
                We care about <strong>outcomes and emotional wellbeing</strong>. Guidance is{" "}
                <strong>gentle, non-judgmental</strong>, and tailored to real life. Please seek licensed 
                care for medical or mental-health concerns.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
