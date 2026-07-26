# Charm & Crumb

Charm & Crumb is a cozy frontend customizer for designing personalized clay jewelry. Customers can start from a pre-designed piece or build from scratch, choose a base and finish, place food charms, combine multiple designs in one order, and trace confirmed orders.

The project focuses on making custom ordering feel visual, playful, and clear instead of forcing customers to imagine the finished piece from a plain product list.

![Charm & Crumb base and material customizer](screenshots/step-1.png)

## Website Walkthrough

### 1. Start With Inspiration or Build From Scratch

Customers can customize a pre-designed favorite or select their own jewelry base and finish. The page uses finished examples, large product previews, swatches, and clear pricing so the first decision feels simple.

![Base and material selection](screenshots/step-1.png)

### 2. Curate Charms

The charm step turns browsing into a collection-building experience. Each charm card shows the charm mark, name, and price, while the tray keeps the selected charms visible.

![Charm selection and tray](screenshots/step-2.png)

### 3. Place the Charms

The placement step lets customers drag charms onto a preview that matches the selected bracelet, necklace, keychain, ring, earrings, or phone charm.

![Necklace-specific charm placement](screenshots/ch6-desktop-necklace-placement.png)

### 4. Build and Track an Order

Customers can add several finished designs to one order, review the combined total, confirm the order, save the first design as an image, and trace the order reference and crafting status.

![Multiple designs in order history](screenshots/ch6-desktop-order-history.png)

## Features

- Guided multi-step custom jewelry flow
- Pre-designed jewelry starters
- Base selection with product preview images
- Base-specific placement silhouettes for all six jewelry types
- Material selection with polished swatches
- Expanded food charm collection
- Reusable charm cards with mark, name, and price
- Live charm tray with item counts
- Drag-and-drop charm placement
- Order summary with itemized charm list
- Multiple custom designs in one order
- Client-side order references, status, and order history
- Confirmation page with success message
- Estimated delivery: 7 to 10 days
- Downloadable confirmed design image
- Responsive layout for desktop and mobile
- Vercel Web Analytics

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Base UI primitives

## Methodology

This project was built with a GSD approach: get the core flow working first, then polish the details users actually touch.

The work moved in practical slices:

1. Build the base and material selection.
2. Add charm browsing and tray management.
3. Implement drag-and-drop placement.
4. Refine the order summary and confirmation page.
5. Verify with lint and production build checks.

## Chapter 5 Workflow Evidence

- Skill: `.claude/skills/audit-customizer-flow/SKILL.md`
- Subagent: `.claude/agents/customizer-ux-auditor.md`
- Saved audit run: `docs/chapter-5/customizer-audit.md`
- Tech-stack deck: `slides/tech-stack.md`
- Real-user feedback issues: `feedback/issues.md`

## Chapter 6 Feedback Fixes

- [Issue #1](https://github.com/MyatSuMon253/charm-and-crumb/issues/1): placement now reflects the selected base with six distinct silhouettes.
- [Issue #2](https://github.com/MyatSuMon253/charm-and-crumb/issues/2): customers can start from three pre-designed pieces.
- [Issue #3](https://github.com/MyatSuMon253/charm-and-crumb/issues/3): orders support multiple designs, combined totals, references, status, and session history.
- Browser verification: `tests/chapter-6-flow.spec.ts`
- Gallery deck: `slides/gallery.md`

## Analytics

Vercel Web Analytics is mounted in the root App Router layout with
`@vercel/analytics/next`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## Verification

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Run the Chapter 6 desktop and mobile browser checks:

```bash
npm run test:e2e
```

## Project Structure

```text
app/
  _components/
    canvas-step.tsx
    charm-card.tsx
    charms-step.tsx
    confirmation-step.tsx
    order-history.tsx
    order-review-step.tsx
    order-summary.tsx
    placement-step.tsx
screenshots/
  ch6-desktop-necklace-placement.png
  ch6-desktop-order-history.png
  ch6-mobile-collection.png
slides/
  gallery.md
  pitch.md
tests/
  chapter-6-flow.spec.ts
```

## Project Goal

Charm & Crumb shows how a small ecommerce idea can feel more personal through interaction. Instead of asking customers to trust a generic product photo, the site lets them build their own piece and see the design come together step by step.
