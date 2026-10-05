---
name: Ioritz Tubio Portfolio
description: A quiet monochrome interface of frosted glass floating over one slow, living field of colour.
colors:
  canvas: "#E9E9EE"
  ink: "#0E0E10"
  ink-secondary: "#45454B"
  ink-tertiary: "#505057"
  hairline: "rgba(14, 14, 16, 0.10)"
  hairline-strong: "rgba(14, 14, 16, 0.18)"
  glass-frost: "rgba(255, 255, 255, 0.52)"
  glass-frost-strong: "rgba(255, 255, 255, 0.66)"
  glass-liquid: "rgba(255, 255, 255, 0.32)"
  glass-rim: "rgba(255, 255, 255, 0.85)"
  glass-edge: "rgba(14, 14, 16, 0.07)"
  solid: "#0E0E10"
  on-solid: "#F7F7F8"
  danger: "#B42318"
  canvas-dark: "#060607"
  ink-dark: "#F3F3F5"
  ink-secondary-dark: "#B4B4BC"
  ink-tertiary-dark: "#8E8E97"
  hairline-dark: "rgba(255, 255, 255, 0.09)"
  hairline-strong-dark: "rgba(255, 255, 255, 0.16)"
  glass-frost-dark: "rgba(30, 30, 34, 0.42)"
  glass-frost-strong-dark: "rgba(36, 36, 40, 0.58)"
  glass-liquid-dark: "rgba(40, 40, 46, 0.30)"
  glass-rim-dark: "rgba(255, 255, 255, 0.16)"
  glass-edge-dark: "rgba(255, 255, 255, 0.06)"
  solid-dark: "#F3F3F5"
  on-solid-dark: "#0B0B0C"
  danger-dark: "#FDA29B"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  numeral:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4.5rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 3.2vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body-large:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  button:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.08em"
  data:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, monospace"
    fontSize: "12px"
    fontWeight: 400
    fontFeature: "\"tnum\""
rounded:
  thumb: "12px"
  field: "16px"
  inset: "20px"
  sheet: "24px"
  bar: "26px"
  card: "28px"
  frame: "34px"
  pill: "999px"
spacing:
  gutter: "20px"
  gutter-wide: "40px"
  card-pad: "24px"
  card-pad-wide: "40px"
  section: "112px"
  section-wide: "160px"
  container: "1152px"
components:
  button-solid:
    backgroundColor: "{colors.solid}"
    textColor: "{colors.on-solid}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "46px"
  button-glass:
    backgroundColor: "{colors.glass-frost}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "46px"
  button-glass-hover:
    backgroundColor: "{colors.glass-frost-strong}"
  button-compact:
    backgroundColor: "{colors.solid}"
    textColor: "{colors.on-solid}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "32px"
  card-glass:
    backgroundColor: "{colors.glass-frost}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  input-field:
    backgroundColor: "{colors.glass-frost-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  chip-tag:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  nav-pill:
    backgroundColor: "{colors.glass-liquid}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "5px"
  nav-tab-bar:
    backgroundColor: "{colors.glass-liquid}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.bar}"
    padding: "6px"
---

# Design System: Ioritz Tubio Portfolio

## Overview

**Creative North Star: "Glass Over a Living Field"**

The page is one continuous surface, not a stack of bands. Behind everything runs a single WebGL field of soft, domain-warped shapes that drift slowly, flow upward with scroll, and shift their faint cool tint as each section takes the viewport. In front of it sits a strictly monochrome interface: graphite and silver ink, frosted glass panels with a bright top rim, and one solid ink pill per cluster for the action that matters. Colour exists only in the field; the interface itself never carries a hue.

Density is low and the voice is Apple-product-page cinematic but restrained. Sections own a full viewport or close to it, headings are large, tight and semibold, and the motion grammar is consistent everywhere: content arrives out of a soft blur, rising a few pixels on a long ease-out curve; scroll-linked scenes (the receding hero, the pinned project stage, the sticky year, the closing statement) scale and unblur with scroll position rather than playing on a timer. Pointer and gyroscope drive a gentle tilt and a specular light on framed media. Every one of these has a reduced-motion path that keeps fades and drops movement.

The system explicitly rejects the dark-plus-neon developer portfolio, any warm or orange accent, and the name-as-hero template: the owner's name and portrait never dominate, information comes first.

