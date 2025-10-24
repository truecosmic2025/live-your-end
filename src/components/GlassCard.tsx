import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export const GlassCard = ({ hover = false, children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        hover ? "glass-card-hover" : "glass-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
