import { BaseCard } from "../../components/common/base-card";
import { MaterialCard } from "../../components/common/material-card";
import {
  bases,
  materials,
  type PreDesignedItem,
} from "./customizer-data";
import { PreDesignedCollection } from "./pre-designed-collection";
import { SectionLabel, StepActions, StepHeading } from "./step-shared";
import { CardContent } from "@/components/ui/card";

export function CanvasStep({
  selectedBase,
  selectedMaterial,
  onBaseChange,
  onMaterialChange,
  onPresetSelect,
  onNext,
}: {
  selectedBase: string;
  selectedMaterial: string;
  onBaseChange: (baseId: string) => void;
  onMaterialChange: (materialId: string) => void;
  onPresetSelect: (item: PreDesignedItem) => void;
  onNext: () => void;
}) {
  return (
    <>
      <StepHeading
        title="Choose Your Canvas"
        description="Select the base jewelry and your preferred metal finish."
      />
      <CardContent>
        <PreDesignedCollection onSelect={onPresetSelect} />

        <SectionLabel number={2} label="Select Base" />
        <div className="base-grid" role="radiogroup" aria-label="Select base jewelry type">
          {bases.map((option) => (
            <BaseCard
              key={option.id}
              id={option.id}
              name={option.name}
              description={option.description}
              imageUrl={option.imageUrl}
              isSelected={selectedBase === option.id}
              onSelect={onBaseChange}
            />
          ))}
        </div>

        <div className="material-label">
          <SectionLabel number={3} label="Select Material" />
        </div>
        <div className="material-row" role="radiogroup" aria-label="Select material">
          {materials.map((option) => (
            <MaterialCard
              key={option.id}
              id={option.id}
              name={option.name}
              description={option.description}
              swatch={option.swatch}
              isSelected={selectedMaterial === option.id}
              onSelect={onMaterialChange}
            />
          ))}
        </div>
      </CardContent>
      <StepActions nextLabel="Continue to Charms" onNext={onNext} />
    </>
  );
}
