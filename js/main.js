// ============== Hero Background Slideshow ==============
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

// ============== Service Card Glow Toggle ==============
const cards = document.querySelectorAll('.service-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// ============== Scroll to Anchor (Smooth) ==============
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ============== Optional: Manual Animation Trigger ==============
const animatedItems = document.querySelectorAll('.animated');

const onScroll = () => {
  animatedItems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// ============== AOS Fallback ==============
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true
  });
}
