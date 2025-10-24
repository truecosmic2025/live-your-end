export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-primary/20 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-display font-bold mb-3 text-primary">Truecosmic Academy</h3>
          <p className="text-foreground/70">Live in the End Coaching</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm mb-10">
          <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-200">Privacy</a>
          <span className="text-foreground/30">•</span>
          <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-200">Terms</a>
          <span className="text-foreground/30">•</span>
          <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-200">Disclaimer</a>
        </div>

        <div className="text-center text-sm text-foreground/60">
          <p className="mb-3">© {currentYear} Truecosmic Academy. All rights reserved.</p>
          <p className="text-xs text-foreground/50 max-w-2xl mx-auto">
            This is coaching, not therapy. Please seek licensed care for medical or mental health concerns.
          </p>
        </div>
      </div>
    </footer>
  );
};
