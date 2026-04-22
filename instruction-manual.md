# Instruction Manual — Working with this workspace

Quick-ref for the most common operations. Covers: starting a new Petit Train site, working on Carnac, adding lessons, troubleshooting.

---

## Workspace layout

```
~/Desktop/eldar-design-development-cc/     ← workspace root
├── CLAUDE.md                              ← router (loaded on every Claude session)
├── .claude/commands/
│   └── new-morbihan-train.md              ← slash command for new sites
└── vibe-coding/
    ├── BRAIN.md                           ← detailed reference brain
    ├── skills/                            ← skills hub
    ├── vibe-coding-instructions/          ← pattern docs
    └── projects/
        ├── petit-train-carnac/            ← YOU ARE HERE (live; Softbird-Web/petit-train-carnac)
        ├── souk-social/
        └── denterlab/
```

---

## Workflow A — Start a new Petit Train site (Vannes, Quiberon, Morbihan)

### 1. Fill the onboarding questionnaire BEFORE starting Claude

```bash
cp vibe-coding/projects/petit-train-carnac/docs/SITE-ONBOARDING-QUESTIONNAIRE.md \
   vibe-coding/projects/petit-train-carnac/docs/SITE-ONBOARDING-QUESTIONNAIRE-VANNES.md
# then open it and fill every blank. Reference SITE-ONBOARDING-QUESTIONNAIRE-CARNAC.md for examples.
```

**Do not skip this.** Claude will refuse to proceed without a filled questionnaire (by design).

### 2. Collect photos

Put all photos the client sent into `~/Desktop/Vannes-photos/`:
- Hero video MP4 (< 10MB, opens on main attraction)
- Opening static image (before video plays)
- Section photos (1 per section, 1920px+)
- 5–8 gallery photos for the Souvenirs trail

### 3. Open Claude Code at the workspace root

```bash
cd ~/Desktop/eldar-design-development-cc
claude    # or your preferred launch command
```

### 4. Fire the slash command

```
/new-morbihan-train vannes
```

Claude will:
- Read the template docs (playbook, Carnac questionnaire example, architecture, customization map, lessons)
- Ask for the path to your filled questionnaire
- Walk through all 6 phases of the playbook (repo setup → brand extraction → content swap → QA → SEO → launch)

**Expected timeline:**
- Vannes (first new site, includes brand.ts extraction): ~10 hours
- Quiberon + Morbihan (after brand extracted): ~5 hours each

---

## Workflow B — Work on the existing Carnac site

### 1. Open Claude Code

```bash
cd ~/Desktop/eldar-design-development-cc/vibe-coding/projects/petit-train-carnac
claude
```

The project's `.claude/settings.json` SessionStart hook auto-loads `docs/lessons.md` into context. The project CLAUDE.md loads automatically.

### 2. Work as usual

All tools work the same: Edit, Bash, Playwright tests, Git commits. Git remote is `Softbird-Web/petit-train-carnac` — pushes auto-deploy to Vercel.

---

## Workflow C — Add a new lesson learned

Anytime something non-obvious gets solved:

```bash
# open docs/lessons.md in the current project (petit-train-carnac for now)
# add a new section with:
#   - The rule (1-line)
#   - WHY (what cost hours if ignored)
#   - Code snippet or grep command to verify
```

The `.claude/settings.json` SessionStart hook will auto-load it into every future session's context — so future-Claude picks it up automatically.

For lessons that apply across ALL projects (not just Petit Train), put them in `~/Desktop/eldar-design-development-cc/vibe-coding/BRAIN.md` instead.

---

## Workflow D — Verify the setup is working

Run these from any fresh shell:

```bash
# 1. Workspace exists + has the right shape
ls ~/Desktop/eldar-design-development-cc/
# → CLAUDE.md  .claude/  vibe-coding/

# 2. Slash command is discoverable
ls ~/Desktop/eldar-design-development-cc/.claude/commands/
# → new-morbihan-train.md

# 3. Carnac project intact + on the right remote
cd ~/Desktop/eldar-design-development-cc/vibe-coding/projects/petit-train-carnac
git remote -v
# → origin  https://github.com/Softbird-Web/petit-train-carnac.git (fetch/push)

# 4. Carnac still builds
npx tsc --noEmit && npx next build
# → 0 errors, 15 pages prerender

# 5. No stale path references anywhere
grep -rn "client-routine-os-main" ~/Desktop/eldar-design-development-cc/ --include="*.md" | head -5
# → (empty = clean)
```

---

## Workflow E — Onboarding a new team member / explaining the system

Show them in order:

1. **Workspace root** — `~/Desktop/eldar-design-development-cc/CLAUDE.md`
2. **This file** — `vibe-coding/projects/petit-train-carnac/instruction-manual.md` (quick ref)
3. **BRAIN.md** — `vibe-coding/BRAIN.md` (stack decisions, critical rules)
4. **Petit Train template docs** (in `vibe-coding/projects/petit-train-carnac/docs/`):
   - `NEW-SITE-PLAYBOOK.md` — the ritual
   - `ARCHITECTURE.md` — the WHY
   - `CUSTOMIZATION-MAP.md` — every hardcoded value
   - `lessons.md` — gotchas we hit, auto-loaded per session

---

## Troubleshooting

### The `/new-morbihan-train` slash command doesn't show up

- Must start Claude Code with cwd = `~/Desktop/eldar-design-development-cc/` OR any subfolder. Slash commands auto-discover from `.claude/commands/` in cwd + parents.
- Verify: `ls ~/Desktop/eldar-design-development-cc/.claude/commands/` should show the file.
- If still not visible: restart Claude Code.

### "Path does not exist" errors when running bash commands

Your Claude Code session was started from the old `client-routine-os-main/eldar-projects/vibe-coding/...` path that no longer exists. Close the session and restart from `~/Desktop/eldar-design-development-cc/` (or a subfolder).

### Vercel stopped auto-deploying after the GitHub transfer

Open Vercel dashboard → petit-train-carnac project → Settings → Git. If it still shows the old `eldardiz/...` URL, click "Disconnect" and reconnect to `Softbird-Web/petit-train-carnac`. You may need to approve the GitHub App for the Softbird-Web org. Env vars + custom domain settings are preserved.

### Claude ignores the template docs and starts guessing

Remind it: "Read `docs/NEW-SITE-PLAYBOOK.md` before doing anything else." Or fire the slash command `/new-morbihan-train <location>` instead of freeform asking — the command explicitly forces Claude to read the docs first.

---

## Keys / secrets / env vars

Nothing sensitive is checked in. Vercel env vars (per project):

| Var | Used for | Required? |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sitemap, canonical URLs, JSON-LD | Recommended (falls back to Vercel preview URL) |
| `MAKE_PRIVATISATION_WEBHOOK_URL` | Privatisation form submission | Only if privatisation page is live |

The Regiondo booking widget ID is public (embedded in HTML) — no secret there.

---

## Links

- **Repo:** https://github.com/Softbird-Web/petit-train-carnac
- **Live site:** https://petit-train-carnac.vercel.app (replace with custom domain once set)
- **Old site being replaced:** https://www.petittrain-morbihan.com/carnac-menhirs-petit-train/ (and `/en/carnac/`)
- **Migration redirect map:** `docs/seo/migration-redirect-map.xlsx`
