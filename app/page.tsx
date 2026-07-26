"use client";

import { useMemo, useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { CanvasStep } from "./_components/canvas-step";
import { CharmsStep } from "./_components/charms-step";
import { ConfirmationStep } from "./_components/confirmation-step";
import {
  bases,
  charms,
  findCharm,
  getDesignTotal,
  materials,
  slots,
  type OrderDesign,
  type OrderRecord,
  type PlacedCharm,
  type PreDesignedItem,
  type TrayItem,
} from "./_components/customizer-data";
import { HeroSection } from "./_components/hero-section";
import { OrderHistory } from "./_components/order-history";
import { OrderReviewStep } from "./_components/order-review-step";
import { PageChrome } from "./_components/page-chrome";
import { PlacementStep } from "./_components/placement-step";
import { StepProgress } from "./_components/step-shared";

export default function Home() {
  const [step, setStep] = useState(1);
  const [selectedBase, setSelectedBase] = useState("bracelet");
  const [selectedMaterial, setSelectedMaterial] = useState("bronze");
  const [activeCollection, setActiveCollection] = useState("Cafe");
  const [tray, setTray] = useState<string[]>([
    "pizza",
    "pizza",
    "fries",
    "burger",
  ]);
  const [placedCharms, setPlacedCharms] = useState<PlacedCharm[]>([
    { charmId: "pizza", slot: 0 },
    { charmId: "pizza", slot: 1 },
    { charmId: "fries", slot: 2 },
    { charmId: "burger", slot: 3 },
  ]);
  const [orderItems, setOrderItems] = useState<OrderDesign[]>([]);
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderRecord | null>(null);

  const base = bases.find((option) => option.id === selectedBase) ?? bases[0];
  const material =
    materials.find((option) => option.id === selectedMaterial) ?? materials[2];
  const filteredCharms = charms.filter(
    (charm) => charm.collection === activeCollection,
  );
  const trayItems = useMemo(
    () =>
      tray.reduce<TrayItem[]>((items, charmId) => {
        const charm = findCharm(charmId);
        if (!charm) return items;
        const existing = items.find((item) => item.charm.id === charmId);
        if (existing) existing.quantity += 1;
        else items.push({ charm, quantity: 1 });
        return items;
      }, []),
    [tray],
  );
  const charmsTotal = tray.reduce(
    (sum, charmId) => sum + (findCharm(charmId)?.price ?? 0),
    0,
  );
  const total = base.price + material.price + charmsTotal;

  function applyPreDesignedItem(item: PreDesignedItem) {
    setSelectedBase(item.baseId);
    setSelectedMaterial(item.materialId);
    setTray([...item.charmIds]);
    setPlacedCharms(item.placedCharms.map((placedCharm) => ({ ...placedCharm })));
    setActiveCollection(findCharm(item.charmIds[0])?.collection ?? "Cafe");
    setStep(2);
  }

  function addCharm(charmId: string) {
    setTray((current) => [...current, charmId]);
    setPlacedCharms((current) => {
      const nextSlot = slots.findIndex(
        (_, index) => !current.some((placed) => placed.slot === index),
      );
      if (nextSlot === -1) return current;
      return [...current, { charmId, slot: nextSlot }];
    });
  }

  function removeCharm(charmId: string) {
    setTray((current) => {
      const index = current.lastIndexOf(charmId);
      if (index === -1) return current;
      return current.filter((_, itemIndex) => itemIndex !== index);
    });
    setPlacedCharms((current) => {
      const index = current.map((item) => item.charmId).lastIndexOf(charmId);
      if (index === -1) return current;
      return current.filter((_, itemIndex) => itemIndex !== index);
    });
  }

  function placeCharm(charmId: string, slot: number, sourceSlot?: number) {
    setPlacedCharms((current) => {
      if (sourceSlot === slot) return current;

      if (sourceSlot !== undefined) {
        const sourcePlacement = current.find(
          (item) => item.slot === sourceSlot,
        );
        if (!sourcePlacement) return current;

        return [
          ...current.filter(
            (item) => item.slot !== slot && item.slot !== sourceSlot,
          ),
          { charmId: sourcePlacement.charmId, slot },
        ];
      }

      const withoutSlot = current.filter((item) => item.slot !== slot);
      const existingIndex = withoutSlot.findIndex(
        (item) => item.charmId === charmId,
      );
      if (existingIndex >= 0) {
        return withoutSlot.map((item, index) =>
          index === existingIndex ? { charmId, slot } : item,
        );
      }
      return [...withoutSlot, { charmId, slot }];
    });
  }

  function resetCurrentDesign() {
    setSelectedBase("bracelet");
    setSelectedMaterial("bronze");
    setActiveCollection("Cafe");
    setTray([]);
    setPlacedCharms([]);
    setStep(1);
  }

  function addCurrentDesignToOrder() {
    const nextItem: OrderDesign = {
      id: `design-${Date.now()}-${orderItems.length + 1}`,
      baseId: selectedBase,
      materialId: selectedMaterial,
      charmIds: [...tray],
      placedCharms: placedCharms.map((placedCharm) => ({ ...placedCharm })),
      total: getDesignTotal({
        baseId: selectedBase,
        materialId: selectedMaterial,
        charmIds: tray,
      }),
    };

    setOrderItems((current) => [...current, nextItem]);
    setStep(4);
  }

  function addAnotherDesign() {
    resetCurrentDesign();
  }

  function removeOrderItem(designId: string) {
    setOrderItems((current) =>
      current.filter((item) => item.id !== designId),
    );
  }

  function confirmOrder() {
    if (orderItems.length === 0) return;

    const createdAt = new Date().toISOString();
    const orderNumber = String(orders.length + 1).padStart(3, "0");
    const datePart = createdAt.slice(0, 10).replaceAll("-", "");
    const order: OrderRecord = {
      id: `CC-${datePart}-${orderNumber}`,
      createdAt,
      status: "Crafting",
      items: orderItems.map((item) => ({
        ...item,
        charmIds: [...item.charmIds],
        placedCharms: item.placedCharms.map((placedCharm) => ({
          ...placedCharm,
        })),
      })),
      total: orderItems.reduce((sum, item) => sum + item.total, 0),
    };

    setOrders((current) => [order, ...current]);
    setConfirmedOrder(order);
    setOrderItems([]);
  }

  function startNewOrder() {
    setConfirmedOrder(null);
    setOrderItems([]);
    resetCurrentDesign();
  }

  function changeStep(nextStep: number) {
    if (nextStep === 3 && tray.length === 0) return;
    if (nextStep === 4 && orderItems.length === 0) return;
    setStep(nextStep);
  }

  return (
    <PageChrome>
      <HeroSection />

      <section
        className="customizer"
        id="customizer"
        aria-label="Jewelry customizer"
      >
        <StepProgress
          step={step}
          isConfirmed={Boolean(confirmedOrder)}
          onStepChange={changeStep}
        />

        <Card className={cn("panel", confirmedOrder && "confirmation-panel")}>
          {confirmedOrder ? (
            <ConfirmationStep
              order={confirmedOrder}
              onStartNewOrder={startNewOrder}
            />
          ) : (
            <>
              {step === 1 && (
                <CanvasStep
                  selectedBase={selectedBase}
                  selectedMaterial={selectedMaterial}
                  onBaseChange={setSelectedBase}
                  onMaterialChange={setSelectedMaterial}
                  onPresetSelect={applyPreDesignedItem}
                  onNext={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <CharmsStep
                  activeCollection={activeCollection}
                  trayCount={tray.length}
                  trayItems={trayItems}
                  filteredCharms={filteredCharms}
                  onCollectionChange={setActiveCollection}
                  onAddCharm={addCharm}
                  onRemoveCharm={removeCharm}
                  onBack={() => setStep(1)}
                  onNext={() => setStep(3)}
                />
              )}
              {step === 3 && (
                <PlacementStep
                  base={base}
                  material={material}
                  tray={tray}
                  trayItems={trayItems}
                  placedCharms={placedCharms}
                  charmsTotal={charmsTotal}
                  total={total}
                  onPlaceCharm={placeCharm}
                  onBack={() => setStep(2)}
                  onConfirm={addCurrentDesignToOrder}
                />
              )}
              {step === 4 && (
                <OrderReviewStep
                  items={orderItems}
                  onRemoveItem={removeOrderItem}
                  onAddAnother={addAnotherDesign}
                  onConfirm={confirmOrder}
                />
              )}
            </>
          )}
        </Card>
      </section>

      <OrderHistory orders={orders} />
    </PageChrome>
  );
}
