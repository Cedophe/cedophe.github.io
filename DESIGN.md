---
name: Cédophe ZOHOUN — Case File Portfolio
description: A bilingual network engineer's portfolio presented as an open incident file.
colors:
  signal-red: "#a9362b"
  signal-bright: "#b43b2f"
  steel-blue: "#3f6179"
  desk-manila: "#b7a67e"
  folder-tab: "#d4bf90"
  folder-deep: "#c4ae7b"
  report-paper: "#f3ecdc"
  paper-shade: "#e9e0cd"
  ink-navy: "#1d2c3b"
  ink-soft: "#465768"
  steel-line: "#8ca4b2"
  dark-desk: "#0c141b"
  dark-folder: "#1a2a35"
  dark-folder-deep: "#14212b"
  dark-paper: "#182631"
  dark-paper-shade: "#203441"
  dark-ink: "#f0e7d5"
  dark-ink-soft: "#c5c5b7"
  dark-steel: "#9ab6c4"
  dark-steel-line: "#547792"
  dark-signal: "#f08a6e"
  dark-signal-bright: "#e2785e"
typography:
  display:
    fontFamily: "Alumni Sans, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(3.3rem, 6.2vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.025em"
  section-title:
    fontFamily: "Alumni Sans, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Alumni Sans, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  body-large:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.14rem"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "JetBrains Mono, Courier New, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.06em"
  note:
    fontFamily: "JetBrains Mono, Courier New, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.03em"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  hairline: "4px"
  tight: "8px"
  row: "14px"
  group: "18px"
  section: "clamp(50px, 7vw, 84px)"
components:
  button-primary:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.report-paper}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.report-paper}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
    height: "46px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
    height: "46px"
  button-secondary-hover:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.report-paper}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
    height: "46px"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "6px 8px"
    height: "34px"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.none}"
    padding: "8px 0"
    height: "40px"
  nav-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.none}"
    padding: "11px 8px"
  nav-tab-active:
    backgroundColor: "{colors.report-paper}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.none}"
    padding: "11px 8px"
---

# Design System: Cédophe ZOHOUN — Case File Portfolio

## Overview

**Creative North Star: "The Working Incident File"**

The site is an open case file on a manila desk, not a portfolio template. A fixed file header, a tabbed index rail, and one continuous report sheet carry the entire story. The visitor should feel they are reading a record that was already in use: stamped headers, ruled registers, typed measurements, punched margins, and a red signal used for status rather than decoration.

The world is physical and restrained. Manila board and cream paper establish the surface hierarchy; navy ink carries the argument; steel blue handles metadata and measurement; signal red marks the active tab, the verified credential, and the next action. Depth comes from paper and folder layering, not from floating cards. Rounded containers, soft glass, gradient text, and centered hero scaffolding belong to a different world.

Copy is evidence-led and first-person. Counts, vendors, and deployments do the persuading; the interface stays quiet enough for them to be read. French is the default voice and English is a complete mirror, not a fallback.

**Key Characteristics:**
- One continuous report sheet with a fixed case-file header and a left index rail.
- Warm manila and paper surfaces against navy ink and steel metadata, with one red signal.
- Sharp corners, 1px rules, punched margins, and monospaced record labels.
- Compressed uppercase display type balanced by generous reading type.
- Bilingual FR/EN parity, keyboard-visible focus, and a full dark inversion of the same paper world.
- No invented evidence: the only shipping rasters are the two logo cutouts derived from the user's originals.

**Asset provenance.** `assets/logo-dark.png` (132×142, palette-tinted cutout for the light theme) and `assets/logo-light.png` (132×142, palette-tinted cutout for the dark theme) are processed from the user's 1024×1024 originals `assets/logo for white background.png` and `assets/logo for black background.png` respectively. The originals are retained untouched and are never shipped as page imagery. `assets/favicon.svg` is the CZ badge used for 16px favicon legibility. No certification badges, project screenshots, client logos, or testimonial portraits exist.

