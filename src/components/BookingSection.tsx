import { GlassCard } from "./GlassCard";
import { MessageSquare } from "lucide-react";

export const BookingSection = () => {
  return (
    <section id="book" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Book Your Free Session</span>
          </h2>
          <p className="text-xl text-foreground/80">Start a conversation to see if we're a fit</p>
        </div>

        <GlassCard className="p-8 md:p-12 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Let's Talk About Your Goals
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Click the chat icon to start a conversation. Our AI assistant will ask you a few questions 
              to understand your needs and help you schedule your free session.
            </p>
            <div className="glass-card p-6 text-left">
              <p className="text-sm font-semibold text-foreground/90 mb-3">What to expect:</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quick qualifying questions about your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized recommendations based on your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Direct calendar access to book your free session</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
