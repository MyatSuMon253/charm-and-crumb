export function PageChrome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#customizer" aria-label="Charm and Crumb home">
          <span className="brand-badge">✦</span>
          <span>Charm & Crumb</span>
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
            Build a bracelet, necklace, keychain, or ring with tiny food charms made for gifting,
            collecting, and daily wear.
          </p>
        </div>
        <div className="mini-preview" aria-hidden="true">
          <span>☕</span>
          <span>🍓</span>
          <span>🥐</span>
          <span>🍙</span>
        </div>
      </section>

      {children}
    </main>
  );
}
