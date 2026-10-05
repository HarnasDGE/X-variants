---
name: pick-dont-describe
description: Turns vague UI style requests into a pick-from-variants loop. Use whenever the user asks to change how a UI looks without saying how — "make it more modern", "more professional", "cleaner", "nicer", "make it pop", "redesign this", "improve the look", "it looks boring", "refresh the hero", "zrób to ładniej" (any language) — for any component, section, page, landing page, dashboard, form or email template, in any stack (HTML/CSS, React, Vue, Svelte, Tailwind, SwiftUI, Flutter...). Instead of guessing one look, it asks one short question first, then renders ~10 genuinely different variants side by side in a local HTML preview (or a shareable artifact) so the user can pick and mix ("layout from 4, colors from 7") and narrow down before the real code is touched. Picking is easier than describing. Skip it for concrete edits (exact colors, sizes, positions, a Figma to match), bug/accessibility fixes, refactors, or when the user said "just do it" / "one version".
---

# Pick, don't describe

"Make it more modern" rarely works on the first try. The model is not the weak link: the user is asking for a vision they don't have yet, so any single guess is a coin flip and the follow-ups ("no, more... you know") go in circles. People can't describe taste, but they recognise it instantly. So: show ~10 truly different options, let the user point ("layout from 4, colors from 7"), refine only the picks, and apply the winner to the real code.

The user prompts like always. Your job is to notice the vague style request and offer variants first.

## 1. Decide whether this applies

Use this flow when all three hold:

1. **The request changes how UI looks** — a component, section, page, email, dashboard, form, app screen. Any stack.
2. **The style direction is vague** — subjective adjectives ("modern", "clean", "premium", "fresh", "less boring") or open verbs ("redesign", "restyle", "polish", "improve the look") with no decisions behind them.
3. **No concrete style decisions are given** — no specific colors, fonts, sizes, spacing, layout, reference site, screenshot, Figma or design-system rule that already answers the question.

Don't use it when:
- The request is concrete ("button to #2563EB", "title 32px", "move the CTA under the image", "match this Figma"). The user already decided; variants would just slow them down.
- It's a bug fix, accessibility fix, refactor or logic change, even if it touches UI files ("fix the overlap on mobile" is not a style question).
- The user said "just do it", "one version", "no options", "no variants", or declined variants earlier in this session for this element. Respect that; asking again is nagging.
- The project has a strict design system and the request is answered by applying it. Apply it and say which rules you used.
- It's a new feature or behavior ("add a dark mode toggle", "add a FAQ section"). Build it. If one part of it is an open style call (the dark palette, the look of the new section), you may offer variants for that part only.

**Borderline:** vague request + one or two concrete constraints ("more modern, keep our brand blue") → use the flow and treat each constraint as fixed in every variant. If the user gives a reference — an outside site ("like Linear's") or something in the project ("match the header") — the request is no longer vague about direction — just do it, without tacking on a variants offer. Explicit constraints from the user or the brand (colors, logo) still beat the reference's own.

See `references/trigger-examples.md` for ~30 worked trigger / don't-trigger / borderline cases when you're unsure.

## 2. Ask once, before touching code

Ask exactly one short question, then stop and wait. Do not edit files or start generating first: if the user says "no", that work is wasted, and the point of asking is to keep the user in control of their time. A quick look to decide *whether* to ask is fine (open the target file, check for a design system or tokens that already answer the request); the deep read happens in step 3.

Use the structured question tool if your environment has one (e.g. `AskUserQuestion`), otherwise plain text:

> That's a style call with no fixed direction yet. Want me to prepare variants so you can pick instead of describe?
> 1. Local preview — a standalone HTML file you open in the browser (default)
> 2. Artifact — a shareable page you can send to your team
> 3. No, just do one version
>
> (Default is 10 variants — say e.g. "5" for fewer.)

