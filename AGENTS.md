# AGENTS.md

## Repo
- Static GitHub Pages portfolio; runtime is vanilla HTML/CSS/JS in `index.html`, `styles.css`, `script.js`. No package manager, build step, tests, or linters; don't add frameworks, build tooling, or dependencies beyond the Google Fonts CDN (3 families).
- `PRODUCT.md` is the source of truth for audience, positioning, facts, and known gaps. `DESIGN.md` is the visual contract (tokens, type scale, do/don't). Keep both in sync; never invent evidence (`assets/cv.pdf`, certification badges, screenshots, live project links don't exist).
- `assets/` holds production assets plus the user's originals (`logo for black background.png`, `logo for white background.png`) — never edit the originals.
- `.impeccable/` is design-skill state (config, generated `design.json`, surface brief, mocks); local config is ignored. Don't hand-edit generated files. The direction contract is `.impeccable/surfaces/index-html.md`; `DESIGN.md` is the committed visual system.

## Preview and verification
- Serve the repo root with `python3 -m http.server 8000`, then open `http://localhost:8000`. There is no CI.
- No automated checks. After UI/content changes manually verify FR/EN, light/dark, mobile nav at ≤980px, narrow layout at ≤620px, keyboard focus, and `prefers-reduced-motion`.

## Architecture
- Single page. `index.html` holds all markup/content and works without JS; `script.js` enhances theme/lang switching, mobile rail nav, scroll spy, counters, copy buttons, and the cosmetic contact form (client-side validation only, no backend).
- Layout is a fixed case-file header + left `file-rail` index + `report` sheet, not a centered landing page. At ≤980px the rail becomes the burger dropdown (closes on Escape, link click, or resize >980).
- Keep the inline `<head>` script that applies the saved theme before paint; removing it causes a flash. Default theme is **light**; `localStorage` keys are `theme` (`light`/`dark`) and `lang` (`fr`/`en`).
- `setTheme()` also writes hard-coded hex values into `meta[name="theme-color"]`; update those alongside the palette tokens.
- Sections: `#home`, `#about`, `#skills`, `#projects`, `#experience`, `#certifications`, `#contact`. Rail links use `data-spy-link`; the spy observes `main section[id]`; `#certifications` intentionally has no nav link. Update rail numbering/caption when adding or renaming sections.
- Theme tokens live in `:root` (light) and `:root[data-theme="dark"]` (dark). Use existing tokens (with `color-mix()` for tints); don't hard-code colors.

## Bilingual content
- French is the inline default. Every user-visible string needs `data-fr` and `data-en`; aria labels use `data-fr-aria`/`data-en-aria`; placeholders use `data-fr-ph`/`data-en-ph`.
- The switcher replaces `textContent` on every `[data-fr]`/`[data-en]` element — keep those elements text-only, not wrappers around markup you need to preserve. Put the data attributes on leaf spans when a block contains icons or nested elements.
- Page title/description translations live in `META`; form status in `MESSAGES`; copy feedback in `COPY_OK` (`script.js`).
- Icons come from the inline SVG sprite at the top of `<body>`; use `<use href="#i-…">`, not an icon library.
- Logos: `.logo-dark` shows in light, `.logo-light` in dark (names refer to the asset background, not the active theme); 44×47 display, 36×39 ≤620. Favicon is the separate CZ badge.

## Design constraints
- Case-file/manila-paper world: `--desk`/`--folder`/`--paper` surfaces, `--ink` text, `--steel` rules, `--signal` red accent. Read `DESIGN.md` before visual changes; its do/don't rules are binding.
- Type: Alumni Sans display, Albert Sans body, JetBrains Mono metadata; keep the three Google Fonts families.
- Breakpoints: 1180 (rail/hero tuning), 980 (rail → burger, single-column shell), 860 (grids/asides/contact stack), 620 (compact header, single-column, larger tap targets), 380 (headline tweaks).
- All motion must stop under `prefers-reduced-motion: reduce`, and content must remain visible.
- Known gap before publishing: `assets/cv.pdf` is referenced but missing. Confirmed profiles: GitHub `https://github.com/Cedophe`, LinkedIn `https://www.linkedin.com/in/cedophe-zohoun-914872220/`.
