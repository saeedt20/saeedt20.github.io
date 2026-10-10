(() => {
  "use strict";

  // Content is based on the owner’s background and project descriptions, plus the TallyDesklet, Roozlet and CouchZap repositories.
  const copy = {
    fa: {
      name: "سعید طاهری",
      firstName: "سعید",
      lastName: "طاهری",
      title: "سعید طاهری — وب‌سایت شخصی",
      description:
        "سعید طاهری؛ فناوری اطلاعات، حدود ۸ سال تجربهٔ لینوکس، هوش مصنوعی و اتوماسیون، پایتون و توسعهٔ وب. آمادهٔ همکاری فریلنس و متن‌باز.",
      skip: "رفتن به محتوا",
      personalWebsite: "وب‌سایت شخصی",
      home: "سعید طاهری — آغاز صفحه",
      navigation: "بخش‌های صفحه",
      language: "زبان",
      projects: "پروژه‌ها",
      about: "درباره من",
      contact: "ارتباط",
      independent: "فعالیت مستقل",
      heroNote: "فناوری اطلاعات و لینوکس؛ هوش مصنوعی، اتوماسیون و وب.",
      explore: "مرور پروژه‌ها",
      selfEmployed: "آمادهٔ همکاری فریلنس",
      bilingual: "فارسی و انگلیسی",
      scroll: "ادامه صفحه",
      projectsNote: "نگاهی به پروژه‌های اخیر",
      selectedProjects: "پروژه‌های منتخب.",
      recentProject: "پروژهٔ تلگرامی",
      viewProject: "مشاهده پروژه",
      geminiLink: "مشاهده GeminiShop در تلگرام",
      numberLink: "مشاهده NumberFlare در تلگرام",
      tallyLink: "مشاهده TallyDesklet در گیت‌هاب",
      tallyAlt: "پیش‌نمایش رابط TallyDesklet با داده‌های نمونه",
      tallyPreview: "پیش‌نمایش رابط با داده‌های نمونه",
      desktopWidget: "ابزار دسکتاپ لینوکس",
      tallyDescription:
        "ویجت دسکتاپ برای نمایش مصرف پردازنده، حافظه، دیسک، سرعت شبکه و مصرف روزانه و هفتگی اینترنت. ساخته‌شده برای Xfce روی X11؛ داده‌ها روی دستگاه شما می‌مانند.",
      roozletLink: "مشاهده Roozlet در گیت‌هاب",
      roozletAlt: "کارت واقعی تقویم فارسی Roozlet با پوستهٔ تیره",
      roozletPreview: "رابط واقعی برنامه · Linux Mint Xfce",
      roozletCategory: "تقویم فارسی برای دسکتاپ لینوکس",
      roozletDescription:
        "تقویم فارسی آفلاین برای لینوکس، با ویجت کوچک، نمایش ماهانه، رابط فارسی و انگلیسی و انتخاب مستقل ارقام. مناسبت‌ها و تعطیلات رسمی سال ۱۴۰۵ با تقویم نهایی دانشگاه تهران بررسی شده‌اند.",
      couchzapLink: "مشاهده CouchZap در گیت‌هاب",
      couchzapCategory: "پخش‌کنندهٔ IPTV برای اندروید",
      couchzapDescription:
        "پخش‌کنندهٔ سبک IPTV برای تلویزیون و گوشی اندرویدی؛ ساخته‌شده با Kotlin و Media3، با ورود فهرست پخش محلی، کنترل با ریموت و رابط لمسی. از فهرست پخش خودتان استفاده کنید؛ کانال یا اشتراکی همراه برنامه نیست.",
      viewSource: "کد و جزئیات",
      download: "دانلود",
      aboutHeading: "سیستم‌ها، هوش مصنوعی و وب.",
      profileAlt: "تصویر پروفایل سعید طاهری",
      profileCaption: "پروفایل گیت‌هاب",
      summary:
        "من سعید طاهری هستم؛ فعال حوزهٔ فناوری اطلاعات و علاقه‌مند به هوش مصنوعی و اتوماسیون. پیشینه‌ام در شبکه، مدیریت سیستم و امنیت است و امروز با پایتون، عامل‌های هوش مصنوعی و پروژه‌های وب کار می‌کنم.",
      journey:
        "بیش از ۱۵ سال است که فناوری را دنبال می‌کنم و حدود ۸ سال تجربهٔ کار با لینوکس دارم. در حال حاضر از Linux Mint 22.3 با محیط دسکتاپ Xfce استفاده می‌کنم.",
      degree: "کارشناسی نرم‌افزار کامپیوتر",
      values: "یادگیری مستمر، حریم خصوصی و متن‌باز",
      webDevelopment: "برنامه‌نویسی و وب",
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
      title: "Saeed Taheri — Personal website",
      description:
        "Saeed Taheri: IT, around eight years with Linux, AI and automation, Python, and web development. Available for freelance and open-source collaboration.",
      skip: "Skip to content",
      personalWebsite: "Personal website",
      home: "Saeed Taheri — Back to top",
      navigation: "Page sections",
      language: "Language",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      independent: "Working independently",
      heroNote: "IT & Linux. AI, automation & the web.",
      explore: "Explore my projects",
      selfEmployed: "Available for freelance work",
      bilingual: "Persian & English",
      scroll: "Scroll to explore",
      projectsNote: "A selection of recent work",
      selectedProjects: "Selected projects.",
      recentProject: "Telegram project",
      viewProject: "View project",
      geminiLink: "Open GeminiShop in Telegram",
      numberLink: "Open NumberFlare in Telegram",
      tallyLink: "View TallyDesklet on GitHub",
      tallyAlt:
        "TallyDesklet interface preview showing illustrative example data",
      tallyPreview: "Interface preview · example data",
      desktopWidget: "Linux desktop utility",
      tallyDescription:
        "A desktop widget for CPU, memory, disk, network speed, and daily and weekly data usage. Built for Xfce on X11. Your measurements stay on your computer.",
      roozletLink: "View Roozlet on GitHub",
      roozletAlt: "Actual Roozlet Persian calendar card in the dark theme",
      roozletPreview: "Actual app · Linux Mint Xfce",
      roozletCategory: "Persian calendar for the Linux desktop",
      roozletDescription:
        "An offline Persian calendar with a compact widget, full month view, bilingual controls and independent digits. Iranian occasions and holidays for 1405 are verified against the final University of Tehran calendar.",
      couchzapLink: "View CouchZap on GitHub",
      couchzapCategory: "IPTV player for Android",
      couchzapDescription:
        "A lightweight IPTV player for Android TV boxes and phones. Built with Kotlin and Media3, with local playlist import, remote navigation and touch controls. Bring your own playlist; no channels or subscriptions are bundled.",
      viewSource: "Source & details",
      download: "Download",
      aboutHeading: "Systems, AI & the web.",
      profileAlt: "Saeed Taheri’s profile picture",
      profileCaption: "GitHub profile",
      summary:
        "I’m Saeed Taheri, an IT professional and AI & automation enthusiast. My background spans networking, system administration, and security. Today, I work with Python, AI agents, and web projects.",
      journey:
        "I’ve spent more than 15 years exploring technology, including around eight years using Linux. My current desktop is Linux Mint 22.3 with Xfce.",
      degree: "Bachelor’s degree in Computer Software",
      values: "Learning, privacy & open-source values",
      webDevelopment: "Programming & web",
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
