// console.log("Veikia");

// Autocomplete:

// Sukurkite automatinių pasiūlymų generavimą. Jums prireiks masyvo kuriame patalpinta dešimt labiausiai ieškomų frazių google. Sąrašą rasite čia:
// https://explodingtopics.com/blog/top-google-questions

// Į laukelį vartotojas įvedinėja tekstą. Kiekvieno mygtuko paspaudimo metu atlikite paiešką ar vedamas tekstas atitinką kažkurį(iuos) klausimus. Jeigu taip išveskite pasiūlymų sąrašą, kuriame būtų ne daugiau nei 5 pasirinkimai su automatiškai siūloma fraze. Paspaudus ant frazės paieškos laukelyje užpildykite pasirinktą sakinį.

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

document.querySelector("input").addEventListener("keydown", (e) => {
  // keydown eventas - reiskia nuspaustas klavisas
  // console.log("test");
  // console.log(document.querySelector("input").value); // issitraukiame reiksme is input laukelio, bet jei visas reiksmes- reiketu querySelectorAll
  // console.log(e.target.value) //taip daug paprasciau issitraukti reiksmes

  // console.log(phrases.map((value) => `<li>${value}</li>`).join(""));

  // const text = "how".toLowerCase(); //toLowerCase padarem  suvienodinima - ziuresime is mazuju raidziu
  const text = e.target.value.toLowerCase();

  //includes metodas yra case sensitive
  const filteredPhrases = phrases
    .filter((sentence) => sentence.toLowerCase().includes(text))
    .slice(0, 5);
  // console.log(filteredPhrases);

  const html = filteredPhrases.map((value) => `<li>${value}</li>`).join("");

  document.querySelector(".autocomplete").innerHTML = html;

  document.querySelector("li").forEach((el) => {
    // console.log(el);
    el.addEventListener("click", (e) => {
      // console.log("Veikia");
      // console.log(e.target.textContent);
      document.querySelector("input").value = e.target.textContent;

      //pasiulymu isvalymas
      document.querySelector(".autocomplete").innerHTML = "";
    });
  });
});
