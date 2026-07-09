import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface BaseCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

export function BaseCard({
  id,
  name,
  description,
  imageUrl,
  isSelected = false,
  onSelect,
}: BaseCardProps) {
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
      <CardContent className="flex flex-col items-center gap-2 p-3.5 text-center">
        <div className="relative h-[150px] w-full overflow-hidden rounded">
          <Image
            src={imageUrl}
            alt={`${name} preview`}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <strong className="text-[1.05rem] font-semibold">{name}</strong>
        <small className="text-[0.88rem] text-(--warm-muted)">{description}</small>
      </CardContent>
    </Card>
  );
}
