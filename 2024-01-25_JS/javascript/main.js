console.log("Labas 'šaunusis' Pasauli");

let vardas = "Jonas";

console.log(vardas + " Pavardenis");

let miestas = "Vilnius";
let adresas = "Saltoniškių g. 19";
let telefonas = "+3706086666";

// console.log("Gauti duomenys: " + miestas + "" + adresas + "" + telefonas);

// Template literals - pasvirosios kabutes
console.log(
  `Gauti duomenys: 
  Miestas: ${miestas} 
  Adresas: ${adresas} 
  Telefonas: ${telefonas}`
);

// arba
let rezultatas = `Gauti duomenys: 
  Miestas: ${miestas} 
  Adresas: ${adresas} 
  Telefonas: ${telefonas}`;

console.log(rezultatas);

console.log(miestas, adresas, telefonas);

let x = `18`;
let y = 18;

rezultatas = x + y;

console.log(rezultatas);

// norint patikrinti duomenu tipa
console.log(typeof rezultatas);

// if (x > y) {
//   console.log("X daugiau negu Y");
// }

if (x > y) {
  console.log("X daugiau negu Y");
}
} else if(x === y) {
  console.log(`X yra lygu Y`)
  else {
    console.log(`Y yra daugiau negu X`)
  }
}



// vienas = zenklas nurodo reiksmes priskytima, o nen tikrinima
if(x = y) {
  console.log(x);
}
// geriausia tikrinti su === trimis lygybes zenklais, taip pat patiktinti tipa

x = true; 
// Boolean

if(x) {
  console.log(`x reiksme yra teigiamas`);
} else {
  console.log(`x reiksme yra neigiama`);
}

// !nor operatorius
if(!x) {
  console.log(`x reiksme yra neigiama`);
} else {
  console.log(`x reiksme yra teigiama`);
}

x = 16;

// vienas = pries sauktuka netikrina duomens tipo
// du lygybes zenklai == nurodo tipo tikrinima
if(x != 0) {
  console.log(`x nelygu nuliui`)
}

// norint isvesti turini i narsykles langa
document.write(`<h1>Labas Pasauli</h1>`);

// funkcijos issaukimas kad sugeneruotu atsitiktinius skaicius
function rand(min, max) {

}


// stringu palyginimas
let gamintojas = `Samsung`;
let produktas = `Televizorius`;

console.log(gamintojas.length);
console.log(gamintojas[0], produktas[1], produktas[2];
  //ilgi grazina 12, o ppoziciju yra 11. nes length pradeda skaiciuoti nuo 0.
  console.log(gamintojas.length -1);
