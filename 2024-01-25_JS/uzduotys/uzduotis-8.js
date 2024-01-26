function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėmis reikšmėmis nuo 0 iki 100.
// Suskaičiuokite jų aritmetinį vidurkį.
// Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90.
// Abu vidurkius atspausdinkite.
// Papildomai:
// Rezultatus apvalinkite iki sveiko skaičiaus.

// UZDUOTIS - 8

let first = rand(0, 100);
let second = rand(0, 100);
let third = rand(0, 100);
console.log(first, second, third);

// aritmetinis vidurkis

let average = (first + second + third) / 3;
document.write(average);

// aritmetinis vidurkis, atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90, t.y. daugiau už 10 ir mažiau už 90.
let sum = 0;
let digits = 0;

if (first > 10 && first < 90) {
  sum += first;
  digits++;
}
if (second > 10 && second < 90) {
  sum += second;
  digits++;
}
if (third > 10 && third < 90) {
  sum += third;
  digits++;
}

// let average = sum / digits;
// document.write(average);

// Rezultatus apvalinkite iki sveiko skaičiaus.
let result = Math.round(average);

document.write(`Rounded average ${result}`);
