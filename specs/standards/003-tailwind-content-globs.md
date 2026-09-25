# 003-Tailwind-Content-Globs

## What Happened
`tailwind.config.js` declared `content` globs as `./pages/**` and
`./components/**`, but all source lives under `src/`. Tailwind's JIT compiler
only scans files it is told about, so it scanned non-existent directories and
generated **zero** utility classes from the components. Only hand-written classes
in `src/styles/globals.css` and inline `style={{}}` worked — every component
relying on `flex`, `grid`, `gap-*`, spacing, responsive (`lg:`/`md:`), or hover
states rendered unstyled, so the UI looked broken.

## The Cost
- **Diagnosis:** regenerated CSS with the Tailwind CLI and confirmed known-used
  classes (`grid-cols-1`, `flex-1`, `max-w-screen-xl`) were absent; Tailwind also
  emitted its own `content-configuration` warning. (~312 distinct utility classes
  purged from output.)
- **Fix:** pointed the globs at the real layout — `./src/pages/**` and
  `./src/components/**`. Regenerating then produced 427+ selectors cleanly (exit
  0, no warnings). Committed as `28f8bdb`.

## The Rule
- `content` globs in `tailwind.config.js` **must match the actual source layout**
  (e.g. `./src/pages/**` and `./src/components/**`, not bare `./pages`).
- Before shipping UI changes, verify utilities are actually emitted: run
  `npx tailwindcss -i src/styles/globals.css -o /tmp/css_probe.css --minify` and
  grep for a class you know the components use. If it is absent, the `content`
  globs (or PostCSS wiring) are wrong — fix before assuming it is a component bug.
