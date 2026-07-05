"use client";

import { useMemo, useState } from "react";

interface BaseOption {
  id: string;
  name: string;
  detail: string;
  price: number;
  visual: string;
  imageUrl: string;
}

interface MaterialOption {
  id: string;
  name: string;
  price: number;
  swatch: string;
}

interface Charm {
  id: string;
  name: string;
  collection: string;
  price: number;
  symbol: string;
}

interface PlacedCharm {
  charmId: string;
  slot: number;
}

const bases: BaseOption[] = [
  {
    id: "bracelet",
    name: "Bracelet",
    detail: "Delicate bracelet",
    price: 25,
    visual: "chain",
    imageUrl:
      "https://images.unsplash.com/photo-1717605383946-96c6884c36b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYWNlbGV0fGVufDB8fDB8fHww",
  },
  {
    id: "necklace",
    name: "Necklace",
    detail: '18" chain',
    price: 30,
    visual: "necklace",
    imageUrl:
      "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lY2tsYWNlfGVufDB8fDB8fHww",
  },
  {
    id: "keychain",
    name: "Keychain",
    detail: "Sturdy clasp",
    price: 18,
    visual: "keychain",
    imageUrl:
      "https://media.istockphoto.com/id/471592646/photo/handmade-pendant-with-coffee-beans-and-biscuits.webp?a=1&b=1&s=612x612&w=0&k=20&c=9yl5_HW-3_O8UlhfEDUpxp8p9IqRuyhxh8c9l0rh3PU=",
  },
  {
    id: "ring",
    name: "Ring",
    detail: "Caly ring",
    price: 18,
    visual: "ring",
    imageUrl:
      "https://images.unsplash.com/photo-1647842080928-210079ffa7bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsYXklMjByaW5nfGVufDB8fDB8fHww",
  },
];

const materials: MaterialOption[] = [
  {
    id: "silver",
    name: "Silver",
    price: 0,
    swatch: "linear-gradient(135deg, #edf1f4, #9da6ad)",
  },
  {
    id: "gold",
    name: "Gold",
    price: 4,
    swatch: "linear-gradient(135deg, #fff3a8, #f0b90f)",
  },
  {
    id: "bronze",
    name: "Antique Bronze",
    price: 5,
    swatch: "linear-gradient(135deg, #c66b19, #7b3a10)",
  },
];

const collections = ["Cafe", "Fast Food", "Bakery", "Japanese", "Fruit"];

const charms: Charm[] = [
  {
    id: "coffee-cup",
    name: "Coffee Cup",
    collection: "Cafe",
    price: 5,
    symbol: "☕",
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    collection: "Cafe",
    price: 5,
    symbol: "🥤",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    collection: "Cafe",
    price: 5,
    symbol: "◎",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    collection: "Cafe",
    price: 5,
    symbol: "🍦",
  },
  {
    id: "pizza",
    name: "Pizza Slice",
    collection: "Fast Food",
    price: 5,
    symbol: "🍕",
  },
  {
    id: "fries",
    name: "Fries",
    collection: "Fast Food",
    price: 5,
    symbol: "🍟",
  },
  {
    id: "burger",
    name: "Burger",
    collection: "Fast Food",
    price: 5,
    symbol: "🍔",
  },
  {
    id: "pretzel",
    name: "Pretzel",
    collection: "Bakery",
    price: 5,
    symbol: "🥨",
  },
  {
    id: "croissant",
    name: "Croissant",
    collection: "Bakery",
    price: 5,
    symbol: "🥐",
  },
  {
    id: "cake",
    name: "Mini Cake",
    collection: "Bakery",
    price: 6,
    symbol: "🍰",
  },
  {
    id: "onigiri",
    name: "Onigiri",
    collection: "Japanese",
    price: 5,
    symbol: "🍙",
  },
  {
    id: "taiyaki",
    name: "Taiyaki",
    collection: "Japanese",
    price: 6,
    symbol: "魚",
  },
  {
    id: "dango",
    name: "Dango",
    collection: "Japanese",
    price: 5,
    symbol: "●●●",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    collection: "Fruit",
    price: 4,
    symbol: "🍓",
  },
  { id: "peach", name: "Peach", collection: "Fruit", price: 4, symbol: "🍑" },
  { id: "cherry", name: "Cherry", collection: "Fruit", price: 4, symbol: "🍒" },
];

