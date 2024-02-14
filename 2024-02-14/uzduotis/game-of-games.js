// Game of Games

// Sukurkite žaidimą.
// Žaidimą žaidžia du žaidėjai: Player(Jūs) ir Kompiuteris.
// Žaidimą sudaro 10 raundų, vieno raundo trukmė 30 sekundžių.
// Raundą laimi tas žaidėjas kuris surenka daugiau taškų.
// Kiekvieno raundo pabaigoje atvaizduokite laimėtojo vardą, surinktus taškus raunde ir visus laimėtus roundus prie žaidėjų vardų.

// Žaidimo esmė:
// Puslapyje atvaizduojamas kvadratas(50px x 50px) kuris keičia savo atsitiktinę poziciją bei savo fono spalvą kas 1 sekundę.
// Jeigu žaidėjas spėja per šį laiko tarpą paspausti ant kvadrato - taškas skiriamas jam. Priešingu atveju laimi kompiuteris.
// Kiekviename rounde naršyklėje atvaizduokite laikmatį skaičiuojantį roundo trukmę.
// Pasibaigus žaidimui atvaizduokite laimėtojo vardą bei mygtuką, ant kurio paspaudus žaidimas būtų pradedamas iš naujo.

// 	Veikiantis pavyzdys:
// 	https://viliusramulionis.github.io/PHP-KNS-22-06-06/sprendimai/2022-07-21.html

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// for(let i =0; i<30)
// const skaicius = rand(0, 99);

const box = document.querySelector(".box");
// let posTop = 0;
// let posLeft = 0;

// setInterval(() => {
//   posTop = rand(50, 550);
//   posLeft = rand(50, 550);
//   box.style.top = `${posTop}px`;
//   box.style.left = `${posLeft}px`;
// }, 1000);

let posTop = 0;
let posLeft = 0;
let time = 0;
let kiekis = 0;
let raundas = 0;
let zaidejas = 0;

setInterval(() => {
  if (time === 30) {
    time = 0; // jei jau turim 30, tai musu raundas baigiasi
    console.log("Raundas baigiasi");
  }
  posTop = rand(50, 550);
  posLeft = rand(50, 550);
  box.style.top = `${posTop}px`;
  box.style.left = `${posLeft}px`;

  time++;
  console.log(time);
  document.querySelector(`.time`).innerHTML = time;
}, 1000);

document.querySelector(".box").addEventListener("click", (event) => {
  // console.log(event);
  //Ivykdom pakeitima
  kiekis++;

  // document.querySelector(
  //   ".result"
  // ).innerHTML = `Mygtukas paspaustas ${kiekis} kartu`;
  document.querySelector(
    ".result"
  ).innerHTML = `Mygtukas paspaustas ${kiekis} kartus`;
  // ).innerHTML = `${raundas} Raundą laimėjo: ${zaidejas}, surinkęs ${kiekis} taškus`;
});
