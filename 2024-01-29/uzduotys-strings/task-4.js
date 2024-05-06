// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: NNYEPP

// 4 - UZDUOTIS
let firstName = "Gabija";
let lastName = "Jaraminaitė";

console.log(firstName.substring(3));
console.log(lastName.substring(8));

document.write(
  `<p>${firstName.substring(3).toUpperCase(firstName)} ${lastName
    .substring(8)
    .toUpperCase(lastName)}</p>`
);
