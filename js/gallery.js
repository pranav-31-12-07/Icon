/**
 * Icon English School - Gallery & Lightbox Engine
 * Category filtering, smooth transitions, keyboard navigation & touch gestures
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilter();
  initGalleryLightbox();
});

let currentGalleryItems = [];
let activeLightboxIndex = 0;

/**
 * Initializes Category Filter Pills
 */
function initGalleryFilter() {
  const filterChips = document.querySelectorAll('.filter-chip');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!filterChips.length || !galleryCards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const selectedCategory = chip.getAttribute('data-filter');

      // Update active chip state
      filterChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');

      // Filter cards with smooth scale/fade
      galleryCards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * Initializes Interactive Full-screen Lightbox
 */
function initGalleryLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!lightbox || !galleryCards.length) return;

  const lightboxImg = lightbox.querySelector('.lightbox-active-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption-text');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  const closeBtn = lightbox.querySelector('.lightbox-close-btn');
  const prevBtn = lightbox.querySelector('.lightbox-prev-btn');
  const nextBtn = lightbox.querySelector('.lightbox-next-btn');

  // Build items array from DOM
  currentGalleryItems = Array.from(galleryCards).map(card => ({
    src: card.getAttribute('data-full-img') || card.querySelector('img').getAttribute('src'),
    title: card.querySelector('.gallery-card-title') ? card.querySelector('.gallery-card-title').textContent : '',
    caption: card.getAttribute('data-caption') || '',
    category: card.querySelector('.gallery-card-category') ? card.querySelector('.gallery-card-category').textContent : ''
  }));

  function updateLightboxView(index) {
    if (index < 0) index = currentGalleryItems.length - 1;
    if (index >= currentGalleryItems.length) index = 0;
    activeLightboxIndex = index;

    const item = currentGalleryItems[activeLightboxIndex];
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<strong>${item.title}</strong> — <span style="color: var(--text-secondary);">${item.caption}</span>`;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${activeLightboxIndex + 1} of ${currentGalleryItems.length}`;
    }
  }

  function openLightbox(index) {
    updateLightboxView(index);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Click card to open
  galleryCards.forEach((card, idx) => {
    card.addEventListener('click', () => openLightbox(idx));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => updateLightboxView(activeLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateLightboxView(activeLightboxIndex + 1));

  // Backdrop click to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-container')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightboxView(activeLightboxIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightboxView(activeLightboxIndex + 1);
    }
  });

  // Touch Swipe Gesture on mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      // Swiped left -> next
      updateLightboxView(activeLightboxIndex + 1);
    }
    if (touchEndX > touchStartX + threshold) {
      // Swiped right -> prev
      updateLightboxView(activeLightboxIndex - 1);
    }
  }
}

