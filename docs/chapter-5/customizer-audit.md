# Charm & Crumb customizer audit

## Scope

Source-based review of the complete base/material → charm tray → placement/review →
confirmation/download journey. The audit covered `app/page.tsx`,
`app/_components/customizer-data.ts`, every step component, shared step controls,
the charm/summary helpers, common selection controls, and the responsive/touch-target
rules in `app/globals.css`. This was a technical audit, not a real-user session.

## Verification

- `npm run lint` — completed with exit code 0, with two warnings in
  `confirmation-step.tsx`: unused `Separator` at line 13 and unused `onEdit` at
  line 20.
- `npm run build` — completed with exit code 0. Next.js 16.2.10 compiled,
  type-checked, generated all four static pages, and emitted `/` as static content.

## Findings

### High — Confirmation is a dead end even though an edit callback exists

- **Evidence:** `restartDesign()` resets confirmation and returns to step 1
  (`app/page.tsx:123-126`), and it is passed as `onEdit`
  (`app/page.tsx:145-151`). `ConfirmationStep` receives the callback
  (`app/_components/confirmation-step.tsx:15-27`) but never renders a control that
  calls it; its only action is **Save Design Image**
  (`app/_components/confirmation-step.tsx:133-140`). Progress-step clicks are also
  ignored after confirmation (`app/_components/step-shared.tsx:35-37`).
- **User impact:** After confirming, a customer cannot correct the design or start
  again without reloading the page.
- **Smallest reasonable fix:** Add a visible “Edit / Start another design” button
  that invokes `onEdit`, then remove the resulting unused-prop lint warning.

### High — Placement has no operable keyboard or touch alternative

- **Evidence:** Slots respond only to HTML drag events
  (`app/_components/placement-step.tsx:91-128`), and available charm chips only
  initiate dragging (`app/_components/placement-step.tsx:135-153`). There is no
  click, keyboard-selection, or pointer/touch placement handler. The instruction
  says only “Drag charms to place them”
  (`app/_components/placement-step.tsx:131-133`), while CSS applies
  `touch-action: none` to slots (`app/globals.css:1067-1079`).
- **User impact:** Keyboard-only users can focus the button-shaped slots but cannot
  place or move a charm; touch users have no explicit fallback if HTML drag and
  drop is unavailable.
- **Smallest reasonable fix:** Support “select charm, then choose slot” with normal
  button activation, keep drag and drop as an enhancement, and announce the
  selected charm/placement result.

### Medium — The available-placement tray does not represent the unplaced items

- **Evidence:** The page groups `trayItems` from the entire tray
  (`app/page.tsx:50-60`). Placement decides that something is unplaced using only
  `tray.length > placedCharms.length`, but then renders every grouped tray item as
  available (`app/_components/placement-step.tsx:44-45,135-153`). Placement state
  identifies items only by `charmId`, and a tray drop moves the first matching
  placed charm (`app/page.tsx:110-119`), even though duplicate charm IDs are
  supported and present in initial state (`app/page.tsx:30-41`).
- **User impact:** Once any charm is unplaced, already placed charms can appear in
  the available tray. Duplicate copies cannot be reliably distinguished, so a
  drag may move an existing copy instead of placing the unplaced one.
- **Smallest reasonable fix:** Give tray copies stable instance IDs and derive the
  available tray by subtracting placed instances, with explicit occupied-slot
  replacement behavior.

### Medium — Progress navigation bypasses the empty-tray guard

- **Evidence:** The step-2 footer correctly disables **Review & Place** when the
  tray is empty (`app/_components/charms-step.tsx:105-110`), but every progress dot
  directly calls `onStepChange(number)` while unconfirmed
  (`app/_components/step-shared.tsx:31-37`). Step 3 then enables **Confirm Order**
  without checking tray or placement state
  (`app/_components/placement-step.tsx:166-170`).
- **User impact:** A customer can remove all charms, use the progress control to
  jump to review, and confirm an empty design despite the earlier required-state
  guard.
- **Smallest reasonable fix:** Route all step changes through validation and
  disable or reject forward jumps until the target step's prerequisites are met.

## Chapter 6 candidates

1. **Add an edit/restart action to confirmation and verify it restores step 1.**
2. **Make charm placement fully operable by click, keyboard, and touch without drag.**
3. **Use instance-based charm placement and show only genuinely unplaced copies.**

## Needs real-user confirmation

These are hypotheses, not feedback or user quotes:

- Whether customers expect an occupied-slot drop to swap charms, replace the old
  charm, or return the displaced charm to the available tray.
- Whether the preloaded base, material, and four charms feel like a helpful example
  or make the wizard seem already completed (`app/page.tsx:27-41`).
- Whether the mobile single-column layouts (`app/globals.css:1424-1517`) keep the
  tray, review summary, and confirmation understandable on real devices. The source
  includes responsive breakpoints and 58px placement slots, but no real-device
  usability evidence was collected in this audit.
