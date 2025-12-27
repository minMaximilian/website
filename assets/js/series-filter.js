(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".series-btn");
    var posts = document.querySelectorAll(".post-preview");
    var announcer;

    function announce(msg) {
      if (!announcer) {
        announcer = document.createElement("div");
        announcer.id = "sr-announcer";
        announcer.setAttribute("role", "status");
        announcer.setAttribute("aria-live", "polite");
        announcer.className = "visually-hidden";
        document.body.appendChild(announcer);
      }
      announcer.textContent = msg;
    }

    function filter(series) {
      var count = 0;
      for (var i = 0; i < buttons.length; i++) {
        var active = buttons[i].dataset.series === series;
        buttons[i].classList.toggle("active", active);
        buttons[i].setAttribute("aria-pressed", active ? "true" : "false");
      }
      for (var j = 0; j < posts.length; j++) {
        var show = series === "all" || posts[j].dataset.series === series;
        posts[j].classList.toggle("hidden", !show);
        posts[j].setAttribute("aria-hidden", show ? "false" : "true");
        if (show) count++;
      }
      announce("Showing " + count + " post" + (count !== 1 ? "s" : ""));
    }

    function checkHash() {
      var hash = window.location.hash;
      if (hash.indexOf("#series-") === 0) {
        filter(hash.substring(8));
      }
    }

    checkHash();

    for (var k = 0; k < buttons.length; k++) {
      buttons[k].addEventListener("click", function () {
        var s = this.dataset.series;
        filter(s);
        if (s === "all") {
          history.pushState(null, null, window.location.pathname);
        } else {
          history.pushState(null, null, "#series-" + s);
        }
      });
    }

    window.addEventListener("hashchange", checkHash);
  });
})();
