export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold mb-2">Truecosmic Academy</h3>
          <p className="text-sm text-foreground/70">Live in the End Coaching</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70 mb-8">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
        </div>

        <div className="text-center text-sm text-foreground/60">
          <p className="mb-2">© {currentYear} Truecosmic Academy. All rights reserved.</p>
          <p className="text-xs">
            This is coaching, not therapy. Seek licensed care for mental health concerns.
          </p>
        </div>
      </div>
    </footer>
  );
};
