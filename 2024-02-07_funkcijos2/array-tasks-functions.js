function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const array = [];

for (let i = 0; i < 30; i++) {
  let numbers = rand(5, 25);
  array.push(numbers);
}

console.log(array);

// Naudodamiesi 1 uždavinio masyvu:
//2a.  Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let kiekis = 0;
for (let i = 0; i < array.length; i++) {
  // console.log(array[i]);
  if (array[i] > 10) {
    kiekis++;
  }
}
console.log(kiekis);

// su funkcija
const filteredArray = array.filter((value) => value > 10);

console.log(array.length); // pasiziurim tiesiog i masyvo ilgi ir susigrazinam reiksme

// 2b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;

let maxValue = 0;
let maxIndex = [];
for (let i = 0; i < array.length; i++) {
  // console.log(array[i]); Visos reiksmes

  // Reiksme = masyvas[i]
  // Indeksas = i
  //Masyvo ilgis = masyvas.length
  if (maxValue < array[i]) {
    // console.log(maxValue);
    maxValue = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (maxValue === array[i]) {
    maxIndex.push(i);
  }
}
console.log(maxValue);
console.log(maxIndex);

// 2c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let sum = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sum += array[i];
  }
}
console.log(sum);
// arba
sum = 0;
array.forEach((reiksme, indeksas) =>
  indeksas % 2 === 0 ? (sum += reiksme) : false
);
console.log(sum);

//2d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

// const array2D = array.map((reiksme, indeksas) => reiksme - indeksas);

const array2D = array.map((value, index) => value - index);

console.log(array2D);

// 2e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (let i = 0; i < 10; i++) {
  let addValue = rand(5, 25);
  array.push(addValue);
  console.log(array);
}
// for (let i = 0; i < 20; i++) {
//   randomArr.push(Math.floor(Math.random() * 100) + 1);
// }

// 2f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių;

const arrayPor = [];
const arrayNepor = [];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    arrayPor.push(array[i]);
  } else {
    arrayNepor.push(array[i]);
  }
}

console.log(arrayPor);
console.log(arrayNepor);

//2g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
document.write(array);
for (let i = 0; i < array.length; i++) {
  if (array[i] > 15 && i % 2 === 0) {
    array[i] = 0;
  }
}
console.log(array);

// su map metodu

// const arrayMap = array.map(
//   (reiksme > 15, index % 2 === 0) => (reiksme && index) * 0
// );

// su if
const arrayMap1 = array.map((value, index) => {
  if (value > 15 && index % 2 === 0) {
    return 0;
  } else {
    return value;
  }
});
console.log(arrayMap1);

// viena eilute
const arrayMap = array.map((reiksme, index) =>
  index % 2 === 0 && reiksme > 15 ? 0 : reiksme
);
console.log(arrayMap);

// 2h. Suraskite pirmą indeksą, kurio elemento reikšmė didesnė už 10;
let result;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    result = i;
    break;
  }
}
console.log(result);

// arba su funkcija
const array2H = array.findIndex((index) => index > 10);
console.log(array2H);

// 2i. Iš masyvo ištrinkite visus elementus turinčius porinį indeksą.

const array2I = [];

for (i = 0; i < array.length; i++) {
  if (i % 2 !== 0) {
    array2I.push(array[i]);
  }
}
console.log(array2I);

// su funkcija

const array2I2 = array.map((value, index) => (index % 2 !== 0 ? value : false));
console.log(array2I2);

// 3. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
