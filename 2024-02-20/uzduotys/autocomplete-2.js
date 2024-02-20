// Sukurkite automatinių pasiūlymų generavimą.
// Jums prireiks masyvo kuriame patalpinta dešimt
// labiausiai ieškomų frazių google. Sąrašą rasite čia:
// https://explodingtopics.com/blog/top-google-questions

// Į laukelį vartotojas įvedinėja tekstą. Kiekvieno
// mygtuko paspaudimo metu atlikite paiešką ar vedamas
// tekstas atitinką kažkurį(iuos) klausimus. Jeigu taip
// išveskite pasiūlymų sąrašą, kuriame būtų ne daugiau
// nei 5 pasirinkimai su automatiškai siūloma fraze.
// Paspaudus ant frazės paieškos laukelyje užpildykite
// pasirinktą sakinį.
// VARIANTAS - BE assEventListener metodo

const phrases = [
  "What is my IP",
  "How many weeks in a year",
  "How many ounces in a cup",
  "How to screenshot on Mac",
  "When is the Super Bowl",
  "When is Easter",
  "When is Father's Day",
  "What is Juneteenth",
  "How do I register to vote",
  "When is Thanksgiving",
];

//console log'inu elementa
// console.dir(document.querySelector("input"));

//gaunu elementa
// const inputElement = document.querySelector("input");

//1 variantas - kvieciu funkcija elementui
// inputElement.addEventListener("input", (event) => {});

//2 variantas - priskiriu funkcija elementro parametrui
// inputElement.oninput = (event) => {};

function handleInput(e) {
  const newSakinys = e.target.value.toLowerCase();
  const newPhrases = phrases.filter(function (sakinys) {
    return sakinys.toLowerCase().includes(newSakinys);
  });

  let slicePhrases = newPhrases.slice(0, 5);

  //map metodas kiekv.reiksme grazina i nauja masyva
  const htmlPhrases = slicePhrases.map(function (sakinys) {
    return `<div onclick="handleClick(event)">${sakinys}</div>`;
  });
  console.log(htmlPhrases);
  document.querySelector(".autocomplete").innerHTML = htmlPhrases.join("");

  // console.log(e.target.value);
}

function handleClick(e) {
  // console.log("paspausta");// patikrinam, ar veikia
  document.querySelector("input").value = e.target.textContent;
}

// function check(sakinys) {
//   sakinys.includes("a");
// }
