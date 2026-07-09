import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface MaterialCardProps {
  id: string;
  name: string;
  description: string;
  swatch: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

export function MaterialCard({
  id,
  name,
  description,
  swatch,
  isSelected = false,
  onSelect,
}: MaterialCardProps) {
  return (
    <Card
      className={cn(
        "group cursor-pointer rounded-lg border bg-(--cream) transition-all duration-200",
        "hover:border-(--warm-muted) hover:shadow-warm-ring",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--warm-muted) focus-visible:ring-offset-2",
        isSelected && "border-(--warm-muted) shadow-warm-ring",
        !isSelected && "border-(--line)"
      )}
      onClick={() => onSelect?.(id)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(id);
        }
      }}
    >
      <CardContent className="flex flex-col items-center gap-3 p-4 text-center">
        <span
          className="h-14 w-14 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]"
          style={{ background: swatch }}
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <strong className="text-[1.05rem] font-semibold">{name}</strong>
          <small className="text-[0.88rem] text-(--warm-muted)">
            {description}
          </small>
        </div>
      </CardContent>
    </Card>
  );
}
