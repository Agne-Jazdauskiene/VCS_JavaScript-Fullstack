// Timer and Stopwatch

// Sukurkite Google laikmatį bei chronometrą.

// Laikmatis mažina sekundes iki kol pasiekiamas 0.
// Mygtukui “start” priskirkite įvykį, jog skaičiavimas prasidėtų tik paspaudus ant jo.
// Priskirkite įvykį mygtukui “reset”, kuris laiką grąžintų atgal į pradinę padėtį.
// Paspaudus ant nuorodos “Stopwatch” režimas pakeičiamas į chronometrą t.y. Laiko skaičiavimas iki begalybės.
// Chronometrą aktyvuokite paspaudus ant mygtuko start.

let seconds = 600;
let milliseconds = 0;
let timerInterval;
let stopwatchInterval;

const timerTab = document.querySelector(".timer-tab");
let timerOpen = true;
const timerSeconds = document.querySelector(".timer .seconds");
const timerMinutes = document.querySelector(".timer .minutes");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const timerDisplay = document.querySelector(".timer");

// Stopwatch kintamieji
const stopwatchTab = document.querySelector(".stopwatch-tab");
const stopwatchMilliseconds = document.querySelector(".milliseconds");
const stopwatchSeconds = document.querySelector(".stopwatch .seconds");
const stopwatchMinutes = document.querySelector(".stopwatch .minutes");
const stopwatchDisplay = document.querySelector(".stopwatch");
const updateTimer = () => {
  timerMinutes.innerText = Math.floor(seconds / 60);
  timerSeconds.innerText = seconds % 60;
};
updateTimer();
// užkrovus psl., iš karto rodys Timer tab
stopwatchDisplay.style.display = "none";
timerDisplay.style.display = "block";

const timer = () => {
  updateTimer();
  if (seconds === 0) {
    clearInterval(timerInterval);
    alert("Laikas baigėsi");
  }
  seconds--;
};

// čia nebaigta
const stopwatch = () => {
  stopwatchMilliseconds.innerText;
  if (milliseconds === 999) {
    stopwatchSeconds.textContent = 1;
    milliseconds = 0;
  }
  milliseconds++;
};

startButton.onclick = () => {
  if (timerOpen) {
    // timer's tab
    if (startButton.textContent === "START") {
      startButton.textContent = "STOP";
      timerInterval = setInterval(timer, 1000);
    } else {
      startButton.textContent = "START";
      clearInterval(timerInterval);
    }
  } else {
    // stopwatch's tab
    if (startButton.textContent === "START") {
      startButton.textContent = "STOP";
      stopwatchInterval = setInterval(stopwatch, 1); // truks 1 milisekundę
    } else {
      startButton.textContent = "START";
      clearInterval(stopwatchInterval);
    }
  }
};

resetButton.onclick = () => {
  clearInterval(timerInterval);
  seconds = 600;
  updateTimer();
};

stopwatchTab.onclick = () => {
  timerDisplay.style.display = "none";
  stopwatchDisplay.style.display = "block";
  timerOpen = false;
};

timerTab.onclick = () => {
  stopwatchDisplay.style.display = "none";
  timerDisplay.style.display = "block";
  timerOpen = true;
};
