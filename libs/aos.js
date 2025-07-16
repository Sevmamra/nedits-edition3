document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-aos]');
  
  const animate = () => {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 80;

      if (isVisible) {
        el.classList.add('aos-animate');
      }
    });
  };

  // Support delay attributes
  elements.forEach(el => {
    const delay = el.getAttribute('data-aos-delay');
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  window.addEventListener('scroll', animate);
  window.addEventListener('load', animate);
});
