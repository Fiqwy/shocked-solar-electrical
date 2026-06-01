# Shocked Solar & Electrical — Build Handoff

## What's built (2026-06-01 14:30)
- Project folder + git initialised
- IG fully scraped via headed Playwright — 11 real photos + profile + 2 highlight covers downloaded to assets/
- `assets/_source.json` written with all 11 captions verbatim, brand specs (SolaX/GoodWe/LONGi/Jinko/Sigenergy), proven job inventory
- Vendor JS locked: Lenis 1.1.13 + GSAP 3.12.5 + ScrollTrigger + Leaflet 1.9.4 (offline, no CDN at runtime)
- Pre-build intelligence workflow running (5 research agents → 5 verifiers → 1 synthesizer)
- **Key discovery:** Captions confirm TEAM not solo ("the team", "the boys" repeatedly) — plural copy is correct. Saved as new memory feedback.

## Voice locked from captions
Confident, practical, technical, Aussie casual. Signature: "Why not go solar?", "the boys", "Powered Right". Self-tag: #SSE or #ShockedSolarElectrical. Emoji: ⚡ ☀️ 🔋 ❄️ 💡

## Proven case studies (real)
- 100kW remote NQ install — Jinko panels + Schletter racking + Sigenergy inverters + 96kWh battery (flagship)
- 21kW commercial Mount Gravatt — GoodWe 20kW 3-phase + TCL 440W
- 50kWh SolaX battery + 13.3kW LONGi Hi-MO X10 — whole home backup
- 13.2kW shed solar
- AC relocation + patio electrical fit-out at "Alan's"
- Kitchen reno electrical

## Verified facts (locked from research 2026-06-01)
- **Legal name:** SHOCKED SOLAR & ELECTRICAL PTY LTD
- **ABN:** 27 684 898 762 (active 27 Feb 2025)
- **GST:** registered 1 Apr 2025
- **Location:** QLD 4124 (Boronia Heights, south Brisbane / Logan border)
- **Phone:** 0490 482 632 (per Nicholas, NOT yet in public directories — verify with owner before launch)
- **Instagram:** https://www.instagram.com/shockedsolarandelectrical/
- **Services:** Solar energy · Air-conditioning · General electrical
- **Service area:** Brisbane and surrounding areas
- **Web/Google Business/FB:** None found. This site will be his primary digital presence.

## Locked decisions
- **Hero:** Canvas 2D split — voltage arcs (top) → sun rays (bottom) overlaid on a real install photo
- **Palette (proposed, lock after IG scrape):** Electric Cyan `#00D9FF` + Deep Navy `#0A1E3E` + Solar Amber `#FFB800` on near-black `#0A0B0F`
- **Type:** Manrope (display) + Inter (body)
- **Stack:** Vanilla HTML/CSS/JS + Lenis + GSAP + ScrollTrigger + Leaflet (suburb map)
- **Photo fallback (if <10 usable IG photos):** Switch-On pattern — SVG icons, suburb pages, map, type-led sections. No AI placeholders.

## Next action when session resumes (after Playwright headed restart)
1. Test Playwright is headed: navigate to `about:blank` and confirm window pops
2. Headed Playwright IG scrape → `assets/_source.json` + downloaded HD images
3. Asset inventory decision gate (≥10 photos = photo-led; <10 = scarcity pattern)
4. Lock palette and type with `ui-ux-pro-max` skill
5. Scaffold from Goldy/Switch-On hybrid → build 15 sections in order

## Plan file (full spec)
`~/.claude/plans/alright-so-just-before-purrfect-llama.md`
