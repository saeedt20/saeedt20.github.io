# Saeed Taheri — Personal Website

The personal website of **Saeed Taheri (سعید طاهری)**. A background in IT, networking, system administration, and security meets a growing focus on web development. This bilingual portfolio introduces that journey, presents recent projects, and provides direct ways to get in touch.

**[Visit saeedt.ir](https://saeedt.ir/)**

وب‌سایت شخصی سعید طاهری؛ از فناوری اطلاعات، شبکه و امنیت تا توسعهٔ وب. معرفی، پروژه‌های منتخب و راه‌های ارتباط، به فارسی و انگلیسی.

## Featured projects

| Project          | Overview                                                                                                                                                    | Link                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **TallyDesklet** | Native Linux desktop widget for CPU, memory, disk, network speed, and daily/weekly data usage; built with Python, GTK 3, Cairo, and psutil for Xfce on X11. | [Source and details](https://github.com/saeedt20/tallydesklet) |
| **GeminiRedeem** | Telegram project                                                                                                                                            | [Open in Telegram](https://t.me/GeminiRedeemBot)               |
| **NumberFlare**  | Telegram project                                                                                                                                            | [Open in Telegram](https://t.me/NumberFlareBot)                |

## Website features

- An editorial layout with oversized typography, an original wireframe monogram, and custom project artwork.
- A short animated introduction on the first visit of a browser session, with skip, Escape, and replay controls.
- Scroll reveals and subtle artwork motion that respect the visitor’s reduced-motion preference.
- Persian and English content with right-to-left and left-to-right layouts.
- Language selection saved locally when browser storage is available.
- Responsive layouts for desktop and mobile screens.
- Print and PDF export through the browser, with dedicated A4 print styles.
- Keyboard navigation, visible focus indicators, a skip-to-content link, and reduced-motion support.
- Locally hosted Vazirmatn fonts and language-specific favicons.
- A readable Persian page even when JavaScript is disabled.

## Built with

HTML5, CSS, and vanilla JavaScript. The website is static and requires no package installation or build step.

| File         | Purpose                                                                               |
| ------------ | ------------------------------------------------------------------------------------- |
| `index.html` | Page structure and Persian fallback content                                           |
| `main.js`    | Localized content, language switching, intro lifecycle, scroll reveals, and printing  |
| `styles.css` | Layout, typography, responsive rules, and print styles                                |
| `assets/`    | Favicons, local fonts, original orbit artwork, and the TallyDesklet interface preview |
| `CNAME`      | Custom domain configuration for `saeedt.ir`                                           |
| `_headers`   | Response-header configuration for compatible static hosts                             |

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

The profile introduction and technical background are adapted from [Saeed’s GitHub profile README](https://github.com/saeedt20/saeedt20). TallyDesklet’s description and interface preview come from its [project documentation](https://github.com/saeedt20/tallydesklet). The preview uses illustrative example data. The wireframe monogram and Telegram project artwork are original SVG/CSS compositions.

## Contact

- **Email:** [info@saeedt.ir](mailto:info@saeedt.ir)
- **GitHub:** [@saeedt20](https://github.com/saeedt20)
- **Telegram:** [@Saeeddot](https://t.me/Saeeddot)
