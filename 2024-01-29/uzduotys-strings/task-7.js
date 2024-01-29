// Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
// Rezultatas: n mrcn n Prs

// 7 - UZDUOTIS
let film = "An American in Paris";

console.log(
  film
    .replaceAll("a", "")
    .replaceAll("A", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
);

document.write(
  `<p>${film
    .replaceAll("a", "")
    .replaceAll("A", "")
    .replaceAll("e", "")
    .replaceAll("i", "")}</p>`
);

let film2 = "Breakfast at Tiffany's";

console.log(film2.replaceAll("e", "").replaceAll("a", "").replaceAll("y", ""));

document.write(
  `<p>${film2
    .replaceAll("e", "")
    .replaceAll("a", "")
    .replaceAll("i", "")
    .replaceAll("y", "")}</p>`
);

let film3 = "2001: A Space Odyssey";

document.write(
  `<p>${film3
    .replaceAll("A", "")
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("O", "")
    .replaceAll("y", "")}`
);

let film4 = "It's a Wonderful Life";

document.write(
  `<p>${film4
    .replaceAll("I", "")
    .replaceAll("a", "")
    .replaceAll("o", "")
    .replaceAll("e", "")
    .replaceAll("u", "")
    .replaceAll("i", "")}</p>`
);
