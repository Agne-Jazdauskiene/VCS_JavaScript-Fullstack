function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją rand().
// Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės.
// Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.

// uzduotis - 9

let hours = rand(0, 23);
let minutes = rand(0, 59);
let seconds = rand(0, 59);
console.log(hours, minutes, seconds);

let time = `${hours}:${minutes}:${seconds}`;
document.write(`<h3>Time: ${time}</h3>`);

// pridedamos sekundės
let secondsPlus = rand(0, 300);

let seconds300 = `${secondsPlus}`;
document.write(`<h3>Additional seconds: ${seconds300}</h3>`);

// pridėti papildomas sekundes prie sugeneruoto laiko

// reikiamas sekundes paverciau minutemis ir sekundemis
let minutesAdd = Math.floor(secondsPlus / 60);
let secondsAdd = secondsPlus - minutesAdd * 60;

// dabar reikia jas prideti
minutes = minutes + minutesAdd;
seconds = seconds + secondsAdd;

if (seconds >= 60) {
  seconds = seconds - 60;
  minutes = minutes + 1;
}

if (minutes >= 60) {
  minutes = minutes - 60;
  hours = hours + 1;
}

if (hours >= 24) {
  hours = 0;
}

time = `${hours}:${minutes}:${seconds}`;
document.write(`<h3>Time: ${time}</h3>`);