**Key Characteristics:**
- Monochrome UI over one animated, softly tinted background field shared by the whole page.
- Two glass materials: calm frosted glass for content, thicker liquid glass for floating chrome.
- Geist for everything readable; Geist Mono only for data (dates, counters, tags, hosts, fact labels).
- Pill-shaped controls, generously rounded cards (28px), no hard borders.
- Blur-to-focus entrances on cubic-bezier(0.23, 1, 0.32, 1); scroll-linked scenes on desktop; full reduced-motion support.
- Light and dark themes are equal citizens, switched by `data-theme` on the root.

## Colors

A graphite-to-silver neutral ramp with a barely perceptible violet-cool cast (OKLCH hue around 286, chroma under 0.015); the only saturated token is the error red.

### Primary
- **Graphite Ink** (`ink` / `solid`): the single action colour. It fills the solid pill (View CV, View demo, Send, Accept, the nav CV button), sets every heading, and is the focus-ring colour. In dark mode it inverts to **Moonlit Silver** (`ink-dark` / `solid-dark`) with near-black text on top.

### Neutral
- **Silver Mist** (`canvas`): the page background in light mode and the base tone of the field shader. **Night Glass** (`canvas-dark`) is its dark counterpart.
- **Slate Ink** (`ink-secondary`): body copy, subtitles, organisations, inactive nav links.
- **Pewter Ink** (`ink-tertiary`): mono metadata, captions, footer, placeholder text, the year's type label.
- **Hairline** (`hairline`, 10% ink) and **Strong Hairline** (`hairline-strong`, 18% ink): the only line colours. Hairline also fills tags, status chips and the active-nav indicator; Strong Hairline draws input strokes, nav dividers and the cursor ring.
- **Frost** (`glass-frost`, `glass-frost-strong`, `glass-liquid`): translucent white (light) or translucent graphite (dark) fills for the two glass materials; the strong variant is the hover fill and the input fill.
- **Rim Light** (`glass-rim`) and **Glass Edge** (`glass-edge`): the bright top inset and the 1px inner outline that make a pane read as glass.
- **On Solid** (`on-solid`): text on the solid ink pill.
- **Signal Red** (`danger` / `danger-dark`): form errors only (message text and invalid input stroke).

### The Field (background only)
The WebGL field blends five per-section palettes by scroll position: cool silver (hero), lilac mist (about), sea glass (projects), pale steel (experience), neutral (closing), each with a light and dark set. Exact values live in the sidecar under `extensions.fieldPalettes`. Without WebGL the field falls back to two faint radial washes of ink over the canvas.

### Named Rules
**The Colour Lives in the Field Rule.** Hue appears only in the background field. Text, buttons, borders, chips, icons and focus rings are drawn from the neutral tokens; the only exception is Signal Red for errors.

**The One Solid Rule.** Each cluster of actions has at most one solid ink pill; every sibling is glass or outlined at the same size. Equal-weight choices (consent Accept/Decline) keep identical dimensions and differ only in fill.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui)
**Body Font:** Geist Variable, with stylistic sets `ss01` and `cv11` enabled globally
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular)

**Character:** One neutral grotesque carries everything from a 96px closing statement to 13px nav links; hierarchy comes from size, weight and tracking, not from a second display face. Mono is a quiet data voice, never a decoration.

### Hierarchy
- **Display** (600, clamp(3rem, 9vw, 6rem), 0.98): the full-screen closing statement only.
- **Numeral** (600, clamp(4.5rem, 8vw, 6rem), 1, tabular): the sticky timeline year; 3rem inline on mobile.
- **Headline** (600, clamp(2.25rem, 5vw, 4.25rem), 1.02): section titles and the hero statement (hero uses clamp(2.375rem, 4.4vw, 4.25rem)).
- **Lead** (500, clamp(1.625rem, 3.2vw, 2.75rem), 1.18): the About lead paragraph that lights up word by word.
- **Title** (600, 1.75rem to 2.5rem, 1.05 to 1.15): project and timeline entry titles, form title.
- **Body Large** (400, 17px, 1.625): section intros and About paragraphs.
- **Body** (400, 15px, 1.625): descriptions, capped at 62ch in the timeline.
- **Button** (500, 15px, -0.01em): all pill controls; 13px in compact nav and modal toolbar.
- **Label** (Mono 400, 11px, 0.08em, uppercase): fact-strip terms; the same mono at 11px without uppercase for tags and URL hosts.
- **Data** (Mono 400, 12px, tabular): date ranges and project counters.

