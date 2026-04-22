# Progress Log

## Done

- **All 12 homepage sections** built, polished, QA-passed (Apr 11–12)
- **Global font fix** — `next/font/google` in `app/layout.tsx`: Libre Baskerville, Roboto, Inter, Nunito, Raleway via CSS variables on `<html>` (Apr 13)
- **`app/informations/page.tsx`** — 6 sections from node 1:13939 (Apr 13):
  - InformationsHero, InformationsSchedule, InformationsPrices, InformationsIntro, InformationsReviews, InformationsCTA
  - Reused Locations section component
  - TypeScript: 0 errors

- **`app/prices/page.tsx`** — Prices & Tickets page with parameterized Hero, InformationsSchedule, Reviews, Locations, FAQ (Apr 14)
- **`app/routes/page.tsx`** — Routes page with RoutesHero (lightbox + flip), Souvenirs, RoutesTimeline, FAQ (route-specific), Locations (Apr 14)
  - Routes page QA pass: RoutesHero.jpg hero image, WhiteBridge.png route section image, DownloadWhite/DownloadBlack icons on flyer buttons (Apr 14)
- **`app/careers/page.tsx`** — Careers page with CareersHero (job listings + tall image), CareersInfo (who we are looking for / working with us / how to apply / join the team), Locations (Apr 14)
  - TypeScript: 0 errors

- **Careers page QA pass** (Apr 15):
  - Navbar: added "Careers" link between FAQ and Contact
  - CareersHero: background → CareersHeroBg.png, hero image → CareersHero.jpg, image now fills 100% section height via `self-stretch`
  - CareersInfo: left image → CareersLooking.png
  - CarnacMap: fixed Leaflet "Map container is already initialized" error (React Strict Mode race condition — added `cancelled` flag to async effect)

- **`app/book/page.tsx`** — Bookings page (Apr 15):
  - `BookingHero` (new) — purple hero section, left copy, right tabbed booking form card
    - Tab 1: Individual booking (date, time, adults, children, name, email, phone)
    - Tab 2: Group booking (all individual fields + organisation, total participants, preferred contact, special requirements)
    - States: idle → loading → success | error
  - `BeforeYouBook` (new) — cream 2-col section, megalith photo + bullet list
  - Reused: `Features`, `PracticalInfo`, `GroupBookingCTA`, `Locations`
  - `app/actions/booking.ts` — Server Action: validates form data, POSTs JSON to `MAKE_WEBHOOK_URL`
  - TypeScript: 0 errors

  **Env var required:**
  ```
  MAKE_WEBHOOK_URL=https://hook.eu2.make.com/your-webhook-id
  ```
  Add to `.env.local` and to Vercel project settings.

  **Webhook payload shape Make will receive:**
  ```json
  {
    "type": "individual" | "group",
    "submittedAt": "2026-04-15T10:30:00.000Z",
    "contact": { "firstName", "lastName", "email", "phone" },
    "booking": { "date", "departureTime", "adults", "children" },
    "group": {                    ← only present for group bookings
      "organizationName",
      "totalParticipants",
      "specialRequirements",
      "preferredContact": "email" | "phone"
    }
  }
  ```

- **QA pass — /book page + global fixes** (Apr 15):
  - `BookingHero`: replaced `icon-map-pin.svg` (bookmark icon) with `LocationWhite.svg` for the departure text
  - `BeforeYouBook`: updated hero image to `BeforeYouBook.png`
  - `Navbar`: fixed mobile drawer positioning bug — drawer was `absolute top-full` relative to inner div (h~44px), causing it to overlap the logo; moved drawer to `<nav>` level where `top-full = 80px`; increased `max-h` from 400px to 600px for all nav items to fit; fixed `aria-expanded` to boolean
  - `GroupBookingCTA` + `InformationsCTA`: reduced mobile gap from `gap-16` → `gap-8` on mobile
  - `Prices.tsx` + `InformationsPrices.tsx`: individual adult price updated `8€` → `8,5€`
  - `Footer.tsx`: CTA overlay changed from purple `rgba(58,40,83,0.75)` → `black/70`

