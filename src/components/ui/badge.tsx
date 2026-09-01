import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-2xs px-2 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        secondary:
          "bg-secondary-container text-foreground border border-border/60",
        destructive:
          "bg-destructive/10 text-destructive border border-destructive/30",
        outline:
          "text-foreground border border-border",
        secure:
          "bg-badge-secure-bg text-badge-secure-text border border-badge-secure-border",
        immediate:
          "bg-badge-immediate-bg text-badge-immediate-text border border-badge-immediate-border",
        warning:
          "bg-badge-warning-bg text-badge-warning-text border border-badge-warning-border",
        tactical:
          "bg-badge-tactical-bg text-badge-tactical-text border border-badge-tactical-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: string;
}

function Badge({ className, variant, dot, dotColor, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            dotColor ||
              (variant === "secure"
                ? "bg-badge-secure-dot"
                : variant === "immediate" || variant === "destructive"
                ? "bg-badge-immediate-dot"
                : variant === "warning"
                ? "bg-badge-warning-dot"
                : "bg-primary")
          )}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
