/**
 * Icon English School - Shared Components Controller
 * Manages active navigation, mobile drawer, theme toggles, floating action buttons, and modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initActiveNav();
  initThemeToggles();
  initMobileDrawer();
  initScrollTopButton();
  initScrollProgressBar();
});

/**
 * Automatically detects current HTML page and applies `.active` class to matching links
 */
function initActiveNav() {
  const currentPath = window.location.pathname;
  let filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  if (filename === '') filename = 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === filename || (filename === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Initializes all theme toggle buttons across the page
 */
function initThemeToggles() {
  const toggleButtons = document.querySelectorAll('[data-action="toggle-theme"], #theme-toggle');
  
  function updateButtonsUI(theme) {
    const isDark = theme === 'dark';
    toggleButtons.forEach(btn => {
      btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      
      // Update sun/moon icon visibility if present
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'none' : 'block';
        moonIcon.style.display = isDark ? 'block' : 'none';
      }
    });
  }

  // Set initial UI
  if (window.IESTheme) {
    updateButtonsUI(window.IESTheme.get());
  }

  // Attach click listener
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.IESTheme) {
        const nextTheme = window.IESTheme.toggle();
        updateButtonsUI(nextTheme);
      }
    });
  });

  // Listen for external theme updates
  window.addEventListener('ies-theme-changed', (e) => {
    if (e.detail && e.detail.theme) {
      updateButtonsUI(e.detail.theme);
    }
  });
}

/**
 * Controls the slide-in mobile navigation drawer and focus management
 */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Focus the close button or first link inside drawer
    setTimeout(() => {
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  backdrop.addEventListener('click', closeDrawer);

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Close when clicking any nav link inside drawer
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * Initializes the floating Back to Top button
 */
function initScrollTopButton() {
  const scrollTopBtn = document.querySelector('.floating-scrolltop');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 320) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Scroll Progress Bar at the top of the browser
 */
function initScrollProgressBar() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

