// Fono Spalva:
// Sukurkite tris mygtukus su tekstais: "Blue", "Red", "White"
// Paspaudus ant kiekvieno mygtuko pakeiskite puslapio fono spalvą atitinkamomis spalvomis.

document.querySelector("#blue").addEventListener("click", function onClick() {
  // 👇 change background color
  document.body.style.backgroundColor = "blue";
});

document.querySelector("#red").addEventListener("click", function onClick() {
  // 👇 change background color
  document.body.style.backgroundColor = "red";
});

document.querySelector("#white").addEventListener("click", function onClick() {
  // 👇 change background color
  document.body.style.backgroundColor = "white";
});
