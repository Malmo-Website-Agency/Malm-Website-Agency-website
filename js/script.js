// Header background on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.style.display === 'flex';
    mainNav.style.display = isOpen ? 'none' : 'flex';
    mainNav.style.flexDirection = 'column';
    mainNav.style.position = 'absolute';
    mainNav.style.top = '64px';
    mainNav.style.right = '20px';
    mainNav.style.background = '#111117';
    mainNav.style.border = '1px solid rgba(255,255,255,0.08)';
    mainNav.style.borderRadius = '12px';
    mainNav.style.padding = '16px';
    mainNav.style.gap = '16px';
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el) => revealObserver.observe(el));

// Gold sparkle particles cascading from "Nya horisonter" toward the gold box above
const sparkleField = document.getElementById('sparkleField');
if (sparkleField) {
  const SPARK_COUNT = 22;
  for (let i = 0; i < SPARK_COUNT; i++) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.bottom = `${Math.random() * 20}px`;
    spark.style.animationDelay = `${Math.random() * 3.4}s`;
    spark.style.animationDuration = `${2.6 + Math.random() * 2.2}s`;
    spark.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
    sparkleField.appendChild(spark);
  }
}
