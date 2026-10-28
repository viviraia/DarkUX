// Start Trial now asks for credit card info
document.getElementById("startTrialBtn")?.addEventListener("click", () => {
    document.getElementById("creditCardForm").style.display = "block";
  });
  
  // Submit fake credit card
  document.getElementById("submitCardBtn")?.addEventListener("click", () => {
    alert(t("alert.trialStarted"));
  });
  
  // "Trick Me Instead" - inherits old behavior
  document.getElementById("darkTrickBtn")?.addEventListener("click", () => {
    const wantsTrial = confirm(t("confirm.missOut"));
    if (!wantsTrial) {
      alert(t("alert.missingOut"));
    } else {
      showModal();
    }
  });
  
  // Disguised ad redirect
  document.getElementById("adBox")?.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with real ad
  });

  document.getElementById("adBox2")?.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=fArweHa6HzU"; // Replace with real ad
  });
  
  // Fake form submission trap with spinner
  document.getElementById("submitBtn")?.addEventListener("click", () => {
    const btn = document.getElementById("submitBtn");
    btn.innerHTML = t("button.processing");
    btn.disabled = true;
  
    setTimeout(() => {
      btn.innerHTML = t("home.continue");
      btn.disabled = false;
      alert(t("alert.signedUp"));
    }, 2500);
  });
  
  // Hidden unsubscribe trap
  const unsubscribe = document.querySelector(".unsubscribe");
  unsubscribe.addEventListener("click", (e) => {
    e.preventDefault();
    alert(t("alert.unsubscribe"));
  });
  
  // --- Modal Trap Implementation ---
  function showModal() {
    const modal = document.createElement("div");
    modal.id = "trapModal";
    modal.innerHTML = `
      <div id="modalContent">
        <h2>${t("modal.title")}</h2>
        <p>${t("modal.text")}</p>
        <button id="yesTrap">${t("modal.yes")}</button>
        <button id="noTrap">${t("modal.no")}</button>
      </div>
    `;
    document.body.appendChild(modal);
  
    // Styling
    Object.assign(modal.style, {
      position: "fixed",
      top: "0", left: "0", width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex", justifyContent: "center", alignItems: "center",
      zIndex: "1000"
    });
    const content = modal.querySelector("#modalContent");
    Object.assign(content.style, {
      background: "#fff", padding: "2rem", borderRadius: "8px", textAlign: "center"
    });
  
    // Trap buttons
    modal.querySelector("#yesTrap").addEventListener("click", () => {
      alert(t("alert.welcomePremium"));
      modal.remove();
    });
  
    const noTrap = modal.querySelector("#noTrap");
    noTrap.addEventListener("mouseover", () => {
      // Teleport to a random spot anywhere on the screen
      const x = Math.floor(Math.random() * (window.innerWidth - noTrap.offsetWidth));
      const y = Math.floor(Math.random() * (window.innerHeight - noTrap.offsetHeight));
      Object.assign(noTrap.style, { position: "fixed", left: `${x}px`, top: `${y}px`, margin: "0" });

    });

    modal.querySelector("#noTrap").addEventListener("click", () => {
      alert(t("alert.didNotWork"));
      window.location.href = "https://www.youtube.com/watch?v=RXKabdUBiWM"
        modal.remove();
      });


  }