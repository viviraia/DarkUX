// Start Trial now asks for credit card info
document.getElementById("startTrialBtn").addEventListener("click", () => {
    document.getElementById("creditCardForm").style.display = "block";
  });
  
  // Submit fake credit card
  document.getElementById("submitCardBtn").addEventListener("click", () => {
    alert("Your trial has started! Your card will be charged $29.99/month after 14 days. We will NOT remind you.");
  });
  
  // "Trick Me Instead" - inherits old behavior
  document.getElementById("darkTrickBtn").addEventListener("click", () => {
    const wantsTrial = confirm("Are you sure you want to miss out on exclusive benefits?");
    if (!wantsTrial) {
      alert("That's okay. You'll be missing out though 😢");
    } else {
      showModal();
    }
  });
  
  // Disguised ad redirect
  document.getElementById("adBox").addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with real ad
  });

  document.getElementById("adBox2").addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=fArweHa6HzU"; // Replace with real ad
  });
  
  // Fake form submission trap with spinner
  document.getElementById("submitBtn").addEventListener("click", () => {
    const btn = document.getElementById("submitBtn");
    btn.innerHTML = "Processing...";
    btn.disabled = true;
  
    setTimeout(() => {
      btn.innerHTML = "Continue";
      btn.disabled = false;
      alert("Thanks for signing up! Also, 7 promotional lists just gained a new friend 👀");
    }, 2500);
  });
  
  // Hidden unsubscribe trap
  const unsubscribe = document.querySelector(".unsubscribe");
  unsubscribe.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Unsubscribing requires a phone call. Hold time may exceed 2 hours.");
  });
  
  // --- Modal Trap Implementation ---
  function showModal() {
    const modal = document.createElement("div");
    modal.id = "trapModal";
    modal.innerHTML = `
      <div id="modalContent">
        <h2>Wait! You're Leaving Savings Behind!</h2>
        <p>Subscribing now guarantees exclusive benefits you won’t get later.</p>
        <button id="yesTrap">Yes, Sign Me Up</button>
        <button id="noTrap">No, I Enjoy Overpaying</button>
      </div>
    `;
    document.body.appendChild(modal);
  
    // Styling lives in styles.css (#trapModal, #modalContent)

    // Trap buttons
    modal.querySelector("#yesTrap").addEventListener("click", () => {
      alert("You're signed up! Welcome to Premium+ 🤝");
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

    modal.querySelector("#noTrap").addEventListener("click", () => {
      alert("This action did not work, redirecting...");
      modal.remove();
      window.location.href = "https://www.youtube.com/watch?v=RXKabdUBiWM";
    });


  }