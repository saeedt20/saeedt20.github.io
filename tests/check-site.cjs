const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const script = fs.readFileSync(path.join(root, "main.js"), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, "Element IDs must be unique");
for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
  assert(ids.includes(id), `Missing project or section: ${id}`);
for (const [asset] of (html + css).matchAll(/assets\/[\w./-]+/g))
  assert(fs.existsSync(path.join(root, asset)), `Missing asset: ${asset}`);
assert.equal((html.match(/class="project reveal"/g) || []).length, 6);
assert.equal((html.match(/class="project-art project-/g) || []).length, 6);

function page(url, savedLanguage, blocked = false) {
  let document;
  const elements = new Map();
  function element(id = "") {
    const classes = new Set();
    return {
      id, hidden: id === "intro", inert: false, isConnected: true,
      dataset: {}, attributes: {}, listeners: {},
      classList: { add: (name) => classes.add(name), remove: (name) => classes.delete(name) },
      setAttribute(name, value) { this.attributes[name] = value; },
      addEventListener(name, callback) { this.listeners[name] = callback; },
      contains(target) { return id === "intro" && target === elements.get("skip-intro"); },
      focus() { document.activeElement = this; },
    };
  }
  const buttons = ["fa", "en"].map((lang) => Object.assign(element(), { dataset: { lang } }));
  const localized = ["i18n", "i18n-aria", "i18n-alt"].map((attribute) =>
    [...html.matchAll(new RegExp(`data-${attribute}="([^"]+)"`, "g"))].map(([, key]) =>
      Object.assign(element(), { dataset: { [attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())]: key } })),
  );
  const regions = [element(), element(), element()];
  document = {
    body: element(), documentElement: element(),
    getElementById(id) { if (!elements.has(id)) elements.set(id, element(id)); return elements.get(id); },
    querySelector() { return element(); },
    querySelectorAll(selector) {
      if (selector === "[data-lang]") return buttons;
      if (selector === ".site-header, main, .site-footer") return regions;
      const index = ["[data-i18n]", "[data-i18n-aria]", "[data-i18n-alt]"].indexOf(selector);
      return index < 0 ? [] : localized[index];
    },
    addEventListener() {},
  };
  document.activeElement = document.body;
  const location = new URL(url);
  const storage = {
    getItem() { if (blocked) throw new Error("Storage blocked"); return savedLanguage; },
    setItem(_, value) { if (blocked) throw new Error("Storage blocked"); savedLanguage = value; },
  };
  vm.runInNewContext(script, {
    document, location, URL, URLSearchParams, localStorage: storage,
    setTimeout: () => 1, clearTimeout() {},
    window: {
      matchMedia: () => ({ matches: false, addEventListener() {} }),
      addEventListener() {},
      history: { replaceState(_, __, value) { if (blocked) throw new Error("History blocked"); location.href = value; } },
    },
  });
  for (const group of localized) for (const item of group) {
    const value = item.textContent ?? item.attributes["aria-label"] ?? item.alt;
    assert.equal(typeof value, "string", `Missing translation: ${JSON.stringify(item.dataset)}`);
    assert(value.trim());
  }
  return { document, location, elements, regions, click: (lang) => buttons.find((button) => button.dataset.lang === lang).listeners.click() };
}

assert.equal(page("https://saeedt.ir/?lang=en#roozlet", "fa").document.documentElement.lang, "en");
assert.equal(page("https://saeedt.ir/?lang=fa", "en").document.documentElement.dir, "rtl");
assert.equal(page("https://saeedt.ir/?lang=invalid", "en").document.documentElement.lang, "en");
assert.equal(page("https://saeedt.ir/?lang=__proto__").document.documentElement.lang, "fa");
const shared = page("https://saeedt.ir/?from=github#couchzap", "fa");
shared.click("en");
assert.equal(shared.location.href, "https://saeedt.ir/?from=github&lang=en#couchzap");
assert.equal(shared.document.documentElement.dir, "ltr");
const blocked = page("https://saeedt.ir/?lang=en", undefined, true);
blocked.click("fa");
assert.equal(blocked.document.documentElement.lang, "fa");
const intro = page("https://saeedt.ir/");
assert(intro.elements.get("intro").hidden, "The intro must never block a first visit");
intro.elements.get("replay-intro").listeners.click();
assert(intro.regions.every((region) => region.inert));
intro.elements.get("skip-intro").listeners.click();
assert(intro.regions.every((region) => !region.inert));
assert(intro.elements.get("intro").hidden);
assert.equal(intro.document.activeElement.id, "main");
console.log("Site checks passed: translations, assets, links, six showcases, language URLs and intro focus.");
