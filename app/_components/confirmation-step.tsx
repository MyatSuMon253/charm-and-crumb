import { Button } from "@/components/ui/button";

import type { BaseOption, MaterialOption } from "./customizer-data";

export function ConfirmationStep({
  base,
  material,
  charmCount,
  onEdit,
}: {
  base: BaseOption;
  material: MaterialOption;
  charmCount: number;
  onEdit: () => void;
}) {
  return (
    <section className="confirmation">
      <div className="success-badge">✓</div>
      <h2>Added to Cart!</h2>
      <p>
        Your custom {material.name} {base.name} with {charmCount} adorable charms is ready for
        checkout.
      </p>
      <div className="button-row center">
        <Button type="button" variant="outline" className="outline-button" onClick={onEdit}>
          Edit Design
        </Button>
        <Button type="button" className="primary-button">
          Checkout Now
        </Button>
      </div>
    </section>
  );
}
