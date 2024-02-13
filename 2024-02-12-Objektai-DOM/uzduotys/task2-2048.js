// cikls, kuris sukasi 16 kartu

// let html = '<ul class="special">';

// words.forEach(value => html += `<li>${value}</li>`);

// html += '</ul>';

// console.log(html);

// document.querySelector('div.container').innerHTML += html;

// let box = "";
// const box = document.querySelector(".box");
// // console.log(box);

// for (let i = 0; i < 16; i++) {
//   box.innerHTML += "<div></div>";
// }
// console.log(box);

// document.querySelector(`div.container`).innerHTML += box;

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// UZDUOTIS
// 2048 (https://play2048.co/)
// Sukurkite žaidimo 2048 bloką pagal pateiktą maketą. Bloke atvaizduojama šešiolika kvadratų kuriuose patalpinami skaičiai, kurie atvaizduojami skirtomis spalvomis.

// 	Atlikite tris konstravimo etapus:

// 1. Aprašykite skaičių blokus su statinėmis reikšmėmis, tačiau patalpinamus javascript kodo pagalba.

// 2. Skaičius imkite iš 16 elementų masyvo. Kiekvienas masyvo elementas yra žaidime esantis blokelis.

// 3.  Masyve generuokite atsitiktinius eksponentinius skaičius nuo 0 iki 64. Jeigu skaičius 0, blokelį palikite tuščią. Visus kitus nuspalvinkite ryškėjančiomis spalvomis.

// 4. Sukurkite mygtuką "Naujas žaidimas" kuriam registruokite "click" įvykį. Paspaudus ant mygtuko skaičius masyve generuokite iš naujo ir juos atvaizduokite naršyklėje.

// const box = document.querySelector(".box");
// console.log(box);

// const masyvas = [0, 0, 2, 4, 0, 0, 2, 4, 0, 0, 2, 8, 0, 4, 8, 16];

// for (let i = 0; i < masyvas.length; i++) {
//   // box.innerHTML += `<div>${masyvas[i]}</div>`;
//   if (masyvas[i] === 0) {
//     box.innerHTML += `<div style="background-color:#cdc1b4">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 2) {
//     box.innerHTML += `<div style="background-color:#eee4da">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 4) {
//     box.innerHTML += `<div style="background-color:#eee1c8">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 8) {
//     box.innerHTML += `<div style="background-color:#f2b27a">${masyvas[i]}</div>`;
//   } else {
//     box.innerHTML += `<div style="background-color:#f69664">${masyvas[i]}</div>`;
//   }
// }

// 3.  Masyve generuokite atsitiktinius eksponentinius skaičius nuo 0 iki 64. Jeigu skaičius 0, blokelį palikite tuščią. Visus kitus nuspalvinkite ryškėjančiomis spalvomis.

// const box = document.querySelector(".box");
// console.log(box);

// const masyvas = [];

// for (let i = 0; i < 16; i++) {
//   let number = rand(0, 64);
//   // 0, 2, 4, 8, 16, 32, 64
//   masyvas.push(number);

// const masyvas = [];
// const masyvas2 = [0, 2, 4, 8, 16, 32, 64];

// const box = document.querySelector(".box");
// console.log(box);
// box.innerHTML = "";
// for (let i = 0; i < 16; i++) {
//   let number = masyvas2[rand(0, 6)];
//   // 0, 2, 4, 8, 16, 32, 64
//   masyvas.push(number);

//   if (masyvas[i] === 0) {
//     box.innerHTML += `<div style="background-color:#cdc1b4"></div>`;
//   } else if (masyvas[i] === 2) {
//     box.innerHTML += `<div style="background-color:#eee4da; color:#786e66">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 4) {
//     box.innerHTML += `<div style="background-color:#eee1c8; color:#786e66">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 8) {
//     box.innerHTML += `<div style="background-color:#f2b27a; color:#f9f6f2">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 16) {
//     box.innerHTML += `<div style="background-color:#fa936d; color:#f9f6f2">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 32) {
//     box.innerHTML += `<div style="background-color:#fb7967; color:#f9f6f2">${masyvas[i]}</div>`;
//   } else if (masyvas[i] === 64) {
//     box.innerHTML += `<div style="background-color: #fc5b47; color:#f9f6f2">${masyvas[i]}</div>`;
//   }
// }

// 4. Sukurkite mygtuką "Naujas žaidimas" kuriam registruokite "click" įvykį. Paspaudus ant mygtuko skaičius masyve generuokite iš naujo ir juos atvaizduokite naršyklėje.

function handleClick() {
  const masyvas = [];
  const masyvas2 = [0, 2, 4, 8, 16, 32, 64];

  const box = document.querySelector(".box");
  console.log(box);
  box.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    let number = masyvas2[rand(0, 6)];
    // 0, 2, 4, 8, 16, 32, 64
    masyvas.push(number);

    if (masyvas[i] === 0) {
      box.innerHTML += `<div style="background-color:#cdc1b4"></div>`;
    } else if (masyvas[i] === 2) {
      box.innerHTML += `<div style="background-color:#eee4da; color:#786e66">${masyvas[i]}</div>`;
    } else if (masyvas[i] === 4) {
      box.innerHTML += `<div style="background-color:#eee1c8; color:#786e66">${masyvas[i]}</div>`;
    } else if (masyvas[i] === 8) {
      box.innerHTML += `<div style="background-color:#f2b27a; color:#f9f6f2">${masyvas[i]}</div>`;
    } else if (masyvas[i] === 16) {
      box.innerHTML += `<div style="background-color:#fa936d; color:#f9f6f2">${masyvas[i]}</div>`;
    } else if (masyvas[i] === 32) {
      box.innerHTML += `<div style="background-color:#fb7967; color:#f9f6f2">${masyvas[i]}</div>`;
    } else if (masyvas[i] === 64) {
      box.innerHTML += `<div style="background-color: #fc5b47; color:#f9f6f2">${masyvas[i]}</div>`;
    }
  }
}

document.querySelector("button").addEventListener("click", handleClick); //kai click
handleClick(); // kai uzsikrauna narsykle
