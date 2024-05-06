// Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
// Rezultatas: *n *meric*n in P*ris

//  5 - UZDUOTIS

// let film = "An American in Paris";

// console.log(film.replaceAll("a", "*").replaceAll("A", "*"));

// document.write(`<p>${film.replaceAll("a", "*").replaceAll("A", "*")}</p>`);

// KITI BŪDAI:

let string = "An American in Paris";

// string = string.replaceAll("A", "*");
// string = string.replaceAll("a", "*");
// console.log(string);

//arba
// string = string.replaceAll("A", "*").replaceAll("a", "*");
// console.log(string);

//arba naudoti REGEX paieskos irankį

string = string.replaceAll(/[a]/gi, "*");
// string = string.replaceAll(/[Aa]/g, "*");
// string = string.replaceAll(/[a-z]/g, "*");
// g - global, t.y. visam stringe
// i - case insensitive, ignoruojamas skirtumas tarp didziuju ir mazuju raidziu
// - bus range (nuo iki) pvz a-z ar nuo g-z
//[] - nurodo nespecifinę kombinaciją

console.log(string);