- Adapt the wording, don't recite it: answer in the user's language, mention constraints you'll keep ("#1D4ED8 stays in every variant"), and if the target is unclear ("make it nicer" with several candidates), fold the scope into the same question ("the whole page, or just the pricing card?") rather than asking twice.
- Accept loose answers: "yes", "1", "go", "8 variants", "artifact, 6" all work.
- If the user chooses 3 / "no": do a normal single edit, and don't offer variants again for this element in this session.
- If the user's original message already answered it ("give me 5 options in a preview", "show me a few options"), skip the question and fill gaps with defaults: local preview, 10 variants ("a few" ≈ 4–5).
- If they asked for your opinion ("it's meh, thoughts?"), give a 2–3 line take on what's weak, then offer variants in the same message.
- Offer option 2 only if you can actually publish an artifact here: on claude.ai, or when a tool for publishing artifacts/pages is in your tool list. Otherwise list just 1 and 3 — offering something you can't deliver costs the user a round-trip.

## 3. Understand the target

Read the actual code before designing — variants that ignore the real component are useless at step 7.

- Find the component/page and its surroundings: framework, styling approach (Tailwind, CSS modules, styled-components, plain CSS, SwiftUI modifiers...), design tokens/CSS variables, fonts already loaded, brand colors, icon set.
- Collect the **real content**: exact texts, prices, labels, data, image/icon references. Variants differ in design, not content. Lorem ipsum makes the user judge a different thing than what ships.
- Write down **fixed constraints**: things the user asked to keep, brand color, logo, accessibility needs, required elements (e.g. a legal line, the 3 pricing tiers).
- Note the **page context**: the background and surroundings the element really sits on. Render component variants on that real background by default, so "colors from 7" means the component's colors, not a page backdrop that won't ship. If a variant deliberately changes the surrounding section too, say so in its note.
- For non-web stacks (SwiftUI, Flutter, native), render an HTML approximation in the preview and say so; the goal is to choose a direction, not to pixel-match the platform.

## 4. Generate variants that are actually different

Ten versions with slightly different padding is a failure — the user can't pick between things they can't tell apart. Each variant takes a clearly different direction.

Read `references/variant-axes.md` before designing. In short, the axes are: **layout**, **visual style**, **typography**, **color**, **density**, **hierarchy/emphasis**, **detail level**. Rules:

- Every pair of variants differs on at least 2 axes, and no two variants share both the same layout and the same visual style.
- Spread across the space: include at least one safe/conventional option, one bold one, one dark one and one unexpected one. The user often doesn't know they like something until they see it.
- Keep fixed constraints identical in all variants (the brand blue stays the exact hex everywhere). Derived shades for hover/pressed states are fine; a different "close enough" blue is not.
- Small decorative or structural labels (a brand name already on the page, "Includes", "01") are fine; invented claims, stats, testimonials or features are not, because the user would be judging content that doesn't exist.
- If the target spans several sections (e.g. hero + pricing), variants may rearrange how they sit together (side by side, overlapping), but every section and its content stays.
- Before rendering, write a short axes table as an HTML comment in the round inside the preview file — it's what makes the mix step precise. In your reply, a one-line-per-variant list is enough:

```
#  Name              Layout        Style        Type            Color            Density
1  Clean SaaS        centered card minimal      sans, medium    mono + accent    airy
4  Editorial serif   asymmetric    editorial    serif display   warm off-white   airy
7  Dark neon accent  split         dark/hi-con  mono caps       dark + neon      compact
```

Give each variant a number, a 2–4 word name ("4 · Editorial serif") and one line on what makes it different.

**Quality bar for every variant** (a broken variant gets rejected for the wrong reason):
- Responsive: works at 375px and 1280px, no horizontal scroll, no overlapping text.
- Readable: WCAG AA contrast for body text (4.5:1), including on gradients and dark variants.
- Real content, real states: hover/focus styles on interactive elements.
- Check it, don't assume it: if a headless browser is available (e.g. Playwright), screenshot the preview at desktop and mobile and look. Otherwise review each variant's CSS for fixed widths, missing wrap/stacking rules under ~600px and low-contrast text.
- No dependencies beyond Google Fonts or a CDN the project already uses. No external images unless the project already has them (use CSS shapes, gradients, inline SVG or emoji-free icon substitutes instead).

