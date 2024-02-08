function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1.
// Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

const array = [];

for (let x = 0; x < 10; x++) {
  array[x] = [];
  for (y = 0; y < 5; y++) {
    array[x][y] = rand(5, 25);
  }
}
console.log(array);

//2a. Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra elementų didesnių už 10;

let sumMore10 = 0;

for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array[x].length; y++) {
    if (array[x][y] > 10)
      // console.log(masyvas[pirmas][antras] > 10);
      sumMore10++;
  }
}
console.log(sumMore10);

//2b. Raskite didžiausio elemento reikšmę;

let max = 0;

for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array[x].length; y++) {
    if (array[x][y] > max) {
      max = array[x][y];
    }
  }
}
console.log(max);

// 2c. Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių, turinčių indeksą 0, 1 ir t.t.)

// let index = 0;
// let sum = 0;

let sum;
const sumTotal = [0, 0, 0, 0, 0];

for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array[x].length; y++) {
    sumTotal[y] += array[x][y];
  }
}
console.log(sumTotal);

// const suma = array.reduce(function (dabartineSuma, dabartineReiksme, dabartinisIndeksas) {
//   console.log(dabartineSuma, dabartineReiksme, dabartinisIndeksas);
//   if (dabartinisIndeksas % 2 === 0)
//     return dabartineSuma + dabartineReiksme;
//   else
//     return dabartineSuma;
// }, 0);

// console.log(suma);

// perrasom paprasciau

// const suma = array.reduce((sum, value, index) => index % 2 === 0 ? sum + value : sum, 0);

// 2d. Visus antro lygio masyvus “pailginkite” iki 7 elementų

for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < 2; y++) {
    let addElements = rand(5, 25);
    array[x].push(addElements);
  }
}
console.log(array);

// 2e. Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą.
// T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai

let newArray = [];

for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array[x].length; y++) {
    array[x][y] += array[x][y];
  }
}
console.log(array);

// 3. Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).

// 4. Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.
