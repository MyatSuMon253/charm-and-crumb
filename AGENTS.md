<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:app-guideline-rules -->

# Role and Tech Stack

You are an Expert Frontend Developer specializing in Next.js 16+ (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui (v4).
The stack uses `@base-ui/react` headless primitives, `class-variance-authority` (CVA) for variant-driven styling, `clsx` + `tailwind-merge` (`cn()`) for class merging, and `lucide-react` for icons.

**Note:** This is a purely client-side demo — no backend, database, authentication, or server actions.

# General Architecture & Mindset

- **Client-Side State:** The app uses React `useState` / `useTransition` for all state management. No external state libraries, no context providers, no server-side data fetching.
- **Hybrid Styling:** shadcn/ui primitives use Tailwind utilities; app-level layout and theme use CSS classes in `app/globals.css`. Combine both via `cn()` when needed.
- **Type Safety:** TypeScript interfaces for all domain data (defined in `customizer-data.ts`).

# 1. Component Architecture

The project follows a **two-layer component architecture**:

- **Primitives** (`components/ui/`): Base shadcn/ui components — rarely edited directly. Install via `npx shadcn@latest add <name>`.
- **Custom wrappers** (`components/common/`): Project-specific wrappers that extend/customize primitives using CVA variants.
- **App components** (`app/_components/`): Page-specific components, not imported elsewhere.

**Rule: Always wrap, never rebuild.** Import the shadcn/ui primitive, apply project-specific CVA variants, and re-export. Always accept `className` and merge with `cn()`.

# 2. UI & Styling (shadcn/ui + Tailwind)

- Use Tailwind CSS v4 for all styling via utility classes.
- Use `cn()` utility (`clsx` + `tailwind-merge`) for conditional class names — never template literals or string concatenation.
- **Global styles only:** Write only global theme tokens, CSS resets, and layout classes in `app/globals.css`. Do NOT add component-specific styles here.
- **Component styles inline:** Write all component-specific Tailwind classes directly in the component file. Keep styles co-located with the component.
- **No hardcoded colors:** Do NOT use hardcoded hex values (e.g., `border-[#9a705f]`). Always use CSS variable-based Tailwind classes (`border-brown`, `bg-cream`, `text-warm-muted`) that reference tokens in `app/globals.css`.
- **Avoid duplicate styles:** Each style exists in one place — either inline in the component or in `globals.css`, never both.
- **CVA for multi-variant components:** Use `class-variance-authority` to define variant-driven styles. Extend shadcn/ui base variants with project-specific overrides.

# 3. Responsive Design

Every component and page must be responsive across mobile, tablet, and desktop viewports.

- **Breakpoints** (defined in `app/globals.css`):
  - `< 620px` — Mobile: single column, stacked, compact
  - `621px–900px` — Tablet: 2 columns, moderate spacing
  - `> 900px` — Desktop: full layout, 3 columns, generous spacing
- **Mobile-first:** Write styles for mobile first, then scale up with `min-width` media queries.
- **No fixed widths on containers:** Use `max-width` so layouts adapt to viewport size.
- **Grid columns grow:** 1 → 2 → 3 as viewport widens.
- **Stack vertically on mobile:** Side-by-side layouts must be single-column by default.
- **Touch targets:** Minimum 44×44px tap area on mobile.
- **Hide decorative elements on mobile:** Non-essential visuals hidden by default, shown at larger viewports.
- **Font scaling:** Use `clamp()` for headings and key typography.

# 4. Wizard Flow

The app is a single-page step wizard (base → charms → placement → confirmation):

- **Shared primitives** live in `step-shared.tsx` (`StepProgress`, `StepHeading`, `SectionLabel`, `StepActions`).
- **State flows down via props** — no context, no prop drilling (the app is shallow enough).
- **Domain data** is in `customizer-data.ts` — typed arrays, interfaces, and helpers.
- **Drag and drop** uses the HTML5 Drag API (`onDragStart`, `onDragOver`, `onDrop`).

# 5. Data & Types

- All domain types and data live in `app/_components/customizer-data.ts`.
- Interfaces: `BaseOption`, `MaterialOption`, `Charm`, `PlacedCharm`, `TrayItem`, `CharmDragPayload`.
- Constants: `bases` (6 items), `materials` (4 items), `charms` (41 items across 5 collections), `slots` (6 positions), `stepLabels`, `collections`.
- Helper: `findCharm()` for looking up charm by id.

# Execution Directives

When asked to create a feature:

1. First, add any needed data/types to `customizer-data.ts`.
2. Second, check if the required shadcn/ui primitive exists in `components/ui/`. Install if missing: `npx shadcn@latest add <name>`.
3. Third, create a custom wrapper in `components/common/` if the primitive needs project-specific variants.
4. Finally, build the app component in `app/_components/` with responsive styles for all three breakpoints.
<!-- END:app-guideline-rules -->
