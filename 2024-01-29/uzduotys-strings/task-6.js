// Sukurti kintamąjį su stringu: “An American in Paris”. Suskaičiuoti visas “a” (didžiąsias ir mažąsias) raides. Rezultatą atspausdinti.
// Rezultatas: 4

//  6 - UZDUOTIS

let film = "An American in Paris";

// console.log(film.split("a").length - 1);

shortFilm = film.replaceAll("a", "").replaceAll("A", "");

console.log(film.replaceAll("a", "").replaceAll("A", ""));

console.log(film.length - shortFilm.length);
console.log(`Rezultatas: ${film.length - shortFilm.length}`);

document.write(`${film.length - shortFilm.length}`);
// console.log(shortFilm[shortFilm.length - 1]);
