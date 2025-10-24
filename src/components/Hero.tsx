import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Sparkles, CheckCircle } from "lucide-react";
import { openChatbot } from "@/lib/chatbot";

export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10 text-center">
        <div className="mb-6 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Transform Your Reality in Just 21 Days</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in-up">
          Make Your End a{" "}
          <span className="text-primary">Daily Reality</span>
          <br />— Starting Tonight
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{
        animationDelay: '0.1s'
      }}>
          Book a <strong className="text-primary">free 30‑minute 1:1 consultation</strong> with Truecosmic's imagination coach{" "}
          <strong className="text-foreground">Robert Meade</strong>. In one focused session, you'll define your aim, craft a Neville‑style{" "}
          <strong className="text-foreground">clear plan</strong> scene, and leave with a <strong className="text-foreground">7‑day plan</strong> you can actually follow.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 text-sm animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>1,000+ Students Transformed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>21 Daily Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Certificate Included</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{
        animationDelay: '0.3s'
      }}>
          <CTAButton variant="primary" onClick={openChatbot} className="min-w-[280px]">
            Book Your Free 1:1 Session
          </CTAButton>
          <CTAButton variant="glass" onClick={openChatbot} className="min-w-[280px]">
            Watch Preview
          </CTAButton>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/70 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Instant Access</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Lifetime Support</span>
          </div>
        </div>
      </div>

      {/* Cosmic floating orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float opacity-50" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float opacity-50" style={{
      animationDelay: '2s'
    }} />
    </section>;
};