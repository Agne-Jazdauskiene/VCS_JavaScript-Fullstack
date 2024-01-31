// Papildomas.
// Naudokite funkcija rand(). Sugeneruokite 6 kintamuosius su atsitiktinem reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename strige, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 10 - uzduotis
// spresti su Bubble sort

let first = rand(1000, 9999);
let second = rand(1000, 9999);
let third = rand(1000, 9999);
let fourth = rand(1000, 9999);
let fifth = rand(1000, 9999);
let sixth = rand(1000, 9999);
let temp = 0; //temporary (laikinas)

console.log(first, second, third);

// cia padaryta nuo maziausiio iki didziausio
if (first > third) {
  temp = first;
  first = third;
  third = temp;
}

if (second > third) {
  temp = second;
  second = third;
  third = temp;
}

if (first > second) {
  temp = second;
  second = first;
  first = temp;
}

console.log(first, second, third);
