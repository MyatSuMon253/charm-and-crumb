# Charm & Crumb — Design Guidelines

> A living reference for the visual language, component patterns, and coding conventions used across the Charm & Crumb jewelry customizer.

---

## Table of Contents

1. [Brand & Design Philosophy](#1-brand--design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Border Radius & Shadows](#5-border-radius--shadows)
6. [Component Patterns](#6-component-patterns)
7. [Responsive Design](#7-responsive-design)
8. [Accessibility](#8-accessibility)
9. [Coding Conventions](#9-coding-conventions)
10. [File Structure & Organization](#10-file-structure--organization)

---

## 1. Brand & Design Philosophy

Charm & Crumb is a **warm, cozy, bakery-themed jewelry customizer**. The visual language should feel inviting, handcrafted, and premium — like browsing a charming boutique.

**Core principles:**
- **Warmth over coolness** — every color, shadow, and curve should feel approachable
- **Playful, not childish** — emoji-based charm icons add whimsy; the layout and typography keep it sophisticated
- **Craft-oriented** — generous whitespace, soft edges, and tactile-feeling surfaces (the frosted-glass header, the cream panel)
- **Focused simplicity** — a single-page wizard with clear, step-by-step progression

---

## 2. Color System

All color tokens are defined as CSS custom properties in [`app/globals.css`](app/globals.css).

### Brand Palette

| Token             | Value             | Usage                                      |
| ----------------- | ----------------- | ------------------------------------------ |
| `--cream`         | `#fffdf8`         | Lightest surfaces, panel backgrounds       |
| `--background`    | `#fbf8f2`         | Page background                            |
| `--foreground`    | `#4b4037`         | Body text (warm dark brown)                |
| `--brown`         | `#514236`         | Primary brand color (deep brown)           |
| `--line`          | `#eadfd2`         | Borders, dividers, subtle separators       |
| `--warm-muted`    | `#9a705f`         | Muted text, secondary labels               |
| `--blush`         | `#f2d2c0`         | Highlights, active states, accents         |

### Semantic Tokens (OKLCH)

shadcn/ui tokens use the OKLCH color space with a **neutral** base (chroma = 0). These map to Tailwind utilities.

| Purpose        | Token            | Notes                                  |
| -------------- | ---------------- | -------------------------------------- |
| Primary        | `--primary`      | Maps to `--brown` for buttons/accents  |
| Secondary      | `--secondary`    | Light neutral fills                    |
| Muted          | `--muted`        | Subdued backgrounds                    |
| Accent         | `--accent`       | Hover/active highlights                |
| Destructive    | `--destructive`  | Error states (use sparingly)           |
| Border         | `--border`       | General borders                        |
| Ring           | `--ring`         | Focus ring outline                     |
| Card           | `--card`         | Card backgrounds                       |
| Popover        | `--popover`      | Dropdown/floating panel backgrounds    |
| Chart 1–5      | `--chart-*`      | Data visualization (if needed)         |

### Usage Rules

- **Never use raw hex values in component code** — always reference tokens via Tailwind utilities (`bg-background`, `text-foreground`, `border-line`) or CSS variables.
- **Primary actions** use `--brown` / `--primary`. Keep the palette restrained — one accent color at a time.
- **Muted text** (`--warm-muted`) should be used for secondary information, timestamps, or helper copy — never for critical content.
- **Blush** is reserved for active/selected states (e.g., the selected base card border, active step dot).

---

## 3. Typography

### Font Stacks

| Role          | Stack                                    | CSS Variable       | Tailwind Utility |
| ------------- | ---------------------------------------- | ------------------ | ---------------- |
| **Headings**  | `Georgia, "Times New Roman", serif`      | —                  | Applied via CSS classes (`hero-title`, `panel-heading`) — not via `--font-heading` |
| **Body / UI** | `Arial, Helvetica, sans-serif`           | `--font-sans`      | `font-sans`      |
| **Monospace** | `"SFMono-Regular", Consolas, monospace`  | `--font-mono`      | `font-mono`      |

> **Note:** The `--font-heading` theme token currently maps to `--font-sans` (Arial). Georgia is applied via direct CSS classes (`.hero-title`, `.intro-band h1`, `.panel-heading [data-slot="card-title"]`) rather than through the Tailwind utility. Use the CSS classes — not `font-heading` — for serif headings.

### Type Scale

| Element             | Size                                    | Weight | Line-Height | Notes                          |
| ------------------- | --------------------------------------- | ------ | ----------- | ------------------------------ |
| **Hero heading**    | `clamp(2.4rem, 6vw, 5.25rem)`          | 700    | 0.98        | Very tight, dramatic           |
| **Panel heading**   | `clamp(2rem, 4vw, 2.8rem)`             | 700    | 1.08        | Step headings                  |
| **Brand name**      | `clamp(1.35rem, 2vw, 1.7rem)`          | 700    | 1.1         | Header logo text               |
| **Eyebrow**         | `0.78rem`                               | 700    | 1.6         | `letter-spacing: 0.16em`, `text-transform: uppercase` |
| **Body copy**       | `1.08rem`                               | 400    | 1.7         | Default reading text           |
| **Small / labels**  | `0.82rem`                               | 600    | 1.5         | Section labels, helper text    |

### Usage Rules

- **Headings always use the serif stack** (`Georgia`). This is a core brand element — do not swap to sans-serif for headings.
- **Body and UI elements use the sans-serif stack** (`Arial`). This includes buttons, form labels, navigation, and card content.
- **Eyebrow text** (small uppercase labels above headings) uses `font-size: 0.78rem`, `font-weight: 700`, `letter-spacing: 0.16em`, `text-transform: uppercase`.
- **Fluid sizing** via `clamp()` is used for headings — do not override with fixed pixel sizes.
- **Avoid font sizes below 0.75rem** — maintain readability at all viewport sizes.

---

## 4. Spacing & Layout

### Max-Width Containers

| Container        | Max Width   | Usage                          |
| ---------------- | ----------- | ------------------------------ |
| Customizer       | `1120px`    | Main app content               |
| Intro band       | `1180px`    | Hero section                   |
| Steps bar        | `640px`     | Step progress indicator        |
| Confirmation     | `960px`     | Success page content           |

### Grid Patterns

The project uses CSS Grid for all major layouts:

| Pattern             | Columns                              | Breakpoint Behavior           |
| ------------------- | ------------------------------------ | ----------------------------- |
| **Intro band**      | `minmax(0, 1fr) auto`               | Stacks to single column       |
| **Charm layout**    | `minmax(0, 1fr) 300px`              | Stacks to single column       |
| **Review layout**   | `minmax(0, 1fr) 345px`              | Stacks to single column       |
| **Base grid**       | `repeat(3, minmax(0, 1fr))`         | 3 → 2 → 1 columns            |
| **Charms grid**     | `repeat(3, minmax(0, 1fr))`         | 3 → 2 → 1 columns            |
| **Confirmation**    | `minmax(0, 360px) minmax(260px, 1fr)` | Stacks to single column     |

### Spacing Conventions

- Use Tailwind spacing utilities (`p-*`, `m-*`, `gap-*`, `space-*`) for component-level spacing.
- Use CSS custom properties and traditional classes for layout-level spacing (`.panel`, `.charm-layout`, etc.).
- **Generous padding** is a design principle — panels use `2rem` or more of internal padding.
- **Gaps between grid items**: `1rem` for card grids, `1.5rem` for charm cards, `0.75rem` for compact lists.

---

## 5. Border Radius & Shadows

### Border Radius

| Token        | Value     | Usage                                    |
| ------------ | --------- | ---------------------------------------- |
| `--radius`   | `0.625rem`| Base radius (10px)                       |
| `--radius-sm`| `calc(var(--radius) - 2px)` | Small elements                |
| `--radius-lg`| `calc(var(--radius) + 4px)` | Large panels                   |
| `--radius-xl`| `calc(var(--radius) + 8px)` | Cards, panels                   |
| `--radius-2xl`| `calc(var(--radius) + 12px)` | Extra large                 |
| Fixed `8px`  | —         | Base cards, charm cards (hardcoded)      |
| `rounded-full`| `999px`  | Buttons (pill shape), badges, toggles   |

### Shadows

| Token       | Value                                      | Usage                  |
| ----------- | ------------------------------------------ | ---------------------- |
| `--shadow`  | `0 24px 60px rgba(83, 65, 52, 0.1)`       | Main panel elevation   |

- The shadow uses a **warm brown** tint (`rgba(83, 65, 52, 0.1)`) rather than pure black — this keeps shadows feeling soft and on-brand.
- Additional inline shadows appear in specific components (e.g., `.charm-card` hover states). Keep them consistent with the warm brown tint.

---

## 6. Component Patterns

### Component Layering: shadcn/ui → Custom Wrappers

The project follows a **two-layer component architecture**:

| Layer | Location | Purpose |
| --- | --- | --- |
| **Primitives** | `components/ui/` | Base shadcn/ui components — rarely edited directly |
| **Custom wrappers** | `components/common/` | Project-specific wrappers that extend/customize primitives |

**Rule: Always wrap, never rebuild.** When creating a new UI component, wrap an existing shadcn/ui primitive rather than building from scratch. If the needed shadcn/ui component doesn't exist yet, install it first.

### Currently Installed shadcn/ui Primitives

| Component     | File                              | Notes                          |
| ------------- | --------------------------------- | ------------------------------ |
| `Badge`       | `components/ui/badge.tsx`         | Status indicators, labels      |
| `Button`      | `components/ui/button.tsx`        | All actions                    |
| `Card`        | `components/ui/card.tsx`          | Compound: Header, Title, Content, Footer |
| `Separator`   | `components/ui/separator.tsx`     | Visual dividers                |
| `Tabs`        | `components/ui/tabs.tsx`          | Tab navigation                 |
| `Toggle`      | `components/ui/toggle.tsx`        | Binary on/off                  |
| `ToggleGroup` | `components/ui/toggle-group.tsx`  | Multi-option selection         |

### Custom Wrappers in `components/common/`

| Component       | File                              | Extends      | Notes                                   |
| --------------- | --------------------------------- | ------------ | --------------------------------------- |
| `BaseCard`      | `components/common/base-card.tsx` | `Card`       | Selectable jewelry type, `role="radio"` |
| `Button`        | `components/common/button.tsx`    | `Button`     | CVA variants: primary/secondary/outline/ghost, sizes sm/md/lg/icon |
| `MaterialCard`  | `components/common/material-card.tsx` | `Card`   | Selectable material with color swatch, `role="radio"` |
| `Text`          | `components/common/text.tsx`      | —            | Polymorphic text (`as` prop), CVA variants: main-title/subtitle/name/description/muted/label |

### Creating a Custom Wrapper

**Pattern:** Import the shadcn/ui primitive, apply project-specific variant styles via CVA, and re-export. Always accept `className` and merge with `cn()`.

**Why Wrap?**

- **Consistency** — all components share the same base styles, focus behavior, and accessibility
- **Maintainability** — shadcn/ui updates apply automatically; custom overrides stay isolated
- **Discoverability** — `components/ui/` is the source of truth for available primitives; `components/common/` is the source of truth for project-specific variants
- **Type safety** — extending `React.ComponentProps<typeof Primitive>` keeps prop types in sync

### CVA (class-variance-authority)

All shadcn/ui components use **CVA** for variant-driven styling. When creating new components or extending existing ones, define variants with `cva()` — pass a base class string, then a `variants` object with named options per axis, and optional `defaultVariants`.

### The `cn()` Utility

Every component that needs conditional styling uses `cn()` from `@/lib/utils` — it combines `clsx` and `tailwind-merge` for intelligent class merging.

**Rules:**
- Always accept an optional `className` prop and merge it with `cn()`.
- Use `cn()` instead of template literals or string concatenation for class names.
- Place `className` as the **last argument** so it can override defaults.

### Card Pattern

Cards follow the compound component pattern: `Card` → `CardHeader` → `CardTitle` / `CardDescription` → `CardContent` → `CardFooter`. Target sub-elements via `data-slot` attributes in CSS (e.g., `.tray [data-slot="card-header"]`).

### Button Variants

| Variant       | Usage                          | Visual                         |
| ------------- | ------------------------------ | ------------------------------ |
| `default`     | Primary actions                | Filled brown, white text       |
| `outline`     | Secondary actions              | Bordered, transparent fill     |
| `ghost`       | Tertiary / inline actions      | No border, no fill             |
| `link`        | Text links                     | Underlined text                |
| `.primary-button` | Custom large CTA          | Full-width, large, pill shape  |
| `.outline-button` | Secondary CTA              | Full-width, outlined, pill     |
| `.add-button` | Charm add button              | Small, outlined, icon + text   |

Sizes: `sm`, `md`, `lg`, `icon`. Icon support via `icon`, `iconPosition`, `iconSize` props.

### Step Wizard Pattern

The app uses a **step-based wizard** with shared UI primitives in [`step-shared.tsx`](app/_components/step-shared.tsx):

| Component       | Purpose                                    |
| --------------- | ------------------------------------------ |
| `StepProgress`  | Horizontal step indicator (dots + labels)  |
| `StepHeading`   | Section heading with eyebrow label         |
| `SectionLabel`  | Small uppercase label above content groups |
| `StepActions`   | Bottom action bar (back/next buttons)      |

---

## 7. Responsive Design

Every component and page must be responsive and work across mobile, tablet, and desktop viewports.

### Breakpoints

| Breakpoint      | Behavior                                          |
| --------------- | ------------------------------------------------- |
| `< 620px`       | Mobile — single column, stacked, compact (base)   |
| `621px – 900px` | Tablet — grids at 2 columns, moderate spacing     |
| `> 900px`       | Desktop — full layout, 3 columns, generous spacing|

### Rules

- **Mobile-first:** Write styles for mobile first (single column, stacked, compact), then scale up with `min-width` media queries for tablet and desktop.
- **No fixed widths on containers:** Use `max-width` instead of fixed `width` so layouts adapt to viewport size.
- **Grid columns grow:** 1 → 2 → 3 as viewport widens. Start with a single column on mobile, expand at breakpoints.
- **Stack vertically on mobile:** Side-by-side layouts (grids, flex rows) must be single-column by default, then expand at larger viewports.
- **Hide decorative elements on mobile:** Non-essential visual elements should be hidden by default, shown at larger viewports (e.g., `.mini-preview` uses `@media (min-width: 901px)`).
- **Touch targets:** Ensure interactive elements have a minimum tap area of 44×44px on mobile.
- **Font scaling:** Use `clamp()` for headings and key typography to scale fluidly across viewports.
- **Test at all three breakpoints** before merging any layout changes.

---

## 8. Accessibility

### Standards

- Use **semantic HTML** throughout: `<main>`, `<header>`, `<nav>`, `<section>`, `<dl>`/`<dt>`/`<dd>`, `<figure>`.
- Include `aria-label` on interactive elements that lack visible text (e.g., icon buttons).
- Use `aria-current="step"` on the active step indicator.
- Mark decorative elements with `aria-hidden="true"`.
- Ensure all interactive elements are **keyboard navigable**.
- Maintain **sufficient color contrast** — the `--foreground` on `--background` pairing meets WCAG AA.

### Focus Management

- Focus rings use the `--ring` token (`ring-ring/50`).
- Never remove focus outlines without providing an alternative visible focus indicator.

---

## 9. Coding Conventions

### Styling Approach (Hybrid)

The project uses a **dual styling approach**:

| Layer                | Approach                              | Where                         |
| -------------------- | ------------------------------------- | ----------------------------- |
| **UI primitives**    | Tailwind utility classes              | `components/ui/*.tsx`         |
| **Custom wrappers**  | CVA variants with Tailwind utilities  | `components/common/*.tsx`     |
| **App layout/theme** | Traditional CSS classes in globals.css| `app/globals.css`             |

- shadcn/ui components use **Tailwind utilities** exclusively.
- Custom wrappers extend primitives with **CVA variants** and Tailwind utilities.
- App-level layout (`.site-shell`, `.topbar`, `.intro-band`, `.panel`, `.steps`, etc.) uses **CSS class names** defined in `globals.css`.
- Combine both via `cn()` when an element needs app-level classes alongside Tailwind utilities.

### Component File Rules

- **`"use client"` directive**: Only add when the component uses hooks, event handlers, or browser APIs. Prefer Server Components otherwise.
- **Component location**:
  - `components/ui/` — shadcn/ui primitives (installed via CLI, rarely edited)
  - `components/common/` — Custom wrappers extending primitives (project-specific)
  - `app/_components/` — App-specific components for the wizard flow
- **Props interface**: Define a `Props` type (or extend `React.ComponentProps`) at the top of the file.
- **Named exports**: Custom wrappers use named exports (`export function Button`). App components also use named exports.
- **No inline styles**: Use Tailwind utilities or CSS classes. Avoid `style={{ }}` except for dynamic values (e.g., computed positions).

### Data & State

- **No external state library** — use React `useState` / `useTransition` for local state.
- **Domain data** lives in `customizer-data.ts` as typed arrays and interfaces.
- **All state flows down via props** — no prop drilling through context (the app is shallow enough).
- **Drag and drop** uses the HTML5 Drag API (`onDragStart`, `onDragOver`, `onDrop`) with typed payloads.
- **This is a purely client-side demo** — no server actions, no database, no authentication.

### Naming Conventions

| Category          | Convention                           | Example                   |
| ----------------- | ------------------------------------ | ------------------------- |
| Files             | `kebab-case`                         | `charm-card.tsx`          |
| Components        | `PascalCase`                         | `CharmCard`               |
| CSS classes       | `kebab-case`                         | `.base-card`, `.topbar`   |
| CSS variables     | `kebab-case` with `--` prefix        | `--cream`, `--brown`      |
| Interfaces/Types  | `PascalCase`                         | `CharmDragPayload`        |
| Constants         | `UPPER_SNAKE_CASE`                   | `STEPS`, `MATERIALS`      |

---

## 10. File Structure & Organization

```
charm-and-crumb/
├── app/
│   ├── _components/           # App-specific components (not routable)
│   │   ├── canvas-step.tsx       # Step 1: Base + material selection
│   │   ├── charm-card.tsx        # Individual charm card
│   │   ├── charm-mark.tsx        # Emoji display wrapper
│   │   ├── charms-step.tsx       # Step 2: Charm browsing + tray
│   │   ├── confirmation-step.tsx # Success + image export
│   │   ├── customizer-data.ts    # Domain data, types, helpers
│   │   ├── order-summary.tsx     # Price breakdown sidebar
│   │   ├── page-chrome.tsx       # Page shell: header, hero
│   │   ├── placement-step.tsx    # Step 3: Drag-and-drop + summary
│   │   └── step-shared.tsx       # Shared: StepProgress, StepHeading, etc.
│   ├── globals.css               # All CSS: tokens, theme, layout, components
│   ├── layout.tsx                # Root layout (Server Component)
│   └── page.tsx                  # Main page (Client Component)
├── components/
│   ├── common/                   # Custom wrappers extending shadcn/ui primitives
│   │   ├── base-card.tsx         # Selectable base jewelry card (Card + radio role)
│   │   ├── button.tsx            # CVA button with primary/secondary/outline/ghost variants
│   │   ├── material-card.tsx     # Selectable material card with color swatch
│   │   └── text.tsx              # Polymorphic text component (variant-driven)
│   └── ui/                       # shadcn/ui primitives
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── separator.tsx
│       ├── tabs.tsx
│       ├── toggle.tsx
│       └── toggle-group.tsx
├── lib/
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
├── public/                       # Static assets
├── components.json               # shadcn/ui configuration
├── postcss.config.mjs            # PostCSS (Tailwind v4)
├── package.json
├── tsconfig.json
├── next.config.ts
└── AGENTS.md                     # Project architecture rules
```

### Key Conventions

- **`_components/` prefix**: The underscore prevents Next.js from treating these as routes. All app-specific components live here.
- **`components/common/`**: Custom wrappers that extend shadcn/ui primitives with project-specific variants.
- **No `src/` directory**: The project uses a flat structure with `app/` at the root.
- **Single stylesheet**: All CSS lives in `globals.css`. Do not create additional CSS files unless absolutely necessary.
- **Co-located data**: Domain data and types live alongside components in `customizer-data.ts`, not in a separate `lib/` or `data/` directory.

---

## Quick Reference: Adding a New Component

1. **Find or install the shadcn/ui primitive:**
   - Check `components/ui/` for an existing primitive that covers your use case.
   - If missing, install it: `npx shadcn@latest add <component-name>`
2. **Create a wrapper in `components/common/`:**
   - Import the shadcn/ui primitive and `buttonVariants` (or relevant variant function).
   - Extend with project-specific CVA variants using `cva(buttonVariants({...}))`.
   - Accept `className` and merge with `cn()`.
3. **Use `cn()`** for all conditional class merging.
4. **Define props** by extending `React.ComponentProps<typeof Primitive>` for type safety.
5. **Add `"use client"`** only if using hooks/events/browser APIs.
6. **Use existing tokens** — check `globals.css` for available CSS variables.
7. **Follow the variant pattern** (CVA) if creating a multi-variant component.
8. **Add responsive styles** for the three breakpoints (900px, 620px).
9. **Include accessibility** — semantic HTML, ARIA attributes, focus management.
10. **For app-specific components**, place them in `app/_components/` and use named exports.

---

## Quick Reference: Adding a New Color Token

1. Define the CSS custom property in `app/globals.css` under the `:root` block.
2. Add the corresponding OKLCH shadcn token if it maps to a semantic purpose.
3. Map it to a Tailwind utility in the `@theme inline` block if needed.
4. Update the `.dark` variant if dark mode support is required.
5. Document it in this file.
