# Petit Train Carnac — Project Brain

> ⚠️ **FIRST ACTION EVERY SESSION — NON-NEGOTIABLE:**
> Before touching any code, reading the codebase, or responding to the user's request, use the Read tool on `docs/lessons.md` in full.
> It contains hard-won rules that prevent hours of rework (SSR hydration traps, Tailwind v4 surprises, Vercel deploy gotchas, Figma MCP patterns, etc.).
> This is not a suggestion. The file exists because ignoring these costs hours, every project.

## 2nd Brain
Location: ~/Desktop/client-routine-os-main/vibe-coding/vibe-coding/
Session start: read BRAIN.md, pull relevant pattern files.
Session end: propose new mistakes/patterns if any emerged.

## Session Protocol

**Session start (read these first, in order):**
1. `docs/lessons.md` — everything learned in prior sessions
2. This CLAUDE.md foundations section
3. `docs/progress.md` — what's done, what's next
4. `docs/image-manifest.md` — if the session touches images

**Session end (before commit — blocking):**
1. Append 1–3 entries to `docs/lessons.md` covering anything non-obvious learned this session
2. Update `docs/progress.md` with what shipped
3. If any image was added/changed: update `docs/image-manifest.md`
4. Only then: commit

**Before taste-driven sections (Reviews, Hero, CTAs, forms):**
- Fill out `docs/acceptance-spec-template.md` with the user in 2 minutes. Do NOT start coding without it.

## Foundations (locked — do not rediscover)

These decisions are global. If a decision here is wrong, fix it in ONE place, not 24.

**Typography:**
- Headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`): always add `font-normal` explicitly. Browser default is `font-weight: 700`; Tailwind v4 preflight does NOT reset it; Libre Baskerville headings must render at 400.
- Fonts loaded via `next/font/google` in `app/layout.tsx` → CSS vars on `<html>`: Libre Baskerville, Roboto, Inter, Nunito, Raleway.
- Heading scale: `text-[48px] xl:text-[60px]` for h2, larger for h1. Always `font-['Libre_Baskerville',serif]` + `font-normal`.
- Body: `font-['Roboto',sans-serif] text-[16px] tracking-[-0.48px]`.

**Color tokens** — `styles/figma-tokens.css`:
- `--color-primary` (purple #54206d / deep purple #4d1c64)
- `--color-bg` (cream #f7f7f0)
- `--color-text` (dark #181d27) / `--color-text-muted` (#535862)

**Animation system** (wire on Session 0, never retrofit):
- `components/ui/ScrollReveal.tsx` — IntersectionObserver, `direction=up/left/right`, `delay` prop
- GSAP scroll-reveal via `data-anim-section` / `data-anim="hero-title|hero-paragraph|tagline|hero-button"` attributes
- Osmo character-stagger button: `.btn-animate-chars` in `globals.css` + `data-button-animate-chars` in spans
- Page transitions: `TransitionLink` + `[data-transition-wrap]` overlay

**Build/deploy gotchas (locked):**
- Lenis = ESM-only → use `dynamic import()` on Next 16 + Turbopack
- `tailwindcss` and `postcss` must be in `dependencies` (not devDependencies) for Vercel builds
- Node 24 is the Vercel default; pin in `vercel.ts` going forward
- Next.js `<Image>` with `fill` requires a sized `relative` parent — never `<img>`
- SVG icons: `<Image fill className="object-contain">` inside a sized `relative` div

**SSR / Hydration — locked rules (never violate, full details in `docs/lessons.md`):**
- ❌ NEVER call `new Date()`, `Date.now()`, `Math.random()`, or locale-dependent formatters in the render body of a client component or at module scope
- ✅ ALWAYS defer those to `useEffect` + `useState` so they run only after hydration
- Dated inputs: `const [minDate, setMinDate] = useState(''); useEffect(() => setMinDate(new Date().toISOString().split('T')[0]), [])`
- Safe places for time-varying values: server actions (`app/actions/`), route handlers, event handlers, `useEffect` bodies
- **Before adding any date/time/random logic to a `"use client"` component, ask: "does this run at render?" — if yes, move it to `useEffect`**

**Dev cache gotchas:**
- Replaced an image but still seeing the old one? `rm -rf .next && npm run dev` + hard-refresh (Cmd+Shift+R). Next's image optimizer caches by filename.

**Image pipeline:**
- Compress once on entry: `sips -Z 1920 --setProperty formatOptions 50 <src> --out public/figma-assets/<dest>`
- Every image logged in `docs/image-manifest.md` BEFORE it's referenced in code
- Target < 1MB per asset; quality 40 for hero bgs, 50 for section images, 75 for small icons

## Stack
- Next.js 16.2.3, TypeScript, Tailwind CSS v4
- Vercel deploy via GitHub push (branch: main)
- Figma MCP (local desktop plugin), file key: `wTd0GeN1Y2HWGw3nkii3t8`
- **Booking:** Regiondo embedded widget (`product-widget.min.js`). Carnac widget ID: `5712cb43-2e72-445b-956b-947f1f624735`. Integration: `components/ui/RegiondoWidget.tsx` → `components/sections/BookingSection.tsx` → `/book` page.

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
| 2 | Prices and Tickets | 1:17365 | app/prices/page.tsx | ✅ done |
| 3 | Routes | 1:23354 | app/routes/page.tsx | ✅ done |
| 4 | FAQs | 1:20537 | app/faqs/page.tsx | ✅ done |
| 5 | Book | 1:24145 | app/book/page.tsx | ✅ done |
| 6 | Privatization | 1:17070 | app/privatization/page.tsx | ✅ done |
| 7 | Careers | 1:23842 | app/careers/page.tsx | ✅ done |

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
