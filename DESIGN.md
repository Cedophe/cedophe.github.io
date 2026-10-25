---
name: Cédophe ZOHOUN — Network Prospectus
description: A bilingual network engineer's proof, set as a late-modern civic prospectus.
colors:
  ground: "#f7f7fa"
  surface: "#ffffff"
  ink: "#1b1547"
  ink-soft: "#4b5165"
  ink-muted: "#616577"
  violet: "#6b5ce7"
  violet-deep: "#5b4fd6"
  action: "#6b5ce7"
  action-hover: "#5a4bd6"
  action-ink: "#ffffff"
  teal: "#7fd8d0"
  lilac: "#c9b8f0"
  hairline: "#e6e7ee"
  hairline-strong: "#d5d7e3"
  alert: "#a73554"
  dark-ground: "#0f0d20"
  dark-surface: "#15122b"
  dark-ink: "#f7f7fa"
  dark-ink-soft: "#b8b4d0"
  dark-ink-muted: "#948fb0"
  dark-violet: "#9b8cff"
  dark-violet-deep: "#8b7cf0"
  dark-hairline: "#2a2545"
  dark-hairline-strong: "#3a3360"
  dark-alert: "#ff9aae"
typography:
  display:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  section-title:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.02rem, 1.4vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  body:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, Courier New, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
  note:
    fontFamily: "JetBrains Mono, Courier New, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  control: "8px"
  panel: "12px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "46px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.violet}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "46px"
  button-secondary-hover:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
    height: "46px"
  nav-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "8px 0"
  nav-tab-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 0"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.control}"
    padding: "6px 8px"
    height: "34px"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  credential-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System: Cédophe ZOHOUN — Network Prospectus

## Overview

**Creative North Star: "The Network Prospectus"**

The portfolio is a late-modern civic prospectus: one continuous document that explains a working network engineer with the clarity of a public-service report and the presence of a design annual. It is not a case file, a cyber dashboard, or a simulation of paper. The ground is a cool bone-white field, the argument is set in ink navy, and a single violet signal carries action, current position, and verified status.

The page is structured like a prospectus, not a landing page. A sticky 72px header holds the identity and the section index; the hero pairs a two-line statement with one authored silk ribbon; the rest of the record is ruled into full-width bands for profile, capabilities, deployments, experience, credentials, and contact. Hairlines, index numerals, and monospaced metadata do the organizing. There are no lifted cards, paper textures, or decorative shadows. Dark mode is the same prospectus after hours: a deep-indigo ground with the same hierarchy, not a separate theme.

**Key Characteristics:**
- One continuous ruled document with a sticky header and a left-aligned hero, never a centered landing-page shell.
- A single violet signal for actions, current section, focus, and verified status; teal and lilac appear only inside the ribbon and route figure.
- Albert Sans at 400/500 for display, reading, and headings; JetBrains Mono for file metadata, labels, and measurements.
- Flat surfaces, 1px hairlines, 12px panels, 8px controls, and no casts or simulated material.
- A complete FR/EN mirror, a pre-paint theme switch, and a dark mode that inverts the same tokens.
- No invented evidence. The only shipping rasters are the two processed logo cutouts; the ribbon and CZ favicon are SVG.

**Asset provenance.** `assets/logo-dark.png` (132×142, palette-tinted cutout for the light theme) and `assets/logo-light.png` (132×142, palette-tinted cutout for the dark theme) are processed from the user's 1024×1024 originals, `assets/logo for white background.png` and `assets/logo for black background.png`. The originals remain untouched and are never shipped as page imagery. `assets/favicon.svg` is the CZ badge used for favicon legibility. There are no certification badges, project screenshots, client logos, or testimonial portraits.

## Colors

The palette is a cool document field with one committed violet signal and one ribbon spectrum. Neutral, ink, and hairline values carry almost the entire page; the ribbon is the only place where multiple colors run together.

