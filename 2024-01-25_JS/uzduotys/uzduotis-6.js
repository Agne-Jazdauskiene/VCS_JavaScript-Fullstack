function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Naudokite funkcija rand().
// Atspausdinkite 3 skaičius nuo -10 iki 10.
// Skaičiai mažesni už 0 turi būti žali,
// 0 - raudonas, didesni už 0 mėlyni.
// Rezultatą atvaizduoti naršyklės lange.
// Pavyzdys: -5 0 15

// 6 - užduotis

let one = rand(-10, 10);
let two = rand(-10, 10);
let three = rand(-10, 10);
console.log(one, two, three);

if (one < 0) {
  document.write(`<span style="color:green">${one}</span>`);
}

if (two < 0) {
  document.write(`<span style="color:green">${two}</span>`);
}

if (three < 0) {
  document.write(`<span style="color:green">${three}</span>`);
}

if (one === 0) {
  document.write(`<span style="color:red">${one}</span>`);
}

if (two === 0) {
  document.write(`<span style="color:red">${two}</span>`);
}

if (three === 0) {
  document.write(`<span style="color:red">${three}</span>`);
}

if (one > 0) {
  document.write(`<span style="color:blue">${one}</span>`);
}

if (two > 0) {
  document.write(`<span style="color:blue">${two}</span>`);
}

if (three > 0) {
  document.write(`<span style="color:blue">${three}</span>`);
}
