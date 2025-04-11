// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// GSAP Entrance Animations
gsap.from(".hero h1", { duration: 1.2, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1.2, delay: 0.5, y: -20, opacity: 0, ease: "power2.out" });
gsap.from(".cta", { duration: 1.2, delay: 0.8, scale: 0.8, opacity: 0, ease: "power2.out" });

// Basic Form Validation for Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Clear previous error messages
  document.querySelectorAll(".form-group small").forEach((el) => {
    el.style.display = "none";
  });
  
  let valid = true;
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  
  // Name validation: not empty, at least 2 characters
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Please enter your name (at least 2 characters)");
    valid = false;
  }
  
  // Email validation: basic regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email");
    valid = false;
  }
  
  // Message validation: not empty
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message cannot be empty");
    valid = false;
  }
  
  if (valid) {
    alert("Thank you for contacting us!");
    contactForm.reset();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.textContent = message;
  small.style.display = "block";
}