## Colors

The palette behaves like a physical file: warm board and paper for surfaces, ink and steel for reading and measurement, one red for signal.

### Primary
- **Signal Red** (`colors.signal-red`): Active rail tab, status dots, verified-credential checks, field numbers, and the primary hover state. Its scarcity is the point.
- **Signal Ember** (`colors.signal-bright`): The warmer hover/active companion to Signal Red, used sparingly in the same roles.

### Secondary
- **Ledger Steel** (`colors.steel-blue`): Secondary metadata, rail captions, issuer names, schematic details, and body notes. It is a reading color, never a background accent.
- **Rule Steel** (`colors.steel-line`): The lighter structural blue used for rules and dividers when a softer line is needed.

### Neutral
- **Manila Desk** (`colors.desk-manila`): The outer page surface and scrollbar track.
- **Folder Tab** (`colors.folder-tab`): The index rail, footer, and folder tabs.
- **Folder Fold** (`colors.folder-deep`): The darker manila used for depth and alternate folder surfaces.
- **Report Paper** (`colors.report-paper`): The main sheet and the active tab fill.
- **Paper Shade** (`colors.paper-shade`): Tinted form panels and secondary paper surfaces.
- **Ink Navy** (`colors.ink-navy`): Primary text, filled buttons, strong rules, and the light-theme focus base.
- **Ink Soft** (`colors.ink-soft`): Body copy, ledes, and secondary reading text.

### Dark inversion
- **Night Desk**, **Night Folder**, **Night Fold**, **Night Paper**, and **Night Paper Shade** replace the manila/paper family.
- **Paper Ink** and **Paper Ink Soft** replace the navy reading family.
- **Night Steel** and **Night Rule** replace the metadata family.
- **Night Signal** and **Night Ember** replace the red signal with a coral that holds contrast on dark paper.

**The One Signal Rule.** Red is never a surface fill on the page. It marks state, verification, or a chosen action; if more than a small fraction of the viewport is red, the hierarchy has failed.

**The Paper Swap Rule.** Dark mode is a full inversion of the same material system, not a tinted light mode. Every surface, text, rule, selection, scrollbar, and focus color swaps together; no element keeps a light-theme surface by accident.

## Typography

