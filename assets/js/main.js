// Carolina Decor & More: small enhancements. The site works without JavaScript.
(function () {
  // Store hours, Eastern time. Days: 0 = Sunday ... 6 = Saturday. [open, close] in 24h, null = closed.
  // Source: store hours flyer (Tue to Sat, 10 AM to 5 PM). Keep in sync with the HTML and schema markup.
  var HOURS = { 0: null, 1: null, 2: [10, 17], 3: [10, 17], 4: [10, 17], 5: [10, 17], 6: [10, 17] };
  var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Current time in Surf City (America/New_York), regardless of the visitor's time zone
  function easternNow() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hour12: false
      }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(map.weekday);
      var hour = parseInt(map.hour, 10) % 24;
      return { day: day, time: hour + parseInt(map.minute, 10) / 60 };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), time: d.getHours() + d.getMinutes() / 60 };
    }
  }

  function fmt(h) { return (h > 12 ? h - 12 : h) + (h >= 12 ? " PM" : " AM"); }

  function nextOpening(now) {
    for (var i = 0; i < 8; i++) {
      var d = (now.day + i) % 7, h = HOURS[d];
      if (h && (i > 0 || now.time < h[0])) {
        var when = i === 0 ? "today" : i === 1 ? "tomorrow" : DAY_NAMES[d];
        return "Opens " + when + " at " + fmt(h[0]);
      }
    }
    return "";
  }

  var now = easternNow();
  var today = HOURS[now.day];
  var isOpen = !!(today && now.time >= today[0] && now.time < today[1]);

  document.querySelectorAll("[data-open-status]").forEach(function (el) {
    el.classList.add(isOpen ? "is-open" : "is-closed");
    el.textContent = isOpen ? "Open now until " + fmt(today[1]) : "Closed now · " + nextOpening(now);
  });

  document.querySelectorAll(".hours tr[data-day]").forEach(function (row) {
    if (row.getAttribute("data-day").split(",").indexOf(String(now.day)) !== -1) row.classList.add("is-today");
  });

  // Forms are not connected to a form service yet (draft). Show an honest message instead of pretending to send.
  document.querySelectorAll("form[data-draft-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Thanks! This form is still being set up, so your message was not sent. Please call us at 910-803-0473 in the meantime.";
        status.classList.add("is-visible");
        status.focus();
      }
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
