/**
 * Icon English School - Animation Engine
 * Scroll-Reveals, Dropping Entrances, Counter Rollups & Micro-Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounterRollup();
  initDroppingEntrances();
});

/**
 * Observes elements with reveal classes and reveals them smoothly on scroll
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-up, .reveal-drop, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale'
  );

  if (!revealElements.length) return;

  // Check if browser supports IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal all immediately
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Once revealed, no need to re-observe unless reset
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * Animated number counters that count up when scrolled into view
 */
function initCounterRollup() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNumber = parseInt(el.getAttribute('data-counter-target'), 10);
        const duration = parseInt(el.getAttribute('data-counter-duration') || '1600', 10);
        const suffix = el.getAttribute('data-counter-suffix') || '';
        
        animateCount(el, 0, targetNumber, duration, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => counterObserver.observe(el));

  function animateCount(element, start, end, duration, suffix) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * (end - start) + start);
      element.textContent = currentVal.toLocaleString() + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end.toLocaleString() + suffix;
      }
    }

    window.requestAnimationFrame(step);
  }
}

/**
 * Automatically applies dropping effect to page hero elements and top announcement ribbon
 */
function initDroppingEntrances() {
  // Hero elements staggered drop
  const heroDropTargets = document.querySelectorAll('.hero-drop-target');
  heroDropTargets.forEach((el, index) => {
    el.style.animationDelay = `${index * 120}ms`;
    el.classList.add('animate-drop-in');
  });
}

