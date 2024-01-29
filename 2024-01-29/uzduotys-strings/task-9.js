// Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
// Rezultatas: jkr

// 9 - UZDUOTIS

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let abc = "aąbcdeęėfghiįyjklmnoprsštuųūvzž";
let abcLength = abc.length - 1;

let random = rand(0, 31);
console.log(abc[abc.length - 1]);

console.log(abc.length - 1);
// string = abc.length - 1;
console.log(( = random));

// console.log(string.length - 1);

// console.log(string.length rand(0, 3));