### Primary
- **Signal Violet** (`colors.violet`, #6b5ce7): Section folios, deployment numerals, active nav underline, link hover, credential seals and checks, focus rings, and the ribbon's deepest stop. It marks position and verifies action.
- **Deep Violet** (`colors.violet-deep`, #5b4fd6): The darker end of the ribbon and the secondary hover tone; never a large background.
- **Action Violet** (`colors.action`, #6b5ce7): Filled primary buttons and the copied state. Hover uses **Action Hover** (`colors.action-hover`, #5a4bd6) with **Action Ink** (`colors.action-ink`, #ffffff). On dark, the action stays violet while text links move to **Night Violet** (`colors.dark-violet`, #9b8cff) for legibility.
- **Error Rose** (`colors.alert`, #a73554): Form error borders, invalid field tint, and invalid status only. Dark uses **Night Rose** (`colors.dark-alert`, #ff9aae). It is never a decorative accent.

### Secondary
- **Signal Teal** (`colors.teal`, #7fd8d0) and **Soft Lilac** (`colors.lilac`, #c9b8f0): The ribbon's opening and middle stops and the route figure's gradient. They are illustration colors, not UI accents.

### Neutral
- **Prospectus Ground** (`colors.ground`, #f7f7fa): The page field and recessed form fields.
- **Sheet White** (`colors.surface`, #ffffff): The header, facts band, credential register, and contact form.
- **Ink Navy** (`colors.ink`, #1b1547): Body and display text; the core object in the hero illustration.
- **Soft Ink** (`colors.ink-soft`, #4b5165): Reading copy and secondary navigation.
- **Muted Ink** (`colors.ink-muted`, #616577): Metadata labels, issuer names, and quiet notes.
- **Hairline** (`colors.hairline`, #e6e7ee) and **Strong Hairline** (`colors.hairline-strong`, #d5d7e3): Rules, dividers, field borders, and the role separator.
- **Night Ground** (`colors.dark-ground`, #0f0d20), **Night Sheet** (`colors.dark-surface`, #15122b), **Night Ink** (`colors.dark-ink`, #f7f7fa), **Night Soft Ink** (`colors.dark-ink-soft`, #b8b4d0), **Night Muted Ink** (`colors.dark-ink-muted`, #948fb0), and the dark hairlines are one inversion of the same roles.

### Named Rules
**The One Signal Rule.** Violet may occupy no more than roughly a tenth of any viewport. It belongs to action, current position, focus, and verification; if it starts coloring whole sections, the page has lost its hierarchy.

**The Unpainted Document Rule.** There is no paper fiber, grain, desk, folder, stamp, or cast shadow. Depth comes from ground-versus-sheet value and 1px rules. The page is a document, not a photograph of one.

**The Day/Night Prospectus Rule.** Dark mode is a full inversion of the same sheet, ink, hairline, and signal roles. It is not a tint, a neon skin, or a second brand.

## Typography

**Display Font:** Albert Sans (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Albert Sans (with Helvetica Neue, Arial, sans-serif)
**Label/Mono Font:** JetBrains Mono (with Courier New, monospace)

**Character:** Albert Sans is a modern geometric-humanist sans with enough restraint for a public document and enough presence for a 5.5rem statement. JetBrains Mono is the file voice: small, tracked, and factual. The pairing reads as a contemporary civic prospectus, not a terminal costume.

### Hierarchy
- **Display** (500, `clamp(3rem, 8vw, 5.5rem)`, 0.98, −0.04em): The two-line hero statement only. The second line is Signal Violet.
- **Section Title** (500, `clamp(2.2rem, 4.6vw, 3.5rem)`, 1, −0.04em): The six band headings, set left with a mono folio at the right.
- **Heading** (500, `clamp(1.25rem, 2.2vw, 1.75rem)`, 1.25, −0.02em): Deployments, employers, credential names, and register categories.
- **Lead** (400, `clamp(1.02rem, 1.4vw, 1.18rem)`, 1.62): The hero deck and section introductions.
- **Body** (400, 1rem, 1.6): Reading copy at 53–72ch depending on the band; never full-width on desktop.
- **Label** (400, 0.6875rem, 1.4, 0.08em, uppercase): Folios, role lines, fact keys, channel labels, and field indexes.
- **Note** (400, 0.625rem, 1.5, 0.04em, uppercase): Copy controls, footer, and the smallest metadata.

### Named Rules
**The Metadata Is Not Body Copy Rule.** JetBrains Mono is for labels, measurements, and controls. It never sets a paragraph, because the page is technical without making the reader decode a terminal.

**The One Display Voice Rule.** Albert Sans carries both display and reading. Do not introduce a second display face to manufacture editorial contrast; scale, weight, and the violet line do that work.

## Layout

The page is a single 1180px content rail inside a full-bleed ground. A sticky 72px header uses a three-column grid: identity at the left, centered section index, controls and the violet action at the right. The hero is a 0.96/1.04 split: statement, role, deck, and actions on the left; the ribbon, ghosted topology, and core object on the right. A five-cell facts band with a stack disclosure sits below, followed by a five-stage route figure.

Bands run `clamp(64px, 8vw, 108px)` vertically and use hairline rules rather than card walls. Section heads put the title on the left and the mono folio on the right; the certifications register is four columns, the timeline is a date/body split, and contact is a 0.82/1.18 split between channels and form. The rhythm gives more space above a heading than below it, and the page ends with a quiet footer rather than a second call to action.

At 1180px the header gap and hero gap tighten. At 980px the section index becomes a dropdown under the sticky header, the hero becomes one column, the ribbon follows the text, the facts and credentials become two columns, and contact stacks. At 860px the route turns vertical, the brand role is removed, and the back-to-top control disappears. At 620px the header is 64px and compact, hero actions go full width, the channels move to a stacked label/value grid, credentials become one compact column with the seal at the left, and copy buttons become icon-only. At 380px the hero statement tightens and the section head stacks the folio under the title.

## Elevation & Depth

Flat by default. There are no box shadows in the product UI; the only `box-shadow` is the 4px ground-colored ring that separates a route marker from its line. Depth is tonal and linear: Sheet White against Prospectus Ground, a 1px header border, a 12px panel border, and the overlap of the facts band and route figure. The hero core object is a flat dark rectangle with a 1px edge, not a floating card.

### Named Rules
**The Flat Prospectus Rule.** If an element needs a shadow to be understood, the hierarchy is wrong. Use a hairline, a surface change, or more space instead. A state change may use color and a 2px focus outline; it may not use a cast.

## Shapes

Panels use a 12px radius; fields, buttons, and copy controls use 8px; rules are exactly 1px. Credential seals are 46px circles, the hero core object is a 16px-radius rectangle, and the route markers are small circles on a straight line. The only organic form on the page is the silk ribbon; it is an illustration, not a container shape.

**The No-Costume Geometry Rule.** Do not add diagonal cuts, chamfers, blobs, or many-vertex clip paths. The document is orthogonal; the ribbon is the one curve.

## Components

### Buttons
- **Shape:** 8px radius, 46px minimum height, 11px 18px padding, 9px icon gap.
- **Primary:** Action Violet fill, white label, 500 weight. Hover darkens to Action Hover; focus is a 2px violet outline with a 3px offset.
- **Secondary:** Transparent with a 1px violet border and violet label. Hover fills with Action Violet and flips the label to white. This is the CV action, never the primary contact action.
- **Copy:** 34px high, 8px radius, hairline border, mono label; the copied state fills violet and announces “Copié !” / “Copied!”. On mobile it collapses to a 34px icon button.

### Navigation
- **Desktop:** Centered inline links at 0.875rem/500; active gets Ink Navy plus a 2px violet underline; hover and focus shift to violet. The right cluster holds the FR/EN segment, theme toggle, and the one violet contact action.
- **Mobile:** Below 980px the links become a full-width dropdown directly under the sticky header, on the header surface, with a 1px bottom rule and 44px rows. The burger flips to a close state; Escape, a link click, or resizing above 980px closes it.
- **Rule:** The section index never includes certifications; the credentials band is reached from the experience band.

### Inputs / Fields
- **Style:** 1px hairline border, 8px radius, Prospectus Ground fill, 12px 14px padding, mono index above the field label.
- **Focus:** 2px violet outline at a 3px offset; the border also shifts to violet. Invalid fields use Error Rose with a faint rose tint and set `aria-invalid`.
- **Status:** Mono status line below the form; valid is violet, invalid is Error Rose. The form is explicitly a demo and does not pretend to deliver.

### Cards / Containers
- **Facts band:** Sheet White, 12px radius, 1px hairline, five equal cells divided by 1px rules, then a full-width stack disclosure. Below 980px it becomes two columns, with the fifth cell spanning the row.
- **Credential register:** One 12px panel with four equal columns separated by 1px rules. Each credential is a 46px typographic seal, name, issuer, and a violet check with “Obtenu.” At 980px it becomes two columns; at 620px each card becomes a compact two-column grid, seal left.
- **Contact form:** Sheet White, 12px panel, 1px hairline, no shadow. The panel is a working surface, not a floating modal.

### Signature Component: Signal Ribbon
The hero illustration is an inline SVG: a teal–lilac–violet silk ribbon crossing a ghosted topology, with one dark core object. On fine pointers it answers the cursor with a small parallax; under reduced motion and on touch it stays still. It is the only authored illustration and the only place where teal and lilac appear together. Do not repeat it as a section divider or background.

## Do's and Don'ts

### Do:
- **Do** keep violet to action, current position, focus, and verification; sample the screen and keep it near or below 10%.
- **Do** use 1px hairlines, ground-versus-sheet value, and space for hierarchy (12px panels, 8px controls, 1px rules).
- **Do** set display and body in Albert Sans at 400/500; set labels and measurements in JetBrains Mono at 0.625–0.6875rem.
- **Do** preserve the 1180px rail, the 72px/64px header, and the left-aligned 48/52 hero.
- **Do** invert the same tokens for dark mode: Night Ground, Night Sheet, Night Ink, Night Violet.
- **Do** keep every user-visible string paired FR/EN and every icon in the authored SVG sprite.
- **Do** keep the contact action primary and the CV secondary until `assets/cv.pdf` exists.

### Don't:
- **Don't** add paper, grain, desk, folder, stamp, tape, or cast-shadow effects; this is a prospectus, not a case file.
- **Don't** use gradient text, glass, blur, neon glows, or a second illustration system.
- **Don't** turn bands into equal icon cards, nested cards, or a dashboard of tiles.
- **Don't** use teal or lilac as UI accents; they belong to the ribbon and route figure.
- **Don't** set paragraphs in mono, or introduce Alumni Sans, a condensed display face, or a system display face.
- **Don't** invent certification badges, project screenshots, client logos, testimonials, or a CV. The credential seals are typographic and the form is labeled a demo.
- **Don't** add a shadow to a panel or button; use a hairline, a surface change, or a state color.
