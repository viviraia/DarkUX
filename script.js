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
      alert("You're signed up! Welcome to Premium+ 🤝");
      modal.remove();
    });
  
    const noTrap = modal.querySelector("#noTrap");
    noTrap.addEventListener("mouseover", () => {
      // Move button randomly
      const x = Math.floor(Math.random() * 200 - 100);
      const y = Math.floor(Math.random() * 100 - 50);
      noTrap.style.transform = `translate(${x}px, ${y}px)`;

    });

    modal.querySelector("#noTrap").addEventListener("click", () => {
      alert("This action did not work, redirecting...");
      window.location.href = "https://www.youtube.com/watch?v=RXKabdUBiWM"
        modal.remove();
      });


  }