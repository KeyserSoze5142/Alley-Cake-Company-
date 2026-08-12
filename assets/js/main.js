/* Sarah's Alley Cake Co. — site scripts (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Scroll-reveal animation */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Gallery category filter */
  var chips = document.querySelectorAll(".chip[data-filter]");
  var figures = document.querySelectorAll(".gallery-grid figure[data-category]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var filter = chip.getAttribute("data-filter");
      figures.forEach(function (fig) {
        var show = filter === "all" || fig.getAttribute("data-category") === filter;
        fig.style.display = show ? "" : "none";
      });
    });
  });

  /* Order form: graceful fallback to email if no form endpoint configured */
  var form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action.indexOf("FORM_ID") !== -1) {
        /* Formspree not configured yet — build a pre-filled email instead */
        e.preventDefault();
        var get = function (id) {
          var el = form.querySelector("#" + id);
          return el && el.value ? el.value : "—";
        };
        var subject = encodeURIComponent("Custom Order Request — " + get("of-name"));
        var body = encodeURIComponent(
          "Name: " + get("of-name") + "\n" +
          "Phone: " + get("of-phone") + "\n" +
          "Email: " + get("of-email") + "\n" +
          "Date needed: " + get("of-date") + "\n" +
          "Occasion: " + get("of-occasion") + "\n" +
          "Serves (approx.): " + get("of-serves") + "\n\n" +
          "Details:\n" + get("of-details") + "\n\n" +
          "(Sent from the Sarah's Alley Cake Co. website order form)"
        );
        window.location.href = "mailto:alleycakecompany@gmail.com?subject=" + subject + "&body=" + body;
        var note = document.getElementById("form-status");
        if (note) {
          note.textContent = "Opening your email app with your request pre-filled — just press send! Or call us at (205) 345-8610.";
        }
      }
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
