/*Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
Pvz:
Johnny Depp
Rezultatas: Depp*/

// 1 UZDUOTIS

let firstName = "Gabija";
let lastName = "Jaraminaitė";
console.log(firstName.length);
console.log(lastName.length);

if (firstName.length <= lastName.length) {
  document.write(`<p>${firstName}</p>`);
} else {
  document.write(`<p>${lastName}`);
}
