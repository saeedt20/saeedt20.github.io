# Saeed Taheri — Personal Website

The personal website of **Saeed Taheri (سعید طاهری)**. Linux desktop tools, Android apps, Python and practical automation, supported by a background in IT and systems. This bilingual portfolio presents public projects and availability for freelance work and open-source collaboration.

**[Visit saeedt.ir](https://saeedt.ir/)**

وب‌سایت شخصی سعید طاهری؛ ابزارهای دسکتاپ لینوکس، اپ‌های اندروید، پایتون و اتوماسیون. معرفی پروژه‌های عمومی و همکاری فریلنس و متن‌باز، به فارسی و انگلیسی.

## Featured projects

| Project          | Overview                                                                                                                                                    | Link                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **TallyDesklet · v0.3.1** | Native GTK system monitor: CPU, RAM, disk, network and daily/weekly usage. Six themes, compact mode and Persian/English layouts for Xfce on X11. | [Source and .deb releases](https://github.com/saeedt20/TallyDesklet) |
| **Roozlet · v0.4.1** | Offline Persian calendar with seasonal artwork, search, personal notes and optional reminders. Persian/English layouts; verified annual occasions and Iranian holidays for 1405. | [Source and .deb releases](https://github.com/saeedt20/Roozlet) |
| **CouchZap** | Kotlin/Media3 IPTV player for Android TV boxes and phones, with local playlist import and remote/touch navigation. Bring your own playlist. | [Source and build instructions](https://github.com/saeedt20/CouchZap) |
| **GeminiShop**   | Curated marketplace bringing trusted subscription and digital-key sellers together.                                                                         | [Open in Telegram](https://t.me/GeminiRedeemBot)                      |
| **NumberFlare**  | Virtual-number storefront with cryptocurrency and credit-card payments.                                                                                     | [Open in Telegram](https://t.me/NumberFlareBot)                       |

## Website features

- An editorial ivory/sage layout with a polished transparent workstation illustration, responsive WebP sources and current native GTK project previews.
- A short animated introduction on the first visit of a browser session, with skip, Escape, and replay controls.
- Scroll reveals and a restrained hover effect that respect the visitor’s reduced-motion preference; the hero does not animate continuously.
- Persian and English content with right-to-left and left-to-right layouts.
- Language selection saved locally when browser storage is available.
- Responsive layouts, explicit image dimensions and a high-priority hero image. Project images load lazily.
- Clear project versions, source links, Linux package downloads and a direct contact link in the hero.
- Print and PDF export through the browser, with dedicated A4 print styles.
- Keyboard navigation, visible focus indicators, a skip-to-content link, and reduced-motion support.
- Locally hosted Vazirmatn fonts and language-specific favicons.
- A readable Persian page even when JavaScript is disabled.
- A locally hosted Enamad icon linked to the official certificate verification page.

## Built with

HTML5, CSS, and vanilla JavaScript. The website is static and requires no package installation or build step.

| File         | Purpose                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| `index.html` | Page structure and Persian fallback content                                                           |
| `main.js`    | Localized content, language switching, intro lifecycle, scroll reveals, and printing                  |
| `styles.css` | Layout, typography, responsive rules, and print styles                                                |
| `assets/`    | Favicons, local fonts, workstation artwork, and WebP project images, profile picture, and Enamad icon |
| `CNAME`      | Custom domain configuration for `saeedt.ir`                                                           |
| `_headers`   | Response-header configuration for compatible static hosts                                             |
| `docs/CONTENT_AND_ASSETS.md` | Public content sources, current project versions and artwork provenance |

## Preview locally

Clone the repository and start a local server:

```bash
git clone https://github.com/saeedt20/saeedt20.github.io.git
cd saeedt20.github.io
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000/) in your browser. You can also open `index.html` directly for a quick preview.

To export a PDF, select **Print / save PDF** on the website, choose A4 paper, and disable the browser's headers and footers.

## Update the content

Edit the `fa` and `en` dictionaries inside the `copy` object in `main.js` to update the introduction, project descriptions, and interface labels. Elements in `index.html` identify their text with `data-i18n` keys; accessible labels and image descriptions use `data-i18n-aria` and `data-i18n-alt`.

Keep the Persian fallback content in `index.html` in sync with those dictionaries. Project destinations and contact links are defined directly in the HTML. Layout, motion, and print rules live in `styles.css`.

## Deployment

The site is published through **GitHub Pages** from the root of the `main` branch at **[saeedt.ir](https://saeedt.ir/)**. Push updates to `main` to trigger a deployment. Keep `CNAME` in the repository to retain the custom domain configuration.

The Vazirmatn font license is included in [`assets/fonts/OFL.txt`](assets/fonts/OFL.txt).

## Content and assets

Content was checked against public project READMEs and published releases on **2026-10-12**. Project versions are static editorial snapshots; download links lead to the current release. There is no runtime GitHub API dependency. When a project changes, update both language dictionaries, the HTML fallback, version labels and its screenshot together.

The TallyDesklet and Roozlet previews show the native GTK applications using example readings or an isolated example profile. They are not photographs of a user’s live desktop. The new hero was generated from the owner-supplied workstation reference and encoded as transparent WebP in two resolutions. The original SVG remains available. Details and the generation prompt are in [Content and assets](docs/CONTENT_AND_ASSETS.md).

The profile picture, Enamad icon and Telegram project backgrounds are owner-supplied. CouchZap retains its original SVG app-icon composition. Vazirmatn is hosted locally under its included OFL license. The site intentionally omits residence-location details and uses only public project information.

`_headers` is retained for compatible hosts; GitHub Pages does not apply that file as a custom-header configuration.

## Contact

- **Email:** [info@saeedt.ir](mailto:info@saeedt.ir)
- **GitHub:** [@saeedt20](https://github.com/saeedt20)
