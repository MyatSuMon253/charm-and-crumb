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
  materials,
  slots,
  type PlacedCharm,
  type TrayItem,
} from "./_components/customizer-data";
import { PageChrome } from "./_components/page-chrome";
import { PlacementStep } from "./_components/placement-step";
import { StepProgress } from "./_components/step-shared";

export default function Home() {
  const [step, setStep] = useState(1);
  const [selectedBase, setSelectedBase] = useState("bracelet");
  const [selectedMaterial, setSelectedMaterial] = useState("bronze");
  const [activeCollection, setActiveCollection] = useState("Cafe");
  const [tray, setTray] = useState<string[]>(["pizza", "pizza", "fries", "burger"]);
  const [placedCharms, setPlacedCharms] = useState<PlacedCharm[]>([
    { charmId: "pizza", slot: 0 },
    { charmId: "pizza", slot: 1 },
    { charmId: "fries", slot: 2 },
    { charmId: "burger", slot: 3 },
  ]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const base = bases.find((option) => option.id === selectedBase) ?? bases[0];
  const material = materials.find((option) => option.id === selectedMaterial) ?? materials[2];
  const filteredCharms = charms.filter((charm) => charm.collection === activeCollection);
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
  const charmsTotal = tray.reduce((sum, charmId) => sum + (findCharm(charmId)?.price ?? 0), 0);
  const total = base.price + material.price + charmsTotal;

  function addCharm(charmId: string) {
    setTray((current) => [...current, charmId]);
    setPlacedCharms((current) => {
      const nextSlot = slots.findIndex((_, index) => !current.some((placed) => placed.slot === index));
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
        const sourcePlacement = current.find((item) => item.slot === sourceSlot);
        if (!sourcePlacement) return current;

        return [
          ...current.filter(
            (item) => item.slot !== slot && item.slot !== sourceSlot,
          ),
          { charmId: sourcePlacement.charmId, slot },
        ];
      }

      const withoutSlot = current.filter((item) => item.slot !== slot);
      const existingIndex = withoutSlot.findIndex((item) => item.charmId === charmId);
      if (existingIndex >= 0) {
        return withoutSlot.map((item, index) => (index === existingIndex ? { charmId, slot } : item));
      }
      return [...withoutSlot, { charmId, slot }];
    });
  }

  function restartDesign() {
    setIsConfirmed(false);
    setStep(1);
  }

  return (
    <PageChrome>
      <section className="customizer" id="customizer" aria-label="Jewelry customizer">
        <StepProgress step={step} isConfirmed={isConfirmed} onStepChange={setStep} />

        <Card className={cn("panel", isConfirmed && "confirmation-panel")}>
          {isConfirmed ? (
            <ConfirmationStep base={base} material={material} charmCount={tray.length} onEdit={restartDesign} />
          ) : (
            <>
              {step === 1 && (
                <CanvasStep
                  selectedBase={selectedBase}
                  selectedMaterial={selectedMaterial}
                  onBaseChange={setSelectedBase}
                  onMaterialChange={setSelectedMaterial}
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
                  onConfirm={() => setIsConfirmed(true)}
                />
              )}
            </>
          )}
        </Card>
      </section>
    </PageChrome>
  );
}
