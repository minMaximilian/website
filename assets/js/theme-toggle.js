(function () {
  function getStoredTheme() {
    return localStorage.getItem("theme");
  }

  function getPreferredTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getTheme() {
    var stored = getStoredTheme();
    return stored || getPreferredTheme();
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.setAttribute("data-theme", theme);
    }
  }

  function toggleTheme() {
    var currentTheme = getTheme();
    var newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  function initTheme() {
    setTheme(getTheme());
  }

  function listenForPreferenceChanges() {
    var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", function () {
      if (!getStoredTheme()) {
        setTheme(getPreferredTheme());
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    listenForPreferenceChanges();
    var toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTheme);
    }
  });

  if (document.readyState !== "loading") {
    initTheme();
  }
})();
