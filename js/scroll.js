document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const animatedEls = document.querySelectorAll('.animated');

  // ========== Active Link on Scroll ==========
  const highlightNav = () => {
    const scrollY = window.pageYOffset + 100;

    sections.forEach(section => {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
  window.addEventListener('load', highlightNav);

  // ========== Animate .animated Elements (Fallback if no AOS) ==========
  const revealAnimated = () => {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealAnimated);
  window.addEventListener('load', revealAnimated);
});
