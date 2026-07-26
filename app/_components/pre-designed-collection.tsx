import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/common/button";

import { BaseSilhouette } from "./base-silhouette";
import { CharmMark } from "./charm-mark";
import {
  findBase,
  findCharm,
  findMaterial,
  getDesignTotal,
  preDesignedItems,
  type PreDesignedItem,
} from "./customizer-data";
import { SectionLabel } from "./step-shared";

export function PreDesignedCollection({
  onSelect,
}: {
  onSelect: (item: PreDesignedItem) => void;
}) {
  return (
    <section id="collections" aria-labelledby="pre-designed-heading">
      <SectionLabel number={1} label="Start With a Pre-Designed Piece" />
      <p
        id="pre-designed-heading"
        className="mb-4 text-sm leading-6 text-(--warm-muted)"
      >
        Choose a finished favorite as your starting point, then change any detail.
      </p>
      <div className="grid grid-cols-1 gap-4 min-[621px]:grid-cols-2 min-[901px]:grid-cols-3">
        {preDesignedItems.map((item) => {
          const base = findBase(item.baseId);
          const material = findMaterial(item.materialId);

          if (!base || !material) return null;

          return (
            <Card key={item.id} className="h-full">
              <CardHeader>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Badge variant="secondary">{base.name}</Badge>
                  <Badge variant="outline">{material.name}</Badge>
                </div>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-(--line) bg-(--cream)">
                  <BaseSilhouette base={base} />
                  <div className="absolute inset-x-[18%] bottom-[12%] flex justify-center gap-1">
                    {item.charmIds.map((charmId, index) => {
                      const charm = findCharm(charmId);
                      if (!charm) return null;

                      return (
                        <span
                          key={`${item.id}-${charmId}-${index}`}
                          className="grid size-10 place-items-center rounded-full border border-(--line) bg-card shadow-sm"
                        >
                          <CharmMark charm={charm} />
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-(--warm-muted)">
                    {item.charmIds.length} charms
                  </span>
                  <strong>${getDesignTotal(item).toFixed(2)}</strong>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="min-h-11 w-full"
                  onClick={() => onSelect(item)}
                >
                  Customize This Design
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
