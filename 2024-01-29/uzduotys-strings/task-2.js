// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms.
// Rezultatas: JOHNNY depp

// 2 - UZDUOTIS

let firstName = "Gabija";
let lastName = "Jaraminaitė";
// fName = firstName.toUpperCase;
// lName = lastName.toLowerCase;
document.write(firstName.toUpperCase(firstName));

document.write(lastName.toLowerCase(lastName));

document.write(
  `<p>${firstName.toUpperCase(firstName)}, ${lastName.toLowerCase(
    lastName
  )}</p>`
);
