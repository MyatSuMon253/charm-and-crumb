import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

import { bases, materials } from "./customizer-data";
import { SectionLabel, StepActions, StepHeading } from "./step-shared";

export function CanvasStep({
  selectedBase,
  selectedMaterial,
  onBaseChange,
  onMaterialChange,
  onNext,
}: {
  selectedBase: string;
  selectedMaterial: string;
  onBaseChange: (baseId: string) => void;
  onMaterialChange: (materialId: string) => void;
  onNext: () => void;
}) {
  return (
    <>
      <StepHeading
        title="Choose Your Canvas"
        description="Select the base jewelry and your preferred metal finish."
      />
      <CardContent>
        <SectionLabel number={1} label="Select Base" />
        <ToggleGroup
          value={[selectedBase]}
          onValueChange={(value) => {
            if (value[0]) onBaseChange(value[0]);
          }}
          className="base-grid"
        >
          {bases.map((option) => (
            <ToggleGroupItem
              key={option.id}
              value={option.id}
              className={cn("base-card", selectedBase === option.id && "selected")}
              aria-label={option.name}
            >
              <span
                className={cn("base-visual", option.visual)}
                style={{ backgroundImage: `url(${option.imageUrl})` }}
              />
              <strong>{option.name}</strong>
              <small>{option.detail}</small>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <div className="material-label">
          <SectionLabel number={2} label="Select Material" />
        </div>
        <ToggleGroup
          value={[selectedMaterial]}
          onValueChange={(value) => {
            if (value[0]) onMaterialChange(value[0]);
          }}
          className="material-row"
        >
          {materials.map((option) => (
            <ToggleGroupItem
              key={option.id}
              value={option.id}
              className={cn("material-card", selectedMaterial === option.id && "selected")}
              aria-label={option.name}
            >
              <span className="swatch" style={{ background: option.swatch }} />
              <span>{option.name}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardContent>
      <Separator />
      <StepActions nextLabel="Continue to Charms" onNext={onNext} />
    </>
  );
}
