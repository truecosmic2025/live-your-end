import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass";
  children: React.ReactNode;
}

export const CTAButton = ({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: CTAButtonProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl",
    glass: "glass-card text-foreground hover:bg-white/[0.15] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-xl border-2 border-white/30"
  };

  return (
    <Button
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </Button>
  );
};
