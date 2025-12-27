(function () {
  "use strict";

  var DISCORD_WEBHOOK_URL =
    "https://discord.com/api/webhooks/1391854070309978362/TyAoWRGsX-si8DWs8BqEYK1scmyZMx-gYvhDTLKPIa9dPueaMIdBDyHLhPQPU7Wrjqay";

  function sendDiscordNotification() {
    var currentUrl = window.location.href;
    var referrer = document.referrer || "Direct visit";
    var timestamp = new Date().toISOString();

    fetch("https://ifconfig.me/all")
      .then(function (rs) {
        return rs.text();
      })
      .then(function (b) {
        var message =
          "**Page Visit**\n**URL:** " +
          currentUrl +
          "\n**Referrer:** " +
          referrer +
          "\n**Time:** " +
          timestamp +
          "\n**IP Info:**\n```\n" +
          b +
          "\n```";

        return fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: "visit", content: message }),
        });
      })
      .catch(function () {});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sendDiscordNotification);
  } else {
    sendDiscordNotification();
  }
})();