const slots = [
  { top: "18%", left: "48%" },
  { top: "38%", left: "76%" },
  { top: "68%", left: "50%" },
  { top: "36%", left: "22%" },
  { top: "55%", left: "70%" },
  { top: "57%", left: "28%" },
];

function findCharm(charmId: string) {
  return charms.find((charm) => charm.id === charmId);
}

function CharmMark({ charm }: { charm: Charm }) {
  return (
    <span className="charm-mark" aria-hidden="true">
      <span>{charm.symbol}</span>
    </span>
  );
}

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
  const [isConfirmed, setIsConfirmed] = useState(false);

  const base = bases.find((option) => option.id === selectedBase) ?? bases[0];
  const material =
    materials.find((option) => option.id === selectedMaterial) ?? materials[2];
  const filteredCharms = charms.filter(
    (charm) => charm.collection === activeCollection,
  );
  const trayItems = useMemo(
    () =>
      tray.reduce<{ charm: Charm; quantity: number }[]>((items, charmId) => {
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

  function placeCharm(charmId: string, slot: number) {
    setPlacedCharms((current) => {
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

  function restartDesign() {
    setIsConfirmed(false);
    setStep(1);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#customizer"
          aria-label="Charm and Crumb home"
        >
          <span className="brand-badge">✦</span>
          <span>Charm & Crumb.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#customizer">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="intro-band" id="about">
        <div>
          <p className="eyebrow">Custom polymer clay jewelry</p>
          <h1>Your cozy jewelry customizer</h1>
          <p>
            Build a Bracelet, necklace, keychain, or phone strap with tiny food
            charms made for gifting, collecting, and daily wear.
          </p>
        </div>
        <div className="mini-preview" aria-hidden="true">
          <span>☕</span>
          <span>🍓</span>
          <span>🥐</span>
          <span>🍙</span>
        </div>
      </section>

      <section
        className="customizer"
        id="customizer"
        aria-label="Jewelry customizer"
      >
        <div className="steps" aria-label="Customization progress">
          {["Base & Material", "Choose Charms", "Placement"].map(
            (label, index) => {
              const number = index + 1;
              const isDone = isConfirmed || step > number;
              const isActive = !isConfirmed && step === number;
              return (
                <div className="step-wrap" key={label}>
                  <button
                    className={`step-dot ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}
                    onClick={() => {
                      if (!isConfirmed) setStep(number);
                    }}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {isDone ? "✓" : number}
                  </button>
                  <span>{label}</span>
                </div>
              );
            },
          )}
        </div>

        <div className={`panel ${isConfirmed ? "confirmation-panel" : ""}`}>
          {isConfirmed ? (
            <section className="confirmation">
              <div className="success-badge">✓</div>
              <h2>Added to Cart!</h2>
              <p>
                Your custom {material.name} {base.name} with {tray.length}{" "}
                adorable charms is ready for checkout.
              </p>
              <div className="button-row center">
                <button className="outline-button" onClick={restartDesign}>
                  Edit Design
                </button>
                <button className="primary-button">Checkout Now</button>
              </div>
            </section>
          ) : (
            <>
              {step === 1 && (
                <section>
                  <header className="panel-heading">
                    <h2>Choose Your Canvas</h2>
                    <p>
                      Select the base jewelry and your preferred metal finish.
                    </p>
                  </header>

                  <div className="section-label">
                    <span>1</span>
                    <h3>Select Base</h3>
                  </div>
                  <div className="base-grid">
                    {bases.map((option) => (
                      <button
                        className={`base-card ${selectedBase === option.id ? "selected" : ""}`}
                        key={option.id}
                        onClick={() => setSelectedBase(option.id)}
                      >
                        <span className={`base-visual ${option.visual}`} />
                        <strong>{option.name}</strong>
                        <small>{option.detail}</small>
                      </button>
                    ))}
                  </div>

                  <div className="section-label material-label">
                    <span>2</span>
                    <h3>Select Material</h3>
                  </div>
                  <div className="material-row">
                    {materials.map((option) => (
                      <button
                        className={`material-card ${selectedMaterial === option.id ? "selected" : ""}`}
                        key={option.id}
                        onClick={() => setSelectedMaterial(option.id)}
                      >
                        <span
                          className="swatch"
                          style={{ background: option.swatch }}
                        />
                        <span>{option.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="footer-actions">
                    <span />
                    <button
                      className="primary-button"
                      onClick={() => setStep(2)}
                    >
                      Continue to Charms
                    </button>
                  </div>
                </section>
              )}

              {step === 2 && (
                <section>
                  <header className="panel-heading">
                    <h2>Curate Your Charms</h2>
                    <p>Mix and match from our miniature food collections.</p>
                  </header>

                  <div className="charm-layout" id="collections">
                    <div>
                      <div
                        className="tabs"
                        role="tablist"
                        aria-label="Charm collections"
                      >
                        {collections.map((collection) => (
                          <button
                            className={
                              activeCollection === collection ? "active" : ""
                            }
                            key={collection}
                            onClick={() => setActiveCollection(collection)}
                            role="tab"
                            aria-selected={activeCollection === collection}
                          >
                            {collection}
                          </button>
                        ))}
                      </div>
                      <div className="charms-grid">
                        {filteredCharms.map((charm) => (
                          <article className="charm-card" key={charm.id}>
                            <CharmMark charm={charm} />
                            <h3>{charm.name}</h3>
                            <button
                              className="add-button"
                              onClick={() => addCharm(charm.id)}
                            >
                              + Add
                            </button>
                          </article>
                        ))}
                      </div>
                    </div>

                    <aside className="tray" aria-label="Your charm tray">
                      <header>
                        <h3>▣ Your Tray</h3>
                        <span>{tray.length}</span>
                      </header>
                      <div className="tray-list">
                        {trayItems.length === 0 ? (
                          <p className="empty-note">
                            Add charms to begin your piece.
                          </p>
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
                              <button
                                onClick={() => removeCharm(charm.id)}
                                aria-label={`Remove ${charm.name}`}
                              >
                                −
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    </aside>
                  </div>

                  <div className="footer-actions">
                    <button className="text-button" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button
                      className="primary-button"
                      onClick={() => setStep(3)}
                      disabled={tray.length === 0}
                    >
                      Review & Place
                    </button>
                  </div>
                </section>
              )}

              {step === 3 && (
                <section>
                  <header className="panel-heading">
                    <h2>Review Your Piece</h2>
                    <p>
                      Drag charms to place them, then check the final order.
                    </p>
                  </header>

                  <div className="review-layout">
                    <div
                      className="piece-preview"
                      aria-label="Drag-and-drop charm placement area"
                    >
                      <div className={`piece-ring ${base.visual}`}>
                        {slots.map((slot, index) => {
                          const placed = placedCharms.find(
                            (item) => item.slot === index,
                          );
                          const charm = placed
                            ? findCharm(placed.charmId)
                            : undefined;
                          return (
                            <button
                              className="drop-slot"
                              key={index}
                              style={{ top: slot.top, left: slot.left }}
                              onDragOver={(event) => event.preventDefault()}
                              onDrop={(event) => {
                                const charmId =
                                  event.dataTransfer.getData("text/plain");
                                if (charmId) placeCharm(charmId, index);
                              }}
                              aria-label={`Placement slot ${index + 1}`}
                            >
                              {charm ? (
                                <CharmMark charm={charm} />
                              ) : (
                                <span className="slot-dot" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      <div className="drag-tray">
                        {trayItems.map(({ charm }) => (
                          <button
                            key={charm.id}
                            draggable
                            onDragStart={(event) =>
                              event.dataTransfer.setData("text/plain", charm.id)
                            }
                            className="drag-chip"
                          >
                            <CharmMark charm={charm} />
                            {charm.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <aside className="summary">
                      <h3>Order Summary</h3>
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
                          return (
                            <li key={`${charmId}-${index}`}>{charm.name}</li>
                          );
                        })}
                      </ul>
                      <div className="summary-total">
                        <span>Total</span>
                        <strong>${total.toFixed(2)}</strong>
                      </div>
                    </aside>
                  </div>

                  <div className="footer-actions">
                    <button className="text-button" onClick={() => setStep(2)}>
                      Back to Charms
                    </button>
                    <button
                      className="primary-button"
                      onClick={() => setIsConfirmed(true)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
