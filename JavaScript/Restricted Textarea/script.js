const textfeld = document.getElementById("textarea");
const counter = document.getElementById("wordcount");
const max = 250;

const gespeicherteAnzahl = localStorage.getItem("buchstabenAnzahl");
if (gespeicherteAnzahl !== null) {
  counter.textContent = gespeicherteAnzahl;
}

textfeld.addEventListener("input", function () {
  const text = textfeld.value;

  const buchstabenAnzahl = text.replace(/\s/g, "").length;

  if (buchstabenAnzahl < max) {
    counter.textContent = buchstabenAnzahl;
    textfeld.style.borderColor = "black";
    textfeld.style.color = "black";
  } else {
    counter.textContent = buchstabenAnzahl;
    textfeld.style.borderColor = "red";
    textfeld.style.color = "red";
  }
  localStorage.setItem("buchstabenAnzahl", buchstabenAnzahl);
});
