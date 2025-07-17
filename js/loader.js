document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      const service = card.getAttribute('data-service');

      // Active glow effect
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Load service detail dynamically
      fetch(`services/${service}.html`)
        .then(res => res.text())
        .then(html => {
          document.body.innerHTML = html;
          window.scrollTo(0, 0);
        })
        .catch(() => {
          alert('Service page not found.');
        });
    });
  });
});
