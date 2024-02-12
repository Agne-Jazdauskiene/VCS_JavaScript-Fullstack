// cikls, kuris sukasi 16 kartu

// let html = '<ul class="special">';

// words.forEach(value => html += `<li>${value}</li>`);

// html += '</ul>';

// console.log(html);

// document.querySelector('div.container').innerHTML += html;

let box = "";

for (i = 0; i < 16; i++) {
  box += "<div></div>";
}
console.log(box);

document.querySelector(`div.container`).innerHTML += box;
