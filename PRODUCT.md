# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Cédophe for network/security engineering roles, plus businesses/decision-makers seeking someone to deploy or manage enterprise infrastructure. Both audiences are first-order. He wants them to act after visiting: contact him (email/phone/form), download his CV, or verify his credentials.

## Product Purpose

A personal portfolio site presenting Cédophe ZOHOUN's profile as a Network & Cybersecurity Engineer based in Accra, Ghana. It showcases his experience (enterprise firewalls, cloud, multi-site networking, VoIP), hands-on projects, certifications, and his training work (50+ engineers trained in CCNA/CCNP/AWS). Success = visitor initiates contact: applies/collaborates, downloads the CV, or requests his services/training.

## Positioning

A field-tested engineer deploying real enterprise-scale infrastructure in West Africa (Palo Alto NGFW for 500+ users, FortiGate across 16+ branches supervised via FortiManager) who also trains the next generation of network engineers — practitioner and educator in one, fluent in both francophone (Bénin) and anglophone (Ghana) markets.

## Operating Context

- Work environment: IMPROTECH (Accra) — deployments for clients across West Africa; multi-vendor stacks (Palo Alto, FortiGate, Cisco, MikroTik, Ubiquiti, Aruba), AWS/Azure, 3CX VoIP.
- Terrain: bilingual FR/EN audience — the site ships French-first with a full English translation.
- Hosting: GitHub Pages, static site, no backend; served locally via a plain HTTP server during development.

## Capabilities and Constraints

- Static vanilla HTML/CSS/JS only: no framework, no package manager, no build step, no backend. Any change must stay dependency-free (Google Fonts CDN is the only external dependency) and GitHub Pages-compatible.
- Bilingual FR/EN: every user-visible string must exist in both languages (`data-fr`/`data-en` attributes; META/MESSAGES dicts in script.js). French is the default.
- Contact form is cosmetic: client-side validation and fake success only — do not present it as delivering a message; real contact happens via mailto/tel links with copy-to-clipboard buttons.
- Theme persistence and pre-paint theme application live in localStorage and an inline head script — must not cause a flash.
- `assets/cv.pdf` is referenced by the "Download CV" button but does not exist yet; the file must be added before deploy.
- Confirmed public profiles: GitHub `https://github.com/Cedophe` and LinkedIn `https://www.linkedin.com/in/cedophe-zohoun-914872220/`; footer links must point here.

## Brand Commitments

- Name & identity: "Cédophe." signature logo; two processed variants prepared from the user's originals — `assets/logo-light.png` (dark theme) and `assets/logo-dark.png` (light theme), tight 132x142 transparent PNGs tinted with palette colors only. The originals in `assets/` ("logo for black/white background.png") are user originals — do not edit.
- Favicon is the CZ badge (`assets/favicon.svg`), chosen for 16px readability, not the signature.
- Voice: first-person, confident, practitioner tone ("Je construis des infrastructures réseau sécurisées en Afrique de l'Ouest."), with concrete numbers (3+ years, 50+ trained, 16+ sites, 500+ users).

## Evidence on Hand

- Real, confirmable facts already on the site (user-provided): role at IMPROTECH since 2023; Cisco CCNA + CCNP Enterprise 350-401, Microsoft AZ-104, Fortinet NSE 3 certifications; the three projects (Accra Technical University NGFW, 16-branch FortiGate/FortiManager, Python network inventory tool for ~50 devices); IT support internship at the Ministère de l'Économie et des Finances (Bénin, 2021); email cedophe@gmail.com and phone +233 593 647 918.
- Working visual assets: favicon.svg, logo-light.png, logo-dark.png (plus untouchable originals).
- Absences future work must not fabricate: cv.pdf, certification badge images/verification links, portfolio screenshots or client testimonials, live project links. None exist yet.

## Product Principles

- Proof over claims: concrete deployments, vendor stacks, and counts carry the story; no invented evidence, ever.
- Real contact, zero friction: every CTA leads somewhere real (CV download, mailto/tel, copy-to-clipboard) and the actual contact channel is made explicit, since there is no backend.
- Bilingual by default: FR/EN parity is a feature, not an afterthought — the audience spans francophone and anglophone markets.
- Lean pipeline: everything stays buildable by opening index.html through a static server; complexity must justify itself.

## Accessibility & Inclusion

- Bilingual content and keyboard/AT operability already established (skip link, aria-live form status, aria-pressed lang buttons, aria-hidden decorative art/canvas). Bilingual switching and any future UI must keep aria labels updated in both languages.
- Reduced motion must remain a fully working, content-visible mode of the site, not a degraded one.
