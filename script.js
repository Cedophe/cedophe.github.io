(() => {
  const CONTACT_EMAIL = "contact@cedophe.dev";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const translations = {
    fr: {
      skip: "Aller au contenu",
      "meta.title": "Cedophe | IT et cybersécurité",
      "meta.description":
        "Portfolio de Cedophe, professionnel IT et cybersécurité chez IMPROTECH. Réseaux, sécurité, cloud AWS et mentorat.",

      "nav.aria": "Navigation principale",
      "brand.aria": "Cedophe, retour à l'accueil",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.contact": "Contact",
      "nav.cta": "Me contacter",
      "lang.aria": "Langue",
      "menu.open": "Ouvrir le menu",
      "menu.close": "Fermer le menu",
      "theme.toLight": "Passer au thème clair",
      "theme.toDark": "Passer au thème sombre",

      "hero.eyebrow": "IMPROTECH · IT et cybersécurité",
      "hero.lead":
        "Je travaille sur les réseaux et la sécurité informatique. Concrètement : concevoir des infrastructures fiables, les protéger, et transmettre ce que j'apprends.",
      "hero.ctaContact": "Me contacter",
      "hero.ctaProjects": "Voir mes projets",
      "hero.metaStatus": "CCNP et AWS en préparation",
      "hero.metaNetworks": "Réseaux",
      "hero.metaSecurity": "Sécurité",
      "hero.metaMentoring": "Mentorat",

      "about.eyebrow": "À propos",
      "about.title": "Un travail technique, avec une part de transmission.",
      "about.p1": `Je suis professionnel IT et cybersécurité chez <strong>IMPROTECH</strong>. Mon quotidien se partage entre les infrastructures réseau et la protection des systèmes : concevoir des environnements qui tiennent, déployer des solutions de sécurité adaptées et aider les équipes à monter en compétence.`,
      "about.p2": `J'aime autant chercher pourquoi un routage ne passe pas que rendre une solution compréhensible pour quelqu'un qui n'est pas du métier. Les deux font partie du même travail.`,
      "about.p3": `Je prépare les certifications <strong>CCNP</strong> et <strong>AWS</strong> pour aller plus loin sur les réseaux d'entreprise et le cloud.`,
      "about.focus1": "Concevoir et maintenir des infrastructures réseau",
      "about.focus2": "Déployer et durcir des solutions de sécurité",
      "about.focus3": "Former, mentorer et documenter",

      "profile.aria": "Fiche profil de Cedophe",
      "profile.role": "IT et cybersécurité",
      "profile.factCompany": "Entreprise",
      "profile.factExpertise": "Expertises",
      "profile.expertiseValue": "Réseaux, sécurité, cloud",
      "profile.factCerts": "Certifications visées",
      "profile.certValue": "CCNP et AWS",
      "profile.factDrive": "Ce qui m'anime",
      "profile.driveValue": "Apprendre et transmettre",
      "profile.certCcnpStatus": "En préparation",
      "profile.certAwsStatus": "En cours",

      "skills.eyebrow": "Compétences",
      "skills.title": "Les domaines sur lesquels je travaille le plus.",
      "skills.intro": "Une expérience construite sur le terrain, complétée par des certifications.",
      "skills.card1.title": "Réseaux et infrastructure",
      "skills.card1.level": "Expert",
      "skills.card1.desc": "Conception, routage, switching et haute disponibilité.",
      "skills.card1.tag2": "Routage",
      "skills.card2.title": "Cybersécurité",
      "skills.card2.level": "Avancé",
      "skills.card2.desc": "Déploiement, durcissement et segmentation.",
      "skills.card2.tag1": "Pare-feu",
      "skills.card2.tag3": "Politiques d'accès",
      "skills.card2.tag4": "Bonnes pratiques",
      "skills.card3.title": "Cloud AWS",
      "skills.card3.level": "En progression",
      "skills.card3.desc": "Les bases du cloud, la sécurité et les bonnes pratiques.",
      "skills.card4.title": "Mentorat et formation",
      "skills.card4.level": "Avancé",
      "skills.card4.desc": "Accompagner, expliquer et documenter.",
      "skills.card4.tag1": "Formation AWS",
      "skills.card4.tag4": "Vulgarisation",

      "cert.eyebrow": "Objectifs",
      "cert.title": "Certifications en préparation",
      "cert.ccnpStatus": "En préparation",
      "cert.awsStatus": "En cours",

      "projects.eyebrow": "Projets",
      "projects.title": "Trois projets qui résument mon travail.",
      "projects.intro":
        "Rendre le réseau visible, limiter la surface d'attaque et faire monter les équipes en compétence.",
      "projects.detail": "Voir le détail",
      "projects.card1.tag1": "Réseaux",
      "projects.card1.tag2": "Supervision",
      "projects.card1.tag3": "Fiabilité",
      "projects.card1.title": "Supervision réseau multi-sites",
      "projects.card1.desc":
        "Une vue commune de la santé du réseau pour repérer les incidents plus tôt, sur plusieurs sites.",
      "projects.card2.tag1": "Cybersécurité",
      "projects.card2.tag2": "Pare-feu",
      "projects.card2.title": "Segmentation et durcissement",
      "projects.card2.desc": "Découper le réseau en zones et n'ouvrir que les flux nécessaires.",
      "projects.card3.tag2": "Formation",
      "projects.card3.tag3": "Mentorat",
      "projects.card3.title": "Atelier AWS et mentorat",
      "projects.card3.desc":
        "Des ateliers pratiques pour rendre le cloud plus concret et transmettre les bons réflexes.",

      "dialog.close": "Fermer la fenêtre",
      "dialog1.kicker": "Projet · Réseaux",
      "dialog1.title": "Supervision réseau multi-sites",
      "dialog1.intro":
        "Une lecture claire de l'état de l'infrastructure sur plusieurs sites, pour agir avant que les incidents n'impactent les utilisateurs.",
      "dialog1.p1label": "Objectif",
      "dialog1.p1text": "Centraliser l'état des équipements et des liens dans une vue unique.",
      "dialog1.p2label": "Approche",
      "dialog1.p2text":
        "Cartographie des flux, supervision des équipements critiques, tableaux de bord et alertes hiérarchisées.",
      "dialog1.p3label": "Résultat",
      "dialog1.p3text": "Un diagnostic plus rapide et des incidents traités avec plus de sérénité.",
      "dialog1.tag1": "Supervision",
      "dialog1.tag4": "Haute disponibilité",
      "dialog2.kicker": "Projet · Cybersécurité",
      "dialog2.title": "Segmentation et durcissement",
      "dialog2.intro":
        "Découper le réseau en zones de confiance et n'autoriser que les flux réellement nécessaires, pour limiter la propagation en cas d'incident.",
      "dialog2.p1label": "Objectif",
      "dialog2.p1text": "Réduire la surface d'attaque et clarifier les règles d'accès entre les zones.",
      "dialog2.p2label": "Approche",
      "dialog2.p2text":
        "Découpage en VLAN, matrice de flux, règles de pare-feu et durcissement des équipements.",
      "dialog2.p3label": "Résultat",
      "dialog2.p3text": "Un réseau plus lisible, plus segmenté et plus simple à auditer.",
      "dialog2.tag2": "Pare-feu",
      "dialog2.tag3": "Matrice de flux",
      "dialog2.tag4": "Durcissement",
      "dialog3.kicker": "Projet · Cloud et transmission",
      "dialog3.title": "Atelier AWS et mentorat",
      "dialog3.intro":
        "Rendre le cloud concret et accessible grâce à des ateliers pratiques, pensés pour faire monter les équipes en compétence à leur rythme.",
      "dialog3.p1label": "Objectif",
      "dialog3.p1text": "Partager les fondamentaux AWS et ancrer les bonnes pratiques de sécurité.",
      "dialog3.p2label": "Approche",
      "dialog3.p2text": "Ateliers guidés, cas pratiques, échanges et accompagnement individuel.",
      "dialog3.p3label": "Résultat",
      "dialog3.p3text": "Des équipes plus autonomes et une culture cloud partagée.",
      "dialog3.tag4": "Mentorat",

      "contact.eyebrow": "Contact",
      "contact.title": "Vous voulez en parler ?",
      "contact.lead":
        "Une question, un projet ou simplement envie d'échanger sur les réseaux et la sécurité ? Écrivez-moi.",
      "contact.linkedinValue": "Profil professionnel",
      "contact.githubValue": "Code et expérimentations",
      "contact.copy": "Copier",
      "contact.copied": "Copié",
      "contact.copyAria": "Copier l'adresse email",

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

      "footer.tagline": `IT et cybersécurité chez IMPROTECH.<br>Réseaux, sécurité et transmission.`,
      "footer.navAria": "Navigation de pied de page",
      "footer.socialsAria": "Réseaux sociaux",
      "footer.emailAria": "Envoyer un email",
      "footer.rights": "Tous droits réservés.",
      "footer.backTop": "Retour en haut",
    },
    en: {
      skip: "Skip to content",
      "meta.title": "Cedophe | IT and cybersecurity",
      "meta.description":
        "Cedophe works in IT and cybersecurity at IMPROTECH: networks, security, AWS and mentoring.",

      "nav.aria": "Main navigation",
      "brand.aria": "Cedophe, back to top",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "lang.aria": "Language",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",

      "hero.eyebrow": "IMPROTECH · IT and cybersecurity",
      "hero.lead":
        "I work on networks and IT security. In practice, that means building infrastructure that holds up, keeping it secure, and passing on what I learn.",
      "hero.ctaContact": "Get in touch",
      "hero.ctaProjects": "See my projects",
      "hero.metaStatus": "CCNP and AWS in progress",
      "hero.metaNetworks": "Networks",
      "hero.metaSecurity": "Security",
      "hero.metaMentoring": "Mentoring",

      "about.eyebrow": "About",
      "about.title": "Technical work, with a teaching side.",
      "about.p1": `I work in IT and cybersecurity at <strong>IMPROTECH</strong>. My days are split between network infrastructure and protecting systems: designing environments that hold up, deploying security tools that fit the actual need, and helping teams build their skills.`,
      "about.p2": `I enjoy both digging into why a route is failing and explaining a solution to someone outside the field. In my experience, the two are part of the same job.`,
      "about.p3": `I am currently preparing the <strong>CCNP</strong> and <strong>AWS</strong> certifications to go further with enterprise networks and cloud.`,
      "about.focus1": "Design and maintain network infrastructure",
      "about.focus2": "Deploy and harden security solutions",
      "about.focus3": "Teach, mentor and document",

      "profile.aria": "Cedophe profile",
      "profile.role": "IT and cybersecurity",
      "profile.factCompany": "Company",
      "profile.factExpertise": "Focus",
      "profile.expertiseValue": "Networks, security, cloud",
      "profile.factCerts": "Certifications",
      "profile.certValue": "CCNP and AWS",
      "profile.factDrive": "What drives me",
      "profile.driveValue": "Learning and passing it on",
      "profile.certCcnpStatus": "Preparing",
      "profile.certAwsStatus": "In progress",

      "skills.eyebrow": "Skills",
      "skills.title": "The areas I work in most.",
      "skills.intro": "Experience built on the job, backed up by certifications.",
      "skills.card1.title": "Networks and infrastructure",
      "skills.card1.level": "Expert",
      "skills.card1.desc": "Design, routing, switching and high availability.",
      "skills.card1.tag2": "Routing",
      "skills.card2.title": "Cybersecurity",
      "skills.card2.level": "Advanced",
      "skills.card2.desc": "Deployment, hardening and segmentation.",
      "skills.card2.tag1": "Firewall",
      "skills.card2.tag3": "Access policies",
      "skills.card2.tag4": "Best practices",
      "skills.card3.title": "AWS cloud",
      "skills.card3.level": "Getting there",
      "skills.card3.desc": "Cloud fundamentals, security and good practice.",
      "skills.card4.title": "Mentoring and training",
      "skills.card4.level": "Advanced",
      "skills.card4.desc": "Guiding people, explaining and documenting.",
      "skills.card4.tag1": "AWS training",
      "skills.card4.tag4": "Plain-language explanations",

      "cert.eyebrow": "Goals",
      "cert.title": "Certifications in progress",
      "cert.ccnpStatus": "Preparing",
      "cert.awsStatus": "In progress",

      "projects.eyebrow": "Projects",
      "projects.title": "Three projects that sum up my work.",
      "projects.intro":
        "Making the network visible, reducing the attack surface, and helping teams get better at what they do.",
      "projects.detail": "View details",
      "projects.card1.tag1": "Networks",
      "projects.card1.tag2": "Monitoring",
      "projects.card1.tag3": "Reliability",
      "projects.card1.title": "Multi-site network monitoring",
      "projects.card1.desc":
        "One shared view of network health, so incidents are spotted earlier across several sites.",
      "projects.card2.tag1": "Cybersecurity",
      "projects.card2.tag2": "Firewall",
      "projects.card2.title": "Segmentation and hardening",
      "projects.card2.desc": "Split the network into zones and only open the flows that are actually needed.",
      "projects.card3.tag2": "Training",
      "projects.card3.tag3": "Mentoring",
      "projects.card3.title": "AWS workshop and mentoring",
      "projects.card3.desc":
        "Hands-on workshops that make cloud concrete and pass on the right habits.",

      "dialog.close": "Close dialog",
      "dialog1.kicker": "Project · Networks",
      "dialog1.title": "Multi-site network monitoring",
      "dialog1.intro":
        "A clear, immediate view of infrastructure health across several sites, so problems can be handled before users notice.",
      "dialog1.p1label": "Goal",
      "dialog1.p1text": "Bring device and link status together in one place.",
      "dialog1.p2label": "Approach",
      "dialog1.p2text":
        "Map the traffic flows, monitor critical equipment, build dashboards and set up tiered alerts.",
      "dialog1.p3label": "Outcome",
      "dialog1.p3text": "Faster diagnosis and incidents handled with a calmer head.",
      "dialog1.tag1": "Monitoring",
      "dialog1.tag4": "High availability",
      "dialog2.kicker": "Project · Cybersecurity",
      "dialog2.title": "Segmentation and hardening",
      "dialog2.intro":
        "Divide the network into trust zones and allow only the flows that are truly needed, so an incident is less likely to spread.",
      "dialog2.p1label": "Goal",
      "dialog2.p1text": "Reduce the attack surface and make access rules between zones easier to read.",
      "dialog2.p2label": "Approach",
      "dialog2.p2text": "VLAN segmentation, a flow matrix, firewall rules and device hardening.",
      "dialog2.p3label": "Outcome",
      "dialog2.p3text": "A network that is easier to read, easier to segment and easier to audit.",
      "dialog2.tag2": "Firewall",
      "dialog2.tag3": "Flow matrix",
      "dialog2.tag4": "Hardening",
      "dialog3.kicker": "Project · Cloud and teaching",
      "dialog3.title": "AWS workshop and mentoring",
      "dialog3.intro":
        "Making cloud concrete and accessible through hands-on workshops, so teams can build their skills at their own pace.",
      "dialog3.p1label": "Goal",
      "dialog3.p1text": "Share AWS fundamentals and anchor good security habits.",
      "dialog3.p2label": "Approach",
      "dialog3.p2text": "Guided workshops, practical cases, discussion and one-to-one support.",
      "dialog3.p3label": "Outcome",
      "dialog3.p3text": "Teams that can work on their own, with a shared understanding of the cloud.",
      "dialog3.tag4": "Mentoring",

      "contact.eyebrow": "Contact",
      "contact.title": "Want to talk?",
      "contact.lead":
        "A question, a project, or just want to compare notes on networks and security? Send me a message.",
      "contact.linkedinValue": "Professional profile",
      "contact.githubValue": "Code and experiments",
      "contact.copy": "Copy",
      "contact.copied": "Copied",
      "contact.copyAria": "Copy email address",

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

      "footer.tagline": `IT and cybersecurity at IMPROTECH.<br>Networks, security and knowledge sharing.`,
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

  document.querySelectorAll(".projects-grid, .skills-grid").forEach((grid) => {
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

  const dialogs = Array.from(document.querySelectorAll(".project-dialog"));

  document.querySelectorAll("[data-dialog]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.dialog);
      if (!dialog || typeof dialog.showModal !== "function") return;
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });

  dialogs.forEach((dialog) => {
    const closeDialog = () => {
      dialog.close();
      document.body.classList.remove("dialog-open");
    };

    dialog.querySelectorAll("[data-close]").forEach((button) => {
      button.addEventListener("click", closeDialog);
    });

    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!isInside) closeDialog();
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
    });
  });

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
