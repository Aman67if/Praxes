var openOrClose = 0;
const menuOpenClose = document.querySelector(".menu-open-close");
const menuImg = document.querySelector(".menuImg");

menuOpenClose.addEventListener("click", () => {
  if (openOrClose === 0) {
    menuImg.src = "close.svg";
    openOrClose = 1;
    gsap.to("#mobile-menu", {
      height: "auto",
      display: "flex",
      visibility: "visible",
      opacity: 1,
      duration: 0.32,
    });
  } else {
    menuImg.src = "menu.svg";
    openOrClose = 0;
    gsap.to("#mobile-menu", {
      height: 0,
      opacity: 0,
      duration: 0.28,
      onComplete: () => {
        document.querySelector("#mobile-menu").style.display = "none";
        document.querySelector("#mobile-menu").style.visibility = "hidden";
      },
    });
  }
});

// Highlight active nav link
(function () {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document
    .querySelectorAll("#menu a .btn, #mobile-menu a .btn")
    .forEach((btn) => {
      const href = btn.closest("a").getAttribute("href");
      if (href === page) btn.classList.add("active");
    });
})();

/* ---- Password show/hide toggle ---- */
function togglePwd(fieldId, btn) {
  const field = document.getElementById(fieldId);
  if (field.type === "password") {
    field.type = "text";
    btn.textContent = "🙈";
  } else {
    field.type = "password";
    btn.textContent = "👁";
  }
}

/* ---- Password strength indicator ---- */
function checkStrength(val) {
  const bars = [bar1, bar2, bar3, bar4];
  const label = document.getElementById("strength-label");
  const classes = ["", "weak", "medium", "medium", "strong"];

  // Reset
  bars.forEach((b) => {
    b.className = "strength-bar";
  });

  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", "weak", "medium", "medium", "strong"];

  for (let i = 0; i < score; i++) {
    bars[i].classList.add(colors[score]);
  }

  label.textContent = val.length ? labels[score] : "";
  label.style.color =
    score === 4 ? "#7dad9d" : score >= 2 ? "#f59e0b" : "#ef4444";
}

/* ---- Confirm password match hint ---- */
function checkMatch() {
  const pwd = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;
  const hint = document.getElementById("match-hint");

  if (!confirm) {
    hint.textContent = "";
    return;
  }

  if (pwd === confirm) {
    hint.textContent = "✓ Passwords match";
    hint.style.color = "#7dad9d";
  } else {
    hint.textContent = "✗ Passwords do not match";
    hint.style.color = "#ef4444";
  }
}

/* ---- Register button handler ---- */
function handleRegister() {
  const terms = document.getElementById("terms-check");
  if (!terms.checked) {
    terms.closest(".reg-terms").style.outline = "2px solid #ef4444";
    terms.closest(".reg-terms").style.borderRadius = "8px";
    setTimeout(() => {
      terms.closest(".reg-terms").style.outline = "none";
    }, 2000);
    return;
  }
}
