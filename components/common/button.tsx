import {
  Button as ButtonPrimitive,
  buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const customButtonVariants = cva(buttonVariants(), {
  variants: {
    variant: {
      primary:
        "bg-(--brown) border border-(--brown) text-white hover:brightness-85 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-transparent border border-(--brown) text-(--brown) hover:bg-(--brown) hover:text-white",
      outline:
        "bg-transparent border border-(--line) text-(--warm-muted) hover:border-(--warm-muted) hover:text-(--brown)",
      ghost: "bg-transparent border-0 text-(--warm-muted) hover:text-(--brown)",
    },
    size: {
      sm: "px-6 py-3 text-[1rem] min-w-[140px]",
      md: "px-10 py-5 text-[1.1rem] min-w-[210px]",
      lg: "px-14 py-7 text-[1.35rem] min-w-[250px]",
      icon: "p-3 min-w-0",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

type ButtonPrimitiveProps = React.ComponentProps<typeof ButtonPrimitive>;

type IconSize = "sm" | "md" | "lg";

interface ButtonProps
  extends
    Omit<ButtonPrimitiveProps, "variant" | "size">,
    VariantProps<typeof customButtonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: IconSize;
}

const iconSizeStyles: Record<IconSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  iconSize = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(customButtonVariants({ variant, size }), className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={cn("mr-2 inline-flex shrink-0", iconSizeStyles[iconSize])}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={cn("ml-2 inline-flex shrink-0", iconSizeStyles[iconSize])}>{icon}</span>
      )}
    </ButtonPrimitive>
  );
}
