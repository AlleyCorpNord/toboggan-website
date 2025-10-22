---
title: Designing for Accessibility from Day One
excerpt: Practical patterns that make products more inclusive without slowing teams down.
coverImage: /media/pexels-eugeniofr-30005297.jpg
date: 2025-08-12T14:15:00.000-04:00
---

Accessibility is not a checklist at the end; it is design quality from the start.

## Color and contrast

Use tokens, not hex codes. A semantic system (e.g., `--color-fg-muted`) makes contrast ratios easier to enforce. Dark mode must be tested with real content, not just a theme toggle.

## Keyboard first

Everything is reachable and operable with a keyboard. Focus order matches reading order. Skip links are visible when focused. Modals trap focus correctly and restore it on close.

## Real labels, not placeholders

Placeholders disappear. Labels persist. Associate inputs with `<label for>` and keep error messages next to the fields they describe.

## Media

- Provide transcripts for audio
- Caption videos and prefer burned‑in captions for social clips
- Describe images that carry meaning; decorative images should use empty alt text

## Testing a11y

Run automated checks, then test with a screen reader. Pair a designer and an engineer for 20 minutes and try completing one flow with eyes closed. The findings are humbling and instantly actionable.

Designing for accessibility is designing for everyone. It feels like craft because it is.
