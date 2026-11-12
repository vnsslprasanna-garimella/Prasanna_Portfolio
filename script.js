
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

// Mobile navigation
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent =
    navigation.classList.contains("open") ? "✕" : "☰";
});

// Close navigation after selecting a link
document.querySelectorAll("#navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

// Automatically update copyright year
document.querySelector("#year").textContent =
  new Date().getFullYear();

// Reveal elements on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  ".section, .skill-card, .project-card, .cert-item, .timeline article"
).forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});
