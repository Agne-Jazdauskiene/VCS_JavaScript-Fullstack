// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
// Rezultatas: jkr

// 9 - UZDUOTIS

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let abc = "abcdefghiyjklmnoprstuvz";
// console.log(abc.length);

// let random1 = rand(0, 23);
// let random2 = rand(0, 23);
// let random3 = rand(0, 23);

// console.log(abc.charAt(random1) + abc.charAt(random2) + abc.charAt(random3));

// aiskinimas
let string = "abcdefghijklmnopqrstuvwxyz";
console.log(
  string[rand(0, string.length - 1)] +
    string[rand(0, string.length - 1)] +
    string[rand(0, string.length - 1)]
);
