function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę,
// gimimo metus ir šiuos metus (nebūtinai tikrus).
// Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių
// ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

// 1 užduotis

let vardas = `Agnė`;
let pavardė = `Jazdauskienė`;
let gimimo_metai = 1924;
let metai = 2024;

let rezultatas = metai - gimimo_metai;
console.log(rezultatas);

console.log(`Aš esu ${vardas} ${pavardė}. 
Man yra ${rezultatas} metų.`);
