import { Trash2 } from "lucide-react";

import { Button } from "@/components/common/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  findBase,
  findCharm,
  findMaterial,
  type OrderDesign,
} from "./customizer-data";
import { StepHeading } from "./step-shared";

export function OrderReviewStep({
  items,
  onRemoveItem,
  onAddAnother,
  onConfirm,
}: {
  items: OrderDesign[];
  onRemoveItem: (designId: string) => void;
  onAddAnother: () => void;
  onConfirm: () => void;
}) {
  const combinedTotal = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <>
      <StepHeading
        title="Review Your Order"
        description="Check every design, add another piece, or confirm the complete order."
      />
      <CardContent className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
          {items.map((item, index) => {
            const base = findBase(item.baseId);
            const material = findMaterial(item.materialId);

            if (!base || !material) return null;

            return (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle>Design {index + 1}</CardTitle>
                      <CardDescription>
                        {material.name} {base.name}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">
                      {item.charmIds.length} charms
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {item.charmIds.map((charmId, charmIndex) => {
                    const charm = findCharm(charmId);
                    if (!charm) return null;

                    return (
                      <Badge
                        key={`${item.id}-${charmId}-${charmIndex}`}
                        variant="outline"
                      >
                        {charm.symbol} {charm.name}
                      </Badge>
                    );
                  })}
                </CardContent>
                <CardFooter className="justify-between gap-3">
                  <strong>${item.total.toFixed(2)}</strong>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="min-h-11"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    <Trash2 data-icon="inline-start" />
                    Remove
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Total</CardTitle>
            <CardDescription>
              {items.length} {items.length === 1 ? "design" : "designs"} in this
              order
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-4">
            <span className="text-(--warm-muted)">Combined total</span>
            <strong className="text-xl">${combinedTotal.toFixed(2)}</strong>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className="mt-8 flex flex-col gap-3 border-t border-(--line) pt-7 min-[621px]:flex-row min-[621px]:justify-between">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="min-h-11 w-full min-[621px]:w-auto"
          onClick={onAddAnother}
        >
          Add Another Design
        </Button>
        <Button
          type="button"
          variant="primary"
          size="sm"
          className="min-h-11 w-full min-[621px]:w-auto"
          disabled={items.length === 0}
          onClick={onConfirm}
        >
          Confirm {items.length > 1 ? `${items.length} Designs` : "Order"}
        </Button>
      </CardFooter>
    </>
  );
}
