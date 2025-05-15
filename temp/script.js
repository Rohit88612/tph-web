// Greeting form interaction
document.getElementById("greetingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = name ? `Hello, ${name}! 👋 Welcome to the site.` : "Hello there!";
  const messageEl = document.getElementById("greetingMessage");
  messageEl.textContent = message;
  messageEl.style.opacity = 1;
});

// Fade-in on scroll
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
