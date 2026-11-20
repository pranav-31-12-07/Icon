/**
 * Icon English School - Theme Manager
 * Executes immediately to prevent Flash of Unstyled / Wrong-Theme Content (FOUC)
 */

(function initTheme() {
  const STORAGE_KEY = 'ies-theme-preference';
  
  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  const activeTheme = getStoredTheme() || getSystemPreference();
  document.documentElement.setAttribute('data-theme', activeTheme);

  // Function to toggle or set theme globally
  window.IESTheme = {
    get: function() {
      return document.documentElement.getAttribute('data-theme') || 'light';
    },
    set: function(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {}
      
      // Update any theme toggle buttons on the page
      const toggleBtns = document.querySelectorAll('[data-action="toggle-theme"], #theme-toggle');
      toggleBtns.forEach(btn => {
        const isDark = theme === 'dark';
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      });

      // Dispatch custom event if any component needs to re-render charts or canvases
      window.dispatchEvent(new CustomEvent('ies-theme-changed', { detail: { theme } }));
    },
    toggle: function() {
      const current = this.get();
      const next = current === 'dark' ? 'light' : 'dark';
      this.set(next);
      return next;
    }
  };

  // Listen to OS theme changes if user hasn't explicitly set a preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!getStoredTheme()) {
        window.IESTheme.set(e.matches ? 'dark' : 'light');
      }
    });
  }
})();

