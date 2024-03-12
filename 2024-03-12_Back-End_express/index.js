// console.log("Veikia");
import express from "express";
// Express karkaso iniciavimas
//suformuojamas bendras objektas ir jis priskiriamas prie kintamojo
const app = express();

//NORINT PRIIMTI DUOMENIS urlencoded formatu registruojama eilute
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Route/kelio registravimas (Route) nurodysime, ka grazinsime atgal, kai ateisime ta akelia
//CRUD:
//CREATE - POST metodas
//READ - GET metodas. http metodas
//UPDATE - PUT metodas
//DELETE - DELETE metodas

//galimi metodai:
// .get() - GET HTTP metodas (GET metodu pateikiant uzklausa, body duomenys nera persiunciami)
// .post() - POST HTTP metodas
// .pur() - PUT HTTP metodas
// .delete() - DELETE HTTP metodas

//Pirmas parametras - kelias (route), endpoint (dirbant su API toks pavadinimas route'o)
//ANtras parametras - funkcija, kuri bus issaukiama vartotojui atejus nurodytu keliu

app.get("/", (req, res) => {
  //Atsakymo inicijavimas - informacijos grazinimas vartotojui (client) su metodu SEND. Ju yra ir daugiau
  // i funkcija priimamei du parametrai:
  //req - Request (Uzklausa)
  // res - Response (Atsakymas)

  console.log("Funkcija aktyvuota");

  res.send("<h1>Titulinis puslapis pakeistas</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Apie Mus</h1>");
});

// Querry parametru priemimas
app.get("/query", (req, res) => {
  //Query parametrai nugula req objekte su query raktazodziu
  // console.log(req.query);
  res.send(`<li>Daina: ${req.query.song}</li>`);
});

//POST HTTP metodu perduodamu duomenu priemimas
app.post("/post", (req, res) => {
  //req.body grazina body lygmenyje persiustus duomenis
  console.log(req.body);

  if (req.body.song === "Live forever") {
    console.log("Kondicija teigiama");
  }

  res.send(`<li>Filmas: ${req.body.movie ? req.body.movie : "Nerasta"}</li>
  <li>Daina: ${req.body.song ? req.body.song : "Nerasta"}</li>
  `);
});

app.post("/check", (req, res) => {
  if (req.body.name === "Laimis") {
    res.send("Administratorius");
  } else {
    res.send("Vartotojas");
  }
});

// app.post("/check", (req, res) => {
//   if (req.body.name === "Laimis") {
//     res.send("Administratorius");
//   }
//   res.send("Vartotojas"); // mes klaida, kad negalima du kartus res.send
// });

//Serverio paleidimas port'e 3001
app.listen(3001);
