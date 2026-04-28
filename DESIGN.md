---
project: Healthy Breath
type: design-system
version: 2.0
author: Healthy Breath Team
---

## Overview

Healthy Breath is a breathing and relaxation web application designed for calm, focus, and recovery during work breaks. The design language draws from meditation apps like **Calm** and **Headspace** — emphasizing softness, breath, and tranquility over sharp edges and high contrast.

The visual identity centers on a **breathing ring animation** that expands and contracts in rhythm with the user's breath. This ring is the primary focal point of every breathing exercise. The interface is deliberately minimal: dark, unobtrusive, and free of visual noise that might break a meditative state.

**Key Characteristics:**
- Dark-mode-first canvas with two atmospheric themes: **Cool** (blue-grey, like moonlit water) and **Warm** (amber-gold, like sunset glow).
- The breathing ring is the hero element. All other UI supports it without competing.
- Colors are muted and desaturated. Nothing is bright enough to cause eye strain in a dim room.
- Typography is clean, spacious, and highly legible at a glance — essential when the user is in a relaxed, unfocused state.
- Rounded shapes everywhere: circles, pills, soft cards. No sharp corners.
- Subtle ambient motion: floating particles, gentle glow pulses. Nothing fast or jarring.
- All breathing modules share a single consistent layout: title → subtitle → description → breathing ring → controls → stats → instructions.

## Colors

### Theme System

Colors are defined as CSS custom properties on `:root` (Cool theme, default) and overridden on `body.theme-warm`. All component styles consume these variables; no hardcoded hex values exist in component CSS.

#### Cool Theme (Default)

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--color-bg-primary` | `#0c1220` | Main page background |
| `--color-bg-secondary` | `#111827` | Card, panel, and elevated surface backgrounds |
| `--color-bg-tertiary` | `#1a2332` | Hover states, subtle fills, input backgrounds |
| `--color-accent` | `#7aa7c8` | Primary accent: breathing ring glow, active dots, timer, buttons |
| `--color-accent-soft` | `rgba(122, 167, 200, 0.15)` | Subtle accent fills, borders, hover backgrounds |
| `--color-accent-glow` | `rgba(122, 167, 200, 0.25)` | Glow effects, shadows on the breathing circle |
| `--color-text-primary` | `#e8ecf1` | Headlines, primary labels, breathing phase text |
| `--color-text-secondary` | `#9fb0c0` | Subtitles, descriptions, secondary labels |
| `--color-text-muted` | `#6b7d8e` | Fine print, disabled text, placeholder text |
| `--color-text-on-accent` | `#0c1220` | Text on accent-colored buttons |
| `--color-border` | `rgba(122, 167, 200, 0.12)` | Card borders, dividers, hairlines |
| `--color-border-subtle` | `rgba(122, 167, 200, 0.06)` | Very subtle separators |
| `--color-ring-track` | `rgba(122, 167, 200, 0.10)` | The static track of the breathing progress ring |
| `--color-ring-progress-start` | `#5a8aaa` | Progress ring gradient start |
| `--color-ring-progress-end` | `#8ab8d8` | Progress ring gradient end |
| `--color-particle` | `rgba(122, 167, 200, 0.12)` | Floating background particles |
| `--color-celebration` | `rgba(138, 184, 216, 0.6)` | Completion confetti particles |

#### Warm Theme (`body.theme-warm`)

