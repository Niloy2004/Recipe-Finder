// ============================================================
// contact.js — logic specific to contact.html
// NOTE: This is a static site with no backend/server, so the form
// can't actually send an email by itself. It opens the visitor's
// own email app pre-filled with their message using a mailto link.
// Replace YOUR_EMAIL_HERE below with your real email address.
// ============================================================
const YOUR_EMAIL_HERE = "your-email@example.com";

const contactForm = document.getElementById("contactForm");
const contactConfirm = document.getElementById("contactConfirm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("contactName").value.trim();
  let email = document.getElementById("contactEmail").value.trim();
  let message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) return;

  let subject = encodeURIComponent("Message from " + name + " (Recipe Finder)");
  let body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  let mailtoLink = "mailto:" + YOUR_EMAIL_HERE + "?subject=" + subject + "&body=" + body;

  window.location.href = mailtoLink;

  contactConfirm.style.display = "block";
  contactForm.reset();
});