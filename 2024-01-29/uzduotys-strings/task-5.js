// Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
// Rezultatas: *n *meric*n in P*ris

//  5 - UZDUOTIS

let film = "An American in Paris";

console.log(film.replaceAll("a", "*").replaceAll("A", "*"));

document.write(`<p>${film.replaceAll("a", "*").replaceAll("A", "*")}</p>`);
