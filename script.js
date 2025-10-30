const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});


document.addEventListener("scroll", () => {
  const steps = document.querySelectorAll(".step");
  steps.forEach(step => {
    const rect = step.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      step.classList.add("visible");
    }
  });
});

