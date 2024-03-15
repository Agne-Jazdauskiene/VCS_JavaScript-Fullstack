import express from "express";
import mongoose from "mongoose";
import user from "./controller/user.js";
import posts from "./controller/posts.js";
import cors from "cors";
import upload from "./middleware/multer.js";

// MVC:
// Model - Atsakingas už informacijos paėmimą iš duomenų bazės
// View  - Atsakingas už iš controlerio gautos informacijos atvaizdavimą
// Controller - Atsakingas už modelio informacijos apdorojimą

// Prisijungimas prie mongodb duomenų bazės pavadinimu: pirma_duombaze
await mongoose.connect("mongodb://localhost:27017/pirma_duombaze");

// Aplikacijos iniciavimas
const app = express();

// app.use(upload.array());

// Perduodamų reikšmių urlencoded formatu paėmimo nustatymas
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Leidimo kreiptis i serveri is kito adreso priskyrimas
app.use(cors());

//Failu pasiekiamumo priskyrimas nurodant:
//Pirmu parametru - url kelia
// Antru parametru - direktorija, kurioje saugomi failai
app.use("/uploads/", express.static("./uploads"));

// Controlerio (Validklis) registravimas
app.use("/users/", user);
app.use("/posts/", posts);

//Middleware priskyrimas (tarpininkas), awaitai jau padaryti viduje
//upload.single() - naudojamas vienam failui ikelti
// app.post("/files" - upload.single("nuotrauka"), (req, res) => {
//upload.array() - naudojamas keliems failams ikelti
// app.post("/files", upload.array("nuotrauka", 2), (req, res) => {
//upload.fields() - naudojama keliems failams skirtingomis name reiksmemis
// Nurodomi laukeliu pavadinimai (name) ir pasirinktinai maksimalus kiekis
// upload.fields([{ name: "nuotrauka", maxCount: 2 }, { name: "failas", maxCount: 2 }])
// app.post(
//   "/files",
//   upload.fields([{ name: "nuotrauka" }, { name: "failas" }]),
//   (req, res) => {
//     res.send("Failas sėkmingai įkeltas");
//   }
// );

// Serverio paleidimas 3000 porte
app.listen(3000);
