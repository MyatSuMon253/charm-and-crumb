# ch-3 Personal Project — Report

github_username: MyatSuMon253
personal_repo_url: https://github.com/MyatSuMon253/charm-and-crumb
project_summary: Customized clay jewelry website, create your own design.
slides_url: slides/pitch.md

## Methodology

My methodology was GSD: get the working product on screen first, then polish, refactor, and verify it. I used the sample screens as the source of truth, broke the work into the core customer flow, and shipped the frontend-only Next.js customizer with base/material selection, charm tray management, drag-and-drop placement, order review, and cart confirmation. My superpower for this project was fast iteration: inspect the starter app, build the complete experience, extract reusable shadcn UI-backed components into `app/_components`, run lint/build, then update the report and pitch while the work was fresh.

## Evidence — Claude Code usage

<!-- List the ACTUAL paths in your personal repo. The validator checks these exist. -->

### MCP

- path: .mcp.json
- what: Context7 MCP was used to fetch current Next.js App Router documentation before implementing the frontend.

### Skill

- path: .claude/skills/frontend-customizer/SKILL.md
- what: Documents the frontend-only customizer requirements, shadcn UI refactor direction, expected user flow, and verification steps.

### Agent

- path: .claude/agents/ui-builder.md
- what: Defines the UI builder role for matching the sample screens, checking responsive states, and keeping report/slides updated.
