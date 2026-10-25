# AGENTS.md

## Repo
- Static GitHub Pages portfolio; runtime is vanilla HTML/CSS/JS in `index.html`, `styles.css`, `script.js`. No package manager, build step, tests, or linters; don't add frameworks, build tooling, or dependencies beyond the Google Fonts CDN (2 families: Albert Sans and JetBrains Mono).
- `PRODUCT.md` is the source of truth for audience, positioning, facts, and known gaps. `DESIGN.md` is the committed visual contract (tokens, type scale, components, do/don't). Keep both in sync; never invent evidence (`assets/cv.pdf`, certification badges, screenshots, live project links don't exist).
- `assets/` holds production assets plus the user's originals (`logo for black background.png`, `logo for white background.png`) — never edit the originals.
- `.impeccable/` is design-skill state (config, generated `design.json`, surface brief, mocks); local config is ignored. Keep `DESIGN.md` and `.impeccable/design.json` aligned when the system changes; don't hand-tune generated mocks. The direction contract is `.impeccable/surfaces/index-html.md`.

## Preview and verification
- Serve the repo root with `python3 -m http.server 8000`, then open `http://localhost:8000`. There is no CI.
- No automated checks. After UI/content changes manually verify FR/EN, light/dark, mobile nav at ≤980px, layouts at 980/860/620/380, keyboard focus, no-JS content, and `prefers-reduced-motion`.
- Check for horizontal overflow at 1440, 390, and 320; keep the contact form's demo status and validation honest.

## Architecture
- Single page. `index.html` holds all markup/content and works without JS; `script.js` enhances theme/lang switching, the mobile dropdown, scroll spy, counters, copy buttons, the pointer ribbon, back-to-top, and the cosmetic contact form (client-side validation only, no backend).
- Layout is a sticky prospectus header + 1180px ruled bands, not a centered landing page and not a case file. At ≤980px the header nav becomes the burger dropdown (closes on Escape, link click, or resize >980px); the hero becomes one column.
- Keep the inline `<head>` script that applies the saved theme before paint; removing it causes a flash. Default theme is **light**; `localStorage` keys are `theme` (`light`/`dark`) and `lang` (`fr`/`en`).
- `setTheme()` writes hard-coded `#f7f7fa` / `#0f0d20` values into `meta[name="theme-color"]`; update those alongside the palette tokens.
- Sections: `#home`, `#about`, `#skills`, `#projects`, `#experience`, `#certifications`, `#contact`. Header links use `data-spy-link`; the spy observes `main section[id]` and aliases `certifications` to the experience link. `#certifications` intentionally has no direct nav link.
- Theme tokens live in `:root` (light) and `:root[data-theme="dark"]` (dark). Use existing tokens (with `color-mix()` for tints); don't hard-code colors. The violet signal is for action, current position, focus, and verification only.

## Bilingual content
- French is the inline default. Every user-visible string needs `data-fr` and `data-en`; aria labels use `data-fr-aria`/`data-en-aria`; placeholders use `data-fr-ph`/`data-en-ph`.
- The switcher replaces `textContent` on every `[data-fr]`/`[data-en]` element — keep those elements text-only, not wrappers around markup you need to preserve. Put the data attributes on leaf spans when a block contains icons or nested elements.
- Page title/description translations live in `META`; form status in `MESSAGES`; copy feedback in `COPY_OK` (`script.js`).
- Icons come from the inline SVG sprite at the top of `<body>`; use `<use href="#i-…">`, not an icon library.
- Logos: `.logo-dark` shows in light, `.logo-light` in dark (names refer to the asset background, not the active theme); 40×43 display, 34×37 ≤620. Favicon is the separate CZ badge.

## Design constraints
- Network Prospectus world: bone-white `--ground`/`--surface` fields, `--ink` text, `--hairline` rules, `--violet` signal, and the teal/lilac ribbon. Read `DESIGN.md` before visual changes; its do/don't rules are binding. No paper, grain, desk, folder, heavy shadows, glass, neon, or gradient text.
- Type: Albert Sans display/body, JetBrains Mono metadata; keep the two Google Fonts families.
- Breakpoints: 1180 (header/hero tuning), 980 (nav → burger, one-column hero, 2-column facts/credentials, contact stacks), 860 (route vertical, brand role and back-top hidden), 620 (compact header, one-column credentials, full-width actions, icon copy), 380 (headline and section-head tweaks).
- All motion must stop under `prefers-reduced-motion: reduce`, and content must remain visible. The facts-band rise is the only authored entrance.
- Known gap before publishing: `assets/cv.pdf` is referenced but missing. Confirmed profiles: GitHub `https://github.com/Cedophe`, LinkedIn `https://www.linkedin.com/in/cedophe-zohoun-914872220/`.