### Named Rules
**The Tight Display Rule.** Anything 2.25rem and larger is semibold with negative tracking between -0.035em and -0.04em and a line height at or under 1.02.

**The Mono Is Data Rule.** Geist Mono sets only machine-like facts: dates, counters, tags, hostnames, fact labels. Never headings, never prose, never buttons.

## Layout

Content sits in a centred 1152px container (`max-w-6xl`) with 20px side gutters on phones and 40px from 768px up. Desktop sections use a 12-column grid with 40px gaps: the hero splits 7/5 (statement left, portrait right), About runs 10 columns offset by one, the timeline splits 4/8 (sticky year left, entries right), and the closing pairs a 5-column CV card with a 7-column contact form.

Vertical rhythm is generous: sections pad 112px top and bottom on phones and 160px from 768px. The hero and the closing statement each own at least one full viewport (`100svh`). The project stage is 200vh tall on desktop with a sticky full-height card inside; on phones and under reduced motion it collapses to a normal flowing card.

One breakpoint does the structural work (768px): the floating nav pill appears, the mobile tab bar disappears, grids split, and scroll-pinned scenes switch on. The mobile layout reserves bottom padding (about 112 to 144px) so the tab bar never covers the last line of content, and all fixed chrome respects `env(safe-area-inset-*)`.

## Elevation & Depth

Depth is material, not stacked shadows. Panels are translucent glass that blurs and saturates the field behind them, lit by an inset rim highlight on the top edge and a 1px inner edge, then lifted by one soft ambient shadow. The background field supplies the colour that the glass refracts, so surfaces read as layered without any tonal greys of their own. Where `backdrop-filter` is unsupported, glass falls back to the opaque canvas colour.

### Shadow Vocabulary
- **Glass Ambient** (`0 1px 1px rgba(14,14,16,0.04), 0 12px 40px -12px rgba(14,14,16,0.18)` light; `0 1px 1px rgba(0,0,0,0.3), 0 18px 50px -14px rgba(0,0,0,0.7)` dark): the single lift shadow, on every glass pane and under the CV document and project screenshot.
- **Rim Inset** (`inset 0 1px 0 0` rim light plus `inset 0 0 0 1px` glass edge): what makes a pane glass; never used alone on opaque surfaces.
- **Liquid Rim** (a 1px gradient ring at 140deg, brightest top-left and bottom-right): the lens edge reserved for liquid glass.
- **Specular Light** (a 420px radial highlight that follows the pointer or gyro, soft-light in light mode, screen in dark): only on tilting media frames (portrait, project screenshot, CV thumbnail).

### Named Rules
**The Two Glasses Rule.** Frosted glass (24px blur, 160% saturate) is for content: cards, the fact strip, secondary buttons, the contact form. Liquid glass (30px blur, 190% saturate, brighter rim) is for floating chrome and the portrait frame only: nav pill, mobile tab bar, settings chip, CV modal toolbar, consent banner.

**The No Hard Border Rule.** Glass edges are inset shadows and hairlines are 10 to 18% ink. No opaque borders on surfaces.

## Shapes

The form language is soft and continuous. Every control is a full pill (999px): buttons, chips, status badges, the language switch, the nav. Content surfaces use one large radius (28px) for cards and the project stage; the project card animates from 56px down to 32px as it grows into place. Nested shapes step down so inner corners stay concentric: the portrait frame is 34px with a 27px image inside (26px/20px on phones), the mobile tab bar is 26px with 20px tab highlights, inputs and the fact strip are 16px, the CV thumbnail is 12px. Imagery is clipped to these radii; nothing has a sharp corner except the CV document itself, which is presented as paper.

## Components

### Buttons
Calm, tactile pills that press in rather than glow.
- **Shape:** full pill (999px), 46px tall, 20px horizontal padding, icon gap 8px, lucide stroke icon at 16px.
- **Solid:** Graphite Ink fill with On Solid text; hover mixes 14% canvas into the fill (fine pointers only).
- **Glass:** frosted glass fill with ink text; hover swaps to the strong frost fill.
- **Outline:** transparent with a Strong Hairline inset ring (consent Decline), same size as its solid sibling.
- **Compact:** 32 to 40px tall at 13 to 14px for the nav, modal toolbar and consent banner.
- **Press:** every pressable scales to 0.97 over 160ms on the ease-out curve. Hero CTAs add a magnetic pull toward the pointer (spring, 22% of offset) on fine pointers.
- **Focus:** a 2px ink outline offset 3px, global.

