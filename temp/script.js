document.getElementById("greetingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = name ? `Hello, ${name}! 👋 Welcome to the site.` : "Hello there!";
  document.getElementById("greetingMessage").textContent = message;
});
