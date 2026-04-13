# Next Session — Inner Pages Build

## Next Page
**`app/prices/page.tsx`** — Figma node `1:17365`

1. Arm figma-to-react hook (see CLAUDE.md workflow)
2. Fetch design context for node `1:17365`
3. Build each section as a separate component in `components/sections/`
4. Create `app/prices/page.tsx` importing those sections (no Navbar/Footer)
5. `npx tsc --noEmit` — 0 errors
6. Update `docs/progress.md`, ask for commit approval

---

## Open Issues (fix only when asked)

| Issue | File | Fix |
|---|---|---|
| Navbar — no mobile menu on < lg | `components/layout/Navbar.tsx` | Hamburger + state-controlled drawer |
| Hero — clip-path breaks on mobile when columns stack | `components/sections/Hero.tsx` | Guard with `lg:` breakpoint |
| Locations — card text overflows `h-[550px]` on medium screens | `components/sections/Locations.tsx` ~L103 | `line-clamp-4` on description `<p>` |
| Locations — wrong icon on card headings | `components/sections/Locations.tsx` | Verify correct icon vs Figma |
| icon-info.svg vs icon-info-white.svg — same file size, may be identical | `public/figma-assets/` | Verify white variant renders white on dark Prices card |
