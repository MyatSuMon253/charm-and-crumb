---
name: audit-customizer-flow
description: Audit the Charm & Crumb base-to-confirmation jewelry customizer and turn source-backed usability, responsiveness, accessibility, and release-check findings into prioritized Chapter 6 issue candidates. Use when reviewing the wizard before a demo or release, after changing any step in app/_components, or when asked to audit, test, verify, or find problems in the customization flow.
---

# Audit Customizer Flow

Audit the complete customer journey without changing product code. Separate verified
technical findings from hypotheses that still need a real user's confirmation.

## Workflow

1. Read `app/page.tsx`, `app/_components/customizer-data.ts`, and every step component.
2. Trace the happy path: base and material → charms and tray → placement → order
   review → confirmation and download.
3. Check failure and recovery paths:
   - advancing without required selections;
   - removing tray items or revisiting an earlier step;
   - placing, moving, or replacing charms;
   - keyboard and touch alternatives to drag and drop;
   - narrow viewport layout and 44×44px touch targets.
4. Run `npm run lint` and `npm run build`. Record the exact result; do not claim a
   check passed unless the command completed successfully.
5. Report only findings supported by a file/line reference or command output.

## Output

Use this structure:

- `Scope` — files and flow reviewed.
- `Verification` — lint/build status.
- `Findings` — severity, evidence, user impact, and smallest reasonable fix.
- `Chapter 6 candidates` — at most three concrete, testable issue titles.
- `Needs real-user confirmation` — observations that must not be presented as feedback yet.

Keep the audit concise. Do not edit application files, fabricate user feedback, or file
GitHub issues unless the user explicitly requests those actions.

## Invocation

Run with: `Use $audit-customizer-flow to audit the current wizard and save the
result to docs/chapter-5/customizer-audit.md.`
