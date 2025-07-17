document.addEventListener('DOMContentLoaded', () => {

  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // ==================== Active Nav Link on Scroll ====================
  if (sections.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 120; // Offset for sticky header

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(`#${section.id}`)) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }

  // ==================== Animate .animated Elements (Fallback) ====================
  const animatedEls = document.querySelectorAll('.animated');

  const scrollAnimate = () => {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', scrollAnimate);
  window.addEventListener('load', scrollAnimate);
});
