function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write(`<h3>--------- 1 - UZDUOTIS -----------</h3>`);
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array1 = [];

for (let i = 0; i < 30; i++) {
  let number = rand(5, 25);
  array1.push(number);
}
console.log(array1);
document.write(array1);

document.write(`<h3>--------- 2 - UZDUOTIS -----------</h3>`);
document.write(`<h3>--------- A var. -----------</h3>`);
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let sum = 0;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 10) {
    sum++;
  }
}

console.log(sum);
document.write(`<p>${sum}</p>`);

document.write(`<h3>--------- B var. -----------</h3>`);
// Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let max1 = 0;
let maxIndex1 = [];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > max1) {
    max1 = array1[i];
    maxIndex1 = [i];
  } else if (array1[i] === max1) {
    maxIndex1.push(i);
  }
}
console.log("Didžiausia reikšmė: ", max1);
document.write(`<p>Didžiausia reikšmė: ${max1}</p>`);

console.log("Jos indeksas: ", maxIndex1);
document.write(`<p>Jos indeksas: ${maxIndex1}</p>`);

// console.log(maxIndex);

// let array3 = [];
// let maxindex = [0];
// for (let i = 0; i < array3; i++) {
//   number = rand(5, 25);
//   if (array[i] > maxindex) {
//     maxindex = array3[i];
//     console.log(maxindex);
//   } else {
//     resultmax.push(i);
//     console.log(maxindex);
//     document.write(maxindex);
//   }
// }

// function indexOfMax(arr) {
//   if (arr.length === 0) {
//       return -1;
//   }

//   var max = arr[0];
//   var maxIndex = 0;

//   for (var i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//           maxIndex = i;
//           max = arr[i];
//       }
//   }

//   return maxIndex;
// }

document.write(`<h3>--------- C var. -----------</h3>`);
// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

sum = 0;

for (let i = 0; i < array1.length; i++) {
  if (i % 2 === 0) {
    sum += array1[i];
  }
}
console.log(`skaicius ${sum}`);
document.write(sum);

document.write(`<h3>--------- D var. -----------</h3>`);
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const array2 = [];
for (let i = 0; i < array1.length; i++) {
  // let newValue = array1[i] - i;
  // array2.push(newValue);
  array2.push(array1[i] - i);
}

console.log(array2);
document.write(array2);

document.write(`<h3>--------- E var. -----------</h3>`);
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

const arrayAdd = [];

for (let i = 0; i < array1.length; i++) {
  let number = rand(5, 25);
  // addValue1 = array1[number];

  // let addValuesAll = addValue1;
  // arrayAdd.push(addValuesAll);
  arrayAdd.push(array1[number]);
}

console.log(arrayAdd);
document.write(arrayAdd);

document.write(`<h3>--------- F var. -----------</h3>`);
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

const arrayOdd = [];
const arrayEven = [];

for (let i = 0; i < array1.length; i++) {
  // let valueF = array1[i];

  if (array1[i] % 2 != 0) {
    arrayOdd.push(array1[i]);
  } else if (array1[i] % 2 === 0) {
    arrayEven.push(array1[i]);
  }
}

console.log(arrayOdd);
document.write(`<p> Nelyginiu indeksu reiksmes: ${arrayOdd}</p>`);

console.log(arrayEven);
document.write(`<p> Lyginiu indeksu reiksmes: ${arrayEven}</p>`);

document.write(`<h3>--------- G var. -----------</h3>`);
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

document.write(`<h3>--------- H var. -----------</h3>`);
document.write(`<h3>--------- I var. -----------</h3>`);

document.write(`<h3>--------- 7 - UZDUOTIS -----------</h3>`);
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const randAbc = [];
const raides = ["A", "B", "C", "D"];

let kiekisA = 0;
let kiekisB = 0;
let kiekisC = 0;
let kiekisD = 0;
let kiekis = [0, 0, 0, 0];

// Vienos raides paemimas
console.log(raides[rand(0, raides.length - 1)]);

for (let i = 0; i < 200; i++) {
  randAbc.push(raides[rand(0, raides.length - 1)]);
  if (randAbc[i] === "A") {
    kiekisA++;
  }
  if (randAbc[i] === "B") {
    kiekisB++;
  }
  if (randAbc[i] === "C") {
    kiekisC++;
  }
  if (randAbc[i] === "D") {
    kiekisD++;
  }
}

console.log(`A: ${kiekisA}
 , B: ${kiekisB}, C: ${kiekisC}, D: ${kiekisD}`);
document.write(`A: ${kiekisA}
 , B: ${kiekisB}, C: ${kiekisC}, D: ${kiekisD}`);

// PVZ.
// console.log(randAbc);
// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
// (sprendimui masyvo nenaudoti).

// i = 0;
// let nuliai = 0;
// let vienetai = 0;
// let dvejetai = 0;

// while (i < 4) {
//   let skaicius = rand(0, 2);

//   if (skaicius === 0) nuliai++;

//   if (skaicius === 1) vienetai++;

//   if (skaicius === 2) dvejetai++;

//   i++;
// }

// console.log(`Nuliai: ${nuliai} Vienetai: ${vienetai} Dvejetai: ${dvejetai}`);

document.write(`<h3>--------- 8 - UZDUOTIS -----------</h3>`);
// Išrūšiuokite 7 uždavinio masyvą pagal abecėlę.

const filtruotas = randAbc.sort();
console.log(filtruotas);
document.write(`${filtruotas}`);

// arba issifiltruoti raides ir keturis kartus praeiti per cikla

document.write(`<h3>--------- 9 - UZDUOTIS -----------</h3>`);
// Sugeneruokite 3 masyvus pagal 7 uždavinio sąlygą. Sudėkite masyvus, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
// Pvz.
// [‘AAA’, ‘BBB’, ‘CCC’, ‘ACC’] = Viena unikali reikšmė “ACC”
// [‘ACA’, ‘ABA’, ‘ACA’, ‘ADA’] = Dvi unikalios kombinacijos “ABA” ir “ADA”
// [‘A’, ‘D’, ‘B’]
// [‘B’, ‘A’, ‘D’]
// [‘A’, ‘C’, ‘B’]

// ‘ABA’
// ‘DAC’
// ‘BDB

const masyvas1 = ["A", "B", "C", "D"];
const masyvas200 = [];
const masyvas201 = [];
const masyvas202 = [];

for (let i = 0; i < 200; i++) {
  masyvas200.push(masyvas1[rand(0, masyvas1.length - 1)]);
  masyvas201.push(masyvas1[rand(0, masyvas1.length - 1)]);
  masyvas202.push(masyvas1[rand(0, masyvas1.length - 1)]);
}

const raidziuMasyvas = [];
for (let i = 0; i < 200; i++) {
  raidziuMasyvas.push(masyvas200[i] + masyvas201[i] + masyvas202[i]);
}

console.log(raidziuMasyvas);

//Apdorojimas

const tikUnikaliosReiksmes = [];
for (let i = 0; i < raidziuMasyvas.length; i++) {
  if (
    raidziuMasyvas[i] === "AAA" ||
    raidziuMasyvas[i] === "BBB" ||
    raidziuMasyvas[i] === "CCC" ||
    raidziuMasyvas[i] === "DDD"
  )
    continue;

  tikUnikaliosReiksmes[i] = raidziuMasyvas[i];
}

console.log(tikUnikaliosReiksmes);
