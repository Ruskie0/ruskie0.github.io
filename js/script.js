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
  // Initialize i18next translations before loading includes
  if (typeof i18next !== "undefined") {
    i18next.init(
      {
        lng: "en", // translations
        resources: {
          en: {
            translation: {
              trans1: "Hey, I'm Sebastian",
              trans2: "And I'm a Web Developer",
              trans3: "Want to see what i've built?",
              trans4: "Or",
              trans5: "Work with me?",
              trans6: "Who am I, anyway?",
              trans7: "The boring (but pretty important) stuff!",
              trans8:
                "First and foremost, I'm a nerd — a nerd who specializes in Front-End Web Development using JavaScript, HTML, CSS, SCSS, and various frameworks (Vue.js, React.js). I also have experience with Back-End development, including Server-Side PHP and SQL databases. I've worked with WordPress, Shopify, DanDomain aswell.",
              trans9: "The (slightly) more interesting stuff!",
              trans10:
                "I love gaming — anything from shooters to grand strategy to flight simulators. I've been into tech for as long as I can remember. I started using computers at around 8 years old, and have only grown more skilled and passionate over time. Outside of tech, I enjoy drawing (sometimes digitally) and reading.",
              trans11: "Technologies I've used primarily for Front-End",
              trans12: "Technologies I've used primarily for Back-End",
              trans13: "Previous Work",
              trans14:
                "Projects I've worked on, either solo or within a small team as a developer.",
              trans15:
                "Kok Amok is a catering service focused on affordable, simple catering for events and gatherings.<br><br>",
              trans16:
                "Kinetic Biofuel develops 2nd-generation technology using straw as raw material, helping biogas producers more than double output in both new and existing plants.<br><br>",
              trans17:
                "Aalborg City's website features events, user login, an eCommerce shop, bilingual support, and more.<br><br>",
              trans18:
                "Hotel Sankt Annæ is a 4-star hotel in central Copenhagen, with a clean, modern, and luxurious web design.<br><br>",
              trans19: "Got any questions? Want to work together?",
              trans20:
                "Feel free to send me a message — I'll get back to you as soon as possible.",
              trans21: `Feel free to send me a message using the form — I’ll get back to you as soon as possible. Whether you have a question, a project in mind, or just want to say hi, I’d love to hear from you.
<br /><br />
Prefer to reach out directly? You can email me at <a href="mailto:askie.dev@gmail.com" style="color: #c36060;">askie.dev@gmail.com</a> or call me at <a href="tel:+4522599595" style="color: #c36060;">+45 22 59 95 95</a>.`,
              form: {
                nameLabel: "Name",
                emailLabel: "Email",
                messageLabel: "Message",
                submitButton: "Send",
              },
              kok: {
                title: "Kok Amok",
                summary:
                  "Kok Amok is a catering service focused on affordable, simple catering for events and gatherings.",
                toolsTitle: "Tools Used:",
                description:
                  "Kok Amok is a clean, user-friendly WordPress website built for a catering company focused on modern simplicity and fast service. The website allows users to browse meal options, book catering directly, and contact the team with ease.",
                readmore:
                  'Read more about Kok Amok on their website, <a href="https://kok-amok.dk" style="color: #c36060;"> here</a>',
              },
              hotel: {
                title: "Hotel Sankt Annæ",
                summary:
                  "Hotel Sankt Annæ is a 4-star hotel in central Copenhagen, with a clean, modern, and luxurious web design.",
                toolsTitle: "Tools Used:",
                description:
                  "The website for Hotel Sankt Annæ was built to reflect the elegance and modern design of the hotel itself. Using WordPress with a custom theme, the site supports multilingual content, smooth booking experiences, and a sleek presentation of the hotel’s amenities and rooms.",
                readmore:
                  'Read more about Hotel Sankt Annæ on their website, <a href="https://hotelsktannae.dk" style="color: #c36060;">here</a>',
              },
              kinetic: {
                title: "Kinetic Biofuel",
                summary:
                  "Kinetic Biofuel develops 2nd-generation technology using straw as raw material, helping biogas producers more than double output in both new and existing plants.",
                toolsTitle: "Tools Used:",
                description:
                  "The Kinetic Biofuel website highlights their cutting-edge renewable technology. The layout supports multilingual content and a professional tone to reflect their innovative impact on the biogas industry.",
                readmore:
                  'Read more about Kinetic Biofuel on their website, <a href="https://kineticbiofuel.com" style="color: #c36060;">here</a>.',
              },
              aalborg: {
                title: "Aalborg City",
                summary:
                  "Aalborg City's website features events, user login, an eCommerce shop, bilingual support, and more.",
                toolsTitle: "Tools Used:",
                description:
                  "The Aalborg City website is a dynamic bilingual platform showcasing local events, shopping opportunities, and community information. Built on WordPress with custom features, it supports both English and Danish, offering an inclusive and modern digital experience for residents and visitors alike.",
                readmore:
                  'Read more about Aalborg City on their website <a href="https://aalborgcity.dk" style="color: #c36060;">here</a>.',
              },
              staal: {
                title: "Brønderslev Stål",
                summary:
                  "A professional website for a leading Danish steel company with strong industrial branding.",
                toolsTitle: "Tools Used:",
                description:
                  "The Brønderslev Stål website was designed to reflect strength and reliability. Built with WordPress and performance in mind, it highlights services, past projects, and contact options for B2B clients.",
                readmore:
                  'Visit Brønderslev Stål <a href="https://broenderslev-staal.dk/" style="color: #c36060;">here</a>',
              },
              vendino: {
                title: "Vendino",
                summary:
                  "A sleek eCommerce platform specializing in customizable furniture solutions.",
                toolsTitle: "Tools Used:",
                description:
                  "Vendino’s WooCommerce-powered site offers personalized shopping for furniture with a modern, Scandinavian design. The site is user-friendly and includes product configuration and checkout features.",
                readmore:
                  'Discover Vendino <a href="https://vendino.com/da/" style="color: #c36060;">here</a>',
              },
              lampefeber: {
                title: "Lampefeber",
                summary:
                  "A multilingual eCommerce site selling designer lighting products across Europe.",
                toolsTitle: "Tools Used:",
                description:
                  "Built on a custom CMS and multilingual framework, Lampefeber’s site offers a clean and premium design for customers seeking high-end lighting solutions.",
                readmore:
                  'Explore Lampefeber <a href="https://da.lampefeber.com/" style="color: #c36060;">here</a>',
              },
              villahus: {
                title: "Villahus",
                summary:
                  "A clean and refined eCommerce site for quality door handles, fittings, and home accessories.",
                toolsTitle: "Tools Used:",
                description:
                  "Villahus' platform showcases its extensive product catalog with filtering, detailed product pages, and a strong visual identity built for conversion and clarity.",
                readmore:
                  'Visit Villahus <a href="https://www.villahus.dk/" style="color: #c36060;">here</a>',
              },
              cases: {
                title: "Selected Work",
                readmore: "Read More",
                viewCase: "View Case",

                kokamok: {
                  title: "Kok Amok",
                  description:
                    "A clean, responsive WordPress site for a Danish catering business.",
                },

                kinetic: {
                  title: "Kinetic Biofuel",
                  description:
                    "A bilingual, tech-focused WordPress site for an eco-energy company.",
                },

                aalborg: {
                  title: "Aalborg City",
                  description:
                    "An event-filled WordPress site with user login and eCommerce features.",
                },

                hotel: {
                  title: "Hotel Sankt Annæ",
                  description:
                    "Elegant and responsive WordPress site for a luxury hotel in Copenhagen.",
                },
                staal: {
                  title: "Brønderslev Stål",
                  description:
                    "Modern company website focused on structural steel solutions.",
                },
                vendino: {
                  title: "Vendino",
                  description:
                    "Stylish eCommerce platform built with WooCommerce and custom enhancements.",
                },
                lampefeber: {
                  title: "Lampefeber",
                  description:
                    "Sophisticated lighting webshop with sleek design and multilingual setup.",
                },
                villahus: {
                  title: "Villahus",
                  description:
                    "High-end webshop for door handles and interior details with a refined layout.",
                },
              },
            },
          },
          da: {
            translation: {
              trans1: "Hej, jeg hedder Sebastian",
              trans2: "Og jeg er en Webudvikler",
              trans3: "Vil du se noget af mit arbejde?",
              trans4: "Eller",
              trans5: "Vil du Arbejde sammen?",
              trans6: "Hvem er jeg egentlig?",
              trans7: "Den kedelige (men ret vigtige) del!",
              trans8:
                "Først og fremmest er jeg en nørd — en nørd, der har specialiseret sig i Front-End Webudvikling med JavaScript, HTML, CSS, SCSS og forskellige frameworks (Vue.js, React.js). Jeg har også erfaring med Back-End, herunder Server-Side PHP og SQL databaser. Jeg har arbejdet med WordPress, Shopify og Dandomain.",
              trans9: "De (lidt) mere interessante ting!",
              trans10:
                "Jeg elsker at spille spil — alt fra skydespil til grand strategy til flysimulatorer. Jeg har interesseret mig for teknologi, så længe jeg kan huske. Jeg begyndte at bruge computer i en alder af cirka 8 år og er bare blevet bedre med tiden. Uden for skærmen kan jeg lide at tegne (nogle gange digitalt) og læse.",
              trans11: "Teknologier jeg primært har brugt til Front-End",
              trans12: "Teknologier jeg primært har brugt til Back-End",
              trans13: "Tidligere projekter",
              trans14:
                "Projekter jeg har arbejdet på, enten alene eller i et lille hold.",
              trans15:
                "Kok Amok er en cateringservice, der fokuserer på prisvenlig og enkel catering til arrangementer.<br><br>",
              trans16:
                "Kinetic Biofuel udvikler teknologi, der bruger halm som råmateriale og hjælper biogasanlæg med at fordoble produktionen.<br><br>",
              trans17:
                "Aalborg Citys hjemmeside indeholder events, brugerlogin, webshop, tosproget indhold og meget mere.<br><br>",
              trans18:
                "Hotel Sankt Annæ er et 4-stjernet hotel i hjertet af København med et moderne og luksuriøst webdesign.<br><br>",
              trans19: "Har du spørgsmål? Eller vil du samarbejde?",
              trans20:
                "Du er velkommen til at sende mig en besked — jeg vender tilbage hurtigst muligt.",
              trans21: `Du er velkommen til at sende mig en besked via kontaktformularen — jeg vender tilbage så hurtigt som muligt. Uanset om du har spørgsmål, et projekt i tankerne, eller bare vil sige hej, vil jeg gerne fra dig.
<br /><br />
Foretrækker du at kontakte mig direkte? Så kan du sende en mail til <a href="mailto:askie.dev@gmail.com" style="color: #c36060;">askie.dev@gmail.com</a> eller ringe på <a href="tel:+4522599595" style="color: #c36060;">+45 22 59 95 95</a>.`,
              form: {
                nameLabel: "Navn",
                emailLabel: "Email",
                messageLabel: "Besked",
                submitButton: "Send",
              },
              kok: {
                title: "Kok Amok",
                summary:
                  "Kok Amok er en cateringservice med fokus på prisvenlig og enkel catering til arrangementer og fester.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Kok Amok er en brugervenlig WordPress-hjemmeside lavet til en cateringvirksomhed med fokus på moderne enkelthed og hurtig service. Besøgende kan udforske menuer, booke catering og tage kontakt – alt sammen nemt og hurtigt.",
                readmore:
                  'Læs mere om Kok Amok på deres hjemmeside <a href="https://kok-amok.dk" style="color: #c36060;"> her</a>',
              },
              hotel: {
                title: "Hotel Sankt Annæ",
                summary:
                  "Hotel Sankt Annæ er et 4-stjernet hotel i hjertet af København med et moderne og luksuriøst webdesign.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Hotel Sankt Annæs hjemmeside er udviklet til at afspejle hotellets elegante og moderne udtryk. Med WordPress og et specialbygget tema understøtter siden flersproget indhold, enkel booking og en stilren præsentation af værelser og faciliteter.",
                readmore:
                  'Læs mere om Hotel Sankt Annæ på deres hjemmeside <a href="https://hotelsktannae.dk" style="color: #c36060;">her</a>',
              },
              kinetic: {
                title: "Kinetic Biofuel",
                summary:
                  "Kinetic Biofuel udvikler 2. generations teknologi, der bruger halm som råmateriale og hjælper biogasanlæg med at fordoble produktionen i både nye og eksisterende anlæg.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Kinetic Biofuels hjemmeside fremhæver deres banebrydende teknologi til vedvarende energi. Layoutet understøtter flersproget indhold og har et professionelt udtryk, der afspejler deres innovative indsats i biogasindustrien.",
                readmore:
                  'Læs mere om Kinetic Biofuel på deres hjemmeside <a href="https://kineticbiofuel.com" style="color: #c36060;">her</a>.',
              },
              aalborg: {
                title: "Aalborg City",
                summary:
                  "Aalborg Citys hjemmeside indeholder events, brugerlogin, webshop, tosproget indhold og meget mere.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Aalborg Citys hjemmeside er en dynamisk tosproget platform, der viser lokale begivenheder, shoppingmuligheder og fællesskabsinformation. Bygget i WordPress med tilpassede funktioner og support for både engelsk og dansk – den giver en moderne, inkluderende digital oplevelse til både borgere og besøgende.",
                readmore:
                  'Læs mere om Aalborg City på deres hjemmeside <a href="https://aalborgcity.dk" style="color: #c36060;">her</a>.',
              },
              staal: {
                title: "Brønderslev Stål",
                summary:
                  "En professionel hjemmeside for en førende dansk stålvirksomhed med stærk visuel identitet.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Hjemmesiden for Brønderslev Stål er skabt med fokus på robusthed og pålidelighed. Den fremhæver virksomhedens services og tidligere projekter til B2B kunder.",
                readmore:
                  'Besøg Brønderslev Stål <a href="https://broenderslev-staal.dk/" style="color: #c36060;">her</a>',
              },
              vendino: {
                title: "Vendino",
                summary:
                  "En moderne e-handelsplatform med specialdesignede møbelløsninger.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Vendinos WooCommerce-platform giver kunder mulighed for at tilpasse og købe møbler online. Designet er skandinavisk, moderne og let at navigere.",
                readmore:
                  'Udforsk Vendino <a href="https://vendino.com/da/" style="color: #c36060;">her</a>',
              },
              lampefeber: {
                title: "Lampefeber",
                summary:
                  "En flersproget webshop med eksklusiv belysning og designlamper til hele Europa.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Lampefebers hjemmeside er bygget på en skræddersyet CMS-løsning og tilbyder et elegant design til kunder, der søger kvalitetsbelysning.",
                readmore:
                  'Se Lampefeber <a href="https://da.lampefeber.com/" style="color: #c36060;">her</a>',
              },
              villahus: {
                title: "Villahus",
                summary:
                  "En stilren webshop med dørgreb, beslag og boligtilbehør i høj kvalitet.",
                toolsTitle: "Værktøjer brugt:",
                description:
                  "Villahus' platform fremviser et stort produktsortiment med filtrering, detaljerede produktsider og et stærkt fokus på brugervenlighed og konvertering.",
                readmore:
                  'Besøg Villahus <a href="https://www.villahus.dk/" style="color: #c36060;">her</a>',
              },
              cases: {
                title: "Udvalgte Projekter",
                readmore: "Læs Mere",
                viewCase: "Se Projekt",

                kokamok: {
                  title: "Kok Amok",
                  description:
                    "En brugervenlig WordPress-hjemmeside til en cateringvirksomhed.",
                },

                kinetic: {
                  title: "Kinetic Biofuel",
                  description:
                    "En flersproget, teknologisk WordPress-side til et grøn-energi firma.",
                },

                aalborg: {
                  title: "Aalborg City",
                  description:
                    "En eventfyldt hjemmeside med login og webshop funktioner.",
                },

                hotel: {
                  title: "Hotel Sankt Annæ",
                  description:
                    "Elegant og responsiv WordPress-side til et luksushotel i København.",
                },
                staal: {
                  title: "Brønderslev Stål",
                  description:
                    "Moderne firmaside med fokus på stålkonstruktioner og løsninger.",
                },
                vendino: {
                  title: "Vendino",
                  description:
                    "Stilfuld e-handelsplatform bygget med WooCommerce og specialtilpasninger.",
                },
                lampefeber: {
                  title: "Lampefeber",
                  description:
                    "Sofistikeret webshop med belysning, flot design og flersproget opsætning.",
                },
                villahus: {
                  title: "Villahus",
                  description:
                    "Eksklusiv webshop for dørgreb og interiør med et elegant udtryk.",
                },
              },
            },
          },
        },
      },
      function (err, t) {
        if (err) return console.error(err);

        loadIncludes(() => {
          // Re-apply i18n translations to the loaded content
          if (typeof i18next !== "undefined") {
            updateContent(); // Ensure i18next applies translations
          }

          const hamburgerBtn = document.getElementById("hamburgerBtn");
          const dropDown = document.getElementById("dropDown");

          if (hamburgerBtn && dropDown) {
            hamburgerBtn.addEventListener("click", () => {
              dropDown.classList.toggle("open");
              hamburgerBtn.classList.toggle("open");
            });
          }

          // SPLIDE INIT
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
                1320: {
                  perPage: 2,
                },
                800: {
                  perPage: 1,
                },
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
                1320: {
                  perPage: 2,
                },
                800: {
                  perPage: 1,
                },
              },
            }).mount();
          }

          // Apply translations to dynamically loaded content
          document.querySelectorAll("[data-i18n]").forEach((el) => {
            el.innerHTML = i18next.t(el.getAttribute("data-i18n"));
          });

          // GSAP ANIMATIONS (existing code)
          function myFunction(watchRes) {
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

            const mobile = !watchRes.matches;

            gsap.from(".context", {
              opacity: 0,
              y: 100,
              duration: 1,
            });

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

            // About section
            slideFrom("#aboutMeSectionR", -75);
            slideFrom("#aboutMeTextR", -75);
            slideFrom("#aboutMeSectionL", -75);
            slideFrom("#aboutMeTextL", -75);

            // Work examples (flip direction on desktop)
            gsap.from("#gsapWork1", {
              scrollTrigger: {
                trigger: "#gsapWork1",
                toggleActions: "play none none none",
              },
              opacity: 0,
              x: -75,
              delay: 0.5,
              duration: 0.5,
            });
            gsap.from("#gsapWork2", {
              scrollTrigger: {
                trigger: "#gsapWork2",
                toggleActions: "play",
              },
              opacity: 0,
              x: mobile ? -75 : 75,
              delay: 0.5,
              duration: 0.5,
            });
            gsap.from("#gsapWork3", {
              scrollTrigger: {
                trigger: "#gsapWork3",
                toggleActions: "play",
              },
              opacity: 0,
              x: -75,
              delay: 0.5,
              duration: 0.5,
            });
            gsap.from("#gsapWork4", {
              scrollTrigger: {
                trigger: "#gsapWork4",
                toggleActions: "play",
              },
              opacity: 0,
              x: mobile ? -75 : 75,
              delay: 0.5,
              duration: 0.5,
            });
          }

          const watchRes = window.matchMedia("(min-width: 1320px)");
          myFunction(watchRes);
          watchRes.addEventListener("change", () => myFunction(watchRes));

          // GSAP test animation
          gsap.from(".gsapTest", {
            opacity: 0,
            x: 100,
            duration: 1,
          });
        });
      }
    );

    i18next.on("languageChanged", () => {
      updateContent();
      lang++;

      const english = document.getElementById("englishLang");
      const danish = document.getElementById("danishLang");

      if (english && danish) {
        const isEven = lang % 2 === 0;
        english.style.display = isEven ? "none" : "block";
        danish.style.display = isEven ? "block" : "none";
      }
      if (
        typeof renderProject === "function" &&
        typeof projectData !== "undefined" &&
        projectData
      ) {
        renderProject(projectData);
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
