document.addEventListener("DOMContentLoaded", function () {
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
  gsap.from("#aboutMeSectionR", {
    scrollTrigger: {
      trigger: "#aboutMeSectionR",
      toggleActions: "play",
    },
    opacity: 0,
    x: -75,
    delay: 0.5,
    duration: 0.7,
  });
  gsap.from("#aboutMeTextR", {
    scrollTrigger: {
      trigger: "#aboutMeTextR",
      toggleActions: "play",
    },
    opacity: 0,
    x: -75,
    delay: 0.5,
    duration: 0.7,
  });
  gsap.from("#aboutMeSectionL", {
    scrollTrigger: {
      trigger: "#aboutMeSectionL",
      toggleActions: "play",
    },
    opacity: 0,
    x: -75,
    delay: 0.5,
    duration: 0.7,
  });
  gsap.from("#aboutMeTextL", {
    scrollTrigger: {
      trigger: "#aboutMeTextL",
      toggleActions: "play",
    },
    opacity: 0,
    x: -75,
    delay: 0.5,
    duration: 0.7,
  });
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
    x: 75,
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
    x: 75,
    delay: 0.5,
    duration: 0.5,
  });

  var splide = new Splide(".splide", {
    type: "loop",
    gap: "20px",
    perPage: 3,
    focus: 0,
    omitEnd: 1,
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  });
  var splide2 = new Splide("#splide2", {
    type: "loop",
    height: "autoHeight",
    gap: "20px",
    perPage: 3,
    focus: 0,
    omitEnd: 1,
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  });
  splide2.mount();
  splide.mount();
});

gsap.from(".gsapTest", {
  opacity: 0,
  x: 100,
  duration: 1,
});
