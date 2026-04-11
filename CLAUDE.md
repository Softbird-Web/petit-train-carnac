# Petit Train Carnac — Project Brain

## Stack
- Next.js App Router, TypeScript, Tailwind CSS
- Deployed on Vercel via GitHub push
- Figma Professional plan + Figma MCP server (local desktop)
- Plugin: gbasin/figma-to-react for generation + visual validation

## Architecture
- app/ → routes and page composition only, no styling logic
- components/ui/ → reusable primitives: Button, Card, Badge, SectionTitle, Container
- components/sections/ → page sections: Hero, Navbar, Pricing, FAQ, Footer etc.
- lib/ → utility functions
- styles/ → global CSS and figma-tokens.css

## Figma-to-Code Workflow
- Optimize Figma file before generating code (components, variables, naming)
- Order: tokens → primitives → sections → page composition
- Select one section at a time in Figma to stay within MCP token limits
- Use gbasin/figma-to-react plugin with /figma-to-react command
- Preserve Figma visuals exactly; never redesign unless explicitly asked

## Git Rules
- Branch for this redesign: feat/figma-redesign
- One commit per completed and reviewed section
- Commit message format: feat: add [section-name] section
- Never push without my approval
- Merge to main only when a full milestone is reviewed

## Design Rules
- Mobile-first; test at 375px and 1280px minimum
- Never use fixed pixel dimensions except where Figma explicitly requires it
- Preserve all copy, spacing, and visual hierarchy from Figma exactly

## Token Efficiency Rules
- Always read CLAUDE.md before starting
- Inspect only the files relevant to the current task
- Never scan the full codebase unless I explicitly ask for an audit
- After each session, update docs/progress.md and docs/lessons.md
