import Image from "next/image";

export function PageChrome({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#customizer"
          aria-label="Charm and Crumb home"
        >
          <Image
            src="/logo.svg"
            alt=""
            className="brand-logo"
            width={32}
            height={32}
          />
          <span>Charm & Crumb</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#customizer">Shop</a>
          <a href="#collections">Collections</a>
        </nav>
      </header>

      {children}
    </main>
  );
}
