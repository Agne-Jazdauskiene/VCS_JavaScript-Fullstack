function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 4. Masyvai
document.write(`<h3>--------- 1 - UZDUOTIS -----------</h3>`);
// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array = [];

for (let i = 1; i <= 30; i++) {
  const numbers = rand(5, 25);
  array.push(numbers);
}
console.log(array);

document.write(`<h3>--------- 2 - UZDUOTIS -----------</h3>`);
document.write(`<h3>--------- A var. -----------</h3>`);
console.log(`-------------- A -------------`); //
//
// 2. Naudodamiesi 1 uždavinio masyvu:
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

sum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) sum++;
}
console.log(sum);

console.log(`-------------- B -------------`); //
// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
let maxValue = 0;
let maxIndex = 0;

for (let i = 0; i < 30; i++) {
  // Iteracija
  if (array[i] > maxValue);
  maxValue = array[i];
  maxIndex = i;
}

console.log(`maxindex ${maxIndex}`);
console.log(`maxvalue ${maxValue}`);

const array1 = [];

for (let i = 0; i < array.length; i++) {
  // Reiksmes paemimas(taking value)
  // array[i]

  // Indekso paemimas (taking index)
  // i

  if (maxValue === array[i]) {
    console.log(`nauj.index${i}`);
    array1.push(i);
  }
}
console.log(`max index ${array1}`);

console.log(`-------------- C -------------`); //
// c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let sumEven = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) console.log(i);
  sumEven += array[i];
}
console.log(`sumEven: ${sumEven}`);

console.log(`-------------- D -------------`);
//d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const array2 = [];

for (let i = 0; i < array.length; i++) {
  array2.push(array[i] - i);
}
console.log(`array2 ${array2}`);

console.log(`-------------- E -------------`);
// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (let i = 0; i < 10; i++) {
  const numbers = rand(5, 25);
  array.push(numbers);
}
console.log(array);

console.log(`-------------- F -------------`);
// f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

const arrayOdd = []; // nelyginiai
const arrayEven = []; // lyginiai

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    // console.log(`Lyginiai`, i);
    arrayEven.push(array[i]);
  } else {
    arrayOdd.push(array[i]);
  }
}

console.log("Lyginiai skaiciai", arrayEven);
console.log("Nelyginiai", arrayOdd);

console.log(`-------------- G -------------`);
// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

for (let i = 0; i < arrayEven.length; i++) {
  if (arrayEven[i] > 15) {
    arrayEven.splice(i, 1, 0); // kuri reiksme, kiek reiksmiu keisim, kuo noresime pakeisti
    //arrayEven[i] = 0; Arba taip galima rasyti paprastai
  }
}

console.log(arrayEven);

console.log(`-------------- H -------------`);
// h. Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;
//indeksas - i
// reiksme - array[i]
let firstIndex;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    firstIndex = i;
    break;
  }
}
console.log(firstIndex);

console.log(`-------------- J -------------`);
// j. Iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

const arrayEnd = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 !== 0) {
    //true
    arrayEnd.push(array[i]);
    // arrayEnd.splice(i, 1);// splice netinka cia
    // i--;
  }
}
console.log(arrayEnd);

//SPLICE PVZ KAIP ISTRINTUME IS MASYVO VISUS ELEMENTUS. Kai istriname eiksme is pozicijos - tuomet pozicija pasislenka, o inkrementas lieka toje pacioje. Todel reikia naudoti dekrementa i--.
// const array5 = [2, 4, 6, 8];
// for (let i = 0; i < array5.length; i++) {
//   array5.splice(i, 1);
//   i--; // sugrizta perviena atgal (kuri istryne)
// }
// console.log(array5);

console.log(`-------------- 3 UZDUOTIS -------------`);
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

const arrayOne = [];
const arrayTwo = [];

for (let i = 0; arrayOne.length < 100; i++) {
  // 1. pirma iteracija = []
  // 2 iteracija = [150]
  // 3. iteracija = [150, 180]

  let numbers999 = rand(100, 999);
  // console.log(arrayOne.includes(numbers999));

  if (!arrayOne.includes(numbers999))
    // ! reiskia - priesinga reiksme
    arrayOne.push(numbers999);

  // for (let x = 0; x < arrayOne.length; x++) { // sitokiu budu nesupratome :)
  //   console.log(arrayOne[x]);
  // }
}
console.log(arrayOne);

for (let i = 0; arrayTwo.length < 100; i++) {
  let numbers999 = rand(100, 999);
  if (!arrayTwo.includes(numbers999))
    // ! reiskia - priesinga reiksme
    arrayTwo.push(numbers999);
}
console.log(arrayTwo);

console.log(`-------------- 4 UZDUOTIS -------------`);
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

const array4uzd = [];

for (let i = 0; i < arrayOne.length; i++) {
  if (!arrayTwo.includes(arrayOne[i])) array4uzd.push(arrayOne[i]);
}
console.log(array4uzd);
// console.log(array4uzd);

console.log(`-------------- 5 UZDUOTIS -------------`);
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 3 uždavinio masyvuose.

const array5uzd = [];

for (let i = 0; i < arrayOne.length; i++) {
  if (arrayTwo.includes(arrayOne[i])) array5uzd.push(arrayOne[i]);
}

console.log(array5uzd);

console.log(`-------------- 6 UZDUOTIS -------------`);
// Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t. pvz. [10, 15, 25, 40, 65…]

const array6uzd = [];
array6uzd[0] = rand(5, 25);
array6uzd[1] = rand(5, 25);
// arba constt array6uzd = [rand(5, 25), rand(5, 25)]

for (let i = 2; i < 10; i++) {
  // console.log(array6uzd[i - 1]);

  // console.log(array6uzd[0]);
  console.log(array6uzd[0], array6uzd[1]);

  array6uzd[2] = array6uzd[0] + array6uzd[1];
  // //   i
  console.log(array6uzd[2]);

  array6uzd[i + 1] = array6uzd[i] + array6uzd[i - 1];
  console.log(array6uzd[i + 1]);
}
console.log(array6uzd);

// Paprastesnis variantas - bernioku
// const unoArray = [rand(5, 25), rand(5, 25)];

// for (let i = 2; i < 10; i++) {
//   unoArray[i] = unoArray[i - 1] + unoArray[i - 2];
// }
// console.log(unoArray);

console.log(`-------------- 7 UZDUOTIS -------------`);
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const array7uzd = [];
let letters = ["A", "B", "C", "D"];
// const suma = 0;
let randLetters = [];
letters[rand(0, 3)];
console.log(Letters);

for (i = 0; i < 200; i++) {
  let oneLetter = letters[rand(0, 3)];

  randletters.push(oneLetter); // ?
}
