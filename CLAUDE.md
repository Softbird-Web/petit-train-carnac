# Petit Train Carnac — Project Brain

## Stack
- Next.js 16.2.3, TypeScript, Tailwind CSS v4
- Vercel deploy via GitHub push (branch: main)
- Figma MCP (local desktop plugin), file key: `wTd0GeN1Y2HWGw3nkii3t8`

## Libraries (exact import paths)
```
motion@12.38.0     → import { useAnimate } from 'motion/react'
                     import type { DOMKeyframesDefinition, AnimationOptions } from 'motion'
clsx@2.1.1         → import { type ClassValue, clsx } from 'clsx'
tailwind-merge     → import { twMerge } from 'tailwind-merge'
oxlint             → npx oxlint --fix <file>
```

## File Structure
```
app/
  globals.css       ← @import "../styles/figma-tokens.css" THEN @import "tailwindcss"
  layout.tsx        ← Navbar + Footer here — never re-add in page files
  page.tsx          ← section imports only, no logic/styles
components/
  fancy/image/image-trail.tsx   ← DO NOT rewrite
  layout/Navbar.tsx             ← "use client"; sticky; scroll shadow
  sections/                     ← one file per Figma section
  ui/ScrollReveal.tsx           ← IntersectionObserver reveal; direction=up/left/right; delay prop
lib/utils.ts                    ← cn() = twMerge(clsx(inputs))
styles/figma-tokens.css         ← CSS vars: --color-primary, --color-bg, --color-bg-dark, --color-text, --color-text-muted
public/figma-assets/            ← all images/SVGs; URL prefix /figma-assets/
```

## Figma-to-Code Workflow
1. Arm hook: `rm -rf /tmp/figma-to-react && mkdir -p /tmp/figma-to-react/captures && touch /tmp/figma-to-react/capture-active`
2. Write config.json to `/tmp/figma-to-react/config.json`
3. Spawn sub-agent: call `get_metadata` then `get_design_context`
4. Sub-agent writes .tsx, runs `npx tsc --noEmit`
5. Parent verifies, updates `docs/progress.md`

## Page Build Order (remaining)
| # | Page | Node ID | Route | Status |
|---|---|---|---|---|
| 1 | Informations | 1:13939 | app/informations/page.tsx | ✅ done |
| 2 | Prices and Tickets | 1:17365 | app/prices/page.tsx | next |
| 3 | Routes | 1:23354 | app/routes/page.tsx | pending |
| 4 | FAQs | 1:20537 | app/faqs/page.tsx | pending |
| 5 | Book | 1:24145 | app/book/page.tsx | pending |
| 6 | Privatization | 1:17070 | app/privatization/page.tsx | pending |
| 7 | Careers | 1:23842 | app/careers/page.tsx | pending |

**One page per session. Finish, commit, end session.**

## Typography (from Figma)
- Headings: `font-['Libre_Baskerville',serif] text-[48px] leading-[1.15] tracking-[-3.36px]`
- Section labels: `font-['Libre_Baskerville',serif] italic text-base tracking-[-0.48px]`
- Body: `font-['Inter',sans-serif] text-[18px] leading-[1.2] tracking-[-0.54px]`
- Buttons: `font-['Roboto',sans-serif] text-base font-medium tracking-[-0.64px]`

## CTA Button (cream)
```tsx
<Link href="#" className="inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap">
  Label
</Link>
```

## Asset Conventions
- All assets → `public/figma-assets/`
- SVG icons: `<Image fill className="object-contain">` inside a sized `relative` div
- Never `<img>` — always `next/image`

## Known Pitfalls (project-specific only)
- **CSS accordion**: use `grid-template-rows: 0fr → 1fr`, not `max-height`. Already in globals.css as `.faq-answer-wrap` / `.faq-answer-wrap.open`; inner content needs `.faq-answer-inner overflow-hidden`.
- **Infinite scroll columns**: total height of one card set must be ≥ container height (`h-[560px]`) for seamless loop.
- **maskImage**: must be inline styles — only approved exception to no-inline-styles rule. `style={{ maskImage: "...", WebkitMaskImage: "..." }}`
- **Figma MCP**: decorative SVG vectors can cause 100k+ token bloat — select sections individually, never the whole page.

## Git Rules
- Branch: main (direct commits approved)
- One commit per completed section: `feat: add [name] section`
- Never auto-commit/push without explicit approval
- Stage specific files only — never `git add -A`

## Token Efficiency
- Surgical edits only (Edit tool). Only full rewrite if > 60% of file changes.
- `/compact` after every 2 major tasks.
- Never run Playwright unless explicitly requested.
- After each session: update `docs/progress.md`.

## Error Handling
Never silently swallow errors. Fallbacks must be disclosed. Priority: works correctly > visible fallback > clear error message > never silent degradation.

## Skill Registry (qa-skills)
Source: https://github.com/neonwatty/qa-skills — QA testing pipeline: workflow generation, Playwright E2E conversion, 6 audit agents.

### Generators
- [desktop-workflow-generator]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/desktop-workflow-generator/SKILL.md
- [mobile-workflow-generator]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/mobile-workflow-generator/SKILL.md
- [multi-user-workflow-generator]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/multi-user-workflow-generator/SKILL.md

### Converters
- [desktop-workflow-to-playwright]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/desktop-workflow-to-playwright/SKILL.md
- [mobile-workflow-to-playwright]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/mobile-workflow-to-playwright/SKILL.md
- [multi-user-workflow-to-playwright]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/multi-user-workflow-to-playwright/SKILL.md

### Runner
- [playwright-runner]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/playwright-runner/SKILL.md

### Audits & Analysis
- [adversarial-audit]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/adversarial-audit/SKILL.md
- [resilience-audit]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/resilience-audit/SKILL.md
- [keyword-wedge]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/keyword-wedge/SKILL.md
- [trust-builder]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/trust-builder/SKILL.md
- [review-learnings]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/review-learnings/SKILL.md
- [submit-learnings]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/submit-learnings/SKILL.md

### Utility
- [use-profiles]: https://raw.githubusercontent.com/neonwatty/qa-skills/main/skills/use-profiles/SKILL.md