| Token | Hex | Usage |
| ----- | --- | ----- |
| `--color-bg-primary` | `#1a1510` | Main page background |
| `--color-bg-secondary` | `#221a14` | Card, panel, and elevated surface backgrounds |
| `--color-bg-tertiary` | `#2a2018` | Hover states, subtle fills, input backgrounds |
| `--color-accent` | `#c9a06a` | Primary accent: breathing ring glow, active dots, timer, buttons |
| `--color-accent-soft` | `rgba(201, 160, 106, 0.15)` | Subtle accent fills, borders, hover backgrounds |
| `--color-accent-glow` | `rgba(201, 160, 106, 0.25)` | Glow effects, shadows on the breathing circle |
| `--color-text-primary` | `#f0e6d8` | Headlines, primary labels, breathing phase text |
| `--color-text-secondary` | `#b8a898` | Subtitles, descriptions, secondary labels |
| `--color-text-muted` | `#8a7a6a` | Fine print, disabled text, placeholder text |
| `--color-text-on-accent` | `#1a1510` | Text on accent-colored buttons |
| `--color-border` | `rgba(201, 160, 106, 0.12)` | Card borders, dividers, hairlines |
| `--color-border-subtle` | `rgba(201, 160, 106, 0.06)` | Very subtle separators |
| `--color-ring-track` | `rgba(201, 160, 106, 0.10)` | The static track of the breathing progress ring |
| `--color-ring-progress-start` | `#a07848` | Progress ring gradient start |
| `--color-ring-progress-end` | `#d4b078` | Progress ring gradient end |
| `--color-particle` | `rgba(201, 160, 106, 0.12)` | Floating background particles |
| `--color-celebration` | `rgba(212, 176, 120, 0.6)` | Completion confetti particles |

### Opacity Scale (Shared)

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--opacity-hover` | `0.08` | Hover state background overlay |
| `--opacity-active` | `0.12` | Active/pressed state background overlay |
| `--opacity-disabled` | `0.4` | Disabled element opacity |
| `--opacity-backdrop` | `0.7` | Modal/panel backdrop background opacity |

## Typography

### Font Family
- **Primary**: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif`
- **Numeric / Timer**: `inherit` with `font-variant-numeric: tabular-nums` for consistent digit width.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
| ----- | ---- | ------ | ----------- | -------------- | --- |
| `--text-hero` | `1.75rem` (28px) | 300 | 1.2 | `4px` | App title in header |
| `--text-title` | `1.5rem` (24px) | 300 | 1.3 | `2px` | Module titles (breathing method names) |
| `--text-subtitle` | `0.85rem` (13.6px) | 400 | 1.4 | `1px` | Module subtitles |
| `--text-body` | `0.9rem` (14.4px) | 400 | 1.7 | `0` | Descriptions, article body |
| `--text-label` | `0.8rem` (12.8px) | 400 | 1.4 | `1px` | Labels, settings, small UI text |
| `--text-timer` | `2.6rem` (41.6px) | 200 | 1.0 | `0` | Countdown display inside breathing ring |
| `--text-timer-small` | `2.2rem` (35.2px) | 200 | 1.0 | `0` | Countdown on small screens |
| `--text-phase` | `1.2rem` (19.2px) | 300 | 1.0 | `5px` | Breathing phase label ("吸气", "呼气") |
| `--text-stat` | `1rem` (16px) | 300 | 1.0 | `0` | Stat values |
| `--text-stat-label` | `0.65rem` (10.4px) | 400 | 1.0 | `1px` | Stat labels |
| `--text-button` | `0.95rem` (15.2px) | 400 | 1.0 | `3px` | Button text |
| `--text-caption` | `0.7rem` (11.2px) | 400 | 1.3 | `0` | Fine print, sources |

### Principles
- **Weight 200 is real and used.** The timer uses weight 200 for an ethereal, weightless feel.
- **Letter spacing on titles.** Titles use positive letter-spacing for an airy, open feel — opposite of tight Apple-style tracking.
- **Line height is generous.** Body text at 1.7 and labels at 1.4 ensure relaxed readability.
- **No weight 500.** The ladder is 200 / 300 / 400 / 600. Mid-weight emphasis uses 400 with color change, or 600 for strong emphasis.

## Spacing

### Base Unit
- **Base unit:** 4px. All spacing tokens are multiples of 4.