### Chips
- **Tag:** Hairline fill, Slate Ink text, mono 11px, pill, 4px by 10px.
- **Status:** Hairline fill, ink text, 12 to 13px medium, with a 6 to 8px ink dot (In progress, Starting soon, Coming soon; the last one pings unless motion is reduced).

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** frosted glass over the field.
- **Shadow Strategy:** Glass Ambient plus Rim Inset (see Elevation & Depth).
- **Border:** none; inner 1px glass edge only.
- **Internal Padding:** 24px on phones, 32 to 40px from 768px.
- **Fact strip:** a 16px glass panel split into three cells by 1px hairline gaps; each cell is a mono uppercase term over a 15px medium value.

### Inputs / Fields
- **Style:** strong frost fill, 1px Strong Hairline stroke, 16px radius, 12px by 16px padding, 16px text (prevents iOS zoom), Pewter placeholder.
- **Focus:** 2px ink outline offset 2px; stroke and fill transition over 200ms.
- **Error:** stroke and message turn Signal Red; errors appear only after the first submit, then update live; focus jumps to the first invalid field.
- **Checkbox:** native, 20px, ink accent colour.

### Navigation
- **Desktop:** a floating liquid-glass pill centred 18px from the top: name, section links (13px, Slate Ink, active link gets a Hairline pill that slides between items on a spring), a compact solid CV button, language switch and theme toggle. On scroll it settles 6px higher and scales to 0.96.
- **Mobile:** a liquid-glass tab bar pinned 12px above the bottom safe area (26px radius) with five icon-over-label tabs (20px lucide icons at 1.75 stroke, 10px labels), plus a small liquid settings chip top-right for language and theme.

### Portrait Frame (signature)
A liquid-glass frame with specular light holding a 4:5 portrait desaturated to 90%. It tilts up to 7 degrees toward the pointer or with the phone's gyroscope (iOS asks via a small glass "enable motion" pill), and drifts up 12% as the hero scrolls away. Capped at 360px on desktop and 176px on phones so the face never dominates.

### Project Stage (signature)
A glass card holding a browser-chrome frame (three hairline dots, a mono hostname pill) around the screenshot. On desktop it pins for 200vh: the card scales 0.84 to 1, the screenshot settles from 1.18 to 1, then the details unblur in. The screenshot frame tilts up to 3 degrees.

### Sticky Year Timeline (signature)
The year of the entry in focus stays pinned at 34vh on the left, swapping with a vertical blur transition as entries cross the middle band; unfocused entries dim to 80% opacity. Entries are separated by hairlines.

### Custom Cursor
On fine pointers without reduced motion, the native cursor is replaced by a 6px ink dot and a 1px Strong Hairline ring that trails on a spring, grows to 52px over anything pressable, shrinks while pressed, and collapses over text fields (which keep the text caret).

## Do's and Don'ts

### Do:
- **Do** keep every UI token neutral and let the background field carry all colour; per-section tints stay faint and cool.
- **Do** use exactly one solid ink pill per action cluster and make its siblings glass or outlined at the same 46px height.
- **Do** use frosted glass for content and liquid glass only for floating chrome and the portrait frame.
- **Do** enter content with opacity, blur(8 to 12px) and a 12 to 24px rise on cubic-bezier(0.23, 1, 0.32, 1) over 0.7 to 0.9s, and give every motion a reduced-motion path that keeps the fade and drops the movement.
- **Do** set dates, counters, tags and hostnames in Geist Mono with tabular figures.
- **Do** keep nested radii concentric (outer radius minus padding).
- **Do** pair every theme value: each light token has a dark counterpart switched by `data-theme`.

### Don't:
- **Don't** introduce an accent hue, orange, or any warm "Claude-like" palette into the interface.
- **Don't** drift toward the dark-plus-neon developer portfolio look.
- **Don't** let the owner's name or face become the hero; information leads, the portrait stays at or under a third of the width.
- **Don't** put liquid glass on content cards or stack glass inside glass beyond a single inset fill.
- **Don't** draw opaque borders on surfaces; use hairlines and inset edges.
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** use glyph or emoji icons; icons are lucide strokes at 16 to 20px.
- **Don't** run heavy effects on the main thread; the field renders at 30% resolution, caps at 30fps and pauses when hidden.
