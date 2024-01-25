// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand()
// jiems priskirkite atsitiktines reikšmes nuo 0 iki 25.
// Raskite ir atspausdinkite kintamąjį turintį vidurinę reikšmę.

// 3-užduotis

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);

console.log(a, b, c);

if (a <= b) {
  if (b <= c) {
    console.log("b yra vidurine reiksme");
  }
}
if (b <= a) {
  if (a <= c) {
    console.log("a yra vidurine reiksme");
  }
}
if (c <= a) {
  if (c >= b) {
    console.log("c yra vidurine reiksme");
  }
}
