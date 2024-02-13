const objektas = {
  // savybe (property)
  // key : value
  ugis: 180,
  svoris: 82,
  // Metodas (method) vadinasi sita funkcija
  kmi: function () {
    return "Skaicius";
  },
};

console.log(objektas.ugis);

objektas.amzius = 88;
console.log(objektas);

console.log(objektas.profesija); // gris undefined atsakymas, nes nera reiksmes profesija

// delete objektas.ugis; // istryneme reiksme ugis
// console.log(objektas);

document.querySelector(".app");
console.log(document.querySelector(".app")); // rodo null, nes scriptas ivardintas auksciau, nei div elementas. Neranda elemento
// Labai svarbu pozicija scripto elemento atzvilgiu

document.querySelector(".app").innerHTML = `
Ugis: <strong>${objektas.ugis}</strong>
Svoris: <strong>${objektas.svoris}</strong>
`;

document.querySelector(".app").innerHTML += `
Amzius: <strong>${objektas.amzius}</strong>`;

// document.querySelector()
