// Page-specific elements only exist on index.html, so guard each listener.
const on = (selector, event, handler) => {
  const el = document.querySelector(selector);
  if (el) el.addEventListener(event, handler);
};

// Start Trial now asks for credit card info
on("#startTrialBtn", "click", () => {
  document.getElementById("creditCardForm").style.display = "block";
});

// Submit fake credit card
on("#submitCardBtn", "click", () => {
  alert(t("msg.trial"));
});

// "Trick Me Instead" - inherits old behavior
on("#darkTrickBtn", "click", () => {
  const wantsTrial = confirm(t("msg.confirm"));
  if (!wantsTrial) {
    alert(t("msg.sad"));
  } else {
    showModal();
  }
});

// Disguised ad redirect
on("#adBox", "click", () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with real ad
});

on("#adBox2", "click", () => {
  window.location.href = "https://www.youtube.com/watch?v=fArweHa6HzU"; // Replace with real ad
});

// Fake form submission trap with spinner
on("#submitBtn", "click", () => {
  const btn = document.getElementById("submitBtn");
  btn.innerHTML = t("msg.processing");
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = t("form.continue");
    btn.disabled = false;
    alert(t("msg.thanks"));
  }, 2500);
});

// Hidden unsubscribe trap
on(".unsubscribe", "click", (e) => {
  e.preventDefault();
  alert(t("msg.unsub"));
});

// --- Modal Trap Implementation ---
function showModal() {
  const modal = document.createElement("div");
  modal.id = "trapModal";
  modal.innerHTML = `
    <div id="modalContent">
      <h2>${t("modal.h2")}</h2>
      <p>${t("modal.p")}</p>
      <button id="yesTrap">${t("modal.yes")}</button>
      <button id="noTrap">${t("modal.no")}</button>
    </div>
  `;
  document.body.appendChild(modal);

  // Styling lives in styles.css (#trapModal, #modalContent)

  // Trap buttons
  modal.querySelector("#yesTrap").addEventListener("click", () => {
    alert(t("msg.signed"));
    modal.remove();
  });

  const noTrap = modal.querySelector("#noTrap");
  const teleport = () => {
    // Jump to a random spot anywhere on the screen
    const maxX = window.innerWidth - noTrap.offsetWidth;
    const maxY = window.innerHeight - noTrap.offsetHeight;
    noTrap.style.position = "fixed";
    noTrap.style.margin = "0";
    noTrap.style.left = `${Math.floor(Math.random() * Math.max(maxX, 0))}px`;
    noTrap.style.top = `${Math.floor(Math.random() * Math.max(maxY, 0))}px`;
  };
  noTrap.addEventListener("mouseover", teleport);
  noTrap.addEventListener("touchstart", teleport, { passive: true });

  noTrap.addEventListener("click", () => {
    alert(t("msg.redirect"));
    modal.remove();
    window.location.href = "https://www.youtube.com/watch?v=RXKabdUBiWM";
  });
}
