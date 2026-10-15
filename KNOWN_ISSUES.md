# Known Issues & Deferred Work

Items acknowledged but intentionally **not** fixed yet. Most are queued for the
upcoming frontend/backend merge. Last updated 2026-10-15.

---

## Deferred to the merge

### 1. Git history still carries ~74 MB of removed media

The working tree is lean — `prrc-next-app/public/` went **76 MB → 1.5 MB** — but
the deleted blobs remain in history, so a **fresh clone still downloads them**.
The repository stays oversized until history is rewritten.

Removed in `cd63a58` (2026-10-14) plus the follow-up `Mountain_White.png` —
**12 files, 73.75 MB**:

- 5 headshot WebPs (up to 5915x8872 / 52 MP, rendered at 64x64):
  `Sai_Wang.webp`, `Jianjia_Yu.webp`, `Jean-Lucien.webp`, `Robert_Czarnota.webp`,
  `Dung_Bui.webp`
- `homepage-banner.png`, `balch.jpg`, `NewMexicoTechECAM.jpeg`,
  `students-collage-1.webp`, `PRRC_Laboratory_Emergency_Procedures_031225.pdf`
- `vecteezy_a-woman-in-a-lab-coat-is-holding-a-glass-with-yellow-liquid_72153341.jpg`
  (superseded by `AddressingKeyTechnicalChallenges.svg`)
- `Mountain_White.png` (NMT logo — replacement pending from Dory)

**Fix:** rewrite history with `git filter-repo` (or BFG) and force-push.
**Do it during the merge**, when everyone is re-cloning anyway — rewriting history
invalidates every existing clone and rewrites commit SHAs.

### 2. Two routers in one app

`src/pages/*` (Pages Router — the live site) and
`src/app/frontend/staff/page.tsx` (App Router — partially migrated) coexist.
The App Router page needs the `@payload-config` webpack alias (present in
`next.config.ts`) **plus** a matching `tsconfig.json` `paths` entry before `tsc`
can resolve it.

### 3. `_archive_legacy_pages/` — intentional, do not fix

Snapshot of the original pages. The imports are broken by design (the folder was
moved, so relative depths no longer resolve) and account for 8 of the repo's type
errors. Per Dory: *"It is the original code. It doesn't need to
function right now, but it does need to be here until I can create legacy
repositories for archival purposes."*

→ Move to a dedicated legacy repository once that exists.

---

## Smaller hygiene items

### 4. `playwright.config.ts` references an uninstalled dependency

It imports `@playwright/test`, which is not in `package.json`. The visual-QA
harness that actually works today is `scripts/screenshot_pages.py`
(Python + Playwright); run `npm run` `check:assets` for the asset budget check.

### 5. No page has a `<title>`

Every route returns an empty title, so browser tabs are blank. Needs `next/head`
(Pages Router) or the App Router `metadata` export, per page.

### 6. Orphaned images (small, under budget)

Unreferenced since the admin cards moved to the filler logo:
`raney.jpg` (216 KB), `jmclemore.jpg` (14 KB), `wei.jpg` (25 KB),
`nbenalil.jpg` (18 KB).

`prrcblankuser.jpeg` **must stay** — it is the CMS fallback in `StaffCard.tsx`
and in three `StaffCards/*` components.

### 7. Filler-logo swap points

Awaiting real artwork; currently showing `PRRClogolightoldtransparent.png`:

- `dashboard/Navbar.tsx` — NMT logo (links to nmt.edu)
- `dashboard/Footer.tsx` — NMT logo (links to nmt.edu)
- `layouts/Homepage.tsx` — LinkedIn post card thumbnail
- `layouts/Education.tsx` — header background (`opacity-20`) and photo grid
- `AdminCards/*` + `layouts/AdminLayouts/BalchLayout.tsx` — 7 portrait slots
- `headers/ResearchHeaders.tsx` — Research header illustration
  (`AddressingKeyTechnicalChallenges.svg` stands in here)
