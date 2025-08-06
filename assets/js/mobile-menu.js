document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const header = document.querySelector("header");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  function setMenuOpen(isOpen) {
    if (!header || !mobileMenu || !mobileMenuToggle) return;
    mobileMenuToggle.classList.toggle("active", isOpen);
    mobileMenu.classList.toggle("active", isOpen);
    header.classList.toggle("menu-open", isOpen);
    root.classList.toggle("menu-open", isOpen);
  }

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("active");
      setMenuOpen(isOpen);
    });

    document.addEventListener("click", function (event) {
      if (
        !mobileMenuToggle.contains(event.target) &&
        !mobileMenu.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });
  }
});
