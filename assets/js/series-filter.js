document.addEventListener("DOMContentLoaded", function () {
  const seriesButtons = document.querySelectorAll(".series-btn");
  const postPreviews = document.querySelectorAll(".post-preview");

  function filterPosts(selectedSeries) {
    seriesButtons.forEach((btn) => btn.classList.remove("active"));

    const targetButton = document.querySelector(
      `[data-series="${selectedSeries}"]`
    );
    if (targetButton) {
      targetButton.classList.add("active");
    }

    postPreviews.forEach((post) => {
      const postSeries = post.dataset.series;

      if (selectedSeries === "all" || postSeries === selectedSeries) {
        post.classList.remove("hidden");
      } else {
        post.classList.add("hidden");
      }
    });
  }

  function checkUrlFragment() {
    const hash = window.location.hash;
    if (hash.startsWith("#series-")) {
      const seriesName = hash.substring(8);
      filterPosts(seriesName);
    }
  }

  checkUrlFragment();

  seriesButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedSeries = this.dataset.series;
      filterPosts(selectedSeries);

      if (selectedSeries === "all") {
        history.pushState(null, null, window.location.pathname);
      } else {
        history.pushState(null, null, `#series-${selectedSeries}`);
      }
    });
  });

  window.addEventListener("hashchange", checkUrlFragment);
});
