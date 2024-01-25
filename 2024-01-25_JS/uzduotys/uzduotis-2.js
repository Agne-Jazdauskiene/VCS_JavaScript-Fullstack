function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Naudokite funkcija rand(). Sukurkite du kintamuosius ir
// naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes
// nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.
// Atspausdinkite rezultatą naršyklėje.

// 2 užduotis

let a = rand(0, 4);
let b = rand(0, 4);
console.log(a, b);

if (a > b) {
  if (a !== 0) {
    document.write("<h1>a / b</h1>");
  }
} else if (a < b) {
  if (b !== 0) {
    document.write(b / a);
  }
} else {
  document.write(a / a);
}

// LIKO
// Papildomai:
// Suapvalinkite skaičių iki dviejų skaičių po kablelio.
