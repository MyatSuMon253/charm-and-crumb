import type { Charm } from "./customizer-data";

export function CharmMark({ charm }: { charm: Charm }) {
  return (
    <span className="charm-mark" aria-hidden="true">
      <span>{charm.symbol}</span>
    </span>
  );
}
