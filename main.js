(() => {
  "use strict";

  // Project content is checked against public repositories and releases; see docs/CONTENT_AND_ASSETS.md.
  const copy = {
    fa: {
      name: "سعید طاهری",
      firstName: "سعید",
      lastName: "طاهری",
      title: "سعید طاهری — ابزارهای لینوکس و اتوماسیون",
      description:
        "پروژه‌های سعید طاهری: Roozlet، تقویم فارسی؛ TallyDesklet، پایش لینوکس؛ CouchZap، پخش‌کنندهٔ اندروید؛ و IkevWrt، مدیریت VPN در OpenWrt. ابزارهای متن‌باز و اتوماسیون.",
      skip: "رفتن به محتوا",
      personalWebsite: "وب‌سایت شخصی",
      home: "سعید طاهری — آغاز صفحه",
      navigation: "بخش‌های صفحه",
      language: "زبان",
      projects: "پروژه‌ها",
      about: "درباره من",
      contact: "ارتباط",
      independent: "فعالیت مستقل",
      heroNote: "ابزارهای کاربردی برای لینوکس و اندروید می‌سازم؛ با پایتون و هوش مصنوعی، کارهای روزمره را خودکار می‌کنم.",
      explore: "مرور پروژه‌ها",
      getInTouch: "برای همکاری",
      selfEmployed: "آمادهٔ همکاری فریلنس",
      bilingual: "فارسی و انگلیسی",
      scroll: "ادامه صفحه",
      projectsNote: "ابزارهای متن‌باز و پروژه‌های تلگرامی",
      selectedProjects: "پروژه‌های منتخب.",
      recentProject: "پروژهٔ تلگرامی",
      viewProject: "مشاهده پروژه",
      geminiLink: "مشاهده GeminiShop در تلگرام",
      numberLink: "مشاهده NumberFlare در تلگرام",
      tallyLink: "مشاهده TallyDesklet در گیت‌هاب",
      tallyAlt: "پیش‌نمایش رابط TallyDesklet با داده‌های نمونه",
      tallyPreview: "رابط GTK · داده‌های نمایشی",
      desktopWidget: "ابزار دسکتاپ لینوکس",
      tallyDescription:
        "مصرف پردازنده، رم، دیسک و سرعت شبکه را یک‌جا ببینید؛ همراه با مصرف روزانه و هفتگی اینترنت. شش تم قابل انتخاب، رابط فارسی و انگلیسی و حالت جمع‌وجور برای Xfce روی X11. داده‌ها روی دستگاه شما می‌مانند.",
      roozletLink: "مشاهده Roozlet در گیت‌هاب",
      roozletAlt: "ویجت Roozlet با منظرهٔ پاییزی و تاریخ شمسی در مرکز",
      roozletPreview: "رابط GTK · نمونهٔ پاییز",
      roozletCategory: "تقویم فارسی برای دسکتاپ لینوکس",
      roozletDescription:
        "تقویم فارسی آفلاین با چهار فصل، تاریخ شمسی در مرکز ویجت و نمای ماهانه. جستجوی تاریخ و مناسبت، یادداشت شخصی و یادآور با اعلان اختیاری؛ رابط فارسی و انگلیسی. پوشش تأییدشدهٔ مناسبت‌ها و تعطیلات رسمی برای سال ۱۴۰۵ است.",
      couchzapLink: "مشاهده CouchZap در گیت‌هاب",
      couchzapCategory: "پخش‌کنندهٔ IPTV برای اندروید",
      couchzapDescription:
        "پخش‌کنندهٔ متن‌باز IPTV برای تلویزیون و گوشی اندرویدی، با شش زبان، چیدمان راست‌به‌چپ فارسی و عربی، کنترل با ریموت و چرخش رابط موبایل. پلی‌لیست خودتان را وارد کنید یا منابع عمومی اختیاری را انتخاب کنید؛ بدون نیاز به حساب و بدون اشتراک همراه برنامه.",
      downloadApk: "دانلود APK",
      couchzapDownload: "دانلود CouchZap 3.1.1 برای اندروید",
      ikevwrtLink: "مشاهده IkevWrt در گیت‌هاب",
      ikevwrtCategory: "مدیریت IKEv2 برای OpenWrt",
      ikevwrtDescription:
        "ادامهٔ یک مدیر VPN مبتنی بر IKEv2 برای OpenWrt، با رابط LuCI و مسیریابی بر اساس دامنه یا دستگاه. پشتیبانی فارسی و راست‌به‌چپ از پروژهٔ بالادستی به ارث رسیده است. نسخهٔ مستقل IkevWrt هنوز منتشر نشده است.",
      maintainedFork: "فورک نگهداری‌شده",
      upstreamProject: "پروژهٔ بالادستی",
      viewSource: "کد و جزئیات",
      buildSource: "کد و راهنمای ساخت",
      download: "دانلود بستهٔ .deb",
      aboutHeading: "از سیستم‌ها تا نرم‌افزار کاربردی.",
      profileAlt: "تصویر پروفایل سعید طاهری",
      profileCaption: "پروفایل گیت‌هاب",
      summary:
        "من سعید طاهری هستم؛ پیشینه‌ام در فناوری اطلاعات، شبکه و مدیریت سیستم است. اکنون ابزارهای دسکتاپ لینوکس را با Python و GTK و اپ اندروید را با Kotlin می‌سازم و از هوش مصنوعی برای توسعه و اتوماسیون کمک می‌گیرم. Roozlet، TallyDesklet و CouchZap نمونه‌های این مسیر هستند.",
      journey:
        "بیش از ۱۵ سال است که فناوری را دنبال می‌کنم و حدود ۸ سال تجربهٔ کار با لینوکس دارم. در حال حاضر از Linux Mint 22.3 با محیط دسکتاپ Xfce استفاده می‌کنم.",
      degree: "کارشناسی نرم‌افزار کامپیوتر",
      values: "یادگیری مستمر، حریم خصوصی و متن‌باز",
      webDevelopment: "برنامه‌نویسی و وب",
      nativeApps: "اپ‌های لینوکس و اندروید",
      systemsNetworks: "سیستم و شبکه",
      security: "امنیت",
      securityDetails: "بررسی خطاها و لاگ‌ها · امنیت سیستم · حریم خصوصی",
      print: "چاپ / ذخیره PDF",
      contactNote: "راه‌های ارتباط با من",
      enamadLink: "مشاهده اعتبار نماد اعتماد الکترونیکی",
      enamadAlt: "نماد اعتماد الکترونیکی",
      verifyEnamad: "استعلام نماد",
      sayHello: "سلامی بگویید.",
      contactCopy:
        "برای پروژه‌های فریلنس در حوزهٔ فناوری اطلاعات، لینوکس، اتوماسیون و وب، یا همکاری در پروژه‌های شخصی و متن‌باز، با من در ارتباط باشید.",
      backTop: "بازگشت به بالا",
      skipIntro: "رد کردن معرفی",
      replay: "نمایش دوباره معرفی",
      introLabel: "معرفی سعید طاهری",
      geminiCategory: "بازار اشتراک و کلید دیجیتال",
      geminiDescription:
        "فروشندگان معتبر اشتراک و کلیدهای دیجیتال را در یک جا گرد هم می‌آورم تا کاربران با اطمینان بیشتری محصول مورد نیازشان را انتخاب و خریداری کنند.",
      numberCategory: "فروشگاه شمارهٔ مجازی",
      numberDescription:
        "فروش شمارهٔ مجازی به مشتریان، با امکان پرداخت از طریق رمزارز یا کارت اعتباری.",
      workflow:
        "برای بررسی خطاها و مشکلات امنیتی از هوش مصنوعی کمک می‌گیرم و برای پیدا کردن و رفع مشکل، لاگ‌های سیستم را نیز بررسی می‌کنم. اتوماسیون‌های من شامل عامل‌های تلگرامی، پاسخ به ایمیل، کارهای زمان‌بندی‌شدهٔ گیت‌هاب و پشتیبانی وب‌سایت هستند.",
      aiAutomation: "هوش مصنوعی و اتوماسیون",
      linuxExperience: "حدود ۸ سال تجربهٔ لینوکس",
      currentDesktop: "Linux Mint 22.3 · Xfce",
    },
    en: {
      name: "Saeed Taheri",
      firstName: "Saeed",
      lastName: "Taheri",
      title: "Saeed Taheri — Linux tools & automation",
      description:
        "Explore Saeed Taheri’s public projects: Roozlet, a Persian calendar; TallyDesklet, a Linux monitor; CouchZap, an Android player; and IkevWrt for OpenWrt VPN management.",
      skip: "Skip to content",
      personalWebsite: "Personal website",
      home: "Saeed Taheri — Back to top",
      navigation: "Page sections",
      language: "Language",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      independent: "Working independently",
      heroNote: "I build useful tools for Linux and Android, and automate everyday work with Python and AI.",
      explore: "Explore my projects",
      getInTouch: "Get in touch",
      selfEmployed: "Available for freelance work",
      bilingual: "Persian & English",
      scroll: "Scroll to explore",
      projectsNote: "Open-source tools & Telegram projects",
      selectedProjects: "Selected projects.",
      recentProject: "Telegram project",
      viewProject: "View project",
      geminiLink: "Open GeminiShop in Telegram",
      numberLink: "Open NumberFlare in Telegram",
      tallyLink: "View TallyDesklet on GitHub",
      tallyAlt:
        "TallyDesklet interface preview showing illustrative example data",
      tallyPreview: "Native GTK · example readings",
      desktopWidget: "Linux desktop utility",
      tallyDescription:
        "See CPU, memory, disk and network activity at a glance, plus daily and weekly data usage. Six themes, Persian and English interfaces, and a compact mode for Xfce on X11. Your measurements stay on your computer.",
      roozletLink: "View Roozlet on GitHub",
      roozletAlt: "Roozlet widget with autumn artwork and the Shamsi date in the center",
      roozletPreview: "Native GTK · autumn preview",
      roozletCategory: "Persian calendar for the Linux desktop",
      roozletDescription:
        "An offline Persian calendar with four seasons, a centered Shamsi date and a full month view. Search dates and occasions, keep personal notes and set optional reminders, in Persian or English. Verified Iranian occasion and public-holiday coverage is for 1405.",
      couchzapLink: "View CouchZap on GitHub",
      couchzapCategory: "IPTV player for Android",
      couchzapDescription:
        "Open-source IPTV for Android TV and phones, with six languages, Persian/Arabic RTL, remote controls and phone rotation. Import your own playlist or choose optional public sources. No account needed; no subscription bundled.",
      downloadApk: "Download APK",
      couchzapDownload: "Download CouchZap 3.1.1 for Android",
      ikevwrtLink: "View IkevWrt on GitHub",
      ikevwrtCategory: "IKEv2 management for OpenWrt",
      ikevwrtDescription:
        "A maintained fork of the OpenWrt IKEv2 manager, with LuCI and routing by domain or device. Persian RTL support comes from upstream. An independent IkevWrt release is still in development.",
      maintainedFork: "Maintained fork",
      upstreamProject: "Upstream project",
      viewSource: "Source & details",
      buildSource: "Source & build guide",
      download: "Download .deb",
      aboutHeading: "From systems to useful software.",
      profileAlt: "Saeed Taheri’s profile picture",
      profileCaption: "GitHub profile",
      summary:
        "I’m Saeed Taheri, with a background in IT, networking and system administration. Today I build Linux desktop tools with Python and GTK, develop Android apps with Kotlin, and use AI to help with development and automation. Roozlet, TallyDesklet and CouchZap are part of that work.",
      journey:
        "I’ve spent more than 15 years exploring technology, including around eight years using Linux. My current desktop is Linux Mint 22.3 with Xfce.",
      degree: "Bachelor’s degree in Computer Software",
      values: "Learning, privacy & open-source values",
      webDevelopment: "Programming & web",
      nativeApps: "Linux & Android apps",
      systemsNetworks: "Systems & networks",
      security: "Security",
      securityDetails:
        "Troubleshooting & log analysis · System security · Privacy",
      print: "Print / save PDF",
      contactNote: "A direct line",
      enamadLink: "Verify the Enamad electronic trust seal",
      enamadAlt: "Enamad electronic trust seal",
      verifyEnamad: "Verify certificate",
      sayHello: "Let’s talk.",
      contactCopy:
        "Get in touch for freelance projects in IT, Linux, automation, or web development, or to collaborate on personal and open-source projects.",
      backTop: "Back to top",
      skipIntro: "Skip intro",
      replay: "Replay intro",
      introLabel: "Introducing Saeed Taheri",
      geminiCategory: "Subscriptions & digital keys",
      geminiDescription:
        "A curated marketplace bringing trusted subscription and digital-key sellers together, helping customers choose and buy with more confidence.",
      numberCategory: "Virtual-number storefront",
      numberDescription:
        "Virtual numbers for customers, with cryptocurrency and credit-card payment options.",
      workflow:
        "I combine AI-assisted troubleshooting with system log analysis to investigate errors and security issues. My automations cover Telegram agents, email replies, scheduled GitHub tasks, and website support.",
      aiAutomation: "AI & automation",
      linuxExperience: "Around 8 years with Linux",
      currentDesktop: "Linux Mint 22.3 · Xfce",
    },
  };

  const intro = document.getElementById("intro");
  const skipIntro = document.getElementById("skip-intro");
  const replayIntro = document.getElementById("replay-intro");
  const pageRegions = [
    ...document.querySelectorAll(".site-header, main, .site-footer"),
  ];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let language = "fa";
  let introTimer;
  let exitTimer;
  let previousFocus;
  let introActive = false;
  try {
    if (localStorage.getItem("resume-language") === "en") language = "en";
  } catch (_) {}

  function render() {
    const text = copy[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.title = text.title;
    document.querySelector('meta[name="description"]').content =
      text.description;
    document.querySelector('meta[property="og:title"]').content = text.title;
    document.querySelector('meta[property="og:description"]').content =
      text.description;
    document.getElementById("site-favicon").href =
      language === "fa" ? "assets/favicon.svg" : "assets/favicon-en.svg";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = text[element.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", text[element.dataset.i18nAria]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.alt = text[element.dataset.i18nAlt];
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.lang === language),
      );
    });
    document.getElementById("name-first").textContent = text.firstName;
    document.getElementById("name-last").textContent = text.lastName;
    document.getElementById("intro-first").textContent = text.firstName;
    document.getElementById("intro-last").textContent = text.lastName;
    intro.setAttribute("aria-label", text.introLabel);
  }

  function releaseIntro(animatePage) {
    clearTimeout(introTimer);
    clearTimeout(exitTimer);
    intro.hidden = true;
    intro.classList.remove("is-exiting");
    document.body.classList.remove("intro-running");
    pageRegions.forEach((region) => {
      region.inert = false;
    });
    introActive = false;
    if (animatePage && !reducedMotion.matches)
      document.body.classList.add("page-enter");
    if (intro.contains(document.activeElement)) {
      if (
        previousFocus &&
        previousFocus !== document.body &&
        previousFocus.isConnected
      ) {
        previousFocus.focus({ preventScroll: true });
      } else {
        document.getElementById("main").focus({ preventScroll: true });
      }
    }
    try {
      sessionStorage.setItem("saeed-intro-seen", "true");
    } catch (_) {}
  }

  function finishIntro(immediate = false) {
    if (!introActive) return;
    clearTimeout(introTimer);
    if (immediate || reducedMotion.matches) {
      releaseIntro(false);
      return;
    }
    intro.classList.add("is-exiting");
    document.body.classList.remove("intro-running");
    document.body.classList.add("page-enter");
    exitTimer = setTimeout(() => releaseIntro(false), 860);
  }

  function playIntro() {
    if (reducedMotion.matches || introActive) return;
    previousFocus = document.activeElement;
    introActive = true;
    document.body.classList.remove("page-enter");
    intro.classList.remove("is-exiting");
    intro.hidden = false;
    intro.setAttribute("role", "dialog");
    intro.setAttribute("aria-modal", "true");
    pageRegions.forEach((region) => {
      region.inert = true;
    });
    document.body.classList.add("intro-running");
    skipIntro.focus({ preventScroll: true });
    introTimer = setTimeout(() => finishIntro(), 1500);
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.lang;
      try {
        localStorage.setItem("resume-language", language);
      } catch (_) {}
      document.body.classList.remove("page-enter");
      render();
    });
  });
  skipIntro.addEventListener("click", () => finishIntro(true));
  intro.addEventListener("keydown", (event) => {
    if (event.key === "Escape") finishIntro(true);
    if (event.key === "Tab") {
      event.preventDefault();
      skipIntro.focus();
    }
  });
  replayIntro.addEventListener("click", playIntro);
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) finishIntro(true);
    replayIntro.hidden = reducedMotion.matches;
  });

  document
    .getElementById("print-button")
    .addEventListener("click", async () => {
      if (document.fonts) await document.fonts.ready;
      window.print();
    });
  window.addEventListener("beforeprint", () => {
    if (introActive) finishIntro(true);
  });
  window.addEventListener("pagehide", () => {
    if (introActive) finishIntro(true);
  });

  render();
  replayIntro.hidden = reducedMotion.matches;
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-ready");
    // Keep the complete page available to keyboard navigation, even before it enters view.
    document.addEventListener("focusin", (event) => {
      event.target.closest(".reveal")?.classList.add("is-visible");
    });
  }
  let seen = false;
  try {
    seen = sessionStorage.getItem("saeed-intro-seen") === "true";
  } catch (_) {}
  if (!seen && !reducedMotion.matches && !location.hash) playIntro();
})();
