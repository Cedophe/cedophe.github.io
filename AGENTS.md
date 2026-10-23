# AGENTS.md

- Static vanilla portfolio: `index.html`, `styles.css`, `script.js`, `assets/favicon.svg`. No framework, package manager, build step, tests, or linters.
- Preview locally with `python3 -m http.server 8000` from the repo root, then open `http://localhost:8000`. Opening `index.html` directly also works.
- Keep it dependency-free apart from Google Fonts loaded by CDN in `index.html`; do not introduce a framework or build tooling unless asked.
- `index.html` is the only entrypoint. Behavior lives in `script.js`: mobile nav, scroll reveal, active section links, project `<dialog>`s, clipboard copy, and contact validation.
- The contact form is client-side only: it validates, then opens a `mailto:` to `CONTACT_EMAIL` defined at the top of `script.js`. Replace that constant plus the placeholder email, LinkedIn, and GitHub links in `index.html` before publishing.
- Project cards and their `<dialog>` details use placeholder content aligned with networking, security, AWS, and mentoring. Edit both places together.
- Skill percentages and certification statuses are presentational; adjust the labels and `aria-valuenow`/`--level` values if the real levels change.
- Verify changes by serving the site and checking desktop and mobile layouts; there are no automated tests.
