(() => {
  "use strict";

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const META = {
    title: {
      fr: "Cédophe ZOHOUN — Ingénieur Réseaux & Cybersécurité",
      en: "Cédophe ZOHOUN — Network & Cybersecurity Engineer",
    },
    description: {
      fr: "Ingénieur Réseaux & Cybersécurité basé à Accra, Ghana. Pare-feux enterprise, infrastructures cloud et formation d'ingénieurs réseau en Afrique de l'Ouest.",
      en: "Network & Cybersecurity Engineer based in Accra, Ghana. Enterprise firewalls, cloud infrastructure and training the next generation of network engineers in West Africa.",
    },
  };

  const MESSAGES = {
    success: {
      fr: "Merci ! Votre message a bien été pris en compte (démo).",
      en: "Thanks! Your message has been received (demo).",
    },
    error: {
      fr: "Merci de remplir tous les champs correctement.",
      en: "Please fill in all fields correctly.",
    },
  };

  const COPY_OK = { fr: "Copié !", en: "Copied!" };

  /* ---------- Theme ---------- */
  const themeToggle = document.getElementById("theme-toggle");

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {}
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(root.dataset.theme === "light" ? "dark" : "light");
    });
  }

  /* ---------- Language ---------- */
  const langButtons = Array.from(document.querySelectorAll("[data-set-lang]"));

  const applyLang = (lang) => {
    const l = lang === "en" ? "en" : "fr";
    root.lang = l;

    document.querySelectorAll("[data-en], [data-fr]").forEach((element) => {
      const value = l === "en" ? element.dataset.en : element.dataset.fr;
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-en-aria], [data-fr-aria]").forEach((element) => {
      const value = l === "en" ? element.dataset.enAria : element.dataset.frAria;
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-en-ph], [data-fr-ph]").forEach((element) => {
      const value = l === "en" ? element.dataset.enPh : element.dataset.frPh;
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    document.title = META.title[l];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", META.description[l]);

    try {
      localStorage.setItem("lang", l);
    } catch (error) {}

    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLang === l));
    });

    return l;
  };

  let currentLang = "fr";
  try {
    currentLang = localStorage.getItem("lang") === "en" ? "en" : "fr";
  } catch (error) {}
  currentLang = applyLang(currentLang);

  langButtons.forEach((button) => {
    button.addEventListener("click", () => applyLang(button.dataset.setLang));
  });

  /* ---------- Header state + back to top ---------- */
  const header = document.getElementById("site-header");
  const backTop = document.getElementById("back-top");

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 12);
    if (backTop) backTop.classList.toggle("show", y > 300);
  };

  let scrollRaf = 0;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = 0;
        onScroll();
      });
    },
    { passive: true }
  );
  onScroll();

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  const closeMenu = () => {
    if (!burger) return;
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  if (burger && navMenu) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
        closeMenu();
        burger.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* ---------- Scroll spy ---------- */
  const spyLinks = new Map(
    Array.from(document.querySelectorAll("[data-spy-link]")).map((link) => [link.hash, link])
  );

  if ("IntersectionObserver" in window && spyLinks.size) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = spyLinks.get(`#${entry.target.id}`);
          if (!link) return;
          spyLinks.forEach((item) => {
            item.classList.toggle("active", item === link);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    document.querySelectorAll("main section[id]").forEach((section) => spy.observe(section));
  }

  /* ---------- Stat counters ---------- */
  const counters = Array.from(document.querySelectorAll("[data-count]"));

  const runCounter = (element) => {
    const target = parseInt(element.dataset.count, 10) || 0;
    const suffix = element.dataset.suffix || "";
    if (reducedMotion) {
      element.textContent = `${target}${suffix}`;
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  if (counters.length && "IntersectionObserver" in window && !reducedMotion) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));
  }

  /* ---------- Copy to clipboard ---------- */
  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        fallbackCopy(text);
      }
      const previous = button.getAttribute("aria-label");
      button.setAttribute("aria-label", COPY_OK[currentLang]);
      button.style.color = "var(--text)";
      setTimeout(() => {
        button.setAttribute("aria-label", previous || "");
        button.style.color = "";
      }, 1400);
    });
  });

  /* ---------- Contact form (cosmetic) ---------- */
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (form && formStatus) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const valid = name && /.+@.+\..+/.test(email) && message.length >= 10;
      formStatus.textContent = valid ? MESSAGES.success[currentLang] : MESSAGES.error[currentLang];
      if (valid) form.reset();
    });
  }
})();
