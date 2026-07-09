# ch-3 Personal Project — Report

github_username: MyatSuMon253
personal_repo_url: https://github.com/MyatSuMon253/charm-and-crumb
project_summary: Customized clay jewelry website, create your own design.
slides_url: slides/pitch.md

## Methodology

My methodology was GSD: get shit done by moving from idea to working product quickly, then tightening the details that made the experience feel finished. I did not start by over-planning every component. I started with the customer journey: choose a base, choose a material, add charms, place charms, review the order, and confirm the design. Once that flow worked end to end, I improved the parts users would notice most.

I worked in small slices. First I inspected the starter app and data model, then built each screen around the real interaction it needed to support. The base and material step needed clear product choices and preview images. The charm step needed reusable charm cards with mark, name, and price. The placement step needed drag-and-drop so customers could arrange charms visually. The review and confirmation steps needed to make the final design feel real, including a confirmed design preview and a save-as-image action.

After each slice, I compared the screen against the reference design, fixed layout problems, and ran verification. This GSD loop was: build the useful thing, look at it honestly, fix the weird parts, then run `npm run lint` and `npm run build`. That kept the project moving while still protecting quality.

The final result is a frontend-only Next.js customizer with base/material selection, visible base preview images, taller material color cards including 925 Rose Pink, expanded emoji food charm collections, polished charm tray management, drag-and-drop placement, order review, order success messaging, estimated delivery, a thank-you note, and a downloadable confirmed design image. My superpower for this project was fast iteration with practical cleanup: ship the flow first, extract reusable components where they helped, align the UI to the screenshots, and verify the app before documenting the work.

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
