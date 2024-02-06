let string =
  "sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirtike atsitiktinius skaicius";
// tarpeliai irgi yra simboliai !!!

// INcludes metodas grazina true arba false atsakyma ar ieskomas zodis egzistuoja nurodytame stringe
if (string.includes("rand() jiems")) {
  console.log("Stringe radome pamineta funkcija rand()");
}

// "Labas Pasauli".includes();

// metodas at() grazina simboli pagal pateikta pozicija
// string[5]

string = "Naudokite funkcija rand()";
console.log(string[string.length - 1]);

console.log(string.at(-4));

// endsWith metodas tikrina ar stringas baigiasi nurodytu zodziu ar fraze
if (string.endsWith("rand()")) {
  console.log("Stringas baigiasi funkcijos pavadinium");
}

// string[2], skaicius 2 yra turima pozicija (index)

// INDEXOF METODAS

string = "Naudokite funkcija rand()";

console.log(
  `funkcijos pavadinimas prasideda ties: ${string.indexOf("rand()")} pozicija`
);

// REPLACE METODAS
// pakeicia pirma surasta reiksme - nurodytus zpdzius, frazes, simbolius norimais

string = "Naudokite funkcija rand().";

let naujasStringas = string.replace("rand()", "random()");
console.log(naujasStringas);

string = "Naudokite funkcija rand(). Funkcija rand() yra labai gera.";

// REPLACEALL metodas - pakeicia visas surastas reiksmes norimomis

string = "Naudokite funkcija rand(). Funkcija rand() yra labai gera.";

naujasStringas = string.replaceAll("rand()", "random()");

console.log(naujasStringas);

// MATH METODAS - yra globalus objektas, kaip string, console..
// SKAICIU APVALINIMAS
// Jei turime skaiciu po kablelio - ji zymime tasku

// let skaicius = 3.4561516161;
let skaicius = 3.5141516161;
let rezultatas = Math.round(skaicius);
// suapvalina skaiciu pagal matematine taisykle,
// apvalina iki sveikojo skaiciaus

console.log(
  `Suapvalintas skaicius iki sveikojo pagal matematine taisykle 
  ${rezultatas}`
);
skaicius = 3.999999999;
rezultatas = Math.floor(skaicius);
console.log(
  `Suapvalina skaicius floor metodu iki apatinio sveikojo skaiciaus, bus 3: ${rezultatas}`
);

skaicius = 3.00000001;
rezultatas = Math.ceil(skaicius);
console.log(`Suapvalina skaicius ceil metodu, bus 3: ${rezultatas}`);

// Suranda mažiausią skaičių
let maziausias = Math.min(55, 15, 88, 105, 12, 65); // Skaiciu kiekis neribotas

// Suranda didžiausią skaičių
let didziausias = Math.max(55, 15, 88, 105, 12, 65);

console.log(`Maziausias skaicius yra: ${maziausias}`);
console.log(`Didizausias skaicius yra: ${didziausias}`);
