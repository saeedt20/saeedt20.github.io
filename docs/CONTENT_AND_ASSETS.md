# Content and asset provenance

Reviewed on **2026-10-26**. The website uses public GitHub documentation and release information. Residence details and private repositories are not part of its content.

## Project content

| Project | Public reference | Website scope |
| --- | --- | --- |
| TallyDesklet | [v0.3.1](https://github.com/saeedt20/TallyDesklet/releases/tag/v0.3.1) and [README](https://github.com/saeedt20/TallyDesklet/blob/v0.3.1/README.md) | Native Python/GTK monitor; CPU, RAM, filesystem capacity, network speed and daily/weekly usage; six themes; bilingual UI; Xfce/X11. |
| Roozlet | [v0.4.1](https://github.com/saeedt20/Roozlet/releases/tag/v0.4.1) and [README](https://github.com/saeedt20/Roozlet/blob/v0.4.1/README.md) | Offline Persian calendar; four seasons; centered Shamsi date; month view; date/occasion search; local personal notes and optional notifications. Verified annual occasion/holiday coverage is **1405 only**. |
| CouchZap | [v3.1.1](https://github.com/saeedt20/CouchZap/releases/tag/v3.1.1) and [README](https://github.com/saeedt20/CouchZap/blob/v3.1.1/README.md) | Stable open-source Android TV/phone player with Kotlin and Media3; six languages; Persian/Arabic RTL; local/URL playlists and opt-in public catalogs; remote controls and phone rotation. No account required or subscription bundled. The APK CTA points to the displayed official signed release. |
| IkevWrt | [Public README at 978d609](https://github.com/saeedt20/ikevwrt/blob/978d6096a024d5e1420af2a14d1ded41db2f1d80/README.md) and [upstream](https://github.com/dreamboxone/ikev2-openwrt) | Maintained continuation/fork of the OpenWrt IKEv2 manager; LuCI, strongSwan and policy routing by domain/device. Persian RTL was inherited from upstream, not newly authored for this fork. No independent IkevWrt release is published, so only source/upstream links are offered. Older template forks are not presented as original projects. |
| Background | [Public profile README](https://github.com/saeedt20/saeedt20#readme) | IT and systems background, around eight years of Linux experience, education, AI-assisted troubleshooting and automation. |
| Telegram projects | Existing owner-supplied public descriptions | GeminiShop and NumberFlare descriptions and destinations are retained; no private repository content is used. |

Versions printed on the page describe the reviewed release and feature set. The `.deb` links use each project's `releases/latest` page so visitors can find installation instructions and checksums alongside the package. CouchZap's APK URL is pinned to v3.1.1 to match its badge; its published SHA-256 is `3cccfe433b6fe1d898b3f59d57c7704c384fa1f079164d298b2d93161bbb3f54`. TallyDesklet v0.3.1 and Roozlet v0.4.1 remain current and retain their matching native previews.

## Native application previews

These are lossless WebP encodings of published native GTK captures. They show example data or an isolated example profile, not a user's real readings or private notes.

| Website asset | Source | Dimensions |
| --- | --- | --- |
| `assets/tallydesklet-v031.webp` | [`docs/examples/dark.png` at v0.3.1](https://github.com/saeedt20/TallyDesklet/blob/v0.3.1/docs/examples/dark.png), commit `753ebe946a54cc295cdf759b867fcf5dbe4a2ad7` | 680 × 860 |
| `assets/roozlet-v041-autumn.webp` | [`docs/screenshots/v0.4.1-card-autumn-fa.png` at v0.4.1](https://github.com/saeedt20/Roozlet/blob/v0.4.1/docs/screenshots/v0.4.1-card-autumn-fa.png), commit `501aabdd5d9e7490a9c5220f71c96dc1da0d729b` | 320 × 236 |

## Workstation hero

Generated on **2026-10-12** with OpenAI's image-generation tool, using the owner-supplied workstation illustration as a reference. This is conceptual artwork, not a photograph of real equipment or a claim about the owner's workspace.

- `assets/workstation-hero.webp`: 1230 × 1278, transparent background.
- `assets/workstation-hero-small.webp`: 615 × 639, transparent background.
- Both are encoded at WebP quality 86. The HTML uses `srcset`, image dimensions and `fetchpriority="high"`.
- The previous `assets/workstation.svg` is preserved as an editable earlier composition.

### Final generation prompt

> Use case: precise-object-edit / portfolio hero illustration. Edit target: supplied image of Saeed Taheri's isometric workstation illustration. Recreate and substantially polish its visual craft for his existing ivory-paper, sage-green and muted burnt-clay personal portfolio. Preserve the recognizable subject and elements: one desktop monitor on a stand, compact network/server tower on its left, a keyboard and mouse in front, a small floating security shield with checkmark on the upper right, and a sparse architectural ground grid. Preserve the isometric three-quarter composition and the restrained ivory, sage, deep forest green, graphite and tiny muted burnt-orange palette. Improve consistent perspective, precise geometry, high-quality matte ceramic/aluminium materials, subtle bevels, finely judged soft lighting, and grounded ambient shadows. The result should feel like a carefully art-directed editorial product illustration, calm and refined, not a noisy futuristic gaming computer. Monitor dark forest screen shows only a simple crisp abstract terminal/code motif with a small clay cursor and a tasteful </> mark. Remove all tiny annotation text, gibberish, labels, letter monograms and watermarks. Keep all objects completely inside the frame with balanced breathing room; the composition should read clearly when displayed 440 pixels wide and also on a phone. Use a genuinely transparent background around the objects and sparse ground grid, no black rectangle, no surrounding scenery, no photographic room, no neon glow, no gradients behind the scene. Single polished final artwork, approximately square with a slightly taller composition, suitable as a transparent website hero asset.

## Other assets

The portrait, Enamad icon and Telegram project backgrounds are supplied by the owner. The Enamad link is the existing official certificate destination; it is not presented as a certification of every featured application. `assets/couchzap-icon.svg` is copied unchanged from CouchZap's [official v3.1.1 brand SVG](https://github.com/saeedt20/CouchZap/blob/v3.1.1/docs/brand/couchzap.svg); the project panel follows that release's sage/charcoal colors. IkevWrt's inline SVG is a decorative router/lock illustration, not a screenshot or a claim about tested hardware. Local Vazirmatn fonts retain the license at [`assets/fonts/OFL.txt`](../assets/fonts/OFL.txt).

## Maintenance

Update both `fa` and `en` in `main.js` alongside the Persian HTML fallback. Refresh project versions, screenshots and this source record together after new releases. Keep the `CNAME` file and the existing GitHub Pages deployment. Never copy residence details or non-public repository data into the site.
