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

// su funkcijom

//d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

// const array2D = [];

// const array2D = array.map((array[i], i) => array[i] * i);

// const array2D = array.map((reiksme, indeksas) => reiksme - indeksas);

const array2D = array.map((array, index) => array - index);

console.log(array2D);
