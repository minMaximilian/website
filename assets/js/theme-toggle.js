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
    const stored = getStoredTheme();
    return stored || getPreferredTheme();
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.setAttribute("data-theme", theme);
    }
  }

  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  function listenForPreferenceChanges() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", () => {
      if (!getStoredTheme()) {
        setTheme(getPreferredTheme());
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    listenForPreferenceChanges();

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTheme);
    }
  });

  if (document.readyState === "loading") {
  } else {
    initTheme();
  }
})();
