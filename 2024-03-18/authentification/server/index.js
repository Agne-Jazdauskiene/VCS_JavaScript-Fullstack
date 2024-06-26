import express from "express";
import session from "express-session";
import User from "./model/user.js";
import mongoose from "mongoose";

const app = express();

app.set("trust proxy", true);

// Prisijungimas prie mongodb duomenų bazės pavadinimu: pirma_duombaze
await mongoose.connect("mongodb://localhost:27017/pirma_duombaze");

app.use(
  session({
    // Slaptos frazės nustatymas
    secret: "labai slapta fraze",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  // Tikriname ar vartotojas yra prisijungęs, jeigu ne, grąžinsime statusą 401 ir žinutę: "Turinys prieinamas tik registruotiems varotojams"
  // Jeigu taip: Tuomet grąžinsime statusą 200 ir pasisveikinimo žinutę: "Labas Pasauli"
  if (req.session.loggedIn) {
    res.json("Labas Pasauli");
  } else {
    res.status(401).json("Turinys prieinamas tik registruotiems varotojams");
  }
});

//konkretus suradimas su password'u
app.get("/users", async (req, res) => {
  res.send(await User.find({ password: "1234" }).exec());
});

app.post("/login-user", async (req, res) => {
  // Gauti vartotojo įvestis iš užklausos. istraukiami vartotojo duomenys (pastas, slaptazodis)
  const { email, password } = req.body;

  // Surasti vartotoją duomenų bazėje, iesko vartotojo duom bazeje
  const user = await User.findOne({ email });

  // Patikrinti ar vartotojas rastas ir ar slaptažodis teisingas
  // if (user && user.password === password) {
  if (user.email === email && user.password === password) {
    req.session.loggedIn = true;
    res.json("Sveikiname prisijungus");
  } else {
    res.status(401).json("Neteisingi prisijungimo duomenys");
  }
});

// app.post("/login", (req, res) => {
//   // Tikrinime ar prisijungimo duomenys yra teisingi.
//   // Jeigu taip: tuomet grąžiname statusą 200, žinutę: "Sveikiname prisijungus" ir prie sesijos duomenų skiriame raktažodį loggedIn su reikšme true
//   // Jeigu ne: tuomet grąžiname statusą 401 ir žinutę: "Neteisingi prisijungimo duomenys"
//   // Teisingi duomenys:
//   // "admin@vcs.lt"
//   // "1234"
//   if (req.body.email === "admin@vcs.lt" && req.body.password === "1234") {
//     req.session.loggedIn = true;
//     res.json("Sveikiname prisijungus");
//   } else {
//     res.status(401).json("Neteisingi prisijungimo duomenys");
//   }
// });

app.listen(3000);
