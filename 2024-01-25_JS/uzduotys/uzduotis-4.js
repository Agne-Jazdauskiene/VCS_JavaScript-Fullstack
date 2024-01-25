// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
// (sprendimui masyvo nenaudoti).

// 4 - užduotis

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let random_no1 = rand(0, 2);
let random_no2 = rand(0, 2);
let random_no3 = rand(0, 2);
let random_no4 = rand(0, 2);
console.log(random_no1, random_no2, random_no3, random_no4);

let zeroes = 0;
let ones = 0;
let twos = 0;

if (random_no1 === 0) {
  zeroes++;
} else if (random_no1 === 1) {
  ones++;
} else {
  twos++;
}

if (random_no2 === 0) {
  zeroes++;
} else if (random_no2 === 1) {
  ones++;
} else {
  twos++;
}

if (random_no3 === 0) {
  zeroes++;
} else if (random_no3 === 1) {
  ones++;
} else {
  twos++;
}

if (random_no4 === 0) {
  zeroes++;
} else if (random_no4 === 1) {
  ones++;
} else {
  twos++;
}

console.log(`Nuliu yra: ${zeroes}`);
console.log(`Vienetu yra: ${ones}`);
console.log(`Dvejetu yra: ${twos}`);
