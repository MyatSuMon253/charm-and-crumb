"use client";

import { useState } from "react";
import type { DragEvent } from "react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
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
  onPlaceCharm: (charmId: string, slot: number, sourceSlot?: number) => void;
  onBack: () => void;
  onConfirm: () => void;
}) {
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const hasUnplacedCharms = tray.length > placedCharms.length;

  function handleDragStart({
    event,
    charmId,
    sourceSlot,
  }: {
    event: DragEvent<HTMLElement>;
    charmId: string;
    sourceSlot?: number;
  }) {
    const payload: CharmDragPayload = { charmId, sourceSlot };

    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify(payload));
    event.dataTransfer.setData("text/plain", charmId);
  }

  function handleDrop(event: DragEvent<HTMLButtonElement>, slot: number) {
    event.preventDefault();
    setActiveSlot(null);

    const payload = getCharmDragPayload(event);
    if (!payload.charmId) return;

    onPlaceCharm(payload.charmId, slot, payload.sourceSlot);
  }

  return (
    <>
      <StepHeading
        title="Review Your Piece"
        description="Almost ready! Here is how your custom piece looks."
      />
      <CardContent>
        <div className="review-layout">
          <div
            className="piece-preview"
            aria-label="Drag-and-drop charm placement area"
          >
            <div className={cn("piece-ring", base.visual)}>
              {slots.map((slot, index) => {
                const placed = placedCharms.find((item) => item.slot === index);
                const charm = placed ? findCharm(placed.charmId) : undefined;

                return (
                  <button
                    type="button"
                    className={cn(
                      "drop-slot",
                      charm && "is-filled",
                      activeSlot === index && "is-active",
                    )}
                    key={index}
                    style={{ top: slot.top, left: slot.left }}
                    draggable={Boolean(charm)}
                    onDragStart={(event) => {
                      if (!charm) return;

                      handleDragStart({
                        event,
                        charmId: charm.id,
                        sourceSlot: index,
                      });
                    }}
                    onDragOver={(event) => {
                      event.preventDefault();
                      event.dataTransfer.dropEffect = "move";
                      setActiveSlot(index);
                    }}
                    onDragLeave={() => setActiveSlot(null)}
                    onDrop={(event) => handleDrop(event, index)}
                    aria-label={
                      charm
                        ? `Move ${charm.name} from placement slot ${index + 1}`
                        : `Drop charm in placement slot ${index + 1}`
                    }
                  >
                    {charm ? (
                      <CharmMark charm={charm} />
                    ) : (
                      <span className="slot-dot" />
                    )}
                  </button>
                );
              })}
              <p className="piece-hint text-muted-foreground">
                Drag charms to place them
              </p>
            </div>
            {hasUnplacedCharms ? (
              <div className="drag-tray" aria-label="Available charms">
                {trayItems.map(({ charm, quantity }) => (
                  <Button
                    type="button"
                    key={charm.id}
                    draggable
                    variant="outline"
                    onDragStart={(event) =>
                      handleDragStart({ event, charmId: charm.id })
                    }
                    className="drag-chip"
                  >
                    <CharmMark charm={charm} />
                    <span>{charm.name}</span>
                    {quantity > 1 ? <small>× {quantity}</small> : null}
                  </Button>
                ))}
              </div>
            ) : null}
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
      <StepActions
        backLabel="Back to Charms"
        nextLabel="Confirm Order"
        onBack={onBack}
        onNext={onConfirm}
      />
    </>
  );
}

interface CharmDragPayload {
  charmId: string;
  sourceSlot?: number;
}

function getCharmDragPayload(
  event: DragEvent<HTMLElement>,
): Partial<CharmDragPayload> {
  const json = event.dataTransfer.getData("application/json");
  if (json) {
    try {
      return JSON.parse(json) as CharmDragPayload;
    } catch {
      return {};
    }
  }

  return { charmId: event.dataTransfer.getData("text/plain") };
}
