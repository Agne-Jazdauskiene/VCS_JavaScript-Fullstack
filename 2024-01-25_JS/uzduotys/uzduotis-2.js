function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Naudokite funkcija rand(). Sukurkite du kintamuosius ir
// naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes
// nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės.
// Atspausdinkite rezultatą naršyklėje.
// Papildomai:
// Suapvalinkite skaičių iki dviejų skaičių po kablelio.

// 2 užduotis

let a = rand(0, 4);
let b = rand(0, 4);
console.log(a, b);

// PIRMAS VARIANTAS - BE APVALINIMO
// if (a > b) {
//   if (a !== 0) {
//     document.write a / b);
//   }
// } else if (a < b) {
//   if (b !== 0) {
//     document.write(b / a);
//   }
// } else {
//   document.write(a / a);
// }

// ANTRAS VARIANTAS - SU APVALINIMU
// uzsideklaruojame kintamaji - result
let result; //arba
// let result = 0;

if (a > b) {
  if (a !== 0) {
    result = a / b;
  }
} else if (a < b) {
  if (b !== 0) {
    result = b / a;
  }
} else {
  result = a / a;
}

document.write(result.toFixed(2));