### Tokens

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--space-xs` | `4px` | Tight gaps, icon padding |
| `--space-sm` | `8px` | Small gaps between inline elements |
| `--space-md` | `12px` | Standard gap within components |
| `--space-lg` | `16px` | Card internal padding, section gaps |
| `--space-xl` | `24px` | Large component gaps |
| `--space-2xl` | `32px` | Section vertical padding |
| `--space-3xl` | `48px` | Major section separation |

### Layout Constants
- **Header padding:** `16px` horizontal, `12px` top, `8px` bottom.
- **Module max-width:** `600px` centered on mobile, `700px` on desktop.
- **Breathing ring size:** `260px` × `260px` (mobile: `220px` × `220px`).
- **Breathing circle size:** `130px` base diameter, expands to `210px` on inhale (mobile: `110px` → `170px`).
- **Card padding:** `12px`–`16px` internal.
- **Card border-radius:** `12px`.
- **Button padding:** `12px` vertical, `48px` horizontal (pill shape).

## Shapes

### Border Radius Scale

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--radius-none` | `0` | Full-bleed elements (rare) |
| `--radius-sm` | `6px` | Small utility buttons, inputs |
| `--radius-md` | `10px` | Settings items, small cards |
| `--radius-lg` | `12px` | Instruction cards, stats bars, panels |
| `--radius-xl` | `16px` | Bottom panel top corners |
| `--radius-pill` | `9999px` | Primary action buttons, module toggle |
| `--radius-full` | `50%` | Breathing circle, icons, particles, dots |

## Elevation & Depth

Healthy Breath uses **no drop shadows** on UI elements. Depth is created through:
1. **Surface color layering** — bg-primary → bg-secondary → bg-tertiary.
2. **Backdrop blur** on floating panels and the bottom bar.
3. **Glow** on the breathing circle — the only "shadow-like" effect, and it is a diffuse radial glow, not a directional shadow.

| Level | Treatment | Use |
| ----- | --------- | --- |
| Flat | No elevation, pure background color | Main canvas, modules |
| Elevated | `background: var(--color-bg-secondary)` with subtle border | Cards, stats bars, instruction panels |
| Floating | `backdrop-filter: blur(16px)` + semi-transparent bg | Bottom panel, bottom bar, overlays |
| Glow | `box-shadow: 0 0 30px var(--color-accent-glow)` | Breathing circle during animation |

## Components

### Breathing Ring (`breath-stage`)

The central visual element. A 260×260px relative container holding:
1. **`ring-track`** — SVG circle, static, low-opacity stroke. Shows the full ring path.
2. **`ring-progress`** — SVG circle, animated stroke-dashoffset. Fills as the current phase progresses.
3. **`breath-circle`** — A div, absolutely centered, `border-radius: 50%`. Animates scale with the breathing phase. Has a radial gradient background and a soft glow box-shadow.
4. **`breath-timer`** — The countdown number, absolutely centered on top of the circle. Uses `--text-timer` size, `--color-accent` color, `font-weight: 200`.
5. **`breath-label`** — The phase name ("吸气", "呼气"), absolutely centered below the timer within the circle. Uses `--text-phase` size, `--color-text-primary` color.

**Z-index stacking (bottom to top):**
- `ring-track` (z: 1)
- `ring-progress` (z: 2)
- `breath-circle` (z: 3)
- `breath-timer` + `breath-label` (z: 10, `pointer-events: none`)

### Buttons

**`btn-primary`** (Start)
- Background: `linear-gradient(135deg, var(--color-accent), var(--color-accent-soft))` — actually uses a darker variant of accent for the gradient end.
- Text: `var(--color-text-on-accent)` in `--text-button`.
- Shape: `--radius-pill`.
- Padding: `12px 48px`.
- Hover: `transform: translateY(-2px)`, slightly brighter glow.
- Active/Press: `transform: scale(0.97)`.

**`btn-pause`**
- Background: `linear-gradient(135deg, #8a7a4a, #6a5a2a)` in cool theme; warm theme uses a muted amber-brown.
- Text: warm off-white.
- Same shape and press behavior as primary.

