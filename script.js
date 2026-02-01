const dashboard = document.querySelector('.dashboard');

window.addEventListener('scroll', () => {
  const sectionTop = dashboard.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    dashboard.classList.add('show');
  }
});
const cards = document.querySelectorAll('.stat-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
