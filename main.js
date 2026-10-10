(() => {
  'use strict';

/* Public profile content, confirmed by the owner.
 * Localized text format: { fa: 'متن فارسی', en: 'English text' }.
 * Add only confirmed facts. Keep private details out of this public file.
 */
  const data = {
  name: { fa: 'سعید طاهری', en: 'Saeed Taheri' },
  title: { fa: '73841814', en: '73841814' },
  summary: {
    fa: 'من سعید طاهری هستم و به‌صورت مستقل فعالیت می‌کنم. اینجا می‌توانید پروژه‌های اخیر و راه‌های ارتباط با من را پیدا کنید.',
    en: 'I’m Saeed Taheri, and I work independently. Here you’ll find my recent projects and ways to get in touch.'
  },
  projects: [
    { name: { fa: 'GeminiRedeem', en: 'GeminiRedeem' }, url: 'https://t.me/GeminiRedeemBot' },
    { name: { fa: 'NumberFlare', en: 'NumberFlare' }, url: 'https://t.me/NumberFlareBot' }
  ],
  contacts: [
    { label: { fa: 'ایمیل', en: 'Email' }, display: 'info@saeedt.ir', url: 'mailto:info@saeedt.ir' },
    { label: { fa: 'گیت‌هاب', en: 'GitHub' }, display: 'github.com/saeedt20', url: 'https://github.com/saeedt20' },
    { label: { fa: 'تلگرام', en: 'Telegram' }, display: '@Saeeddot', url: 'https://t.me/Saeeddot' }
  ]
};

  const copy = {
    fa: {
      skip: 'رفتن به محتوا', site: 'وب‌سایت شخصی', navigation: 'بخش‌های صفحه',
      profile: 'درباره من', projects: 'پروژه‌ها', contact: 'ارتباط', document: 'پروفایل شخصی',
      sidebarNote: 'پروژه‌های اخیر و راه‌های ارتباط با من، در یک نگاه.', language: 'زبان',
      personalProfile: 'پروفایل شخصی', print: 'چاپ / ذخیره PDF', introduction: 'درباره من',
      viewProjects: 'مرور پروژه‌ها', projectsCaption: 'پروژه‌های اخیر من',
      projectLabel: 'پروژهٔ اخیر', projectLink: 'مشاهده در تلگرام',
      contactCaption: 'راه‌های ارتباط با من', backToTop: 'بازگشت به بالا'
    },
    en: {
      skip: 'Skip to content', site: 'Personal website', navigation: 'Page sections',
      profile: 'About', projects: 'Projects', contact: 'Contact', document: 'Personal profile',
      sidebarNote: 'Recent projects and ways to get in touch, at a glance.', language: 'Language',
      personalProfile: 'Personal profile', print: 'Print / save PDF', introduction: 'About me',
      viewProjects: 'Explore projects', projectsCaption: 'My recent work',
      projectLabel: 'Recent project', projectLink: 'Open in Telegram',
      contactCaption: 'Where to find me', backToTop: 'Back to top'
    }
  };
  let language = 'fa';
  try { if (localStorage.getItem('resume-language') === 'en') language = 'en'; } catch (_) {}
  const translated = value => typeof value === 'string' ? value : (value?.[language] || '');
  const node = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };
  function safeUrl(value) {
    try {
      const url = new URL(value);
      return ['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol) ? url.href : null;
    } catch (_) { return null; }
  }
  function link(value, className) {
    const url = safeUrl(value);
    if (!url) return null;
    const element = node('a', className);
    element.href = url;
    if (url.startsWith('http')) { element.target = '_blank'; element.rel = 'noopener noreferrer'; }
    return element;
  }
  function render() {
    const strings = copy[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = strings[el.dataset.i18n]);
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', strings[el.dataset.i18nAria]));
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === language)));
    ['sidebar-name', 'profile-name', 'footer-name'].forEach(id => document.getElementById(id).textContent = translated(data.name));
    const logoPath = language === 'fa' ? 'assets/favicon.svg' : 'assets/favicon-en.svg';
    document.getElementById('site-logo').src = logoPath;
    document.getElementById('site-favicon').href = logoPath;
    document.getElementById('professional-title').textContent = translated(data.title);
    document.getElementById('summary').textContent = translated(data.summary);
    document.title = `${translated(data.name)} — ${strings.personalProfile} | 73841814`;
    document.querySelector('meta[name="description"]').content = translated(data.summary);
    const projects = document.getElementById('project-list');
    projects.replaceChildren();
    data.projects.forEach((project, index) => {
      const article = node('article', 'project-entry');
      const top = node('div', 'project-top');
      const identity = node('div', 'project-identity');
      const number = node('span', 'project-number', String(index + 1).padStart(2, '0'));
      number.setAttribute('aria-hidden', 'true');
      const heading = node('div');
      heading.append(node('h3', 'project-title', translated(project.name)), node('p', 'project-role', strings.projectLabel));
      identity.append(number, heading);
      top.append(identity);
      const projectLink = link(project.url, 'text-link project-link');
      if (projectLink) {
        const arrow = node('span', 'external-arrow', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        projectLink.append(node('span', '', strings.projectLink), arrow);
        projectLink.setAttribute('aria-label', strings.projectLink + ': ' + translated(project.name));
        top.append(projectLink);
      }
      article.append(top);
      projects.append(article);
    });
    const contacts = document.getElementById('contact-list');
    contacts.replaceChildren();
    data.contacts.forEach(contact => {
      const element = link(contact.url, 'contact-link');
      if (!element) return;
      element.append(node('span', '', translated(contact.label)), node('bdi', '', contact.display));
      contacts.append(element);
    });
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    language = button.dataset.lang;
    try { localStorage.setItem('resume-language', language); } catch (_) {}
    render();
    updateNavigation();
  }));
  document.getElementById('print-button').addEventListener('click', async () => {
    if (document.fonts) await document.fonts.ready;
    window.print();
  });
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  function updateNavigation() {
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = section.id;
    }
    navLinks.forEach(navLink => {
      const active = navLink.hash === '#' + current;
      navLink.classList.toggle('active', active);
      if (active) navLink.setAttribute('aria-current', 'location');
      else navLink.removeAttribute('aria-current');
    });
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  render();
  updateNavigation();
})();
