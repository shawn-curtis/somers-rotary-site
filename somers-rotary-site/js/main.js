/* ==========================================================================
   Rotary Club of Somers, CT — main.js
   Vanilla JS. Handles: mobile hamburger menu (accessible), footer year,
   and front-end contact-form validation/feedback.
   No dependencies, no build step.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Mobile navigation (hamburger) ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    var closeMenu = function () {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    var openMenu = function () {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) { closeMenu(); } else { openMenu(); }
    });

    // Close when a link is chosen (mobile)
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { closeMenu(); }
    });

    // Close on Escape and return focus to the toggle button
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    // Reset menu state when resizing up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 860) { closeMenu(); }
    });
  }

  /* ---------- Auto-update footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Contact form (front-end only) ----------
     This performs basic client-side validation and shows a friendly message.
     It does NOT actually send email on its own.

     TO MAKE IT LIVE, pick ONE option:

     A) Formspree (easiest, free tier):
        1. Create a form at https://formspree.io and copy your form ID.
        2. In contact.html, set the <form> attributes:
             action="https://formspree.io/f/YOUR_FORM_ID"  method="POST"
        3. Delete/uncomment the fetch() block below so submissions POST to Formspree.

     B) Plain mailto (no service):
        Set the form's action to "mailto:info@somersrotary.org" — note this
        opens the visitor's email app and is less reliable.

     C) Netlify Forms (if hosting on Netlify):
        Add  netlify  and  name="contact"  to the <form> tag; Netlify captures it.
  --------------------------------------------------------------------------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      // Front-end demo behavior. Remove this preventDefault when wiring a real
      // backend via the form's action attribute (Option A/B/C above).
      e.preventDefault();

      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");

      status.className = "form-status";

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        status.textContent = "Please fill in your name, email, and message.";
        status.classList.add("is-error");
        return;
      }
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("is-error");
        return;
      }

      /* --- Real submission via Formspree (uncomment to enable Option A) ---
      var data = new FormData(form);
      fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            status.textContent = "Thank you! Your message has been sent.";
            status.classList.add("is-success");
          } else {
            status.textContent = "Sorry, something went wrong. Please email us directly.";
            status.classList.add("is-error");
          }
        })
        .catch(function () {
          status.textContent = "Network error. Please try again later.";
          status.classList.add("is-error");
        });
      return;
      ------------------------------------------------------------------- */

      // Demo success message (front-end only)
      form.reset();
      status.textContent = "Thank you! This is a demo form — connect Formspree or email to receive messages (see comments in js/main.js).";
      status.classList.add("is-success");
    });
  }
})();