**Display Font:** Alumni Sans (with Arial Narrow, Helvetica Neue, sans-serif)
**Body Font:** Albert Sans (with Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** JetBrains Mono (with Courier New, monospace)

**Character:** A condensed, slightly editorial display face gives the file its stamped authority; Albert Sans keeps long bilingual passages human and readable; JetBrains Mono turns metadata into typed evidence. The pairing is field report, not tech costume: mono is reserved for labels, measurements, navigation, and machine-readable detail.

### Hierarchy
- **Display** (600, `clamp(3.3rem, 6.2vw, 5.5rem)`, 0.82): The hero statement only. Uppercase, tightly tracked, balanced, and allowed to dominate the first viewport.
- **Section title** (600, `clamp(2.2rem, 4.2vw, 3.6rem)`, 0.9): Section openings such as “Registre des compétences” and “États de service.” Uppercase with a compact Fiche/Annexe folio opposite.
- **Heading** (600, `clamp(1.5rem, 2.4vw, 2rem)`, 1.05): Deployment titles, service employers, and credential names.
- **Body** (400, `1rem`, 1.68, max 66ch): Reading copy. The hero lede and first profile paragraph use the larger `1.14rem` step.
- **Label** (400, `0.6875rem`, 1.5, uppercase, 0.05–0.14em tracking): Rail labels, tab numbers, field labels, record keys, and other functional metadata. Never sentence-length copy.
- **Note** (400, `0.75rem`, 1.6): Captions, demo-form disclosure, footer copy, and other sentence-bearing small text. This is the minimum for prose.

**The Ruled Voice Rule.** Display type may shout; metadata may whisper; body copy must remain comfortably readable. Functional microtext never drops below 11px, and sentence-bearing notes stay at 12px or larger.

## Layout

The desktop shell is a fixed 74px file header above a `1520px` maximum-width workspace. A `214px` sticky index rail (`190px` below 1180px) sits at left; the report sheet fills the remaining width and casts its shadow onto the desk. A 1px red punched margin runs down the sheet’s left edge.

The sheet uses generous sectional padding, `clamp(50px, 7vw, 84px)`, with 1px rules separating every record. Content grids are asymmetric: the hero is roughly 1.4:0.6; profile and summary are 1.3:0.7; contact is 0.9:1.1. Body measures stay near 66ch, and the hero measure near 58ch.

Responsive behavior:
- **≤1180px:** the rail narrows to 190px; the hero and register columns compress while keeping their asymmetry.
- **≤980px:** the rail becomes a burger dropdown; the shell is single-column; the report sheet loses its red margin line; the header keeps brand, language, theme, and menu.
- **≤860px:** profile, contact, and other two-column grids stack; the deployment marker moves above its body.
- **≤620px:** compact header, 36×39px logo, 40×40px icon buttons, single-column sections, stacked contact channels, and full-width action buttons.
- **≤380px:** the hero drops to 2.8rem and section titles tighten to 2rem.

**The Single Sheet Rule.** The page is one continuous document. Do not break it into a grid of cards, floating tiles, or separate panels; use ruled sections and typographic hierarchy to separate ideas.

## Elevation & Depth

The world is mostly flat. Depth is physical: a report sheet resting on a desk, a folder tab lifted above the sheet, a header that gains a shadow only after the page moves.

### Shadow Vocabulary
- **Report sheet** (`0 22px 54px rgba(29, 44, 59, 0.17), 0 2px 0 rgba(29, 44, 59, 0.08)`): The one large elevation in the light theme. It makes the paper read as a physical object.
- **Rail lift** (`0 12px 26px rgba(29, 44, 59, 0.13)`): A shallow shadow under the folder index.
- **Scrolled header** (`0 12px 28px rgba(13, 23, 31, 0.14)`): Appears only when the fixed header has left the top of the page.
- **Dark report sheet** (`0 24px 66px rgba(0, 0, 0, 0.42), 0 2px 0 rgba(0, 0, 0, 0.2)`): The dark-theme equivalent, with a heavier ambient falloff.

**The Flat File Rule.** Inside the sheet, surfaces are flat. Tinted paper, hairlines, and typography create hierarchy; inner cards and stacked shadows do not.

## Shapes

The system is orthogonal. Corners are square (`0px`); pills and rounded cards are absent. Structure comes from 1px rules, full-width register rows, punched margins, and the folder tab silhouette.

Recurring geometry:
- 1px steel/navy rules separate rows and sections.
- A 6px red square precedes folio labels; a 6px red dot marks active status.
- Deployment exhibits use a 64×64px square outline rotated `-2deg` around a large display letter.
- The report sheet carries a red punched margin at left and sits above the desk on a single soft shadow.
- Status dots are the only circular form (`50%`), and they are always small.

**The No Pill Rule.** Nothing interactive or informational is rounded into a pill. A rectangle with a 1px edge is the default shape; the only exceptions are the 6px status dots.

## Components

### Buttons
- **Shape:** Sharp rectangle (`0px`), 1px border, minimum height 46px, 11px mono uppercase label with 0.08em tracking.
- **Primary:** Ink fill with paper text; download icon on the left. Hover swaps to Signal Red with paper text. Focus uses the global 2px signal outline with 3px offset.
- **Secondary:** Transparent with an ink border and ink text; hover fills ink with paper text. The arrow sits on the right.
- **Mobile:** Primary buttons center their contents; both actions become full-width at ≤620px.

### Inputs / Fields
- **Style:** Transparent field over paper, no radius, no full box. A single 1px rule forms the bottom edge; 1rem Albert Sans carries the value. Labels are 11px mono uppercase with a red two-digit index.
- **Focus:** The bottom rule becomes Signal Red with a 1px signal shadow; the global focus-visible ring remains available.
- **Error:** `aria-invalid="true"` turns the bottom rule red and tints the field with a 6% signal wash.
- **Placeholder:** A 72% ink/paper mix, deliberately readable rather than ghost-gray.
- **Disclosure:** The demo form states in 12px mono uppercase that sending happens by email or phone; it never implies a backend.

### Navigation
- **Desktop rail:** A sticky manila folder with a 1px border, 214px wide, labelled `Index 00—05`. Rows are 11px mono uppercase on a 24px number + label grid. Hover tints the folder; the active row lifts onto a paper fill with a 2px red edge and sets `aria-current="location"`.
- **Mobile:** At ≤980px the rail becomes a burger dropdown under the fixed header. Escape closes it; resizing above 980px also closes it.
- **Header:** Fixed, 94% paper over folder, with a 3px inset signal top rule. Brand, file ID, language pair, theme toggle, and burger form one row.

### Section Head + Folio
A display section title sits left; a mono folio sits right with a 6px red square and a record label (`Fiche 02`, `Annexe 04`, `Pièces A—C`). The folio is a filing reference, not a decorative eyebrow. On mobile it wraps under the title without losing the square mark.

### Record Summary
A left-ruled aside with an 11px mono title, five `<dt>/<dd>` rows, and a declassify disclosure. Rows are 1px separated; keys are steel, values are ink. On mobile the aside follows the hero copy and the declassify control becomes full-width.

### Evidence Rows
Credential rows use a 3-column grid: name + issuer, square credential code, and a red check + “Obtenu/Obtained.” Deployment rows use a lettered exhibit marker, title, paragraph, a ruled route line (`INTERNET → PA NGFW → 500+ UTILISATEURS`), and a slash-separated stack. These rows are the page’s proof; keep them factual.

### Copy Control
A small ruled button with a 12px copy icon and 11px mono label. Hover fills ink; copied state fills Signal Red. On copy, the label becomes “Copié/Copied” and an `aria-live` status reports the result.

## Do's and Don'ts

### Do:
- **Do** build every section on the ruled sheet: 1px rules, paper tints, and monospaced filing labels.
- **Do** keep the hero display uppercase, condensed, balanced, and between 3.3 and 5.5rem on desktop.
- **Do** use Signal Red only for active state, verification, field indices, and primary hover.
- **Do** use `color-mix()` tints of existing tokens for washes, hover fills, and placeholders.
- **Do** keep FR/EN strings in mirrored `data-fr`/`data-en` attributes and keep those elements text-only.
- **Do** preserve the fixed header, the sticky index rail, and the single report-sheet composition.
- **Do** raise sentence-bearing small copy to 12px; reserve 11px for functional labels and metadata.
- **Do** keep all motion removable under `prefers-reduced-motion: reduce` while leaving content visible.
- **Do** keep every fact traceable to PRODUCT.md and every raster attached to its provenance.

### Don't:
- **Don't** introduce rounded cards, pill buttons, glass panels, gradient text, or floating stat tiles.
- **Don't** turn the page into a centered hero, card grid, or dashboard.
- **Don't** use red as a large surface fill or decorative wash.
- **Don't** add shadows inside the sheet; the sheet itself is the only large elevation.
- **Don't** use gray text on the manila or paper surfaces; tint secondary text from the surface hue or use Ledger Steel.
- **Don't** swap a system font for Alumni Sans, Albert Sans, or JetBrains Mono.
- **Don't** add certification badges, project screenshots, client logos, testimonials, or live links that do not exist.
- **Don't** present the contact form as a delivery mechanism; it is a client-side demonstration only.
- **Don't** hide content behind animation; the page must read without JavaScript.
