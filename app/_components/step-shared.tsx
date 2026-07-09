import { Badge } from "@/components/ui/badge";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { stepLabels } from "./customizer-data";
import { Button } from "@/components/common/button";

export function StepProgress({
  step,
  isConfirmed,
  onStepChange,
}: {
  step: number;
  isConfirmed: boolean;
  onStepChange: (step: number) => void;
}) {
  return (
    <div className="steps" aria-label="Customization progress">
      {stepLabels.map((label, index) => {
        const number = index + 1;
        const isDone = isConfirmed || step > number;
        const isActive = !isConfirmed && step === number;

        return (
          <div className="step-wrap" key={label}>
            <Button
              type="button"
              size="icon"
              className={cn("step-dot", isActive && "active", isDone && "done")}
              onClick={() => {
                if (!isConfirmed) onStepChange(number);
              }}
              aria-current={isActive ? "step" : undefined}
            >
              {isDone ? "✓" : number}
            </Button>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function StepHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardHeader className="panel-heading">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
}

export function SectionLabel({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <div className="section-label">
      <Badge variant="secondary">{number}</Badge>
      <h3>{label}</h3>
    </div>
  );
}

export function StepActions({
  backLabel,
  nextLabel,
  isNextDisabled,
  onBack,
  onNext,
}: {
  backLabel?: string;
  nextLabel: string;
  isNextDisabled?: boolean;
  onBack?: () => void;
  onNext: () => void;
}) {
  return (
    <CardFooter className="footer-actions">
      {backLabel && onBack ? (
        <Button
          type="button"
          variant="ghost"
          className="text-button"
          onClick={onBack}
        >
          {backLabel}
        </Button>
      ) : (
        <span />
      )}
      <Button
        type="button"
        variant="primary"
        onClick={onNext}
        disabled={isNextDisabled}
      >
        {nextLabel}
      </Button>
    </CardFooter>
  );
}