**`btn-restart`**
- Background: muted grey-blue (cool) or grey-brown (warm).
- Text: light grey.
- Same shape and press behavior.

### Settings Row (`settings-row`)
- Horizontal flex container, centered, wrapping allowed.
- Gap: `--space-md`.
- Contains `setting-item` chips.

### Setting Item (`setting-item`)
- Background: `var(--color-bg-tertiary)` at low opacity.
- Border: `1px solid var(--color-border-subtle)`.
- Border-radius: `--radius-md`.
- Padding: `8px 16px`.
- Contains a label and a control (select or toggle).

### Sound Toggle (`toggle-sound`)
- Custom checkbox styled as a pill switch.
- Track: `var(--color-bg-tertiary)` default, `var(--color-accent-soft)` when checked.
- Thumb: `var(--color-text-muted)` default, `var(--color-accent)` when checked.
- Size: `32px × 16px` track, `12px` thumb.

### Phase Dots (`phase-dots`)
- Horizontal flex row of small circles.
- Dot size: `6px`.
- Inactive: `var(--color-bg-tertiary)` background.
- Active: `var(--color-accent)` background + subtle glow.
- Completed: `var(--color-accent-soft)` background.
- Transition: `all 0.4s ease`.

### Stats Bar (`stats-bar`)
- Horizontal flex, centered, gap `2rem`.
- Background: `var(--color-bg-secondary)`.
- Border: `1px solid var(--color-border-subtle)`.
- Border-radius: `--radius-lg`.
- Padding: `10px 20px`.

### Instruction Card (`instruction-card`)
- Background: `var(--color-bg-secondary)`.
- Border: `1px solid var(--color-border-subtle)`.
- Border-radius: `--radius-lg`.
- Padding: `12px 16px`.
- Contains a title and a `breath-flow` diagram.

### Breath Flow (`breath-flow`)
- Horizontal flex of `flow-step` items separated by `flow-arrow` text.
- Each step: a circular icon (`step-icon`, 30px, `--radius-full`) + a label (`step-name`).

### Bottom Bar (`bottom-bar`)
- Fixed to bottom of viewport.
- Height: auto, padding `10px`.
- Background: `var(--color-bg-secondary)` at 90% opacity + `backdrop-filter: blur(12px)`.
- Border-top: `1px solid var(--color-border)`.
- Contains the `module-toggle` button.

### Bottom Panel (`bottom-panel`)
- Fixed to bottom, slides up from below.
- Max-height: `70vh`.
- Background: `var(--color-bg-secondary)` at 70% opacity + `backdrop-filter: blur(16px)`.
- Border-top: `1px solid var(--color-border)`.
- Border-radius: `--radius-xl` on top corners.
- Contains grouped grids of `panel-item` buttons.

### Panel Item (`panel-item`)
- Background: `var(--color-bg-tertiary)` at low opacity.
- Border: `1px solid var(--color-border-subtle)`.
- Border-radius: `--radius-lg`.
- Padding: `12px 8px`.
- Active state: `var(--color-accent-soft)` background + `var(--color-border)` border.
- Hover: translateY(-2px) + brighter background.

### Article Content (`article-content`)
- Left-aligned text, `--text-body` size, `1.85` line-height.
- Headings: `--text-title` size for H3, lighter weight.
- Blockquotes: left accent border (`3px solid var(--color-accent-soft)`), subtle background.
- Tip boxes: subtle accent background + border.

## Animation

### Breathing Circle Keyframes
The breathing circle animates via CSS keyframes tied to the phase duration:

**Inhale (cool example):**
```css
@keyframes inhale {
  from { width: 130px; height: 130px; box-shadow: 0 0 25px var(--color-accent-glow); }
  to   { width: 210px; height: 210px; box-shadow: 0 0 45px var(--color-accent-glow); }
}
```

