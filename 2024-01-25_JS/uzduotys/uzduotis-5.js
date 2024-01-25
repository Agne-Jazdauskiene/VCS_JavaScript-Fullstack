function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Naudokite funkcija rand().
// Sugeneruokite atsitiktinį skaičių nuo 1 iki 6
// ir jį atspausdinkite atitinkame h tage.
// Pvz skaičius 3- rezultatas: <h3>3</h3>
// Rezultatą atvaizduoti naršyklės lange.

// 5 - užduotis

let number = rand(1, 6);

if (number =)
document.write("<h3>number</h3>");
