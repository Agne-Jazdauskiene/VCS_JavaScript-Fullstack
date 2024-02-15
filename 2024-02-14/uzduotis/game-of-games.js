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

let posTop = 0;
let posLeft = 0;
let time = 0;
let kiekis = 0;
let raundas = 0;
let limit = 10;
let gameWinner = "";

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min); // keisti box'o spalvoms
}

let playerScore = 0;
document.querySelector(".box").addEventListener("click", (event) => {
  // console.log(event);
  //Ivykdom pakeitima
  // kiekis++;
  playerScore++;
});

let intervaloId = setInterval(() => {
  if (time === limit) {
    time = 0; // jei jau turim 30, tai musu raundas baigiasi, rasomm = 0.
    console.log("Raundas baigesi");
    raundas++; // prideta

    console.log(playerScore);

    // let roundResult = playerScore; //Issaugome kieki, paspaudimu skaiciu siame raunde
    // kiekis = 0; //Nustatome paspaudimu kieki naujam raundui

    let computerScore = limit - playerScore;

    if (playerScore > computerScore) {
      document.querySelector(
        ".result"
      ).innerHTML += `<p>Žaidimą laimejo žaidejas, surinkes ${playerScore}tasku(us) </p>`;
    } else if (computerScore > playerScore) {
      document.querySelector(
        ".result"
      ).innerHTML += `<p>Žaidimą laimejo kompiuteris, surinkes ${computerScore}tasku(us) </p>`;
    } else {
      document.querySelector(".result").innerHTML += `<p>Lygiosios</p>`;
    }
    playerScore = 0; // raundu sustabdymas

    // document.querySelector(
    //   ".result"
    // ).innerHTML += `<div>${raundas} raundą laimėjo: ${winner}, surinkęs ${roundResult} taškų</div>`;
    // console.log("baig");
    if (raundas === 3) {
      clearInterval(intervaloId);

      // // zaidimo pabaiga
      //       if (computerScore > playerScore) {
      //         gameWinner === "Kompiuteris";
      //       } else if (computerScore < playerScore) {
      //         gameWinner === "Žaidėjas";
      //       } else {
      //         document.querySelector(
      //           ".container"
      //         ).innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
      //         <h1>Žaidimas baigėsi lygiosiomis</h1>
      //         <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
      //     </div>`;
      //       }
      //       document.querySelector(
      //         ".container"
      //       ).innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
      //     <h1>Žaidimą laimėjo ${gameWinner}, laimėjęs ${intervaloId} roundus</h1>
      //     <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
      // </div>`;

      document.querySelector(".box").addEventListener("click", (event) => {
        // console.log(event);
        //Ivykdom pakeitima
        kiekis++;
      });
    }
  }

  posTop = rand(50, 550);
  posLeft = rand(50, 550);
  box.style.top = `${posTop}px`;
  box.style.left = `${posLeft}px`;

  box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )},${getRandom(0, 255)})`; // keisti box'o spalvoms

  time++;
  console.log(time);
  document.querySelector(`.time`).innerHTML = time;
}, 1000);

// // zaidimo pabaiga
// if (computerScore > playerScore) {
//   gameWinner = "Kompiuteris";
// } else if (computerScore < playerScore) {
//   gameWinner = "Žaidėjas";
// } else {
//   document.querySelector(
//     ".container"
//   ).innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
//         <h1>Žaidimas baigėsi lygiosiomis</h1>
//         <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
//     </div>`;
// }
// document.querySelector(
//   ".container"
// ).innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 300px">
//     <h1>Žaidimą laimėjo ${gameWinner}, laimėjęs ${intervaloId} roundus</h1>
//     <button class="reset" onClick="window.location.reload()">Bandykite dar kartą</button>
// </div>`;

// document.querySelector(".box").addEventListener("click", (event) => {
//   // console.log(event);
//   //Ivykdom pakeitima
//   kiekis++;
// });

// document.querySelector(
//   ".result"
// ).innerHTML = `Mygtukas paspaustas ${kiekis} kartus`;
