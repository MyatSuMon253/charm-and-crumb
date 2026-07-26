---
marp: true
paginate: true
transition: fade
auto-advance: 20
---

<!-- slide 1 -->

# Charm & Crumb

## How the custom jewelry wizard is built

Chapter 5 · workflow + capability

[charm-and-crumb.vercel.app](https://charm-and-crumb.vercel.app/)

---

<!-- slide 2 -->

# Tech stack

- **Next.js 16 App Router** — file-system app structure and production build
- **React 19 + TypeScript** — typed, interactive client-side wizard state
- **Tailwind CSS 4** — responsive, token-based styling
- **shadcn/ui + Base UI** — accessible primitives wrapped for the project
- **Vercel** — public deployment

---

<!-- slide 3 -->

# Subagent

**`customizer-ux-auditor`**

- Traces base → charms → placement → confirmation
- Checks recovery paths, mobile/touch use, and accessibility
- Runs lint and production build
- Saves source-backed Chapter 6 issue candidates
- Never presents AI observations as real-user feedback

---

<!-- slide 4 -->

# Skill

**`$audit-customizer-flow`**

- Reusable release-audit workflow
- Requires file/line or command evidence
- Separates verified defects from user-test hypotheses
- Produces a short, prioritized handoff

Path: `.claude/skills/audit-customizer-flow/SKILL.md`

---

<!-- slide 5 -->

# Methodology

**GSD + small vertical slices**

1. Make the full customer journey work.
2. Polish one step at a time.
3. Use Context7 for current framework guidance.
4. Run an independent subagent audit.
5. Verify with lint and build.
6. Carry real feedback into Chapter 6.

---

<!-- slide 6 -->

# Trigger + commands

**Trigger:** before a demo/release or after changing a wizard step.

**Fire it:**

`Use the customizer-ux-auditor subagent with $audit-customizer-flow and save its audit to docs/chapter-5/customizer-audit.md.`

**Verify locally:**

`npm run lint` · `npm run build` · `npm run dev`
