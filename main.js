// Nav toggle (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.textContent = open ? 'Fechar' : 'Menu';
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = 'Menu';
    });
  });
}

// Active nav link
const currentPage = window.location.pathname.replace(/\/$/, '') || '/index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (href === currentPage || (currentPage.includes(href) && href !== '' && href !== '/index.html')) {
    a.classList.add('active');
  }
  if ((currentPage === '' || currentPage === '/index.html' || currentPage === '/') && href === 'index.html') {
    a.classList.add('active');
  }
});

// Reveal on scroll
function initReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em até 48 horas.');
    contactForm.reset();
  });
}
