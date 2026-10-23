# AGENTS.md

- Static vanilla portfolio: `index.html`, `styles.css`, `script.js`, `assets/favicon.svg`. No framework, package manager, build step, tests, or linters.
- Preview locally with `python3 -m http.server 8000` from the repo root, then open `http://localhost:8000`. Opening `index.html` directly also works.
- Keep it dependency-free apart from Google Fonts loaded by CDN in `index.html`; do not introduce a framework or build tooling unless asked.
- The site is bilingual FR/EN with French as the default. Visible text uses `data-i18n*` keys in `index.html`; add or edit the matching `fr` and `en` entries in the `translations` object in `script.js`. Use `data-i18n-html` for strings containing markup.
- `index.html` is the only entrypoint. Behavior lives in `script.js`: mobile nav, scroll reveal, active section links, project `<dialog>`s, clipboard copy, contact validation, theme toggle, and language switch.
- Theme and language persist in `localStorage` (`theme` = `dark`/`light`, `lang` = `fr`/`en`). An inline script in `<head>` applies the saved or system theme before paint; do not remove it or the page will flash.
- CSS colors live in `:root` (dark) and `[data-theme="light"]`. The palette is `#213448`, `#547792`, `#94B4C1`, `#EAE0CF` with a few derived shades; keep the look flat and editorial (no gradients, glows, particle canvases, or floating badges).
- Nav, footer, and active-link logic depend on section IDs `#accueil`, `#apropos`, `#competences`, `#projets`, `#contact` (active link observes `main section[id]`). Renaming/adding sections means updating `index.html` nav/footer links too.
- Each project card button `data-dialog="..."` must match a `<dialog id="...">` (currently network, security, cloud). Edit the card and its dialog together.
- The contact form is client-side only: it validates, then opens a `mailto:` to `CONTACT_EMAIL` at the top of `script.js`. The email currently appears in 4 places (3 in `index.html`, 1 constant in `script.js`); update all of them plus the LinkedIn/GitHub links before publishing.
- Skill levels and certification statuses are presentational text; adjust the translated labels in both languages if the real levels change.
- Reduced-motion handling exists in both CSS (`@media (prefers-reduced-motion)`) and `script.js`; keep both in sync when adding animation.
- Verify changes by serving the site and checking both themes, both languages, and mobile layouts; there are no automated tests.
