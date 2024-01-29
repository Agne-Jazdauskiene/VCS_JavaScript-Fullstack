function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.

// UZDUOTIS - 7

let kiekis = rand(5, 3000);
document.write(`<strong>perkamas kiekis: ${kiekis}`);
let suma = 0;

// let rezultatas = kaina * kiekis;
// console.log(rezultatas);

if (kiekis > 1000) {
  suma = kiekis - kiekis * 0.03;
} else if (kiekis > 2000) {
  suma = kiekis - kiekis * 0.04;
}

document.write(`<p>Galutine suma: eur ${suma.toFixed(2)}</p>`);
