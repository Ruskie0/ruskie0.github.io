document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".project-hero-overlay");
  if (overlay) {
    gsap.fromTo(
      overlay,
      { opacity: 0, x: -50 }, // start at x: -50
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }
});
