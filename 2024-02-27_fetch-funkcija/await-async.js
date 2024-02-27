console.log("Veiksmu pradzia");

// Atsisaukimu pragaras - Callback hell :)
// fetch("https://www.delfi.lt") //reikia CORS extensiono-kad panaikintu apsauga
//   .then((resp) => resp.text())
//   .then((resp) => console.log("Gautas rezultatas"));

// console.log("Veiksmu pabaiga");

let resp = await fetch("https://www.delfi.lt");
resp = await resp.text();
console.log("Gautas rezultatas");
console.log("Veiksmu pabaiga");

// console.log(resp);

//jeigu naudosim await, tai funkcija reikia pazymeti kaip asinchronine - async
