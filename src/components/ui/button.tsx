import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        actionGradient:
          "btn-action-gradient shadow-xs",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-border bg-card hover:bg-muted text-foreground shadow-2xs",
        secondary:
          "bg-secondary-container text-foreground hover:bg-secondary-container/80 border border-border/60",
        ghost:
          "hover:bg-muted text-foreground hover:text-foreground",
        link:
          "text-primary underline-offset-4 hover:underline lowercase font-normal",
        inverted:
          "bg-btn-inverted-bg text-btn-inverted-text hover:bg-btn-inverted-hover-bg",
        secure:
          "bg-badge-secure-bg text-badge-secure-text border border-badge-secure-border hover:opacity-90",
        warning:
          "bg-badge-warning-bg text-badge-warning-text border border-badge-warning-border hover:opacity-90",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded px-3 text-[11px]",
        lg: "h-11 rounded px-6 text-sm",
        icon: "h-9 w-9",
        iconSm: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
