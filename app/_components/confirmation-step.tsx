"use client";

import { Button } from "@/components/common/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { BaseSilhouette } from "./base-silhouette";
import { CharmMark } from "./charm-mark";
import {
  findBase,
  findCharm,
  findMaterial,
  slots,
  type OrderRecord,
} from "./customizer-data";

export function ConfirmationStep({
  order,
  onStartNewOrder,
}: {
  order: OrderRecord;
  onStartNewOrder: () => void;
}) {
  const primaryDesign = order.items[0];
  const base = primaryDesign ? findBase(primaryDesign.baseId) : undefined;
  const material = primaryDesign
    ? findMaterial(primaryDesign.materialId)
    : undefined;
  const placedDesign =
    primaryDesign?.placedCharms
      .map((placedCharm) => ({
        ...placedCharm,
        charm: findCharm(placedCharm.charmId),
      }))
      .filter((placedCharm) => placedCharm.charm) ?? [];

  if (!primaryDesign || !base || !material) return null;

  const baseName = base.name;
  const materialName = material.name;

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
    context.fillText(`${materialName} ${baseName}`, center, 790);
    context.font = "22px Arial";
    context.fillText(order.id, center, 830);

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${order.id.toLowerCase()}-design.png`;
    link.click();
  }

  return (
    <section className="confirmation">
      <div className="success-badge" aria-hidden="true">
        ✓
      </div>
      <Badge variant="secondary">{order.status}</Badge>
      <h2>Order Successful!</h2>
      <p>
        {order.items.length}{" "}
        {order.items.length === 1 ? "custom design has" : "custom designs have"}{" "}
        been confirmed.
      </p>

      <div className="confirmation-details">
        <div className="confirmed-design-card">
          <div className={cn("confirmed-design-ring", base.visual)}>
            <BaseSilhouette base={base} />
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
            variant="secondary"
            size="sm"
            className="min-h-11 w-full"
            onClick={handleSaveDesignImage}
          >
            Save First Design Image
          </Button>
        </div>

        <div className="confirmation-copy">
          <div>
            <span>Order Reference</span>
            <strong>{order.id}</strong>
          </div>
          <div>
            <span>Estimated Delivery</span>
            <strong>7 to 10 days</strong>
          </div>
          <div className="flex flex-col gap-3">
            <span>Order Items</span>
            <ul className="flex flex-col gap-2">
              {order.items.map((item, index) => {
                const itemBase = findBase(item.baseId);
                const itemMaterial = findMaterial(item.materialId);

                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <span>
                      Design {index + 1}: {itemMaterial?.name} {itemBase?.name}
                    </span>
                    <strong>${item.total.toFixed(2)}</strong>
                  </li>
                );
              })}
            </ul>
            <Separator />
            <div className="flex items-center justify-between gap-3 p-0">
              <span>Total</span>
              <strong>${order.total.toFixed(2)}</strong>
            </div>
          </div>
          <p>
            Thank you for choosing Charm & Crumb. Track this order in your order
            history while we craft every tiny detail.
          </p>
          <div className="button-row">
            <Button
              type="button"
              variant="primary"
              size="sm"
              className="min-h-11 w-full"
              onClick={onStartNewOrder}
            >
              Start Another Order
            </Button>
            <Button
              render={<a href="#orders" />}
              nativeButton={false}
              variant="outline"
              size="sm"
              className="min-h-11 w-full"
            >
              View Order History
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