## 5. Render the comparison

### Local preview (default)

1. Copy `templates/preview.html` (in this skill's directory) to `.variants/<target-name>-variants.html` at the project root, e.g. `.variants/pricing-card-variants.html`. Don't modify the real component yet.
2. Fill it in following the comments at the top of the template: set the title, then add one `<template class="variant">` block per variant inside the round. Each variant is self-contained HTML + `<style>`; the template renders each in its own iframe, so styles never leak between variants and you can write plain, unprefixed CSS.
3. Use plain HTML + CSS (+ minimal vanilla JS). It must open with a double click, without the project running and with no build step. If the project uses Tailwind, either write plain CSS (preferred — keeps variants comparable) or load the Tailwind Play CDN inside that variant.
4. The template already provides: sticky header with instructions, grid/list toggle, desktop/mobile width toggle (all at once and per variant), click-to-expand full view, round tabs, and a "pick" bar that builds a reply like "layout from 4, colors from 7" for the user to copy.
5. If the project is a git repo and `.variants/` isn't ignored, suggest adding it to `.gitignore` (don't edit it without asking).
6. Give the user the file path and try to open it (`open` on macOS, `xdg-open` on Linux, `start` on Windows). In a remote/headless environment, say where the file is instead; offer a tiny static server (`python3 -m http.server -d .variants 8000`) only if the user needs to view it from another device.

### Artifact

Build the same page from the same template (a single self-contained HTML file with the same numbers and names, so feedback from teammates maps to variants) and publish it as an artifact using your environment's artifact/publish tool. Return the link. Keep the local file too — it's what you update in later rounds.

## 6. Pick and mix

Ask: "Which ones do you like? You can mix: 'layout from 4, colors from 7, typography from 2'."

Interpret loose answers generously, using the axes table:
- "4 but darker" → variant 4 with the color axis moved toward dark.
- "something between 3 and 8" → blend: name which axes come from which.
- "none, but 6 was closest" → treat 6 as the pick and push it further in its own direction.
- "I like the buttons in 9" → a component-level pick; carry 9's button treatment into the next round.

If the answer is ambiguous in a way that changes the result, ask one clarifying question; otherwise make a reasonable call and state it in one line.

## 7. Iterate, narrowing down

- Next round: **3–4 variants built only from the picks** — refinements and explicit combinations, not new random directions. Narrowing is the point; new directions reset the user's progress.
- If the user mixed axes, make the combinations explicit in each name and note ("R2-1 · Layout 4 + colors 7").
- Update the **same preview file**: add a new round (the template turns rounds into tabs and opens the latest), keep earlier rounds so the user can go back and compare.
- Repeat until the user picks one. Usually 1–2 rounds.
- If the user rejects a whole round twice, stop guessing: ask one concrete question ("a site you like the look of?" or "more like 3 or more like 8?"), then do a fresh round of ~10.

## 8. Apply to the real code

- Implement the chosen variant in the real component using the project's conventions: its framework, styling approach, tokens/variables, existing utilities and components. Translate, don't paste — preview CSS was written for comparison, not for the codebase. In a Tailwind project, use Tailwind classes and theme values; with CSS variables, reuse or add tokens rather than hardcoding hex values.
- If the winner uses a font, image or dependency the project doesn't load yet, add it the way the project loads such things (e.g. `next/font`, a `<link>` in the layout, the existing font setup) or ask if that's a bigger change — don't silently drop it, or the result won't look like what the user picked.
- Preserve behavior: props, handlers, data bindings, accessibility attributes, tests and responsive behavior that already existed.
- Show a short summary of what changed (files + the main visual decisions).
- Ask whether to delete `.variants/`. Default: delete it once the final version is applied, unless the user wants to keep it.

## Turning it off

If the user says "just do it", "one version", "no variants" or similar at any point, drop the flow for the rest of the session (or for that element, if they scoped it) and work normally.