- **`app/privatisation/page.tsx`** — Privatisation page (Apr 15):
  - `PrivatisationHero` (new) — full-width 2-panel hero: left is scenic image with purple overlay + heading/description, right is privatisation request form
  - Form fields: Your Details (first name, last name, phone, email, company) + Event Details (event type, departure location, departure time, date, guest count min 10, additional info)
  - `app/actions/privatisation.ts` — Server Action: validates, POSTs to `MAKE_PRIVATISATION_WEBHOOK_URL`
  - Navbar: added "Privatisation" link
  - TypeScript: 0 errors

  **Env var required:**
  ```
  MAKE_PRIVATISATION_WEBHOOK_URL=https://hook.eu2.make.com/your-privatisation-webhook-id
  ```

- **QA pass 2 — image visibility + navbar** (Apr 15):
  - `BeforeYouBook`: moved image div after content in DOM + added `xl:order-first`; now shows below content on mobile/tablet with responsive height (`260px` → `360px` → `487px`)
  - `PrivatisationHero`: moved image panel after form in DOM + added `xl:order-first`; visible on mobile/tablet below the form
  - `Navbar`: removed "Contact" link

- **`app/faqs/page.tsx`** — FAQs page (Apr 15):
  - `FAQsHero` (new) — split-layout hero: left has label/heading/description/Google badge/supporting text; right has scenic photo with card overlay (16 languages)
  - `FAQsSection` (new) — full-width cream accordion with all 14 FAQ items from Figma; first item open by default; inline links to /prices and /privatisation
  - TypeScript: 0 errors

- **QA sprint + image refresh + lessons system** (Apr 21):
  - `Reviews` section rebuilt: GSAP draggable slider with 9 testimonials, clip-path diagonal on images, mobile 1x1 stacking, expo.out easing + 0.1s blur polish
  - `Locations` cards: whole card clickable, purple hover overlay with "Découvrir" + down arrow, 500ms expo-style easing
  - All `<h1>`/`<h2>`/`<h3>` set to `font-normal` (Libre Baskerville rendering at 400); patched 24 files via Python regex
  - Hero + FAQsHero: removed purple clip-path diagonals (the triangle), reworked as direct image clip-path
  - 14 images replaced with contextually correct Carnac photos, all compressed to 142K–400K via `sips -Z 1920 --setProperty formatOptions 50`
  - Hydration bug fix: `BookingHero` had `new Date()` at render (min prop on date input) → moved to `useEffect` + `useState`
  - Image cache fix: wiped `.next/cache/images` after filename-collision replacements
  - `docs/lessons.md` expanded to 12 new sections (SSR/hydration, Tailwind v4, git hygiene, Vercel gotchas, tool selection, etc.)
  - `.claude/settings.json` SessionStart hook: auto-loads `docs/lessons.md` into every new session context
  - CLAUDE.md: blocking top-line directive to read `docs/lessons.md` first

- **GSAP animation refactor — unified 2-attribute contract** (Apr 21):
  - `components/providers/AnimationInit.tsx` rewritten: `data-anim-section` on `<section>` + `data-anim-item` on staggered blocks inside
  - 19 sections tagged + Navbar (animates first on page load, persists across transitions)
  - Hero sections play immediately; others on scroll-into-view (`top 80%`)
  - Zero items = whole-section fallback fade (sliders, accordions)
  - Full PageTransitionProvider compatibility preserved via `page-transition-start` event
  - TypeScript: 0 errors; `next build` → 13/13 pages prerender clean

## Next Steps
- [ ] Add `MAKE_WEBHOOK_URL` + `MAKE_PRIVATISATION_WEBHOOK_URL` to Vercel environment variables and wire up Make scenarios
- [ ] All 7 pages complete ✅
- [ ] Future SEO pass (deferred): `metadataBase`, `app/sitemap.ts`, `app/robots.ts`, enrich JSON-LD with lat/lng + opening hours
- [ ] Cleanup: unused `index` in `Features.tsx:81` map callback; consider removing unused `reviews` array in `InformationsReviews.tsx`
