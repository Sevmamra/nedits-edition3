// ==================== Hero Background Slideshow ====================
const heroSection = document.querySelector('.hero-section');
const bgImages = [
  'assets/images/hero-bg/hero-bg1.jpg',
  'assets/images/hero-bg/hero-bg2.jpg',
  'assets/images/hero-bg/hero-bg3.jpg'
];
let bgIndex = 0;

// Preload images
bgImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

function cycleHeroBg() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
    bgIndex = (bgIndex + 1) % bgImages.length;
  }
}
setInterval(cycleHeroBg, 4000);

// ==================== Service Card Glow & SPA Load ====================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    serviceCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const service = card.getAttribute('data-service');
    fetch(`services/${service}.html`)
      .then(res => res.text())
      .then(html => {
        document.body.innerHTML = html; // Replace the page with service detail
        window.scrollTo(0,0);
      });
  });
});

// ==================== Smooth Scroll for Navbar Links ====================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash && document.querySelector(link.hash)) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== AOS Initialization ====================
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    once: true
  });
}
