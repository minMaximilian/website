// Theme toggle functionality
(function() {
  // Get the current theme from localStorage or use browser preference
  function getStoredTheme() {
    return localStorage.getItem('theme');
  }

  // Get the browser's preferred color scheme
  function getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Get the theme to use (stored preference or browser preference)
  function getTheme() {
    const stored = getStoredTheme();
    return stored || getPreferredTheme();
  }

  // Set the theme on the document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update the toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('data-theme', theme);
    }
  }

  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  // Listen for changes in browser preference
  function listenForPreferenceChanges() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', () => {
      // Only update if no manual preference is stored
      if (!getStoredTheme()) {
        setTheme(getPreferredTheme());
      }
    });
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    listenForPreferenceChanges();
    
    // Add click handler to toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  });

  // Also initialize immediately in case DOMContentLoaded has already fired
  if (document.readyState === 'loading') {
    // Document is still loading, wait for DOMContentLoaded
  } else {
    // Document is already loaded
    initTheme();
  }
})(); 