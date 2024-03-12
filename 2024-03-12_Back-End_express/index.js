// console.log("Veikia");
import express from "express";
// Express karkaso iniciavimas
//suformuojamas bendras objektas ir jis priskiriamas prie kintamojo
const app = express();

// Route/kelio registravimas (Route) nurodysime, ka grazinsime atgal, kai ateisime ta akelia
//CRUD:
//CREATE - POST metodas
//READ - GET metodas. http metodas
//UPDATE - PUT metodas
//DELETE - DELETE metodas

//galimi metodai:
// .get() - GET HTTP metodas
// .post() - POST HTTP metodas
// .pur() - PUT HTTP metodas
// .delete() - DELETE HTTP metodas

//Pirmas parametras - kelias (route)
//ANtras parametras - funkcija, kuri bus issaukiama vartotojui atejus nurodytu keliu

app.get("/", function (req, res) {
  //Atsakymo inicijavimas - informacijos grazinimas vartotojui (client) su metodu SEND. Ju yra ir daugiau
  // i funkcija priimamei du parametrai:
  //req - Request (Uzklausa)
  // res - Response (Atsakymas)

  console.log("Funkcija aktyvuota");

  res.send("Titulinis puslapis pakeistas");
});

//Serverio paleidimas port'e 3001
app.listen(3001);
