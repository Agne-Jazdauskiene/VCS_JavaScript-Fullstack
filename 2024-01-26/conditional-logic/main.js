console.log("Veikia");

// KONDICINE LOGIKA
// lOGINIAI OPERATORIAI
console.log(`LOGINIAI OPERATORIAI`);

// cia aprasyti parametrai
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// issaukiant funkcija gali buti perduodami argumentai (arguments)
// skliausteliuose aprasyti argumentai
let pirmasSkaicius = rand(0, 50);
let antrasSkaicius = rand(0, 50);
console.log(pirmasSkaicius, antrasSkaicius);

// let pirmasSkaicius = "16";
// let antrasSkaicius = 15;

if (pirmasSkaicius == antrasSkaicius) {
  console.log(`Skaiciai yra lygus netikrinant duomens tipo`);
}

if (pirmasSkaicius === antrasSkaicius) {
  console.log(`Skaiciai yra lygus tikrinant duomens tipa`);
}

if (pirmasSkaicius != antrasSkaicius) {
  console.log(`pirmas skaicius nelygus antram netikrinant duomens tipo`);
}

if (pirmasSkaicius !== antrasSkaicius) {
  console.log(`pirmas skaicius nelygus antram tikrinant duomens tipa`);
}

if (pirmasSkaicius < antrasSkaicius) {
  console.log(`pirmas skaicius yra mazesnis uz antraji`);
}

if (pirmasSkaicius <= antrasSkaicius) {
  console.log(`pirmas skaicius yra mazesnis arba lygus antrajam`);
}

if (pirmasSkaicius > antrasSkaicius) {
  console.log(`pirmas skaicius yra didesnis uz antraji`);
}

if (pirmasSkaicius >= antrasSkaicius) {
  console.log(`pirmas skaicius yra didesnis arba lygus antrajam`);
}

// String palyginimai
console.log(`STRINGU PALYGINIMAS`);

let pirmojiRaide = "Alpes";
let antrojiRaide = "Banglentes";

if (antrojiRaide > pirmojiRaide) {
  console.log("B yra auksciau nei A");
}

// Kondiciju sujungimas
console.log("KONDICIJU SUJUNGIMAS");

// tikrinti, ar pirmaSkaicius didesnis negu 25, ir mazesnis nei 40
console.log(`Gauta reiksme: ${pirmasSkaicius}`);
// if (pirmasSkaicius > 25) {
//   console.log(`pirmas skaicius didesnis nei 25`);
// }

if (pirmasSkaicius > 25) {
  if (pirmasSkaicius < 40) {
    console.log(`pirmas skaicius didesnis nei 25 ir mazesnis nei 40`);
  }
}

// AND OPERATORIUS

// && - and (ir) skirtas sujungti dviems kondicijoms.
// Rezultatui gauti visos kondicijos turi buti teisingos
// t.y. abi situacijos turi grazinti -- true --
// if(true && true);

if (pirmasSkaicius > 25 && pirmasSkaicius < 40) {
  console.log(`Pirmas skaicius yra didesnis nei 25 ir mazesnis nei 40`);
}

// galime tureti daug and operatoriu

// Patikrinkite, ar pirmas skaicius yra didesnis nei 10, mazesnis nei 35, nelygus 16 ir 18 -- 4 kondicijos

if (
  pirmasSkaicius > 10 &&
  pirmasSkaicius < 35 &&
  pirmasSkaicius !== 16 &&
  pirmasSkaicius !== 18
) {
  console.log(`Visos keturios salygos yra teisingos`);
}

//  OR OPERATORIUS

// || -  Or (arba) operatorius kuriuo tikriname ar bent viena kondicija yra teisinga
// Patikrinkite, ar pirmasSkaicius yra didesnis nei 25 arba antras skaicius yra mazesnis nei 10
// if(true || false arba false || true)

if (pirmasSkaicius > 25 || antrasSkaicius < 10) {
  console.log(
    `Pirmas skaicius yra didesnis nei 25 arba antras skaicius yra mazesnis nei 10`
  );
}

// APIMTYS (SCOPES)
console.log(`APIMTIS (SCOPES)`);
// jei reikia labai greito patikrinimo, galime prie kintamojo priskirti reiksme. Kintamasis egzistuoja tik tada, kai console - viduje riestiniu skliaustu
// arba - deklaruoti kintamaji virsuje be reiksmes '' - bet tai nepravartu
// ateina i pagalba - ternary operatorius

// Global scope (Globali apimtis)
let rezultatas = "";

if (pirmasSkaicius > 10) {
  // Block scope (Bloko apimtis) - tarp riestiniu skliaustu
  let rezultatas = "Kondiciju pabaiga";
}

// dar kruva kodo
// ...
// ...

//  Norime atvaizduoti kintamaji
console.log(rezultatas);

// TERNARY OPERATORIUS
console.log(`TERNARY OPERATORIUS`);

let ternaryOperatorius =
  pirmasSkaicius > 10 ? "Pirmas skaicius didesnis nei 10" : false;
// butinai reikia nurodyti else - :
// This operator is frequently used as an alternative to an if...else statement.
console.log(ternaryOperatorius);

// VIENOS EILUTES VEIKSMAS - KONDICIJA
console.log("VIENOS EILUTES VEIKSMAS");
// jei turime tik viena eilute - nenaudojame riestiniu skliaustu
// jei reikia daugiau eiluciu - tuomet rasome riestinius skliaustus
if (antrasSkaicius > 25);
console.log("Antras skaicius didesnis nei 25");
