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
console.log(phrases);

// const handleSearch = (e) => {
//   const searchTerm = document.querySelector(".test").value;
//   const resultDiv = documt.querySelector(".result");
//   resultDiv.textContent = `Jusu paieskos fraze: ${searchTerm}`;
// };

// const filteredPhrases = phrases.filter((phrase) =>
//   phrase.toLocaleLowerCase().startsWith("how")
// );
// console.log(filteredPhrases);
// document.querySelector(`${filteredPhrases}`);
// document.querySelector(".result").innerHTML += ` <div>${filteredPhrases}</div>`;

console.log(phrases);
const handleSearch = (e) => {
  const filter = document.querySelector(".test").value.toLowerCase();
  const text = document.querySelector(".result");
  text.innerHTML = "";
  let counter = 0;
  // if(phrases.includes(e.target.value)) {
  //     console.log('ar veikia')
  // }

  for (i = 0; i < phrases.length; i++) {
    let textValue = phrases[i].toLowerCase();
    if (textValue.includes(filter)) {
      const textDisplay = document.createElement("div");
      textDisplay.textContent = phrases[i];
      textDisplay.addEventListener("click", function (e) {
        console.log("how"); //pasitikrinam, ar ivykis priskirtas, t.y. ar veikia
        document.querySelector(".test").value = this.textContent;
        text.innerHTML = ""; // kad isnyktu pasirinkimai paspaudus ant vieno
      });

      text.appendChild(textDisplay);
      counter++;
      if (counter >= 5) {
        return;
      }
      if (filter === "") {
        text.innerHTML = ""; //panaikina visus tekstukus, kai istrinu inpute kas parasyta
      }
    }
  }
};
