import { GlassCard } from "./GlassCard";
import { Calendar } from "lucide-react";

export const BookingSection = () => {
  return (
    <section id="book" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Book Your Free Session</span>
          </h2>
          <p className="text-xl text-foreground/80">Choose a time that works for you</p>
        </div>

        <GlassCard className="p-8 animate-fade-in">
          {/* Calendly Embed Placeholder */}
          <div className="min-h-[600px] flex flex-col items-center justify-center text-center">
            <Calendar className="w-20 h-20 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Calendly Integration</h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              To activate the booking calendar, add your Calendly embed code to this section.
            </p>
            <div className="glass-card p-6 text-left max-w-2xl">
              <p className="text-sm text-foreground/80 mb-2">
                <strong>Instructions for developer:</strong>
              </p>
              <ol className="text-sm text-foreground/70 space-y-2 list-decimal list-inside">
                <li>Get your Calendly embed code from your account</li>
                <li>Replace this placeholder div with the Calendly widget</li>
                <li>Or use the Calendly React component if preferred</li>
                <li>Set the env variable VITE_CALENDLY_URL in .env.local</li>
              </ol>
            </div>
          </div>

          {/* Alternative: Simple Contact Form */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-xl font-semibold mb-4 text-center">Or Contact Us Directly</h4>
            <form className="space-y-4 max-w-md mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="goal" className="block text-sm font-medium mb-2">Primary Goal</label>
                <select
                  id="goal"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select your focus...</option>
                  <option value="love">Love & Relationships</option>
                  <option value="money">Money & Career</option>
                  <option value="peace">Peace & Confidence</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Biggest Sticking Point</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us briefly about your main challenge..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                Request Your Free Session
              </button>
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
