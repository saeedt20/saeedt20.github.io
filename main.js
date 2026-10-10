(() => {
  "use strict";

  // Content is based on the owner's website, GitHub profile README, and TallyDesklet README.
  const copy = {
    fa: {
      name: "سعید طاهری",
      firstName: "سعید",
      lastName: "طاهری",
      title: "سعید طاهری — وب‌سایت شخصی",
      description:
        "سعید طاهری؛ پیشینه‌ای در فناوری اطلاعات و امنیت، مسیری در توسعهٔ وب، و پروژه‌های اخیر.",
      skip: "رفتن به محتوا",
      personalWebsite: "وب‌سایت شخصی",
      home: "سعید طاهری — آغاز صفحه",
      navigation: "بخش‌های صفحه",
      language: "زبان",
      projects: "پروژه‌ها",
      about: "درباره من",
      contact: "ارتباط",
      independent: "فعالیت مستقل",
      heroNote: "پایه‌ای در فناوری اطلاعات؛ مسیری در توسعهٔ وب.",
      explore: "مرور پروژه‌ها",
      selfEmployed: "خویش‌فرما",
      bilingual: "فارسی و انگلیسی",
      scroll: "ادامه صفحه",
      projectsNote: "نگاهی به پروژه‌های اخیر",
      selectedProjects: "پروژه‌های منتخب.",
      recentProject: "پروژهٔ تلگرامی",
      viewProject: "مشاهده پروژه",
      geminiLink: "مشاهده GeminiRedeem در تلگرام",
      numberLink: "مشاهده NumberFlare در تلگرام",
      tallyLink: "مشاهده TallyDesklet در گیت‌هاب",
      tallyAlt: "پیش‌نمایش رابط TallyDesklet با داده‌های نمونه",
      tallyPreview: "پیش‌نمایش رابط با داده‌های نمونه",
      desktopWidget: "ابزار دسکتاپ لینوکس",
      tallyDescription:
        "ویجت دسکتاپ برای نمایش مصرف پردازنده، حافظه، دیسک، سرعت شبکه و مصرف روزانه و هفتگی اینترنت. ساخته‌شده برای Xfce روی X11؛ داده‌ها روی دستگاه شما می‌مانند.",
      viewSource: "کد و جزئیات",
      download: "دانلود",
      aboutHeading: "از زیرساخت تا رابط کاربری.",
      summary:
        "من سعید طاهری هستم؛ با پیشینه‌ای در فناوری اطلاعات، شبکه، مدیریت سیستم و امنیت، مسیرم را در توسعهٔ وب ادامه می‌دهم. برای من، تجربهٔ کاربری خوب با امنیت و عملکرد مناسب همراه است.",
      journey:
        "بیش از ۱۵ سال است که فناوری را با کنجکاوی دنبال می‌کنم؛ از کار با سخت‌افزار و لینوکس تا خودکارسازی و ساخت شبکه. اکنون این تجربه را با طراحی رابط و توسعهٔ وب پیوند می‌دهم.",
      degree: "کارشناسی نرم‌افزار کامپیوتر",
      values: "یادگیری مستمر، حریم خصوصی و متن‌باز",
      webDevelopment: "توسعهٔ وب",
      systemsNetworks: "سیستم و شبکه",
      security: "امنیت",
      securityDetails: "امن‌سازی سیستم · رمزنگاری · حریم خصوصی",
      print: "چاپ / ذخیره PDF",
      contactNote: "راه‌های ارتباط با من",
      sayHello: "سلامی بگویید.",
      contactCopy:
        "برای گفتگو دربارهٔ فناوری یا همکاری در یک پروژه، با من در ارتباط باشید.",
      backTop: "بازگشت به بالا",
      skipIntro: "رد کردن معرفی",
      replay: "نمایش دوباره معرفی",
      introLabel: "معرفی سعید طاهری",
    },
    en: {
      name: "Saeed Taheri",
      firstName: "Saeed",
      lastName: "Taheri",
      title: "Saeed Taheri — Personal website",
      description:
        "Saeed Taheri. IT and security foundations, a focus on web development, and a selection of recent projects.",
      skip: "Skip to content",
      personalWebsite: "Personal website",
      home: "Saeed Taheri — Back to top",
      navigation: "Page sections",
      language: "Language",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      independent: "Working independently",
      heroNote: "IT foundations. A focus on the web.",
      explore: "Explore my projects",
      selfEmployed: "Self-employed",
      bilingual: "Persian & English",
      scroll: "Scroll to explore",
      projectsNote: "A selection of recent work",
      selectedProjects: "Selected projects.",
      recentProject: "Telegram project",
      viewProject: "View project",
      geminiLink: "Open GeminiRedeem in Telegram",
      numberLink: "Open NumberFlare in Telegram",
      tallyLink: "View TallyDesklet on GitHub",
      tallyAlt:
        "TallyDesklet interface preview showing illustrative example data",
      tallyPreview: "Interface preview · example data",
      desktopWidget: "Linux desktop utility",
      tallyDescription:
        "A desktop widget for CPU, memory, disk, network speed, and daily and weekly data usage. Built for Xfce on X11. Your measurements stay on your computer.",
      viewSource: "Source & details",
      download: "Download",
      aboutHeading: "From systems to interfaces.",
      summary:
        "I’m Saeed Taheri. With a background in IT, networking, system administration, and security, I’m developing my practice in web development. I care about interfaces that feel intuitive, with security and performance built in.",
      journey:
        "I’ve spent more than 15 years exploring technology, from hardware and Linux to automation and networks. Today, I bring that experience into interface design and web development.",
      degree: "Bachelor’s degree in Computer Software",
      values: "Learning, privacy & open-source values",
      webDevelopment: "Web development",
      systemsNetworks: "Systems & networks",
      security: "Security",
      securityDetails: "System hardening · Encryption · Privacy",
      print: "Print / save PDF",
      contactNote: "A direct line",
      sayHello: "Let’s talk.",
      contactCopy:
        "Have a project in mind, or want to talk technology? Get in touch.",
      backTop: "Back to top",
      skipIntro: "Skip intro",
      replay: "Replay intro",
      introLabel: "Introducing Saeed Taheri",
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
