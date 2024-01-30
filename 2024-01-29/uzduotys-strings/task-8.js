// Stringe, kurį generuoja toks kodas: `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`; Surasti ir atspausdinti epizodo numerį.
// Rezultatas: 5 9

// 8 - UZDUOTIS

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let episode = `Star Wars: Episode ${rand(0, 5)} ${rand(1, 9)} - A New Hope`;
//  012345678910...
console.log(episode.length);

document.write(`${episode[19]}${episode[21]}`); //jei nesikeistu stringas, t.y. tekstas ir ju vieta
console.log(`Epizodo numeris: episode[19], episode[21]`);

// galima naudoti match -  veliau paziuresim, kai susipazinsim su masyvais

// Regex pagalba
