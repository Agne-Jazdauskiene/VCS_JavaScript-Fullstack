// Prisijungimas:

// Sukurkite express POST route’ą /login kuriame tikitės dviejų perduodamų reikšmių:

// email
// password

// Patikrinkite perduodamus duomenis ir grąžinkite žinutes trimis skirtingais scenarijais:

// Jeigu prisijungimo vardas ir slaptažodis yra teisingi: “Sveikiname sėkmingai prisijungus”.
// Jeigu prisijungimo vardas arba slaptažodis yra neteisingi: “Neteisingi prisijungimo duomenys”.
// Jeigu duomenys nebuvo persiųsti (t.y. Nėra emailo arba slaptažodžio arba abiejų): “Negavome jokių duomenų, bandykite dar kartą”.

// Teisingi prisijungimo duomenys:

// Email: admin@vcs.lt
// Password: Github12

import express from "express";
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/login", (req, res) => {
  console.log(req.body);

  if (req.body.email === "admin@vcs.lt" && req.body.password === "Github12") {
    res.send("Sveikiname sėkmingai prisijungus");
  } else if (!req.body.email || !req.body.password) {
    res.send("Negavome jokių duomenų, bandykite dar kartą");
  } else res.send("Neteisingi prisijungimo duomenys");
});

// Reklama:

// Sukurkite express GET route'ą /news kuris grąžintų HTML stringą su trimis naujienų pavadinimais.
// Taipogi funkcijoje priimkite query parametrą "adsource" su galimomis reikšmėmis: "google" ir "amazon".
// Jeigu query parametras yra "google" virš naujienų įrašykite tekstą: "Google reklamos blokas".
// Jeigu parametras yra "amazon": "Amazon reklamos blokas".
// Jeigu parametras neperduodamas arba jo reikšmė yra kitokia prie naujienų nepridėkite jokio teksto.

app.get("/news", function (req, res) {
  // res.send("html stringas");
  console.log(req.query.adsource);

  const stringas = `<p>Ketvirtadienį pagaliau ateina pavasaris</p>
<p>Žalgiris paskutines sekundes įveikė Vilniaus komandą</p>
<p>Ankstyvas vieversys išpranašavo ilgą šaltą pavasarį</p>`;

  if (req.query.adsource === "google") {
    res.send(`<h3>Google reklamos blokas</h3> ${stringas}`);
  } else if (req.query.adsource === "amazon") {
    res.send(`<h3>Amazon reklamos blokas</h3> ${stringas}`);
  } else res.send("Empty");
});

// Registracija:

// Sukurkite express POST route'ą /register kurio tikslas priimti registracijos duomenis:
// name
// last_name
// email
// password

// Patikrinkite perduotas reikšmes. Jeigu trūksta bent vienos iš jų grąžinama žinutė: "Negauti registracijos duomenys".
// Atlikite reikšmių validaciją:
// Vardas ir pavardė negali būti trumpesni nei 3 ir ilgesi nei 200 simbolių.
// El. pašto adresas negali būti trumpesnis nei 5 ir ilgesnis nei 50 simbolių. Taip pat privalo atitikti el. pašto formatą.
// Slaptažodis privalo turėti bent vieną skaičių ir turi būti ne trumpesnis nei 8 ir ne ilgesnis nei 16 simbolių.

// Neatitikus kažkuriam iš išvardintų kriterijų grąžinkite žinutę su klaidos kriterijumi. pvz. (Vardas privalo būti nuo 3 iki 200 simbolių ilgio).

// Jeigu validacija sėkminga grąžinama žinutė: “Sveikiname sėkmingai prisiregistravus platformoje”.

//Email tikrinimo funkcija. regex
const validateEmail = (email) => {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email);
};

const passwordValid = (password) => {
  return /[0-9]/.test(password);
};

app.post("/register", (req, res) => {
  console.log(req.body);

  if (
    !req.body.name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.password
  ) {
    return res.send("Negauti registracijos duomenys");
  }

  if (req.body.name.length <= 3 || req.body.name.length >= 200) {
    return res.send(
      "Neteisingai ivestas vardas. Vardas privalo būti nuo 3 iki 200 simbolių ilgio"
    );
  }

  if (req.body.last_name.length <= 3 || req.body.last_name.length >= 200) {
    return res.send(
      "Neteisingai ivesta pavarde. Pavarde privalo būti nuo 3 iki 200 simbolių ilgio"
    );
  }

  if (req.body.email.length <= 5 || req.body.email.length > 50) {
    return res.send(
      "Neteisingai ivestas el. pastas. El. pastas privalo buti nuo 5 iki 50 simbolių ilgio "
    );
  } else if (!validateEmail(req.body.email)) {
    return res.send(
      "Neteisingai ivestas el. pastas, nes neatitinka el. pasto aprasymo"
    );
  }

  if (req.body.password.length <= 8 || req.body.password.length >= 16) {
    return res.send(
      "Neteisingai ivestas slaptazodis. Slaptazodis privalo buti nuo 8 iki 16 simbolių ilgio"
    );
  } else if (!passwordValid(req.body.password)) {
    return res.send(
      "Neteisingai ivestas slaptazodis. Slaptazodis privalo tureti bent viena skaiciu."
    );
  }

  res.send("Sveikiname sėkmingai prisiregistravus platformoje");
});

// if (
//   req.body.name.length >= 3 &&
//   req.body.name.length <= 200 &&
//   req.body.last_name.length >= 3 &&
//   req.body.last_name.length <= 200 &&
//   req.body.email.length >= 5 &&
//   req.body.email.length < 50 &&
//   req.body.password.length >= 8 &&
//   req.body.password.length <= 16
// ) {
//   res.send("Viskas Ciki Piki - prisijungta!");
// } else if (
//   !req.body.name ||
//   !req.body.last_name ||
//   !req.body.email ||
//   !req.body.password
// ) {
//   res.send("Negauti registracijos duomenys");
// } else res.send("Neteisingi duomenys");

// if (req.body.name.length <= 3 && req.body.name.length >= 200) {
//   res.send("Negauti registracijos duomenys");
// } else if

app.listen(3002);
