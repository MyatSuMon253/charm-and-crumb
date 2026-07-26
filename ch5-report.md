# ch-5 Personal Project — Report

## Project

- **GitHub username:** @MyatSuMon253
- **Repo URL:** https://github.com/MyatSuMon253/charm-and-crumb
- **Live / download URL:** https://charm-and-crumb.vercel.app/

## AI Tools Used

- **Codex skill creator** — scaffolded and validated the reusable project audit skill.
- **`$audit-customizer-flow` skill** — defined an evidence-backed release audit for the complete jewelry customizer.
- **`customizer-ux-auditor` subagent** — independently traced the wizard, ran verification, and saved Chapter 6 issue candidates.
- **Multi-agent workflow** — let the subagent audit independently while the main agent prepared the deck and report.
- **Context7 MCP** — supplied current Next.js 16 App Router documentation for the tech-stack explanation.
- **GSD methodology** — moved from a working end-to-end flow to focused polish, verification, and user-feedback triage.

### Skill (required)

- **path:** .claude/skills/audit-customizer-flow/SKILL.md
- **what:** Audits the base-to-confirmation flow, verifies lint and build, and turns source-backed findings into prioritized Chapter 6 candidates without fabricating user feedback.

### Subagent (required)

- **path:** .claude/agents/customizer-ux-auditor.md
- **what:** Runs the audit skill as an independent read-only reviewer and saves its evidence in the project repo.

## Trigger / Command

- **Trigger:** Before a demo or release, after changing a wizard step, or whenever the complete customization flow needs an accessibility, responsiveness, and release-readiness audit.
- **Command:** `Use the customizer-ux-auditor subagent with $audit-customizer-flow and save its audit to docs/chapter-5/customizer-audit.md.`

## Tech-Stack Slides

- **Slides path:** slides/tech-stack.md

## User Feedback (pick ONE — use just one template)

- **Feedback file path:** feedback/issues.md
- **Open issues:** [#1 selected-base placement preview](https://github.com/MyatSuMon253/charm-and-crumb/issues/1), [#2 pre-designed collection](https://github.com/MyatSuMon253/charm-and-crumb/issues/2), [#3 multiple-item orders and local history](https://github.com/MyatSuMon253/charm-and-crumb/issues/3)
