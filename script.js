// Dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Next buttons
  document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Scroll reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll(".content").forEach(section => {
    observer.observe(section);
  });
  