"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { CharmMark } from "./charm-mark";
import type {
  BaseOption,
  MaterialOption,
  PlacedCharm,
} from "./customizer-data";
import { findCharm, slots } from "./customizer-data";
import { Separator } from "@/components/ui/separator";

export function ConfirmationStep({
  base,
  material,
  charmCount,
  placedCharms,
  onEdit,
}: {
  base: BaseOption;
  material: MaterialOption;
  charmCount: number;
  placedCharms: PlacedCharm[];
  onEdit: () => void;
}) {
  const placedDesign = placedCharms
    .map((placedCharm) => ({
      ...placedCharm,
      charm: findCharm(placedCharm.charmId),
    }))
    .filter((placedCharm) => placedCharm.charm);

  function handleSaveDesignImage() {
    const canvas = document.createElement("canvas");
    const size = 900;
    const center = size / 2;
    const outerRadius = 275;
    const innerRadius = 145;
    const context = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    if (!context) return;

    context.fillStyle = "#fffdf8";
    context.fillRect(0, 0, size, size);

    context.beginPath();
    context.arc(center, center, outerRadius, 0, Math.PI * 2);
    context.fillStyle = "#fbfaf7";
    context.fill();
    context.strokeStyle = "#eee7dc";
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.setLineDash([8, 8]);
    context.arc(center, center, innerRadius, 0, Math.PI * 2);
    context.strokeStyle = "#d9cfc3";
    context.lineWidth = 2;
    context.stroke();
    context.setLineDash([]);

    placedDesign.forEach(({ charm, slot }) => {
      if (!charm) return;

      const slotPosition = slots[slot];
      if (!slotPosition) return;

      const x = (parseFloat(slotPosition.left) / 100) * size;
      const y = (parseFloat(slotPosition.top) / 100) * size;

      context.beginPath();
      context.arc(x, y, 48, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.fill();
      context.strokeStyle = "#eee5dc";
      context.lineWidth = 2;
      context.stroke();

      context.font = "40px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(charm.symbol, x, y + 2);
    });

    context.font = "32px Georgia";
    context.fillStyle = "#514236";
    context.textAlign = "center";
    context.fillText(`${material.name} ${base.name}`, center, 790);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "charm-and-crumb-design.png";
    link.click();
  }

  return (
    <section className="confirmation">
      <div className="success-badge" aria-hidden="true">
        ✓
      </div>
      <h2>Order Successful!</h2>
      <p>
        Your custom {material.name} {base.name} with {charmCount} adorable
        charms has been confirmed.
      </p>

      <div className="confirmation-details">
        <div className="confirmed-design-card">
          <div className={cn("confirmed-design-ring", base.visual)}>
            {placedDesign.map(({ charm, slot }, index) => {
              if (!charm) return null;

              const slotPosition = slots[slot];
              if (!slotPosition) return null;

              return (
                <span
                  className="confirmed-design-charm"
                  key={`${charm.id}-${slot}-${index}`}
                  style={{ top: slotPosition.top, left: slotPosition.left }}
                  aria-label={charm.name}
                >
                  <CharmMark charm={charm} />
                </span>
              );
            })}
          </div>
          <Button
            type="button"
            variant="outline"
            className="outline-button save-design-button"
            onClick={handleSaveDesignImage}
          >
            Save Design Image
          </Button>
        </div>

        <div className="confirmation-copy">
          <div>
            <span>Estimated Delivery</span>
            <strong>7 to 10 days</strong>
          </div>
          <p>
            Thank you for choosing Charm & Crumb. We can&apos;t wait to craft
            this tiny treat-filled piece just for you.
          </p>
        </div>
      </div>
    </section>
  );
}
