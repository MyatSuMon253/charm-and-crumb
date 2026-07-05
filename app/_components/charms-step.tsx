import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CharmMark } from "./charm-mark";
import type { Charm, TrayItem } from "./customizer-data";
import { collections } from "./customizer-data";
import { StepActions, StepHeading } from "./step-shared";

export function CharmsStep({
  activeCollection,
  trayCount,
  trayItems,
  filteredCharms,
  onCollectionChange,
  onAddCharm,
  onRemoveCharm,
  onBack,
  onNext,
}: {
  activeCollection: string;
  trayCount: number;
  trayItems: TrayItem[];
  filteredCharms: Charm[];
  onCollectionChange: (collection: string) => void;
  onAddCharm: (charmId: string) => void;
  onRemoveCharm: (charmId: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <>
      <StepHeading
        title="Curate Your Charms"
        description="Mix and match from our miniature food collections."
      />
      <CardContent>
        <div className="charm-layout" id="collections">
          <Tabs value={activeCollection} onValueChange={onCollectionChange}>
            <TabsList className="tabs" aria-label="Charm collections">
              {collections.map((collection) => (
                <TabsTrigger key={collection} value={collection}>
                  {collection}
                </TabsTrigger>
              ))}
            </TabsList>
            {collections.map((collection) => (
              <TabsContent key={collection} value={collection}>
                <div className="charms-grid">
                  {filteredCharms.map((charm) => (
                    <Card className="charm-card" key={charm.id}>
                      <CardContent>
                        <CharmMark charm={charm} />
                        <h3>{charm.name}</h3>
                        <Button
                          type="button"
                          variant="outline"
                          className="add-button"
                          onClick={() => onAddCharm(charm.id)}
                        >
                          + Add
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="tray" aria-label="Your charm tray">
            <CardHeader>
              <CardTitle>▣ Your Tray</CardTitle>
              <Badge variant="secondary">{trayCount}</Badge>
            </CardHeader>
            <CardContent className="tray-list">
              {trayItems.length === 0 ? (
                <p className="empty-note">Add charms to begin your piece.</p>
              ) : (
                trayItems.map(({ charm, quantity }) => (
                  <div className="tray-item" key={charm.id}>
                    <CharmMark charm={charm} />
                    <div>
                      <strong>{charm.name}</strong>
                      <small>
                        {charm.collection}
                        {quantity > 1 ? ` × ${quantity}` : ""}
                      </small>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveCharm(charm.id)}
                      aria-label={`Remove ${charm.name}`}
                    >
                      −
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </CardContent>
      <Separator />
      <StepActions
        backLabel="Back"
        nextLabel="Review & Place"
        isNextDisabled={trayCount === 0}
        onBack={onBack}
        onNext={onNext}
      />
    </>
  );
}
