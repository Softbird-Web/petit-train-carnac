# Customization Map

**Every Carnac-hardcoded value, by category.** Use this as the checklist when cloning this repo to spawn a new Petit Train site.

**Big picture counts** (as of 2026-04-22):
- `"carnac"` (case-insensitive) appears in **171 lines** across .tsx/.ts/.css files
- `#54206d` (primary violet): **63 refs** | `#4d1c64` (deep): **38 refs** | `#f7f7f0` (cream): **76 refs** | `#181d27` (heading): **55 refs** | `#33114d` (dark navbar): **2 refs**
- Contact (phone+email): **18 refs** across 7 files
- Regiondo widget ID: **1 ref** (centralized, good)

**When to use this:**
1. **Reading** — to understand scope before quoting a timeline
2. **Executing Phase 2 (brand extraction)** — checklist of every file to touch when building `lib/brand.ts`
3. **Executing Phase 3 (content swap)** — if brand extraction hasn't happened yet, this is the shopping list of manual edits

---

## 1. Identity + meta

| File | Line | What | Carnac value |
|---|---|---|---|
| `app/layout.tsx` | 44–46 | Root title default + template | `"Petit Train de Carnac Morbihan — ..."` |
| `app/layout.tsx` | 48–49 | Root meta description | (long French blurb) |
| `app/layout.tsx` | 56–75 | OpenGraph + Twitter titles/descriptions | |
| `app/layout.tsx` | 86 | `<html lang="fr">` | `fr` |
| `app/routes/page.tsx` | 2 | Page title | `"Parcours & Itinéraire"` |
| `app/prices/page.tsx` | 11 | Page title | `"Tarifs & Billets"` |
| `app/informations/page.tsx` | 11 | Page title | `"Informations Pratiques"` |
| `app/book/page.tsx` | 10 | Page title | `"Réservez votre visite"` |
| `app/faqs/page.tsx` | 6 | Page title | `"FAQ"` |
| `app/privatisation/page.tsx` | 6 | Page title | `"Privatisation"` |
| `app/careers/page.tsx` | 2 | Page title | `"Carrières"` |
| `app/mentions-legales/page.tsx` | 2 | Page title + body | `"Mentions Légales"` + entire legal copy |
| `app/politique-de-confidentialite/page.tsx` | 2 | Page title + body | `"Politique de Confidentialité"` + privacy policy |
| `CLAUDE.md` | all | Project brain — references "Carnac" throughout | — |
| `package.json` | 2 | `"name": "petit-train-carnac"` | |

**When cloning:** regenerate all titles + descriptions per the filled questionnaire. `lib/site.ts` stays as-is (env-driven).

---

## 2. Business contact data

All 18 references — split into one-line-per-file bucket. Ideal target for `brand.business.*`.

| File | Line(s) | What |
|---|---|---|
| `app/layout.tsx` | 100–108 | JSON-LD: telephone, email, address (street, locality, postal, region, country) |
| `components/ui/RegiondoWidget.tsx` | 36, 39, 43, 46 | Fallback phone + email (shown if script blocked) |
| `components/sections/Footer.tsx` | 22 | Facebook URL (`lespetitstrainsdumorbihan`) |
| `components/sections/Footer.tsx` | 115, 121 | Footer email link + text |
| `components/sections/Footer.tsx` | 124, 130 | Footer phone link + text |
| `components/sections/CareersHero.tsx` | 92 | Apply via email CTA |
| `components/sections/CareersInfo.tsx` | 74 | Apply via email CTA |
| `components/sections/Prices.tsx` | 184, 191, 195 | Group booking contact card (email + phone) |
| `components/sections/InformationsPrices.tsx` | 135, 140, 143 | Group booking contact card (email + phone) |

**When cloning:** every `petittrain-lebayon@orange.fr` → new email, every `+33297240629` (or `+33 2 97 24 06 29`) → new phone, and check JSON-LD address.

---

## 3. Address + geo

| File | Line(s) | What |
|---|---|---|
| `app/layout.tsx` | 103–107 | JSON-LD postal address |
| `components/sections/OurLocation.tsx` | 17, descriptions | Departure point titles + directions copy |
| `components/sections/RoutesTimeline.tsx` | 18–54 | `stops` array (3 stops, each: name, bullets, note, image) |
| `components/sections/InformationsSchedule.tsx` | 3–103 | `months` + `monthsBottom` arrays (departure point names embedded in JSX) |
| `components/sections/PracticalInfo.tsx` | 24–30 | Departure-point copy on the practical-info cards |
| `app/mentions-legales/page.tsx` | ~50 | Legal entity address (NOT the business address — this is the company HQ in Vannes) |

