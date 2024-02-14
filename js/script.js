document.addEventListener("DOMContentLoaded", function () {
  const autoText = ["Web Developer", "Mod Developer", "Nerd"];
  const autoTyping = new AutoTyping(".autoText", autoText, {
    typeSpeed: 50,
    deleteSpeed: 50,
    waitBeforeDelete: 2000,
    waitBetweenWords: 500,
  });
  autoTyping.start();
});
