let lang = 0;

function loadIncludes(callback) {
  const includeElements = document.querySelectorAll("[data-include]");
  let loaded = 0;

  if (includeElements.length === 0 && callback) {
    callback();
    return;
  }

  includeElements.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        el.innerHTML = data;
        loaded++;
        if (loaded === includeElements.length && callback) {
          callback();
        }
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof i18next !== "undefined") {
    i18next.use(i18nextHttpBackend).init(
      {
        lng: "en",
        fallbackLng: "en",
        debug: false,
        backend: {
          loadPath: "/locales/{{lng}}.json",
        },
      },
      (err, t) => {
        if (err) return console.error(err);

        loadIncludes(() => {
          updateContent();

          // GOOGLE ANALYTICS AND COOKIES

          const consentBox = document.getElementById("cookieConsent");
          const acceptBtn = document.getElementById("acceptCookies");

          function loadAnalytics() {
            const script = document.createElement("script");
            script.src =
              "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // Replace with your GA ID
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", "G-3BDKV9501R", { anonymize_ip: true }); // Replace with your GA ID
          }

          if (consentBox && acceptBtn) {
            if (!localStorage.getItem("cookieConsentAccepted")) {
              consentBox.style.display = "flex";
            } else {
              loadAnalytics();
            }

            acceptBtn.addEventListener("click", function () {
              localStorage.setItem("cookieConsentAccepted", "true");
              consentBox.style.display = "none";
              loadAnalytics();
            });
          }

          // HAMBURGER MENU
          const hamburgerBtn = document.getElementById("hamburgerBtn");
          const dropDown = document.getElementById("dropDown");

          if (hamburgerBtn && dropDown) {
            hamburgerBtn.addEventListener("click", () => {
              dropDown.classList.toggle("open");
              hamburgerBtn.classList.toggle("open");
            });
          }

          // CONTACT FORM
          const form = document.getElementById("contactForm");

          if (form) {
            form.addEventListener("submit", function (e) {
              e.preventDefault();

              const formData = new FormData(form);

              fetch("contact.php", {
                method: "POST",
                body: formData,
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.status === "success") {
                    const successMsg = document.getElementById("formSuccess");
                    successMsg.style.display = "block";
                    successMsg.innerText = data.message;
                    form.reset();
                  } else {
                    alert(data.message || "Something went wrong.");
                  }
                })
                .catch(() => alert("Error sending message."));
            });
          }

          // SPLIDE
          const splideEl1 = document.querySelector(".splide");
          const splideEl2 = document.querySelector("#splide2");

          if (splideEl1) {
            new Splide(splideEl1, {
              type: "loop",
              gap: "20px",
              perPage: 3,
              focus: 0,
              omitEnd: 1,
              breakpoints: {
                1320: { perPage: 2 },
                800: { perPage: 1 },
              },
            }).mount();
          }

          if (splideEl2) {
            new Splide(splideEl2, {
              type: "loop",
              gap: "20px",
              perPage: 3,
              focus: 0,
              omitEnd: 1,
              breakpoints: {
                1320: { perPage: 2 },
                800: { perPage: 1 },
              },
            }).mount();
          }

          // GSAP Animations
          if (typeof gsap !== "undefined") {
            gsap.from(".context", { opacity: 0, y: 100, duration: 1 });
            gsap.from(".gsapWorkCheck", {
              opacity: 0,
              y: 100,
              duration: 1,
            });
            gsap.from(".gsapWorkWith", {
              opacity: 0,
              y: 100,
              delay: 2,
              duration: 1.1,
            });
            gsap.from(".gsapWorkWithA", {
              opacity: 0,
              y: 100,
              delay: 2,
              duration: 1.4,
            });

            const slideFrom = (selector, x) => {
              gsap.from(selector, {
                scrollTrigger: {
                  trigger: selector,
                  toggleActions: "play",
                },
                opacity: 0,
                x: x,
                delay: 0.5,
                duration: 0.7,
              });
            };

            const watchRes = window.matchMedia("(min-width: 1320px)");
            const mobile = !watchRes.matches;

            slideFrom("#aboutMeSectionR", -75);
            slideFrom("#aboutMeTextR", -75);
            slideFrom("#aboutMeSectionL", -75);
            slideFrom("#aboutMeTextL", -75);

            gsap.from("#gsapWork1", {
              scrollTrigger: { trigger: "#gsapWork1" },
              opacity: 0,
              x: -75,
              delay: 0.5,
              duration: 0.5,
            });
            gsap.from("#gsapWork2", {
              scrollTrigger: { trigger: "#gsapWork2" },
              opacity: 0,
              x: mobile ? -75 : 75,
              delay: 0.5,
              duration: 0.5,
            });
            gsap.from("#gsapWork3", {
              scrollTrigger: { trigger: "#gsapWork3" },
              opacity: 0,
              x: -75,
              delay: 0.5,
              duration: 0.5,
            });
            gsap.from("#gsapWork4", {
              scrollTrigger: { trigger: "#gsapWork4" },
              opacity: 0,
              x: mobile ? -75 : 75,
              delay: 0.5,
              duration: 0.5,
            });
          }

          // RE-RENDER CASE
          if (typeof renderProject === "function") {
            renderProject();
          }
        });
      }
    );

    // Language Switch Logic
    i18next.on("languageChanged", () => {
      updateContent();

      const english = document.getElementById("englishLang");
      const danish = document.getElementById("danishLang");
      if (english && danish) {
        const isEven = ++lang % 2 === 0;
        english.style.display = isEven ? "none" : "block";
        danish.style.display = isEven ? "block" : "none";
      }

      if (typeof renderProject === "function") {
        renderProject();
      }
    });
  }

  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = i18next.t(key);
    });
  }
});
