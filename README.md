# Saeed Taheri — Personal Website

The personal website of **Saeed Taheri (سعید طاهری)**, a self-employed professional working independently. It brings together a short introduction, recent projects, and direct ways to get in touch in Persian and English.

**[Visit saeedt.ir](https://saeedt.ir/)**

وب‌سایت شخصی سعید طاهری؛ معرفی کوتاه، پروژه‌های اخیر و راه‌های ارتباط، به فارسی و انگلیسی.

## Featured projects

| Project | Link |
| --- | --- |
| **GeminiRedeem** | [Open in Telegram](https://t.me/GeminiRedeemBot) |
| **NumberFlare** | [Open in Telegram](https://t.me/NumberFlareBot) |

## Website features

- Persian and English content with right-to-left and left-to-right layouts.
- Language selection saved locally when browser storage is available.
- Responsive layouts for desktop and mobile screens.
- Print and PDF export through the browser, with dedicated A4 print styles.
- Keyboard navigation, visible focus indicators, a skip-to-content link, and reduced-motion support.
- Locally hosted Vazirmatn fonts and language-specific favicons.
- A readable Persian page even when JavaScript is disabled.

## Built with

HTML5, CSS, and vanilla JavaScript. The website is static and requires no package installation or build step.

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and Persian fallback content |
| `main.js` | Profile data, translations, language switching, navigation, and printing |
| `styles.css` | Layout, typography, responsive rules, and print styles |
| `assets/` | Favicons, font files, and the font license |
| `CNAME` | Custom domain configuration for `saeedt.ir` |
| `_headers` | Response-header configuration for compatible static hosts |

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

Edit the `data` object near the top of `main.js` to update the name, professional title, introduction, projects, or contact links. Text that differs by language uses this format:

```js
{ fa: 'متن فارسی', en: 'English text' }
```

Interface labels are defined in the `copy` object. Keep the Persian fallback content in `index.html` in sync with changes to the profile, projects, and contacts.

## Deployment

The site is published through **GitHub Pages** from the root of the `main` branch at **[saeedt.ir](https://saeedt.ir/)**. Push updates to `main` to trigger a deployment. Keep `CNAME` in the repository to retain the custom domain configuration.

The Vazirmatn font license is included in [`assets/fonts/OFL.txt`](assets/fonts/OFL.txt).

## Contact

- **Email:** [info@saeedt.ir](mailto:info@saeedt.ir)
- **GitHub:** [@saeedt20](https://github.com/saeedt20)
- **Telegram:** [@Saeeddot](https://t.me/Saeeddot)
