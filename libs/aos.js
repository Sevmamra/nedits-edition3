document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-aos]');

  const initAOS = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('aos-animate');
      }
    });
  };

  // Delay support
  elements.forEach(el => {
    const delay = el.getAttribute('data-aos-delay');
    if (delay) {
      el.style.setProperty('--aos-delay', `${delay}ms`);
    }
  });

  window.addEventListener('scroll', initAOS);
  window.addEventListener('load', initAOS);
});
