// 4. Teleloto:
// Sukurkite mygtuką: "Ridenti kamuoliuką" ant kurio paspaudus būtų generuojamas atsitiktinis skaičius nuo 0 iki 100.
// Skaičius atvaizduokite eilėje ir stilizuokite juos kaip kamuoliukus.
// Kiekvieną kartą paspaudus ant mygtuko "išridenamas kamuoliukas".
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function handleClick(e) {
//   const skaicius = rand(0, 100);
//   document.querySelector(
//     ".loto"
//   ).textContent = `Iškritęs kamuoliukas yra: ${skaicius}`;
// }

// function handleClick(e) {
//   const skaicius = rand(0, 100);
//   document.querySelector('.loto').textContent = `Iškritęs skaicius yra: ${skaicius}`;
// }

// document.querySelector("#lotto").onclick = (number) => {
//   const array = [];
//   const arrayFinal = [];
//   for (let i = 0; i < 1; i++) {
//     array[i] = rand(0, 99);
//     arrayFinal.push(array[i]);
//     console.log(arrayFinal);
//   }
//   document.querySelector(".result").textContent = ` ${array.join(" - ")}`;
// };

// const arrayFinal = []
document.querySelector("#lotto").onclick = (number) => {
  // arrayFinal.push(rand(0, 100));
  // console.log(arrayFinal);
  // const array = [];

  // for(let i = 0; i < 1; i++) {
  // array[i] = rand(0, 99);
  const skaicius = rand(0, 99);
  // arrayFinal.push(skaicius);
  // console.log(arrayFinal);
  if (skaicius === 0) {
    document.querySelector(
      ".kamuoliukai"
    ).innerHTML += `<div style="background-color:#cdc1b4;" class="result">
          ${skaicius}</div>`;
  }
  // }
  // document.querySelector('.result').textContent = ` ${array.join(' - ') }`;
};
