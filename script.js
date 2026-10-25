(() => {
  "use strict";

  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const themeColor = document.querySelector('meta[name="theme-color"]');

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
    valid: {
      fr: "Formulaire valide — démonstration uniquement. Écrivez à cedophe@gmail.com pour envoyer un message.",
      en: "Form valid — demo only. Email cedophe@gmail.com to send a message.",
    },
    invalid: {
      fr: "Merci de renseigner votre nom, un email valide et un message de 10 caractères minimum.",
      en: "Please enter your name, a valid email and a message of at least 10 characters.",
    },
  };

  const COPY_OK = { fr: "Copié !", en: "Copied!" };

  const getLangValue = (element, prefix, fallback = "") => {
    const key = `${currentLang === "en" ? "en" : "fr"}${prefix}`;
    return element.dataset[key] || fallback;
  };

  /* ---------- Theme ---------- */
  const themeToggle = document.getElementById("theme-toggle");

  const setTheme = (theme) => {
    const next = theme === "dark" ? "dark" : "light";
    root.dataset.theme = next;
    if (themeColor) themeColor.setAttribute("content", next === "dark" ? "#0f0d20" : "#f7f7fa");
    try {
      localStorage.setItem("theme", next);
    } catch (error) {}
  };

  setTheme(root.dataset.theme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Language ---------- */
  const langButtons = Array.from(document.querySelectorAll("[data-set-lang]"));
  let currentLang = "fr";

  const applyLang = (lang) => {
    const next = lang === "en" ? "en" : "fr";
    currentLang = next;
    root.lang = next;

    document.querySelectorAll("[data-en], [data-fr]").forEach((element) => {
      const value = next === "en" ? element.dataset.en : element.dataset.fr;
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-en-aria], [data-fr-aria]").forEach((element) => {
      const value = next === "en" ? element.dataset.enAria : element.dataset.frAria;
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-en-ph], [data-fr-ph]").forEach((element) => {
      const value = next === "en" ? element.dataset.enPh : element.dataset.frPh;
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    document.title = META.title[next];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", META.description[next]);

    const statusNode = document.getElementById("form-status");
    if (statusNode && statusNode.dataset.state) {
      statusNode.textContent =
        statusNode.dataset.state === "valid" ? MESSAGES.valid[next] : MESSAGES.invalid[next];
    }

    try {
      localStorage.setItem("lang", next);
    } catch (error) {}

    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.setLang === next));
    });

    return next;
  };

  try {
    currentLang = localStorage.getItem("lang") === "en" ? "en" : "fr";
  } catch (error) {}
  applyLang(currentLang);

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLang(button.dataset.setLang);
    });
  });

  /* ---------- Header + back to top ---------- */
  const header = document.getElementById("site-header");
  const backTop = document.getElementById("back-top");
  const contactSection = document.getElementById("contact");

  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 12);
    if (backTop) backTop.classList.toggle("show", y > 500);
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

  if (backTop && contactSection && "IntersectionObserver" in window) {
    const endObserver = new IntersectionObserver(
      ([entry]) => {
        backTop.classList.toggle("at-end", entry.isIntersecting);
      },
      { threshold: 0 }
    );
    endObserver.observe(contactSection);
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
      if (window.innerWidth > 980) closeMenu();
    });
  }

  /* ---------- Signal ribbon ---------- */
  const heroVisual = document.querySelector(".hero-visual");
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (heroVisual && finePointer && !reducedMotion) {
    let ribbonFrame = 0;
    let ribbonX = 0;
    let ribbonY = 0;

    const drawRibbon = () => {
      ribbonFrame = 0;
      heroVisual.style.setProperty("--ribbon-x", ribbonX.toFixed(3));
      heroVisual.style.setProperty("--ribbon-y", ribbonY.toFixed(3));
    };

    const queueRibbon = () => {
      if (!ribbonFrame) ribbonFrame = window.requestAnimationFrame(drawRibbon);
    };

    heroVisual.addEventListener("pointermove", (event) => {
      const bounds = heroVisual.getBoundingClientRect();
      ribbonX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      ribbonY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      queueRibbon();
    });

    heroVisual.addEventListener("pointerleave", () => {
      ribbonX = 0;
      ribbonY = 0;
      queueRibbon();
    });
  }

  /* ---------- Scroll spy ---------- */
  const spyLinks = new Map(
    Array.from(document.querySelectorAll("[data-spy-link]")).map((link) => [link.hash, link])
  );
  const spyAliases = { certifications: "#experience" };

  if ("IntersectionObserver" in window && spyLinks.size) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link =
            spyLinks.get(`#${entry.target.id}`) || spyLinks.get(spyAliases[entry.target.id]);
          if (!link) return;
          spyLinks.forEach((item) => {
            const active = item === link;
            item.classList.toggle("active", active);
            if (active) item.setAttribute("aria-current", "location");
            else item.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-38% 0px -56% 0px", threshold: 0 }
    );

    document.querySelectorAll("main section[id]").forEach((section) => spy.observe(section));
  }

  /* ---------- Record counters ---------- */
  const counters = Array.from(document.querySelectorAll("[data-count]"));

  const runCounter = (element) => {
    const target = parseInt(element.dataset.count, 10) || 0;
    const suffix = element.dataset.suffix || "";
    if (reducedMotion) {
      element.textContent = `${target}${suffix}`;
      return;
    }
    const duration = 900;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  if (counters.length) {
    if ("IntersectionObserver" in window && !reducedMotion) {
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
    } else {
      counters.forEach(runCounter);
    }
  }

  /* ---------- Copy to clipboard ---------- */
  const copyStatus = document.getElementById("copy-status");

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
      const label = button.querySelector("[data-fr], [data-en]");

      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        fallbackCopy(text);
      }

      button.classList.add("is-copied");
      button.setAttribute("aria-label", COPY_OK[currentLang]);
      if (label) label.textContent = COPY_OK[currentLang];
      if (copyStatus) copyStatus.textContent = COPY_OK[currentLang];

      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", getLangValue(button, "Aria"));
        if (label) label.textContent = getLangValue(label, "", label.textContent);
        if (copyStatus) copyStatus.textContent = "";
      }, 1800);
    });
  });

  /* ---------- Contact form (cosmetic) ---------- */
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (form && formStatus) {
    const fields = {
      name: form.elements.namedItem("name"),
      email: form.elements.namedItem("email"),
      message: form.elements.namedItem("message"),
    };

    const markField = (field, valid) => {
      if (!field) return;
      if (valid) field.removeAttribute("aria-invalid");
      else field.setAttribute("aria-invalid", "true");
    };

    Object.values(fields).forEach((field) => {
      if (!field) return;
      field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = fields.name ? fields.name.value.trim() : "";
      const email = fields.email ? fields.email.value.trim() : "";
      const message = fields.message ? fields.message.value.trim() : "";
      const validName = name.length > 0;
      const validEmail = /.+@.+\..+/.test(email);
      const validMessage = message.length >= 10;

      markField(fields.name, validName);
      markField(fields.email, validEmail);
      markField(fields.message, validMessage);

      const valid = validName && validEmail && validMessage;
      formStatus.dataset.state = valid ? "valid" : "invalid";
      formStatus.textContent = valid ? MESSAGES.valid[currentLang] : MESSAGES.invalid[currentLang];

      if (valid) {
        form.reset();
        formStatus.focus();
      } else {
        const firstInvalid = [fields.name, fields.email, fields.message].find((field) =>
          field ? !field.value.trim() || (field === fields.email && !validEmail) || (field === fields.message && field.value.trim().length < 10) : false
        );
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }
})();
