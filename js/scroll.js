document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  // Highlight nav link on scroll
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(`#${section.id}`)) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Animate elements with .animated class if AOS is not loaded
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
