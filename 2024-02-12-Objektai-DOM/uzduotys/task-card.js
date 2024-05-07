const info = {
  image: "nuotrauka.svg",
  name: "Saitama",
  age: 25,
  weight: 70,
  height: 175,
  skills:
    "Immeasurable Physical Prowess, Supernatural Reflexes and Senses, Invulnerability, Indomitable Will, Enhanced Fighting Skill",
};

// document.querySelector("div.name").innerHTML += "<h1>info.name</h1>";

console.log(info.name);

document.querySelector(".profile").innerHTML += `<img src="${info.image}">`;

document.querySelector(`.name h1`).textContent = info.name;
document.querySelector(`.age h1`).textContent = info.age;
document.querySelector(`.weight h1`).textContent = info.weight;
document.querySelector(`.height h1`).textContent = info.height;
document.querySelector(`.description p`).textContent = info.skills;

document.querySelector(".weight h1").textContent = info.weight += " kg";
document.querySelector(".height h1").textContent = info.height += " cm";
