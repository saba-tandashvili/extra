const checkbox = document.querySelector(".checkbox");
const bp = document.querySelector(".bp");
const pp = document.querySelector(".pp");
const mp = document.querySelector(".mp");

function updatePrices() {
  if (checkbox.checked) {
    bp.textContent = "$19.99";
    pp.textContent = "$24.99";
    mp.textContent = "$39.99";
  } else {
    bp.textContent = "$199.99";
    pp.textContent = "$249.99";
    mp.textContent = "$399.99";
  }
}

// Set initial prices on page load
updatePrices();

// Update prices when checkbox is toggled
checkbox.addEventListener("change", updatePrices);
