# Trigger examples

Use when it's unclear whether to offer variants. The test: **is the user asking for a style direction they haven't decided?** If yes, picking beats guessing. If they already decided (or it's not about looks), just do the work.

## Trigger — offer variants

| # | Request | Why |
|---|---|---|
| 1 | "make the pricing card more modern" | Pure subjective adjective, look-only change. |
| 2 | "this landing page looks boring, can you redesign it?" | "Boring" + "redesign" with no direction. |
| 3 | "make the dashboard look more professional" | "Professional" means ten different things. |
| 4 | "clean up the signup form, it's ugly" | "Clean up" + "ugly" is about looks, not code (no bug named). |
| 5 | "refresh the hero section" | Open-ended restyle. |
| 6 | "make the CTA pop more" | "Pop" has no concrete decision behind it. |
| 7 | "zrób ten nagłówek ładniej" (PL: make this header nicer) | Same intent, any language. |
| 8 | "the welcome email template feels dated" | Email templates are UI too. |
| 9 | "can you make the settings screen in SwiftUI look nicer?" | Any stack; preview is an HTML approximation. |
| 10 | "polish the navbar, make it feel premium" | "Premium" is a vibe, not a spec. |
| 11 | "I hate how the testimonials look, do something" | Dissatisfaction + no direction. |
| 12 | "make the 404 page more fun" | "Fun" is subjective. |

## Borderline — trigger, with fixed constraints

| # | Request | How to handle |
|---|---|---|
| 13 | "make it look more professional, keep the brand blue #1D4ED8" | Trigger. #1D4ED8 appears in every variant, in different roles. |
| 14 | "modernize the footer but keep it dark" | Trigger. Dark background fixed; vary layout, type, detail. |
| 15 | "redesign the hero, the headline and image must stay" | Trigger. Content fixed, design open. |
| 16 | "make the table nicer, we use Tailwind" | Trigger. Tailwind is an implementation detail, not a style decision. |

## Don't trigger — just do it

| # | Request | Why not |
|---|---|---|
| 17 | "change the CTA color to #16A34A" | Concrete decision already made. |
| 18 | "make the title 32px and bold" | Concrete values. |
| 19 | "move the CTA under the image" | Concrete layout change. |
| 20 | "fix the button overlapping the text on mobile" | Bug fix, even though it's in UI. |
| 21 | "add aria-labels to the icon buttons" | Accessibility fix. |
| 22 | "refactor the Card component to use CSS modules" | Refactor; the look must stay the same. |
| 23 | "redesign the hero, just one version please" | User opted out of options explicitly. |
| 24 | "match the pricing page to this Figma: <link>" | Reference defines the direction. |
| 25 | "make the buttons consistent with our design system" | Answered by the design system: apply it and say which rules. |
| 26 | "make it look like stripe.com's pricing page" | Clear reference; do it. Brand colors the user asked to keep still win over the reference's. |
| 27 | "make the modal more modern" — after the user said "no variants" earlier this session | Respect the earlier opt-out. |
| 28 | "add a dark mode toggle" | New feature; build it. If the dark palette is an open question, variants for the palette only are fine. ("make dark mode nicer" would trigger.) |
