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
console.log(`-------------- A -------------`); // 2. Naudodamiesi 1 uždavinio masyvu:
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
    arrayEnd.push(array[i]);
  }
}
console.log(arrayEnd);

//SPLICE PVZ KAIP ISTRINTUME IS MASYVO VISUS ELEMENTUS. Kai istriname eiksme is pozicijos - tuomet pozicija pasislenka, o inkrementas lieka toje pacioje. Todel reikia naudoti dekrementa i--.
const array5 = [2, 4, 6, 8];
for (let i = 0; i < array5.length; i++) {
  array5.splice(i, 1);
  i--; // sugrizta perviena atgal (kuri istryne)
}
console.log(array5);