**When cloning:** rewrite all 3 departure points, the schedule matrix, the lat/lng for the Google Maps links, and the geo in JSON-LD. Legal entity address likely stays (unless new microsite has a different legal owner).

---

## 4. Brand colors

**Sum of hardcoded hex refs: 234.** Ideal target for `brand.colors.*` + CSS var substitution.

| Hex | Used as | Count | Primary files |
|---|---|---|---|
| `#54206d` | Primary violet (buttons, italic accent, active states) | 63 | Hero, Footer, every section using accent |
| `#4d1c64` | Deep purple (hover, dark section bg) | 38 | Reviews, GroupBookingCTA, InformationsPrices |
| `#f7f7f0` | Cream background | 76 | Hero, Features, BeforeYouBook, Prices cards, etc. |
| `#181d27` | Heading text | 55 | All h1/h2/h3 classNames |
| `#33114d` | Announcement banner bg | 2 | Navbar only |

**Semantic tokens exist:** `styles/figma-tokens.css` has `--color-primary`, `--color-bg`, `--color-text` etc. — but most code hardcodes the hex instead of using the CSS var. When extracting to `brand.ts`, the tokens file becomes the bridge: brand constants → CSS vars → utility classes.

**When cloning:** replace all 5 hex values globally. Can be done with `sed`/Python regex if the brand palette is a 1:1 swap. If new site has different number of tones (e.g., 2 accents), requires component-by-component review.

---

## 5. Booking

| File | Line | What | Carnac value |
|---|---|---|---|
| `components/sections/BookingSection.tsx` | 4 | Regiondo widget ID constant | `'5712cb43-2e72-445b-956b-947f1f624735'` |

**When cloning:** single-line swap. Confirm new widget ID corresponds to the new location's Regiondo product.

---

## 6. Hero content

| File | Line(s) | What |
|---|---|---|
| `components/sections/Hero.tsx` | 21–27 | `defaultHeading` JSX (H1) |
| `components/sections/Hero.tsx` | 29–38 | `defaultDescription` |
| `components/sections/Hero.tsx` | 61–82 | `defaultRightCard` (audio guide language badge) |
| `components/sections/Hero.tsx` | 85, 88, 90 | Default props (label, tagline, googleBadgeText) |
| `components/sections/Hero.tsx` | 91, 92 | `rightImageSrc`, `rightImageAlt` defaults |
| `app/page.tsx` | ~16 | Homepage Hero usage — `rightVideoSrc` + `openingImageSrc` |

**When cloning:** all default copy on Hero moves to `brand.content.hero*`. Video + opening image filenames are per-location.

---

## 7. Aggregate rating + Google copy

| File | Line | What |
|---|---|---|
| `app/layout.tsx` | 115–116 | JSON-LD aggregateRating (4.7 / 6000 reviews) |
| `components/sections/Hero.tsx` | 90 | `googleBadgeText` default prop |
| `components/sections/Hero.tsx` | 162, 167, 174 | Hero Google badge "4,7" + "6 000+ avis" |
| `components/sections/Reviews.tsx` | ~43 | Google reviews link + supporting text |
| `components/sections/FAQsHero.tsx` | 62–89 | FAQsHero Google badge |
| `components/sections/RoutesHero.tsx` | 143–177 | RoutesHero Google badge |
| `app/prices/page.tsx` | 110 | Prices page Hero Google badge text prop override |

**When cloning:** update rating + review count + link to the new location's Google Business Profile.

---

## 8. Routes / departure points

| File | Line(s) | What |
|---|---|---|
| `components/sections/RoutesTimeline.tsx` | 18–54 | `stops` array (3 objects) — name, bullets, note, image, imageAlt, flip |
| `components/sections/OurLocation.tsx` | 10–49 | `locationItems` array + departure descriptions |
| `components/ui/CarnacMap.tsx` | entire | Leaflet map with 3 hardcoded pins (lat/lng of Carnac stops) |
| `components/sections/PracticalInfo.tsx` | 24–30 | Info-card departure copy |

**When cloning:** rewrite the 3 stops + the map pins + the map center lat/lng. The map component itself is reusable; only the data changes.

---

## 9. Schedules

