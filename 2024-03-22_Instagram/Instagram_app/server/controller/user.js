import { Router } from "express";
import User from "../model/user.js";
import upload from "../middleware/multer.js";
import bcrypt from "bcrypt";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    res.json(
      await User.findById(req.params.id).select([
        "user_name",
        "photo",
        "bio",
        "email",
      ])
    );
  } catch (e) {
    console.log(e);
    res.status(500).json("Įvyko klaida");
  }
});

router.post("/login", async (req, res) => {
  //Prisijungimui tikimes:
  // emailo ir passwordo
  // console.log(req.body)

  try {
    //findOne metodas grazina tik vieno iraso/vartotojo informacija
    const data = await User.findOne({ email: req.body.email });

    //Jei vartotojas nerastas, nutraukiame funkcija ir graziname zinute
    if (!data) return res.status(401).json("Neteisingas el. pašto adresas");

    // Jei vartotojo slaptazodis nesutampa su ivestu- graziname klaidos koda ir zinute
    if (!(await bcrypt.compare(req.body.password, data.password)))
      return res.status(401).json("Neteisingas slaptažodis");

    //priskiriame vartotojo informacija prie sesijos
    req.session.user = {
      _id: data._id,
      user_name: data.user_name,
      photo: data.photo,
      bio: data.bio,
      email: data.email,
    };

    // Išsiunčiame vartotojo duomenis
    res.json(req.session.user);
  } catch {
    // Grąžinamas atsakymas įvykus klaidai
    res.status(500).json("Įvyko klaida prisijungiant");
  }
});

router.post("/register", upload.single("photo"), async (req, res) => {
  // res.send("veikia");
  // Tikrinsime, ar ivyks klaida
  try {
    //Jeigu turime persiunciama nuotrauka
    if (req.file) req.body.photo = req.file.filename; // Priskiriame failo pavadinima prie i mongodb irasomu duomenu

    //Slaptazodzio sifravimas
    // hash - yra sifruotas stringas
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // sukuriame vartotoja
    await User.create(req.body);

    //grazinamae zinute
    res.json("Vartotojas sekmingai sukurtas");
  } catch (e) {
    //ivykus klaidai graziname klaidos koda ir zinute
    res.status(500).json("Registruojant vartotoją įvyko klaida");
  }
});

export default router;
