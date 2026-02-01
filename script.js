const dashboard = document.querySelector('.dashboard');

window.addEventListener('scroll', () => {
  const sectionTop = dashboard.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    dashboard.classList.add('show');
  }
});
