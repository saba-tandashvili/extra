const ratesup = document.querySelectorAll(".ratesup");
const ratesdown = document.querySelectorAll(".ratesdown");
const deleter = document.querySelector(".delete");
const deleted = document.querySelector(".deleted");

function Othercoms() {
    ratesup.forEach((button1) => {
        button1.addEventListener("click", () => {
          let rates = button1.nextElementSibling;
          rates.innerHTML++;
          let currentValue = rates.innerHTML;
          if (currentValue > 20) {
            rates.innerHTML = 20;
          }
        });
      });
      
      ratesdown.forEach((button2) => {
        button2.addEventListener("click", () => {
          let rates = button2.previousElementSibling;
          let currentValue = rates.innerHTML;
      
          if (currentValue > 1) {
            rates.innerHTML--;
          }
        });
      });
      
      deleter.addEventListener("click", () => {
        deleted.style.display = "none";
      });
}

Othercoms();

export default Othercoms