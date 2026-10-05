# Variant axes

How to make 10 variants that are worth comparing. Read this before designing a round.

## Contents
1. The axes
2. Style directions (menu)
3. Building a set of 10
4. "Different enough" check
5. Mixing picks in round 2+

## 1. The axes

Every variant is a point on these axes. Pick a value on each deliberately; don't let defaults decide.

| Axis | Example values |
|---|---|
| **Layout / composition** | centered stack, split 50/50, split 60/40 asymmetric, card grid, single card, full-bleed band, sidebar + content, bento grid, horizontal scroller, overlapping layers |
| **Visual style** | minimal, corporate, editorial, soft/rounded, glassmorphism, neo-brutalist, playful, dark/high-contrast, retro/terminal, luxury, technical/blueprint |
| **Typography** | geometric sans, humanist sans, serif display + sans body, monospace, condensed caps; scale contrast low vs. huge headline; weight light vs. black; tight vs. wide tracking; sentence vs. upper case |
| **Color** | mono + one accent, brand-saturated, dark mode, pastel, gradient, duotone, high-contrast black/white, warm neutrals, earthy |
| **Density / spacing** | airy (lots of whitespace, large type) vs. compact (data-dense, small type, tight rhythm) |
| **Hierarchy / emphasis** | what is seen first: headline, number/price, image/visual, CTA, social proof, a badge |
| **Detail level** | flat, hairline borders, soft shadows, hard offset shadows, illustration/shapes, texture/noise, micro-interactions on hover |

## 2. Style directions (menu)

Short recipes. Use them as starting points, not as a fixed list.

- **Clean SaaS** — white, one accent, Inter-like sans, rounded 12px, soft shadow, centered.
- **Editorial serif** — off-white paper, big serif headline (Playfair/Fraunces/Instrument Serif), thin rules, asymmetric columns, lots of air.
- **Dark neon accent** — near-black #0B0B10, one neon accent (lime/cyan/magenta) used sparingly, mono labels, glow only on focus/hover.
- **Neo-brutalist** — thick 2–3px black borders, hard offset shadows, saturated flat fills, chunky grotesk, no gradients.
- **Soft & rounded** — pastel backgrounds, 24px+ radii, friendly rounded sans (Nunito/Quicksand), pill buttons.
- **Glass** — gradient mesh backdrop, translucent panels with backdrop-filter, white text with tested contrast.
- **Corporate trust** — navy/slate, structured grid, small caps labels, check-list bullets, conservative type.
- **Swiss / grid** — strict grid, huge numerals or headline, black + one primary color, flush-left, no decoration.
- **Luxury** — black or cream, thin serif or wide-tracked caps, gold/brass accent, very airy.
- **Playful** — bright multi-color, rotated stickers/badges, bouncy hover, emoji-free illustrated shapes.
- **Retro terminal** — monospace, green/amber on black, ASCII-like borders, blinking cursor.
- **Data-dense / pro tool** — compact, small type, tables and tags, muted grey UI, one status color.
- **Gradient bold** — big gradient fill, white heavy type, oversized CTA.
- **Warm minimal** — beige/sand neutrals, earthy accent, humanist sans, soft corners.

## 3. Building a set of 10

A good default spread (adapt to the target and constraints):

1. Conventional, polished (the "safe" answer) — so the user has a baseline.
2. Editorial / typographic — type does the work.
3. Dark, high-contrast.
4. Bold / brutalist or gradient — loud.
5. Soft / friendly.
6. Corporate / trust.
7. Data-dense or compact — tests the density axis.
8. Asymmetric or unusual layout — tests composition.
9. Luxury / very airy.
10. Wildcard — something the user would never have asked for.

When a constraint fixes an axis (e.g. "keep brand blue #1D4ED8"), vary the others harder: the blue can be the accent on white, the full background, a thin rule on dark, a gradient stop, a tinted neutral. Same hex, different role.

For small elements (a button, a badge, an input), the layout axis is narrow; vary shape, size, icon placement, state treatment, and the context around it instead.

## 4. "Different enough" check

Before rendering, run through the axes table:

- Any two variants with the same layout **and** same visual style → change one.
- Any pair differing on fewer than 2 axes → change one.
- Squint test: shrink the preview to thumbnails in your head. If two look alike at thumbnail size, they're not different enough.
- At least one variant should make the user say "oh, I didn't think of that".
- Count dark vs. light: aim for ~2–3 dark out of 10, not 0 and not 7.

Examples:
- ❌ Variant 2 = variant 1 with 24px padding instead of 16px and a slightly bigger title. Same layout, style, type, color.
- ❌ Variants 3 and 5 both "centered card, minimal, blue accent", one with Inter, one with Manrope. Only typography differs, and barely.
- ✅ Variant 1 "centered card, minimal, sans, mono+accent, airy" vs. variant 7 "split, dark, mono caps, dark+neon, compact" — differs on 5 axes.

## 5. Mixing picks in round 2+

Map each part of the user's answer to an axis and take that value from that variant:

- "layout from 4, colors from 7" → R2-1 is exactly that combination. R2-2/R2-3 keep the combination and vary what the user didn't specify (typography from 4 vs. 7, density).
- "4 but darker" → R2 variants: 4 on dark bg; 4 with dark header band only; 4 with deep accent.
- "between 3 and 8" → build 2–3 points on the line from 3 to 8 (closer to 3, middle, closer to 8) and say which axes moved.
- Component pick ("buttons from 9") → carry that treatment into every R2 variant.

Name round-2 variants by their recipe ("R2-1 · Layout 4 + colors 7") so the next pick is unambiguous.
