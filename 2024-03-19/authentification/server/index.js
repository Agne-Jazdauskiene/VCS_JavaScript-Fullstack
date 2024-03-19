import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import users from "./controller/user.js";
import posts from "./controller/post.js";

const app = express();

app.set("trust proxy", true);

// Prisijungimas prie mongodb duomenų bazės pavadinimu: pirma_duombaze
await mongoose.connect("mongodb://localhost:27017/instagram");

//Sesijos sukurimas
app.use(
  session({
    // Slaptos frazės nustatymas
    secret: "labai slapta fraze",
    resave: false,
    saveUninitialized: true,
  })
);

//Form urlencoded formatu priimami duomenys
// Nustatymas gauti duomenis x-www-form-urlencoded formatu
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Nustatymas gauti duoemnis JSON formatu
app.use(express.json());

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
app.use("/users", users);
app.use("/posts", posts);

app.listen(3000);
