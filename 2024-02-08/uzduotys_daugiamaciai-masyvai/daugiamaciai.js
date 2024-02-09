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

const arrayLetters = [];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 10; i++) {
  arrayLetters[i] = [];
  const randLength = rand(2, 20);

  for (let x = 0; x < randLength; x++) {
    arrayLetters[i][x] = letters[rand(0, letters.length - 1)];
  }
  console.log(arrayLetters);
}

// 4. Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.

// 5. Sukurkite masyvą iš 10 elementų. Masyvo reikšmes užpildykite pagal taisyklę: generuokite skaičių nuo 0 iki 5. Ir sukurkite tokio ilgio masyvą. Jeigu reikšmė yra 0 - masyvo nekurkite. Antro lygio masyvo reikšmes užpildykite atsitiktiniais skaičiais nuo 0 iki 10. Ten, kur masyvo nekūrėte, reikšmę nuo 0 iki 10 įrašykite tiesiogiai.

const array2 = [];

for (let i = 0; i < 10; i++) {
  let numbers = rand(0, 5);

  if (numbers === 0) {
    array2[i] = rand(0, 10); //tiesiogiai irasau reiksme
  } else {
    array2[i] = [];
    for (let x = 0; x < numbers; x++) {
      let digit = rand(0, 10);
      array2[i].push(digit);
    }
  }
}
console.log(`5 uzduoties masyvas:`, array2);

// 6. Paskaičiuokite 5 uždavinio masyvo visų reikšmių sumą ir išrūšiuokite masyvą taip, kad pirmiausiai eitų mažiausios masyvo reikšmės arba jeigu reikšmė yra masyvas, to masyvo reikšmių sumos.

let suma = 0;
for (let i = 0; i < array2.length; i++) {
  // console.log(typeof array2[i]);
  if (typeof array2[i] === "number") {
    // Pliusavimas
    suma += array2[i];
  } else {
    // Ciklo paleidimas
    for (x = 0; x < array2[i].length; x++) {
      suma += array2[i][x];
    }
  }
  console.log(suma);
}
console.log(`6 uzduoties:`, suma);

// KAS CIA BLYN ?????????
// console.log(
//   array2.sort(function (a, b) {
//     console.log(a, b);
//     //jeigu a masyvas:
//     let sumaA = 0;
//     let sumaB = 0;
//     for (let i = 0; i < a.length; i++) {
//       sumaB += a[i];
//     }
//   })
// ); // ??????

//jeigu b masyvas
//tie patys veiksmai

//console.log(a.length, b.length);
//return -1; Neigiama reiksme elementas keliauja zemiau
//return 1; Teigiama elementas keliauja auksciau
//     //return 0; Neikeicia pozicionavimo
//   })
// );

// ARBA Justino pasiul.
// for loopas a array'iui; for loopas b array'iui
// for loopas funkcijoje, kuria iskviesi ir paduosi a kaip kintamaji pati loopa (pvz: const sum = (array) => {
// reduceris, math.sum 🙂
// 4 variantai jei vienu nesigauna :)

// Šiaip užduotėlė - kriptografija
// 33!115!109!101!105!115!105!118!32!111!105!108!97!103!116!105!97!118!97!115!32!115!117!97!382!97!114!71!
