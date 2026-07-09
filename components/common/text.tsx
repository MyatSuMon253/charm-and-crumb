import { cn } from "@/lib/utils";

type TextVariant =
  | "main-title"
  | "subtitle"
  | "name"
  | "description"
  | "muted"
  | "label";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

type TextWeight = "normal" | "medium" | "semibold" | "bold";

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small" | "strong";
  className?: string;
}

const variantStyles: Record<TextVariant, string> = {
  "main-title": "font-serif text-(--brown)",
  subtitle: "text-(--warm-muted)",
  name: "text-(--foreground)",
  description: "text-(--warm-muted)",
  muted: "text-(--warm-muted) text-[0.88rem]",
  label: "text-(--warm-muted) text-[0.78rem] font-bold uppercase tracking-[0.16em]",
};

const sizeStyles: Record<TextSize, string> = {
  xs: "text-[0.72rem]",
  sm: "text-[0.88rem]",
  base: "text-[1rem]",
  lg: "text-[1.08rem]",
  xl: "text-[1.28rem]",
  "2xl": "text-[1.75rem]",
};

const weightStyles: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const defaultSize: Record<TextVariant, TextSize> = {
  "main-title": "2xl",
  subtitle: "lg",
  name: "base",
  description: "sm",
  muted: "sm",
  label: "xs",
};

const defaultWeight: Record<TextVariant, TextWeight> = {
  "main-title": "normal",
  subtitle: "normal",
  name: "semibold",
  description: "normal",
  muted: "normal",
  label: "bold",
};

export function Text({
  children,
  variant = "name",
  size,
  weight,
  as,
  className,
}: TextProps) {
  const Component = as || "span";
  const resolvedSize = size || defaultSize[variant];
  const resolvedWeight = weight || defaultWeight[variant];

  return (
    <Component
      className={cn(
        variantStyles[variant],
        sizeStyles[resolvedSize],
        weightStyles[resolvedWeight],
        className,
      )}
    >
      {children}
    </Component>
  );
}
