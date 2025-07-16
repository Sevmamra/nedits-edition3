// ==========================
// Hero Background Slideshow
// ==========================
const heroSection = document.querySelector('.hero-section');
const bgImages = [
  'assets/images/hero-bg/hero-bg1.jpg',
  'assets/images/hero-bg/hero-bg2.jpg',
  'assets/images/hero-bg/hero-bg3.jpg'
];
let bgIndex = 0;

function cycleHeroBg() {
  heroSection.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % bgImages.length;
}
setInterval(cycleHeroBg, 4000);

// ==========================
// Services Card Glow + Routing
// ==========================
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // glow effect
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Navigate internally to corresponding service page
    const heading = card.querySelector('h3')?.textContent.toLowerCase().replace(/\s+/g, '-');
    if (heading) {
      window.location.href = `services/${heading}.html`;
    }
  });
});

// ==========================
// Smooth Anchor Scroll
// ==========================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      const target = document.querySelector(link.hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ==========================
// Scroll-based Manual Animation (fallback)
// ==========================
const animatedItems = document.querySelectorAll('.animated');

const triggerScrollAnimations = () => {
  animatedItems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', triggerScrollAnimations);
window.addEventListener('load', triggerScrollAnimations);

// ==========================
// AOS Animation Init (if available)
// ==========================
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out',
  });
}
