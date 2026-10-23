(() => {
  const CONTACT_EMAIL = "cedophe@gmail.com";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const translations = {
    fr: {
      skip: "Aller au contenu",
      "meta.title": "Cédophe ZOHOUN | Ingénieur Réseaux & Cybersécurité",
      "meta.description":
        "Portfolio de Cédophe ZOHOUN, ingénieur réseaux et cybersécurité à Accra : infrastructures enterprise, pare-feu Palo Alto & FortiGate, cloud AWS & Azure, formation certifiée CCNA, CCNP, AZ-104 et NSE 3.",

      "nav.aria": "Navigation principale",
      "brand.aria": "Cédophe, retour à l'accueil",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.projects": "Parcours",
      "nav.contact": "Contact",
      "nav.cta": "Me contacter",
      "lang.aria": "Langue",
      "menu.open": "Ouvrir le menu",
      "menu.close": "Fermer le menu",
      "theme.toLight": "Passer au thème clair",
      "theme.toDark": "Passer au thème sombre",

      "hero.eyebrow": "Ingénieur Réseaux & Cybersécurité · Accra, Ghana",
      "hero.lead":
        "Je déploie des infrastructures enterprise, j'opère des pare-feu next-generation et je forme des équipes certifiées — au plus près du terrain, à travers l'Afrique de l'Ouest.",
      "hero.ctaContact": "Me contacter",
      "hero.ctaProjects": "Voir mon parcours",
      "hero.metaExperience": "3+ ans d'expérience",
      "hero.metaDomains": "Réseaux · Sécurité · Cloud",
      "hero.metaLanguages": "Bilingue FR/EN",
      "hero.metaTrainees": "50+ apprenants formés",

      "about.eyebrow": "À propos",
      "about.title": "Infrastructures fiables, sécurité appliquée, savoir transmis.",
      "about.p1": `Ingénieur réseaux et cybersécurité avec <strong>plus de 3 ans d'expérience</strong> en déploiement d'infrastructures enterprise, sécurité next-generation et formation technique certifiée.`,
      "about.p2": `Bilingue français/anglais, j'interviens dans des <strong>contextes multi-clients et multi-sites</strong> à travers l'Afrique de l'Ouest : universités, entreprises et groupes de plus de 16 agences.`,
      "about.p3": `Certifié <strong>CCNP Enterprise</strong>, <strong>CCNA</strong>, <strong>AZ-104</strong> et <strong>Fortinet NSE 3</strong>, je conçois et j'anime des formations Cisco &amp; AWS.`,
      "about.focus1": "Déployer et maintenir des infrastructures réseau enterprise",
      "about.focus2": "Opérer des pare-feu next-generation (Palo Alto, FortiGate)",
      "about.focus3": "Former et certifier : CCNA, CCNP, AWS",

      "profile.aria": "Fiche profil de Cédophe ZOHOUN",
      "profile.role": "Ingénieur Réseaux & Cybersécurité",
      "profile.factLocation": "Base",
      "profile.locationValue": "Accra, Ghana",
      "profile.factLanguages": "Langues",
      "profile.langValue": "Français natif · Anglais C1",
      "profile.factPhone": "Téléphone",
      "profile.certOk": "Certifié",

      "skills.eyebrow": "Compétences",
      "skills.title": "Réseaux, sécurité, cloud et automatisation.",
      "skills.intro": "Des compétences construites sur des projets réels, adossées à des certifications actives.",
      "skills.card1.title": "Réseaux et infrastructure",
      "skills.card1.level": "Terrain · 3+ ans",
      "skills.card1.desc": "Routage, switching, haute disponibilité et interconnexion multi-sites.",
      "skills.card2.title": "Cybersécurité",
      "skills.card2.level": "Next-gen",
      "skills.card2.desc": "Déploiement et opération de pare-feu nouvelle génération.",
      "skills.card3.title": "Cloud",
      "skills.card3.level": "AWS · Azure",
      "skills.card3.desc": "Administration de services cloud et sécurité des infrastructures.",
      "skills.card4.title": "Automatisation & scripting",
      "skills.card4.level": "Python · Bash",
      "skills.card4.desc": "Outillage, déploiement automatisé et documentation du parc.",
      "skills.card5.title": "Équipements",
      "skills.card5.level": "Multi-marques",
      "skills.card5.desc": "Configuration, administration et support au quotidien.",
      "skills.card6.level": "3CX · SIP",
      "skills.card6.desc": "Téléphonie IP multi-sites et centralisation SIP.",
      "skills.card7.title": "Systèmes",
      "skills.card7.level": "Win · Linux",
      "skills.card7.desc": "Administration Windows et Linux au quotidien.",

      "cert.eyebrow": "Certifications",
      "cert.title": "Certifications obtenues",
      "cert.status": "Certifié",

      "projects.eyebrow": "Parcours",
      "projects.title": "Ingénieur réseaux et cybersécurité depuis 2023.",
      "projects.intro":
        "Des déploiements et des opérations réelles : pare-feu nouvelle génération, réseaux multi-sites, téléphonie IP et formation certifiante.",

      "x1.period": "2023 — Aujourd'hui",
      "x1.role": "Ingénieur Réseaux & Cybersécurité",
      "x1.p1title": "Déploiement Palo Alto NGFW · ATU",
      "x1.p1text":
        "Mise en production d'un pare-feu Palo Alto pour l'Accra Technical University (500+ utilisateurs) : politiques de sécurité, Threat Prevention, URL Filtering et VPN GlobalProtect.",
      "x1.p2title": "Support FortiGate multi-sites · COMO",
      "x1.p2text":
        "Supervision de pare-feu FortiGate sur 16+ agences via FortiManager : dépannage VPN IPsec/SSL, politiques de sécurité, routage et monitoring.",
      "x1.p3title": "Pare-feu Palo Alto interne · IMPROTECH",
      "x1.p3text": "Administration du pare-feu interne : maintenance des règles de sécurité, contrôle d'accès et monitoring continu.",
      "x1.p4title": "WiFi entreprise Ubiquiti · IMPROTECH",
      "x1.p4text":
        "Déploiement et gestion du réseau sans fil via le contrôleur UniFi : configuration des points d'accès, segmentation réseau et supervision centralisée.",
      "x1.p5title": "MikroTik & load-balancing · Lycée Français d'Accra",
      "x1.p5text":
        "Installation de points d'accès MikroTik et configuration du load-balancing sur deux liens FAI, pour la redondance et la continuité de service.",
      "x1.p6title": "Script d'inventaire Python",
      "x1.p6text":
        "Outil d'automatisation de la documentation pour ~50 équipements : ping, SSH, collecte hostname/MAC et génération d'un rapport d'inventaire complet.",
      "x1.p7title": "Administration 3CX multi-sites · COMO",
      "x1.p7text": "Gestion du système de téléphonie IP de toutes les agences : configuration des postes, trunks SIP et support voix.",
      "x1.p8title": "Support réseau & voix · COMO",
      "x1.p8text": "Support technique de niveau 2/3 sur 16+ sites.",
      "x1.p9title": "Formateur certifié Cisco & AWS",
      "x1.p9text": "Conception et animation de formations CCNA, CCNP ENCOR et AWS Cloud Practitioner : 50+ apprenants formés.",

      "x2.period": "Mars — Juin 2021",
      "x2.company": "Ministère de l'Économie et des Finances",
      "x2.role": "Stagiaire Support Informatique",
      "x2.p1title": "Support technique",
      "x2.p1text": "Assistance technique pour plus de 200 agents de l'administration publique.",
      "x2.p2title": "Résolution d'incidents",
      "x2.p2text": "Diagnostic et résolution d'incidents matériel et logiciel : Windows, Office, périphériques.",
      "x2.p3title": "Administration",
      "x2.p3text": "Installations de systèmes, mises à jour et gestion des comptes utilisateurs.",

      "edu.title1": "Formation",
      "edu.degree": "Licence en Informatique",
      "edu.note":
        "2021–2023 : mobilité au Ghana — formation intensive en anglais et préparation autonome des certifications Cisco et AWS.",
      "edu.title2": "Langues",
      "edu.langFr": "Natif",
      "edu.langEn": "Professionnel (C1)",

      "contact.eyebrow": "Contact",
      "contact.title": "Vous voulez en parler ?",
      "contact.lead": "Une question, une opportunité ou un projet réseau ? Écrivez-moi ou appelez-moi directement.",
      "contact.phoneLabel": "Téléphone",
      "contact.linkedinValue": "Profil professionnel",
      "contact.githubValue": "Code et expérimentations",
      "contact.copy": "Copier",
      "contact.copied": "Copié",
      "contact.copyAria": "Copier l'adresse email",
      "contact.copyPhoneAria": "Copier le numéro de téléphone",

      "form.name": "Nom",
      "form.namePlaceholder": "Votre nom",
      "form.email": "Email",
      "form.emailPlaceholder": "vous@exemple.com",
      "form.subject": "Sujet",
      "form.subjectPlaceholder": "Une question, une opportunité...",
      "form.message": "Message",
      "form.messagePlaceholder": "Quelques lignes sur votre projet ou votre besoin...",
      "form.submit": "Envoyer le message",
      "form.note": "L'envoi ouvre votre logiciel de messagerie avec le message déjà rempli.",
      "form.errorName": "Merci d'indiquer votre nom.",
      "form.errorEmailRequired": "Merci d'indiquer votre email.",
      "form.errorEmailInvalid": "Cette adresse email semble invalide.",
      "form.errorMessageRequired": "Merci d'écrire un message.",
      "form.errorMessageShort": "Votre message est un peu court (10 caractères minimum).",
      "form.errorSummary": "Merci de vérifier les champs encadrés avant l'envoi.",
      "form.success": "Votre client de messagerie va s'ouvrir avec le message prérempli.",
      "form.defaultSubject": "Contact depuis le portfolio",

      "footer.tagline": `Ingénieur Réseaux &amp; Cybersécurité à Accra.<br>Réseaux, sécurité et formation.`,
      "footer.navAria": "Navigation de pied de page",
      "footer.socialsAria": "Réseaux sociaux",
      "footer.emailAria": "Envoyer un email",
      "footer.rights": "Tous droits réservés.",
      "footer.backTop": "Retour en haut",
    },
    en: {
      skip: "Skip to content",
      "meta.title": "Cédophe ZOHOUN | Network & Cybersecurity Engineer",
      "meta.description":
        "Cédophe ZOHOUN's portfolio: a network and cybersecurity engineer based in Accra — enterprise infrastructure, Palo Alto & FortiGate firewalls, AWS & Azure cloud, certified CCNA, CCNP, AZ-104 and NSE 3 training.",

      "nav.aria": "Main navigation",
      "brand.aria": "Cédophe, back to top",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Experience",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "lang.aria": "Language",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",

      "hero.eyebrow": "Network & Cybersecurity Engineer · Accra, Ghana",
      "hero.lead":
        "I deploy enterprise infrastructure, run next-generation firewalls and train certified teams — hands-on, across West Africa.",
      "hero.ctaContact": "Get in touch",
      "hero.ctaProjects": "See my experience",
      "hero.metaExperience": "3+ years of experience",
      "hero.metaDomains": "Networks · Security · Cloud",
      "hero.metaLanguages": "Bilingual FR/EN",
      "hero.metaTrainees": "50+ learners trained",

      "about.eyebrow": "About",
      "about.title": "Reliable infrastructure, applied security, knowledge passed on.",
      "about.p1": `Network and cybersecurity engineer with <strong>3+ years of experience</strong> in enterprise infrastructure deployment, next-generation security and certified technical training.`,
      "about.p2": `Bilingual French/English, I work in <strong>multi-client and multi-site environments</strong> across West Africa: universities, businesses and branch networks of 16+ sites.`,
      "about.p3": `Certified <strong>CCNP Enterprise</strong>, <strong>CCNA</strong>, <strong>AZ-104</strong> and <strong>Fortinet NSE 3</strong>; I design and deliver Cisco &amp; AWS training.`,
      "about.focus1": "Deploy and maintain enterprise network infrastructure",
      "about.focus2": "Operate next-generation firewalls (Palo Alto, FortiGate)",
      "about.focus3": "Train and certify: CCNA, CCNP, AWS",

      "profile.aria": "Cédophe ZOHOUN profile",
      "profile.role": "Network & Cybersecurity Engineer",
      "profile.factLocation": "Based in",
      "profile.locationValue": "Accra, Ghana",
      "profile.factLanguages": "Languages",
      "profile.langValue": "Native French · C1 English",
      "profile.factPhone": "Phone",
      "profile.certOk": "Certified",

      "skills.eyebrow": "Skills",
      "skills.title": "Networking, security, cloud and automation.",
      "skills.intro": "Skills built on real projects, backed by active certifications.",
      "skills.card1.title": "Networking & infrastructure",
      "skills.card1.level": "Field · 3+ yrs",
      "skills.card1.desc": "Routing, switching, high availability and multi-site interconnection.",
      "skills.card2.title": "Cybersecurity",
      "skills.card2.level": "Next-gen",
      "skills.card2.desc": "Deploying and operating next-generation firewalls.",
      "skills.card3.title": "Cloud",
      "skills.card3.level": "AWS · Azure",
      "skills.card3.desc": "Cloud service administration and infrastructure security.",
      "skills.card4.title": "Automation & scripting",
      "skills.card4.level": "Python · Bash",
      "skills.card4.desc": "Tooling, automated deployment and inventory documentation.",
      "skills.card5.title": "Equipment",
      "skills.card5.level": "Multi-vendor",
      "skills.card5.desc": "Configuration, administration and day-to-day support.",
      "skills.card6.level": "3CX · SIP",
      "skills.card6.desc": "Multi-site IP telephony and SIP centralization.",
      "skills.card7.title": "Systems",
      "skills.card7.level": "Win · Linux",
      "skills.card7.desc": "Everyday Windows and Linux administration.",

      "cert.eyebrow": "Certifications",
      "cert.title": "Earned certifications",
      "cert.status": "Certified",

      "projects.eyebrow": "Experience",
      "projects.title": "Network & cybersecurity engineer since 2023.",
      "projects.intro":
        "Real deployments and operations: next-generation firewalls, multi-site networks, IP telephony and certifying training.",

      "x1.period": "2023 — Present",
      "x1.role": "Network & Cybersecurity Engineer",
      "x1.p1title": "Palo Alto NGFW deployment · ATU",
      "x1.p1text":
        "Full production deployment of a Palo Alto firewall for Accra Technical University (500+ users): security policies, Threat Prevention, URL Filtering and GlobalProtect VPN.",
      "x1.p2title": "FortiGate multi-site support · COMO",
      "x1.p2text":
        "Supervision of FortiGate firewalls across 16+ branches via FortiManager: IPsec/SSL VPN troubleshooting, security policies, routing and monitoring.",
      "x1.p3title": "Internal Palo Alto firewall · IMPROTECH",
      "x1.p3text": "Administration of the internal firewall: security rules maintenance, access control and continuous monitoring.",
      "x1.p4title": "Enterprise Ubiquiti WiFi · IMPROTECH",
      "x1.p4text":
        "Deployment and management of the wireless network via UniFi Controller: AP configuration, network segmentation and centralized supervision.",
      "x1.p5title": "MikroTik & load-balancing · Lycée Français d'Accra",
      "x1.p5text":
        "MikroTik AP installation and load-balancing configuration across two ISP links, for redundancy and service continuity.",
      "x1.p6title": "Python inventory script",
      "x1.p6text":
        "Automated documentation tool for ~50 devices: ping, SSH, hostname/MAC collection and full inventory report generation.",
      "x1.p7title": "Multi-site 3CX administration · COMO",
      "x1.p7text": "IP telephony system management for all branches: extension configuration, SIP trunks and voice support.",
      "x1.p8title": "Network & voice support · COMO",
      "x1.p8text": "Level 2/3 technical support across 16+ sites.",
      "x1.p9title": "Certified Cisco & AWS trainer",
      "x1.p9text": "Design and delivery of CCNA, CCNP ENCOR and AWS Cloud Practitioner training: 50+ learners trained.",

      "x2.period": "March — June 2021",
      "x2.company": "Ministry of Economy and Finance",
      "x2.role": "IT Support Intern",
      "x2.p1title": "Technical support",
      "x2.p1text": "Technical support for 200+ government agents.",
      "x2.p2title": "Incident resolution",
      "x2.p2text": "Hardware/software incident resolution: Windows, Office, peripherals.",
      "x2.p3title": "Administration",
      "x2.p3text": "System installations, updates and user account management.",

      "edu.title1": "Education",
      "edu.degree": "Computer Science degree",  
      "edu.note": "2021–2023: relocation to Ghana — intensive English training and autonomous preparation for Cisco and AWS certifications.",
      "edu.title2": "Languages",
      "edu.langFr": "Native",
      "edu.langEn": "Professional (C1)",

      "contact.eyebrow": "Contact",
      "contact.title": "Want to talk?",
      "contact.lead": "A question, an opportunity or a networking project? Send me a message or call me directly.",
      "contact.phoneLabel": "Phone",
      "contact.linkedinValue": "Professional profile",
      "contact.githubValue": "Code and experiments",
      "contact.copy": "Copy",
      "contact.copied": "Copied",
      "contact.copyAria": "Copy email address",
      "contact.copyPhoneAria": "Copy phone number",

      "form.name": "Name",
      "form.namePlaceholder": "Your name",
      "form.email": "Email",
      "form.emailPlaceholder": "you@example.com",
      "form.subject": "Subject",
      "form.subjectPlaceholder": "A question, an opportunity...",
      "form.message": "Message",
      "form.messagePlaceholder": "A few lines about your project or what you need...",
      "form.submit": "Send message",
      "form.note": "Sending this opens your email app with the message already filled in.",
      "form.errorName": "Please enter your name.",
      "form.errorEmailRequired": "Please enter your email.",
      "form.errorEmailInvalid": "That email address looks invalid.",
      "form.errorMessageRequired": "Please write a message.",
      "form.errorMessageShort": "Your message is a little short (10 characters minimum).",
      "form.errorSummary": "Please check the highlighted fields before sending.",
      "form.success": "Your email app will open with the message already filled in.",
      "form.defaultSubject": "Contact from the portfolio",

      "footer.tagline": `Network &amp; Cybersecurity Engineer in Accra.<br>Networks, security and training.`,
      "footer.navAria": "Footer navigation",
      "footer.socialsAria": "Social links",
      "footer.emailAria": "Send an email",
      "footer.rights": "All rights reserved.",
      "footer.backTop": "Back to top",
    },
  };

  const header = document.getElementById("header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const themeToggle = document.getElementById("theme-toggle");
  const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
  const copyButtons = Array.from(document.querySelectorAll("[data-copy]"));
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  let currentLang = "fr";

  const t = (key) => {
    const value = translations[currentLang][key];
    if (typeof value === "string") return value;
    return translations.fr[key] || "";
  };

  const currentTheme = () =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark";

  const updateThemeLabel = () => {
    if (!themeToggle) return;
    themeToggle.setAttribute(
      "aria-label",
      t(currentTheme() === "dark" ? "theme.toLight" : "theme.toDark")
    );
  };

  const updateMenuLabel = () => {
    if (!navToggle) return;
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", t(isOpen ? "menu.close" : "menu.open"));
  };

  const updateCopyLabel = () => {
    copyButtons.forEach((button) => {
      if (button.classList.contains("copied")) return;
      const label = button.querySelector("span");
      if (label) label.textContent = t("contact.copy");
    });
  };

  const resetFormMessages = () => {
    if (!form) return;
    form.querySelectorAll(".field-error").forEach((element) => {
      element.textContent = "";
    });
    form.querySelectorAll("input, textarea").forEach((element) => {
      element.classList.remove("has-error");
      element.removeAttribute("aria-invalid");
    });
    const status = form.querySelector("#form-status");
    if (status) {
      status.textContent = "";
      status.classList.remove("error");
    }
  };

  const applyTheme = (theme, persist) => {
    document.documentElement.dataset.theme = theme;
    if (persist) {
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        /* storage may be unavailable */
      }
    }
    const meta = document.getElementById("meta-theme-color");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#213448" : "#eae0cf");
    updateThemeLabel();
  };

  const applyTranslations = (lang) => {
    const dictionary = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = dictionary[element.dataset.i18nHtml];
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAriaLabel];
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = dictionary[element.dataset.i18nPlaceholder];
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    document.title = dictionary["meta.title"];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary["meta.description"]);

    document.documentElement.lang = lang;
    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langButton === lang));
    });

    updateMenuLabel();
    updateThemeLabel();
    updateCopyLabel();
    resetFormMessages();
  };

  const setLanguage = (lang) => {
    currentLang = lang === "en" ? "en" : "fr";
    try {
      localStorage.setItem("lang", currentLang);
    } catch (error) {
      /* storage may be unavailable */
    }
    applyTranslations(currentLang);
  };

  try {
    currentLang = localStorage.getItem("lang") === "en" ? "en" : "fr";
  } catch (error) {
    currentLang = "fr";
  }

  applyTheme(currentTheme(), false);
  applyTranslations(currentLang);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    updateMenuLabel();
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
      updateMenuLabel();
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
        closeMenu();
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const isActive = link.hash === `#${entry.target.id}`;
            link.classList.toggle("active", isActive);
            if (isActive) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  document.querySelectorAll(".skills-grid, .timeline, .edu-grid").forEach((grid) => {
    Array.from(grid.children).forEach((child, index) => {
      child.style.setProperty("--delay", `${index * 60}ms`);
    });
  });

  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

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

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        fallbackCopy(text);
      }

      const label = button.querySelector("span");
      button.classList.add("copied");
      if (label) label.textContent = t("contact.copied");

      window.setTimeout(() => {
        button.classList.remove("copied");
        if (label) label.textContent = t("contact.copy");
      }, 2000);
    });
  });

  if (form) {
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const subjectInput = form.querySelector("#subject");
    const messageInput = form.querySelector("#message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const fields = [
      {
        input: nameInput,
        error: document.getElementById("name-error"),
        validate: (value) => (value.trim() ? "" : t("form.errorName")),
      },
      {
        input: emailInput,
        error: document.getElementById("email-error"),
        validate: (value) => {
          if (!value.trim()) return t("form.errorEmailRequired");
          return emailPattern.test(value.trim()) ? "" : t("form.errorEmailInvalid");
        },
      },
      {
        input: messageInput,
        error: document.getElementById("message-error"),
        validate: (value) => {
          if (!value.trim()) return t("form.errorMessageRequired");
          return value.trim().length >= 10 ? "" : t("form.errorMessageShort");
        },
      },
    ];

    const clearStatus = () => {
      if (!formStatus) return;
      formStatus.textContent = "";
      formStatus.classList.remove("error");
    };

    const validateField = (field) => {
      const message = field.validate(field.input.value);
      field.error.textContent = message;
      field.input.classList.toggle("has-error", Boolean(message));
      field.input.setAttribute("aria-invalid", String(Boolean(message)));
      return !message;
    };

    fields.forEach((field) => {
      field.input.addEventListener("input", () => {
        if (field.input.classList.contains("has-error")) validateField(field);
        clearStatus();
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearStatus();

      const invalidFields = fields.filter((field) => !validateField(field));

      if (invalidFields.length > 0) {
        if (formStatus) {
          formStatus.textContent = t("form.errorSummary");
          formStatus.classList.add("error");
        }
        invalidFields[0].input.focus();
        return;
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim() || t("form.defaultSubject");
      const message = messageInput.value.trim();
      const body =
        currentLang === "en"
          ? `Hello Cedophe,\n\n${message}\n\nName: ${name}\nEmail: ${email}`
          : `Bonjour Cedophe,\n\n${message}\n\nNom : ${name}\nEmail : ${email}`;

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      if (formStatus) formStatus.textContent = t("form.success");
      form.reset();
      fields.forEach((field) => {
        field.input.classList.remove("has-error");
        field.input.removeAttribute("aria-invalid");
        field.error.textContent = "";
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
