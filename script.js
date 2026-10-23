(() => {
  const CONTACT_EMAIL = "contact@cedophe.dev";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const header = document.getElementById("header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Ouvrir le menu");
    navMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
      navMenu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
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
      child.style.setProperty("--delay", `${index * 70}ms`);
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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

  const copyButtons = document.querySelectorAll("[data-copy]");

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
      } catch {
        fallbackCopy(text);
      }

      const label = button.querySelector("span");
      button.classList.add("copied");
      if (label) label.textContent = "Copié !";

      window.setTimeout(() => {
        button.classList.remove("copied");
        if (label) label.textContent = "Copier";
      }, 2000);
    });
  });

  const form = document.getElementById("contact-form");

  if (form) {
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const subjectInput = form.querySelector("#subject");
    const messageInput = form.querySelector("#message");
    const status = document.getElementById("form-status");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const fields = [
      {
        input: nameInput,
        error: document.getElementById("name-error"),
        validate: (value) => (value.trim() ? "" : "Merci d'indiquer votre nom."),
      },
      {
        input: emailInput,
        error: document.getElementById("email-error"),
        validate: (value) => {
          if (!value.trim()) return "Merci d'indiquer votre email.";
          return emailPattern.test(value.trim()) ? "" : "Cette adresse email semble invalide.";
        },
      },
      {
        input: messageInput,
        error: document.getElementById("message-error"),
        validate: (value) => {
          if (!value.trim()) return "Merci d'écrire un message.";
          return value.trim().length >= 10 ? "" : "Votre message est un peu court (10 caractères minimum).";
        },
      },
    ];

    const clearStatus = () => {
      status.textContent = "";
      status.classList.remove("error");
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
        status.textContent = "Merci de vérifier les champs encadrés avant l'envoi.";
        status.classList.add("error");
        invalidFields[0].input.focus();
        return;
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim() || "Contact depuis le portfolio";
      const message = messageInput.value.trim();
      const body = `Bonjour Cedophe,\n\n${message}\n\n—\nNom : ${name}\nEmail : ${email}`;

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      status.textContent = "Votre client de messagerie va s'ouvrir avec le message prérempli.";
      form.reset();
      fields.forEach((field) => {
        field.input.classList.remove("has-error");
        field.input.removeAttribute("aria-invalid");
        field.error.textContent = "";
      });
    });
  }

  const particleCanvas = document.getElementById("hero-particles");

  if (particleCanvas && particleCanvas.getContext) {
    const hero = particleCanvas.closest(".hero");
    const context = particleCanvas.getContext("2d");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const pointer = { x: null, y: null };

    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = null;
    let lastTime = 0;
    let isVisible = true;
    let isReduced = motionQuery.matches;

    const createParticles = () => {
      const count = Math.round(Math.min(80, Math.max(26, (width * height) / 17000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1 + Math.random() * 1.5,
        color: Math.random() > 0.72 ? "56, 189, 248" : "46, 230, 168",
        alpha: 0.25 + Math.random() * 0.45,
      }));
    };

    const drawFrame = (animate, delta = 1) => {
      context.clearRect(0, 0, width, height);

      const linkDistance = width < 600 ? 100 : 145;
      const linkDistanceSq = linkDistance * linkDistance;

      particles.forEach((particle) => {
        if (animate && !isReduced) {
          if (pointer.x !== null) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 0 && distance < 130) {
              const push = (1 - distance / 130) * 0.5 * delta;
              particle.x += (dx / distance) * push;
              particle.y += (dy / distance) * push;
            }
          }

          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;

          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
        context.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < linkDistanceSq) {
            const alpha = (1 - Math.sqrt(distanceSq) / linkDistance) * 0.15;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.strokeStyle = `rgba(94, 234, 212, ${alpha})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      if (pointer.x !== null) {
        particles.forEach((particle) => {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 150) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(46, 230, 168, ${(1 - distance / 150) * 0.18})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        });
      }
    };

    const stop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const start = () => {
      if (isReduced || !isVisible || rafId !== null) return;
      lastTime = performance.now();
      const loop = (time) => {
        const delta = Math.min(2.5, (time - lastTime) / 16.67);
        lastTime = time;
        drawFrame(true, delta);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      particleCanvas.width = Math.round(width * dpr);
      particleCanvas.height = Math.round(height * dpr);
      particleCanvas.style.width = `${width}px`;
      particleCanvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();

      if (isReduced) {
        drawFrame(false);
      } else {
        start();
      }
    };

    if (finePointer) {
      hero.addEventListener(
        "pointermove",
        (event) => {
          const rect = hero.getBoundingClientRect();
          pointer.x = event.clientX - rect.left;
          pointer.y = event.clientY - rect.top;
        },
        { passive: true }
      );

      hero.addEventListener("pointerleave", () => {
        pointer.x = null;
        pointer.y = null;
      });
    }

    if ("IntersectionObserver" in window) {
      const visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            start();
          } else {
            stop();
          }
        },
        { threshold: 0 }
      );
      visibilityObserver.observe(hero);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    motionQuery.addEventListener("change", (event) => {
      isReduced = event.matches;
      stop();
      if (isReduced) {
        drawFrame(false);
      } else {
        start();
      }
    });

    let resizeFrame = null;
    window.addEventListener("resize", () => {
      if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = null;
        resize();
      });
    });

    resize();
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
