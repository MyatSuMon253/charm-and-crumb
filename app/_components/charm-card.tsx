import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { CharmMark } from "./charm-mark";
import type { Charm } from "./customizer-data";

interface CharmCardProps {
  charm: Charm;
  onAddCharm: (charmId: string) => void;
}

export function CharmCard({ charm, onAddCharm }: CharmCardProps) {
  const handleAddCharm = () => {
    onAddCharm(charm.id);
  };

  return (
    <Card className="charm-card">
      <CardContent>
        <CharmMark charm={charm} />
        <div className="charm-card-copy">
          <h3>{charm.name}</h3>
          <p>${charm.price.toFixed(2)}</p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="add-button"
          onClick={handleAddCharm}
        >
          + Add
        </Button>
      </CardContent>
    </Card>
  );
}