| File | Line(s) | What |
|---|---|---|
| `components/sections/InformationsSchedule.tsx` | 3–56 | `months` array (April, May, June, July&August) |
| `components/sections/InformationsSchedule.tsx` | 58–103 | `monthsBottom` array (September, October, November, Dec–Feb) |
| `components/sections/InformationsSchedule.tsx` | ~268 | Public holidays note (identical to regular days) |

**When cloning:** rewrite both month arrays per the new location's hours. `plainText` JSX with embedded `<span>`s = requires manual Claude edit, not regex.

---

## 10. FAQs

| File | Line(s) | What |
|---|---|---|
| `components/sections/FAQsSection.tsx` | 6–95 | 14-question FAQ array for `/faqs` page |
| `components/sections/FAQ.tsx` | 13–49 | 7-question `defaultFaqs` for reusable FAQ component |
| `app/routes/page.tsx` | 15–55 | `routeFaqs` array (8 routes-specific questions) |

**When cloning:** ALL FAQ text needs new answers per the new location. Some answers contain JSX links — remember the `plainAnswer` field for FAQPage JSON-LD schema.

---

## 11. Careers

| File | Line(s) | What |
|---|---|---|
| `components/sections/CareersHero.tsx` | 11–34 | `jobPosts` array (3 jobs) |
| `components/sections/CareersInfo.tsx` | 4–32 | 4 content panels (qui, travailler, postuler, rejoindre) |

**When cloning:** check if new location has careers page (optional per site per questionnaire item 9). If yes, rewrite.

---

## 12. Privatisation

| File | Line(s) | What |
|---|---|---|
| `components/sections/PrivatisationHero.tsx` | entire | Form fields + hero copy |
| `app/actions/privatisation.ts` | entire | Server action (Make webhook POST) |
| Vercel env var | — | `MAKE_PRIVATISATION_WEBHOOK_URL` |

**When cloning:** decide per-site if privatisation page is enabled. If yes, update webhook URL in env vars.

---

## 13. SEO

| File | Line(s) | What |
|---|---|---|
| `app/sitemap.ts` | 12–23 | `routes` array (10 paths, priority + changeFrequency) |
| `app/layout.tsx` | 44–77 | Metadata (metadataBase via lib/site.ts env var — **keep**, this is generic) |
| `lib/site.ts` | entire | `SITE_URL` env var + `absoluteUrl` helper — **keep** (generic) |
| `app/robots.ts` | — | `/robots.txt` generator — **keep** (generic) |
| `docs/seo/migration-redirect-map.xlsx` | — | Per-location 301 map for migrating off petittrain-morbihan.com |

**When cloning:** update sitemap routes if URL structure differs. Fill in the correct sheet of the migration-redirect-map XLSX for the new location.

---

## 14. Photos — see `docs/image-manifest.md`

The image manifest is the authoritative list of every image file → where it's used. When cloning, generate a new image-manifest.md for the new location. Every filename in `public/figma-assets/` either (a) gets replaced with the new photo at the same filename (no code changes needed), or (b) gets a new filename and requires updating references in the tsx files.

**Recommended approach:** keep same filenames, swap files. Zero code changes for photos.

---

## What's safe to leave alone (generic infrastructure)

Don't touch these when cloning:

- `components/providers/AnimationInit.tsx` (animation system contract — see ARCHITECTURE.md)
- `components/providers/LenisProvider.tsx` + `PageTransitionProvider.tsx`
- `components/ui/RegiondoWidget.tsx` (only the fallback phone/email — rest is generic)
- `components/ui/ScrollReveal.tsx`, `TransitionLink.tsx`, `TransitionOverlay.tsx`, `HeroVideoPanel.tsx`
- `components/seo/BreadcrumbSchema.tsx`
- `lib/site.ts`, `lib/utils.ts`
- `app/sitemap.ts`, `app/robots.ts` (structure stays; only `routes` content changes per site)
- `app/globals.css`
- `next.config.ts`, `tsconfig.json`, `package.json` dependencies (only `name` field changes)
- `playwright.config.ts`
- `.claude/settings.json`
- `docs/lessons.md` (generic lessons — keep)
- `tests/qa.spec.ts` (update the expectations to match new site, keep the structure)

---

## One-command audit for the new site

Before committing a cloned-and-swapped site, run this:

```bash
# Any remaining Carnac-specific hardcoding?
grep -rni "carnac\|menec\|lebayon\|54206d\|4d1c64\|5712cb43" \
  --include="*.tsx" --include="*.ts" --include="*.css" \
  app/ components/ lib/ styles/ docs/

# Should return only new-site values. Any "carnac"/"menec"/"lebayon" hit = something missed.
```
