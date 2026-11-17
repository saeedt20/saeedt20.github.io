# Saeed Taheri — Personal Website

<p>
  <a href="https://saeedt.ir/"><img src="https://img.shields.io/badge/Website-saeedt.ir-292e25?style=flat" alt="Website saeedt.ir"></a>
  <img src="https://img.shields.io/badge/Languages-FA_%2F_EN-a34e36?style=flat" alt="Bilingual Persian and English">
  <img src="https://img.shields.io/badge/Stack-HTML5_%C2%B7_CSS_%C2%B7_Vanilla_JS-4A6B53?style=flat" alt="HTML5, CSS, Vanilla JS">
  <a href="https://github.com/saeedt20"><img src="https://img.shields.io/badge/GitHub-%40saeedt20-181717?style=flat&logo=github" alt="GitHub @saeedt20"></a>
</p>

The bilingual personal portfolio of **Saeed Taheri (سعید طاهری)** — showcasing Linux desktop utilities, Android apps, router & embedded networking firmware, Python/AI automation, and availability for freelance work or open-source collaboration.

**[Visit saeedt.ir](https://saeedt.ir/)** · **[English View](https://saeedt.ir/?lang=en)** · **[GitHub Profile](https://github.com/saeedt20)**

> وب‌سایت شخصی سعید طاهری؛ ابزارهای دسکتاپ لینوکس، اپ‌های اندروید، فریم‌ور روتر، پایتون و اتوماسیون. معرفی پروژه‌های عمومی و همکاری فریلنس و متن‌باز، به فارسی و انگلیسی.

## Featured projects

| Project | Overview | Links |
| --- | --- | --- |
| **TallyDesklet · `v0.3.2`** | Native GTK system monitor: CPU, RAM, disk, network speed, and daily/weekly usage. Six themes, compact mode, and Persian/English layouts for Xfce on X11. | [Source](https://github.com/saeedt20/TallyDesklet) · [.deb release](https://github.com/saeedt20/TallyDesklet/releases/latest) |
| **Roozlet · `v0.4.2`** | Offline Persian calendar with seasonal artwork, search, personal notes, and optional reminders. Persian/English layouts; verified Iranian occasions and holidays for 1405. | [Source](https://github.com/saeedt20/Roozlet) · [.deb release](https://github.com/saeedt20/Roozlet/releases/latest) |
| **CouchZap · `v3.1.1`** | Open-source Kotlin/Media3 IPTV player for Android TV and phones. Six languages, Persian/Arabic RTL, remote controls, phone rotation, and optional public playlists. | [Source](https://github.com/saeedt20/CouchZap) · [Signed APK](https://github.com/saeedt20/CouchZap/releases/download/v3.1.1/CouchZap-3.1.1.apk) |
| **IkevWrt · `v1.13.5`** | Outbound IKEv2 VPN and policy routing through an English-only LuCI UI. 57,559 Iranian domain suffixes route via WAN by default. Signed OpenWrt package; tested on Redmi AX6S / OpenWrt 25.12.6. | [Source](https://github.com/saeedt20/ikevwrt) · [Release](https://github.com/saeedt20/ikevwrt/releases/tag/v1.13.5) |
| **OpenDSL · `v1.0.0`** | Community GPL-2.0 firmware and responsive local graphite web UI for ASUS DSL-N12E C1 based on vendor 1.1.2.3_743. Visual Network Map; 348 responsive layout checks. | [Source](https://github.com/saeedt20/OpenDSL) · [Firmware](https://github.com/saeedt20/OpenDSL/releases/tag/v1.0.0) |
| **GeminiShop** | Curated Telegram marketplace bringing trusted subscription and digital-key sellers together. | [Open in Telegram](https://t.me/GeminiRedeemBot) |
| **NumberFlare** | Virtual-number Telegram storefront with cryptocurrency and credit-card payments. | [Open in Telegram](https://t.me/NumberFlareBot) |

## Website features

- An editorial ivory/sage layout with a transparent workstation illustration and seven full-width project showcases sharing one responsive layout.
- Native GTK previews for TallyDesklet and Roozlet, a native Android TV preview for CouchZap, a synthetic LuCI preview for IkevWrt, a Network Map preview for OpenDSL, and brand artwork for the Telegram projects.
- The page opens immediately. An optional animated introduction remains available through the replay control, with skip and Escape support.
- Scroll reveals and a restrained hover effect that respect the visitor’s reduced-motion preference; the hero does not animate continuously.
- Persian and English content with right-to-left and left-to-right layouts.
- Shareable language and project links, such as [`?lang=en#roozlet`](https://saeedt.ir/?lang=en#roozlet), and a quick project index. An explicit URL language takes priority over the locally saved choice.
- Responsive layouts, explicit image dimensions, and a high-priority hero image. Project images load lazily.
- Current project versions, source links, Linux `.deb` packages, Android APK, OpenWrt/firmware releases, explicit maintained-fork attribution, and a direct contact link in the hero.
- Print and PDF export through the browser, with dedicated A4 print styles.
- Keyboard navigation, visible focus indicators, a skip-to-content link, and reduced-motion support.
- Locally hosted Vazirmatn fonts and language-specific favicons.
- A readable Persian page even when JavaScript is disabled.
- A locally hosted Enamad icon linked to the official certificate verification page.
- A local 1200 × 630 social preview image for shared links.

## Built with

HTML5, CSS, and vanilla JavaScript. The website is static and requires no package installation or build step.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and Persian fallback content |
| `main.js` | Localized content, language switching, intro lifecycle, scroll reveals, and printing |
| `styles.css` | Layout, typography, responsive rules, and print styles |
| `assets/` | Favicons, local fonts, workstation artwork, WebP project images, SVG brand icons, profile picture, and Enamad icon |
| `CNAME` | Custom domain configuration for `saeedt.ir` |
| `_headers` | Response-header configuration for compatible static hosts |
| `docs/CONTENT_AND_ASSETS.md` | Public content sources, current project versions, and artwork provenance |
| `tests/check-site.cjs` | Dependency-free checks for content, assets, language URLs, and intro focus |

## Preview locally

Clone the repository and start a local server:

```bash
git clone https://github.com/saeedt20/saeedt20.github.io.git
cd saeedt20.github.io
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000/) in your browser. You can also open `index.html` directly for a quick preview.

To export a PDF, select **Print / save PDF** on the website, choose A4 paper, and disable the browser's headers and footers.

Run the content and interaction checks with Node.js:

```bash
node tests/check-site.cjs
```

No packages are needed. Also check both languages in a browser at phone and desktop widths after changing the layout. The script uses a small DOM stand-in and does not replace visual browser checks.

## Update the content

Edit the `fa` and `en` dictionaries inside the `copy` object in `main.js` to update the introduction, project descriptions, and interface labels. Elements in `index.html` identify their text with `data-i18n` keys; accessible labels and image descriptions use `data-i18n-aria` and `data-i18n-alt`.

Keep the Persian fallback content in `index.html` in sync with those dictionaries. Project destinations and contact links are defined directly in the HTML. Layout, motion, and print rules live in `styles.css`.

The stylesheet and script URLs in `index.html` include content-hash version parameters. After editing either file, refresh its `?v=` value with the first 12 characters of `git hash-object styles.css` or `git hash-object main.js`. This keeps cached assets in sync with the current HTML.

## Deployment

The site is published through **GitHub Pages** from the root of the `main` branch at **[saeedt.ir](https://saeedt.ir/)**. Push updates to `main` to trigger a deployment. Keep `CNAME` in the repository to retain the custom domain configuration.

The Vazirmatn font license is included in [`assets/fonts/OFL.txt`](assets/fonts/OFL.txt).

## Content and assets

Content was checked against public project READMEs and published releases on **2026-11-17**. Project versions are static editorial snapshots. Linux downloads link to each latest release; the Android APK link is pinned to the displayed CouchZap version, and OpenWrt/OpenDSL releases link directly to their reviewed tags. There is no runtime GitHub API dependency. When a project changes, update both language dictionaries, the HTML fallback, version labels, download links, and its screenshot or brand asset together.

The TallyDesklet and Roozlet previews show the native GTK applications using example readings or an isolated example profile. They are not photographs of a user’s live desktop. The hero was generated from the owner-supplied workstation reference and encoded as transparent WebP in two resolutions. Details and the generation prompt are in [Content and assets](docs/CONTENT_AND_ASSETS.md).

The profile picture, Enamad icon, and Telegram project backgrounds are owner-supplied. CouchZap uses its official v3.1.1 SVG icon; IkevWrt uses its published LuCI status design preview with synthetic demo data; OpenDSL uses its published Network Map capture with synthetic demo devices and its brand SVG. Vazirmatn is hosted locally under its included OFL license. The site intentionally omits residence-location details and uses only public project information.

`_headers` is retained for compatible hosts; GitHub Pages does not apply that file as a custom-header configuration.

## Contact

- **Email:** [info@saeedt.ir](mailto:info@saeedt.ir)
- **GitHub:** [@saeedt20](https://github.com/saeedt20)
- **Website:** [saeedt.ir](https://saeedt.ir/)
