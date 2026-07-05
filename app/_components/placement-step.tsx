import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { CharmMark } from "./charm-mark";
import type {
  BaseOption,
  MaterialOption,
  PlacedCharm,
  TrayItem,
} from "./customizer-data";
import { findCharm, slots } from "./customizer-data";
import { OrderSummary } from "./order-summary";
import { StepActions, StepHeading } from "./step-shared";

export function PlacementStep({
  base,
  material,
  tray,
  trayItems,
  placedCharms,
  charmsTotal,
  total,
  onPlaceCharm,
  onBack,
  onConfirm,
}: {
  base: BaseOption;
  material: MaterialOption;
  tray: string[];
  trayItems: TrayItem[];
  placedCharms: PlacedCharm[];
  charmsTotal: number;
  total: number;
  onPlaceCharm: (charmId: string, slot: number) => void;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <>
      <StepHeading
        title="Review Your Piece"
        description="Drag charms to place them, then check the final order."
      />
      <CardContent>
        <div className="review-layout">
          <div className="piece-preview" aria-label="Drag-and-drop charm placement area">
            <div className={cn("piece-ring", base.visual)}>
              {slots.map((slot, index) => {
                const placed = placedCharms.find((item) => item.slot === index);
                const charm = placed ? findCharm(placed.charmId) : undefined;

                return (
                  <button
                    className="drop-slot"
                    key={index}
                    style={{ top: slot.top, left: slot.left }}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                      const charmId = event.dataTransfer.getData("text/plain");
                      if (charmId) onPlaceCharm(charmId, index);
                    }}
                    aria-label={`Placement slot ${index + 1}`}
                  >
                    {charm ? <CharmMark charm={charm} /> : <span className="slot-dot" />}
                  </button>
                );
              })}
            </div>
            <div className="drag-tray">
              {trayItems.map(({ charm }) => (
                <Button
                  type="button"
                  key={charm.id}
                  draggable
                  variant="outline"
                  onDragStart={(event) => event.dataTransfer.setData("text/plain", charm.id)}
                  className="drag-chip"
                >
                  <CharmMark charm={charm} />
                  {charm.name}
                </Button>
              ))}
            </div>
          </div>

          <OrderSummary
            base={base}
            material={material}
            tray={tray}
            charmsTotal={charmsTotal}
            total={total}
          />
        </div>
      </CardContent>
      <Separator />
      <StepActions
        backLabel="Back to Charms"
        nextLabel="Add to Cart"
        onBack={onBack}
        onNext={onConfirm}
      />
    </>
  );
}