**Hold:**
```css
@keyframes hold {
  from { width: 210px; height: 210px; box-shadow: 0 0 45px var(--color-accent-glow); }
  to   { width: 210px; height: 210px; box-shadow: 0 0 45px var(--color-accent-glow); }
}
```

**Exhale:**
```css
@keyframes exhale {
  from { width: 210px; height: 210px; box-shadow: 0 0 45px var(--color-accent-glow); }
  to   { width: 130px; height: 130px; box-shadow: 0 0 25px var(--color-accent-glow); }
}
```

**Hold (empty lungs):**
```css
@keyframes holdEmpty {
  from { width: 130px; height: 130px; }
  to   { width: 130px; height: 130px; }
}
```

Warm theme uses the same animation structure but the glow color changes automatically via CSS variable inheritance.

### Ring Progress
- `stroke-dasharray: 785` (circumference of r=125 circle).
- `stroke-dashoffset` animates from `785` to `0` over the phase duration via JavaScript (50ms updates).
- The ring uses an SVG linear gradient defined in HTML (`#ringGradient` for cool, `#ringGradientWarm` for warm).

### Particles
- 18 floating dots, random sizes (2–6px), random drift durations (8–20s).
- Animation: `floatUp` — translate from `100vh` to `-10vh`, with fade in/out.
- Color: `var(--color-particle)`.

### Module Transitions
- Enter: `moduleIn` — fade in + translateY(30px → 0), 0.45s ease.
- Exit: `moduleOut` — fade out + translateY(0 → -20px), 0.35s ease.

### Celebration
- 25 particles burst from screen center.
- Each particle: radial explosion with random angle and distance.
- Duration: ~1.2s, fading and shrinking to zero.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
| ---- | ----- | ----------- |
| Small phone | ≤ 480px | Ring 220px, circle 110px→170px, timer 2.2rem, 3-col panel grid |
| Tablet | 481–768px | Full-height body, no scroll |
| Desktop | ≥ 769px | Max-width 700px, centered layout, larger ring spacing |

### Touch Targets
- Minimum 44 × 44px for all buttons.
- `module-toggle` and `panel-item` are generously padded.

## Do's and Don'ts

### Do
- Use CSS custom properties (`var(--color-*)`) for ALL color values. Never hardcode a hex in a component rule.
- Keep the breathing ring centered and prominent. It is the app's identity.
- Use weight 200 for the timer for an ethereal feel.
- Ensure all text meets WCAG AA contrast against the dark backgrounds.
- Use `backdrop-filter: blur()` for floating panels — it creates depth without shadows.
- Animate with `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`.

### Don't
- Don't add drop shadows to cards or buttons. This is a shadow-free design system.
- Don't use bright, saturated colors. The accent is muted by design.
- Don't use sharp corners (radius < 6px) on interactive elements.
- Don't place the timer outside the breathing ring. It lives inside the circle.
- Don't use gradients as decorative backgrounds. The only gradients are on the breathing circle (radial) and buttons (subtle linear).
- Don't use font-weight 500. The ladder is 200 / 300 / 400 / 600.

## Iteration Guide

1. When adding a new component, define its colors using `--color-*` variables only.
2. To test both themes, toggle the `theme-warm` class on `<body>`.
3. When adjusting the breathing animation, update both the cool and warm `@keyframes` blocks (they share structure, only glow values differ via variables where possible).
4. Keep breathing phases synchronized: the circle scale, ring progress, timer countdown, and phase label must all update together.
5. The timer inside the ring should be the most visually prominent number on the screen during an active session.

## Known Gaps

- Exercise modules (eye, neck, wrist, shoulder, scan) have their own visual styles but share the same color token system. Some exercise-specific animations (eye pulse, neck rotation) use hardcoded colors that should ideally also use tokens.
- The shoulder roll animation uses CSS classes (`tilt-back`, `tilt-forward`) that are not fully documented here.
- Article content scrolls within the module container; on very small screens, the scrollable area may be tight.
