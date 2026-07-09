export function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-content">
        <p className="eyebrow">CUSTOM POLYMER CLAY JEWELRY</p>
        <h1 className="hero-title">Your cozy jewelry customizer</h1>
        <p className="hero-description">
          Handcrafted with love, one tiny charm at a time. Mix and match adorable
          food-inspired pieces to create a jewelry piece that&apos;s uniquely yours
          &mdash; perfect for gifting, collecting, or simply treating yourself.
        </p>
      </div>
      <div className="hero-preview">
        <svg
          className="hero-bracelet"
          viewBox="25 -12 350 105"
          role="img"
          aria-label="Charm bracelet with cookie, matcha bowl, and croissant charms"
        >
          <defs>
            <linearGradient id="hero-chain-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7a5a46" />
              <stop offset="50%" stopColor="#514236" />
              <stop offset="100%" stopColor="#3d3228" />
            </linearGradient>
            <linearGradient id="hero-matcha-green" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8cb86b" />
              <stop offset="100%" stopColor="#6a9a4a" />
            </linearGradient>
            <linearGradient id="hero-croissant-gold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8b84a" />
              <stop offset="100%" stopColor="#c49030" />
            </linearGradient>
            <filter id="hero-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
              <feOffset in="blur" dx="0" dy="1" result="offsetBlur" />
              <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            <path
              className="hero-chain"
              d="M 50 70 Q 120 5 200 0 Q 280 5 350 70"
              fill="none"
              stroke="url(#hero-chain-grad)"
              strokeLinecap="round"
            />

            <g className="hero-clasp" fill="none" strokeLinecap="round">
              <circle cx="48" cy="72" r="6" />
              <line x1="42" y1="72" x2="38" y2="72" />
            </g>

            <g className="hero-charm-connectors" fill="none" strokeLinecap="round">
              <ellipse cx="120" cy="34" rx="4" ry="7" transform="rotate(-14, 120, 34)" />
              <ellipse cx="200" cy="12" rx="4" ry="7" />
              <ellipse cx="280" cy="34" rx="4" ry="7" transform="rotate(14, 280, 34)" />
            </g>

            <g filter="url(#hero-soft-glow)">
              <g className="hero-logo-charm hero-logo-charm-left" transform="translate(120, 35)">
                <animateTransform attributeName="transform" type="translate" additive="sum" values="-7 0; 6 0; -7 0" dur="2.4s" repeatCount="indefinite" />
                <ellipse cx="0" cy="16" rx="20" ry="18" fill="#d4a574" stroke="#a07040" strokeWidth="1" />
                <circle cx="-16" cy="10" r="3" fill="#c4945a" />
                <circle cx="16" cy="10" r="3" fill="#c4945a" />
                <circle cx="-14" cy="22" r="3" fill="#c4945a" />
                <circle cx="14" cy="22" r="3" fill="#c4945a" />
                <circle cx="0" cy="4" r="2.5" fill="#c4945a" />
                <circle cx="-8" cy="28" r="2.5" fill="#c4945a" />
                <circle cx="8" cy="28" r="2.5" fill="#c4945a" />
                <ellipse cx="-7" cy="10" rx="3.5" ry="3" fill="#4a2f20" transform="rotate(-15, -7, 10)" />
                <ellipse cx="5" cy="7" rx="3" ry="2.5" fill="#5c3d2e" transform="rotate(20, 5, 7)" />
                <ellipse cx="-3" cy="20" rx="3" ry="2.8" fill="#4a2f20" transform="rotate(10, -3, 20)" />
                <ellipse cx="9" cy="18" rx="3.2" ry="2.5" fill="#5c3d2e" />
                <ellipse cx="-11" cy="19" rx="2.5" ry="2.2" fill="#4a2f20" transform="rotate(-20, -11, 19)" />
                <ellipse cx="2" cy="13" rx="2.8" ry="2.2" fill="#5c3d2e" transform="rotate(30, 2, 13)" />
              </g>

              <g className="hero-logo-charm hero-logo-charm-center" transform="translate(200, 12)">
                <animateTransform attributeName="transform" type="translate" additive="sum" values="5 0; -5 0; 5 0" dur="3.1s" begin="0.2s" repeatCount="indefinite" />
                <ellipse cx="0" cy="28" rx="22" ry="6" fill="#8b6540" stroke="#6b4a2a" strokeWidth="1" />
                <ellipse cx="0" cy="26" rx="20" ry="5" fill="#a07050" />
                <path d="M -16 10 Q -18 24 -14 26 L 14 26 Q 18 24 16 10 Z" fill="#f5f0e8" stroke="#d4c8b8" strokeWidth="1" />
                <ellipse cx="0" cy="10" rx="16" ry="5" fill="#faf6f0" stroke="#d4c8b8" strokeWidth="1" />
                <ellipse cx="0" cy="10" rx="13" ry="4" fill="url(#hero-matcha-green)" stroke="#5a8a3a" strokeWidth="0.5" />
                <ellipse cx="-4" cy="9" rx="3" ry="1.5" fill="#9ac87a" opacity="0.6" />
                <ellipse cx="3" cy="11" rx="2.5" ry="1" fill="#9ac87a" opacity="0.5" />
                <path d="M -3 2 Q -2 -4 0 -2 Q 2 -6 1 0" fill="none" stroke="#d4c8b8" strokeWidth="0.8" opacity="0.5" />
                <path d="M 4 3 Q 5 -2 3 -1 Q 5 -5 4 1" fill="none" stroke="#d4c8b8" strokeWidth="0.8" opacity="0.4" />
              </g>

              <g className="hero-logo-charm hero-logo-charm-right" transform="translate(280, 35)">
                <animateTransform attributeName="transform" type="translate" additive="sum" values="8 0; -6 0; 8 0" dur="2.7s" begin="0.45s" repeatCount="indefinite" />
                <path d="M -22 16 Q -24 8 -18 2 Q -12 -4 -4 -2 Q 4 0 10 -2 Q 18 -4 22 2 Q 26 8 22 16 Q 18 22 10 20 Q 2 18 -6 20 Q -16 22 -22 16 Z" fill="url(#hero-croissant-gold)" stroke="#a07020" strokeWidth="1" />
                <path d="M -16 8 Q -8 4 0 8 Q 8 4 16 8" fill="none" stroke="#c49030" strokeWidth="1.2" />
                <path d="M -18 14 Q -10 10 0 14 Q 10 10 18 14" fill="none" stroke="#c49030" strokeWidth="1" />
                <path d="M -14 18 Q -6 15 2 18" fill="none" stroke="#c49030" strokeWidth="0.8" />
                <path d="M -12 4 Q -4 0 4 4" fill="none" stroke="#e8c86a" strokeWidth="1.5" opacity="0.5" />
                <ellipse cx="-8" cy="6" rx="3" ry="2" fill="#e8c86a" opacity="0.4" />
                <ellipse cx="6" cy="4" rx="2.5" ry="1.5" fill="#e8c86a" opacity="0.3" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}
