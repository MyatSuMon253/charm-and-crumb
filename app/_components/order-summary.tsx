import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { BaseOption, MaterialOption } from "./customizer-data";
import { findCharm } from "./customizer-data";

export function OrderSummary({
  base,
  material,
  tray,
  charmsTotal,
  total,
}: {
  base: BaseOption;
  material: MaterialOption;
  tray: string[];
  charmsTotal: number;
  total: number;
}) {
  return (
    <Card className="summary">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <dl>
          <div>
            <dt>Base</dt>
            <dd>{base.name}</dd>
          </div>
          <div>
            <dt>Material</dt>
            <dd>{material.name}</dd>
          </div>
          <div>
            <dt>Charms ({tray.length})</dt>
            <dd>${charmsTotal.toFixed(2)}</dd>
          </div>
        </dl>
        <ul>
          {tray.map((charmId, index) => {
            const charm = findCharm(charmId);
            if (!charm) return null;
            return <li key={`${charmId}-${index}`}>{charm.name}</li>;
          })}
        </ul>
        <div className="summary-total">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </CardContent>
    </Card>
  );
}
